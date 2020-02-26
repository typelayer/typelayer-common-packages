{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.ExceptionsEncoding where
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data ExceptionMetaSerializable = 
    ExceptionMetaSerializable
        { exceptionMetaSerializableExceptionFields :: (TypelayerCommonTypes.Map TypelayerCommonTypes.Text TypelayerCommonTypes.Text)
        , exceptionMetaSerializableExceptionMessage :: TypelayerCommonTypes.Text
        , exceptionMetaSerializableExceptionModule :: TypelayerCommonTypes.Text
        , exceptionMetaSerializableExceptionType :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

dynamicGetExceptionMetaSerializable :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, ExceptionMetaSerializable)
dynamicGetExceptionMetaSerializable dynamicObject = do
    (exceptionMetaSerializableGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "exception_meta_serializable")
    case constructor of
        "exception_meta_serializable" -> do
            exceptionMetaSerializableInit <- (defaultExceptionMetaSerializable)
            let exceptionMetaSerializableFields (exceptionMetaSerializableGetter1, exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder) = do
                    if (-1 < exceptionMetaSerializableFieldsLeft)
                    then do
                        (exceptionMetaSerializableGetter2, exceptionMetaSerializableNewFieldsLeft) <- do
                            if (0 < exceptionMetaSerializableFieldsLeft)
                            then do
                                return (exceptionMetaSerializableGetter1, exceptionMetaSerializableFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct exceptionMetaSerializableGetter1 )
                        exceptionMetaSerializableFieldsVal <- do
                            if (0 < exceptionMetaSerializableNewFieldsLeft)
                            then do
                                (exceptionMetaSerializableGetter3, exceptionMetaSerializableFieldName) <- (TypelayerCommonDynamic.decoderPopField exceptionMetaSerializableGetter2 )
                                case exceptionMetaSerializableFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath exceptionMetaSerializableGetter3 )})
                                    "exception_fields" -> do
                                        (exceptionMetaSerializableGetterExceptionFields4, exceptionMetaSerializableExceptionFieldsInit) <- (TypelayerCommonDynamic.decoderPopMap exceptionMetaSerializableGetter3 )
                                        let exceptionMetaSerializableExceptionFieldsElements (exceptionMetaSerializableGetterExceptionFields5, exceptionMetaSerializableExceptionFieldsElementsLeft, exceptionMetaSerializableExceptionFieldsMapAcc) = do
                                                if (-1 < exceptionMetaSerializableExceptionFieldsElementsLeft)
                                                then do
                                                    (exceptionMetaSerializableGetterExceptionFields6, exceptionMetaSerializableExceptionFieldsNewFieldsLeft) <- do
                                                        if (0 < exceptionMetaSerializableExceptionFieldsElementsLeft)
                                                        then do
                                                            return (exceptionMetaSerializableGetterExceptionFields5, exceptionMetaSerializableExceptionFieldsElementsLeft)
                                                        else do
                                                            (TypelayerCommonDynamic.decoderPopHasMoreMap exceptionMetaSerializableGetterExceptionFields5 )
                                                    exceptionMetaSerializableExceptionFieldsElementsVal <- do
                                                        if (0 < exceptionMetaSerializableExceptionFieldsNewFieldsLeft)
                                                        then do
                                                            (exceptionMetaSerializableGetterExceptionFields7, exceptionMetaSerializableExceptionFieldsKey) <- (TypelayerCommonDynamic.decoderPopKey exceptionMetaSerializableGetterExceptionFields6 )
                                                            (exceptionMetaSerializableGetterExceptionFields8, exceptionMetaSerializableExceptionFieldsMapValue) <- (TypelayerCommonDynamic.decoderPopString exceptionMetaSerializableGetterExceptionFields7 )
                                                            let exceptionMetaSerializableExceptionFieldsValues0 = (TypelayerCommonPrelude.mapAdd exceptionMetaSerializableExceptionFieldsMapAcc exceptionMetaSerializableExceptionFieldsKey exceptionMetaSerializableExceptionFieldsMapValue)
                                                            return (exceptionMetaSerializableGetterExceptionFields8, (exceptionMetaSerializableExceptionFieldsNewFieldsLeft - 1), exceptionMetaSerializableExceptionFieldsValues0)
                                                        else do
                                                            return (exceptionMetaSerializableGetterExceptionFields6, -1, exceptionMetaSerializableExceptionFieldsMapAcc)
                                                    (exceptionMetaSerializableExceptionFieldsElements exceptionMetaSerializableExceptionFieldsElementsVal)
                                                else do
                                                    return (exceptionMetaSerializableGetterExceptionFields5, exceptionMetaSerializableExceptionFieldsMapAcc)
                                        (exceptionMetaSerializableGetter4, exceptionMetaSerializableExceptionFieldsValue) <- (exceptionMetaSerializableExceptionFieldsElements (exceptionMetaSerializableGetterExceptionFields4, exceptionMetaSerializableExceptionFieldsInit, (TypelayerCommonPrelude.mapFromList [])))
                                        let values0 = (exceptionMetaSerializableBuilder{exceptionMetaSerializableExceptionFields=exceptionMetaSerializableExceptionFieldsValue})
                                        return (exceptionMetaSerializableGetter4, (exceptionMetaSerializableNewFieldsLeft - 1), values0)
                                    "exception_message" -> do
                                        (exceptionMetaSerializableGetter4, exceptionMetaSerializableExceptionMessageValue) <- (TypelayerCommonDynamic.decoderPopString exceptionMetaSerializableGetter3 )
                                        let values0 = (exceptionMetaSerializableBuilder{exceptionMetaSerializableExceptionMessage=exceptionMetaSerializableExceptionMessageValue})
                                        return (exceptionMetaSerializableGetter4, (exceptionMetaSerializableNewFieldsLeft - 1), values0)
                                    "exception_module" -> do
                                        (exceptionMetaSerializableGetter4, exceptionMetaSerializableExceptionModuleValue) <- (TypelayerCommonDynamic.decoderPopString exceptionMetaSerializableGetter3 )
                                        let values0 = (exceptionMetaSerializableBuilder{exceptionMetaSerializableExceptionModule=exceptionMetaSerializableExceptionModuleValue})
                                        return (exceptionMetaSerializableGetter4, (exceptionMetaSerializableNewFieldsLeft - 1), values0)
                                    "exception_type" -> do
                                        (exceptionMetaSerializableGetter4, exceptionMetaSerializableExceptionTypeValue) <- (TypelayerCommonDynamic.decoderPopString exceptionMetaSerializableGetter3 )
                                        let values0 = (exceptionMetaSerializableBuilder{exceptionMetaSerializableExceptionType=exceptionMetaSerializableExceptionTypeValue})
                                        return (exceptionMetaSerializableGetter4, (exceptionMetaSerializableNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath exceptionMetaSerializableGetter3 )})
                            else do
                                return (exceptionMetaSerializableGetter2, -1, exceptionMetaSerializableBuilder)
                        (exceptionMetaSerializableFields exceptionMetaSerializableFieldsVal)
                    else do
                        return (exceptionMetaSerializableGetter1, exceptionMetaSerializableBuilder)
            (exceptionMetaSerializableFields (exceptionMetaSerializableGetter0, numFields, exceptionMetaSerializableInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath exceptionMetaSerializableGetter0 )})

dynamicGetObjExceptionMetaSerializable :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM ExceptionMetaSerializable
dynamicGetObjExceptionMetaSerializable dynamicObject = do
    (gotten0, retObj) <- (dynamicGetExceptionMetaSerializable dynamicObject)
    return retObj

dynamicPutExceptionMetaSerializable :: TypelayerCommonDynamic.Encoder a => a -> ExceptionMetaSerializable -> TypelayerCommonPrelude.ExecuteM a
dynamicPutExceptionMetaSerializable dynamicObject inputObject = do
    case inputObject of
        exceptionMetaSerializableFieldExceptionMetaSerializable@(ExceptionMetaSerializable{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "exception_meta_serializable" 4)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "exception_fields")
            builderN2 <- (TypelayerCommonDynamic.encoderPutMap builder1 (TypelayerCommonPrelude.mapSize (exceptionMetaSerializableExceptionFields exceptionMetaSerializableFieldExceptionMetaSerializable)))
            builder2 <- do
                if (0 == (TypelayerCommonPrelude.mapSize (exceptionMetaSerializableExceptionFields exceptionMetaSerializableFieldExceptionMetaSerializable)))
                then do
                    (TypelayerCommonDynamic.encoderPutValueEnd builderN2 True)
                else do
                    TypelayerCommonPrelude.mapReduceWithIndexM (exceptionMetaSerializableExceptionFields exceptionMetaSerializableFieldExceptionMetaSerializable) builderN2 $ \exceptionFieldsValuesIndex exceptionFieldsValuesKey exceptionFieldsValuesElem exceptionFieldsValuesAcc -> do
                        builderNExceptionFieldsValues3 <- (TypelayerCommonDynamic.encoderPutKey exceptionFieldsValuesAcc exceptionFieldsValuesKey)
                        builderNExceptionFieldsValues4 <- (TypelayerCommonDynamic.encoderPutString builderNExceptionFieldsValues3 exceptionFieldsValuesElem)
                        builderNExceptionFieldsValues5 <- (TypelayerCommonDynamic.encoderPutValueEnd builderNExceptionFieldsValues4 (exceptionFieldsValuesIndex == ((TypelayerCommonPrelude.mapSize (exceptionMetaSerializableExceptionFields exceptionMetaSerializableFieldExceptionMetaSerializable)) - 1)))
                        return builderNExceptionFieldsValues5
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "exception_message")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (exceptionMetaSerializableExceptionMessage exceptionMetaSerializableFieldExceptionMetaSerializable))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "exception_module")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (exceptionMetaSerializableExceptionModule exceptionMetaSerializableFieldExceptionMetaSerializable))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 False)
            builder10 <- (TypelayerCommonDynamic.encoderPutField builder9 "exception_type")
            builder11 <- (TypelayerCommonDynamic.encoderPutString builder10 (exceptionMetaSerializableExceptionType exceptionMetaSerializableFieldExceptionMetaSerializable))
            builder12 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder11 True)
            return builder12

defaultExceptionMetaSerializable :: TypelayerCommonPrelude.ExecuteM ExceptionMetaSerializable
defaultExceptionMetaSerializable  = do
    let exceptionFieldsVal = (TypelayerCommonPrelude.mapFromList [])
    let exceptionMessageVal = ""
    let exceptionModuleVal = ""
    let exceptionTypeVal = ""
    return (ExceptionMetaSerializable{exceptionMetaSerializableExceptionFields=exceptionFieldsVal, exceptionMetaSerializableExceptionMessage=exceptionMessageVal, exceptionMetaSerializableExceptionModule=exceptionModuleVal, exceptionMetaSerializableExceptionType=exceptionTypeVal})

describeExceptionMetaSerializable :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeExceptionMetaSerializable  = do
    let exceptionFieldsInnerFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let exceptionFieldsFieldInfo = (TypelayerCommonDocumentation.TlMap{TypelayerCommonDocumentation.tlMapMapInner=exceptionFieldsInnerFieldInfo})
    let exceptionMetaSerializableExceptionFieldsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="exception_fields", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=exceptionFieldsFieldInfo})
    let exceptionMessageFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let exceptionMetaSerializableExceptionMessageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="exception_message", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=exceptionMessageFieldInfo})
    let exceptionModuleFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let exceptionMetaSerializableExceptionModuleFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="exception_module", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=exceptionModuleFieldInfo})
    let exceptionTypeFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let exceptionMetaSerializableExceptionTypeFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="exception_type", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=exceptionTypeFieldInfo})
    let exceptionMetaSerializableConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="exception_meta_serializable", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[exceptionMetaSerializableExceptionFieldsFieldInfo, exceptionMetaSerializableExceptionMessageFieldInfo, exceptionMetaSerializableExceptionModuleFieldInfo, exceptionMetaSerializableExceptionTypeFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="exception_meta_serializable", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[exceptionMetaSerializableConstructorInfo]})

toSerializable :: TypelayerCommonExceptions.ExceptionMeta -> TypelayerCommonPrelude.ExecuteM ExceptionMetaSerializable
toSerializable meta = do
    return (ExceptionMetaSerializable{exceptionMetaSerializableExceptionFields=(TypelayerCommonExceptions.exceptionMetaExceptionFields meta), exceptionMetaSerializableExceptionModule=(TypelayerCommonExceptions.exceptionMetaExceptionModule meta), exceptionMetaSerializableExceptionType=(TypelayerCommonExceptions.exceptionMetaExceptionType meta), exceptionMetaSerializableExceptionMessage=(TypelayerCommonExceptions.exceptionMetaExceptionMessage meta)})

toPlainMeta :: ExceptionMetaSerializable -> TypelayerCommonPrelude.ExecuteM TypelayerCommonExceptions.ExceptionMeta
toPlainMeta meta = do
    return (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionFields=(exceptionMetaSerializableExceptionFields meta), TypelayerCommonExceptions.exceptionMetaExceptionModule=(exceptionMetaSerializableExceptionModule meta), TypelayerCommonExceptions.exceptionMetaExceptionType=(exceptionMetaSerializableExceptionType meta), TypelayerCommonExceptions.exceptionMetaExceptionMessage=(exceptionMetaSerializableExceptionMessage meta)})