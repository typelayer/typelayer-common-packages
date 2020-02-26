{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.Definitions.Collections where
import qualified TypelayerC.Schemas.Definitions.Dynamic as TypelayerCSchemasDefinitionsDynamic
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerCommon.Collections as TypelayerCommonCollections
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data ApplyChangesProxyKV = 
    ApplyChangesProxyKV
        { applyChangesProxyKVKey :: TypelayerCommonTypes.Text
        , applyChangesProxyKVValue :: TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ApplyChangesProxyCollection a where
    applyChangesProxyCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    applyChangesProxyCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ApplyChangesProxyKV]
    applyChangesProxyCollectionSave :: a -> [ApplyChangesProxyKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    applyChangesProxyCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ApplyChangesProxyKV]


data PackedApplyChangesProxyCollection where
    PackedApplyChangesProxyCollection :: ApplyChangesProxyCollection a => a -> PackedApplyChangesProxyCollection
deriving instance Show PackedApplyChangesProxyCollection
deriving instance TypelayerCommonTypes.Typeable PackedApplyChangesProxyCollection
instance Eq PackedApplyChangesProxyCollection where
    (==) (PackedApplyChangesProxyCollection a) (PackedApplyChangesProxyCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ApplyChangesProxyCollection PackedApplyChangesProxyCollection where
    applyChangesProxyCollectionDelete (PackedApplyChangesProxyCollection x) toDelete = applyChangesProxyCollectionDelete x toDelete
    applyChangesProxyCollectionFetch (PackedApplyChangesProxyCollection x) toFetch = applyChangesProxyCollectionFetch x toFetch
    applyChangesProxyCollectionSave (PackedApplyChangesProxyCollection x) toSave = applyChangesProxyCollectionSave x toSave
    applyChangesProxyCollectionSlice (PackedApplyChangesProxyCollection x) offset count = applyChangesProxyCollectionSlice x offset count

data ApplyChangesProxyDynamicCollection = 
    ApplyChangesProxyDynamicCollection
    { applyChangesProxyDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ApplyChangesProxyCollection ApplyChangesProxyDynamicCollection where
    applyChangesProxyCollectionDelete this toDelete = do
        let dynamicObject = (applyChangesProxyDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    applyChangesProxyCollectionFetch this toFetch = do
        let dynamicObject = (applyChangesProxyDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            applyChangesProxyValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy newDecoder)
            let appendList0 = ((ApplyChangesProxyKV{applyChangesProxyKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), applyChangesProxyKVValue=applyChangesProxyValue}):reduceDynamicKvsAcc)
            return appendList0
    applyChangesProxyCollectionSave this toSave = do
        let dynamicObject = (applyChangesProxyDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy newEncoder (applyChangesProxyKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(applyChangesProxyKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    applyChangesProxyCollectionSlice this offset size = do
        let dynamicObject = (applyChangesProxyDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            applyChangesProxyValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy newDecoder)
            let appendList0 = ((ApplyChangesProxyKV{applyChangesProxyKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), applyChangesProxyKVValue=applyChangesProxyValue}):reduceDynamicKvsAcc)
            return appendList0

data BackendKV = 
    BackendKV
        { backendKVKey :: TypelayerCommonTypes.Text
        , backendKVValue :: TypelayerCSchemasDefinitionsStructures.Backend
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => BackendCollection a where
    backendCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    backendCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [BackendKV]
    backendCollectionSave :: a -> [BackendKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    backendCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [BackendKV]


data PackedBackendCollection where
    PackedBackendCollection :: BackendCollection a => a -> PackedBackendCollection
deriving instance Show PackedBackendCollection
deriving instance TypelayerCommonTypes.Typeable PackedBackendCollection
instance Eq PackedBackendCollection where
    (==) (PackedBackendCollection a) (PackedBackendCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance BackendCollection PackedBackendCollection where
    backendCollectionDelete (PackedBackendCollection x) toDelete = backendCollectionDelete x toDelete
    backendCollectionFetch (PackedBackendCollection x) toFetch = backendCollectionFetch x toFetch
    backendCollectionSave (PackedBackendCollection x) toSave = backendCollectionSave x toSave
    backendCollectionSlice (PackedBackendCollection x) offset count = backendCollectionSlice x offset count

data BackendDynamicCollection = 
    BackendDynamicCollection
    { backendDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance BackendCollection BackendDynamicCollection where
    backendCollectionDelete this toDelete = do
        let dynamicObject = (backendDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    backendCollectionFetch this toFetch = do
        let dynamicObject = (backendDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            backendValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend newDecoder)
            let appendList0 = ((BackendKV{backendKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), backendKVValue=backendValue}):reduceDynamicKvsAcc)
            return appendList0
    backendCollectionSave this toSave = do
        let dynamicObject = (backendDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutBackend newEncoder (backendKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(backendKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    backendCollectionSlice this offset size = do
        let dynamicObject = (backendDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            backendValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend newDecoder)
            let appendList0 = ((BackendKV{backendKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), backendKVValue=backendValue}):reduceDynamicKvsAcc)
            return appendList0

data BasicTypeKV = 
    BasicTypeKV
        { basicTypeKVKey :: TypelayerCommonTypes.Text
        , basicTypeKVValue :: TypelayerCSchemasDefinitionsStructures.BasicType
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => BasicTypeCollection a where
    basicTypeCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    basicTypeCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [BasicTypeKV]
    basicTypeCollectionSave :: a -> [BasicTypeKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    basicTypeCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [BasicTypeKV]


data PackedBasicTypeCollection where
    PackedBasicTypeCollection :: BasicTypeCollection a => a -> PackedBasicTypeCollection
deriving instance Show PackedBasicTypeCollection
deriving instance TypelayerCommonTypes.Typeable PackedBasicTypeCollection
instance Eq PackedBasicTypeCollection where
    (==) (PackedBasicTypeCollection a) (PackedBasicTypeCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance BasicTypeCollection PackedBasicTypeCollection where
    basicTypeCollectionDelete (PackedBasicTypeCollection x) toDelete = basicTypeCollectionDelete x toDelete
    basicTypeCollectionFetch (PackedBasicTypeCollection x) toFetch = basicTypeCollectionFetch x toFetch
    basicTypeCollectionSave (PackedBasicTypeCollection x) toSave = basicTypeCollectionSave x toSave
    basicTypeCollectionSlice (PackedBasicTypeCollection x) offset count = basicTypeCollectionSlice x offset count

data BasicTypeDynamicCollection = 
    BasicTypeDynamicCollection
    { basicTypeDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance BasicTypeCollection BasicTypeDynamicCollection where
    basicTypeCollectionDelete this toDelete = do
        let dynamicObject = (basicTypeDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    basicTypeCollectionFetch this toFetch = do
        let dynamicObject = (basicTypeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            basicTypeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType newDecoder)
            let appendList0 = ((BasicTypeKV{basicTypeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), basicTypeKVValue=basicTypeValue}):reduceDynamicKvsAcc)
            return appendList0
    basicTypeCollectionSave this toSave = do
        let dynamicObject = (basicTypeDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutBasicType newEncoder (basicTypeKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(basicTypeKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    basicTypeCollectionSlice this offset size = do
        let dynamicObject = (basicTypeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            basicTypeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType newDecoder)
            let appendList0 = ((BasicTypeKV{basicTypeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), basicTypeKVValue=basicTypeValue}):reduceDynamicKvsAcc)
            return appendList0

data ChangeKV = 
    ChangeKV
        { changeKVKey :: TypelayerCommonTypes.Text
        , changeKVValue :: TypelayerCSchemasDefinitionsStructures.Change
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ChangeCollection a where
    changeCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    changeCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ChangeKV]
    changeCollectionSave :: a -> [ChangeKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    changeCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ChangeKV]


data PackedChangeCollection where
    PackedChangeCollection :: ChangeCollection a => a -> PackedChangeCollection
deriving instance Show PackedChangeCollection
deriving instance TypelayerCommonTypes.Typeable PackedChangeCollection
instance Eq PackedChangeCollection where
    (==) (PackedChangeCollection a) (PackedChangeCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ChangeCollection PackedChangeCollection where
    changeCollectionDelete (PackedChangeCollection x) toDelete = changeCollectionDelete x toDelete
    changeCollectionFetch (PackedChangeCollection x) toFetch = changeCollectionFetch x toFetch
    changeCollectionSave (PackedChangeCollection x) toSave = changeCollectionSave x toSave
    changeCollectionSlice (PackedChangeCollection x) offset count = changeCollectionSlice x offset count

data ChangeDynamicCollection = 
    ChangeDynamicCollection
    { changeDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ChangeCollection ChangeDynamicCollection where
    changeCollectionDelete this toDelete = do
        let dynamicObject = (changeDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    changeCollectionFetch this toFetch = do
        let dynamicObject = (changeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            changeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange newDecoder)
            let appendList0 = ((ChangeKV{changeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), changeKVValue=changeValue}):reduceDynamicKvsAcc)
            return appendList0
    changeCollectionSave this toSave = do
        let dynamicObject = (changeDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange newEncoder (changeKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(changeKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    changeCollectionSlice this offset size = do
        let dynamicObject = (changeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            changeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange newDecoder)
            let appendList0 = ((ChangeKV{changeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), changeKVValue=changeValue}):reduceDynamicKvsAcc)
            return appendList0

data ChangesetKV = 
    ChangesetKV
        { changesetKVKey :: TypelayerCommonTypes.Text
        , changesetKVValue :: TypelayerCSchemasDefinitionsStructures.Changeset
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ChangesetCollection a where
    changesetCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    changesetCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ChangesetKV]
    changesetCollectionSave :: a -> [ChangesetKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    changesetCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ChangesetKV]


data PackedChangesetCollection where
    PackedChangesetCollection :: ChangesetCollection a => a -> PackedChangesetCollection
deriving instance Show PackedChangesetCollection
deriving instance TypelayerCommonTypes.Typeable PackedChangesetCollection
instance Eq PackedChangesetCollection where
    (==) (PackedChangesetCollection a) (PackedChangesetCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ChangesetCollection PackedChangesetCollection where
    changesetCollectionDelete (PackedChangesetCollection x) toDelete = changesetCollectionDelete x toDelete
    changesetCollectionFetch (PackedChangesetCollection x) toFetch = changesetCollectionFetch x toFetch
    changesetCollectionSave (PackedChangesetCollection x) toSave = changesetCollectionSave x toSave
    changesetCollectionSlice (PackedChangesetCollection x) offset count = changesetCollectionSlice x offset count

data ChangesetDynamicCollection = 
    ChangesetDynamicCollection
    { changesetDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ChangesetCollection ChangesetDynamicCollection where
    changesetCollectionDelete this toDelete = do
        let dynamicObject = (changesetDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    changesetCollectionFetch this toFetch = do
        let dynamicObject = (changesetDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            changesetValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset newDecoder)
            let appendList0 = ((ChangesetKV{changesetKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), changesetKVValue=changesetValue}):reduceDynamicKvsAcc)
            return appendList0
    changesetCollectionSave this toSave = do
        let dynamicObject = (changesetDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset newEncoder (changesetKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(changesetKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    changesetCollectionSlice this offset size = do
        let dynamicObject = (changesetDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            changesetValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset newDecoder)
            let appendList0 = ((ChangesetKV{changesetKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), changesetKVValue=changesetValue}):reduceDynamicKvsAcc)
            return appendList0

data CollectionKV = 
    CollectionKV
        { collectionKVKey :: TypelayerCommonTypes.Text
        , collectionKVValue :: TypelayerCSchemasDefinitionsStructures.Collection
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => CollectionCollection a where
    collectionCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    collectionCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [CollectionKV]
    collectionCollectionSave :: a -> [CollectionKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    collectionCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [CollectionKV]


data PackedCollectionCollection where
    PackedCollectionCollection :: CollectionCollection a => a -> PackedCollectionCollection
deriving instance Show PackedCollectionCollection
deriving instance TypelayerCommonTypes.Typeable PackedCollectionCollection
instance Eq PackedCollectionCollection where
    (==) (PackedCollectionCollection a) (PackedCollectionCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance CollectionCollection PackedCollectionCollection where
    collectionCollectionDelete (PackedCollectionCollection x) toDelete = collectionCollectionDelete x toDelete
    collectionCollectionFetch (PackedCollectionCollection x) toFetch = collectionCollectionFetch x toFetch
    collectionCollectionSave (PackedCollectionCollection x) toSave = collectionCollectionSave x toSave
    collectionCollectionSlice (PackedCollectionCollection x) offset count = collectionCollectionSlice x offset count

data CollectionDynamicCollection = 
    CollectionDynamicCollection
    { collectionDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance CollectionCollection CollectionDynamicCollection where
    collectionCollectionDelete this toDelete = do
        let dynamicObject = (collectionDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    collectionCollectionFetch this toFetch = do
        let dynamicObject = (collectionDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            collectionValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection newDecoder)
            let appendList0 = ((CollectionKV{collectionKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), collectionKVValue=collectionValue}):reduceDynamicKvsAcc)
            return appendList0
    collectionCollectionSave this toSave = do
        let dynamicObject = (collectionDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection newEncoder (collectionKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(collectionKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    collectionCollectionSlice this offset size = do
        let dynamicObject = (collectionDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            collectionValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection newDecoder)
            let appendList0 = ((CollectionKV{collectionKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), collectionKVValue=collectionValue}):reduceDynamicKvsAcc)
            return appendList0

data ColumnKV = 
    ColumnKV
        { columnKVKey :: TypelayerCommonTypes.Text
        , columnKVValue :: TypelayerCSchemasDefinitionsStructures.Column
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ColumnCollection a where
    columnCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    columnCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ColumnKV]
    columnCollectionSave :: a -> [ColumnKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    columnCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ColumnKV]


data PackedColumnCollection where
    PackedColumnCollection :: ColumnCollection a => a -> PackedColumnCollection
deriving instance Show PackedColumnCollection
deriving instance TypelayerCommonTypes.Typeable PackedColumnCollection
instance Eq PackedColumnCollection where
    (==) (PackedColumnCollection a) (PackedColumnCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ColumnCollection PackedColumnCollection where
    columnCollectionDelete (PackedColumnCollection x) toDelete = columnCollectionDelete x toDelete
    columnCollectionFetch (PackedColumnCollection x) toFetch = columnCollectionFetch x toFetch
    columnCollectionSave (PackedColumnCollection x) toSave = columnCollectionSave x toSave
    columnCollectionSlice (PackedColumnCollection x) offset count = columnCollectionSlice x offset count

data ColumnDynamicCollection = 
    ColumnDynamicCollection
    { columnDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ColumnCollection ColumnDynamicCollection where
    columnCollectionDelete this toDelete = do
        let dynamicObject = (columnDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    columnCollectionFetch this toFetch = do
        let dynamicObject = (columnDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            columnValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn newDecoder)
            let appendList0 = ((ColumnKV{columnKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), columnKVValue=columnValue}):reduceDynamicKvsAcc)
            return appendList0
    columnCollectionSave this toSave = do
        let dynamicObject = (columnDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn newEncoder (columnKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(columnKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    columnCollectionSlice this offset size = do
        let dynamicObject = (columnDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            columnValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn newDecoder)
            let appendList0 = ((ColumnKV{columnKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), columnKVValue=columnValue}):reduceDynamicKvsAcc)
            return appendList0

data ColumnTypeKV = 
    ColumnTypeKV
        { columnTypeKVKey :: TypelayerCommonTypes.Text
        , columnTypeKVValue :: TypelayerCSchemasDefinitionsStructures.ColumnType
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ColumnTypeCollection a where
    columnTypeCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    columnTypeCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ColumnTypeKV]
    columnTypeCollectionSave :: a -> [ColumnTypeKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    columnTypeCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ColumnTypeKV]


data PackedColumnTypeCollection where
    PackedColumnTypeCollection :: ColumnTypeCollection a => a -> PackedColumnTypeCollection
deriving instance Show PackedColumnTypeCollection
deriving instance TypelayerCommonTypes.Typeable PackedColumnTypeCollection
instance Eq PackedColumnTypeCollection where
    (==) (PackedColumnTypeCollection a) (PackedColumnTypeCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ColumnTypeCollection PackedColumnTypeCollection where
    columnTypeCollectionDelete (PackedColumnTypeCollection x) toDelete = columnTypeCollectionDelete x toDelete
    columnTypeCollectionFetch (PackedColumnTypeCollection x) toFetch = columnTypeCollectionFetch x toFetch
    columnTypeCollectionSave (PackedColumnTypeCollection x) toSave = columnTypeCollectionSave x toSave
    columnTypeCollectionSlice (PackedColumnTypeCollection x) offset count = columnTypeCollectionSlice x offset count

data ColumnTypeDynamicCollection = 
    ColumnTypeDynamicCollection
    { columnTypeDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ColumnTypeCollection ColumnTypeDynamicCollection where
    columnTypeCollectionDelete this toDelete = do
        let dynamicObject = (columnTypeDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    columnTypeCollectionFetch this toFetch = do
        let dynamicObject = (columnTypeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            columnTypeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType newDecoder)
            let appendList0 = ((ColumnTypeKV{columnTypeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), columnTypeKVValue=columnTypeValue}):reduceDynamicKvsAcc)
            return appendList0
    columnTypeCollectionSave this toSave = do
        let dynamicObject = (columnTypeDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumnType newEncoder (columnTypeKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(columnTypeKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    columnTypeCollectionSlice this offset size = do
        let dynamicObject = (columnTypeDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            columnTypeValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType newDecoder)
            let appendList0 = ((ColumnTypeKV{columnTypeKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), columnTypeKVValue=columnTypeValue}):reduceDynamicKvsAcc)
            return appendList0

data ConstructorKV = 
    ConstructorKV
        { constructorKVKey :: TypelayerCommonTypes.Text
        , constructorKVValue :: TypelayerCSchemasDefinitionsStructures.Constructor
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ConstructorCollection a where
    constructorCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    constructorCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ConstructorKV]
    constructorCollectionSave :: a -> [ConstructorKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    constructorCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ConstructorKV]


data PackedConstructorCollection where
    PackedConstructorCollection :: ConstructorCollection a => a -> PackedConstructorCollection
deriving instance Show PackedConstructorCollection
deriving instance TypelayerCommonTypes.Typeable PackedConstructorCollection
instance Eq PackedConstructorCollection where
    (==) (PackedConstructorCollection a) (PackedConstructorCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ConstructorCollection PackedConstructorCollection where
    constructorCollectionDelete (PackedConstructorCollection x) toDelete = constructorCollectionDelete x toDelete
    constructorCollectionFetch (PackedConstructorCollection x) toFetch = constructorCollectionFetch x toFetch
    constructorCollectionSave (PackedConstructorCollection x) toSave = constructorCollectionSave x toSave
    constructorCollectionSlice (PackedConstructorCollection x) offset count = constructorCollectionSlice x offset count

data ConstructorDynamicCollection = 
    ConstructorDynamicCollection
    { constructorDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ConstructorCollection ConstructorDynamicCollection where
    constructorCollectionDelete this toDelete = do
        let dynamicObject = (constructorDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    constructorCollectionFetch this toFetch = do
        let dynamicObject = (constructorDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            constructorValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor newDecoder)
            let appendList0 = ((ConstructorKV{constructorKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), constructorKVValue=constructorValue}):reduceDynamicKvsAcc)
            return appendList0
    constructorCollectionSave this toSave = do
        let dynamicObject = (constructorDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor newEncoder (constructorKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(constructorKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    constructorCollectionSlice this offset size = do
        let dynamicObject = (constructorDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            constructorValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor newDecoder)
            let appendList0 = ((ConstructorKV{constructorKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), constructorKVValue=constructorValue}):reduceDynamicKvsAcc)
            return appendList0

data FieldKV = 
    FieldKV
        { fieldKVKey :: TypelayerCommonTypes.Text
        , fieldKVValue :: TypelayerCSchemasDefinitionsStructures.Field
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => FieldCollection a where
    fieldCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    fieldCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [FieldKV]
    fieldCollectionSave :: a -> [FieldKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    fieldCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [FieldKV]


data PackedFieldCollection where
    PackedFieldCollection :: FieldCollection a => a -> PackedFieldCollection
deriving instance Show PackedFieldCollection
deriving instance TypelayerCommonTypes.Typeable PackedFieldCollection
instance Eq PackedFieldCollection where
    (==) (PackedFieldCollection a) (PackedFieldCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance FieldCollection PackedFieldCollection where
    fieldCollectionDelete (PackedFieldCollection x) toDelete = fieldCollectionDelete x toDelete
    fieldCollectionFetch (PackedFieldCollection x) toFetch = fieldCollectionFetch x toFetch
    fieldCollectionSave (PackedFieldCollection x) toSave = fieldCollectionSave x toSave
    fieldCollectionSlice (PackedFieldCollection x) offset count = fieldCollectionSlice x offset count

data FieldDynamicCollection = 
    FieldDynamicCollection
    { fieldDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance FieldCollection FieldDynamicCollection where
    fieldCollectionDelete this toDelete = do
        let dynamicObject = (fieldDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    fieldCollectionFetch this toFetch = do
        let dynamicObject = (fieldDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            fieldValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField newDecoder)
            let appendList0 = ((FieldKV{fieldKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), fieldKVValue=fieldValue}):reduceDynamicKvsAcc)
            return appendList0
    fieldCollectionSave this toSave = do
        let dynamicObject = (fieldDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField newEncoder (fieldKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(fieldKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    fieldCollectionSlice this offset size = do
        let dynamicObject = (fieldDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            fieldValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField newDecoder)
            let appendList0 = ((FieldKV{fieldKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), fieldKVValue=fieldValue}):reduceDynamicKvsAcc)
            return appendList0

data FunctionKV = 
    FunctionKV
        { functionKVKey :: TypelayerCommonTypes.Text
        , functionKVValue :: TypelayerCSchemasDefinitionsStructures.Function
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => FunctionCollection a where
    functionCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    functionCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [FunctionKV]
    functionCollectionSave :: a -> [FunctionKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    functionCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [FunctionKV]


data PackedFunctionCollection where
    PackedFunctionCollection :: FunctionCollection a => a -> PackedFunctionCollection
deriving instance Show PackedFunctionCollection
deriving instance TypelayerCommonTypes.Typeable PackedFunctionCollection
instance Eq PackedFunctionCollection where
    (==) (PackedFunctionCollection a) (PackedFunctionCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance FunctionCollection PackedFunctionCollection where
    functionCollectionDelete (PackedFunctionCollection x) toDelete = functionCollectionDelete x toDelete
    functionCollectionFetch (PackedFunctionCollection x) toFetch = functionCollectionFetch x toFetch
    functionCollectionSave (PackedFunctionCollection x) toSave = functionCollectionSave x toSave
    functionCollectionSlice (PackedFunctionCollection x) offset count = functionCollectionSlice x offset count

data FunctionDynamicCollection = 
    FunctionDynamicCollection
    { functionDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance FunctionCollection FunctionDynamicCollection where
    functionCollectionDelete this toDelete = do
        let dynamicObject = (functionDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    functionCollectionFetch this toFetch = do
        let dynamicObject = (functionDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            functionValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction newDecoder)
            let appendList0 = ((FunctionKV{functionKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), functionKVValue=functionValue}):reduceDynamicKvsAcc)
            return appendList0
    functionCollectionSave this toSave = do
        let dynamicObject = (functionDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction newEncoder (functionKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(functionKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    functionCollectionSlice this offset size = do
        let dynamicObject = (functionDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            functionValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction newDecoder)
            let appendList0 = ((FunctionKV{functionKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), functionKVValue=functionValue}):reduceDynamicKvsAcc)
            return appendList0

data LanguageKV = 
    LanguageKV
        { languageKVKey :: TypelayerCommonTypes.Text
        , languageKVValue :: TypelayerCSchemasDefinitionsStructures.Language
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => LanguageCollection a where
    languageCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    languageCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [LanguageKV]
    languageCollectionSave :: a -> [LanguageKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    languageCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [LanguageKV]


data PackedLanguageCollection where
    PackedLanguageCollection :: LanguageCollection a => a -> PackedLanguageCollection
deriving instance Show PackedLanguageCollection
deriving instance TypelayerCommonTypes.Typeable PackedLanguageCollection
instance Eq PackedLanguageCollection where
    (==) (PackedLanguageCollection a) (PackedLanguageCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance LanguageCollection PackedLanguageCollection where
    languageCollectionDelete (PackedLanguageCollection x) toDelete = languageCollectionDelete x toDelete
    languageCollectionFetch (PackedLanguageCollection x) toFetch = languageCollectionFetch x toFetch
    languageCollectionSave (PackedLanguageCollection x) toSave = languageCollectionSave x toSave
    languageCollectionSlice (PackedLanguageCollection x) offset count = languageCollectionSlice x offset count

data LanguageDynamicCollection = 
    LanguageDynamicCollection
    { languageDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance LanguageCollection LanguageDynamicCollection where
    languageCollectionDelete this toDelete = do
        let dynamicObject = (languageDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    languageCollectionFetch this toFetch = do
        let dynamicObject = (languageDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            languageValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage newDecoder)
            let appendList0 = ((LanguageKV{languageKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), languageKVValue=languageValue}):reduceDynamicKvsAcc)
            return appendList0
    languageCollectionSave this toSave = do
        let dynamicObject = (languageDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutLanguage newEncoder (languageKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(languageKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    languageCollectionSlice this offset size = do
        let dynamicObject = (languageDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            languageValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage newDecoder)
            let appendList0 = ((LanguageKV{languageKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), languageKVValue=languageValue}):reduceDynamicKvsAcc)
            return appendList0

data PackageKV = 
    PackageKV
        { packageKVKey :: TypelayerCommonTypes.Text
        , packageKVValue :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => PackageCollection a where
    packageCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    packageCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [PackageKV]
    packageCollectionSave :: a -> [PackageKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    packageCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [PackageKV]


data PackedPackageCollection where
    PackedPackageCollection :: PackageCollection a => a -> PackedPackageCollection
deriving instance Show PackedPackageCollection
deriving instance TypelayerCommonTypes.Typeable PackedPackageCollection
instance Eq PackedPackageCollection where
    (==) (PackedPackageCollection a) (PackedPackageCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance PackageCollection PackedPackageCollection where
    packageCollectionDelete (PackedPackageCollection x) toDelete = packageCollectionDelete x toDelete
    packageCollectionFetch (PackedPackageCollection x) toFetch = packageCollectionFetch x toFetch
    packageCollectionSave (PackedPackageCollection x) toSave = packageCollectionSave x toSave
    packageCollectionSlice (PackedPackageCollection x) offset count = packageCollectionSlice x offset count

data PackageDynamicCollection = 
    PackageDynamicCollection
    { packageDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance PackageCollection PackageDynamicCollection where
    packageCollectionDelete this toDelete = do
        let dynamicObject = (packageDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    packageCollectionFetch this toFetch = do
        let dynamicObject = (packageDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            packageValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage newDecoder)
            let appendList0 = ((PackageKV{packageKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), packageKVValue=packageValue}):reduceDynamicKvsAcc)
            return appendList0
    packageCollectionSave this toSave = do
        let dynamicObject = (packageDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage newEncoder (packageKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(packageKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    packageCollectionSlice this offset size = do
        let dynamicObject = (packageDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            packageValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage newDecoder)
            let appendList0 = ((PackageKV{packageKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), packageKVValue=packageValue}):reduceDynamicKvsAcc)
            return appendList0

data SchemaKV = 
    SchemaKV
        { schemaKVKey :: TypelayerCommonTypes.Text
        , schemaKVValue :: TypelayerCSchemasDefinitionsStructures.Schema
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => SchemaCollection a where
    schemaCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    schemaCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [SchemaKV]
    schemaCollectionSave :: a -> [SchemaKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    schemaCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [SchemaKV]


data PackedSchemaCollection where
    PackedSchemaCollection :: SchemaCollection a => a -> PackedSchemaCollection
deriving instance Show PackedSchemaCollection
deriving instance TypelayerCommonTypes.Typeable PackedSchemaCollection
instance Eq PackedSchemaCollection where
    (==) (PackedSchemaCollection a) (PackedSchemaCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance SchemaCollection PackedSchemaCollection where
    schemaCollectionDelete (PackedSchemaCollection x) toDelete = schemaCollectionDelete x toDelete
    schemaCollectionFetch (PackedSchemaCollection x) toFetch = schemaCollectionFetch x toFetch
    schemaCollectionSave (PackedSchemaCollection x) toSave = schemaCollectionSave x toSave
    schemaCollectionSlice (PackedSchemaCollection x) offset count = schemaCollectionSlice x offset count

data SchemaDynamicCollection = 
    SchemaDynamicCollection
    { schemaDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance SchemaCollection SchemaDynamicCollection where
    schemaCollectionDelete this toDelete = do
        let dynamicObject = (schemaDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    schemaCollectionFetch this toFetch = do
        let dynamicObject = (schemaDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            schemaValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema newDecoder)
            let appendList0 = ((SchemaKV{schemaKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), schemaKVValue=schemaValue}):reduceDynamicKvsAcc)
            return appendList0
    schemaCollectionSave this toSave = do
        let dynamicObject = (schemaDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema newEncoder (schemaKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(schemaKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    schemaCollectionSlice this offset size = do
        let dynamicObject = (schemaDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            schemaValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema newDecoder)
            let appendList0 = ((SchemaKV{schemaKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), schemaKVValue=schemaValue}):reduceDynamicKvsAcc)
            return appendList0

data SchemaReferenceKV = 
    SchemaReferenceKV
        { schemaReferenceKVKey :: TypelayerCommonTypes.Text
        , schemaReferenceKVValue :: TypelayerCSchemasDefinitionsStructures.SchemaReference
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => SchemaReferenceCollection a where
    schemaReferenceCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    schemaReferenceCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [SchemaReferenceKV]
    schemaReferenceCollectionSave :: a -> [SchemaReferenceKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    schemaReferenceCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [SchemaReferenceKV]


data PackedSchemaReferenceCollection where
    PackedSchemaReferenceCollection :: SchemaReferenceCollection a => a -> PackedSchemaReferenceCollection
deriving instance Show PackedSchemaReferenceCollection
deriving instance TypelayerCommonTypes.Typeable PackedSchemaReferenceCollection
instance Eq PackedSchemaReferenceCollection where
    (==) (PackedSchemaReferenceCollection a) (PackedSchemaReferenceCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance SchemaReferenceCollection PackedSchemaReferenceCollection where
    schemaReferenceCollectionDelete (PackedSchemaReferenceCollection x) toDelete = schemaReferenceCollectionDelete x toDelete
    schemaReferenceCollectionFetch (PackedSchemaReferenceCollection x) toFetch = schemaReferenceCollectionFetch x toFetch
    schemaReferenceCollectionSave (PackedSchemaReferenceCollection x) toSave = schemaReferenceCollectionSave x toSave
    schemaReferenceCollectionSlice (PackedSchemaReferenceCollection x) offset count = schemaReferenceCollectionSlice x offset count

data SchemaReferenceDynamicCollection = 
    SchemaReferenceDynamicCollection
    { schemaReferenceDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance SchemaReferenceCollection SchemaReferenceDynamicCollection where
    schemaReferenceCollectionDelete this toDelete = do
        let dynamicObject = (schemaReferenceDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    schemaReferenceCollectionFetch this toFetch = do
        let dynamicObject = (schemaReferenceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            schemaReferenceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference newDecoder)
            let appendList0 = ((SchemaReferenceKV{schemaReferenceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), schemaReferenceKVValue=schemaReferenceValue}):reduceDynamicKvsAcc)
            return appendList0
    schemaReferenceCollectionSave this toSave = do
        let dynamicObject = (schemaReferenceDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference newEncoder (schemaReferenceKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(schemaReferenceKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    schemaReferenceCollectionSlice this offset size = do
        let dynamicObject = (schemaReferenceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            schemaReferenceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference newDecoder)
            let appendList0 = ((SchemaReferenceKV{schemaReferenceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), schemaReferenceKVValue=schemaReferenceValue}):reduceDynamicKvsAcc)
            return appendList0

data ServiceKV = 
    ServiceKV
        { serviceKVKey :: TypelayerCommonTypes.Text
        , serviceKVValue :: TypelayerCSchemasDefinitionsStructures.Service
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => ServiceCollection a where
    serviceCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    serviceCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [ServiceKV]
    serviceCollectionSave :: a -> [ServiceKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    serviceCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [ServiceKV]


data PackedServiceCollection where
    PackedServiceCollection :: ServiceCollection a => a -> PackedServiceCollection
deriving instance Show PackedServiceCollection
deriving instance TypelayerCommonTypes.Typeable PackedServiceCollection
instance Eq PackedServiceCollection where
    (==) (PackedServiceCollection a) (PackedServiceCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance ServiceCollection PackedServiceCollection where
    serviceCollectionDelete (PackedServiceCollection x) toDelete = serviceCollectionDelete x toDelete
    serviceCollectionFetch (PackedServiceCollection x) toFetch = serviceCollectionFetch x toFetch
    serviceCollectionSave (PackedServiceCollection x) toSave = serviceCollectionSave x toSave
    serviceCollectionSlice (PackedServiceCollection x) offset count = serviceCollectionSlice x offset count

data ServiceDynamicCollection = 
    ServiceDynamicCollection
    { serviceDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance ServiceCollection ServiceDynamicCollection where
    serviceCollectionDelete this toDelete = do
        let dynamicObject = (serviceDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    serviceCollectionFetch this toFetch = do
        let dynamicObject = (serviceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            serviceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService newDecoder)
            let appendList0 = ((ServiceKV{serviceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), serviceKVValue=serviceValue}):reduceDynamicKvsAcc)
            return appendList0
    serviceCollectionSave this toSave = do
        let dynamicObject = (serviceDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService newEncoder (serviceKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(serviceKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    serviceCollectionSlice this offset size = do
        let dynamicObject = (serviceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            serviceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService newDecoder)
            let appendList0 = ((ServiceKV{serviceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), serviceKVValue=serviceValue}):reduceDynamicKvsAcc)
            return appendList0

data StructureKV = 
    StructureKV
        { structureKVKey :: TypelayerCommonTypes.Text
        , structureKVValue :: TypelayerCSchemasDefinitionsStructures.Structure
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => StructureCollection a where
    structureCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    structureCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [StructureKV]
    structureCollectionSave :: a -> [StructureKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    structureCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [StructureKV]


data PackedStructureCollection where
    PackedStructureCollection :: StructureCollection a => a -> PackedStructureCollection
deriving instance Show PackedStructureCollection
deriving instance TypelayerCommonTypes.Typeable PackedStructureCollection
instance Eq PackedStructureCollection where
    (==) (PackedStructureCollection a) (PackedStructureCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance StructureCollection PackedStructureCollection where
    structureCollectionDelete (PackedStructureCollection x) toDelete = structureCollectionDelete x toDelete
    structureCollectionFetch (PackedStructureCollection x) toFetch = structureCollectionFetch x toFetch
    structureCollectionSave (PackedStructureCollection x) toSave = structureCollectionSave x toSave
    structureCollectionSlice (PackedStructureCollection x) offset count = structureCollectionSlice x offset count

data StructureDynamicCollection = 
    StructureDynamicCollection
    { structureDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance StructureCollection StructureDynamicCollection where
    structureCollectionDelete this toDelete = do
        let dynamicObject = (structureDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    structureCollectionFetch this toFetch = do
        let dynamicObject = (structureDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            structureValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure newDecoder)
            let appendList0 = ((StructureKV{structureKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), structureKVValue=structureValue}):reduceDynamicKvsAcc)
            return appendList0
    structureCollectionSave this toSave = do
        let dynamicObject = (structureDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure newEncoder (structureKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(structureKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    structureCollectionSlice this offset size = do
        let dynamicObject = (structureDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            structureValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure newDecoder)
            let appendList0 = ((StructureKV{structureKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), structureKVValue=structureValue}):reduceDynamicKvsAcc)
            return appendList0

data TableKV = 
    TableKV
        { tableKVKey :: TypelayerCommonTypes.Text
        , tableKVValue :: TypelayerCSchemasDefinitionsStructures.Table
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => TableCollection a where
    tableCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    tableCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [TableKV]
    tableCollectionSave :: a -> [TableKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    tableCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [TableKV]


data PackedTableCollection where
    PackedTableCollection :: TableCollection a => a -> PackedTableCollection
deriving instance Show PackedTableCollection
deriving instance TypelayerCommonTypes.Typeable PackedTableCollection
instance Eq PackedTableCollection where
    (==) (PackedTableCollection a) (PackedTableCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance TableCollection PackedTableCollection where
    tableCollectionDelete (PackedTableCollection x) toDelete = tableCollectionDelete x toDelete
    tableCollectionFetch (PackedTableCollection x) toFetch = tableCollectionFetch x toFetch
    tableCollectionSave (PackedTableCollection x) toSave = tableCollectionSave x toSave
    tableCollectionSlice (PackedTableCollection x) offset count = tableCollectionSlice x offset count

data TableDynamicCollection = 
    TableDynamicCollection
    { tableDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance TableCollection TableDynamicCollection where
    tableCollectionDelete this toDelete = do
        let dynamicObject = (tableDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    tableCollectionFetch this toFetch = do
        let dynamicObject = (tableDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            tableValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable newDecoder)
            let appendList0 = ((TableKV{tableKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), tableKVValue=tableValue}):reduceDynamicKvsAcc)
            return appendList0
    tableCollectionSave this toSave = do
        let dynamicObject = (tableDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable newEncoder (tableKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(tableKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    tableCollectionSlice this offset size = do
        let dynamicObject = (tableDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            tableValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable newDecoder)
            let appendList0 = ((TableKV{tableKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), tableKVValue=tableValue}):reduceDynamicKvsAcc)
            return appendList0

data TableReferenceKV = 
    TableReferenceKV
        { tableReferenceKVKey :: TypelayerCommonTypes.Text
        , tableReferenceKVValue :: TypelayerCSchemasDefinitionsStructures.TableReference
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => TableReferenceCollection a where
    tableReferenceCollectionDelete :: a -> [TypelayerCommonTypes.Text] {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    tableReferenceCollectionFetch :: a -> [TypelayerCommonTypes.Text] {-toFetch-} -> TypelayerCommonPrelude.ExecuteIO [TableReferenceKV]
    tableReferenceCollectionSave :: a -> [TableReferenceKV] {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCommonTypes.Text]
    tableReferenceCollectionSlice :: a -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [TableReferenceKV]


data PackedTableReferenceCollection where
    PackedTableReferenceCollection :: TableReferenceCollection a => a -> PackedTableReferenceCollection
deriving instance Show PackedTableReferenceCollection
deriving instance TypelayerCommonTypes.Typeable PackedTableReferenceCollection
instance Eq PackedTableReferenceCollection where
    (==) (PackedTableReferenceCollection a) (PackedTableReferenceCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance TableReferenceCollection PackedTableReferenceCollection where
    tableReferenceCollectionDelete (PackedTableReferenceCollection x) toDelete = tableReferenceCollectionDelete x toDelete
    tableReferenceCollectionFetch (PackedTableReferenceCollection x) toFetch = tableReferenceCollectionFetch x toFetch
    tableReferenceCollectionSave (PackedTableReferenceCollection x) toSave = tableReferenceCollectionSave x toSave
    tableReferenceCollectionSlice (PackedTableReferenceCollection x) offset count = tableReferenceCollectionSlice x offset count

data TableReferenceDynamicCollection = 
    TableReferenceDynamicCollection
    { tableReferenceDynamicCollectionDynamicObj :: TypelayerCommonCollections.PackedBinaryCollection
    }
    deriving (Show, Eq)


instance TableReferenceCollection TableReferenceDynamicCollection where
    tableReferenceCollectionDelete this toDelete = do
        let dynamicObject = (tableReferenceDynamicCollectionDynamicObj this)
        (TypelayerCommonCollections.binaryCollectionDelete dynamicObject toDelete)
    tableReferenceCollectionFetch this toFetch = do
        let dynamicObject = (tableReferenceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionFetch dynamicObject toFetch)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            tableReferenceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference newDecoder)
            let appendList0 = ((TableReferenceKV{tableReferenceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), tableReferenceKVValue=tableReferenceValue}):reduceDynamicKvsAcc)
            return appendList0
    tableReferenceCollectionSave this toSave = do
        let dynamicObject = (tableReferenceDynamicCollectionDynamicObj this)
        dynamicList <- do
            TypelayerCommonPrelude.listReduceM toSave [] $ \convertLoopIndex convertLoopElem convertLoopAcc -> do
                collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
                newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding collectionEncoding )
                elemEncoded0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference newEncoder (tableReferenceKVValue convertLoopElem))
                elemBinary <- (TypelayerCommonDynamic.encoderToBinary elemEncoded0 )
                let appendList0 = ((TypelayerCommonCollections.BinaryKV{TypelayerCommonCollections.binaryKVKey=(tableReferenceKVKey convertLoopElem), TypelayerCommonCollections.binaryKVValue=elemBinary}):convertLoopAcc)
                return appendList0
        (TypelayerCommonCollections.binaryCollectionSave dynamicObject (reverse dynamicList))
    tableReferenceCollectionSlice this offset size = do
        let dynamicObject = (tableReferenceDynamicCollectionDynamicObj this)
        dynamicKvs <- (TypelayerCommonCollections.binaryCollectionSlice dynamicObject offset size)
        TypelayerCommonPrelude.listReduceM dynamicKvs [] $ \reduceDynamicKvsIndex reduceDynamicKvsElem reduceDynamicKvsAcc -> do
            collectionEncoding <- (TypelayerCommonCollections.binaryCollectionEncoding dynamicObject )
            newDecoder <- (TypelayerCommonDynamic.encodingStartDecoding collectionEncoding (TypelayerCommonCollections.binaryKVValue reduceDynamicKvsElem))
            tableReferenceValue <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference newDecoder)
            let appendList0 = ((TableReferenceKV{tableReferenceKVKey=(TypelayerCommonCollections.binaryKVKey reduceDynamicKvsElem), tableReferenceKVValue=tableReferenceValue}):reduceDynamicKvsAcc)
            return appendList0