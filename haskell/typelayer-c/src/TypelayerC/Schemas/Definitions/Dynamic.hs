{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.Definitions.Dynamic where
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


dynamicGetApplyChangesProxy :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy)
dynamicGetApplyChangesProxy dynamicObject = do
    (applyChangesProxyGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "apply_changes_proxy")
    case constructor of
        "apply_changes_proxy" -> do
            applyChangesProxyInit <- (TypelayerCSchemasDefinitionsStructures.defaultApplyChangesProxy)
            let applyChangesProxyFields (applyChangesProxyGetter1, applyChangesProxyFieldsLeft, applyChangesProxyBuilder) = do
                    if (-1 < applyChangesProxyFieldsLeft)
                    then do
                        (applyChangesProxyGetter2, applyChangesProxyNewFieldsLeft) <- do
                            if (0 < applyChangesProxyFieldsLeft)
                            then do
                                return (applyChangesProxyGetter1, applyChangesProxyFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct applyChangesProxyGetter1 )
                        applyChangesProxyFieldsVal <- do
                            if (0 < applyChangesProxyNewFieldsLeft)
                            then do
                                (applyChangesProxyGetter3, applyChangesProxyFieldName) <- (TypelayerCommonDynamic.decoderPopField applyChangesProxyGetter2 )
                                case applyChangesProxyFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath applyChangesProxyGetter3 )})
                                    "a_changes" -> do
                                        (applyChangesProxyGetterAChanges4, applyChangesProxyAChangesInit) <- (TypelayerCommonDynamic.decoderPopList applyChangesProxyGetter3 )
                                        let applyChangesProxyAChangesElements (applyChangesProxyGetterAChanges5, applyChangesProxyAChangesElementsLeft, applyChangesProxyAChangesListAcc) = do
                                                if (-1 < applyChangesProxyAChangesElementsLeft)
                                                then do
                                                    (applyChangesProxyGetterAChanges6, applyChangesProxyAChangesNewFieldsLeft) <- do
                                                        if (0 < applyChangesProxyAChangesElementsLeft)
                                                        then do
                                                            return (applyChangesProxyGetterAChanges5, applyChangesProxyAChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList applyChangesProxyGetterAChanges5 )
                                                    applyChangesProxyAChangesElementsVal <- do
                                                        if (0 < applyChangesProxyAChangesNewFieldsLeft)
                                                        then do
                                                            (applyChangesProxyGetterAChanges7, applyChangesProxyAChangesListValue) <- (dynamicGetChange applyChangesProxyGetterAChanges6)
                                                            let values0 = (applyChangesProxyAChangesListValue:applyChangesProxyAChangesListAcc)
                                                            return (applyChangesProxyGetterAChanges7, (applyChangesProxyAChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (applyChangesProxyGetterAChanges6, -1, applyChangesProxyAChangesListAcc)
                                                    (applyChangesProxyAChangesElements applyChangesProxyAChangesElementsVal)
                                                else do
                                                    return (applyChangesProxyGetterAChanges5, (reverse applyChangesProxyAChangesListAcc))
                                        (applyChangesProxyGetter4, applyChangesProxyAChangesValue) <- (applyChangesProxyAChangesElements (applyChangesProxyGetterAChanges4, applyChangesProxyAChangesInit, []))
                                        let values0 = (applyChangesProxyBuilder{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=applyChangesProxyAChangesValue})
                                        return (applyChangesProxyGetter4, (applyChangesProxyNewFieldsLeft - 1), values0)
                                    "changes" -> do
                                        (applyChangesProxyGetterChanges4, applyChangesProxyChangesInit) <- (TypelayerCommonDynamic.decoderPopList applyChangesProxyGetter3 )
                                        let applyChangesProxyChangesElements (applyChangesProxyGetterChanges5, applyChangesProxyChangesElementsLeft, applyChangesProxyChangesListAcc) = do
                                                if (-1 < applyChangesProxyChangesElementsLeft)
                                                then do
                                                    (applyChangesProxyGetterChanges6, applyChangesProxyChangesNewFieldsLeft) <- do
                                                        if (0 < applyChangesProxyChangesElementsLeft)
                                                        then do
                                                            return (applyChangesProxyGetterChanges5, applyChangesProxyChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList applyChangesProxyGetterChanges5 )
                                                    applyChangesProxyChangesElementsVal <- do
                                                        if (0 < applyChangesProxyChangesNewFieldsLeft)
                                                        then do
                                                            (applyChangesProxyGetterChanges7, applyChangesProxyChangesListValue) <- (dynamicGetChange applyChangesProxyGetterChanges6)
                                                            let values0 = (applyChangesProxyChangesListValue:applyChangesProxyChangesListAcc)
                                                            return (applyChangesProxyGetterChanges7, (applyChangesProxyChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (applyChangesProxyGetterChanges6, -1, applyChangesProxyChangesListAcc)
                                                    (applyChangesProxyChangesElements applyChangesProxyChangesElementsVal)
                                                else do
                                                    return (applyChangesProxyGetterChanges5, (reverse applyChangesProxyChangesListAcc))
                                        (applyChangesProxyGetter4, applyChangesProxyChangesValue) <- (applyChangesProxyChangesElements (applyChangesProxyGetterChanges4, applyChangesProxyChangesInit, []))
                                        let values0 = (applyChangesProxyBuilder{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=applyChangesProxyChangesValue})
                                        return (applyChangesProxyGetter4, (applyChangesProxyNewFieldsLeft - 1), values0)
                                    "package" -> do
                                        (applyChangesProxyGetter4, applyChangesProxyPackageValue) <- (dynamicGetPackage applyChangesProxyGetter3)
                                        let values0 = (applyChangesProxyBuilder{TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=applyChangesProxyPackageValue})
                                        return (applyChangesProxyGetter4, (applyChangesProxyNewFieldsLeft - 1), values0)
                                    "z_changes" -> do
                                        (applyChangesProxyGetterZChanges4, applyChangesProxyZChangesInit) <- (TypelayerCommonDynamic.decoderPopList applyChangesProxyGetter3 )
                                        let applyChangesProxyZChangesElements (applyChangesProxyGetterZChanges5, applyChangesProxyZChangesElementsLeft, applyChangesProxyZChangesListAcc) = do
                                                if (-1 < applyChangesProxyZChangesElementsLeft)
                                                then do
                                                    (applyChangesProxyGetterZChanges6, applyChangesProxyZChangesNewFieldsLeft) <- do
                                                        if (0 < applyChangesProxyZChangesElementsLeft)
                                                        then do
                                                            return (applyChangesProxyGetterZChanges5, applyChangesProxyZChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList applyChangesProxyGetterZChanges5 )
                                                    applyChangesProxyZChangesElementsVal <- do
                                                        if (0 < applyChangesProxyZChangesNewFieldsLeft)
                                                        then do
                                                            (applyChangesProxyGetterZChanges7, applyChangesProxyZChangesListValue) <- (dynamicGetChange applyChangesProxyGetterZChanges6)
                                                            let values0 = (applyChangesProxyZChangesListValue:applyChangesProxyZChangesListAcc)
                                                            return (applyChangesProxyGetterZChanges7, (applyChangesProxyZChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (applyChangesProxyGetterZChanges6, -1, applyChangesProxyZChangesListAcc)
                                                    (applyChangesProxyZChangesElements applyChangesProxyZChangesElementsVal)
                                                else do
                                                    return (applyChangesProxyGetterZChanges5, (reverse applyChangesProxyZChangesListAcc))
                                        (applyChangesProxyGetter4, applyChangesProxyZChangesValue) <- (applyChangesProxyZChangesElements (applyChangesProxyGetterZChanges4, applyChangesProxyZChangesInit, []))
                                        let values0 = (applyChangesProxyBuilder{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=applyChangesProxyZChangesValue})
                                        return (applyChangesProxyGetter4, (applyChangesProxyNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath applyChangesProxyGetter3 )})
                            else do
                                return (applyChangesProxyGetter2, -1, applyChangesProxyBuilder)
                        (applyChangesProxyFields applyChangesProxyFieldsVal)
                    else do
                        return (applyChangesProxyGetter1, applyChangesProxyBuilder)
            (applyChangesProxyFields (applyChangesProxyGetter0, numFields, applyChangesProxyInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath applyChangesProxyGetter0 )})

dynamicGetObjApplyChangesProxy :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy
dynamicGetObjApplyChangesProxy dynamicObject = do
    (gotten0, retObj) <- (dynamicGetApplyChangesProxy dynamicObject)
    return retObj

dynamicPutApplyChangesProxy :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy -> TypelayerCommonPrelude.ExecuteM a
dynamicPutApplyChangesProxy dynamicObject inputObject = do
    case inputObject of
        applyChangesProxyFieldApplyChangesProxy@(TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "apply_changes_proxy" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "a_changes")
            builder2 <- (TypelayerCommonDynamic.encoderPutList builder1 (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges applyChangesProxyFieldApplyChangesProxy)))
            builder2 <- do
                if (0 == (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges applyChangesProxyFieldApplyChangesProxy)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder2 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges applyChangesProxyFieldApplyChangesProxy) builder2 $ \aChangesIndex aChangesElem aChangesAcc -> do
                        builderAChanges3 <- (dynamicPutChange aChangesAcc aChangesElem)
                        builderAChanges4 <- (TypelayerCommonDynamic.encoderPutElementEnd builderAChanges3 (aChangesIndex == ((fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges applyChangesProxyFieldApplyChangesProxy)) - 1)))
                        return builderAChanges4
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "changes")
            builder5 <- (TypelayerCommonDynamic.encoderPutList builder4 (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges applyChangesProxyFieldApplyChangesProxy)))
            builder5 <- do
                if (0 == (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges applyChangesProxyFieldApplyChangesProxy)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder5 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges applyChangesProxyFieldApplyChangesProxy) builder5 $ \changesIndex changesElem changesAcc -> do
                        builderChanges6 <- (dynamicPutChange changesAcc changesElem)
                        builderChanges7 <- (TypelayerCommonDynamic.encoderPutElementEnd builderChanges6 (changesIndex == ((fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges applyChangesProxyFieldApplyChangesProxy)) - 1)))
                        return builderChanges7
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "package")
            builder8 <- (dynamicPutPackage builder7 (TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage applyChangesProxyFieldApplyChangesProxy))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "z_changes")
            builder11 <- (TypelayerCommonDynamic.encoderPutList builder10 (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges applyChangesProxyFieldApplyChangesProxy)))
            builder11 <- do
                if (0 == (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges applyChangesProxyFieldApplyChangesProxy)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder11 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges applyChangesProxyFieldApplyChangesProxy) builder11 $ \zChangesIndex zChangesElem zChangesAcc -> do
                        builderZChanges12 <- (dynamicPutChange zChangesAcc zChangesElem)
                        builderZChanges13 <- (TypelayerCommonDynamic.encoderPutElementEnd builderZChanges12 (zChangesIndex == ((fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges applyChangesProxyFieldApplyChangesProxy)) - 1)))
                        return builderZChanges13
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12

dynamicGetBackend :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Backend)
dynamicGetBackend dynamicObject = do
    (backendGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "database")
    case constructor of
        "database" -> do
            databaseInit <- (TypelayerCSchemasDefinitionsStructures.defaultDatabase)
            let databaseFields (backendGetter1, databaseFieldsLeft, databaseBuilder) = do
                    if (-1 < databaseFieldsLeft)
                    then do
                        (backendGetter2, databaseNewFieldsLeft) <- do
                            if (0 < databaseFieldsLeft)
                            then do
                                return (backendGetter1, databaseFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct backendGetter1 )
                        databaseFieldsVal <- do
                            if (0 < databaseNewFieldsLeft)
                            then do
                                (backendGetter3, databaseFieldName) <- (TypelayerCommonDynamic.decoderPopField backendGetter2 )
                                case databaseFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath backendGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath backendGetter3 )})
                            else do
                                return (backendGetter2, -1, databaseBuilder)
                        (databaseFields databaseFieldsVal)
                    else do
                        return (backendGetter1, databaseBuilder)
            (databaseFields (backendGetter0, numFields, databaseInit))
        "simple" -> do
            simpleInit <- (TypelayerCSchemasDefinitionsStructures.defaultSimple)
            let simpleFields (backendGetter1, simpleFieldsLeft, simpleBuilder) = do
                    if (-1 < simpleFieldsLeft)
                    then do
                        (backendGetter2, simpleNewFieldsLeft) <- do
                            if (0 < simpleFieldsLeft)
                            then do
                                return (backendGetter1, simpleFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct backendGetter1 )
                        simpleFieldsVal <- do
                            if (0 < simpleNewFieldsLeft)
                            then do
                                (backendGetter3, simpleFieldName) <- (TypelayerCommonDynamic.decoderPopField backendGetter2 )
                                case simpleFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath backendGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath backendGetter3 )})
                            else do
                                return (backendGetter2, -1, simpleBuilder)
                        (simpleFields simpleFieldsVal)
                    else do
                        return (backendGetter1, simpleBuilder)
            (simpleFields (backendGetter0, numFields, simpleInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath backendGetter0 )})

dynamicGetObjBackend :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Backend
dynamicGetObjBackend dynamicObject = do
    (gotten0, retObj) <- (dynamicGetBackend dynamicObject)
    return retObj

dynamicPutBackend :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Backend -> TypelayerCommonPrelude.ExecuteM a
dynamicPutBackend dynamicObject inputObject = do
    case inputObject of
        backendFieldDatabase@(TypelayerCSchemasDefinitionsStructures.Database{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "database" 0)
            return builder0
        backendFieldSimple@(TypelayerCSchemasDefinitionsStructures.Simple{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "simple" 0)
            return builder0

dynamicGetBasicType :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.BasicType)
dynamicGetBasicType dynamicObject = do
    (basicTypeGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "binary_type")
    case constructor of
        "binary_type" -> do
            binaryTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultBinaryType)
            let binaryTypeFields (basicTypeGetter1, binaryTypeFieldsLeft, binaryTypeBuilder) = do
                    if (-1 < binaryTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, binaryTypeNewFieldsLeft) <- do
                            if (0 < binaryTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, binaryTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        binaryTypeFieldsVal <- do
                            if (0 < binaryTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, binaryTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case binaryTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, binaryTypeBuilder)
                        (binaryTypeFields binaryTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, binaryTypeBuilder)
            (binaryTypeFields (basicTypeGetter0, numFields, binaryTypeInit))
        "boolean_type" -> do
            booleanTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultBooleanType)
            let booleanTypeFields (basicTypeGetter1, booleanTypeFieldsLeft, booleanTypeBuilder) = do
                    if (-1 < booleanTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, booleanTypeNewFieldsLeft) <- do
                            if (0 < booleanTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, booleanTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        booleanTypeFieldsVal <- do
                            if (0 < booleanTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, booleanTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case booleanTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, booleanTypeBuilder)
                        (booleanTypeFields booleanTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, booleanTypeBuilder)
            (booleanTypeFields (basicTypeGetter0, numFields, booleanTypeInit))
        "date_time_type" -> do
            dateTimeTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultDateTimeType)
            let dateTimeTypeFields (basicTypeGetter1, dateTimeTypeFieldsLeft, dateTimeTypeBuilder) = do
                    if (-1 < dateTimeTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, dateTimeTypeNewFieldsLeft) <- do
                            if (0 < dateTimeTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, dateTimeTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        dateTimeTypeFieldsVal <- do
                            if (0 < dateTimeTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, dateTimeTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case dateTimeTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, dateTimeTypeBuilder)
                        (dateTimeTypeFields dateTimeTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, dateTimeTypeBuilder)
            (dateTimeTypeFields (basicTypeGetter0, numFields, dateTimeTypeInit))
        "double_type" -> do
            doubleTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultDoubleType)
            let doubleTypeFields (basicTypeGetter1, doubleTypeFieldsLeft, doubleTypeBuilder) = do
                    if (-1 < doubleTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, doubleTypeNewFieldsLeft) <- do
                            if (0 < doubleTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, doubleTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        doubleTypeFieldsVal <- do
                            if (0 < doubleTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, doubleTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case doubleTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, doubleTypeBuilder)
                        (doubleTypeFields doubleTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, doubleTypeBuilder)
            (doubleTypeFields (basicTypeGetter0, numFields, doubleTypeInit))
        "integer_type" -> do
            integerTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultIntegerType)
            let integerTypeFields (basicTypeGetter1, integerTypeFieldsLeft, integerTypeBuilder) = do
                    if (-1 < integerTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, integerTypeNewFieldsLeft) <- do
                            if (0 < integerTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, integerTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        integerTypeFieldsVal <- do
                            if (0 < integerTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, integerTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case integerTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, integerTypeBuilder)
                        (integerTypeFields integerTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, integerTypeBuilder)
            (integerTypeFields (basicTypeGetter0, numFields, integerTypeInit))
        "list_type" -> do
            listTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultListType)
            let listTypeFields (basicTypeGetter1, listTypeFieldsLeft, listTypeBuilder) = do
                    if (-1 < listTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, listTypeNewFieldsLeft) <- do
                            if (0 < listTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, listTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        listTypeFieldsVal <- do
                            if (0 < listTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, listTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case listTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    "of" -> do
                                        (basicTypeGetter4, listTypeOfValue) <- (dynamicGetBasicType basicTypeGetter3)
                                        let values0 = (listTypeBuilder{TypelayerCSchemasDefinitionsStructures.listTypeOf=listTypeOfValue})
                                        return (basicTypeGetter4, (listTypeNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, listTypeBuilder)
                        (listTypeFields listTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, listTypeBuilder)
            (listTypeFields (basicTypeGetter0, numFields, listTypeInit))
        "map_type" -> do
            mapTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultMapType)
            let mapTypeFields (basicTypeGetter1, mapTypeFieldsLeft, mapTypeBuilder) = do
                    if (-1 < mapTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, mapTypeNewFieldsLeft) <- do
                            if (0 < mapTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, mapTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        mapTypeFieldsVal <- do
                            if (0 < mapTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, mapTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case mapTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    "of" -> do
                                        (basicTypeGetter4, mapTypeOfValue) <- (dynamicGetBasicType basicTypeGetter3)
                                        let values0 = (mapTypeBuilder{TypelayerCSchemasDefinitionsStructures.mapTypeOf=mapTypeOfValue})
                                        return (basicTypeGetter4, (mapTypeNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, mapTypeBuilder)
                        (mapTypeFields mapTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, mapTypeBuilder)
            (mapTypeFields (basicTypeGetter0, numFields, mapTypeInit))
        "maybe_type" -> do
            maybeTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultMaybeType)
            let maybeTypeFields (basicTypeGetter1, maybeTypeFieldsLeft, maybeTypeBuilder) = do
                    if (-1 < maybeTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, maybeTypeNewFieldsLeft) <- do
                            if (0 < maybeTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, maybeTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        maybeTypeFieldsVal <- do
                            if (0 < maybeTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, maybeTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case maybeTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    "of" -> do
                                        (basicTypeGetter4, maybeTypeOfValue) <- (dynamicGetBasicType basicTypeGetter3)
                                        let values0 = (maybeTypeBuilder{TypelayerCSchemasDefinitionsStructures.maybeTypeOf=maybeTypeOfValue})
                                        return (basicTypeGetter4, (maybeTypeNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, maybeTypeBuilder)
                        (maybeTypeFields maybeTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, maybeTypeBuilder)
            (maybeTypeFields (basicTypeGetter0, numFields, maybeTypeInit))
        "struct_type" -> do
            structTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultStructType)
            let structTypeFields (basicTypeGetter1, structTypeFieldsLeft, structTypeBuilder) = do
                    if (-1 < structTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, structTypeNewFieldsLeft) <- do
                            if (0 < structTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, structTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        structTypeFieldsVal <- do
                            if (0 < structTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, structTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case structTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    "id" -> do
                                        (basicTypeGetter4, structTypeIdValue) <- (TypelayerCommonDynamic.decoderPopString basicTypeGetter3 )
                                        let values0 = (structTypeBuilder{TypelayerCSchemasDefinitionsStructures.structTypeId=structTypeIdValue})
                                        return (basicTypeGetter4, (structTypeNewFieldsLeft - 1), values0)
                                    "schema" -> do
                                        (basicTypeGetter4, structTypeSchemaValue) <- (dynamicGetSchemaReference basicTypeGetter3)
                                        let values0 = (structTypeBuilder{TypelayerCSchemasDefinitionsStructures.structTypeSchema=structTypeSchemaValue})
                                        return (basicTypeGetter4, (structTypeNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, structTypeBuilder)
                        (structTypeFields structTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, structTypeBuilder)
            (structTypeFields (basicTypeGetter0, numFields, structTypeInit))
        "text_type" -> do
            textTypeInit <- (TypelayerCSchemasDefinitionsStructures.defaultTextType)
            let textTypeFields (basicTypeGetter1, textTypeFieldsLeft, textTypeBuilder) = do
                    if (-1 < textTypeFieldsLeft)
                    then do
                        (basicTypeGetter2, textTypeNewFieldsLeft) <- do
                            if (0 < textTypeFieldsLeft)
                            then do
                                return (basicTypeGetter1, textTypeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct basicTypeGetter1 )
                        textTypeFieldsVal <- do
                            if (0 < textTypeNewFieldsLeft)
                            then do
                                (basicTypeGetter3, textTypeFieldName) <- (TypelayerCommonDynamic.decoderPopField basicTypeGetter2 )
                                case textTypeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter3 )})
                            else do
                                return (basicTypeGetter2, -1, textTypeBuilder)
                        (textTypeFields textTypeFieldsVal)
                    else do
                        return (basicTypeGetter1, textTypeBuilder)
            (textTypeFields (basicTypeGetter0, numFields, textTypeInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath basicTypeGetter0 )})

dynamicGetObjBasicType :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.BasicType
dynamicGetObjBasicType dynamicObject = do
    (gotten0, retObj) <- (dynamicGetBasicType dynamicObject)
    return retObj

dynamicPutBasicType :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.BasicType -> TypelayerCommonPrelude.ExecuteM a
dynamicPutBasicType dynamicObject inputObject = do
    case inputObject of
        basicTypeFieldBinaryType@(TypelayerCSchemasDefinitionsStructures.BinaryType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "binary_type" 0)
            return builder0
        basicTypeFieldBooleanType@(TypelayerCSchemasDefinitionsStructures.BooleanType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "boolean_type" 0)
            return builder0
        basicTypeFieldDateTimeType@(TypelayerCSchemasDefinitionsStructures.DateTimeType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "date_time_type" 0)
            return builder0
        basicTypeFieldDoubleType@(TypelayerCSchemasDefinitionsStructures.DoubleType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "double_type" 0)
            return builder0
        basicTypeFieldIntegerType@(TypelayerCSchemasDefinitionsStructures.IntegerType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "integer_type" 0)
            return builder0
        basicTypeFieldListType@(TypelayerCSchemasDefinitionsStructures.ListType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "list_type" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "of")
            builder2 <- (dynamicPutBasicType builder1 (TypelayerCSchemasDefinitionsStructures.listTypeOf basicTypeFieldListType))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        basicTypeFieldMapType@(TypelayerCSchemasDefinitionsStructures.MapType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "map_type" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "of")
            builder2 <- (dynamicPutBasicType builder1 (TypelayerCSchemasDefinitionsStructures.mapTypeOf basicTypeFieldMapType))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        basicTypeFieldMaybeType@(TypelayerCSchemasDefinitionsStructures.MaybeType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "maybe_type" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "of")
            builder2 <- (dynamicPutBasicType builder1 (TypelayerCSchemasDefinitionsStructures.maybeTypeOf basicTypeFieldMaybeType))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        basicTypeFieldStructType@(TypelayerCSchemasDefinitionsStructures.StructType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "struct_type" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.structTypeId basicTypeFieldStructType))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "schema")
            builder5 <- (dynamicPutSchemaReference builder4 (TypelayerCSchemasDefinitionsStructures.structTypeSchema basicTypeFieldStructType))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6
        basicTypeFieldTextType@(TypelayerCSchemasDefinitionsStructures.TextType{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "text_type" 0)
            return builder0

dynamicGetChange :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Change)
dynamicGetChange dynamicObject = do
    (changeGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "add_column")
    case constructor of
        "add_column" -> do
            addColumnInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddColumn)
            let addColumnFields (changeGetter1, addColumnFieldsLeft, addColumnBuilder) = do
                    if (-1 < addColumnFieldsLeft)
                    then do
                        (changeGetter2, addColumnNewFieldsLeft) <- do
                            if (0 < addColumnFieldsLeft)
                            then do
                                return (changeGetter1, addColumnFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addColumnFieldsVal <- do
                            if (0 < addColumnNewFieldsLeft)
                            then do
                                (changeGetter3, addColumnFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addColumnFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "column_id" -> do
                                        (changeGetter4, addColumnColumnIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addColumnBuilder{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=addColumnColumnIdValue})
                                        return (changeGetter4, (addColumnNewFieldsLeft - 1), values0)
                                    "database_id" -> do
                                        (changeGetter4, addColumnDatabaseIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addColumnBuilder{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=addColumnDatabaseIdValue})
                                        return (changeGetter4, (addColumnNewFieldsLeft - 1), values0)
                                    "table_id" -> do
                                        (changeGetter4, addColumnTableIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addColumnBuilder{TypelayerCSchemasDefinitionsStructures.addColumnTableId=addColumnTableIdValue})
                                        return (changeGetter4, (addColumnNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addColumnBuilder)
                        (addColumnFields addColumnFieldsVal)
                    else do
                        return (changeGetter1, addColumnBuilder)
            (addColumnFields (changeGetter0, numFields, addColumnInit))
        "add_database" -> do
            addDatabaseInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddDatabase)
            let addDatabaseFields (changeGetter1, addDatabaseFieldsLeft, addDatabaseBuilder) = do
                    if (-1 < addDatabaseFieldsLeft)
                    then do
                        (changeGetter2, addDatabaseNewFieldsLeft) <- do
                            if (0 < addDatabaseFieldsLeft)
                            then do
                                return (changeGetter1, addDatabaseFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addDatabaseFieldsVal <- do
                            if (0 < addDatabaseNewFieldsLeft)
                            then do
                                (changeGetter3, addDatabaseFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addDatabaseFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "database_id" -> do
                                        (changeGetter4, addDatabaseDatabaseIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addDatabaseBuilder{TypelayerCSchemasDefinitionsStructures.addDatabaseDatabaseId=addDatabaseDatabaseIdValue})
                                        return (changeGetter4, (addDatabaseNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addDatabaseBuilder)
                        (addDatabaseFields addDatabaseFieldsVal)
                    else do
                        return (changeGetter1, addDatabaseBuilder)
            (addDatabaseFields (changeGetter0, numFields, addDatabaseInit))
        "add_field" -> do
            addFieldInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddField)
            let addFieldFields (changeGetter1, addFieldFieldsLeft, addFieldBuilder) = do
                    if (-1 < addFieldFieldsLeft)
                    then do
                        (changeGetter2, addFieldNewFieldsLeft) <- do
                            if (0 < addFieldFieldsLeft)
                            then do
                                return (changeGetter1, addFieldFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addFieldFieldsVal <- do
                            if (0 < addFieldNewFieldsLeft)
                            then do
                                (changeGetter3, addFieldFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addFieldFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "constructor_id" -> do
                                        (changeGetter4, addFieldConstructorIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addFieldBuilder{TypelayerCSchemasDefinitionsStructures.addFieldConstructorId=addFieldConstructorIdValue})
                                        return (changeGetter4, (addFieldNewFieldsLeft - 1), values0)
                                    "field" -> do
                                        (changeGetter4, addFieldFieldValue) <- (dynamicGetField changeGetter3)
                                        let values0 = (addFieldBuilder{TypelayerCSchemasDefinitionsStructures.addFieldField=addFieldFieldValue})
                                        return (changeGetter4, (addFieldNewFieldsLeft - 1), values0)
                                    "field_id" -> do
                                        (changeGetter4, addFieldFieldIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addFieldBuilder{TypelayerCSchemasDefinitionsStructures.addFieldFieldId=addFieldFieldIdValue})
                                        return (changeGetter4, (addFieldNewFieldsLeft - 1), values0)
                                    "schema_id" -> do
                                        (changeGetter4, addFieldSchemaIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addFieldBuilder{TypelayerCSchemasDefinitionsStructures.addFieldSchemaId=addFieldSchemaIdValue})
                                        return (changeGetter4, (addFieldNewFieldsLeft - 1), values0)
                                    "structure_id" -> do
                                        (changeGetter4, addFieldStructureIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addFieldBuilder{TypelayerCSchemasDefinitionsStructures.addFieldStructureId=addFieldStructureIdValue})
                                        return (changeGetter4, (addFieldNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addFieldBuilder)
                        (addFieldFields addFieldFieldsVal)
                    else do
                        return (changeGetter1, addFieldBuilder)
            (addFieldFields (changeGetter0, numFields, addFieldInit))
        "add_mutation" -> do
            addMutationInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddMutation)
            let addMutationFields (changeGetter1, addMutationFieldsLeft, addMutationBuilder) = do
                    if (-1 < addMutationFieldsLeft)
                    then do
                        (changeGetter2, addMutationNewFieldsLeft) <- do
                            if (0 < addMutationFieldsLeft)
                            then do
                                return (changeGetter1, addMutationFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addMutationFieldsVal <- do
                            if (0 < addMutationNewFieldsLeft)
                            then do
                                (changeGetter3, addMutationFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addMutationFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "mutation_id" -> do
                                        (changeGetter4, addMutationMutationIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationBuilder{TypelayerCSchemasDefinitionsStructures.addMutationMutationId=addMutationMutationIdValue})
                                        return (changeGetter4, (addMutationNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addMutationServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationBuilder{TypelayerCSchemasDefinitionsStructures.addMutationServiceId=addMutationServiceIdValue})
                                        return (changeGetter4, (addMutationNewFieldsLeft - 1), values0)
                                    "target_table" -> do
                                        (changeGetter4, addMutationTargetTableValue) <- (dynamicGetTableReference changeGetter3)
                                        let values0 = (addMutationBuilder{TypelayerCSchemasDefinitionsStructures.addMutationTargetTable=addMutationTargetTableValue})
                                        return (changeGetter4, (addMutationNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addMutationBuilder)
                        (addMutationFields addMutationFieldsVal)
                    else do
                        return (changeGetter1, addMutationBuilder)
            (addMutationFields (changeGetter0, numFields, addMutationInit))
        "add_mutation_argument" -> do
            addMutationArgumentInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddMutationArgument)
            let addMutationArgumentFields (changeGetter1, addMutationArgumentFieldsLeft, addMutationArgumentBuilder) = do
                    if (-1 < addMutationArgumentFieldsLeft)
                    then do
                        (changeGetter2, addMutationArgumentNewFieldsLeft) <- do
                            if (0 < addMutationArgumentFieldsLeft)
                            then do
                                return (changeGetter1, addMutationArgumentFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addMutationArgumentFieldsVal <- do
                            if (0 < addMutationArgumentNewFieldsLeft)
                            then do
                                (changeGetter3, addMutationArgumentFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addMutationArgumentFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "argument_id" -> do
                                        (changeGetter4, addMutationArgumentArgumentIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addMutationArgumentArgumentId=addMutationArgumentArgumentIdValue})
                                        return (changeGetter4, (addMutationArgumentNewFieldsLeft - 1), values0)
                                    "field" -> do
                                        (changeGetter4, addMutationArgumentFieldValue) <- (dynamicGetField changeGetter3)
                                        let values0 = (addMutationArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addMutationArgumentField=addMutationArgumentFieldValue})
                                        return (changeGetter4, (addMutationArgumentNewFieldsLeft - 1), values0)
                                    "mutation_id" -> do
                                        (changeGetter4, addMutationArgumentMutationIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addMutationArgumentMutationId=addMutationArgumentMutationIdValue})
                                        return (changeGetter4, (addMutationArgumentNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addMutationArgumentServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addMutationArgumentServiceId=addMutationArgumentServiceIdValue})
                                        return (changeGetter4, (addMutationArgumentNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addMutationArgumentBuilder)
                        (addMutationArgumentFields addMutationArgumentFieldsVal)
                    else do
                        return (changeGetter1, addMutationArgumentBuilder)
            (addMutationArgumentFields (changeGetter0, numFields, addMutationArgumentInit))
        "add_mutation_return" -> do
            addMutationReturnInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddMutationReturn)
            let addMutationReturnFields (changeGetter1, addMutationReturnFieldsLeft, addMutationReturnBuilder) = do
                    if (-1 < addMutationReturnFieldsLeft)
                    then do
                        (changeGetter2, addMutationReturnNewFieldsLeft) <- do
                            if (0 < addMutationReturnFieldsLeft)
                            then do
                                return (changeGetter1, addMutationReturnFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addMutationReturnFieldsVal <- do
                            if (0 < addMutationReturnNewFieldsLeft)
                            then do
                                (changeGetter3, addMutationReturnFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addMutationReturnFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "field" -> do
                                        (changeGetter4, addMutationReturnFieldValue) <- (dynamicGetField changeGetter3)
                                        let values0 = (addMutationReturnBuilder{TypelayerCSchemasDefinitionsStructures.addMutationReturnField=addMutationReturnFieldValue})
                                        return (changeGetter4, (addMutationReturnNewFieldsLeft - 1), values0)
                                    "mutation_id" -> do
                                        (changeGetter4, addMutationReturnMutationIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationReturnBuilder{TypelayerCSchemasDefinitionsStructures.addMutationReturnMutationId=addMutationReturnMutationIdValue})
                                        return (changeGetter4, (addMutationReturnNewFieldsLeft - 1), values0)
                                    "return_id" -> do
                                        (changeGetter4, addMutationReturnReturnIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationReturnBuilder{TypelayerCSchemasDefinitionsStructures.addMutationReturnReturnId=addMutationReturnReturnIdValue})
                                        return (changeGetter4, (addMutationReturnNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addMutationReturnServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addMutationReturnBuilder{TypelayerCSchemasDefinitionsStructures.addMutationReturnServiceId=addMutationReturnServiceIdValue})
                                        return (changeGetter4, (addMutationReturnNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addMutationReturnBuilder)
                        (addMutationReturnFields addMutationReturnFieldsVal)
                    else do
                        return (changeGetter1, addMutationReturnBuilder)
            (addMutationReturnFields (changeGetter0, numFields, addMutationReturnInit))
        "add_query" -> do
            addQueryInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddQuery)
            let addQueryFields (changeGetter1, addQueryFieldsLeft, addQueryBuilder) = do
                    if (-1 < addQueryFieldsLeft)
                    then do
                        (changeGetter2, addQueryNewFieldsLeft) <- do
                            if (0 < addQueryFieldsLeft)
                            then do
                                return (changeGetter1, addQueryFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addQueryFieldsVal <- do
                            if (0 < addQueryNewFieldsLeft)
                            then do
                                (changeGetter3, addQueryFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addQueryFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "query_id" -> do
                                        (changeGetter4, addQueryQueryIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryBuilder{TypelayerCSchemasDefinitionsStructures.addQueryQueryId=addQueryQueryIdValue})
                                        return (changeGetter4, (addQueryNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addQueryServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryBuilder{TypelayerCSchemasDefinitionsStructures.addQueryServiceId=addQueryServiceIdValue})
                                        return (changeGetter4, (addQueryNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addQueryBuilder)
                        (addQueryFields addQueryFieldsVal)
                    else do
                        return (changeGetter1, addQueryBuilder)
            (addQueryFields (changeGetter0, numFields, addQueryInit))
        "add_query_argument" -> do
            addQueryArgumentInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddQueryArgument)
            let addQueryArgumentFields (changeGetter1, addQueryArgumentFieldsLeft, addQueryArgumentBuilder) = do
                    if (-1 < addQueryArgumentFieldsLeft)
                    then do
                        (changeGetter2, addQueryArgumentNewFieldsLeft) <- do
                            if (0 < addQueryArgumentFieldsLeft)
                            then do
                                return (changeGetter1, addQueryArgumentFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addQueryArgumentFieldsVal <- do
                            if (0 < addQueryArgumentNewFieldsLeft)
                            then do
                                (changeGetter3, addQueryArgumentFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addQueryArgumentFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "argument_id" -> do
                                        (changeGetter4, addQueryArgumentArgumentIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addQueryArgumentArgumentId=addQueryArgumentArgumentIdValue})
                                        return (changeGetter4, (addQueryArgumentNewFieldsLeft - 1), values0)
                                    "field" -> do
                                        (changeGetter4, addQueryArgumentFieldValue) <- (dynamicGetField changeGetter3)
                                        let values0 = (addQueryArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addQueryArgumentField=addQueryArgumentFieldValue})
                                        return (changeGetter4, (addQueryArgumentNewFieldsLeft - 1), values0)
                                    "query_id" -> do
                                        (changeGetter4, addQueryArgumentQueryIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addQueryArgumentQueryId=addQueryArgumentQueryIdValue})
                                        return (changeGetter4, (addQueryArgumentNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addQueryArgumentServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryArgumentBuilder{TypelayerCSchemasDefinitionsStructures.addQueryArgumentServiceId=addQueryArgumentServiceIdValue})
                                        return (changeGetter4, (addQueryArgumentNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addQueryArgumentBuilder)
                        (addQueryArgumentFields addQueryArgumentFieldsVal)
                    else do
                        return (changeGetter1, addQueryArgumentBuilder)
            (addQueryArgumentFields (changeGetter0, numFields, addQueryArgumentInit))
        "add_query_return" -> do
            addQueryReturnInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddQueryReturn)
            let addQueryReturnFields (changeGetter1, addQueryReturnFieldsLeft, addQueryReturnBuilder) = do
                    if (-1 < addQueryReturnFieldsLeft)
                    then do
                        (changeGetter2, addQueryReturnNewFieldsLeft) <- do
                            if (0 < addQueryReturnFieldsLeft)
                            then do
                                return (changeGetter1, addQueryReturnFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addQueryReturnFieldsVal <- do
                            if (0 < addQueryReturnNewFieldsLeft)
                            then do
                                (changeGetter3, addQueryReturnFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addQueryReturnFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "field" -> do
                                        (changeGetter4, addQueryReturnFieldValue) <- (dynamicGetField changeGetter3)
                                        let values0 = (addQueryReturnBuilder{TypelayerCSchemasDefinitionsStructures.addQueryReturnField=addQueryReturnFieldValue})
                                        return (changeGetter4, (addQueryReturnNewFieldsLeft - 1), values0)
                                    "query_id" -> do
                                        (changeGetter4, addQueryReturnQueryIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryReturnBuilder{TypelayerCSchemasDefinitionsStructures.addQueryReturnQueryId=addQueryReturnQueryIdValue})
                                        return (changeGetter4, (addQueryReturnNewFieldsLeft - 1), values0)
                                    "return_id" -> do
                                        (changeGetter4, addQueryReturnReturnIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryReturnBuilder{TypelayerCSchemasDefinitionsStructures.addQueryReturnReturnId=addQueryReturnReturnIdValue})
                                        return (changeGetter4, (addQueryReturnNewFieldsLeft - 1), values0)
                                    "service_id" -> do
                                        (changeGetter4, addQueryReturnServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addQueryReturnBuilder{TypelayerCSchemasDefinitionsStructures.addQueryReturnServiceId=addQueryReturnServiceIdValue})
                                        return (changeGetter4, (addQueryReturnNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addQueryReturnBuilder)
                        (addQueryReturnFields addQueryReturnFieldsVal)
                    else do
                        return (changeGetter1, addQueryReturnBuilder)
            (addQueryReturnFields (changeGetter0, numFields, addQueryReturnInit))
        "add_schema" -> do
            addSchemaInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddSchema)
            let addSchemaFields (changeGetter1, addSchemaFieldsLeft, addSchemaBuilder) = do
                    if (-1 < addSchemaFieldsLeft)
                    then do
                        (changeGetter2, addSchemaNewFieldsLeft) <- do
                            if (0 < addSchemaFieldsLeft)
                            then do
                                return (changeGetter1, addSchemaFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addSchemaFieldsVal <- do
                            if (0 < addSchemaNewFieldsLeft)
                            then do
                                (changeGetter3, addSchemaFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addSchemaFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "schema_id" -> do
                                        (changeGetter4, addSchemaSchemaIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addSchemaBuilder{TypelayerCSchemasDefinitionsStructures.addSchemaSchemaId=addSchemaSchemaIdValue})
                                        return (changeGetter4, (addSchemaNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addSchemaBuilder)
                        (addSchemaFields addSchemaFieldsVal)
                    else do
                        return (changeGetter1, addSchemaBuilder)
            (addSchemaFields (changeGetter0, numFields, addSchemaInit))
        "add_service" -> do
            addServiceInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddService)
            let addServiceFields (changeGetter1, addServiceFieldsLeft, addServiceBuilder) = do
                    if (-1 < addServiceFieldsLeft)
                    then do
                        (changeGetter2, addServiceNewFieldsLeft) <- do
                            if (0 < addServiceFieldsLeft)
                            then do
                                return (changeGetter1, addServiceFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addServiceFieldsVal <- do
                            if (0 < addServiceNewFieldsLeft)
                            then do
                                (changeGetter3, addServiceFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addServiceFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "service_id" -> do
                                        (changeGetter4, addServiceServiceIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addServiceBuilder{TypelayerCSchemasDefinitionsStructures.addServiceServiceId=addServiceServiceIdValue})
                                        return (changeGetter4, (addServiceNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addServiceBuilder)
                        (addServiceFields addServiceFieldsVal)
                    else do
                        return (changeGetter1, addServiceBuilder)
            (addServiceFields (changeGetter0, numFields, addServiceInit))
        "add_structure" -> do
            addStructureInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddStructure)
            let addStructureFields (changeGetter1, addStructureFieldsLeft, addStructureBuilder) = do
                    if (-1 < addStructureFieldsLeft)
                    then do
                        (changeGetter2, addStructureNewFieldsLeft) <- do
                            if (0 < addStructureFieldsLeft)
                            then do
                                return (changeGetter1, addStructureFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addStructureFieldsVal <- do
                            if (0 < addStructureNewFieldsLeft)
                            then do
                                (changeGetter3, addStructureFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addStructureFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "schema_id" -> do
                                        (changeGetter4, addStructureSchemaIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addStructureBuilder{TypelayerCSchemasDefinitionsStructures.addStructureSchemaId=addStructureSchemaIdValue})
                                        return (changeGetter4, (addStructureNewFieldsLeft - 1), values0)
                                    "structure_id" -> do
                                        (changeGetter4, addStructureStructureIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addStructureBuilder{TypelayerCSchemasDefinitionsStructures.addStructureStructureId=addStructureStructureIdValue})
                                        return (changeGetter4, (addStructureNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addStructureBuilder)
                        (addStructureFields addStructureFieldsVal)
                    else do
                        return (changeGetter1, addStructureBuilder)
            (addStructureFields (changeGetter0, numFields, addStructureInit))
        "add_table" -> do
            addTableInit <- (TypelayerCSchemasDefinitionsStructures.defaultAddTable)
            let addTableFields (changeGetter1, addTableFieldsLeft, addTableBuilder) = do
                    if (-1 < addTableFieldsLeft)
                    then do
                        (changeGetter2, addTableNewFieldsLeft) <- do
                            if (0 < addTableFieldsLeft)
                            then do
                                return (changeGetter1, addTableFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changeGetter1 )
                        addTableFieldsVal <- do
                            if (0 < addTableNewFieldsLeft)
                            then do
                                (changeGetter3, addTableFieldName) <- (TypelayerCommonDynamic.decoderPopField changeGetter2 )
                                case addTableFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                                    "database_id" -> do
                                        (changeGetter4, addTableDatabaseIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addTableBuilder{TypelayerCSchemasDefinitionsStructures.addTableDatabaseId=addTableDatabaseIdValue})
                                        return (changeGetter4, (addTableNewFieldsLeft - 1), values0)
                                    "table_id" -> do
                                        (changeGetter4, addTableTableIdValue) <- (TypelayerCommonDynamic.decoderPopString changeGetter3 )
                                        let values0 = (addTableBuilder{TypelayerCSchemasDefinitionsStructures.addTableTableId=addTableTableIdValue})
                                        return (changeGetter4, (addTableNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter3 )})
                            else do
                                return (changeGetter2, -1, addTableBuilder)
                        (addTableFields addTableFieldsVal)
                    else do
                        return (changeGetter1, addTableBuilder)
            (addTableFields (changeGetter0, numFields, addTableInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changeGetter0 )})

dynamicGetObjChange :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Change
dynamicGetObjChange dynamicObject = do
    (gotten0, retObj) <- (dynamicGetChange dynamicObject)
    return retObj

dynamicPutChange :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Change -> TypelayerCommonPrelude.ExecuteM a
dynamicPutChange dynamicObject inputObject = do
    case inputObject of
        changeFieldAddColumn@(TypelayerCSchemasDefinitionsStructures.AddColumn{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_column" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "column_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addColumnColumnId changeFieldAddColumn))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "database_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId changeFieldAddColumn))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "table_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addColumnTableId changeFieldAddColumn))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9
        changeFieldAddDatabase@(TypelayerCSchemasDefinitionsStructures.AddDatabase{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_database" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "database_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addDatabaseDatabaseId changeFieldAddDatabase))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        changeFieldAddField@(TypelayerCSchemasDefinitionsStructures.AddField{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_field" 5)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "constructor_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addFieldConstructorId changeFieldAddField))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "field")
            builder5 <- (dynamicPutField builder4 (TypelayerCSchemasDefinitionsStructures.addFieldField changeFieldAddField))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "field_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addFieldFieldId changeFieldAddField))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "schema_id")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (TypelayerCSchemasDefinitionsStructures.addFieldSchemaId changeFieldAddField))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 False)
            builder13 <- (TypelayerCommonDynamic.encoderPutField builder12 "structure_id")
            builder14 <- (TypelayerCommonDynamic.encoderPutString builder13 (TypelayerCSchemasDefinitionsStructures.addFieldStructureId changeFieldAddField))
            builder15 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder14 True)
            return builder15
        changeFieldAddMutation@(TypelayerCSchemasDefinitionsStructures.AddMutation{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_mutation" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "mutation_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addMutationMutationId changeFieldAddMutation))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "service_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addMutationServiceId changeFieldAddMutation))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "target_table")
            builder8 <- (dynamicPutTableReference builder7 (TypelayerCSchemasDefinitionsStructures.addMutationTargetTable changeFieldAddMutation))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9
        changeFieldAddMutationArgument@(TypelayerCSchemasDefinitionsStructures.AddMutationArgument{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_mutation_argument" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "argument_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addMutationArgumentArgumentId changeFieldAddMutationArgument))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "field")
            builder5 <- (dynamicPutField builder4 (TypelayerCSchemasDefinitionsStructures.addMutationArgumentField changeFieldAddMutationArgument))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "mutation_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addMutationArgumentMutationId changeFieldAddMutationArgument))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "service_id")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (TypelayerCSchemasDefinitionsStructures.addMutationArgumentServiceId changeFieldAddMutationArgument))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12
        changeFieldAddMutationReturn@(TypelayerCSchemasDefinitionsStructures.AddMutationReturn{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_mutation_return" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "field")
            builder2 <- (dynamicPutField builder1 (TypelayerCSchemasDefinitionsStructures.addMutationReturnField changeFieldAddMutationReturn))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "mutation_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addMutationReturnMutationId changeFieldAddMutationReturn))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "return_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addMutationReturnReturnId changeFieldAddMutationReturn))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "service_id")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (TypelayerCSchemasDefinitionsStructures.addMutationReturnServiceId changeFieldAddMutationReturn))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12
        changeFieldAddQuery@(TypelayerCSchemasDefinitionsStructures.AddQuery{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_query" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "query_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addQueryQueryId changeFieldAddQuery))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "service_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addQueryServiceId changeFieldAddQuery))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6
        changeFieldAddQueryArgument@(TypelayerCSchemasDefinitionsStructures.AddQueryArgument{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_query_argument" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "argument_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addQueryArgumentArgumentId changeFieldAddQueryArgument))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "field")
            builder5 <- (dynamicPutField builder4 (TypelayerCSchemasDefinitionsStructures.addQueryArgumentField changeFieldAddQueryArgument))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "query_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addQueryArgumentQueryId changeFieldAddQueryArgument))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "service_id")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (TypelayerCSchemasDefinitionsStructures.addQueryArgumentServiceId changeFieldAddQueryArgument))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12
        changeFieldAddQueryReturn@(TypelayerCSchemasDefinitionsStructures.AddQueryReturn{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_query_return" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "field")
            builder2 <- (dynamicPutField builder1 (TypelayerCSchemasDefinitionsStructures.addQueryReturnField changeFieldAddQueryReturn))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "query_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addQueryReturnQueryId changeFieldAddQueryReturn))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "return_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.addQueryReturnReturnId changeFieldAddQueryReturn))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "service_id")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (TypelayerCSchemasDefinitionsStructures.addQueryReturnServiceId changeFieldAddQueryReturn))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12
        changeFieldAddSchema@(TypelayerCSchemasDefinitionsStructures.AddSchema{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_schema" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "schema_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addSchemaSchemaId changeFieldAddSchema))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        changeFieldAddService@(TypelayerCSchemasDefinitionsStructures.AddService{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_service" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "service_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addServiceServiceId changeFieldAddService))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3
        changeFieldAddStructure@(TypelayerCSchemasDefinitionsStructures.AddStructure{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_structure" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "schema_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addStructureSchemaId changeFieldAddStructure))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "structure_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addStructureStructureId changeFieldAddStructure))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6
        changeFieldAddTable@(TypelayerCSchemasDefinitionsStructures.AddTable{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "add_table" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "database_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.addTableDatabaseId changeFieldAddTable))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "table_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.addTableTableId changeFieldAddTable))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetChangeset :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Changeset)
dynamicGetChangeset dynamicObject = do
    (changesetGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "changeset")
    case constructor of
        "changeset" -> do
            changesetInit <- (TypelayerCSchemasDefinitionsStructures.defaultChangeset)
            let changesetFields (changesetGetter1, changesetFieldsLeft, changesetBuilder) = do
                    if (-1 < changesetFieldsLeft)
                    then do
                        (changesetGetter2, changesetNewFieldsLeft) <- do
                            if (0 < changesetFieldsLeft)
                            then do
                                return (changesetGetter1, changesetFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct changesetGetter1 )
                        changesetFieldsVal <- do
                            if (0 < changesetNewFieldsLeft)
                            then do
                                (changesetGetter3, changesetFieldName) <- (TypelayerCommonDynamic.decoderPopField changesetGetter2 )
                                case changesetFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changesetGetter3 )})
                                    "changes" -> do
                                        (changesetGetterChanges4, changesetChangesInit) <- (TypelayerCommonDynamic.decoderPopList changesetGetter3 )
                                        let changesetChangesElements (changesetGetterChanges5, changesetChangesElementsLeft, changesetChangesListAcc) = do
                                                if (-1 < changesetChangesElementsLeft)
                                                then do
                                                    (changesetGetterChanges6, changesetChangesNewFieldsLeft) <- do
                                                        if (0 < changesetChangesElementsLeft)
                                                        then do
                                                            return (changesetGetterChanges5, changesetChangesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreList changesetGetterChanges5 )
                                                    changesetChangesElementsVal <- do
                                                        if (0 < changesetChangesNewFieldsLeft)
                                                        then do
                                                            (changesetGetterChanges7, changesetChangesListValue) <- (dynamicGetChange changesetGetterChanges6)
                                                            let values0 = (changesetChangesListValue:changesetChangesListAcc)
                                                            return (changesetGetterChanges7, (changesetChangesNewFieldsLeft - 1), values0)
                                                        else do
                                                            return (changesetGetterChanges6, -1, changesetChangesListAcc)
                                                    (changesetChangesElements changesetChangesElementsVal)
                                                else do
                                                    return (changesetGetterChanges5, (reverse changesetChangesListAcc))
                                        (changesetGetter4, changesetChangesValue) <- (changesetChangesElements (changesetGetterChanges4, changesetChangesInit, []))
                                        let values0 = (changesetBuilder{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesetChangesValue})
                                        return (changesetGetter4, (changesetNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changesetGetter3 )})
                            else do
                                return (changesetGetter2, -1, changesetBuilder)
                        (changesetFields changesetFieldsVal)
                    else do
                        return (changesetGetter1, changesetBuilder)
            (changesetFields (changesetGetter0, numFields, changesetInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath changesetGetter0 )})

dynamicGetObjChangeset :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Changeset
dynamicGetObjChangeset dynamicObject = do
    (gotten0, retObj) <- (dynamicGetChangeset dynamicObject)
    return retObj

dynamicPutChangeset :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Changeset -> TypelayerCommonPrelude.ExecuteM a
dynamicPutChangeset dynamicObject inputObject = do
    case inputObject of
        changesetFieldChangeset@(TypelayerCSchemasDefinitionsStructures.Changeset{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "changeset" 1)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "changes")
            builder2 <- (TypelayerCommonDynamic.encoderPutList builder1 (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.changesetChanges changesetFieldChangeset)))
            builder2 <- do
                if (0 == (fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.changesetChanges changesetFieldChangeset)))
                then do
                    (TypelayerCommonDynamic.encoderPutElementEnd builder2 True)
                else do
                    TypelayerCommonPrelude.listReduceM (TypelayerCSchemasDefinitionsStructures.changesetChanges changesetFieldChangeset) builder2 $ \changesIndex changesElem changesAcc -> do
                        builderChanges3 <- (dynamicPutChange changesAcc changesElem)
                        builderChanges4 <- (TypelayerCommonDynamic.encoderPutElementEnd builderChanges3 (changesIndex == ((fromIntegral $ length (TypelayerCSchemasDefinitionsStructures.changesetChanges changesetFieldChangeset)) - 1)))
                        return builderChanges4
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 True)
            return builder3

dynamicGetCollection :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Collection)
dynamicGetCollection dynamicObject = do
    (collectionGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "collection")
    case constructor of
        "collection" -> do
            collectionInit <- (TypelayerCSchemasDefinitionsStructures.defaultCollection)
            let collectionFields (collectionGetter1, collectionFieldsLeft, collectionBuilder) = do
                    if (-1 < collectionFieldsLeft)
                    then do
                        (collectionGetter2, collectionNewFieldsLeft) <- do
                            if (0 < collectionFieldsLeft)
                            then do
                                return (collectionGetter1, collectionFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct collectionGetter1 )
                        collectionFieldsVal <- do
                            if (0 < collectionNewFieldsLeft)
                            then do
                                (collectionGetter3, collectionFieldName) <- (TypelayerCommonDynamic.decoderPopField collectionGetter2 )
                                case collectionFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath collectionGetter3 )})
                                    "backend" -> do
                                        (collectionGetter4, collectionBackendValue) <- (dynamicGetBackend collectionGetter3)
                                        let values0 = (collectionBuilder{TypelayerCSchemasDefinitionsStructures.collectionBackend=collectionBackendValue})
                                        return (collectionGetter4, (collectionNewFieldsLeft - 1), values0)
                                    "description" -> do
                                        (collectionGetter4, collectionDescriptionValue) <- (TypelayerCommonDynamic.decoderPopString collectionGetter3 )
                                        let values0 = (collectionBuilder{TypelayerCSchemasDefinitionsStructures.collectionDescription=collectionDescriptionValue})
                                        return (collectionGetter4, (collectionNewFieldsLeft - 1), values0)
                                    "schema" -> do
                                        (collectionGetter4, collectionSchemaValue) <- (TypelayerCommonDynamic.decoderPopString collectionGetter3 )
                                        let values0 = (collectionBuilder{TypelayerCSchemasDefinitionsStructures.collectionSchema=collectionSchemaValue})
                                        return (collectionGetter4, (collectionNewFieldsLeft - 1), values0)
                                    "tables" -> do
                                        (collectionGetterTables4, collectionTablesInit) <- (TypelayerCommonDynamic.decoderPopMap collectionGetter3 )
                                        let collectionTablesElements (collectionGetterTables5, collectionTablesElementsLeft, collectionTablesMapAcc) = do
                                                if (-1 < collectionTablesElementsLeft)
                                                then do
                                                    (collectionGetterTables6, collectionTablesNewFieldsLeft) <- do
                                                        if (0 < collectionTablesElementsLeft)
                                                        then do
                                                            return (collectionGetterTables5, collectionTablesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap collectionGetterTables5 )
                                                    collectionTablesElementsVal <- do
                                                        if (0 < collectionTablesNewFieldsLeft)
                                                        then do
                                                            (collectionGetterTables7, collectionTablesKey) <- (TypelayerCommonDynamic.decoderPopKey collectionGetterTables6 )
                                                            (collectionGetterTables8, collectionTablesMapValue) <- (dynamicGetTable collectionGetterTables7)
                                                            let collectionTablesValues0 = (TypelayerCommonPrelude.mapAdd collectionTablesMapAcc collectionTablesKey collectionTablesMapValue)
                                                            return (collectionGetterTables8, (collectionTablesNewFieldsLeft - 1), collectionTablesValues0)
                                                        else do
                                                            return (collectionGetterTables6, -1, collectionTablesMapAcc)
                                                    (collectionTablesElements collectionTablesElementsVal)
                                                else do
                                                    return (collectionGetterTables5, collectionTablesMapAcc)
                                        (collectionGetter4, collectionTablesValue) <- (collectionTablesElements (collectionGetterTables4, collectionTablesInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (collectionBuilder{TypelayerCSchemasDefinitionsStructures.collectionTables=collectionTablesValue})
                                        return (collectionGetter4, (collectionNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath collectionGetter3 )})
                            else do
                                return (collectionGetter2, -1, collectionBuilder)
                        (collectionFields collectionFieldsVal)
                    else do
                        return (collectionGetter1, collectionBuilder)
            (collectionFields (collectionGetter0, numFields, collectionInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath collectionGetter0 )})

dynamicGetObjCollection :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Collection
dynamicGetObjCollection dynamicObject = do
    (gotten0, retObj) <- (dynamicGetCollection dynamicObject)
    return retObj

dynamicPutCollection :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Collection -> TypelayerCommonPrelude.ExecuteM a
dynamicPutCollection dynamicObject inputObject = do
    case inputObject of
        collectionFieldCollection@(TypelayerCSchemasDefinitionsStructures.Collection{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "collection" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "backend")
            builder2 <- (dynamicPutBackend builder1 (TypelayerCSchemasDefinitionsStructures.collectionBackend collectionFieldCollection))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "description")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.collectionDescription collectionFieldCollection))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "schema")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.collectionSchema collectionFieldCollection))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "tables")
            builderN11 <- (TypelayerCommonDynamic.encoderPutMap builder10 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.collectionTables collectionFieldCollection)))
            builder11 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.collectionTables collectionFieldCollection)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN11 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.collectionTables collectionFieldCollection) builderN11 $ \tablesValuesIndex tablesValuesKey tablesValuesElem tablesValuesAcc -> do
                        builderNTablesValues12 <- (TypelayerCommonDynamic.encoderPutKey tablesValuesAcc tablesValuesKey)
                        builderNTablesValues13 <- (dynamicPutTable builderNTablesValues12 tablesValuesElem)
                        builderNTablesValues14 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNTablesValues13 (tablesValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.collectionTables collectionFieldCollection)) - 1)))
                        return builderNTablesValues14
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12

dynamicGetColumn :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Column)
dynamicGetColumn dynamicObject = do
    (columnGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "column")
    case constructor of
        "column" -> do
            columnInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumn)
            let columnFields (columnGetter1, columnFieldsLeft, columnBuilder) = do
                    if (-1 < columnFieldsLeft)
                    then do
                        (columnGetter2, columnNewFieldsLeft) <- do
                            if (0 < columnFieldsLeft)
                            then do
                                return (columnGetter1, columnFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnGetter1 )
                        columnFieldsVal <- do
                            if (0 < columnNewFieldsLeft)
                            then do
                                (columnGetter3, columnFieldName) <- (TypelayerCommonDynamic.decoderPopField columnGetter2 )
                                case columnFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnGetter3 )})
                                    "column" -> do
                                        (columnGetter4, columnColumnValue) <- (TypelayerCommonDynamic.decoderPopString columnGetter3 )
                                        let values0 = (columnBuilder{TypelayerCSchemasDefinitionsStructures.columnColumn=columnColumnValue})
                                        return (columnGetter4, (columnNewFieldsLeft - 1), values0)
                                    "description" -> do
                                        (columnGetter4, columnDescriptionValue) <- (TypelayerCommonDynamic.decoderPopString columnGetter3 )
                                        let values0 = (columnBuilder{TypelayerCSchemasDefinitionsStructures.columnDescription=columnDescriptionValue})
                                        return (columnGetter4, (columnNewFieldsLeft - 1), values0)
                                    "type" -> do
                                        (columnGetter4, columnTypeValue) <- (dynamicGetColumnType columnGetter3)
                                        let values0 = (columnBuilder{TypelayerCSchemasDefinitionsStructures.columnType=columnTypeValue})
                                        return (columnGetter4, (columnNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnGetter3 )})
                            else do
                                return (columnGetter2, -1, columnBuilder)
                        (columnFields columnFieldsVal)
                    else do
                        return (columnGetter1, columnBuilder)
            (columnFields (columnGetter0, numFields, columnInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnGetter0 )})

dynamicGetObjColumn :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Column
dynamicGetObjColumn dynamicObject = do
    (gotten0, retObj) <- (dynamicGetColumn dynamicObject)
    return retObj

dynamicPutColumn :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Column -> TypelayerCommonPrelude.ExecuteM a
dynamicPutColumn dynamicObject inputObject = do
    case inputObject of
        columnFieldColumn@(TypelayerCSchemasDefinitionsStructures.Column{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "column")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.columnColumn columnFieldColumn))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "description")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.columnDescription columnFieldColumn))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "type")
            builder8 <- (dynamicPutColumnType builder7 (TypelayerCSchemasDefinitionsStructures.columnType columnFieldColumn))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9

dynamicGetColumnType :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.ColumnType)
dynamicGetColumnType dynamicObject = do
    (columnTypeGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "column_binary")
    case constructor of
        "column_binary" -> do
            columnBinaryInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnBinary)
            let columnBinaryFields (columnTypeGetter1, columnBinaryFieldsLeft, columnBinaryBuilder) = do
                    if (-1 < columnBinaryFieldsLeft)
                    then do
                        (columnTypeGetter2, columnBinaryNewFieldsLeft) <- do
                            if (0 < columnBinaryFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnBinaryFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnBinaryFieldsVal <- do
                            if (0 < columnBinaryNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnBinaryFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnBinaryFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnBinaryBuilder)
                        (columnBinaryFields columnBinaryFieldsVal)
                    else do
                        return (columnTypeGetter1, columnBinaryBuilder)
            (columnBinaryFields (columnTypeGetter0, numFields, columnBinaryInit))
        "column_boolean" -> do
            columnBooleanInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnBoolean)
            let columnBooleanFields (columnTypeGetter1, columnBooleanFieldsLeft, columnBooleanBuilder) = do
                    if (-1 < columnBooleanFieldsLeft)
                    then do
                        (columnTypeGetter2, columnBooleanNewFieldsLeft) <- do
                            if (0 < columnBooleanFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnBooleanFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnBooleanFieldsVal <- do
                            if (0 < columnBooleanNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnBooleanFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnBooleanFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnBooleanBuilder)
                        (columnBooleanFields columnBooleanFieldsVal)
                    else do
                        return (columnTypeGetter1, columnBooleanBuilder)
            (columnBooleanFields (columnTypeGetter0, numFields, columnBooleanInit))
        "column_date_time" -> do
            columnDateTimeInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnDateTime)
            let columnDateTimeFields (columnTypeGetter1, columnDateTimeFieldsLeft, columnDateTimeBuilder) = do
                    if (-1 < columnDateTimeFieldsLeft)
                    then do
                        (columnTypeGetter2, columnDateTimeNewFieldsLeft) <- do
                            if (0 < columnDateTimeFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnDateTimeFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnDateTimeFieldsVal <- do
                            if (0 < columnDateTimeNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnDateTimeFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnDateTimeFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnDateTimeBuilder)
                        (columnDateTimeFields columnDateTimeFieldsVal)
                    else do
                        return (columnTypeGetter1, columnDateTimeBuilder)
            (columnDateTimeFields (columnTypeGetter0, numFields, columnDateTimeInit))
        "column_double" -> do
            columnDoubleInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnDouble)
            let columnDoubleFields (columnTypeGetter1, columnDoubleFieldsLeft, columnDoubleBuilder) = do
                    if (-1 < columnDoubleFieldsLeft)
                    then do
                        (columnTypeGetter2, columnDoubleNewFieldsLeft) <- do
                            if (0 < columnDoubleFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnDoubleFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnDoubleFieldsVal <- do
                            if (0 < columnDoubleNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnDoubleFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnDoubleFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnDoubleBuilder)
                        (columnDoubleFields columnDoubleFieldsVal)
                    else do
                        return (columnTypeGetter1, columnDoubleBuilder)
            (columnDoubleFields (columnTypeGetter0, numFields, columnDoubleInit))
        "column_embeded" -> do
            columnEmbededInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnEmbeded)
            let columnEmbededFields (columnTypeGetter1, columnEmbededFieldsLeft, columnEmbededBuilder) = do
                    if (-1 < columnEmbededFieldsLeft)
                    then do
                        (columnTypeGetter2, columnEmbededNewFieldsLeft) <- do
                            if (0 < columnEmbededFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnEmbededFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnEmbededFieldsVal <- do
                            if (0 < columnEmbededNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnEmbededFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnEmbededFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    "id" -> do
                                        (columnTypeGetter4, columnEmbededIdValue) <- (TypelayerCommonDynamic.decoderPopString columnTypeGetter3 )
                                        let values0 = (columnEmbededBuilder{TypelayerCSchemasDefinitionsStructures.columnEmbededId=columnEmbededIdValue})
                                        return (columnTypeGetter4, (columnEmbededNewFieldsLeft - 1), values0)
                                    "schema" -> do
                                        (columnTypeGetter4, columnEmbededSchemaValue) <- (dynamicGetSchemaReference columnTypeGetter3)
                                        let values0 = (columnEmbededBuilder{TypelayerCSchemasDefinitionsStructures.columnEmbededSchema=columnEmbededSchemaValue})
                                        return (columnTypeGetter4, (columnEmbededNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnEmbededBuilder)
                        (columnEmbededFields columnEmbededFieldsVal)
                    else do
                        return (columnTypeGetter1, columnEmbededBuilder)
            (columnEmbededFields (columnTypeGetter0, numFields, columnEmbededInit))
        "column_integer" -> do
            columnIntegerInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnInteger)
            let columnIntegerFields (columnTypeGetter1, columnIntegerFieldsLeft, columnIntegerBuilder) = do
                    if (-1 < columnIntegerFieldsLeft)
                    then do
                        (columnTypeGetter2, columnIntegerNewFieldsLeft) <- do
                            if (0 < columnIntegerFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnIntegerFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnIntegerFieldsVal <- do
                            if (0 < columnIntegerNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnIntegerFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnIntegerFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnIntegerBuilder)
                        (columnIntegerFields columnIntegerFieldsVal)
                    else do
                        return (columnTypeGetter1, columnIntegerBuilder)
            (columnIntegerFields (columnTypeGetter0, numFields, columnIntegerInit))
        "column_text" -> do
            columnTextInit <- (TypelayerCSchemasDefinitionsStructures.defaultColumnText)
            let columnTextFields (columnTypeGetter1, columnTextFieldsLeft, columnTextBuilder) = do
                    if (-1 < columnTextFieldsLeft)
                    then do
                        (columnTypeGetter2, columnTextNewFieldsLeft) <- do
                            if (0 < columnTextFieldsLeft)
                            then do
                                return (columnTypeGetter1, columnTextFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        columnTextFieldsVal <- do
                            if (0 < columnTextNewFieldsLeft)
                            then do
                                (columnTypeGetter3, columnTextFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case columnTextFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, columnTextBuilder)
                        (columnTextFields columnTextFieldsVal)
                    else do
                        return (columnTypeGetter1, columnTextBuilder)
            (columnTextFields (columnTypeGetter0, numFields, columnTextInit))
        "foriegn_key" -> do
            foriegnKeyInit <- (TypelayerCSchemasDefinitionsStructures.defaultForiegnKey)
            let foriegnKeyFields (columnTypeGetter1, foriegnKeyFieldsLeft, foriegnKeyBuilder) = do
                    if (-1 < foriegnKeyFieldsLeft)
                    then do
                        (columnTypeGetter2, foriegnKeyNewFieldsLeft) <- do
                            if (0 < foriegnKeyFieldsLeft)
                            then do
                                return (columnTypeGetter1, foriegnKeyFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct columnTypeGetter1 )
                        foriegnKeyFieldsVal <- do
                            if (0 < foriegnKeyNewFieldsLeft)
                            then do
                                (columnTypeGetter3, foriegnKeyFieldName) <- (TypelayerCommonDynamic.decoderPopField columnTypeGetter2 )
                                case foriegnKeyFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                                    "id" -> do
                                        (columnTypeGetter4, foriegnKeyIdValue) <- (TypelayerCommonDynamic.decoderPopString columnTypeGetter3 )
                                        let values0 = (foriegnKeyBuilder{TypelayerCSchemasDefinitionsStructures.foriegnKeyId=foriegnKeyIdValue})
                                        return (columnTypeGetter4, (foriegnKeyNewFieldsLeft - 1), values0)
                                    "table" -> do
                                        (columnTypeGetter4, foriegnKeyTableValue) <- (TypelayerCommonDynamic.decoderPopString columnTypeGetter3 )
                                        let values0 = (foriegnKeyBuilder{TypelayerCSchemasDefinitionsStructures.foriegnKeyTable=foriegnKeyTableValue})
                                        return (columnTypeGetter4, (foriegnKeyNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter3 )})
                            else do
                                return (columnTypeGetter2, -1, foriegnKeyBuilder)
                        (foriegnKeyFields foriegnKeyFieldsVal)
                    else do
                        return (columnTypeGetter1, foriegnKeyBuilder)
            (foriegnKeyFields (columnTypeGetter0, numFields, foriegnKeyInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath columnTypeGetter0 )})

dynamicGetObjColumnType :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.ColumnType
dynamicGetObjColumnType dynamicObject = do
    (gotten0, retObj) <- (dynamicGetColumnType dynamicObject)
    return retObj

dynamicPutColumnType :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.ColumnType -> TypelayerCommonPrelude.ExecuteM a
dynamicPutColumnType dynamicObject inputObject = do
    case inputObject of
        columnTypeFieldColumnBinary@(TypelayerCSchemasDefinitionsStructures.ColumnBinary{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_binary" 0)
            return builder0
        columnTypeFieldColumnBoolean@(TypelayerCSchemasDefinitionsStructures.ColumnBoolean{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_boolean" 0)
            return builder0
        columnTypeFieldColumnDateTime@(TypelayerCSchemasDefinitionsStructures.ColumnDateTime{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_date_time" 0)
            return builder0
        columnTypeFieldColumnDouble@(TypelayerCSchemasDefinitionsStructures.ColumnDouble{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_double" 0)
            return builder0
        columnTypeFieldColumnEmbeded@(TypelayerCSchemasDefinitionsStructures.ColumnEmbeded{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_embeded" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.columnEmbededId columnTypeFieldColumnEmbeded))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "schema")
            builder5 <- (dynamicPutSchemaReference builder4 (TypelayerCSchemasDefinitionsStructures.columnEmbededSchema columnTypeFieldColumnEmbeded))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6
        columnTypeFieldColumnInteger@(TypelayerCSchemasDefinitionsStructures.ColumnInteger{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_integer" 0)
            return builder0
        columnTypeFieldColumnText@(TypelayerCSchemasDefinitionsStructures.ColumnText{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "column_text" 0)
            return builder0
        columnTypeFieldForiegnKey@(TypelayerCSchemasDefinitionsStructures.ForiegnKey{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "foriegn_key" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "id")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.foriegnKeyId columnTypeFieldForiegnKey))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "table")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.foriegnKeyTable columnTypeFieldForiegnKey))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetConstructor :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Constructor)
dynamicGetConstructor dynamicObject = do
    (constructorGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "constructor")
    case constructor of
        "constructor" -> do
            constructorInit <- (TypelayerCSchemasDefinitionsStructures.defaultConstructor)
            let constructorFields (constructorGetter1, constructorFieldsLeft, constructorBuilder) = do
                    if (-1 < constructorFieldsLeft)
                    then do
                        (constructorGetter2, constructorNewFieldsLeft) <- do
                            if (0 < constructorFieldsLeft)
                            then do
                                return (constructorGetter1, constructorFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct constructorGetter1 )
                        constructorFieldsVal <- do
                            if (0 < constructorNewFieldsLeft)
                            then do
                                (constructorGetter3, constructorFieldName) <- (TypelayerCommonDynamic.decoderPopField constructorGetter2 )
                                case constructorFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath constructorGetter3 )})
                                    "doc" -> do
                                        (constructorGetterDoc4, constructorDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe constructorGetter3 )
                                        (constructorGetter4, constructorDocValue) <- do
                                            if constructorDocIsNull
                                            then do
                                                (constructorGetterDoc5, constructorDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString constructorGetterDoc4 )
                                                return (constructorGetterDoc5, (Just constructorDocUnpacked))
                                            else do
                                                return (constructorGetterDoc4, Nothing)
                                        let values0 = (constructorBuilder{TypelayerCSchemasDefinitionsStructures.constructorDoc=constructorDocValue})
                                        return (constructorGetter4, (constructorNewFieldsLeft - 1), values0)
                                    "fields" -> do
                                        (constructorGetterFields4, constructorFieldsInit) <- (TypelayerCommonDynamic.decoderPopMap constructorGetter3 )
                                        let constructorFieldsElements (constructorGetterFields5, constructorFieldsElementsLeft, constructorFieldsMapAcc) = do
                                                if (-1 < constructorFieldsElementsLeft)
                                                then do
                                                    (constructorGetterFields6, constructorFieldsNewFieldsLeft) <- do
                                                        if (0 < constructorFieldsElementsLeft)
                                                        then do
                                                            return (constructorGetterFields5, constructorFieldsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap constructorGetterFields5 )
                                                    constructorFieldsElementsVal <- do
                                                        if (0 < constructorFieldsNewFieldsLeft)
                                                        then do
                                                            (constructorGetterFields7, constructorFieldsKey) <- (TypelayerCommonDynamic.decoderPopKey constructorGetterFields6 )
                                                            (constructorGetterFields8, constructorFieldsMapValue) <- (dynamicGetField constructorGetterFields7)
                                                            let constructorFieldsValues0 = (TypelayerCommonPrelude.mapAdd constructorFieldsMapAcc constructorFieldsKey constructorFieldsMapValue)
                                                            return (constructorGetterFields8, (constructorFieldsNewFieldsLeft - 1), constructorFieldsValues0)
                                                        else do
                                                            return (constructorGetterFields6, -1, constructorFieldsMapAcc)
                                                    (constructorFieldsElements constructorFieldsElementsVal)
                                                else do
                                                    return (constructorGetterFields5, constructorFieldsMapAcc)
                                        (constructorGetter4, constructorFieldsValue) <- (constructorFieldsElements (constructorGetterFields4, constructorFieldsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (constructorBuilder{TypelayerCSchemasDefinitionsStructures.constructorFields=constructorFieldsValue})
                                        return (constructorGetter4, (constructorNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath constructorGetter3 )})
                            else do
                                return (constructorGetter2, -1, constructorBuilder)
                        (constructorFields constructorFieldsVal)
                    else do
                        return (constructorGetter1, constructorBuilder)
            (constructorFields (constructorGetter0, numFields, constructorInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath constructorGetter0 )})

dynamicGetObjConstructor :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Constructor
dynamicGetObjConstructor dynamicObject = do
    (gotten0, retObj) <- (dynamicGetConstructor dynamicObject)
    return retObj

dynamicPutConstructor :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Constructor -> TypelayerCommonPrelude.ExecuteM a
dynamicPutConstructor dynamicObject inputObject = do
    case inputObject of
        constructorFieldConstructor@(TypelayerCSchemasDefinitionsStructures.Constructor{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "constructor" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "doc")
            builder2 <- do
                case (TypelayerCSchemasDefinitionsStructures.constructorDoc constructorFieldConstructor) of
                    (Just docJust) -> do
                        builder2 <- (TypelayerCommonDynamic.encoderPutMaybe builder1 True)
                        (TypelayerCommonDynamic.encoderPutString builder2 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder1 False)
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "fields")
            builderN5 <- (TypelayerCommonDynamic.encoderPutMap builder4 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.constructorFields constructorFieldConstructor)))
            builder5 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.constructorFields constructorFieldConstructor)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN5 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.constructorFields constructorFieldConstructor) builderN5 $ \fieldsValuesIndex fieldsValuesKey fieldsValuesElem fieldsValuesAcc -> do
                        builderNFieldsValues6 <- (TypelayerCommonDynamic.encoderPutKey fieldsValuesAcc fieldsValuesKey)
                        builderNFieldsValues7 <- (dynamicPutField builderNFieldsValues6 fieldsValuesElem)
                        builderNFieldsValues8 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNFieldsValues7 (fieldsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.constructorFields constructorFieldConstructor)) - 1)))
                        return builderNFieldsValues8
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetField :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Field)
dynamicGetField dynamicObject = do
    (fieldGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "field")
    case constructor of
        "field" -> do
            fieldInit <- (TypelayerCSchemasDefinitionsStructures.defaultField)
            let fieldFields (fieldGetter1, fieldFieldsLeft, fieldBuilder) = do
                    if (-1 < fieldFieldsLeft)
                    then do
                        (fieldGetter2, fieldNewFieldsLeft) <- do
                            if (0 < fieldFieldsLeft)
                            then do
                                return (fieldGetter1, fieldFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct fieldGetter1 )
                        fieldFieldsVal <- do
                            if (0 < fieldNewFieldsLeft)
                            then do
                                (fieldGetter3, fieldFieldName) <- (TypelayerCommonDynamic.decoderPopField fieldGetter2 )
                                case fieldFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fieldGetter3 )})
                                    "doc" -> do
                                        (fieldGetterDoc4, fieldDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe fieldGetter3 )
                                        (fieldGetter4, fieldDocValue) <- do
                                            if fieldDocIsNull
                                            then do
                                                (fieldGetterDoc5, fieldDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString fieldGetterDoc4 )
                                                return (fieldGetterDoc5, (Just fieldDocUnpacked))
                                            else do
                                                return (fieldGetterDoc4, Nothing)
                                        let values0 = (fieldBuilder{TypelayerCSchemasDefinitionsStructures.fieldDoc=fieldDocValue})
                                        return (fieldGetter4, (fieldNewFieldsLeft - 1), values0)
                                    "type" -> do
                                        (fieldGetter4, fieldTypeValue) <- (dynamicGetBasicType fieldGetter3)
                                        let values0 = (fieldBuilder{TypelayerCSchemasDefinitionsStructures.fieldType=fieldTypeValue})
                                        return (fieldGetter4, (fieldNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fieldGetter3 )})
                            else do
                                return (fieldGetter2, -1, fieldBuilder)
                        (fieldFields fieldFieldsVal)
                    else do
                        return (fieldGetter1, fieldBuilder)
            (fieldFields (fieldGetter0, numFields, fieldInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fieldGetter0 )})

dynamicGetObjField :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Field
dynamicGetObjField dynamicObject = do
    (gotten0, retObj) <- (dynamicGetField dynamicObject)
    return retObj

dynamicPutField :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Field -> TypelayerCommonPrelude.ExecuteM a
dynamicPutField dynamicObject inputObject = do
    case inputObject of
        fieldFieldField@(TypelayerCSchemasDefinitionsStructures.Field{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "field" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "doc")
            builder2 <- do
                case (TypelayerCSchemasDefinitionsStructures.fieldDoc fieldFieldField) of
                    (Just docJust) -> do
                        builder2 <- (TypelayerCommonDynamic.encoderPutMaybe builder1 True)
                        (TypelayerCommonDynamic.encoderPutString builder2 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder1 False)
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "type")
            builder5 <- (dynamicPutBasicType builder4 (TypelayerCSchemasDefinitionsStructures.fieldType fieldFieldField))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetFunction :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Function)
dynamicGetFunction dynamicObject = do
    (functionGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "mutation")
    case constructor of
        "mutation" -> do
            mutationInit <- (TypelayerCSchemasDefinitionsStructures.defaultMutation)
            let mutationFields (functionGetter1, mutationFieldsLeft, mutationBuilder) = do
                    if (-1 < mutationFieldsLeft)
                    then do
                        (functionGetter2, mutationNewFieldsLeft) <- do
                            if (0 < mutationFieldsLeft)
                            then do
                                return (functionGetter1, mutationFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct functionGetter1 )
                        mutationFieldsVal <- do
                            if (0 < mutationNewFieldsLeft)
                            then do
                                (functionGetter3, mutationFieldName) <- (TypelayerCommonDynamic.decoderPopField functionGetter2 )
                                case mutationFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath functionGetter3 )})
                                    "arguments" -> do
                                        (functionGetterArguments4, mutationArgumentsInit) <- (TypelayerCommonDynamic.decoderPopMap functionGetter3 )
                                        let mutationArgumentsElements (functionGetterArguments5, mutationArgumentsElementsLeft, mutationArgumentsMapAcc) = do
                                                if (-1 < mutationArgumentsElementsLeft)
                                                then do
                                                    (functionGetterArguments6, mutationArgumentsNewFieldsLeft) <- do
                                                        if (0 < mutationArgumentsElementsLeft)
                                                        then do
                                                            return (functionGetterArguments5, mutationArgumentsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap functionGetterArguments5 )
                                                    mutationArgumentsElementsVal <- do
                                                        if (0 < mutationArgumentsNewFieldsLeft)
                                                        then do
                                                            (functionGetterArguments7, mutationArgumentsKey) <- (TypelayerCommonDynamic.decoderPopKey functionGetterArguments6 )
                                                            (functionGetterArguments8, mutationArgumentsMapValue) <- (dynamicGetField functionGetterArguments7)
                                                            let mutationArgumentsValues0 = (TypelayerCommonPrelude.mapAdd mutationArgumentsMapAcc mutationArgumentsKey mutationArgumentsMapValue)
                                                            return (functionGetterArguments8, (mutationArgumentsNewFieldsLeft - 1), mutationArgumentsValues0)
                                                        else do
                                                            return (functionGetterArguments6, -1, mutationArgumentsMapAcc)
                                                    (mutationArgumentsElements mutationArgumentsElementsVal)
                                                else do
                                                    return (functionGetterArguments5, mutationArgumentsMapAcc)
                                        (functionGetter4, mutationArgumentsValue) <- (mutationArgumentsElements (functionGetterArguments4, mutationArgumentsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (mutationBuilder{TypelayerCSchemasDefinitionsStructures.mutationArguments=mutationArgumentsValue})
                                        return (functionGetter4, (mutationNewFieldsLeft - 1), values0)
                                    "doc" -> do
                                        (functionGetterDoc4, mutationDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe functionGetter3 )
                                        (functionGetter4, mutationDocValue) <- do
                                            if mutationDocIsNull
                                            then do
                                                (functionGetterDoc5, mutationDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString functionGetterDoc4 )
                                                return (functionGetterDoc5, (Just mutationDocUnpacked))
                                            else do
                                                return (functionGetterDoc4, Nothing)
                                        let values0 = (mutationBuilder{TypelayerCSchemasDefinitionsStructures.mutationDoc=mutationDocValue})
                                        return (functionGetter4, (mutationNewFieldsLeft - 1), values0)
                                    "returns" -> do
                                        (functionGetterReturns4, mutationReturnsInit) <- (TypelayerCommonDynamic.decoderPopMap functionGetter3 )
                                        let mutationReturnsElements (functionGetterReturns5, mutationReturnsElementsLeft, mutationReturnsMapAcc) = do
                                                if (-1 < mutationReturnsElementsLeft)
                                                then do
                                                    (functionGetterReturns6, mutationReturnsNewFieldsLeft) <- do
                                                        if (0 < mutationReturnsElementsLeft)
                                                        then do
                                                            return (functionGetterReturns5, mutationReturnsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap functionGetterReturns5 )
                                                    mutationReturnsElementsVal <- do
                                                        if (0 < mutationReturnsNewFieldsLeft)
                                                        then do
                                                            (functionGetterReturns7, mutationReturnsKey) <- (TypelayerCommonDynamic.decoderPopKey functionGetterReturns6 )
                                                            (functionGetterReturns8, mutationReturnsMapValue) <- (dynamicGetField functionGetterReturns7)
                                                            let mutationReturnsValues0 = (TypelayerCommonPrelude.mapAdd mutationReturnsMapAcc mutationReturnsKey mutationReturnsMapValue)
                                                            return (functionGetterReturns8, (mutationReturnsNewFieldsLeft - 1), mutationReturnsValues0)
                                                        else do
                                                            return (functionGetterReturns6, -1, mutationReturnsMapAcc)
                                                    (mutationReturnsElements mutationReturnsElementsVal)
                                                else do
                                                    return (functionGetterReturns5, mutationReturnsMapAcc)
                                        (functionGetter4, mutationReturnsValue) <- (mutationReturnsElements (functionGetterReturns4, mutationReturnsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (mutationBuilder{TypelayerCSchemasDefinitionsStructures.mutationReturns=mutationReturnsValue})
                                        return (functionGetter4, (mutationNewFieldsLeft - 1), values0)
                                    "target_table" -> do
                                        (functionGetter4, mutationTargetTableValue) <- (dynamicGetTableReference functionGetter3)
                                        let values0 = (mutationBuilder{TypelayerCSchemasDefinitionsStructures.mutationTargetTable=mutationTargetTableValue})
                                        return (functionGetter4, (mutationNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath functionGetter3 )})
                            else do
                                return (functionGetter2, -1, mutationBuilder)
                        (mutationFields mutationFieldsVal)
                    else do
                        return (functionGetter1, mutationBuilder)
            (mutationFields (functionGetter0, numFields, mutationInit))
        "query" -> do
            queryInit <- (TypelayerCSchemasDefinitionsStructures.defaultQuery)
            let queryFields (functionGetter1, queryFieldsLeft, queryBuilder) = do
                    if (-1 < queryFieldsLeft)
                    then do
                        (functionGetter2, queryNewFieldsLeft) <- do
                            if (0 < queryFieldsLeft)
                            then do
                                return (functionGetter1, queryFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct functionGetter1 )
                        queryFieldsVal <- do
                            if (0 < queryNewFieldsLeft)
                            then do
                                (functionGetter3, queryFieldName) <- (TypelayerCommonDynamic.decoderPopField functionGetter2 )
                                case queryFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath functionGetter3 )})
                                    "arguments" -> do
                                        (functionGetterArguments4, queryArgumentsInit) <- (TypelayerCommonDynamic.decoderPopMap functionGetter3 )
                                        let queryArgumentsElements (functionGetterArguments5, queryArgumentsElementsLeft, queryArgumentsMapAcc) = do
                                                if (-1 < queryArgumentsElementsLeft)
                                                then do
                                                    (functionGetterArguments6, queryArgumentsNewFieldsLeft) <- do
                                                        if (0 < queryArgumentsElementsLeft)
                                                        then do
                                                            return (functionGetterArguments5, queryArgumentsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap functionGetterArguments5 )
                                                    queryArgumentsElementsVal <- do
                                                        if (0 < queryArgumentsNewFieldsLeft)
                                                        then do
                                                            (functionGetterArguments7, queryArgumentsKey) <- (TypelayerCommonDynamic.decoderPopKey functionGetterArguments6 )
                                                            (functionGetterArguments8, queryArgumentsMapValue) <- (dynamicGetField functionGetterArguments7)
                                                            let queryArgumentsValues0 = (TypelayerCommonPrelude.mapAdd queryArgumentsMapAcc queryArgumentsKey queryArgumentsMapValue)
                                                            return (functionGetterArguments8, (queryArgumentsNewFieldsLeft - 1), queryArgumentsValues0)
                                                        else do
                                                            return (functionGetterArguments6, -1, queryArgumentsMapAcc)
                                                    (queryArgumentsElements queryArgumentsElementsVal)
                                                else do
                                                    return (functionGetterArguments5, queryArgumentsMapAcc)
                                        (functionGetter4, queryArgumentsValue) <- (queryArgumentsElements (functionGetterArguments4, queryArgumentsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (queryBuilder{TypelayerCSchemasDefinitionsStructures.queryArguments=queryArgumentsValue})
                                        return (functionGetter4, (queryNewFieldsLeft - 1), values0)
                                    "doc" -> do
                                        (functionGetterDoc4, queryDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe functionGetter3 )
                                        (functionGetter4, queryDocValue) <- do
                                            if queryDocIsNull
                                            then do
                                                (functionGetterDoc5, queryDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString functionGetterDoc4 )
                                                return (functionGetterDoc5, (Just queryDocUnpacked))
                                            else do
                                                return (functionGetterDoc4, Nothing)
                                        let values0 = (queryBuilder{TypelayerCSchemasDefinitionsStructures.queryDoc=queryDocValue})
                                        return (functionGetter4, (queryNewFieldsLeft - 1), values0)
                                    "returns" -> do
                                        (functionGetterReturns4, queryReturnsInit) <- (TypelayerCommonDynamic.decoderPopMap functionGetter3 )
                                        let queryReturnsElements (functionGetterReturns5, queryReturnsElementsLeft, queryReturnsMapAcc) = do
                                                if (-1 < queryReturnsElementsLeft)
                                                then do
                                                    (functionGetterReturns6, queryReturnsNewFieldsLeft) <- do
                                                        if (0 < queryReturnsElementsLeft)
                                                        then do
                                                            return (functionGetterReturns5, queryReturnsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap functionGetterReturns5 )
                                                    queryReturnsElementsVal <- do
                                                        if (0 < queryReturnsNewFieldsLeft)
                                                        then do
                                                            (functionGetterReturns7, queryReturnsKey) <- (TypelayerCommonDynamic.decoderPopKey functionGetterReturns6 )
                                                            (functionGetterReturns8, queryReturnsMapValue) <- (dynamicGetField functionGetterReturns7)
                                                            let queryReturnsValues0 = (TypelayerCommonPrelude.mapAdd queryReturnsMapAcc queryReturnsKey queryReturnsMapValue)
                                                            return (functionGetterReturns8, (queryReturnsNewFieldsLeft - 1), queryReturnsValues0)
                                                        else do
                                                            return (functionGetterReturns6, -1, queryReturnsMapAcc)
                                                    (queryReturnsElements queryReturnsElementsVal)
                                                else do
                                                    return (functionGetterReturns5, queryReturnsMapAcc)
                                        (functionGetter4, queryReturnsValue) <- (queryReturnsElements (functionGetterReturns4, queryReturnsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (queryBuilder{TypelayerCSchemasDefinitionsStructures.queryReturns=queryReturnsValue})
                                        return (functionGetter4, (queryNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath functionGetter3 )})
                            else do
                                return (functionGetter2, -1, queryBuilder)
                        (queryFields queryFieldsVal)
                    else do
                        return (functionGetter1, queryBuilder)
            (queryFields (functionGetter0, numFields, queryInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath functionGetter0 )})

dynamicGetObjFunction :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Function
dynamicGetObjFunction dynamicObject = do
    (gotten0, retObj) <- (dynamicGetFunction dynamicObject)
    return retObj

dynamicPutFunction :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Function -> TypelayerCommonPrelude.ExecuteM a
dynamicPutFunction dynamicObject inputObject = do
    case inputObject of
        functionFieldMutation@(TypelayerCSchemasDefinitionsStructures.Mutation{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "mutation" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "arguments")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationArguments functionFieldMutation)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationArguments functionFieldMutation)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.mutationArguments functionFieldMutation) builderN2 $ \argumentsValuesIndex argumentsValuesKey argumentsValuesElem argumentsValuesAcc -> do
                        builderNArgumentsValues3 <- (TypelayerCommonDynamic.encoderPutKey argumentsValuesAcc argumentsValuesKey)
                        builderNArgumentsValues4 <- (dynamicPutField builderNArgumentsValues3 argumentsValuesElem)
                        builderNArgumentsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNArgumentsValues4 (argumentsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationArguments functionFieldMutation)) - 1)))
                        return builderNArgumentsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "doc")
            builder5 <- do
                case (TypelayerCSchemasDefinitionsStructures.mutationDoc functionFieldMutation) of
                    (Just docJust) -> do
                        builder5 <- (TypelayerCommonDynamic.encoderPutMaybe builder4 True)
                        (TypelayerCommonDynamic.encoderPutString builder5 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder4 False)
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "returns")
            builderN8 <- (TypelayerCommonDynamic.encoderPutMap builder7 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationReturns functionFieldMutation)))
            builder8 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationReturns functionFieldMutation)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN8 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.mutationReturns functionFieldMutation) builderN8 $ \returnsValuesIndex returnsValuesKey returnsValuesElem returnsValuesAcc -> do
                        builderNReturnsValues9 <- (TypelayerCommonDynamic.encoderPutKey returnsValuesAcc returnsValuesKey)
                        builderNReturnsValues10 <- (dynamicPutField builderNReturnsValues9 returnsValuesElem)
                        builderNReturnsValues11 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNReturnsValues10 (returnsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.mutationReturns functionFieldMutation)) - 1)))
                        return builderNReturnsValues11
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "target_table")
            builder11 <- (dynamicPutTableReference builder10 (TypelayerCSchemasDefinitionsStructures.mutationTargetTable functionFieldMutation))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12
        functionFieldQuery@(TypelayerCSchemasDefinitionsStructures.Query{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "query" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "arguments")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryArguments functionFieldQuery)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryArguments functionFieldQuery)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.queryArguments functionFieldQuery) builderN2 $ \argumentsValuesIndex argumentsValuesKey argumentsValuesElem argumentsValuesAcc -> do
                        builderNArgumentsValues3 <- (TypelayerCommonDynamic.encoderPutKey argumentsValuesAcc argumentsValuesKey)
                        builderNArgumentsValues4 <- (dynamicPutField builderNArgumentsValues3 argumentsValuesElem)
                        builderNArgumentsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNArgumentsValues4 (argumentsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryArguments functionFieldQuery)) - 1)))
                        return builderNArgumentsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "doc")
            builder5 <- do
                case (TypelayerCSchemasDefinitionsStructures.queryDoc functionFieldQuery) of
                    (Just docJust) -> do
                        builder5 <- (TypelayerCommonDynamic.encoderPutMaybe builder4 True)
                        (TypelayerCommonDynamic.encoderPutString builder5 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder4 False)
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "returns")
            builderN8 <- (TypelayerCommonDynamic.encoderPutMap builder7 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryReturns functionFieldQuery)))
            builder8 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryReturns functionFieldQuery)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN8 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.queryReturns functionFieldQuery) builderN8 $ \returnsValuesIndex returnsValuesKey returnsValuesElem returnsValuesAcc -> do
                        builderNReturnsValues9 <- (TypelayerCommonDynamic.encoderPutKey returnsValuesAcc returnsValuesKey)
                        builderNReturnsValues10 <- (dynamicPutField builderNReturnsValues9 returnsValuesElem)
                        builderNReturnsValues11 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNReturnsValues10 (returnsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.queryReturns functionFieldQuery)) - 1)))
                        return builderNReturnsValues11
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9

dynamicGetLanguage :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Language)
dynamicGetLanguage dynamicObject = do
    (languageGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "haskell")
    case constructor of
        "haskell" -> do
            haskellInit <- (TypelayerCSchemasDefinitionsStructures.defaultHaskell)
            let haskellFields (languageGetter1, haskellFieldsLeft, haskellBuilder) = do
                    if (-1 < haskellFieldsLeft)
                    then do
                        (languageGetter2, haskellNewFieldsLeft) <- do
                            if (0 < haskellFieldsLeft)
                            then do
                                return (languageGetter1, haskellFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct languageGetter1 )
                        haskellFieldsVal <- do
                            if (0 < haskellNewFieldsLeft)
                            then do
                                (languageGetter3, haskellFieldName) <- (TypelayerCommonDynamic.decoderPopField languageGetter2 )
                                case haskellFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                            else do
                                return (languageGetter2, -1, haskellBuilder)
                        (haskellFields haskellFieldsVal)
                    else do
                        return (languageGetter1, haskellBuilder)
            (haskellFields (languageGetter0, numFields, haskellInit))
        "python" -> do
            pythonInit <- (TypelayerCSchemasDefinitionsStructures.defaultPython)
            let pythonFields (languageGetter1, pythonFieldsLeft, pythonBuilder) = do
                    if (-1 < pythonFieldsLeft)
                    then do
                        (languageGetter2, pythonNewFieldsLeft) <- do
                            if (0 < pythonFieldsLeft)
                            then do
                                return (languageGetter1, pythonFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct languageGetter1 )
                        pythonFieldsVal <- do
                            if (0 < pythonNewFieldsLeft)
                            then do
                                (languageGetter3, pythonFieldName) <- (TypelayerCommonDynamic.decoderPopField languageGetter2 )
                                case pythonFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                            else do
                                return (languageGetter2, -1, pythonBuilder)
                        (pythonFields pythonFieldsVal)
                    else do
                        return (languageGetter1, pythonBuilder)
            (pythonFields (languageGetter0, numFields, pythonInit))
        "typescript" -> do
            typescriptInit <- (TypelayerCSchemasDefinitionsStructures.defaultTypescript)
            let typescriptFields (languageGetter1, typescriptFieldsLeft, typescriptBuilder) = do
                    if (-1 < typescriptFieldsLeft)
                    then do
                        (languageGetter2, typescriptNewFieldsLeft) <- do
                            if (0 < typescriptFieldsLeft)
                            then do
                                return (languageGetter1, typescriptFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct languageGetter1 )
                        typescriptFieldsVal <- do
                            if (0 < typescriptNewFieldsLeft)
                            then do
                                (languageGetter3, typescriptFieldName) <- (TypelayerCommonDynamic.decoderPopField languageGetter2 )
                                case typescriptFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter3 )})
                            else do
                                return (languageGetter2, -1, typescriptBuilder)
                        (typescriptFields typescriptFieldsVal)
                    else do
                        return (languageGetter1, typescriptBuilder)
            (typescriptFields (languageGetter0, numFields, typescriptInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath languageGetter0 )})

dynamicGetObjLanguage :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Language
dynamicGetObjLanguage dynamicObject = do
    (gotten0, retObj) <- (dynamicGetLanguage dynamicObject)
    return retObj

dynamicPutLanguage :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Language -> TypelayerCommonPrelude.ExecuteM a
dynamicPutLanguage dynamicObject inputObject = do
    case inputObject of
        languageFieldHaskell@(TypelayerCSchemasDefinitionsStructures.Haskell{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "haskell" 0)
            return builder0
        languageFieldPython@(TypelayerCSchemasDefinitionsStructures.Python{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "python" 0)
            return builder0
        languageFieldTypescript@(TypelayerCSchemasDefinitionsStructures.Typescript{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "typescript" 0)
            return builder0

dynamicGetPackage :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Package)
dynamicGetPackage dynamicObject = do
    (packageGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "package")
    case constructor of
        "package" -> do
            packageInit <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
            let packageFields (packageGetter1, packageFieldsLeft, packageBuilder) = do
                    if (-1 < packageFieldsLeft)
                    then do
                        (packageGetter2, packageNewFieldsLeft) <- do
                            if (0 < packageFieldsLeft)
                            then do
                                return (packageGetter1, packageFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct packageGetter1 )
                        packageFieldsVal <- do
                            if (0 < packageNewFieldsLeft)
                            then do
                                (packageGetter3, packageFieldName) <- (TypelayerCommonDynamic.decoderPopField packageGetter2 )
                                case packageFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath packageGetter3 )})
                                    "collections" -> do
                                        (packageGetterCollections4, packageCollectionsInit) <- (TypelayerCommonDynamic.decoderPopMap packageGetter3 )
                                        let packageCollectionsElements (packageGetterCollections5, packageCollectionsElementsLeft, packageCollectionsMapAcc) = do
                                                if (-1 < packageCollectionsElementsLeft)
                                                then do
                                                    (packageGetterCollections6, packageCollectionsNewFieldsLeft) <- do
                                                        if (0 < packageCollectionsElementsLeft)
                                                        then do
                                                            return (packageGetterCollections5, packageCollectionsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap packageGetterCollections5 )
                                                    packageCollectionsElementsVal <- do
                                                        if (0 < packageCollectionsNewFieldsLeft)
                                                        then do
                                                            (packageGetterCollections7, packageCollectionsKey) <- (TypelayerCommonDynamic.decoderPopKey packageGetterCollections6 )
                                                            (packageGetterCollections8, packageCollectionsMapValue) <- (dynamicGetCollection packageGetterCollections7)
                                                            let packageCollectionsValues0 = (TypelayerCommonPrelude.mapAdd packageCollectionsMapAcc packageCollectionsKey packageCollectionsMapValue)
                                                            return (packageGetterCollections8, (packageCollectionsNewFieldsLeft - 1), packageCollectionsValues0)
                                                        else do
                                                            return (packageGetterCollections6, -1, packageCollectionsMapAcc)
                                                    (packageCollectionsElements packageCollectionsElementsVal)
                                                else do
                                                    return (packageGetterCollections5, packageCollectionsMapAcc)
                                        (packageGetter4, packageCollectionsValue) <- (packageCollectionsElements (packageGetterCollections4, packageCollectionsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageCollections=packageCollectionsValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    "doc" -> do
                                        (packageGetterDoc4, packageDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe packageGetter3 )
                                        (packageGetter4, packageDocValue) <- do
                                            if packageDocIsNull
                                            then do
                                                (packageGetterDoc5, packageDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString packageGetterDoc4 )
                                                return (packageGetterDoc5, (Just packageDocUnpacked))
                                            else do
                                                return (packageGetterDoc4, Nothing)
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageDoc=packageDocValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    "id" -> do
                                        (packageGetter4, packageIdValue) <- (TypelayerCommonDynamic.decoderPopString packageGetter3 )
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageId=packageIdValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    "schemas" -> do
                                        (packageGetterSchemas4, packageSchemasInit) <- (TypelayerCommonDynamic.decoderPopMap packageGetter3 )
                                        let packageSchemasElements (packageGetterSchemas5, packageSchemasElementsLeft, packageSchemasMapAcc) = do
                                                if (-1 < packageSchemasElementsLeft)
                                                then do
                                                    (packageGetterSchemas6, packageSchemasNewFieldsLeft) <- do
                                                        if (0 < packageSchemasElementsLeft)
                                                        then do
                                                            return (packageGetterSchemas5, packageSchemasElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap packageGetterSchemas5 )
                                                    packageSchemasElementsVal <- do
                                                        if (0 < packageSchemasNewFieldsLeft)
                                                        then do
                                                            (packageGetterSchemas7, packageSchemasKey) <- (TypelayerCommonDynamic.decoderPopKey packageGetterSchemas6 )
                                                            (packageGetterSchemas8, packageSchemasMapValue) <- (dynamicGetSchema packageGetterSchemas7)
                                                            let packageSchemasValues0 = (TypelayerCommonPrelude.mapAdd packageSchemasMapAcc packageSchemasKey packageSchemasMapValue)
                                                            return (packageGetterSchemas8, (packageSchemasNewFieldsLeft - 1), packageSchemasValues0)
                                                        else do
                                                            return (packageGetterSchemas6, -1, packageSchemasMapAcc)
                                                    (packageSchemasElements packageSchemasElementsVal)
                                                else do
                                                    return (packageGetterSchemas5, packageSchemasMapAcc)
                                        (packageGetter4, packageSchemasValue) <- (packageSchemasElements (packageGetterSchemas4, packageSchemasInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageSchemas=packageSchemasValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    "services" -> do
                                        (packageGetterServices4, packageServicesInit) <- (TypelayerCommonDynamic.decoderPopMap packageGetter3 )
                                        let packageServicesElements (packageGetterServices5, packageServicesElementsLeft, packageServicesMapAcc) = do
                                                if (-1 < packageServicesElementsLeft)
                                                then do
                                                    (packageGetterServices6, packageServicesNewFieldsLeft) <- do
                                                        if (0 < packageServicesElementsLeft)
                                                        then do
                                                            return (packageGetterServices5, packageServicesElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap packageGetterServices5 )
                                                    packageServicesElementsVal <- do
                                                        if (0 < packageServicesNewFieldsLeft)
                                                        then do
                                                            (packageGetterServices7, packageServicesKey) <- (TypelayerCommonDynamic.decoderPopKey packageGetterServices6 )
                                                            (packageGetterServices8, packageServicesMapValue) <- (dynamicGetService packageGetterServices7)
                                                            let packageServicesValues0 = (TypelayerCommonPrelude.mapAdd packageServicesMapAcc packageServicesKey packageServicesMapValue)
                                                            return (packageGetterServices8, (packageServicesNewFieldsLeft - 1), packageServicesValues0)
                                                        else do
                                                            return (packageGetterServices6, -1, packageServicesMapAcc)
                                                    (packageServicesElements packageServicesElementsVal)
                                                else do
                                                    return (packageGetterServices5, packageServicesMapAcc)
                                        (packageGetter4, packageServicesValue) <- (packageServicesElements (packageGetterServices4, packageServicesInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageServices=packageServicesValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    "version" -> do
                                        (packageGetter4, packageVersionValue) <- (TypelayerCommonDynamic.decoderPopString packageGetter3 )
                                        let values0 = (packageBuilder{TypelayerCSchemasDefinitionsStructures.packageVersion=packageVersionValue})
                                        return (packageGetter4, (packageNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath packageGetter3 )})
                            else do
                                return (packageGetter2, -1, packageBuilder)
                        (packageFields packageFieldsVal)
                    else do
                        return (packageGetter1, packageBuilder)
            (packageFields (packageGetter0, numFields, packageInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath packageGetter0 )})

dynamicGetObjPackage :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Package
dynamicGetObjPackage dynamicObject = do
    (gotten0, retObj) <- (dynamicGetPackage dynamicObject)
    return retObj

dynamicPutPackage :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Package -> TypelayerCommonPrelude.ExecuteM a
dynamicPutPackage dynamicObject inputObject = do
    case inputObject of
        packageFieldPackage@(TypelayerCSchemasDefinitionsStructures.Package{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "package" 6)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "collections")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageCollections packageFieldPackage)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageCollections packageFieldPackage)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.packageCollections packageFieldPackage) builderN2 $ \collectionsValuesIndex collectionsValuesKey collectionsValuesElem collectionsValuesAcc -> do
                        builderNCollectionsValues3 <- (TypelayerCommonDynamic.encoderPutKey collectionsValuesAcc collectionsValuesKey)
                        builderNCollectionsValues4 <- (dynamicPutCollection builderNCollectionsValues3 collectionsValuesElem)
                        builderNCollectionsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNCollectionsValues4 (collectionsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageCollections packageFieldPackage)) - 1)))
                        return builderNCollectionsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "doc")
            builder5 <- do
                case (TypelayerCSchemasDefinitionsStructures.packageDoc packageFieldPackage) of
                    (Just docJust) -> do
                        builder5 <- (TypelayerCommonDynamic.encoderPutMaybe builder4 True)
                        (TypelayerCommonDynamic.encoderPutString builder5 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder4 False)
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.packageId packageFieldPackage))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "schemas")
            builderN11 <- (TypelayerCommonDynamic.encoderPutMap builder10 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageSchemas packageFieldPackage)))
            builder11 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageSchemas packageFieldPackage)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN11 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.packageSchemas packageFieldPackage) builderN11 $ \schemasValuesIndex schemasValuesKey schemasValuesElem schemasValuesAcc -> do
                        builderNSchemasValues12 <- (TypelayerCommonDynamic.encoderPutKey schemasValuesAcc schemasValuesKey)
                        builderNSchemasValues13 <- (dynamicPutSchema builderNSchemasValues12 schemasValuesElem)
                        builderNSchemasValues14 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNSchemasValues13 (schemasValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageSchemas packageFieldPackage)) - 1)))
                        return builderNSchemasValues14
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 False)
            builder13 <- (TypelayerCommonDynamic.encoderPutField builder12 "services")
            builderN14 <- (TypelayerCommonDynamic.encoderPutMap builder13 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageServices packageFieldPackage)))
            builder14 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageServices packageFieldPackage)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN14 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.packageServices packageFieldPackage) builderN14 $ \servicesValuesIndex servicesValuesKey servicesValuesElem servicesValuesAcc -> do
                        builderNServicesValues15 <- (TypelayerCommonDynamic.encoderPutKey servicesValuesAcc servicesValuesKey)
                        builderNServicesValues16 <- (dynamicPutService builderNServicesValues15 servicesValuesElem)
                        builderNServicesValues17 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNServicesValues16 (servicesValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.packageServices packageFieldPackage)) - 1)))
                        return builderNServicesValues17
            builder15 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder14 False)
            builder16 <- (TypelayerCommonDynamic.encoderPutField builder15 "version")
            builder17 <- (TypelayerCommonDynamic.encoderPutString builder16 (TypelayerCSchemasDefinitionsStructures.packageVersion packageFieldPackage))
            builder18 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder17 True)
            return builder18

dynamicGetSchema :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Schema)
dynamicGetSchema dynamicObject = do
    (schemaGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "schema")
    case constructor of
        "schema" -> do
            schemaInit <- (TypelayerCSchemasDefinitionsStructures.defaultSchema)
            let schemaFields (schemaGetter1, schemaFieldsLeft, schemaBuilder) = do
                    if (-1 < schemaFieldsLeft)
                    then do
                        (schemaGetter2, schemaNewFieldsLeft) <- do
                            if (0 < schemaFieldsLeft)
                            then do
                                return (schemaGetter1, schemaFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct schemaGetter1 )
                        schemaFieldsVal <- do
                            if (0 < schemaNewFieldsLeft)
                            then do
                                (schemaGetter3, schemaFieldName) <- (TypelayerCommonDynamic.decoderPopField schemaGetter2 )
                                case schemaFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaGetter3 )})
                                    "doc" -> do
                                        (schemaGetterDoc4, schemaDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe schemaGetter3 )
                                        (schemaGetter4, schemaDocValue) <- do
                                            if schemaDocIsNull
                                            then do
                                                (schemaGetterDoc5, schemaDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString schemaGetterDoc4 )
                                                return (schemaGetterDoc5, (Just schemaDocUnpacked))
                                            else do
                                                return (schemaGetterDoc4, Nothing)
                                        let values0 = (schemaBuilder{TypelayerCSchemasDefinitionsStructures.schemaDoc=schemaDocValue})
                                        return (schemaGetter4, (schemaNewFieldsLeft - 1), values0)
                                    "structures" -> do
                                        (schemaGetterStructures4, schemaStructuresInit) <- (TypelayerCommonDynamic.decoderPopMap schemaGetter3 )
                                        let schemaStructuresElements (schemaGetterStructures5, schemaStructuresElementsLeft, schemaStructuresMapAcc) = do
                                                if (-1 < schemaStructuresElementsLeft)
                                                then do
                                                    (schemaGetterStructures6, schemaStructuresNewFieldsLeft) <- do
                                                        if (0 < schemaStructuresElementsLeft)
                                                        then do
                                                            return (schemaGetterStructures5, schemaStructuresElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap schemaGetterStructures5 )
                                                    schemaStructuresElementsVal <- do
                                                        if (0 < schemaStructuresNewFieldsLeft)
                                                        then do
                                                            (schemaGetterStructures7, schemaStructuresKey) <- (TypelayerCommonDynamic.decoderPopKey schemaGetterStructures6 )
                                                            (schemaGetterStructures8, schemaStructuresMapValue) <- (dynamicGetStructure schemaGetterStructures7)
                                                            let schemaStructuresValues0 = (TypelayerCommonPrelude.mapAdd schemaStructuresMapAcc schemaStructuresKey schemaStructuresMapValue)
                                                            return (schemaGetterStructures8, (schemaStructuresNewFieldsLeft - 1), schemaStructuresValues0)
                                                        else do
                                                            return (schemaGetterStructures6, -1, schemaStructuresMapAcc)
                                                    (schemaStructuresElements schemaStructuresElementsVal)
                                                else do
                                                    return (schemaGetterStructures5, schemaStructuresMapAcc)
                                        (schemaGetter4, schemaStructuresValue) <- (schemaStructuresElements (schemaGetterStructures4, schemaStructuresInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (schemaBuilder{TypelayerCSchemasDefinitionsStructures.schemaStructures=schemaStructuresValue})
                                        return (schemaGetter4, (schemaNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaGetter3 )})
                            else do
                                return (schemaGetter2, -1, schemaBuilder)
                        (schemaFields schemaFieldsVal)
                    else do
                        return (schemaGetter1, schemaBuilder)
            (schemaFields (schemaGetter0, numFields, schemaInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaGetter0 )})

dynamicGetObjSchema :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Schema
dynamicGetObjSchema dynamicObject = do
    (gotten0, retObj) <- (dynamicGetSchema dynamicObject)
    return retObj

dynamicPutSchema :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Schema -> TypelayerCommonPrelude.ExecuteM a
dynamicPutSchema dynamicObject inputObject = do
    case inputObject of
        schemaFieldSchema@(TypelayerCSchemasDefinitionsStructures.Schema{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "schema" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "doc")
            builder2 <- do
                case (TypelayerCSchemasDefinitionsStructures.schemaDoc schemaFieldSchema) of
                    (Just docJust) -> do
                        builder2 <- (TypelayerCommonDynamic.encoderPutMaybe builder1 True)
                        (TypelayerCommonDynamic.encoderPutString builder2 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder1 False)
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "structures")
            builderN5 <- (TypelayerCommonDynamic.encoderPutMap builder4 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.schemaStructures schemaFieldSchema)))
            builder5 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.schemaStructures schemaFieldSchema)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN5 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.schemaStructures schemaFieldSchema) builderN5 $ \structuresValuesIndex structuresValuesKey structuresValuesElem structuresValuesAcc -> do
                        builderNStructuresValues6 <- (TypelayerCommonDynamic.encoderPutKey structuresValuesAcc structuresValuesKey)
                        builderNStructuresValues7 <- (dynamicPutStructure builderNStructuresValues6 structuresValuesElem)
                        builderNStructuresValues8 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNStructuresValues7 (structuresValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.schemaStructures schemaFieldSchema)) - 1)))
                        return builderNStructuresValues8
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetSchemaReference :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.SchemaReference)
dynamicGetSchemaReference dynamicObject = do
    (schemaReferenceGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "schema_reference")
    case constructor of
        "schema_reference" -> do
            schemaReferenceInit <- (TypelayerCSchemasDefinitionsStructures.defaultSchemaReference)
            let schemaReferenceFields (schemaReferenceGetter1, schemaReferenceFieldsLeft, schemaReferenceBuilder) = do
                    if (-1 < schemaReferenceFieldsLeft)
                    then do
                        (schemaReferenceGetter2, schemaReferenceNewFieldsLeft) <- do
                            if (0 < schemaReferenceFieldsLeft)
                            then do
                                return (schemaReferenceGetter1, schemaReferenceFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct schemaReferenceGetter1 )
                        schemaReferenceFieldsVal <- do
                            if (0 < schemaReferenceNewFieldsLeft)
                            then do
                                (schemaReferenceGetter3, schemaReferenceFieldName) <- (TypelayerCommonDynamic.decoderPopField schemaReferenceGetter2 )
                                case schemaReferenceFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaReferenceGetter3 )})
                                    "package" -> do
                                        (schemaReferenceGetter4, schemaReferencePackageValue) <- (TypelayerCommonDynamic.decoderPopString schemaReferenceGetter3 )
                                        let values0 = (schemaReferenceBuilder{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=schemaReferencePackageValue})
                                        return (schemaReferenceGetter4, (schemaReferenceNewFieldsLeft - 1), values0)
                                    "schema_id" -> do
                                        (schemaReferenceGetter4, schemaReferenceSchemaIdValue) <- (TypelayerCommonDynamic.decoderPopString schemaReferenceGetter3 )
                                        let values0 = (schemaReferenceBuilder{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaReferenceSchemaIdValue})
                                        return (schemaReferenceGetter4, (schemaReferenceNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaReferenceGetter3 )})
                            else do
                                return (schemaReferenceGetter2, -1, schemaReferenceBuilder)
                        (schemaReferenceFields schemaReferenceFieldsVal)
                    else do
                        return (schemaReferenceGetter1, schemaReferenceBuilder)
            (schemaReferenceFields (schemaReferenceGetter0, numFields, schemaReferenceInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath schemaReferenceGetter0 )})

dynamicGetObjSchemaReference :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.SchemaReference
dynamicGetObjSchemaReference dynamicObject = do
    (gotten0, retObj) <- (dynamicGetSchemaReference dynamicObject)
    return retObj

dynamicPutSchemaReference :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.SchemaReference -> TypelayerCommonPrelude.ExecuteM a
dynamicPutSchemaReference dynamicObject inputObject = do
    case inputObject of
        schemaReferenceFieldSchemaReference@(TypelayerCSchemasDefinitionsStructures.SchemaReference{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "schema_reference" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "package")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.schemaReferencePackage schemaReferenceFieldSchemaReference))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "schema_id")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId schemaReferenceFieldSchemaReference))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetService :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Service)
dynamicGetService dynamicObject = do
    (serviceGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "service")
    case constructor of
        "service" -> do
            serviceInit <- (TypelayerCSchemasDefinitionsStructures.defaultService)
            let serviceFields (serviceGetter1, serviceFieldsLeft, serviceBuilder) = do
                    if (-1 < serviceFieldsLeft)
                    then do
                        (serviceGetter2, serviceNewFieldsLeft) <- do
                            if (0 < serviceFieldsLeft)
                            then do
                                return (serviceGetter1, serviceFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct serviceGetter1 )
                        serviceFieldsVal <- do
                            if (0 < serviceNewFieldsLeft)
                            then do
                                (serviceGetter3, serviceFieldName) <- (TypelayerCommonDynamic.decoderPopField serviceGetter2 )
                                case serviceFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath serviceGetter3 )})
                                    "doc" -> do
                                        (serviceGetterDoc4, serviceDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe serviceGetter3 )
                                        (serviceGetter4, serviceDocValue) <- do
                                            if serviceDocIsNull
                                            then do
                                                (serviceGetterDoc5, serviceDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString serviceGetterDoc4 )
                                                return (serviceGetterDoc5, (Just serviceDocUnpacked))
                                            else do
                                                return (serviceGetterDoc4, Nothing)
                                        let values0 = (serviceBuilder{TypelayerCSchemasDefinitionsStructures.serviceDoc=serviceDocValue})
                                        return (serviceGetter4, (serviceNewFieldsLeft - 1), values0)
                                    "functions" -> do
                                        (serviceGetterFunctions4, serviceFunctionsInit) <- (TypelayerCommonDynamic.decoderPopMap serviceGetter3 )
                                        let serviceFunctionsElements (serviceGetterFunctions5, serviceFunctionsElementsLeft, serviceFunctionsMapAcc) = do
                                                if (-1 < serviceFunctionsElementsLeft)
                                                then do
                                                    (serviceGetterFunctions6, serviceFunctionsNewFieldsLeft) <- do
                                                        if (0 < serviceFunctionsElementsLeft)
                                                        then do
                                                            return (serviceGetterFunctions5, serviceFunctionsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap serviceGetterFunctions5 )
                                                    serviceFunctionsElementsVal <- do
                                                        if (0 < serviceFunctionsNewFieldsLeft)
                                                        then do
                                                            (serviceGetterFunctions7, serviceFunctionsKey) <- (TypelayerCommonDynamic.decoderPopKey serviceGetterFunctions6 )
                                                            (serviceGetterFunctions8, serviceFunctionsMapValue) <- (dynamicGetFunction serviceGetterFunctions7)
                                                            let serviceFunctionsValues0 = (TypelayerCommonPrelude.mapAdd serviceFunctionsMapAcc serviceFunctionsKey serviceFunctionsMapValue)
                                                            return (serviceGetterFunctions8, (serviceFunctionsNewFieldsLeft - 1), serviceFunctionsValues0)
                                                        else do
                                                            return (serviceGetterFunctions6, -1, serviceFunctionsMapAcc)
                                                    (serviceFunctionsElements serviceFunctionsElementsVal)
                                                else do
                                                    return (serviceGetterFunctions5, serviceFunctionsMapAcc)
                                        (serviceGetter4, serviceFunctionsValue) <- (serviceFunctionsElements (serviceGetterFunctions4, serviceFunctionsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (serviceBuilder{TypelayerCSchemasDefinitionsStructures.serviceFunctions=serviceFunctionsValue})
                                        return (serviceGetter4, (serviceNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath serviceGetter3 )})
                            else do
                                return (serviceGetter2, -1, serviceBuilder)
                        (serviceFields serviceFieldsVal)
                    else do
                        return (serviceGetter1, serviceBuilder)
            (serviceFields (serviceGetter0, numFields, serviceInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath serviceGetter0 )})

dynamicGetObjService :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Service
dynamicGetObjService dynamicObject = do
    (gotten0, retObj) <- (dynamicGetService dynamicObject)
    return retObj

dynamicPutService :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Service -> TypelayerCommonPrelude.ExecuteM a
dynamicPutService dynamicObject inputObject = do
    case inputObject of
        serviceFieldService@(TypelayerCSchemasDefinitionsStructures.Service{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "service" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "doc")
            builder2 <- do
                case (TypelayerCSchemasDefinitionsStructures.serviceDoc serviceFieldService) of
                    (Just docJust) -> do
                        builder2 <- (TypelayerCommonDynamic.encoderPutMaybe builder1 True)
                        (TypelayerCommonDynamic.encoderPutString builder2 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder1 False)
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "functions")
            builderN5 <- (TypelayerCommonDynamic.encoderPutMap builder4 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.serviceFunctions serviceFieldService)))
            builder5 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.serviceFunctions serviceFieldService)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN5 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.serviceFunctions serviceFieldService) builderN5 $ \functionsValuesIndex functionsValuesKey functionsValuesElem functionsValuesAcc -> do
                        builderNFunctionsValues6 <- (TypelayerCommonDynamic.encoderPutKey functionsValuesAcc functionsValuesKey)
                        builderNFunctionsValues7 <- (dynamicPutFunction builderNFunctionsValues6 functionsValuesElem)
                        builderNFunctionsValues8 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNFunctionsValues7 (functionsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.serviceFunctions serviceFieldService)) - 1)))
                        return builderNFunctionsValues8
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetStructure :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Structure)
dynamicGetStructure dynamicObject = do
    (structureGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "structure")
    case constructor of
        "structure" -> do
            structureInit <- (TypelayerCSchemasDefinitionsStructures.defaultStructure)
            let structureFields (structureGetter1, structureFieldsLeft, structureBuilder) = do
                    if (-1 < structureFieldsLeft)
                    then do
                        (structureGetter2, structureNewFieldsLeft) <- do
                            if (0 < structureFieldsLeft)
                            then do
                                return (structureGetter1, structureFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct structureGetter1 )
                        structureFieldsVal <- do
                            if (0 < structureNewFieldsLeft)
                            then do
                                (structureGetter3, structureFieldName) <- (TypelayerCommonDynamic.decoderPopField structureGetter2 )
                                case structureFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath structureGetter3 )})
                                    "constructors" -> do
                                        (structureGetterConstructors4, structureConstructorsInit) <- (TypelayerCommonDynamic.decoderPopMap structureGetter3 )
                                        let structureConstructorsElements (structureGetterConstructors5, structureConstructorsElementsLeft, structureConstructorsMapAcc) = do
                                                if (-1 < structureConstructorsElementsLeft)
                                                then do
                                                    (structureGetterConstructors6, structureConstructorsNewFieldsLeft) <- do
                                                        if (0 < structureConstructorsElementsLeft)
                                                        then do
                                                            return (structureGetterConstructors5, structureConstructorsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap structureGetterConstructors5 )
                                                    structureConstructorsElementsVal <- do
                                                        if (0 < structureConstructorsNewFieldsLeft)
                                                        then do
                                                            (structureGetterConstructors7, structureConstructorsKey) <- (TypelayerCommonDynamic.decoderPopKey structureGetterConstructors6 )
                                                            (structureGetterConstructors8, structureConstructorsMapValue) <- (dynamicGetConstructor structureGetterConstructors7)
                                                            let structureConstructorsValues0 = (TypelayerCommonPrelude.mapAdd structureConstructorsMapAcc structureConstructorsKey structureConstructorsMapValue)
                                                            return (structureGetterConstructors8, (structureConstructorsNewFieldsLeft - 1), structureConstructorsValues0)
                                                        else do
                                                            return (structureGetterConstructors6, -1, structureConstructorsMapAcc)
                                                    (structureConstructorsElements structureConstructorsElementsVal)
                                                else do
                                                    return (structureGetterConstructors5, structureConstructorsMapAcc)
                                        (structureGetter4, structureConstructorsValue) <- (structureConstructorsElements (structureGetterConstructors4, structureConstructorsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (structureBuilder{TypelayerCSchemasDefinitionsStructures.structureConstructors=structureConstructorsValue})
                                        return (structureGetter4, (structureNewFieldsLeft - 1), values0)
                                    "doc" -> do
                                        (structureGetterDoc4, structureDocIsNull) <- (TypelayerCommonDynamic.decoderPopMaybe structureGetter3 )
                                        (structureGetter4, structureDocValue) <- do
                                            if structureDocIsNull
                                            then do
                                                (structureGetterDoc5, structureDocUnpacked) <- (TypelayerCommonDynamic.decoderPopString structureGetterDoc4 )
                                                return (structureGetterDoc5, (Just structureDocUnpacked))
                                            else do
                                                return (structureGetterDoc4, Nothing)
                                        let values0 = (structureBuilder{TypelayerCSchemasDefinitionsStructures.structureDoc=structureDocValue})
                                        return (structureGetter4, (structureNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath structureGetter3 )})
                            else do
                                return (structureGetter2, -1, structureBuilder)
                        (structureFields structureFieldsVal)
                    else do
                        return (structureGetter1, structureBuilder)
            (structureFields (structureGetter0, numFields, structureInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath structureGetter0 )})

dynamicGetObjStructure :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Structure
dynamicGetObjStructure dynamicObject = do
    (gotten0, retObj) <- (dynamicGetStructure dynamicObject)
    return retObj

dynamicPutStructure :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Structure -> TypelayerCommonPrelude.ExecuteM a
dynamicPutStructure dynamicObject inputObject = do
    case inputObject of
        structureFieldStructure@(TypelayerCSchemasDefinitionsStructures.Structure{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "structure" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "constructors")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.structureConstructors structureFieldStructure)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.structureConstructors structureFieldStructure)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.structureConstructors structureFieldStructure) builderN2 $ \constructorsValuesIndex constructorsValuesKey constructorsValuesElem constructorsValuesAcc -> do
                        builderNConstructorsValues3 <- (TypelayerCommonDynamic.encoderPutKey constructorsValuesAcc constructorsValuesKey)
                        builderNConstructorsValues4 <- (dynamicPutConstructor builderNConstructorsValues3 constructorsValuesElem)
                        builderNConstructorsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNConstructorsValues4 (constructorsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.structureConstructors structureFieldStructure)) - 1)))
                        return builderNConstructorsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "doc")
            builder5 <- do
                case (TypelayerCSchemasDefinitionsStructures.structureDoc structureFieldStructure) of
                    (Just docJust) -> do
                        builder5 <- (TypelayerCommonDynamic.encoderPutMaybe builder4 True)
                        (TypelayerCommonDynamic.encoderPutString builder5 docJust)
                    _ -> do
                        (TypelayerCommonDynamic.encoderPutMaybe builder4 False)
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6

dynamicGetTable :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.Table)
dynamicGetTable dynamicObject = do
    (tableGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "table")
    case constructor of
        "table" -> do
            tableInit <- (TypelayerCSchemasDefinitionsStructures.defaultTable)
            let tableFields (tableGetter1, tableFieldsLeft, tableBuilder) = do
                    if (-1 < tableFieldsLeft)
                    then do
                        (tableGetter2, tableNewFieldsLeft) <- do
                            if (0 < tableFieldsLeft)
                            then do
                                return (tableGetter1, tableFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct tableGetter1 )
                        tableFieldsVal <- do
                            if (0 < tableNewFieldsLeft)
                            then do
                                (tableGetter3, tableFieldName) <- (TypelayerCommonDynamic.decoderPopField tableGetter2 )
                                case tableFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableGetter3 )})
                                    "columns" -> do
                                        (tableGetterColumns4, tableColumnsInit) <- (TypelayerCommonDynamic.decoderPopMap tableGetter3 )
                                        let tableColumnsElements (tableGetterColumns5, tableColumnsElementsLeft, tableColumnsMapAcc) = do
                                                if (-1 < tableColumnsElementsLeft)
                                                then do
                                                    (tableGetterColumns6, tableColumnsNewFieldsLeft) <- do
                                                        if (0 < tableColumnsElementsLeft)
                                                        then do
                                                            return (tableGetterColumns5, tableColumnsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap tableGetterColumns5 )
                                                    tableColumnsElementsVal <- do
                                                        if (0 < tableColumnsNewFieldsLeft)
                                                        then do
                                                            (tableGetterColumns7, tableColumnsKey) <- (TypelayerCommonDynamic.decoderPopKey tableGetterColumns6 )
                                                            (tableGetterColumns8, tableColumnsMapValue) <- (dynamicGetColumn tableGetterColumns7)
                                                            let tableColumnsValues0 = (TypelayerCommonPrelude.mapAdd tableColumnsMapAcc tableColumnsKey tableColumnsMapValue)
                                                            return (tableGetterColumns8, (tableColumnsNewFieldsLeft - 1), tableColumnsValues0)
                                                        else do
                                                            return (tableGetterColumns6, -1, tableColumnsMapAcc)
                                                    (tableColumnsElements tableColumnsElementsVal)
                                                else do
                                                    return (tableGetterColumns5, tableColumnsMapAcc)
                                        (tableGetter4, tableColumnsValue) <- (tableColumnsElements (tableGetterColumns4, tableColumnsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (tableBuilder{TypelayerCSchemasDefinitionsStructures.tableColumns=tableColumnsValue})
                                        return (tableGetter4, (tableNewFieldsLeft - 1), values0)
                                    "description" -> do
                                        (tableGetter4, tableDescriptionValue) <- (TypelayerCommonDynamic.decoderPopString tableGetter3 )
                                        let values0 = (tableBuilder{TypelayerCSchemasDefinitionsStructures.tableDescription=tableDescriptionValue})
                                        return (tableGetter4, (tableNewFieldsLeft - 1), values0)
                                    "table" -> do
                                        (tableGetter4, tableTableValue) <- (TypelayerCommonDynamic.decoderPopString tableGetter3 )
                                        let values0 = (tableBuilder{TypelayerCSchemasDefinitionsStructures.tableTable=tableTableValue})
                                        return (tableGetter4, (tableNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableGetter3 )})
                            else do
                                return (tableGetter2, -1, tableBuilder)
                        (tableFields tableFieldsVal)
                    else do
                        return (tableGetter1, tableBuilder)
            (tableFields (tableGetter0, numFields, tableInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableGetter0 )})

dynamicGetObjTable :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.Table
dynamicGetObjTable dynamicObject = do
    (gotten0, retObj) <- (dynamicGetTable dynamicObject)
    return retObj

dynamicPutTable :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.Table -> TypelayerCommonPrelude.ExecuteM a
dynamicPutTable dynamicObject inputObject = do
    case inputObject of
        tableFieldTable@(TypelayerCSchemasDefinitionsStructures.Table{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "table" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "columns")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.tableColumns tableFieldTable)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.tableColumns tableFieldTable)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (TypelayerCSchemasDefinitionsStructures.tableColumns tableFieldTable) builderN2 $ \columnsValuesIndex columnsValuesKey columnsValuesElem columnsValuesAcc -> do
                        builderNColumnsValues3 <- (TypelayerCommonDynamic.encoderPutKey columnsValuesAcc columnsValuesKey)
                        builderNColumnsValues4 <- (dynamicPutColumn builderNColumnsValues3 columnsValuesElem)
                        builderNColumnsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNColumnsValues4 (columnsValuesIndex == ((TypelayerCommonPrelude.mapSize (TypelayerCSchemasDefinitionsStructures.tableColumns tableFieldTable)) - 1)))
                        return builderNColumnsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "description")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.tableDescription tableFieldTable))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "table")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.tableTable tableFieldTable))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9

dynamicGetTableReference :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasDefinitionsStructures.TableReference)
dynamicGetTableReference dynamicObject = do
    (tableReferenceGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "table_reference")
    case constructor of
        "table_reference" -> do
            tableReferenceInit <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
            let tableReferenceFields (tableReferenceGetter1, tableReferenceFieldsLeft, tableReferenceBuilder) = do
                    if (-1 < tableReferenceFieldsLeft)
                    then do
                        (tableReferenceGetter2, tableReferenceNewFieldsLeft) <- do
                            if (0 < tableReferenceFieldsLeft)
                            then do
                                return (tableReferenceGetter1, tableReferenceFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct tableReferenceGetter1 )
                        tableReferenceFieldsVal <- do
                            if (0 < tableReferenceNewFieldsLeft)
                            then do
                                (tableReferenceGetter3, tableReferenceFieldName) <- (TypelayerCommonDynamic.decoderPopField tableReferenceGetter2 )
                                case tableReferenceFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableReferenceGetter3 )})
                                    "database" -> do
                                        (tableReferenceGetter4, tableReferenceDatabaseValue) <- (TypelayerCommonDynamic.decoderPopString tableReferenceGetter3 )
                                        let values0 = (tableReferenceBuilder{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=tableReferenceDatabaseValue})
                                        return (tableReferenceGetter4, (tableReferenceNewFieldsLeft - 1), values0)
                                    "package" -> do
                                        (tableReferenceGetter4, tableReferencePackageValue) <- (TypelayerCommonDynamic.decoderPopString tableReferenceGetter3 )
                                        let values0 = (tableReferenceBuilder{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=tableReferencePackageValue})
                                        return (tableReferenceGetter4, (tableReferenceNewFieldsLeft - 1), values0)
                                    "table_id" -> do
                                        (tableReferenceGetter4, tableReferenceTableIdValue) <- (TypelayerCommonDynamic.decoderPopString tableReferenceGetter3 )
                                        let values0 = (tableReferenceBuilder{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableReferenceTableIdValue})
                                        return (tableReferenceGetter4, (tableReferenceNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableReferenceGetter3 )})
                            else do
                                return (tableReferenceGetter2, -1, tableReferenceBuilder)
                        (tableReferenceFields tableReferenceFieldsVal)
                    else do
                        return (tableReferenceGetter1, tableReferenceBuilder)
            (tableReferenceFields (tableReferenceGetter0, numFields, tableReferenceInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath tableReferenceGetter0 )})

dynamicGetObjTableReference :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasDefinitionsStructures.TableReference
dynamicGetObjTableReference dynamicObject = do
    (gotten0, retObj) <- (dynamicGetTableReference dynamicObject)
    return retObj

dynamicPutTableReference :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasDefinitionsStructures.TableReference -> TypelayerCommonPrelude.ExecuteM a
dynamicPutTableReference dynamicObject inputObject = do
    case inputObject of
        tableReferenceFieldTableReference@(TypelayerCSchemasDefinitionsStructures.TableReference{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "table_reference" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "database")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase tableReferenceFieldTableReference))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "package")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasDefinitionsStructures.tableReferencePackage tableReferenceFieldTableReference))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "table_id")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCSchemasDefinitionsStructures.tableReferenceTableId tableReferenceFieldTableReference))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9