{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Documentation where
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data TypeInfo
    = TlBinary
    | TlBoolean
    | TlDatetime
    | TlDouble
    | TlInteger
    | TlList
        { tlListListInner :: TypeInfo
        }
    | TlMap
        { tlMapMapInner :: TypeInfo
        }
    | TlMaybe
        { tlMaybeMaybeInner :: TypeInfo
        }
    | TlStructure
        { tlStructurePackage :: TypelayerCommonTypes.Text
        , tlStructureSchema :: TypelayerCommonTypes.Text
        , tlStructureStructureId :: TypelayerCommonTypes.Text
        }
    | TlText
    deriving (Show, Eq)

data FieldDescription = 
    FieldDescription
        { fieldDescriptionDescription :: (Maybe TypelayerCommonTypes.Text)
        , fieldDescriptionName :: TypelayerCommonTypes.Text
        , fieldDescriptionTypeInfo :: TypeInfo
        }
    deriving (Show, Eq)

data FunctionDescription = 
    FunctionDescription
        { functionDescriptionDescription :: (Maybe TypelayerCommonTypes.Text)
        , functionDescriptionInputs :: [FieldDescription]
        , functionDescriptionName :: TypelayerCommonTypes.Text
        , functionDescriptionOutputs :: [FieldDescription]
        }
    deriving (Show, Eq)

data ServiceDescription = 
    ServiceDescription
        { serviceDescriptionDescription :: (Maybe TypelayerCommonTypes.Text)
        , serviceDescriptionFunctions :: [FunctionDescription]
        , serviceDescriptionName :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data ConstructorInfo = 
    ConstructorInfo
        { constructorInfoDescription :: (Maybe TypelayerCommonTypes.Text)
        , constructorInfoFields :: [FieldDescription]
        , constructorInfoName :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data StructureInfo = 
    StructureInfo
        { structureInfoConstructors :: [ConstructorInfo]
        , structureInfoDescription :: (Maybe TypelayerCommonTypes.Text)
        , structureInfoStructureId :: TypelayerCommonTypes.Text
        , structureInfoStructureType :: StructureType
        }
    deriving (Show, Eq)

data StructureType
    = StructureEnum
    | StructureSimple
    deriving (Show, Eq)

data ApplicationDescription = 
    ApplicationDescription
        { applicationDescriptionDescription :: (Maybe TypelayerCommonTypes.Text)
        , applicationDescriptionName :: TypelayerCommonTypes.Text
        , applicationDescriptionServices :: [ServiceDescription]
        }
    deriving (Show, Eq)

data ColumnTypeInfo
    = TlBinaryColumn
        { tlBinaryColumnIsNull :: Bool
        }
    | TlBooleanColumn
        { tlBooleanColumnIsNull :: Bool
        }
    | TlDatetimeColumn
        { tlDatetimeColumnIsNull :: Bool
        }
    | TlDoubleColumn
        { tlDoubleColumnIsNull :: Bool
        }
    | TlIntegerColumn
        { tlIntegerColumnIsNull :: Bool
        }
    | TlReference
        { tlReferenceDatabase :: TypelayerCommonTypes.Text
        , tlReferenceIsNull :: Bool
        , tlReferencePackage :: TypelayerCommonTypes.Text
        , tlReferenceTableId :: TypelayerCommonTypes.Text
        }
    | TlTextColumn
        { tlTextColumnIsNull :: Bool
        }
    deriving (Show, Eq)

data ColumnInfo = 
    ColumnInfo
        { columnInfoColumnInfo :: ColumnTypeInfo
        , columnInfoDescription :: (Maybe TypelayerCommonTypes.Text)
        , columnInfoName :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data TableInfo = 
    TableInfo
        { tableInfoColumns :: [ColumnInfo]
        , tableInfoDescription :: (Maybe TypelayerCommonTypes.Text)
        , tableInfoName :: TypelayerCommonTypes.Text
        , tableInfoTable :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)