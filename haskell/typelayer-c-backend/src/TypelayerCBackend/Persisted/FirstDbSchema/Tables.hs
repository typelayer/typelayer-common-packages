{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCBackend.Persisted.FirstDbSchema.Tables where
import qualified TypelayerCBackend.Persisted.FirstDbSchema.Structures as TypelayerCBackendPersistedFirstDbSchemaStructures
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Sql as TypelayerCommonSql
import qualified TypelayerCommon.Types as TypelayerCommonTypes
import qualified Database.PostgreSQL.Simple as Postgres
import qualified Database.PostgreSQL.Simple.Types as Postgres


class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => BoomColumn a where
    boomColumnToColumnName :: a -> TypelayerCommonTypes.Builder {-writer-} -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder


data PackedBoomColumn where
    PackedBoomColumn :: BoomColumn a => a -> PackedBoomColumn
deriving instance Show PackedBoomColumn
deriving instance TypelayerCommonTypes.Typeable PackedBoomColumn
instance Eq PackedBoomColumn where
    (==) (PackedBoomColumn a) (PackedBoomColumn b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance BoomColumn PackedBoomColumn where
    boomColumnToColumnName (PackedBoomColumn x) writer = boomColumnToColumnName x writer

data BoomBoomId = 
    BoomBoomId
    { boomBoomIdAlias :: TypelayerCommonTypes.Text
    }
    deriving (Show, Eq)


instance BoomColumn BoomBoomId where
    boomColumnToColumnName this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomBoomIdAlias this)) 0x2e) "\98\111\111\109\95\105\100")


instance TypelayerCommonSql.QInt BoomBoomId where
    qIntEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomBoomIdAlias this)) 0x2e) "\98\111\111\109\95\105\100")

data BoomCool = 
    BoomCool
    { boomCoolAlias :: TypelayerCommonTypes.Text
    }
    deriving (Show, Eq)


instance BoomColumn BoomCool where
    boomColumnToColumnName this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomCoolAlias this)) 0x2e) "\99\111\111\108")


instance TypelayerCommonSql.QInt BoomCool where
    qIntEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomCoolAlias this)) 0x2e) "\99\111\111\108")

data BoomOther = 
    BoomOther
    { boomOtherAlias :: TypelayerCommonTypes.Text
    }
    deriving (Show, Eq)


instance BoomColumn BoomOther where
    boomColumnToColumnName this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomOtherAlias this)) 0x2e) "\111\116\104\101\114")


instance TypelayerCommonSql.QText BoomOther where
    qTextEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText writer (boomOtherAlias this)) 0x2e) "\111\116\104\101\114")

type BoomClosure = BoomFrom -> BoomQuery

data BoomFrom = 
    BoomFrom
        { boomFromAlias :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data BoomQuery = 
    BoomQuery
        { boomQueryOrderBy :: [PackedBoomColumn]
        , boomQuerySelect :: BoomFrom
        , boomQueryWhere :: TypelayerCommonSql.PackedQBool
        }
    deriving (Show, Eq)

data BoomSubqueryExists = 
    BoomSubqueryExists
    { boomSubqueryExistsQuery :: BoomQuery
    }
    deriving (Show, Eq)


instance TypelayerCommonSql.QBool BoomSubqueryExists where
    qBoolEvaluate this writer = do
        let afterExists = (TypelayerCommonPrelude.writerPutBinary writer "\69\88\73\83\84\83\40")
        afterSubquery <- (boomBuildSelect afterExists (boomSubqueryExistsQuery this) 0 1)
        return (TypelayerCommonPrelude.writerPutChar afterSubquery 0x29)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => BoomCollection a where
    boomCollectionDelete :: a -> Postgres.Connection {-conn-} -> Integer {-toDelete-} -> TypelayerCommonPrelude.ExecuteIO [Integer]
    boomCollectionFilter :: a -> Postgres.Connection {-conn-} -> BoomQuery {-newQuery-} -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCBackendPersistedFirstDbSchemaStructures.Boom]
    boomCollectionInsert :: a -> Postgres.Connection {-conn-} -> TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate {-toInsert-} -> TypelayerCommonPrelude.ExecuteIO TypelayerCBackendPersistedFirstDbSchemaStructures.Boom
    boomCollectionSave :: a -> Postgres.Connection {-conn-} -> TypelayerCBackendPersistedFirstDbSchemaStructures.Boom {-toSave-} -> TypelayerCommonPrelude.ExecuteIO [Integer]
    boomCollectionSlice :: a -> Postgres.Connection {-conn-} -> Integer {-offset-} -> Integer {-count-} -> TypelayerCommonPrelude.ExecuteIO [TypelayerCBackendPersistedFirstDbSchemaStructures.Boom]


data PackedBoomCollection where
    PackedBoomCollection :: BoomCollection a => a -> PackedBoomCollection
deriving instance Show PackedBoomCollection
deriving instance TypelayerCommonTypes.Typeable PackedBoomCollection
instance Eq PackedBoomCollection where
    (==) (PackedBoomCollection a) (PackedBoomCollection b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance BoomCollection PackedBoomCollection where
    boomCollectionDelete (PackedBoomCollection x) conn toDelete = boomCollectionDelete x conn toDelete
    boomCollectionFilter (PackedBoomCollection x) conn newQuery offset count = boomCollectionFilter x conn newQuery offset count
    boomCollectionInsert (PackedBoomCollection x) conn toInsert = boomCollectionInsert x conn toInsert
    boomCollectionSave (PackedBoomCollection x) conn toSave = boomCollectionSave x conn toSave
    boomCollectionSlice (PackedBoomCollection x) conn offset count = boomCollectionSlice x conn offset count

data BoomSqlCollection = 
    BoomSqlCollection
    { boomSqlCollectionQuery :: BoomQuery
    }
    deriving (Show, Eq)


instance BoomCollection BoomSqlCollection where
    boomCollectionDelete this conn toDelete = do
        writer <- (boomBuildDelete toDelete)
        queryBoomRaw <- ((TypelayerCommonPrelude.lift $ Postgres.query_ conn (Postgres.Query (TypelayerCommonPrelude.writerToBinary writer))) :: TypelayerCommonPrelude.ExecuteIO [[Integer]])
        let queryBoomRows = fmap (\[i] -> i) queryBoomRaw
        return queryBoomRows
    boomCollectionFilter this conn newQuery offset limit = do
        let newWhere0 = (newQuery{boomQueryWhere=(TypelayerCommonSql.PackedQBool (TypelayerCommonSql.And{TypelayerCommonSql.andLeft=(boomQueryWhere (boomSqlCollectionQuery this)), TypelayerCommonSql.andRight=(boomQueryWhere newQuery)}))})
        writer <- (boomBuildSelect TypelayerCommonPrelude.writerNew newWhere0 offset limit)
        queryBoomRaw <- (TypelayerCommonPrelude.lift $ Postgres.query_ conn (Postgres.Query (TypelayerCommonPrelude.writerToBinary writer)))
        let queryBoomRows = fmap (\(boomBoomIdRaw, boomCoolRaw, boomOtherRaw) -> (TypelayerCBackendPersistedFirstDbSchemaStructures.Boom{TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId=boomBoomIdRaw, TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool=boomCoolRaw, TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther=boomOtherRaw}) ) queryBoomRaw
        return queryBoomRows
    boomCollectionInsert this conn toSave = do
        writer <- (boomBuildInsert toSave)
        queryBoomRaw <- ((TypelayerCommonPrelude.lift $ Postgres.query_ conn (Postgres.Query (TypelayerCommonPrelude.writerToBinary writer))) :: TypelayerCommonPrelude.ExecuteIO [[Integer]])
        let queryBoomRows = fmap (\[i] -> i) queryBoomRaw
        let ints = queryBoomRows
        return (TypelayerCBackendPersistedFirstDbSchemaStructures.Boom{TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId=(head ints), TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool=(TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateCool toSave), TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther=(TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateOther toSave)})
    boomCollectionSave this conn toSave = do
        writer <- (boomBuildUpdate toSave)
        queryBoomRaw <- ((TypelayerCommonPrelude.lift $ Postgres.query_ conn (Postgres.Query (TypelayerCommonPrelude.writerToBinary writer))) :: TypelayerCommonPrelude.ExecuteIO [[Integer]])
        let queryBoomRows = fmap (\[i] -> i) queryBoomRaw
        return queryBoomRows
    boomCollectionSlice this conn offset limit = do
        writer <- (boomBuildSelect TypelayerCommonPrelude.writerNew (boomSqlCollectionQuery this) offset limit)
        queryBoomRaw <- (TypelayerCommonPrelude.lift $ Postgres.query_ conn (Postgres.Query (TypelayerCommonPrelude.writerToBinary writer)))
        let queryBoomRows = fmap (\(boomBoomIdRaw, boomCoolRaw, boomOtherRaw) -> (TypelayerCBackendPersistedFirstDbSchemaStructures.Boom{TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId=boomBoomIdRaw, TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool=boomCoolRaw, TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther=boomOtherRaw}) ) queryBoomRaw
        return queryBoomRows

byBoomBoomId :: BoomFrom -> PackedBoomColumn
byBoomBoomId from = 
    (PackedBoomColumn (BoomBoomId{boomBoomIdAlias=(boomFromAlias from)}))

qBoomBoomId :: BoomFrom -> TypelayerCommonSql.PackedQInt
qBoomBoomId from = 
    (TypelayerCommonSql.PackedQInt (BoomBoomId{boomBoomIdAlias=(boomFromAlias from)}))

byBoomCool :: BoomFrom -> PackedBoomColumn
byBoomCool from = 
    (PackedBoomColumn (BoomCool{boomCoolAlias=(boomFromAlias from)}))

qBoomCool :: BoomFrom -> TypelayerCommonSql.PackedQInt
qBoomCool from = 
    (TypelayerCommonSql.PackedQInt (BoomCool{boomCoolAlias=(boomFromAlias from)}))

byBoomOther :: BoomFrom -> PackedBoomColumn
byBoomOther from = 
    (PackedBoomColumn (BoomOther{boomOtherAlias=(boomFromAlias from)}))

qBoomOther :: BoomFrom -> TypelayerCommonSql.PackedQText
qBoomOther from = 
    (TypelayerCommonSql.PackedQText (BoomOther{boomOtherAlias=(boomFromAlias from)}))

qBoomExists :: BoomQuery -> TypelayerCommonSql.PackedQBool
qBoomExists query = 
    (TypelayerCommonSql.PackedQBool (BoomSubqueryExists{boomSubqueryExistsQuery=query}))

boomBuildDelete :: Integer -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder
boomBuildDelete toDelete = do
    let writer = TypelayerCommonPrelude.writerNew
    return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutDecimal (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutBinary writer "\68\69\76\69\84\69\32\70\82\79\77\32\98\111\111\109\95\116\97\98\108\101\32\87\72\69\82\69\32") "\98\111\111\109\95\105\100") 0x20) 0x3d) 0x20) toDelete) "\32\82\69\84\85\82\78\73\78\71\32\98\111\111\109\95\105\100")

boomBuildInsert :: TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder
boomBuildInsert toSave = do
    let writer = TypelayerCommonPrelude.writerNew
    let afterSelect = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary writer "\73\78\83\69\82\84\32\73\78\84\79\32\98\111\111\109\95\116\97\98\108\101") 0x20) 0x28) "cool") 0x2c) 0x20) "other") "\41\32\86\65\76\85\69\83\32\40")
    let afterCool = (TypelayerCommonPrelude.writerPutDecimal afterSelect (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateCool toSave))
    let afterCommaCool = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterCool 0x2c) 0x20)
    let afterValues = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar afterCommaCool 0x27) (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateOther toSave)) 0x27)
    return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar afterValues 0x29) "\32\82\69\84\85\82\78\73\78\71\32\98\111\111\109\95\105\100")

boomBuildUpdate :: TypelayerCBackendPersistedFirstDbSchemaStructures.Boom -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder
boomBuildUpdate toSave = do
    let writer = TypelayerCommonPrelude.writerNew
    let afterSelect = (TypelayerCommonPrelude.writerPutBinary writer "\85\80\68\65\84\69\32\98\111\111\109\95\116\97\98\108\101\32\83\69\84\32")
    let coolAfterColumn = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary afterSelect "\99\111\111\108") 0x20) 0x3d) 0x20)
    let afterCool = (TypelayerCommonPrelude.writerPutDecimal coolAfterColumn (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool toSave))
    let afterCommaCool = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterCool 0x2c) 0x20)
    let otherAfterColumn = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary afterCommaCool "\111\116\104\101\114") 0x20) 0x3d) 0x20)
    let afterSet = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar otherAfterColumn 0x27) (TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther toSave)) 0x27)
    let afterWhere = (TypelayerCommonPrelude.writerPutBinary afterSet "\32\87\72\69\82\69\32")
    return (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutDecimal (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary afterWhere "\98\111\111\109\95\105\100") 0x20) 0x3d) 0x20) (TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId toSave)) "\32\82\69\84\85\82\78\73\78\71\32\98\111\111\109\95\105\100")

boomBuild :: BoomClosure -> BoomQuery
boomBuild builder = 
    (builder (BoomFrom{boomFromAlias="boom"}))

boomBuildWithAlias :: TypelayerCommonTypes.Text -> BoomClosure -> BoomQuery
boomBuildWithAlias alias builder = 
    (builder (BoomFrom{boomFromAlias=alias}))

boomBuildSelect :: TypelayerCommonTypes.Builder -> BoomQuery -> Integer -> Integer -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder
boomBuildSelect writer query offset limit = do
    let afterSelect = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutBinary writer "\83\69\76\69\67\84\32") (boomFromAlias (boomQuerySelect query))) 0x2e) "boom_id") 0x2c) 0x20) (boomFromAlias (boomQuerySelect query))) 0x2e) "cool") 0x2c) 0x20) (boomFromAlias (boomQuerySelect query))) 0x2e) "other") 0x20) "\70\82\79\77\32\98\111\111\109\95\116\97\98\108\101\32\65\83\32") (boomFromAlias (boomQuerySelect query))) "\32\87\72\69\82\69\32")
    afterWhere <- (TypelayerCommonSql.qBoolEvaluate (boomQueryWhere query) afterSelect)
    afterOrderBy <- do
        if (0 < (fromIntegral $ length (boomQueryOrderBy query)))
        then do
            let afterOrderText = (TypelayerCommonPrelude.writerPutBinary afterWhere "\32\79\82\68\69\82\32\66\89\32\40")
            TypelayerCommonPrelude.listReduceM (boomQueryOrderBy query) afterOrderText $ \buildOrderByIndex buildOrderByElem buildOrderByAcc -> do
                orderByElem <- (boomColumnToColumnName buildOrderByElem buildOrderByAcc)
                if ((buildOrderByIndex + 1) == (fromIntegral $ length (boomQueryOrderBy query)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar orderByElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar orderByElem 0x2c) 0x20)
        else do
            return afterWhere
    if (limit >= 0)
    then do
        return (TypelayerCommonPrelude.writerPutDecimal (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutDecimal (TypelayerCommonPrelude.writerPutBinary afterOrderBy "\32\76\73\77\73\84\32") limit) "\32\79\70\70\83\69\84\32") offset)
    else do
        return (TypelayerCommonPrelude.writerPutDecimal (TypelayerCommonPrelude.writerPutBinary afterOrderBy "\32\79\70\70\83\69\84\32") offset)