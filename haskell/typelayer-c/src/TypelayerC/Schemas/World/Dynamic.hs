{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.World.Dynamic where
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


dynamicGetFile :: TypelayerCommonDynamic.Decoder a => a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCSchemasWorldStructures.File)
dynamicGetFile dynamicObject = do
    (fileGetter0, constructor, numFields) <- (TypelayerCommonDynamic.decoderPopStruct dynamicObject "file")
    case constructor of
        "file" -> do
            fileInit <- (TypelayerCSchemasWorldStructures.defaultFile)
            let fileFields (fileGetter1, fileFieldsLeft, fileBuilder) = do
                    if (-1 < fileFieldsLeft)
                    then do
                        (fileGetter2, fileNewFieldsLeft) <- do
                            if (0 < fileFieldsLeft)
                            then do
                                return (fileGetter1, fileFieldsLeft)
                            else do
                                (TypelayerCommonDynamic.decoderPopHasMoreStruct fileGetter1 )
                        fileFieldsVal <- do
                            if (0 < fileNewFieldsLeft)
                            then do
                                (fileGetter3, fileFieldName) <- (TypelayerCommonDynamic.decoderPopField fileGetter2 )
                                case fileFieldName of
                                    "*" -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Constructor must be first field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fileGetter3 )})
                                    "contents" -> do
                                        (fileGetter4, fileContentsValue) <- (TypelayerCommonDynamic.decoderPopString fileGetter3 )
                                        let values0 = (fileBuilder{TypelayerCSchemasWorldStructures.fileContents=fileContentsValue})
                                        return (fileGetter4, (fileNewFieldsLeft - 1), values0)
                                    "fileid" -> do
                                        (fileGetter4, fileFileidValue) <- (TypelayerCommonDynamic.decoderPopString fileGetter3 )
                                        let values0 = (fileBuilder{TypelayerCSchemasWorldStructures.fileFileid=fileFileidValue})
                                        return (fileGetter4, (fileNewFieldsLeft - 1), values0)
                                    _ -> do
                                        TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fileGetter3 )})
                            else do
                                return (fileGetter2, -1, fileBuilder)
                        (fileFields fileFieldsVal)
                    else do
                        return (fileGetter1, fileBuilder)
            (fileFields (fileGetter0, numFields, fileInit))
        _ -> do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Unknown Constructor", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath fileGetter0 )})

dynamicGetObjFile :: TypelayerCommonDynamic.PackedDecoder -> TypelayerCommonPrelude.ExecuteM TypelayerCSchemasWorldStructures.File
dynamicGetObjFile dynamicObject = do
    (gotten0, retObj) <- (dynamicGetFile dynamicObject)
    return retObj

dynamicPutFile :: TypelayerCommonDynamic.Encoder a => a -> TypelayerCSchemasWorldStructures.File -> TypelayerCommonPrelude.ExecuteM a
dynamicPutFile dynamicObject inputObject = do
    case inputObject of
        fileFieldFile@(TypelayerCSchemasWorldStructures.File{}) -> do
            builder0 <- (TypelayerCommonDynamic.encoderPutStruct dynamicObject "file" 2)
            builder1 <- (TypelayerCommonDynamic.encoderPutField builder0 "contents")
            builder2 <- (TypelayerCommonDynamic.encoderPutString builder1 (TypelayerCSchemasWorldStructures.fileContents fileFieldFile))
            builder3 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder2 False)
            builder4 <- (TypelayerCommonDynamic.encoderPutField builder3 "fileid")
            builder5 <- (TypelayerCommonDynamic.encoderPutString builder4 (TypelayerCSchemasWorldStructures.fileFileid fileFieldFile))
            builder6 <- (TypelayerCommonDynamic.encoderPutFieldEnd builder5 True)
            return builder6