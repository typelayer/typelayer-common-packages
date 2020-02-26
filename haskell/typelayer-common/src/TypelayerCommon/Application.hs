{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Application where
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data ServiceNotFound = 
    ServiceNotFound
        { serviceNotFoundMessage :: TypelayerCommonTypes.Text
        , serviceNotFoundRequestedService :: TypelayerCommonTypes.Text
        , serviceNotFoundAvailableServices :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError ServiceNotFound where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(serviceNotFoundMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList [("requested_service", (serviceNotFoundRequestedService x)), ("available_services", (serviceNotFoundAvailableServices x))]), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_application", TypelayerCommonExceptions.exceptionMetaExceptionType="service_not_found"})

data FunctionNotFound = 
    FunctionNotFound
        { functionNotFoundMessage :: TypelayerCommonTypes.Text
        , functionNotFoundRequestedService :: TypelayerCommonTypes.Text
        , functionNotFoundRequestedFunction :: TypelayerCommonTypes.Text
        , functionNotFoundAvailableFunctions :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError FunctionNotFound where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(functionNotFoundMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList [("requested_service", (functionNotFoundRequestedService x)), ("requested_function", (functionNotFoundRequestedFunction x)), ("available_functions", (functionNotFoundAvailableFunctions x))]), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_application", TypelayerCommonExceptions.exceptionMetaExceptionType="function_not_found"})

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => Process a where
    processDescribe :: a -> TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.ApplicationDescription
    processHandle :: a -> TypelayerCommonDynamic.PackedEncoding {-encoding-} -> [TypelayerCommonTypes.Text] {-path-} -> TypelayerCommonTypes.Binary {-body-} -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCommonTypes.Binary)


data PackedProcess where
    PackedProcess :: Process a => a -> PackedProcess
deriving instance Show PackedProcess
deriving instance TypelayerCommonTypes.Typeable PackedProcess
instance Eq PackedProcess where
    (==) (PackedProcess a) (PackedProcess b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance Process PackedProcess where
    processDescribe (PackedProcess x)  = processDescribe x 
    processHandle (PackedProcess x) encoding path body = do {(r1, r2) <- processHandle x encoding path body; return ((PackedProcess r1), r2)}