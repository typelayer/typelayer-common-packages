{-# LANGUAGE GADTs #-}
{-# LANGUAGE FlexibleContexts #-}

module TypelayerCommon.Prelude (
    M.Map(..),
    T.Text(..),
    shiftL,
    lift,
    cast,
    IsString(..),
    module TypelayerCommon.Prelude
) where

import           Data.Bits ((.|.), (.&.), shiftL, Bits(..))
import qualified Data.Text as T
import qualified Data.Text.Encoding as T
import qualified Data.ByteString as BS
import qualified Data.ByteString.Unsafe as B
import           Data.String (IsString(..))

import qualified Data.ByteString.Lazy as BSL
import qualified Data.ByteString.Builder as Builder
import qualified Data.Map.Strict as M
import           Control.Monad (foldM)
import qualified Data.Time.Clock as C
import           Data.Time.Clock.POSIX (posixSecondsToUTCTime, utcTimeToPOSIXSeconds)
import           Control.Monad.Except
import           Data.Word (Word8, Word16, Word32, Word64)
import           Data.Int (Int64)
import           Data.Typeable (cast)
import           Control.Monad.Trans (lift)
import Data.Array.ST (newArray, readArray, MArray, STUArray)
import Data.Array.Unsafe (castSTUArray)
import GHC.ST (runST, ST)

import           TypelayerCommon.Exceptions (ExceptionMeta)
import           TypelayerCommon.Types


integerToText :: Integer -> T.Text
integerToText t = T.pack $ show t
{-# INLINE integerToText #-}

bitOr :: Bits a => a -> a -> a
bitOr a b = a .|. b
{-# INLINE bitOr #-}

mapAdd :: M.Map T.Text x -> T.Text -> x -> M.Map T.Text x
mapAdd m k v = M.insert k v m
{-# INLINE mapAdd #-}

mapReduceM :: Monad m => M.Map T.Text x -> acc -> (T.Text -> x -> acc -> m acc) -> m acc
mapReduceM m acc f = foldM (\acc (k, v) -> f k v acc) acc (M.toAscList m)
{-# INLINE mapReduceM #-}

mapReduceWithIndexM :: Monad m => M.Map T.Text x -> acc -> (Integer -> T.Text -> x -> acc -> m acc) -> m acc
mapReduceWithIndexM m acc f = foldM (\acc (ix, (k, v)) -> f ix k v acc) acc $ zip [0..] (M.toAscList m)
{-# INLINE mapReduceWithIndexM #-}

mapFromList :: [(T.Text, v)] -> M.Map T.Text v
mapFromList = M.fromList
{-# INLINE mapFromList #-}

mapSize :: M.Map T.Text a -> Integer
mapSize = fromIntegral . M.size
{-# INLINE mapSize #-}

mapGetDefault :: M.Map T.Text a -> T.Text -> a -> a
mapGetDefault m k d = M.findWithDefault d k m

listReduceM :: Monad m => [x] -> acc -> (Integer -> x -> acc -> m acc) -> m acc
listReduceM l acc f = foldM (\b (ix, a) -> f ix a b) acc (zip [0..] l)
{-# INLINE listReduceM #-}

datetimeFromMillis :: Double -> DateTime
datetimeFromMillis t = posixSecondsToUTCTime $ (fromInteger $ fromIntegral $ round (t / 1000))
{-# INLINE datetimeFromMillis #-}

datetimeToMillis :: DateTime -> Double
datetimeToMillis dt = fromIntegral $ (round . (* 1000)) $ utcTimeToPOSIXSeconds dt
{-# INLINE datetimeToMillis #-}

class IsTypelayerError a where
    toErrorMeta :: a -> ExceptionMeta

instance IsTypelayerError ExceptionMeta where
    toErrorMeta = id

data TypelayerError where
    TypelayerError :: IsTypelayerError a => a -> TypelayerError

instance Show TypelayerError where
    show (TypelayerError e) = show $ toErrorMeta e


type ExecuteM a = ExceptT TypelayerError IO a
type ExecuteIO a = ExceptT TypelayerError IO a


runExecuteM :: ExecuteM a -> IO (Either TypelayerError a)
runExecuteM = runExceptT

throwE :: (Monad m, IsTypelayerError a) => a -> ExceptT TypelayerError m b
throwE = throwError . TypelayerError

binaryLength :: Binary -> Integer
binaryLength = fromIntegral . BS.length
{-# INLINE binaryLength #-}

compareUint8Array ::  Binary ->  Binary -> Integer
compareUint8Array b l =
    case compare b l of
        EQ -> 0
        LT -> -1
        GT -> 1
{-# INLINE compareUint8Array #-}

textByteSize :: T.Text -> Integer
textByteSize = fromIntegral . T.length
{-# INLINE textByteSize #-}

textToBinary :: T.Text -> Binary
textToBinary = T.encodeUtf8
{-# INLINE textToBinary #-}

readerIndex :: Reader -> Integer -> Character
readerIndex bs i = BS.index bs (fromIntegral i)
{-# INLINE readerIndex #-}

readerInt64 :: Reader -> Integer -> Integer
readerInt64 s index = fromIntegral ((fromIntegral (asWord :: Word64)) :: Int64)
  where intIndex = fromIntegral index
        asWord = readerWord s index
{-# INLINE readerInt64 #-}

readerWord :: Reader -> Integer -> Word64
readerWord s index =
        (fromIntegral (s `B.unsafeIndex` intIndex) `shiftl_w64` 56) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 1)) `shiftl_w64` 48) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 2)) `shiftl_w64` 40) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 3)) `shiftl_w64` 32) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 4)) `shiftl_w64` 24) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 5)) `shiftl_w64` 16) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 6)) `shiftl_w64`  8) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 7)) )
    where intIndex = fromIntegral index
{-# INLINE readerWord #-}

-- | Reinterpret-casts a `Word64` to a `Double`.
wordToDouble :: Word64 -> Double
wordToDouble x = runST (castMArray x)
{-# INLINE wordToDouble #-}

castMArray :: (MArray (STUArray s) a (ST s),
         MArray (STUArray s) b (ST s)) => a -> ST s b
castMArray x = newArray (0 :: Int, 0) x >>= castSTUArray >>= flip readArray 0
{-# INLINE castMArray #-}

readerDecimal :: Reader -> Integer -> Integer -> Integer
readerDecimal s index len = bsToIntegerSimple (readerSliceBinary s index len)
{-# INLINE readerDecimal #-}

readerDecimalDouble :: Reader -> Integer -> Integer -> Double
readerDecimalDouble s index len = undefined
{-# INLINE readerDecimalDouble #-}

readerFloat64 :: Reader -> Integer -> Double
readerFloat64 s index = wordToDouble (readerWord s index)
{-# INLINE readerFloat64 #-}

readerUInt32 :: Reader -> Integer -> Integer
readerUInt32 s index =
    fromIntegral $
        (fromIntegral (s `B.unsafeIndex` intIndex) `shiftl_w32` 24) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 1)) `shiftl_w32` 16) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 2)) `shiftl_w32`  8) .|.
        (fromIntegral (s `B.unsafeIndex` (intIndex + 3)))
  where intIndex = fromIntegral index
{-# INLINE readerUInt32 #-}


readerSliceString :: Reader -> Integer -> Integer -> T.Text
readerSliceString r offset toTake = T.decodeUtf8 $ readerSliceBinary r offset toTake
{-# INLINE readerSliceString #-}

readerSliceBinary :: Reader -> Integer -> Integer -> Binary
readerSliceBinary r offset toTake = BS.take (fromIntegral toTake) (BS.drop (fromIntegral offset) r)
{-# INLINE readerSliceBinary #-}

writerPutChar :: Builder -> Character -> Builder
writerPutChar (Builder w) b = Builder $ w <> (Builder.word8 b)
{-# INLINE writerPutChar #-}

writerPutBinary :: Builder -> BS.ByteString -> Builder
writerPutBinary (Builder w) b = Builder $ w <> (Builder.byteString b)
{-# INLINE writerPutBinary #-}

writerPutText :: Builder -> T.Text -> Builder
writerPutText (Builder w) t = Builder $ w <> (Builder.byteString $ T.encodeUtf8 t)
{-# INLINE writerPutText #-}

writerPutInt64 :: Builder -> Integer -> Builder
writerPutInt64 (Builder w) t = Builder $ w <> (Builder.int64BE $ fromIntegral t)
{-# INLINE writerPutInt64 #-}

writerPutUInt16 :: Builder -> Integer -> Builder
writerPutUInt16 (Builder w) t = Builder $ w <> (Builder.word16BE $ fromIntegral t)
{-# INLINE writerPutUInt16 #-}

writerPutUInt32 :: Builder -> Integer -> Builder
writerPutUInt32 (Builder w) t = Builder $ w <> (Builder.word32BE $ fromIntegral t)
{-# INLINE writerPutUInt32 #-}

writerPutFloat64 :: Builder -> Double -> Builder
writerPutFloat64 (Builder w) t = Builder $ w <> (Builder.doubleBE t)
{-# INLINE writerPutFloat64 #-}


writerPutDecimal :: Builder -> Integer -> Builder
writerPutDecimal (Builder w) d = Builder $ w <> (Builder.integerDec d)
{-# INLINE writerPutDecimal #-}

writerPutDecimalDouble :: Builder -> Double -> Builder
writerPutDecimalDouble (Builder w) d = Builder $ w <> (Builder.doubleDec d)
{-# INLINE writerPutDecimalDouble #-}


writerToBinary :: Builder -> BS.ByteString
writerToBinary (Builder w) = BSL.toStrict (Builder.toLazyByteString w)
{-# INLINE writerToBinary #-}

writerNew :: Builder
writerNew = Builder $ mempty
{-# INLINE writerNew #-}

shiftl_w16 :: Word16 -> Int -> Word16
shiftl_w32 :: Word32 -> Int -> Word32
shiftl_w64 :: Word64 -> Int -> Word64
shiftl_w16 = shiftL
shiftl_w32 = shiftL
shiftl_w64 = shiftL

bsToIntegerSimple :: BS.ByteString -> Integer
bsToIntegerSimple bs =
        if (BS.head bs == 0x2D)
        then -1 * BS.foldl' step 0 (BS.tail bs)
        else BS.foldl' step 0 bs
    where step a b = a * 10 + fromIntegral (b - 48) -- 48 = '0'

-- http://hackage.haskell.org/package/aeson-1.4.6.0/docs/src/Data.Aeson.Parser.Internal.html#bsToInteger
