{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Wire where
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data DecoderException = 
    DecoderException
        { decoderExceptionMessage :: TypelayerCommonTypes.Text
        , decoderExceptionOffset :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError DecoderException where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(decoderExceptionMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList [("offset", (decoderExceptionOffset x))]), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_wire", TypelayerCommonExceptions.exceptionMetaExceptionType="decoder_exception"})