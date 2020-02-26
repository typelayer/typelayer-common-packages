{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Services.Compiler.Dynamic where
import qualified TypelayerC.Schemas.Definitions.Dynamic as TypelayerCSchemasDefinitionsDynamic
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerC.Schemas.World.Dynamic as TypelayerCSchemasWorldDynamic
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerC.Services.Compiler.Structures as TypelayerCServicesCompilerStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


dynamicGetNewPackageInput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.NewPackageInput)
dynamicGetNewPackageInput dynamicObject = do
    (newPackageInputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "new_package_input")
    case constructor of
        "new_package_input" -> do
            newPackageInputInit <- (TypelayerCServicesCompilerStructures.defaultNewPackageInput)
            let newPackageInputFields (newPackageInputGetter1, newPackageInputFieldsLeft, newPackageInputBuilder) = do
                    if (-1 < newPackageInputFieldsLeft)
                    then do
                        (newPackageInputGetter2, newPackageInputNewFieldsLeft) <- do
                            if (0 < newPackageInputFieldsLeft)
                            then do
                                return (newPackageInputGetter1, newPackageInputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct newPackageInputGetter1 )
                        newPackageInputFieldsVal <- do
                            if (0 < newPackageInputNewFieldsLeft)
                            then do
                                (newPackageInputGetter3, newPackageInputFieldName) <- (TypelayerCommonDynamic.decoderPopField newPackageInputGetter2 )
                                case newPackageInputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageInputGetter3 )})
                                    "name" -> do
                                        (newPackageInputGetter4, newPackageInputNameValue) <- (TypelayerCommonDynamic.decoderPopString newPackageInputGetter3 )
                                        let values0 = (newPackageInputBuilder{TypelayerCServicesCompilerStructures.newPackageInputName=newPackageInputNameValue})
                                        return (newPackageInputGetter4, (newPackageInputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageInputGetter3 )})
                            else do
                                return (newPackageInputGetter2, -1, newPackageInputBuilder)
                        (newPackageInputFields newPackageInputFieldsVal)
                    else do
                        return (newPackageInputGetter1, newPackageInputBuilder)
            (newPackageInputFields (newPackageInputGetter0, numFields, newPackageInputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageInputGetter0 )})

dynamicGetObjNewPackageInput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.NewPackageInput
dynamicGetObjNewPackageInput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetNewPackageInput dynamicObject)
    return retObj

dynamicPutNewPackageInput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.NewPackageInput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutNewPackageInput dynamicObject inputObject = do
    case inputObject of
        newPackageInputFieldNewPackageInput@(TypelayerCServicesCompilerStructures.NewPackageInput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "new_package_input" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "name")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCServicesCompilerStructures.newPackageInputName newPackageInputFieldNewPackageInput))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3

dynamicGetNewPackageOutput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.NewPackageOutput)
dynamicGetNewPackageOutput dynamicObject = do
    (newPackageOutputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "new_package_output")
    case constructor of
        "new_package_output" -> do
            newPackageOutputInit <- (TypelayerCServicesCompilerStructures.defaultNewPackageOutput)
            let newPackageOutputFields (newPackageOutputGetter1, newPackageOutputFieldsLeft, newPackageOutputBuilder) = do
                    if (-1 < newPackageOutputFieldsLeft)
                    then do
                        (newPackageOutputGetter2, newPackageOutputNewFieldsLeft) <- do
                            if (0 < newPackageOutputFieldsLeft)
                            then do
                                return (newPackageOutputGetter1, newPackageOutputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct newPackageOutputGetter1 )
                        newPackageOutputFieldsVal <- do
                            if (0 < newPackageOutputNewFieldsLeft)
                            then do
                                (newPackageOutputGetter3, newPackageOutputFieldName) <- (TypelayerCommonDynamic.decoderPopField newPackageOutputGetter2 )
                                case newPackageOutputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageOutputGetter3 )})
                                    "package" -> do
                                        (newPackageOutputGetter4, newPackageOutputPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage newPackageOutputGetter3)
                                        let values0 = (newPackageOutputBuilder{TypelayerCServicesCompilerStructures.newPackageOutputPackage=newPackageOutputPackageValue})
                                        return (newPackageOutputGetter4, (newPackageOutputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageOutputGetter3 )})
                            else do
                                return (newPackageOutputGetter2, -1, newPackageOutputBuilder)
                        (newPackageOutputFields newPackageOutputFieldsVal)
                    else do
                        return (newPackageOutputGetter1, newPackageOutputBuilder)
            (newPackageOutputFields (newPackageOutputGetter0, numFields, newPackageOutputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath newPackageOutputGetter0 )})

dynamicGetObjNewPackageOutput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.NewPackageOutput
dynamicGetObjNewPackageOutput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetNewPackageOutput dynamicObject)
    return retObj

dynamicPutNewPackageOutput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.NewPackageOutput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutNewPackageOutput dynamicObject inputObject = do
    case inputObject of
        newPackageOutputFieldNewPackageOutput@(TypelayerCServicesCompilerStructures.NewPackageOutput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "new_package_output" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "package")
            builder2 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder1 (TypelayerCServicesCompilerStructures.newPackageOutputPackage newPackageOutputFieldNewPackageOutput))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3

dynamicGetPreviewInput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewInput)
dynamicGetPreviewInput dynamicObject = do
    (previewInputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_input")
    case constructor of
        "preview_input" -> do
            previewInputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewInput)
            let previewInputFields (previewInputGetter1, previewInputFieldsLeft, previewInputBuilder) = do
                    if (-1 < previewInputFieldsLeft)
                    then do
                        (previewInputGetter2, previewInputNewFieldsLeft) <- do
                            if (0 < previewInputFieldsLeft)
                            then do
                                return (previewInputGetter1, previewInputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewInputGetter1 )
                        previewInputFieldsVal <- do
                            if (0 < previewInputNewFieldsLeft)
                            then do
                                (previewInputGetter3, previewInputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewInputGetter2 )
                                case previewInputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewInputGetter3 )})
                                    "language" -> do
                                        (previewInputGetter4, previewInputLanguageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetLanguage previewInputGetter3)
                                        let values0 = (previewInputBuilder{TypelayerCServicesCompilerStructures.previewInputLanguage=previewInputLanguageValue})
                                        return (previewInputGetter4, (previewInputNewFieldsLeft - 1), values0)
                                    "package" -> do
                                        (previewInputGetter4, previewInputPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage previewInputGetter3)
                                        let values0 = (previewInputBuilder{TypelayerCServicesCompilerStructures.previewInputPackage=previewInputPackageValue})
                                        return (previewInputGetter4, (previewInputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewInputGetter3 )})
                            else do
                                return (previewInputGetter2, -1, previewInputBuilder)
                        (previewInputFields previewInputFieldsVal)
                    else do
                        return (previewInputGetter1, previewInputBuilder)
            (previewInputFields (previewInputGetter0, numFields, previewInputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewInputGetter0 )})

dynamicGetObjPreviewInput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewInput
dynamicGetObjPreviewInput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewInput dynamicObject)
    return retObj

dynamicPutPreviewInput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewInput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewInput dynamicObject inputObject = do
    case inputObject of
        previewInputFieldPreviewInput@(TypelayerCServicesCompilerStructures.PreviewInput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_input" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "language")
            builder2 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutLanguage builder1 (TypelayerCServicesCompilerStructures.previewInputLanguage previewInputFieldPreviewInput))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "package")
            builder5 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder4 (TypelayerCServicesCompilerStructures.previewInputPackage previewInputFieldPreviewInput))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetPreviewOutput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewOutput)
dynamicGetPreviewOutput dynamicObject = do
    (previewOutputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_output")
    case constructor of
        "preview_output" -> do
            previewOutputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewOutput)
            let previewOutputFields (previewOutputGetter1, previewOutputFieldsLeft, previewOutputBuilder) = do
                    if (-1 < previewOutputFieldsLeft)
                    then do
                        (previewOutputGetter2, previewOutputNewFieldsLeft) <- do
                            if (0 < previewOutputFieldsLeft)
                            then do
                                return (previewOutputGetter1, previewOutputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewOutputGetter1 )
                        previewOutputFieldsVal <- do
                            if (0 < previewOutputNewFieldsLeft)
                            then do
                                (previewOutputGetter3, previewOutputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewOutputGetter2 )
                                case previewOutputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewOutputGetter3 )})
                                    "files" -> do
                                        (previewOutputGetterFiles4, previewOutputFilesInit) <- (TypelayerCommonDynamic.decoderPopList previewOutputGetter3 )
                                        let previewOutputFilesElements (previewOutputGetterFiles5, previewOutputFilesElementsLeft, previewOutputFilesListAcc) = do
                                                if (-1 < previewOutputFilesElementsLeft)
                                                then do
                                                    (previewOutputGetterFiles6, previewOutputFilesNewFieldsLeft) <- do
                                                        if (0 < previewOutputFilesElementsLeft)
                                                        then do
                                                            return (previewOutputGetterFiles5, previewOutputFilesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList previewOutputGetterFiles5 )
                                                    previewOutputFilesElementsVal <- do
                                                        if (0 < previewOutputFilesNewFieldsLeft)
                                                        then do
                                                            (previewOutputGetterFiles7, previewOutputFilesListValue) <- (TypelayerCSchemasWorldDynamic.dynamicGetFile previewOutputGetterFiles6)
                                                            let values0 = (previewOutputFilesListValue:previewOutputFilesListAcc)
                                                            return (previewOutputGetterFiles7, (previewOutputFilesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (previewOutputGetterFiles6, -1, previewOutputFilesListAcc)
                                                    (previewOutputFilesElements previewOutputFilesElementsVal)
                                                else do
                                                    return (previewOutputGetterFiles5, (reverse previewOutputFilesListAcc))
                                        (previewOutputGetter4, previewOutputFilesValue) <- (previewOutputFilesElements (previewOutputGetterFiles4, previewOutputFilesInit, []))
                                        let values0 = (previewOutputBuilder{TypelayerCServicesCompilerStructures.previewOutputFiles=previewOutputFilesValue})
                                        return (previewOutputGetter4, (previewOutputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewOutputGetter3 )})
                            else do
                                return (previewOutputGetter2, -1, previewOutputBuilder)
                        (previewOutputFields previewOutputFieldsVal)
                    else do
                        return (previewOutputGetter1, previewOutputBuilder)
            (previewOutputFields (previewOutputGetter0, numFields, previewOutputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewOutputGetter0 )})

dynamicGetObjPreviewOutput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewOutput
dynamicGetObjPreviewOutput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewOutput dynamicObject)
    return retObj

dynamicPutPreviewOutput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewOutput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewOutput dynamicObject inputObject = do
    case inputObject of
        previewOutputFieldPreviewOutput@(TypelayerCServicesCompilerStructures.PreviewOutput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_output" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "files")
            builder2 <- (TypelayerCommonDynamic.encoderPutList builder1 (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewOutputFiles previewOutputFieldPreviewOutput)))
            builder2 <- do
                if (0 == (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewOutputFiles previewOutputFieldPreviewOutput)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder2 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCServicesCompilerStructures.previewOutputFiles previewOutputFieldPreviewOutput) builder2 $ \filesIndex filesElem filesAcc -> do
                        builderFiles3 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile filesAcc filesElem)
                        builderFiles4 <- (TypelayerCommonDynamic.encoderPutElementEnd builderFiles3 (filesIndex == ((fromIntegral $ length (TypelayerCServicesCompilerStructures.previewOutputFiles previewOutputFieldPreviewOutput)) - 1)))
                        return builderFiles4
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3

dynamicGetPreviewChangesInput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewChangesInput)
dynamicGetPreviewChangesInput dynamicObject = do
    (previewChangesInputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_changes_input")
    case constructor of
        "preview_changes_input" -> do
            previewChangesInputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewChangesInput)
            let previewChangesInputFields (previewChangesInputGetter1, previewChangesInputFieldsLeft, previewChangesInputBuilder) = do
                    if (-1 < previewChangesInputFieldsLeft)
                    then do
                        (previewChangesInputGetter2, previewChangesInputNewFieldsLeft) <- do
                            if (0 < previewChangesInputFieldsLeft)
                            then do
                                return (previewChangesInputGetter1, previewChangesInputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewChangesInputGetter1 )
                        previewChangesInputFieldsVal <- do
                            if (0 < previewChangesInputNewFieldsLeft)
                            then do
                                (previewChangesInputGetter3, previewChangesInputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewChangesInputGetter2 )
                                case previewChangesInputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesInputGetter3 )})
                                    "changes" -> do
                                        (previewChangesInputGetterChanges4, previewChangesInputChangesInit) <- (TypelayerCommonDynamic.decoderPopList previewChangesInputGetter3 )
                                        let previewChangesInputChangesElements (previewChangesInputGetterChanges5, previewChangesInputChangesElementsLeft, previewChangesInputChangesListAcc) = do
                                                if (-1 < previewChangesInputChangesElementsLeft)
                                                then do
                                                    (previewChangesInputGetterChanges6, previewChangesInputChangesNewFieldsLeft) <- do
                                                        if (0 < previewChangesInputChangesElementsLeft)
                                                        then do
                                                            return (previewChangesInputGetterChanges5, previewChangesInputChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList previewChangesInputGetterChanges5 )
                                                    previewChangesInputChangesElementsVal <- do
                                                        if (0 < previewChangesInputChangesNewFieldsLeft)
                                                        then do
                                                            (previewChangesInputGetterChanges7, previewChangesInputChangesListValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetChange previewChangesInputGetterChanges6)
                                                            let values0 = (previewChangesInputChangesListValue:previewChangesInputChangesListAcc)
                                                            return (previewChangesInputGetterChanges7, (previewChangesInputChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (previewChangesInputGetterChanges6, -1, previewChangesInputChangesListAcc)
                                                    (previewChangesInputChangesElements previewChangesInputChangesElementsVal)
                                                else do
                                                    return (previewChangesInputGetterChanges5, (reverse previewChangesInputChangesListAcc))
                                        (previewChangesInputGetter4, previewChangesInputChangesValue) <- (previewChangesInputChangesElements (previewChangesInputGetterChanges4, previewChangesInputChangesInit, []))
                                        let values0 = (previewChangesInputBuilder{TypelayerCServicesCompilerStructures.previewChangesInputChanges=previewChangesInputChangesValue})
                                        return (previewChangesInputGetter4, (previewChangesInputNewFieldsLeft - 1), values0)
                                    "package" -> do
                                        (previewChangesInputGetter4, previewChangesInputPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage previewChangesInputGetter3)
                                        let values0 = (previewChangesInputBuilder{TypelayerCServicesCompilerStructures.previewChangesInputPackage=previewChangesInputPackageValue})
                                        return (previewChangesInputGetter4, (previewChangesInputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesInputGetter3 )})
                            else do
                                return (previewChangesInputGetter2, -1, previewChangesInputBuilder)
                        (previewChangesInputFields previewChangesInputFieldsVal)
                    else do
                        return (previewChangesInputGetter1, previewChangesInputBuilder)
            (previewChangesInputFields (previewChangesInputGetter0, numFields, previewChangesInputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesInputGetter0 )})

dynamicGetObjPreviewChangesInput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewChangesInput
dynamicGetObjPreviewChangesInput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewChangesInput dynamicObject)
    return retObj

dynamicPutPreviewChangesInput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewChangesInput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewChangesInput dynamicObject inputObject = do
    case inputObject of
        previewChangesInputFieldPreviewChangesInput@(TypelayerCServicesCompilerStructures.PreviewChangesInput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_changes_input" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "changes")
            builder2 <- (TypelayerCommonDynamic.encoderPutList builder1 (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewChangesInputChanges previewChangesInputFieldPreviewChangesInput)))
            builder2 <- do
                if (0 == (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewChangesInputChanges previewChangesInputFieldPreviewChangesInput)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder2 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCServicesCompilerStructures.previewChangesInputChanges previewChangesInputFieldPreviewChangesInput) builder2 $ \changesIndex changesElem changesAcc -> do
                        builderChanges3 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange changesAcc changesElem)
                        builderChanges4 <- (TypelayerCommonDynamic.encoderPutElementEnd builderChanges3 (changesIndex == ((fromIntegral $ length (TypelayerCServicesCompilerStructures.previewChangesInputChanges previewChangesInputFieldPreviewChangesInput)) - 1)))
                        return builderChanges4
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "package")
            builder5 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder4 (TypelayerCServicesCompilerStructures.previewChangesInputPackage previewChangesInputFieldPreviewChangesInput))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetPreviewChangesOutput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewChangesOutput)
dynamicGetPreviewChangesOutput dynamicObject = do
    (previewChangesOutputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_changes_output")
    case constructor of
        "preview_changes_output" -> do
            previewChangesOutputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewChangesOutput)
            let previewChangesOutputFields (previewChangesOutputGetter1, previewChangesOutputFieldsLeft, previewChangesOutputBuilder) = do
                    if (-1 < previewChangesOutputFieldsLeft)
                    then do
                        (previewChangesOutputGetter2, previewChangesOutputNewFieldsLeft) <- do
                            if (0 < previewChangesOutputFieldsLeft)
                            then do
                                return (previewChangesOutputGetter1, previewChangesOutputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewChangesOutputGetter1 )
                        previewChangesOutputFieldsVal <- do
                            if (0 < previewChangesOutputNewFieldsLeft)
                            then do
                                (previewChangesOutputGetter3, previewChangesOutputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewChangesOutputGetter2 )
                                case previewChangesOutputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesOutputGetter3 )})
                                    "new_package" -> do
                                        (previewChangesOutputGetter4, previewChangesOutputNewPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage previewChangesOutputGetter3)
                                        let values0 = (previewChangesOutputBuilder{TypelayerCServicesCompilerStructures.previewChangesOutputNewPackage=previewChangesOutputNewPackageValue})
                                        return (previewChangesOutputGetter4, (previewChangesOutputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesOutputGetter3 )})
                            else do
                                return (previewChangesOutputGetter2, -1, previewChangesOutputBuilder)
                        (previewChangesOutputFields previewChangesOutputFieldsVal)
                    else do
                        return (previewChangesOutputGetter1, previewChangesOutputBuilder)
            (previewChangesOutputFields (previewChangesOutputGetter0, numFields, previewChangesOutputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewChangesOutputGetter0 )})

dynamicGetObjPreviewChangesOutput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewChangesOutput
dynamicGetObjPreviewChangesOutput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewChangesOutput dynamicObject)
    return retObj

dynamicPutPreviewChangesOutput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewChangesOutput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewChangesOutput dynamicObject inputObject = do
    case inputObject of
        previewChangesOutputFieldPreviewChangesOutput@(TypelayerCServicesCompilerStructures.PreviewChangesOutput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_changes_output" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "new_package")
            builder2 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder1 (TypelayerCServicesCompilerStructures.previewChangesOutputNewPackage previewChangesOutputFieldPreviewChangesOutput))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3

dynamicGetPreviewDiffInput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewDiffInput)
dynamicGetPreviewDiffInput dynamicObject = do
    (previewDiffInputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_diff_input")
    case constructor of
        "preview_diff_input" -> do
            previewDiffInputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewDiffInput)
            let previewDiffInputFields (previewDiffInputGetter1, previewDiffInputFieldsLeft, previewDiffInputBuilder) = do
                    if (-1 < previewDiffInputFieldsLeft)
                    then do
                        (previewDiffInputGetter2, previewDiffInputNewFieldsLeft) <- do
                            if (0 < previewDiffInputFieldsLeft)
                            then do
                                return (previewDiffInputGetter1, previewDiffInputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewDiffInputGetter1 )
                        previewDiffInputFieldsVal <- do
                            if (0 < previewDiffInputNewFieldsLeft)
                            then do
                                (previewDiffInputGetter3, previewDiffInputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewDiffInputGetter2 )
                                case previewDiffInputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffInputGetter3 )})
                                    "other_package" -> do
                                        (previewDiffInputGetter4, previewDiffInputOtherPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage previewDiffInputGetter3)
                                        let values0 = (previewDiffInputBuilder{TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage=previewDiffInputOtherPackageValue})
                                        return (previewDiffInputGetter4, (previewDiffInputNewFieldsLeft - 1), values0)
                                    "package" -> do
                                        (previewDiffInputGetter4, previewDiffInputPackageValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetPackage previewDiffInputGetter3)
                                        let values0 = (previewDiffInputBuilder{TypelayerCServicesCompilerStructures.previewDiffInputPackage=previewDiffInputPackageValue})
                                        return (previewDiffInputGetter4, (previewDiffInputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffInputGetter3 )})
                            else do
                                return (previewDiffInputGetter2, -1, previewDiffInputBuilder)
                        (previewDiffInputFields previewDiffInputFieldsVal)
                    else do
                        return (previewDiffInputGetter1, previewDiffInputBuilder)
            (previewDiffInputFields (previewDiffInputGetter0, numFields, previewDiffInputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffInputGetter0 )})

dynamicGetObjPreviewDiffInput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewDiffInput
dynamicGetObjPreviewDiffInput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewDiffInput dynamicObject)
    return retObj

dynamicPutPreviewDiffInput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewDiffInput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewDiffInput dynamicObject inputObject = do
    case inputObject of
        previewDiffInputFieldPreviewDiffInput@(TypelayerCServicesCompilerStructures.PreviewDiffInput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_diff_input" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "other_package")
            builder2 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder1 (TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage previewDiffInputFieldPreviewDiffInput))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "package")
            builder5 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage builder4 (TypelayerCServicesCompilerStructures.previewDiffInputPackage previewDiffInputFieldPreviewDiffInput))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetPreviewDiffOutput :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCServicesCompilerStructures.PreviewDiffOutput)
dynamicGetPreviewDiffOutput dynamicObject = do
    (previewDiffOutputGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "preview_diff_output")
    case constructor of
        "preview_diff_output" -> do
            previewDiffOutputInit <- (TypelayerCServicesCompilerStructures.defaultPreviewDiffOutput)
            let previewDiffOutputFields (previewDiffOutputGetter1, previewDiffOutputFieldsLeft, previewDiffOutputBuilder) = do
                    if (-1 < previewDiffOutputFieldsLeft)
                    then do
                        (previewDiffOutputGetter2, previewDiffOutputNewFieldsLeft) <- do
                            if (0 < previewDiffOutputFieldsLeft)
                            then do
                                return (previewDiffOutputGetter1, previewDiffOutputFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct previewDiffOutputGetter1 )
                        previewDiffOutputFieldsVal <- do
                            if (0 < previewDiffOutputNewFieldsLeft)
                            then do
                                (previewDiffOutputGetter3, previewDiffOutputFieldName) <- (TypelayerCommonDynamic.decoderPopField previewDiffOutputGetter2 )
                                case previewDiffOutputFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffOutputGetter3 )})
                                    "changes" -> do
                                        (previewDiffOutputGetterChanges4, previewDiffOutputChangesInit) <- (TypelayerCommonDynamic.decoderPopList previewDiffOutputGetter3 )
                                        let previewDiffOutputChangesElements (previewDiffOutputGetterChanges5, previewDiffOutputChangesElementsLeft, previewDiffOutputChangesListAcc) = do
                                                if (-1 < previewDiffOutputChangesElementsLeft)
                                                then do
                                                    (previewDiffOutputGetterChanges6, previewDiffOutputChangesNewFieldsLeft) <- do
                                                        if (0 < previewDiffOutputChangesElementsLeft)
                                                        then do
                                                            return (previewDiffOutputGetterChanges5, previewDiffOutputChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList previewDiffOutputGetterChanges5 )
                                                    previewDiffOutputChangesElementsVal <- do
                                                        if (0 < previewDiffOutputChangesNewFieldsLeft)
                                                        then do
                                                            (previewDiffOutputGetterChanges7, previewDiffOutputChangesListValue) <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetChange previewDiffOutputGetterChanges6)
                                                            let values0 = (previewDiffOutputChangesListValue:previewDiffOutputChangesListAcc)
                                                            return (previewDiffOutputGetterChanges7, (previewDiffOutputChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (previewDiffOutputGetterChanges6, -1, previewDiffOutputChangesListAcc)
                                                    (previewDiffOutputChangesElements previewDiffOutputChangesElementsVal)
                                                else do
                                                    return (previewDiffOutputGetterChanges5, (reverse previewDiffOutputChangesListAcc))
                                        (previewDiffOutputGetter4, previewDiffOutputChangesValue) <- (previewDiffOutputChangesElements (previewDiffOutputGetterChanges4, previewDiffOutputChangesInit, []))
                                        let values0 = (previewDiffOutputBuilder{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=previewDiffOutputChangesValue})
                                        return (previewDiffOutputGetter4, (previewDiffOutputNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffOutputGetter3 )})
                            else do
                                return (previewDiffOutputGetter2, -1, previewDiffOutputBuilder)
                        (previewDiffOutputFields previewDiffOutputFieldsVal)
                    else do
                        return (previewDiffOutputGetter1, previewDiffOutputBuilder)
            (previewDiffOutputFields (previewDiffOutputGetter0, numFields, previewDiffOutputInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath previewDiffOutputGetter0 )})

dynamicGetObjPreviewDiffOutput :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCServicesCompilerStructures.PreviewDiffOutput
dynamicGetObjPreviewDiffOutput dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPreviewDiffOutput dynamicObject)
    return retObj

dynamicPutPreviewDiffOutput :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCServicesCompilerStructures.PreviewDiffOutput -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPreviewDiffOutput dynamicObject inputObject = do
    case inputObject of
        previewDiffOutputFieldPreviewDiffOutput@(TypelayerCServicesCompilerStructures.PreviewDiffOutput{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "preview_diff_output" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "changes")
            builder2 <- (TypelayerCommonDynamic.encoderPutList builder1 (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewDiffOutputChanges previewDiffOutputFieldPreviewDiffOutput)))
            builder2 <- do
                if (0 == (fromIntegral $ length (TypelayerCServicesCompilerStructures.previewDiffOutputChanges previewDiffOutputFieldPreviewDiffOutput)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder2 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCServicesCompilerStructures.previewDiffOutputChanges previewDiffOutputFieldPreviewDiffOutput) builder2 $ \changesIndex changesElem changesAcc -> do
                        builderChanges3 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange changesAcc changesElem)
                        builderChanges4 <- (TypelayerCommonDynamic.encoderPutElementEnd builderChanges3 (changesIndex == ((fromIntegral $ length (TypelayerCServicesCompilerStructures.previewDiffOutputChanges previewDiffOutputFieldPreviewDiffOutput)) - 1)))
                        return builderChanges4
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3