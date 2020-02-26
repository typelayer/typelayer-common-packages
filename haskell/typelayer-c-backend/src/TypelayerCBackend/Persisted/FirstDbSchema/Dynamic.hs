{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCBackend.Persisted.FirstDbSchema.Dynamic where
import qualified TypelayerCBackend.Persisted.FirstDbSchema.Structures as TypelayerCBackendPersistedFirstDbSchemaStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


dynamicGetBoom :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCBackendPersistedFirstDbSchemaStructures.Boom)
dynamicGetBoom dynamicObject = do
    (boomGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "boom")
    case constructor of
        "boom" -> do
            boomInit <- (TypelayerCBackendPersistedFirstDbSchemaStructures.defaultBoom)
            let boomFields (boomGetter1, boomFieldsLeft, boomBuilder) = do
                    if (-1 < boomFieldsLeft)
                    then do
                        (boomGetter2, boomNewFieldsLeft) <- do
                            if (0 < boomFieldsLeft)
                            then do
                                return (boomGetter1, boomFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct boomGetter1 )
                        boomFieldsVal <- do
                            if (0 < boomNewFieldsLeft)
                            then do
                                (boomGetter3, boomFieldName) <- (TypelayerCommonDynamic.decoderPopField boomGetter2 )
                                case boomFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomGetter3 )})
                                    "boom_id" -> do
                                        (boomGetter4, boomBoomIdValue) <- (TypelayerCommonDynamic.decoderPopInteger boomGetter3 )
                                        let values0 = (boomBuilder{TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId=boomBoomIdValue})
                                        return (boomGetter4, (boomNewFieldsLeft - 1), values0)
                                    "cool" -> do
                                        (boomGetter4, boomCoolValue) <- (TypelayerCommonDynamic.decoderPopInteger boomGetter3 )
                                        let values0 = (boomBuilder{TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool=boomCoolValue})
                                        return (boomGetter4, (boomNewFieldsLeft - 1), values0)
                                    "other" -> do
                                        (boomGetter4, boomOtherValue) <- (TypelayerCommonDynamic.decoderPopString boomGetter3 )
                                        let values0 = (boomBuilder{TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther=boomOtherValue})
                                        return (boomGetter4, (boomNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomGetter3 )})
                            else do
                                return (boomGetter2, -1, boomBuilder)
                        (boomFields boomFieldsVal)
                    else do
                        return (boomGetter1, boomBuilder)
            (boomFields (boomGetter0, numFields, boomInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomGetter0 )})

dynamicGetObjBoom :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCBackendPersistedFirstDbSchemaStructures.Boom
dynamicGetObjBoom dynamicObject = do
    (gotten0, retObj) <- (dynamicGetBoom dynamicObject)
    return retObj

dynamicPutBoom :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCBackendPersistedFirstDbSchemaStructures.Boom -> TypelayerCommonPrelude.ExecuteM a
dynamicPutBoom dynamicObject inputObject = do
    case inputObject of
        boomFieldBoom@(TypelayerCBackendPersistedFirstDbSchemaStructures.Boom{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "boom" 3)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "boom_id")
            builder2 <- (TypelayerCommonDynamic.encoderPutInteger builder1 (TypelayerCBackendPersistedFirstDbSchemaStructures.boomBoomId boomFieldBoom))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "cool")
            builder5 <- (TypelayerCommonDynamic.encoderPutInteger builder4 (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCool boomFieldBoom))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 False)
            builder7 <- (TypelayerCommonDynamic.encoderPutField builder6 "other")
            builder8 <- (TypelayerCommonDynamic.encoderPutString builder7 (TypelayerCBackendPersistedFirstDbSchemaStructures.boomOther boomFieldBoom))
            builder9 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder8 True)
            return builder9

dynamicGetBoomCreate :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate)
dynamicGetBoomCreate dynamicObject = do
    (boomCreateGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "boom_create")
    case constructor of
        "boom_create" -> do
            boomCreateInit <- (TypelayerCBackendPersistedFirstDbSchemaStructures.defaultBoomCreate)
            let boomCreateFields (boomCreateGetter1, boomCreateFieldsLeft, boomCreateBuilder) = do
                    if (-1 < boomCreateFieldsLeft)
                    then do
                        (boomCreateGetter2, boomCreateNewFieldsLeft) <- do
                            if (0 < boomCreateFieldsLeft)
                            then do
                                return (boomCreateGetter1, boomCreateFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct boomCreateGetter1 )
                        boomCreateFieldsVal <- do
                            if (0 < boomCreateNewFieldsLeft)
                            then do
                                (boomCreateGetter3, boomCreateFieldName) <- (TypelayerCommonDynamic.decoderPopField boomCreateGetter2 )
                                case boomCreateFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomCreateGetter3 )})
                                    "cool" -> do
                                        (boomCreateGetter4, boomCreateCoolValue) <- (TypelayerCommonDynamic.decoderPopInteger boomCreateGetter3 )
                                        let values0 = (boomCreateBuilder{TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateCool=boomCreateCoolValue})
                                        return (boomCreateGetter4, (boomCreateNewFieldsLeft - 1), values0)
                                    "other" -> do
                                        (boomCreateGetter4, boomCreateOtherValue) <- (TypelayerCommonDynamic.decoderPopString boomCreateGetter3 )
                                        let values0 = (boomCreateBuilder{TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateOther=boomCreateOtherValue})
                                        return (boomCreateGetter4, (boomCreateNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomCreateGetter3 )})
                            else do
                                return (boomCreateGetter2, -1, boomCreateBuilder)
                        (boomCreateFields boomCreateFieldsVal)
                    else do
                        return (boomCreateGetter1, boomCreateBuilder)
            (boomCreateFields (boomCreateGetter0, numFields, boomCreateInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath boomCreateGetter0 )})

dynamicGetObjBoomCreate :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate
dynamicGetObjBoomCreate dynamicObject = do
    (gotten0, retObj) <- (dynamicGetBoomCreate dynamicObject)
    return retObj

dynamicPutBoomCreate :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate -> TypelayerCommonPrelude.ExecuteM a
dynamicPutBoomCreate dynamicObject inputObject = do
    case inputObject of
        boomCreateFieldBoomCreate@(TypelayerCBackendPersistedFirstDbSchemaStructures.BoomCreate{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "boom_create" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "cool")
            builder2 <- (TypelayerCommonDynamic.encoderPutInteger builder1 (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateCool boomCreateFieldBoomCreate))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "other")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCBackendPersistedFirstDbSchemaStructures.boomCreateOther boomCreateFieldBoomCreate))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6