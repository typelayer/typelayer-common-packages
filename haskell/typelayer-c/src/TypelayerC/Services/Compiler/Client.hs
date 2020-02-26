{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Services.Compiler.Client where
import qualified TypelayerC.Services.Compiler.Dynamic as TypelayerCServicesCompilerDynamic
import qualified TypelayerC.Services.Compiler.Structures as TypelayerCServicesCompilerStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.ExceptionsEncoding as TypelayerCommonExceptionsEncoding
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.TransportClient as TypelayerCommonTransportClient
import qualified TypelayerCommon.Types as TypelayerCommonTypes


newPackage :: TypelayerCommonTransportClient.PackedTransportClient -> TypelayerCServicesCompilerStructures.NewPackageInput -> TypelayerCommonPrelude.ExecuteIO TypelayerCServicesCompilerStructures.NewPackageOutput
newPackage transportClient outgoingMessage = do
    newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) )
    inputEncoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput newEncoder outgoingMessage)
    inputBin <- (TypelayerCommonDynamic.encoderToBinary inputEncoder0 )
    responseBin <- (doRequest transportClient ["new-package"] inputBin)
    outputDecoder <- (TypelayerCommonDynamic.encodingStartDecoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) responseBin)
    (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput outputDecoder)

preview :: TypelayerCommonTransportClient.PackedTransportClient -> TypelayerCServicesCompilerStructures.PreviewInput -> TypelayerCommonPrelude.ExecuteIO TypelayerCServicesCompilerStructures.PreviewOutput
preview transportClient outgoingMessage = do
    newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) )
    inputEncoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewInput newEncoder outgoingMessage)
    inputBin <- (TypelayerCommonDynamic.encoderToBinary inputEncoder0 )
    responseBin <- (doRequest transportClient ["preview"] inputBin)
    outputDecoder <- (TypelayerCommonDynamic.encodingStartDecoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) responseBin)
    (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput outputDecoder)

previewChanges :: TypelayerCommonTransportClient.PackedTransportClient -> TypelayerCServicesCompilerStructures.PreviewChangesInput -> TypelayerCommonPrelude.ExecuteIO TypelayerCServicesCompilerStructures.PreviewChangesOutput
previewChanges transportClient outgoingMessage = do
    newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) )
    inputEncoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput newEncoder outgoingMessage)
    inputBin <- (TypelayerCommonDynamic.encoderToBinary inputEncoder0 )
    responseBin <- (doRequest transportClient ["preview-changes"] inputBin)
    outputDecoder <- (TypelayerCommonDynamic.encodingStartDecoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) responseBin)
    (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput outputDecoder)

previewDiff :: TypelayerCommonTransportClient.PackedTransportClient -> TypelayerCServicesCompilerStructures.PreviewDiffInput -> TypelayerCommonPrelude.ExecuteIO TypelayerCServicesCompilerStructures.PreviewDiffOutput
previewDiff transportClient outgoingMessage = do
    newEncoder <- (TypelayerCommonDynamic.encodingStartEncoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) )
    inputEncoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput newEncoder outgoingMessage)
    inputBin <- (TypelayerCommonDynamic.encoderToBinary inputEncoder0 )
    responseBin <- (doRequest transportClient ["preview-diff"] inputBin)
    outputDecoder <- (TypelayerCommonDynamic.encodingStartDecoding (TypelayerCommonTransportClient.transportClientEncoding transportClient ) responseBin)
    (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput outputDecoder)

doRequest :: TypelayerCommonTransportClient.PackedTransportClient -> [TypelayerCommonTypes.Text] -> TypelayerCommonTypes.Binary -> TypelayerCommonPrelude.ExecuteIO TypelayerCommonTypes.Binary
doRequest transport path body = do
    response <- (TypelayerCommonTransportClient.transportClientHandle transport path body)
    case response of
        switchOkOk@(TypelayerCommonTransportClient.Ok{}) -> do
            return (TypelayerCommonTransportClient.okBody switchOkOk)
        switchOkUhoh@(TypelayerCommonTransportClient.Uhoh{}) -> do
            decoder <- (TypelayerCommonDynamic.encodingStartDecoding (TypelayerCommonTransportClient.uhohExceptionEncoding switchOkUhoh) (TypelayerCommonTransportClient.uhohExceptionBody switchOkUhoh))
            metaSerializedObj <- (TypelayerCommonExceptionsEncoding.dynamicGetObjExceptionMetaSerializable decoder)
            metaObj <- (TypelayerCommonExceptionsEncoding.toPlainMeta metaSerializedObj)
            TypelayerCommonPrelude.throwE metaObj