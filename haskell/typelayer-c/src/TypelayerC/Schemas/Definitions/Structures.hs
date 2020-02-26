{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.Definitions.Structures where
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data Table = 
    Table
        { tableColumns :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Column)
        , tableDescription :: TypelayerCommonTypes.Text
        , tableTable :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data Structure = 
    Structure
        { structureConstructors :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Constructor)
        , structureDoc :: (Maybe TypelayerCommonTypes.Text)
        }
    deriving (Show, Eq)

data Service = 
    Service
        { serviceDoc :: (Maybe TypelayerCommonTypes.Text)
        , serviceFunctions :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Function)
        }
    deriving (Show, Eq)

data Schema = 
    Schema
        { schemaDoc :: (Maybe TypelayerCommonTypes.Text)
        , schemaStructures :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Structure)
        }
    deriving (Show, Eq)

data Language
    = Haskell
    | Python
    | Typescript
    deriving (Show, Eq)

data Function
    = Mutation
        { mutationArguments :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Field)
        , mutationDoc :: (Maybe TypelayerCommonTypes.Text)
        , mutationReturns :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Field)
        , mutationTargetTable :: TableReference
        }
    | Query
        { queryArguments :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Field)
        , queryDoc :: (Maybe TypelayerCommonTypes.Text)
        , queryReturns :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Field)
        }
    deriving (Show, Eq)

data Constructor = 
    Constructor
        { constructorDoc :: (Maybe TypelayerCommonTypes.Text)
        , constructorFields :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Field)
        }
    deriving (Show, Eq)

data Column = 
    Column
        { columnColumn :: TypelayerCommonTypes.Text
        , columnDescription :: TypelayerCommonTypes.Text
        , columnType :: ColumnType
        }
    deriving (Show, Eq)

data ColumnType
    = ColumnBinary
    | ColumnBoolean
    | ColumnDateTime
    | ColumnDouble
    | ColumnEmbeded
        { columnEmbededId :: TypelayerCommonTypes.Text
        , columnEmbededSchema :: SchemaReference
        }
    | ColumnInteger
    | ColumnText
    | ForiegnKey
        { foriegnKeyId :: TypelayerCommonTypes.Text
        , foriegnKeyTable :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data Collection = 
    Collection
        { collectionBackend :: Backend
        , collectionDescription :: TypelayerCommonTypes.Text
        , collectionSchema :: TypelayerCommonTypes.Text
        , collectionTables :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Table)
        }
    deriving (Show, Eq)

data Changeset = 
    Changeset
        { changesetChanges :: [Change]
        }
    deriving (Show, Eq)

data Change
    = AddColumn
        { addColumnColumnId :: TypelayerCommonTypes.Text
        , addColumnDatabaseId :: TypelayerCommonTypes.Text
        , addColumnTableId :: TypelayerCommonTypes.Text
        }
    | AddDatabase
        { addDatabaseDatabaseId :: TypelayerCommonTypes.Text
        }
    | AddField
        { addFieldConstructorId :: TypelayerCommonTypes.Text
        , addFieldField :: Field
        , addFieldFieldId :: TypelayerCommonTypes.Text
        , addFieldSchemaId :: TypelayerCommonTypes.Text
        , addFieldStructureId :: TypelayerCommonTypes.Text
        }
    | AddMutation
        { addMutationMutationId :: TypelayerCommonTypes.Text
        , addMutationServiceId :: TypelayerCommonTypes.Text
        , addMutationTargetTable :: TableReference
        }
    | AddMutationArgument
        { addMutationArgumentArgumentId :: TypelayerCommonTypes.Text
        , addMutationArgumentField :: Field
        , addMutationArgumentMutationId :: TypelayerCommonTypes.Text
        , addMutationArgumentServiceId :: TypelayerCommonTypes.Text
        }
    | AddMutationReturn
        { addMutationReturnField :: Field
        , addMutationReturnMutationId :: TypelayerCommonTypes.Text
        , addMutationReturnReturnId :: TypelayerCommonTypes.Text
        , addMutationReturnServiceId :: TypelayerCommonTypes.Text
        }
    | AddQuery
        { addQueryQueryId :: TypelayerCommonTypes.Text
        , addQueryServiceId :: TypelayerCommonTypes.Text
        }
    | AddQueryArgument
        { addQueryArgumentArgumentId :: TypelayerCommonTypes.Text
        , addQueryArgumentField :: Field
        , addQueryArgumentQueryId :: TypelayerCommonTypes.Text
        , addQueryArgumentServiceId :: TypelayerCommonTypes.Text
        }
    | AddQueryReturn
        { addQueryReturnField :: Field
        , addQueryReturnQueryId :: TypelayerCommonTypes.Text
        , addQueryReturnReturnId :: TypelayerCommonTypes.Text
        , addQueryReturnServiceId :: TypelayerCommonTypes.Text
        }
    | AddSchema
        { addSchemaSchemaId :: TypelayerCommonTypes.Text
        }
    | AddService
        { addServiceServiceId :: TypelayerCommonTypes.Text
        }
    | AddStructure
        { addStructureSchemaId :: TypelayerCommonTypes.Text
        , addStructureStructureId :: TypelayerCommonTypes.Text
        }
    | AddTable
        { addTableDatabaseId :: TypelayerCommonTypes.Text
        , addTableTableId :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data TableReference = 
    TableReference
        { tableReferenceDatabase :: TypelayerCommonTypes.Text
        , tableReferencePackage :: TypelayerCommonTypes.Text
        , tableReferenceTableId :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data Field = 
    Field
        { fieldDoc :: (Maybe TypelayerCommonTypes.Text)
        , fieldType :: BasicType
        }
    deriving (Show, Eq)

data BasicType
    = BinaryType
    | BooleanType
    | DateTimeType
    | DoubleType
    | IntegerType
    | ListType
        { listTypeOf :: BasicType
        }
    | MapType
        { mapTypeOf :: BasicType
        }
    | MaybeType
        { maybeTypeOf :: BasicType
        }
    | StructType
        { structTypeId :: TypelayerCommonTypes.Text
        , structTypeSchema :: SchemaReference
        }
    | TextType
    deriving (Show, Eq)

data SchemaReference = 
    SchemaReference
        { schemaReferencePackage :: TypelayerCommonTypes.Text
        , schemaReferenceSchemaId :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data Backend
    = Database
    | Simple
    deriving (Show, Eq)

data ApplyChangesProxy = 
    ApplyChangesProxy
        { applyChangesProxyAChanges :: [Change]
        , applyChangesProxyChanges :: [Change]
        , applyChangesProxyPackage :: Package
        , applyChangesProxyZChanges :: [Change]
        }
    deriving (Show, Eq)

data Package = 
    Package
        { packageCollections :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Collection)
        , packageDoc :: (Maybe TypelayerCommonTypes.Text)
        , packageId :: TypelayerCommonTypes.Text
        , packageSchemas :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Schema)
        , packageServices :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text Service)
        , packageVersion :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

defaultTable :: TypelayerCommonPrelude.ExecuteM Table
defaultTable  = do
    let columnsVal = (TypelayerCommonPrelude.mapFromList [])
    let descriptionVal = ""
    let tableVal = ""
    return (Table{tableColumns=columnsVal, tableDescription=descriptionVal, tableTable=tableVal})

describeTable :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeTable  = do
    let columnsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="column"})
    let columnsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=columnsInnerFieldInfo})
    let tableColumnsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="columns", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=columnsFieldInfo})
    let descriptionFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let tableDescriptionFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="description", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=descriptionFieldInfo})
    let tableFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let tableTableFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="table", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tableFieldInfo})
    let tableConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="table", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[tableColumnsFieldInfo, tableDescriptionFieldInfo, tableTableFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="table", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[tableConstructorInfo]})

defaultStructure :: TypelayerCommonPrelude.ExecuteM Structure
defaultStructure  = do
    let constructorsVal = (TypelayerCommonPrelude.mapFromList [])
    let docVal = Nothing
    return (Structure{structureConstructors=constructorsVal, structureDoc=docVal})

describeStructure :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeStructure  = do
    let constructorsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="constructor"})
    let constructorsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=constructorsInnerFieldInfo})
    let structureConstructorsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="constructors", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=constructorsFieldInfo})
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let structureDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let structureConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="structure", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[structureConstructorsFieldInfo, structureDocFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="structure", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[structureConstructorInfo]})

defaultService :: TypelayerCommonPrelude.ExecuteM Service
defaultService  = do
    let docVal = Nothing
    let functionsVal = (TypelayerCommonPrelude.mapFromList [])
    return (Service{serviceDoc=docVal, serviceFunctions=functionsVal})

describeService :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeService  = do
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let serviceDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let functionsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="function"})
    let functionsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=functionsInnerFieldInfo})
    let serviceFunctionsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="functions", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=functionsFieldInfo})
    let serviceConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="service", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[serviceDocFieldInfo, serviceFunctionsFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="service", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[serviceConstructorInfo]})

defaultSchema :: TypelayerCommonPrelude.ExecuteM Schema
defaultSchema  = do
    let docVal = Nothing
    let structuresVal = (TypelayerCommonPrelude.mapFromList [])
    return (Schema{schemaDoc=docVal, schemaStructures=structuresVal})

describeSchema :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeSchema  = do
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let schemaDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let structuresInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="structure"})
    let structuresFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=structuresInnerFieldInfo})
    let schemaStructuresFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="structures", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=structuresFieldInfo})
    let schemaConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="schema", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[schemaDocFieldInfo, schemaStructuresFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="schema", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[schemaConstructorInfo]})

defaultLanguage :: TypelayerCommonPrelude.ExecuteM Language
defaultLanguage  = do
    return (Haskell{})

defaultHaskell :: TypelayerCommonPrelude.ExecuteM Language
defaultHaskell  = do
    return (Haskell{})

defaultPython :: TypelayerCommonPrelude.ExecuteM Language
defaultPython  = do
    return (Python{})

defaultTypescript :: TypelayerCommonPrelude.ExecuteM Language
defaultTypescript  = do
    return (Typescript{})

describeLanguage :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeLanguage  = do
    let haskellConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="haskell", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let pythonConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="python", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let typescriptConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="typescript", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="language", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[haskellConstructorInfo, pythonConstructorInfo, typescriptConstructorInfo]})

defaultFunction :: TypelayerCommonPrelude.ExecuteM Function
defaultFunction  = do
    let argumentsVal = (TypelayerCommonPrelude.mapFromList [])
    let docVal = Nothing
    let returnsVal = (TypelayerCommonPrelude.mapFromList [])
    targetTableVal <- (defaultTableReference)
    return (Mutation{mutationArguments=argumentsVal, mutationDoc=docVal, mutationReturns=returnsVal, mutationTargetTable=targetTableVal})

defaultMutation :: TypelayerCommonPrelude.ExecuteM Function
defaultMutation  = do
    let argumentsVal = (TypelayerCommonPrelude.mapFromList [])
    let docVal = Nothing
    let returnsVal = (TypelayerCommonPrelude.mapFromList [])
    targetTableVal <- (defaultTableReference)
    return (Mutation{mutationArguments=argumentsVal, mutationDoc=docVal, mutationReturns=returnsVal, mutationTargetTable=targetTableVal})

defaultQuery :: TypelayerCommonPrelude.ExecuteM Function
defaultQuery  = do
    let argumentsVal = (TypelayerCommonPrelude.mapFromList [])
    let docVal = Nothing
    let returnsVal = (TypelayerCommonPrelude.mapFromList [])
    return (Query{queryArguments=argumentsVal, queryDoc=docVal, queryReturns=returnsVal})

describeFunction :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeFunction  = do
    let argumentsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let argumentsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=argumentsInnerFieldInfo})
    let mutationArgumentsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="arguments", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=argumentsFieldInfo})
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let mutationDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let returnsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let returnsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=returnsInnerFieldInfo})
    let mutationReturnsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="returns", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=returnsFieldInfo})
    let targetTableFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="table_reference"})
    let mutationTargetTableFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="target_table", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=targetTableFieldInfo})
    let mutationConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="mutation", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[mutationArgumentsFieldInfo, mutationDocFieldInfo, mutationReturnsFieldInfo, mutationTargetTableFieldInfo]})
    let argumentsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let argumentsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=argumentsInnerFieldInfo})
    let queryArgumentsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="arguments", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=argumentsFieldInfo})
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let queryDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let returnsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let returnsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=returnsInnerFieldInfo})
    let queryReturnsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="returns", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=returnsFieldInfo})
    let queryConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="query", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[queryArgumentsFieldInfo, queryDocFieldInfo, queryReturnsFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="function", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[mutationConstructorInfo, queryConstructorInfo]})

defaultConstructor :: TypelayerCommonPrelude.ExecuteM Constructor
defaultConstructor  = do
    let docVal = Nothing
    let fieldsVal = (TypelayerCommonPrelude.mapFromList [])
    return (Constructor{constructorDoc=docVal, constructorFields=fieldsVal})

describeConstructor :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeConstructor  = do
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let constructorDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let fieldsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let fieldsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=fieldsInnerFieldInfo})
    let constructorFieldsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="fields", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldsFieldInfo})
    let constructorConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="constructor", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[constructorDocFieldInfo, constructorFieldsFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="constructor", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[constructorConstructorInfo]})

defaultColumn :: TypelayerCommonPrelude.ExecuteM Column
defaultColumn  = do
    let columnVal = ""
    let descriptionVal = ""
    typeVal <- (defaultColumnType)
    return (Column{columnColumn=columnVal, columnDescription=descriptionVal, columnType=typeVal})

describeColumn :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeColumn  = do
    let columnFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let columnColumnFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="column", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=columnFieldInfo})
    let descriptionFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let columnDescriptionFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="description", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=descriptionFieldInfo})
    let typeFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="column_type"})
    let columnTypeFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="type", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=typeFieldInfo})
    let columnConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[columnColumnFieldInfo, columnDescriptionFieldInfo, columnTypeFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="column", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[columnConstructorInfo]})

defaultColumnType :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnType  = do
    return (ColumnBinary{})

defaultColumnBinary :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnBinary  = do
    return (ColumnBinary{})

defaultColumnBoolean :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnBoolean  = do
    return (ColumnBoolean{})

defaultColumnDateTime :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnDateTime  = do
    return (ColumnDateTime{})

defaultColumnDouble :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnDouble  = do
    return (ColumnDouble{})

defaultColumnEmbeded :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnEmbeded  = do
    let idVal = ""
    schemaVal <- (defaultSchemaReference)
    return (ColumnEmbeded{columnEmbededId=idVal, columnEmbededSchema=schemaVal})

defaultColumnInteger :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnInteger  = do
    return (ColumnInteger{})

defaultColumnText :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultColumnText  = do
    return (ColumnText{})

defaultForiegnKey :: TypelayerCommonPrelude.ExecuteM ColumnType
defaultForiegnKey  = do
    let idVal = ""
    let tableVal = ""
    return (ForiegnKey{foriegnKeyId=idVal, foriegnKeyTable=tableVal})

describeColumnType :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeColumnType  = do
    let columnBinaryConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_binary", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let columnBooleanConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_boolean", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let columnDateTimeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_date_time", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let columnDoubleConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_double", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let idFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let columnEmbededIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=idFieldInfo})
    let schemaFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="schema_reference"})
    let columnEmbededSchemaFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaFieldInfo})
    let columnEmbededConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_embeded", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[columnEmbededIdFieldInfo, columnEmbededSchemaFieldInfo]})
    let columnIntegerConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_integer", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let columnTextConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="column_text", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let idFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let foriegnKeyIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=idFieldInfo})
    let tableFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let foriegnKeyTableFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="table", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tableFieldInfo})
    let foriegnKeyConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="foriegn_key", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[foriegnKeyIdFieldInfo, foriegnKeyTableFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="column_type", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[columnBinaryConstructorInfo, columnBooleanConstructorInfo, columnDateTimeConstructorInfo, columnDoubleConstructorInfo, columnEmbededConstructorInfo, columnIntegerConstructorInfo, columnTextConstructorInfo, foriegnKeyConstructorInfo]})

defaultCollection :: TypelayerCommonPrelude.ExecuteM Collection
defaultCollection  = do
    backendVal <- (defaultBackend)
    let descriptionVal = ""
    let schemaVal = ""
    let tablesVal = (TypelayerCommonPrelude.mapFromList [])
    return (Collection{collectionBackend=backendVal, collectionDescription=descriptionVal, collectionSchema=schemaVal, collectionTables=tablesVal})

describeCollection :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeCollection  = do
    let backendFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="backend"})
    let collectionBackendFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="backend", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=backendFieldInfo})
    let descriptionFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let collectionDescriptionFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="description", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=descriptionFieldInfo})
    let schemaFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let collectionSchemaFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaFieldInfo})
    let tablesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="table"})
    let tablesFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=tablesInnerFieldInfo})
    let collectionTablesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="tables", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tablesFieldInfo})
    let collectionConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="collection", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[collectionBackendFieldInfo, collectionDescriptionFieldInfo, collectionSchemaFieldInfo, collectionTablesFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="collection", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[collectionConstructorInfo]})

defaultChangeset :: TypelayerCommonPrelude.ExecuteM Changeset
defaultChangeset  = do
    let changesVal = []
    return (Changeset{changesetChanges=changesVal})

describeChangeset :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeChangeset  = do
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let changesetChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let changesetConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="changeset", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[changesetChangesFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="changeset", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[changesetConstructorInfo]})

defaultChange :: TypelayerCommonPrelude.ExecuteM Change
defaultChange  = do
    let columnIdVal = ""
    let databaseIdVal = ""
    let tableIdVal = ""
    return (AddColumn{addColumnColumnId=columnIdVal, addColumnDatabaseId=databaseIdVal, addColumnTableId=tableIdVal})

defaultAddColumn :: TypelayerCommonPrelude.ExecuteM Change
defaultAddColumn  = do
    let columnIdVal = ""
    let databaseIdVal = ""
    let tableIdVal = ""
    return (AddColumn{addColumnColumnId=columnIdVal, addColumnDatabaseId=databaseIdVal, addColumnTableId=tableIdVal})

defaultAddDatabase :: TypelayerCommonPrelude.ExecuteM Change
defaultAddDatabase  = do
    let databaseIdVal = ""
    return (AddDatabase{addDatabaseDatabaseId=databaseIdVal})

defaultAddField :: TypelayerCommonPrelude.ExecuteM Change
defaultAddField  = do
    let constructorIdVal = ""
    fieldVal <- (defaultField)
    let fieldIdVal = ""
    let schemaIdVal = ""
    let structureIdVal = ""
    return (AddField{addFieldConstructorId=constructorIdVal, addFieldField=fieldVal, addFieldFieldId=fieldIdVal, addFieldSchemaId=schemaIdVal, addFieldStructureId=structureIdVal})

defaultAddMutation :: TypelayerCommonPrelude.ExecuteM Change
defaultAddMutation  = do
    let mutationIdVal = ""
    let serviceIdVal = ""
    targetTableVal <- (defaultTableReference)
    return (AddMutation{addMutationMutationId=mutationIdVal, addMutationServiceId=serviceIdVal, addMutationTargetTable=targetTableVal})

defaultAddMutationArgument :: TypelayerCommonPrelude.ExecuteM Change
defaultAddMutationArgument  = do
    let argumentIdVal = ""
    fieldVal <- (defaultField)
    let mutationIdVal = ""
    let serviceIdVal = ""
    return (AddMutationArgument{addMutationArgumentArgumentId=argumentIdVal, addMutationArgumentField=fieldVal, addMutationArgumentMutationId=mutationIdVal, addMutationArgumentServiceId=serviceIdVal})

defaultAddMutationReturn :: TypelayerCommonPrelude.ExecuteM Change
defaultAddMutationReturn  = do
    fieldVal <- (defaultField)
    let mutationIdVal = ""
    let returnIdVal = ""
    let serviceIdVal = ""
    return (AddMutationReturn{addMutationReturnField=fieldVal, addMutationReturnMutationId=mutationIdVal, addMutationReturnReturnId=returnIdVal, addMutationReturnServiceId=serviceIdVal})

defaultAddQuery :: TypelayerCommonPrelude.ExecuteM Change
defaultAddQuery  = do
    let queryIdVal = ""
    let serviceIdVal = ""
    return (AddQuery{addQueryQueryId=queryIdVal, addQueryServiceId=serviceIdVal})

defaultAddQueryArgument :: TypelayerCommonPrelude.ExecuteM Change
defaultAddQueryArgument  = do
    let argumentIdVal = ""
    fieldVal <- (defaultField)
    let queryIdVal = ""
    let serviceIdVal = ""
    return (AddQueryArgument{addQueryArgumentArgumentId=argumentIdVal, addQueryArgumentField=fieldVal, addQueryArgumentQueryId=queryIdVal, addQueryArgumentServiceId=serviceIdVal})

defaultAddQueryReturn :: TypelayerCommonPrelude.ExecuteM Change
defaultAddQueryReturn  = do
    fieldVal <- (defaultField)
    let queryIdVal = ""
    let returnIdVal = ""
    let serviceIdVal = ""
    return (AddQueryReturn{addQueryReturnField=fieldVal, addQueryReturnQueryId=queryIdVal, addQueryReturnReturnId=returnIdVal, addQueryReturnServiceId=serviceIdVal})

defaultAddSchema :: TypelayerCommonPrelude.ExecuteM Change
defaultAddSchema  = do
    let schemaIdVal = ""
    return (AddSchema{addSchemaSchemaId=schemaIdVal})

defaultAddService :: TypelayerCommonPrelude.ExecuteM Change
defaultAddService  = do
    let serviceIdVal = ""
    return (AddService{addServiceServiceId=serviceIdVal})

defaultAddStructure :: TypelayerCommonPrelude.ExecuteM Change
defaultAddStructure  = do
    let schemaIdVal = ""
    let structureIdVal = ""
    return (AddStructure{addStructureSchemaId=schemaIdVal, addStructureStructureId=structureIdVal})

defaultAddTable :: TypelayerCommonPrelude.ExecuteM Change
defaultAddTable  = do
    let databaseIdVal = ""
    let tableIdVal = ""
    return (AddTable{addTableDatabaseId=databaseIdVal, addTableTableId=tableIdVal})

describeChange :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeChange  = do
    let columnIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addColumnColumnIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="column_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=columnIdFieldInfo})
    let databaseIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addColumnDatabaseIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="database_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=databaseIdFieldInfo})
    let tableIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addColumnTableIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="table_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tableIdFieldInfo})
    let addColumnConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_column", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addColumnColumnIdFieldInfo, addColumnDatabaseIdFieldInfo, addColumnTableIdFieldInfo]})
    let databaseIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addDatabaseDatabaseIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="database_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=databaseIdFieldInfo})
    let addDatabaseConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_database", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addDatabaseDatabaseIdFieldInfo]})
    let constructorIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addFieldConstructorIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="constructor_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=constructorIdFieldInfo})
    let fieldFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let addFieldFieldFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldFieldInfo})
    let fieldIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addFieldFieldIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldIdFieldInfo})
    let schemaIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addFieldSchemaIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaIdFieldInfo})
    let structureIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addFieldStructureIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="structure_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=structureIdFieldInfo})
    let addFieldConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_field", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addFieldConstructorIdFieldInfo, addFieldFieldFieldInfo, addFieldFieldIdFieldInfo, addFieldSchemaIdFieldInfo, addFieldStructureIdFieldInfo]})
    let mutationIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationMutationIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="mutation_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=mutationIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let targetTableFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="table_reference"})
    let addMutationTargetTableFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="target_table", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=targetTableFieldInfo})
    let addMutationConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_mutation", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addMutationMutationIdFieldInfo, addMutationServiceIdFieldInfo, addMutationTargetTableFieldInfo]})
    let argumentIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationArgumentArgumentIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="argument_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=argumentIdFieldInfo})
    let fieldFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let addMutationArgumentFieldFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldFieldInfo})
    let mutationIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationArgumentMutationIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="mutation_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=mutationIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationArgumentServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addMutationArgumentConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_mutation_argument", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addMutationArgumentArgumentIdFieldInfo, addMutationArgumentFieldFieldInfo, addMutationArgumentMutationIdFieldInfo, addMutationArgumentServiceIdFieldInfo]})
    let fieldFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let addMutationReturnFieldFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldFieldInfo})
    let mutationIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationReturnMutationIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="mutation_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=mutationIdFieldInfo})
    let returnIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationReturnReturnIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="return_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=returnIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addMutationReturnServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addMutationReturnConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_mutation_return", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addMutationReturnFieldFieldInfo, addMutationReturnMutationIdFieldInfo, addMutationReturnReturnIdFieldInfo, addMutationReturnServiceIdFieldInfo]})
    let queryIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryQueryIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="query_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=queryIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addQueryConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_query", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addQueryQueryIdFieldInfo, addQueryServiceIdFieldInfo]})
    let argumentIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryArgumentArgumentIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="argument_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=argumentIdFieldInfo})
    let fieldFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let addQueryArgumentFieldFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldFieldInfo})
    let queryIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryArgumentQueryIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="query_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=queryIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryArgumentServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addQueryArgumentConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_query_argument", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addQueryArgumentArgumentIdFieldInfo, addQueryArgumentFieldFieldInfo, addQueryArgumentQueryIdFieldInfo, addQueryArgumentServiceIdFieldInfo]})
    let fieldFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="field"})
    let addQueryReturnFieldFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="field", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fieldFieldInfo})
    let queryIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryReturnQueryIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="query_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=queryIdFieldInfo})
    let returnIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryReturnReturnIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="return_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=returnIdFieldInfo})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addQueryReturnServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addQueryReturnConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_query_return", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addQueryReturnFieldFieldInfo, addQueryReturnQueryIdFieldInfo, addQueryReturnReturnIdFieldInfo, addQueryReturnServiceIdFieldInfo]})
    let schemaIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addSchemaSchemaIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaIdFieldInfo})
    let addSchemaConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_schema", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addSchemaSchemaIdFieldInfo]})
    let serviceIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addServiceServiceIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="service_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=serviceIdFieldInfo})
    let addServiceConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_service", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addServiceServiceIdFieldInfo]})
    let schemaIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addStructureSchemaIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaIdFieldInfo})
    let structureIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addStructureStructureIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="structure_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=structureIdFieldInfo})
    let addStructureConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_structure", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addStructureSchemaIdFieldInfo, addStructureStructureIdFieldInfo]})
    let databaseIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addTableDatabaseIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="database_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=databaseIdFieldInfo})
    let tableIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let addTableTableIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="table_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tableIdFieldInfo})
    let addTableConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="add_table", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[addTableDatabaseIdFieldInfo, addTableTableIdFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="change", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[addColumnConstructorInfo, addDatabaseConstructorInfo, addFieldConstructorInfo, addMutationConstructorInfo, addMutationArgumentConstructorInfo, addMutationReturnConstructorInfo, addQueryConstructorInfo, addQueryArgumentConstructorInfo, addQueryReturnConstructorInfo, addSchemaConstructorInfo, addServiceConstructorInfo, addStructureConstructorInfo, addTableConstructorInfo]})

defaultTableReference :: TypelayerCommonPrelude.ExecuteM TableReference
defaultTableReference  = do
    let databaseVal = ""
    let packageVal = ""
    let tableIdVal = ""
    return (TableReference{tableReferenceDatabase=databaseVal, tableReferencePackage=packageVal, tableReferenceTableId=tableIdVal})

describeTableReference :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeTableReference  = do
    let databaseFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let tableReferenceDatabaseFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="database", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=databaseFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let tableReferencePackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let tableIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let tableReferenceTableIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="table_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=tableIdFieldInfo})
    let tableReferenceConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="table_reference", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[tableReferenceDatabaseFieldInfo, tableReferencePackageFieldInfo, tableReferenceTableIdFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="table_reference", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[tableReferenceConstructorInfo]})

defaultField :: TypelayerCommonPrelude.ExecuteM Field
defaultField  = do
    let docVal = Nothing
    typeVal <- (defaultBasicType)
    return (Field{fieldDoc=docVal, fieldType=typeVal})

describeField :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeField  = do
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let fieldDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let typeFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="basic_type"})
    let fieldTypeFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="type", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=typeFieldInfo})
    let fieldConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="field", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[fieldDocFieldInfo, fieldTypeFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="field", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[fieldConstructorInfo]})

defaultBasicType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultBasicType  = do
    return (BinaryType{})

defaultBinaryType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultBinaryType  = do
    return (BinaryType{})

defaultBooleanType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultBooleanType  = do
    return (BooleanType{})

defaultDateTimeType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultDateTimeType  = do
    return (DateTimeType{})

defaultDoubleType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultDoubleType  = do
    return (DoubleType{})

defaultIntegerType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultIntegerType  = do
    return (IntegerType{})

defaultListType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultListType  = do
    ofVal <- (defaultBasicType)
    return (ListType{listTypeOf=ofVal})

defaultMapType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultMapType  = do
    ofVal <- (defaultBasicType)
    return (MapType{mapTypeOf=ofVal})

defaultMaybeType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultMaybeType  = do
    ofVal <- (defaultBasicType)
    return (MaybeType{maybeTypeOf=ofVal})

defaultStructType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultStructType  = do
    let idVal = ""
    schemaVal <- (defaultSchemaReference)
    return (StructType{structTypeId=idVal, structTypeSchema=schemaVal})

defaultTextType :: TypelayerCommonPrelude.ExecuteM BasicType
defaultTextType  = do
    return (TextType{})

describeBasicType :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeBasicType  = do
    let binaryTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="binary_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let booleanTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="boolean_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let dateTimeTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="date_time_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let doubleTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="double_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let integerTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="integer_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let ofFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="basic_type"})
    let listTypeOfFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="of", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=ofFieldInfo})
    let listTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="list_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[listTypeOfFieldInfo]})
    let ofFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="basic_type"})
    let mapTypeOfFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="of", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=ofFieldInfo})
    let mapTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="map_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[mapTypeOfFieldInfo]})
    let ofFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="basic_type"})
    let maybeTypeOfFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="of", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=ofFieldInfo})
    let maybeTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="maybe_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[maybeTypeOfFieldInfo]})
    let idFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let structTypeIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=idFieldInfo})
    let schemaFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="schema_reference"})
    let structTypeSchemaFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaFieldInfo})
    let structTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="struct_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[structTypeIdFieldInfo, structTypeSchemaFieldInfo]})
    let textTypeConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="text_type", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="basic_type", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[binaryTypeConstructorInfo, booleanTypeConstructorInfo, dateTimeTypeConstructorInfo, doubleTypeConstructorInfo, integerTypeConstructorInfo, listTypeConstructorInfo, mapTypeConstructorInfo, maybeTypeConstructorInfo, structTypeConstructorInfo, textTypeConstructorInfo]})

defaultSchemaReference :: TypelayerCommonPrelude.ExecuteM SchemaReference
defaultSchemaReference  = do
    let packageVal = ""
    let schemaIdVal = ""
    return (SchemaReference{schemaReferencePackage=packageVal, schemaReferenceSchemaId=schemaIdVal})

describeSchemaReference :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeSchemaReference  = do
    let packageFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let schemaReferencePackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let schemaIdFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let schemaReferenceSchemaIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schema_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemaIdFieldInfo})
    let schemaReferenceConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="schema_reference", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[schemaReferencePackageFieldInfo, schemaReferenceSchemaIdFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="schema_reference", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[schemaReferenceConstructorInfo]})

defaultBackend :: TypelayerCommonPrelude.ExecuteM Backend
defaultBackend  = do
    return (Database{})

defaultDatabase :: TypelayerCommonPrelude.ExecuteM Backend
defaultDatabase  = do
    return (Database{})

defaultSimple :: TypelayerCommonPrelude.ExecuteM Backend
defaultSimple  = do
    return (Simple{})

describeBackend :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeBackend  = do
    let databaseConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="database", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    let simpleConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="simple", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="backend", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[databaseConstructorInfo, simpleConstructorInfo]})

defaultApplyChangesProxy :: TypelayerCommonPrelude.ExecuteM ApplyChangesProxy
defaultApplyChangesProxy  = do
    let aChangesVal = []
    let changesVal = []
    packageVal <- (defaultPackage)
    let zChangesVal = []
    return (ApplyChangesProxy{applyChangesProxyAChanges=aChangesVal, applyChangesProxyChanges=changesVal, applyChangesProxyPackage=packageVal, applyChangesProxyZChanges=zChangesVal})

describeApplyChangesProxy :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeApplyChangesProxy  = do
    let aChangesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let aChangesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=aChangesInnerFieldInfo})
    let applyChangesProxyAChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="a_changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=aChangesFieldInfo})
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let applyChangesProxyChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let applyChangesProxyPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let zChangesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let zChangesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=zChangesInnerFieldInfo})
    let applyChangesProxyZChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="z_changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=zChangesFieldInfo})
    let applyChangesProxyConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="apply_changes_proxy", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[applyChangesProxyAChangesFieldInfo, applyChangesProxyChangesFieldInfo, applyChangesProxyPackageFieldInfo, applyChangesProxyZChangesFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="apply_changes_proxy", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[applyChangesProxyConstructorInfo]})

defaultPackage :: TypelayerCommonPrelude.ExecuteM Package
defaultPackage  = do
    let collectionsVal = (TypelayerCommonPrelude.mapFromList [])
    let docVal = Nothing
    let idVal = ""
    let schemasVal = (TypelayerCommonPrelude.mapFromList [])
    let servicesVal = (TypelayerCommonPrelude.mapFromList [])
    let versionVal = ""
    return (Package{packageCollections=collectionsVal, packageDoc=docVal, packageId=idVal, packageSchemas=schemasVal, packageServices=servicesVal, packageVersion=versionVal})

describePackage :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePackage  = do
    let collectionsInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="collection"})
    let collectionsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=collectionsInnerFieldInfo})
    let packageCollectionsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="collections", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=collectionsFieldInfo})
    let docInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let docFieldInfo = (TypelayerCommonDocumentation.TlMaybe{TypelayerCommonDocumentation.tlMaybeMaybeInner=docInnerFieldInfo})
    let packageDocFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="doc", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=docFieldInfo})
    let idFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let packageIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=idFieldInfo})
    let schemasInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="schema"})
    let schemasFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=schemasInnerFieldInfo})
    let packageSchemasFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="schemas", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=schemasFieldInfo})
    let servicesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="service"})
    let servicesFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=servicesInnerFieldInfo})
    let packageServicesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="services", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=servicesFieldInfo})
    let versionFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let packageVersionFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="version", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=versionFieldInfo})
    let packageConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="package", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[packageCollectionsFieldInfo, packageDocFieldInfo, packageIdFieldInfo, packageSchemasFieldInfo, packageServicesFieldInfo, packageVersionFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="package", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[packageConstructorInfo]})