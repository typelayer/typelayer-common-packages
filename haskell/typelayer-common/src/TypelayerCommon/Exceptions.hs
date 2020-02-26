{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Exceptions where
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data ExceptionMeta = 
    ExceptionMeta
        { exceptionMetaExceptionFields :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
        , exceptionMetaExceptionMessage :: TypelayerCommonTypes.Text
        , exceptionMetaExceptionModule :: TypelayerCommonTypes.Text
        , exceptionMetaExceptionType :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)