module TypelayerCommon.Types (
        M.Map(..),
        T.Text(..),
        Typeable(..),
        module TypelayerCommon.Types
) where

import qualified Data.Text as T
import qualified Data.ByteString as BS
import qualified Data.ByteString.Builder as Builder
import qualified Data.Map.Strict as M
import qualified Data.Time.Clock as C
import           Data.Word (Word8)
import           Data.Typeable (Typeable(..))


type DateTime = C.UTCTime
type Character = Word8
type Reader = BS.ByteString
type Binary = BS.ByteString
newtype Builder = Builder Builder.Builder

instance Eq Builder where
    (==) (Builder b) (Builder r) = (Builder.toLazyByteString b) == (Builder.toLazyByteString r)

instance Ord Builder where
    compare (Builder b) (Builder r) = compare (Builder.toLazyByteString b) (Builder.toLazyByteString r)

instance Show Builder where
    show (Builder b) = show (Builder.toLazyByteString b)
