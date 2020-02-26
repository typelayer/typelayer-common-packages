{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Services.Compiler.Handler where
import qualified TypelayerC.Services.Compiler.Dynamic as TypelayerCServicesCompilerDynamic
import qualified TypelayerC.Services.Compiler.Structures as TypelayerCServicesCompilerStructures
import qualified TypelayerCommon.Application as TypelayerCommonApplication
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => Compiler a where
    compilerNewPackage :: a -> TypelayerCServicesCompilerStructures.NewPackageInput {-incomingMsg-} -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCServicesCompilerStructures.NewPackageOutput)
    compilerPreview :: a -> TypelayerCServicesCompilerStructures.PreviewInput {-incomingMsg-} -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCServicesCompilerStructures.PreviewOutput)
    compilerPreviewChanges :: a -> TypelayerCServicesCompilerStructures.PreviewChangesInput {-incomingMsg-} -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCServicesCompilerStructures.PreviewChangesOutput)
    compilerPreviewDiff :: a -> TypelayerCServicesCompilerStructures.PreviewDiffInput {-incomingMsg-} -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCServicesCompilerStructures.PreviewDiffOutput)


data PackedCompiler where
    PackedCompiler :: Compiler a => a -> PackedCompiler
deriving instance Show PackedCompiler
deriving instance TypelayerCommonTypes.Typeable PackedCompiler
instance Eq PackedCompiler where
    (==) (PackedCompiler a) (PackedCompiler b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance Compiler PackedCompiler where
    compilerNewPackage (PackedCompiler x) incomingMsg = do {(r1, r2) <- compilerNewPackage x incomingMsg; return ((PackedCompiler r1), r2)}
    compilerPreview (PackedCompiler x) incomingMsg = do {(r1, r2) <- compilerPreview x incomingMsg; return ((PackedCompiler r1), r2)}
    compilerPreviewChanges (PackedCompiler x) incomingMsg = do {(r1, r2) <- compilerPreviewChanges x incomingMsg; return ((PackedCompiler r1), r2)}
    compilerPreviewDiff (PackedCompiler x) incomingMsg = do {(r1, r2) <- compilerPreviewDiff x incomingMsg; return ((PackedCompiler r1), r2)}

data CompilerApp = 
    CompilerApp
    { compilerAppService :: PackedCompiler
    }
    deriving (Show, Eq)


instance TypelayerCommonApplication.Process CompilerApp where
    processDescribe this = do
        serviceDescription <- (describeCompiler)
        return (TypelayerCommonDocumentation.ApplicationDescription{TypelayerCommonDocumentation.applicationDescriptionName="compiler", TypelayerCommonDocumentation.applicationDescriptionDescription=Nothing, TypelayerCommonDocumentation.applicationDescriptionServices=[serviceDescription]})
    processHandle this encoding path body = do
        (serviceState0, response) <- do
            case (head path) of
                "new-package" -> do
                    (handleCompilerNewPackage (compilerAppService this) encoding body)
                "preview" -> do
                    (handleCompilerPreview (compilerAppService this) encoding body)
                "preview-changes" -> do
                    (handleCompilerPreviewChanges (compilerAppService this) encoding body)
                "preview-diff" -> do
                    (handleCompilerPreviewDiff (compilerAppService this) encoding body)
                _ -> do
                    TypelayerCommonPrelude.throwE (TypelayerCommonApplication.FunctionNotFound{TypelayerCommonApplication.functionNotFoundMessage="Function not found", TypelayerCommonApplication.functionNotFoundRequestedService="compiler", TypelayerCommonApplication.functionNotFoundRequestedFunction=(head path), TypelayerCommonApplication.functionNotFoundAvailableFunctions="new-package | preview | preview-changes | preview-diff"})
        let appState0 = (this{compilerAppService=serviceState0})
        respBin <- (TypelayerCommonDynamic.encoderToBinary response )
        return (appState0, respBin)

describeCompiler :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.ServiceDescription
describeCompiler  = do
    let nameFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let nameInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="name", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=nameFieldInfo})
    let newPackageInputs = [nameInfo]
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let packageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let newPackageOutputs = [packageInfo]
    let languageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="language"})
    let languageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="language", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=languageFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let packageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewInputs = [languageInfo, packageInfo]
    let filesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="file"})
    let filesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=filesInnerFieldInfo})
    let filesInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="files", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=filesFieldInfo})
    let previewOutputs = [filesInfo]
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let changesInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let packageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewChangesInputs = [changesInfo, packageInfo]
    let newPackageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let newPackageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="new_package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=newPackageFieldInfo})
    let previewChangesOutputs = [newPackageInfo]
    let otherPackageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let otherPackageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="other_package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=otherPackageFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let packageInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewDiffInputs = [otherPackageInfo, packageInfo]
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let changesInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let previewDiffOutputs = [changesInfo]
    return (TypelayerCommonDocumentation.ServiceDescription{TypelayerCommonDocumentation.serviceDescriptionName="compiler", TypelayerCommonDocumentation.serviceDescriptionDescription=Nothing, TypelayerCommonDocumentation.serviceDescriptionFunctions=[(TypelayerCommonDocumentation.FunctionDescription{TypelayerCommonDocumentation.functionDescriptionName="compiler", TypelayerCommonDocumentation.functionDescriptionDescription=Nothing, TypelayerCommonDocumentation.functionDescriptionInputs=newPackageInputs, TypelayerCommonDocumentation.functionDescriptionOutputs=newPackageOutputs}), (TypelayerCommonDocumentation.FunctionDescription{TypelayerCommonDocumentation.functionDescriptionName="compiler", TypelayerCommonDocumentation.functionDescriptionDescription=Nothing, TypelayerCommonDocumentation.functionDescriptionInputs=previewInputs, TypelayerCommonDocumentation.functionDescriptionOutputs=previewOutputs}), (TypelayerCommonDocumentation.FunctionDescription{TypelayerCommonDocumentation.functionDescriptionName="compiler", TypelayerCommonDocumentation.functionDescriptionDescription=Nothing, TypelayerCommonDocumentation.functionDescriptionInputs=previewChangesInputs, TypelayerCommonDocumentation.functionDescriptionOutputs=previewChangesOutputs}), (TypelayerCommonDocumentation.FunctionDescription{TypelayerCommonDocumentation.functionDescriptionName="compiler", TypelayerCommonDocumentation.functionDescriptionDescription=Nothing, TypelayerCommonDocumentation.functionDescriptionInputs=previewDiffInputs, TypelayerCommonDocumentation.functionDescriptionOutputs=previewDiffOutputs})]})

handleCompilerNewPackage :: Compiler a => a -> TypelayerCommonDynamic.PackedEncoding -> TypelayerCommonTypes.Binary -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCommonDynamic.PackedEncoder)
handleCompilerNewPackage implementation encoding binary = do
    decoderStart <- (TypelayerCommonDynamic.encodingStartDecoding encoding binary)
    encoderStart <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
    input <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoderStart)
    (runService0, result) <- (compilerNewPackage implementation input)
    dynamicOutput0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput encoderStart result)
    return (runService0, dynamicOutput0)

handleCompilerPreview :: Compiler a => a -> TypelayerCommonDynamic.PackedEncoding -> TypelayerCommonTypes.Binary -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCommonDynamic.PackedEncoder)
handleCompilerPreview implementation encoding binary = do
    decoderStart <- (TypelayerCommonDynamic.encodingStartDecoding encoding binary)
    encoderStart <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
    input <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput decoderStart)
    (runService0, result) <- (compilerPreview implementation input)
    dynamicOutput0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoderStart result)
    return (runService0, dynamicOutput0)

handleCompilerPreviewChanges :: Compiler a => a -> TypelayerCommonDynamic.PackedEncoding -> TypelayerCommonTypes.Binary -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCommonDynamic.PackedEncoder)
handleCompilerPreviewChanges implementation encoding binary = do
    decoderStart <- (TypelayerCommonDynamic.encodingStartDecoding encoding binary)
    encoderStart <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
    input <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoderStart)
    (runService0, result) <- (compilerPreviewChanges implementation input)
    dynamicOutput0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput encoderStart result)
    return (runService0, dynamicOutput0)

handleCompilerPreviewDiff :: Compiler a => a -> TypelayerCommonDynamic.PackedEncoding -> TypelayerCommonTypes.Binary -> TypelayerCommonPrelude.ExecuteIO (a, TypelayerCommonDynamic.PackedEncoder)
handleCompilerPreviewDiff implementation encoding binary = do
    decoderStart <- (TypelayerCommonDynamic.encodingStartDecoding encoding binary)
    encoderStart <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
    input <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput decoderStart)
    (runService0, result) <- (compilerPreviewDiff implementation input)
    dynamicOutput0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoderStart result)
    return (runService0, dynamicOutput0)