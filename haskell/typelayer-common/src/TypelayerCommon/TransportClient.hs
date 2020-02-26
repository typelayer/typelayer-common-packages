{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.TransportClient where
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data Response
    = Ok
        { okBody :: TypelayerCommonTypes.Binary
        }
    | Uhoh
        { uhohExceptionBody :: TypelayerCommonTypes.Binary
        , uhohExceptionEncoding :: TypelayerCommonDynamic.PackedEncoding
        }
    deriving (Show, Eq)

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => TransportClient a where
    transportClientEncoding :: a -> TypelayerCommonDynamic.PackedEncoding
    transportClientHandle :: a -> [TypelayerCommonTypes.Text] {-path-} -> TypelayerCommonTypes.Binary {-body-} -> TypelayerCommonPrelude.ExecuteIO Response


data PackedTransportClient where
    PackedTransportClient :: TransportClient a => a -> PackedTransportClient
deriving instance Show PackedTransportClient
deriving instance TypelayerCommonTypes.Typeable PackedTransportClient
instance Eq PackedTransportClient where
    (==) (PackedTransportClient a) (PackedTransportClient b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance TransportClient PackedTransportClient where
    transportClientEncoding (PackedTransportClient x)  = transportClientEncoding x 
    transportClientHandle (PackedTransportClient x) path body = transportClientHandle x path body