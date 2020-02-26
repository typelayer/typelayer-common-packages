{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Collections where
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data KeyNotFoundException = 
    KeyNotFoundException
        { keyNotFoundExceptionMessage :: TypelayerCommonTypes.Text
        , keyNotFoundExceptionKey :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError KeyNotFoundException where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(keyNotFoundExceptionMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList [("key", (keyNotFoundExceptionKey x))]), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_collections", TypelayerCommonExceptions.exceptionMetaExceptionType="key_not_found_exception"})

data BinaryKV = 
    BinaryKV
        { binaryKVKey :: TypelayerCommonTypes.Text
        , binaryKVValue :: TypelayerCommonTypes.Binary
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => BinaryCollection a where
    binaryCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    binaryCollectionEncoding :: a -> TypelayerCommonPrelude.ExecuteM TypelayerCommonDynamic.PackedEncoding
    binaryCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [BinaryKV]
    binaryCollectionSave :: a -> [BinaryKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    binaryCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [BinaryKV]


data PackedBinaryCollection where
    PackedBinaryCollection :: BinaryCollection a => a -> PackedBinaryCollection
deriving instance Show PackedBinaryCollection
deriving instance TypelayerCommonTypes.Typeable PackedBinaryCollection
instance Eq PackedBinaryCollection where
    (==) (PackedBinaryCollection a) (PackedBinaryCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance BinaryCollection PackedBinaryCollection where
    binaryCollectionDelete (PackedBinaryCollection x) toDelete = binaryCollectionDelete x toDelete
    binaryCollectionEncoding (PackedBinaryCollection x)  = binaryCollectionEncoding x 
    binaryCollectionFetch (PackedBinaryCollection x) toFetch = binaryCollectionFetch x toFetch
    binaryCollectionSave (PackedBinaryCollection x) toSave = binaryCollectionSave x toSave
    binaryCollectionSlice (PackedBinaryCollection x) offset count = binaryCollectionSlice x offset count