{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Transports.Http where
import qualified TypelayerCommon.Application as TypelayerCommonApplication
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Encodings.Json as TypelayerCommonEncodingsJson
import qualified TypelayerCommon.Encodings.Msgpack as TypelayerCommonEncodingsMsgpack
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data InvalidContentType = 
    InvalidContentType
        { invalidContentTypeMessage :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError InvalidContentType where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(invalidContentTypeMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList []), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_transports_http", TypelayerCommonExceptions.exceptionMetaExceptionType="invalid_content_type"})

data HttpSettings = 
    HttpSettings
        { httpSettingsHost :: TypelayerCommonTypes.Text
        , httpSettingsPort :: Integer
        }
    deriving (Show, Eq)

data HttpRequest = 
    HttpRequest
        { httpRequestBody :: TypelayerCommonTypes.Binary
        , httpRequestHeaders :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
        , httpRequestPath :: [TypelayerCommonTypes.Text]
        }
    deriving (Show, Eq)

data HttpResponse = 
    HttpResponse
        { httpResponseBody :: [TypelayerCommonTypes.Binary]
        , httpResponseHeaders :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
        , httpResponseStatusCode :: Integer
        }
    deriving (Show, Eq)

data HttpState = 
    HttpState
        { httpStateRequest :: HttpRequest
        , httpStateResponseHeaders :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => HasHttp a where
    hasHttpGet :: a -> HttpState
    hasHttpPut :: a -> HttpState {-request-} -> TypelayerCommonPrelude.ExecuteM a


data PackedHasHttp where
    PackedHasHttp :: HasHttp a => a -> PackedHasHttp
deriving instance Show PackedHasHttp
deriving instance TypelayerCommonTypes.Typeable PackedHasHttp
instance Eq PackedHasHttp where
    (==) (PackedHasHttp a) (PackedHasHttp b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance HasHttp PackedHasHttp where
    hasHttpGet (PackedHasHttp x)  = hasHttpGet x 
    hasHttpPut (PackedHasHttp x) request = do {(r1) <- hasHttpPut x request; return ((PackedHasHttp r1))}

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => HttpApplication a where
    httpApplicationHandleRequest :: a -> HttpRequest {-request-} -> TypelayerCommonPrelude.ExecuteIO HttpResponse


data PackedHttpApplication where
    PackedHttpApplication :: HttpApplication a => a -> PackedHttpApplication
deriving instance Show PackedHttpApplication
deriving instance TypelayerCommonTypes.Typeable PackedHttpApplication
instance Eq PackedHttpApplication where
    (==) (PackedHttpApplication a) (PackedHttpApplication b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance HttpApplication PackedHttpApplication where
    httpApplicationHandleRequest (PackedHttpApplication x) request = httpApplicationHandleRequest x request

data BasicHttpApplication = 
    BasicHttpApplication
    { basicHttpApplicationApp :: TypelayerCommonApplication.PackedProcess
    }
    deriving (Show, Eq)


instance HttpApplication BasicHttpApplication where
    httpApplicationHandleRequest this request = do
        encoding <- (getEncodingForRequest request)
        (runApp0, resultBin) <- (TypelayerCommonApplication.processHandle (basicHttpApplicationApp this) encoding (httpRequestPath request) (httpRequestBody request))
        return (HttpResponse{httpResponseStatusCode=200, httpResponseHeaders=(TypelayerCommonPrelude.mapFromList [("Content-Type", (TypelayerCommonDynamic.encodingMimetype encoding ))]), httpResponseBody=[resultBin]})

getRequest :: PackedHasHttp -> TypelayerCommonPrelude.ExecuteM HttpRequest
getRequest hasHttpObj = do
    return (httpStateRequest (hasHttpGet hasHttpObj ))

getRequestHeaders :: PackedHasHttp -> TypelayerCommonPrelude.ExecuteM (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
getRequestHeaders hasHttpObj = do
    return (httpRequestHeaders (httpStateRequest (hasHttpGet hasHttpObj )))

getEncodingForRequest :: HttpRequest -> TypelayerCommonPrelude.ExecuteM TypelayerCommonDynamic.PackedEncoding
getEncodingForRequest request = do
    let contentType = (TypelayerCommonPrelude.mapGetDefault (httpRequestHeaders request) "content-type" "application/json")
    case contentType of
        "application/json" -> do
            return (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
        "application/msgpack" -> do
            return (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
        _ -> do
            TypelayerCommonPrelude.throwE (InvalidContentType{invalidContentTypeMessage="Invalid Content Type"})

putHeader :: HasHttp a => a -> TypelayerCommonTypes.Text -> TypelayerCommonTypes.Text -> TypelayerCommonPrelude.ExecuteM a
putHeader hasHttpObj key value = do
    let headerAssign0 = (TypelayerCommonPrelude.mapAdd (httpStateResponseHeaders (hasHttpGet hasHttpObj )) key value)
    let stateAssign0 = ((hasHttpGet hasHttpObj ){httpStateResponseHeaders=headerAssign0})
    (hasHttpPut hasHttpObj stateAssign0)