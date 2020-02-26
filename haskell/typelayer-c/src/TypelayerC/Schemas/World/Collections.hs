{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.World.Collections where
import qualified TypelayerC.Schemas.World.Dynamic as TypelayerCSchemasWorldDynamic
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerCommon.Collections as TypelayerCommonCollections
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data FileKV = 
    FileKV
        { fileKVKey :: TypelayerCommonTypes.Text
        , fileKVValue :: TypelayerCSchemasWorldStructures.File
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => FileCollection a where
    fileCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    fileCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [FileKV]
    fileCollectionSave :: a -> [FileKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    fileCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [FileKV]


data PackedFileCollection where
    PackedFileCollection :: FileCollection a => a -> PackedFileCollection
deriving instance Show PackedFileCollection
deriving instance TypelayerCommonTypes.Typeable PackedFileCollection
instance Eq PackedFileCollection where
    (==) (PackedFileCollection a) (PackedFileCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance FileCollection PackedFileCollection where
    fileCollectionDelete (PackedFileCollection x) toDelete = fileCollectionDelete x toDelete
    fileCollectionFetch (PackedFileCollection x) toFetch = fileCollectionFetch x toFetch
    fileCollectionSave (PackedFileCollection x) toSave = fileCollectionSave x toSave
    fileCollectionSlice (PackedFileCollection x) offset count = fileCollectionSlice x offset count

data FileDynamicCollection = 
    FileDynamicCollection
    { fileDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance FileCollection FileDynamicCollection where
    fileCollectionDelete this toDelete = do
        let dynamicObject = (fileDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    fileCollectionFetch this toFetch = do
        let dynamicObject = (fileDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            fileValue <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile newDecoder)
            let appendList0 = ((FileKV{fileKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), fileKVValue=fileValue}):reduceDynamicKvsAcc)
            return appendList0
    fileCollectionSave this toSave = do
        let dynamicObject = (fileDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile newEncoder (fileKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(fileKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    fileCollectionSlice this offset size = do
        let dynamicObject = (fileDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            fileValue <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile newDecoder)
            let appendList0 = ((FileKV{fileKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), fileKVValue=fileValue}):reduceDynamicKvsAcc)
            return appendList0