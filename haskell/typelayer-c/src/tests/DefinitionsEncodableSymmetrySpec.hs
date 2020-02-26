{-# LANGUAGE OverloadedStrings #-}
module DefinitionsEncodableSymmetrySpec where

import Control.Monad.Trans (lift)
import Data.Either (isRight)
import qualified TypelayerC.Schemas.Definitions.Dynamic as TypelayerCSchemasDefinitionsDynamic
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Encodings.Json as TypelayerCommonEncodingsJson
import qualified TypelayerCommon.Encodings.Msgpack as TypelayerCommonEncodingsMsgpack
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes
import qualified Test.Hspec as Hspec


spec :: Hspec.Spec
spec = do
    Hspec.describe "definitionsEncodableSymmetry" $ do
        Hspec.it "applyChangesProxyAChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let aChangesFieldTestVal = []
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyAChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let aChangesFieldTestVal = []
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyAChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                aChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let aChangesFieldTestVal = [aChangesBlocks]
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyAChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                aChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let aChangesFieldTestVal = [aChangesBlocks]
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyAChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                aChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let aChangesFieldTestVal = [aChangesBlocks, aChangesBlocks]
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyAChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                aChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let aChangesFieldTestVal = [aChangesBlocks, aChangesBlocks]
                let changesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let changesFieldTestVal = []
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let changesFieldTestVal = []
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let aChangesDefault = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let zChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let zChangesFieldTestVal = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let zChangesFieldTestVal = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                zChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let zChangesFieldTestVal = [zChangesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                zChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let zChangesFieldTestVal = [zChangesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                zChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let zChangesFieldTestVal = [zChangesBlocks, zChangesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "applyChangesProxyZChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                zChangesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let zChangesFieldTestVal = [zChangesBlocks, zChangesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let aChangesDefault = []
                let val = (TypelayerCSchemasDefinitionsStructures.ApplyChangesProxy{TypelayerCSchemasDefinitionsStructures.applyChangesProxyZChanges=zChangesFieldTestVal, TypelayerCSchemasDefinitionsStructures.applyChangesProxyPackage=packageDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyChanges=changesDefault, TypelayerCSchemasDefinitionsStructures.applyChangesProxyAChanges=aChangesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnIdFieldTestVal = ""
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnIdFieldTestVal = ""
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnIdFieldTestVal = "a"
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnIdFieldTestVal = "a"
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnIdFieldTestVal = "abc"
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnColumnId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnIdFieldTestVal = "abc"
                let databaseIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseIdFieldTestVal = ""
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseIdFieldTestVal = ""
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseIdFieldTestVal = "a"
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseIdFieldTestVal = "a"
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseIdFieldTestVal = "abc"
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnDatabaseId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseIdFieldTestVal = "abc"
                let columnIdDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = ""
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = ""
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = "a"
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = "a"
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = "abc"
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "addColumnTableId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = "abc"
                let databaseIdDefault = ""
                let columnIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.AddColumn{TypelayerCSchemasDefinitionsStructures.addColumnTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.addColumnDatabaseId=databaseIdDefault, TypelayerCSchemasDefinitionsStructures.addColumnColumnId=columnIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChange encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChange decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let changesFieldTestVal = []
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let changesFieldTestVal = []
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "changesetChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let val = (TypelayerCSchemasDefinitionsStructures.Changeset{TypelayerCSchemasDefinitionsStructures.changesetChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutChangeset encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionBackend0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                backendFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let descriptionDefault = ""
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionBackend=backendFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionBackend0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                backendFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let descriptionDefault = ""
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionBackend=backendFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "a"
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "a"
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "abc"
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionDescription2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "abc"
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let schemaDefault = ""
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaFieldTestVal = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaFieldTestVal = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaFieldTestVal = "a"
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaFieldTestVal = "a"
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaFieldTestVal = "abc"
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionSchema2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaFieldTestVal = "abc"
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let tablesDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault, TypelayerCSchemasDefinitionsStructures.collectionTables=tablesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                tablesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultTable)
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", tablesBlocks)])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                tablesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultTable)
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", tablesBlocks)])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                tablesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultTable)
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", tablesBlocks), ("key-2-1", tablesBlocks)])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "collectionTables2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                tablesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultTable)
                let tablesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", tablesBlocks), ("key-2-1", tablesBlocks)])
                let schemaDefault = ""
                let descriptionDefault = ""
                backendDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBackend)
                let val = (TypelayerCSchemasDefinitionsStructures.Collection{TypelayerCSchemasDefinitionsStructures.collectionTables=tablesFieldTestVal, TypelayerCSchemasDefinitionsStructures.collectionSchema=schemaDefault, TypelayerCSchemasDefinitionsStructures.collectionDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.collectionBackend=backendDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutCollection encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnFieldTestVal = ""
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnFieldTestVal = ""
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnFieldTestVal = "a"
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnFieldTestVal = "a"
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnFieldTestVal = "abc"
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnColumn2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnFieldTestVal = "abc"
                let descriptionDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnColumn=columnFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = ""
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = ""
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "a"
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "a"
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "abc"
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnDescription2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "abc"
                let columnDefault = ""
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault, TypelayerCSchemasDefinitionsStructures.columnType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnType0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                typeFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let descriptionDefault = ""
                let columnDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnType=typeFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "columnType0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                typeFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultColumnType)
                let descriptionDefault = ""
                let columnDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Column{TypelayerCSchemasDefinitionsStructures.columnType=typeFieldTestVal, TypelayerCSchemasDefinitionsStructures.columnDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.columnColumn=columnDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutColumn encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let fieldsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                fieldsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", fieldsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                fieldsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", fieldsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                fieldsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", fieldsBlocks), ("key-2-1", fieldsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "constructorFields2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                fieldsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let fieldsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", fieldsBlocks), ("key-2-1", fieldsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Constructor{TypelayerCSchemasDefinitionsStructures.constructorFields=fieldsFieldTestVal, TypelayerCSchemasDefinitionsStructures.constructorDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutConstructor encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                typeDefault <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldType=typeDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldType0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                typeFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldType=typeFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fieldType0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                typeFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultBasicType)
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Field{TypelayerCSchemasDefinitionsStructures.fieldType=typeFieldTestVal, TypelayerCSchemasDefinitionsStructures.fieldDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutField encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjField decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                argumentsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", argumentsBlocks)])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                argumentsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", argumentsBlocks)])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                argumentsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", argumentsBlocks), ("key-2-1", argumentsBlocks)])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationArguments2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                argumentsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let argumentsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", argumentsBlocks), ("key-2-1", argumentsBlocks)])
                let docDefault = Nothing
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                returnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", returnsBlocks)])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                returnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", returnsBlocks)])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                returnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", returnsBlocks), ("key-2-1", returnsBlocks)])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationReturns2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                returnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultField)
                let returnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", returnsBlocks), ("key-2-1", returnsBlocks)])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                targetTableDefault <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault, TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationTargetTable0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                targetTableFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "mutationTargetTable0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                targetTableFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultTableReference)
                let returnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let argumentsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Mutation{TypelayerCSchemasDefinitionsStructures.mutationTargetTable=targetTableFieldTestVal, TypelayerCSchemasDefinitionsStructures.mutationReturns=returnsDefault, TypelayerCSchemasDefinitionsStructures.mutationDoc=docDefault, TypelayerCSchemasDefinitionsStructures.mutationArguments=argumentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutFunction encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                collectionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultCollection)
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", collectionsBlocks)])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                collectionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultCollection)
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", collectionsBlocks)])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                collectionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultCollection)
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", collectionsBlocks), ("key-2-1", collectionsBlocks)])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageCollections2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                collectionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultCollection)
                let collectionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", collectionsBlocks), ("key-2-1", collectionsBlocks)])
                let docDefault = Nothing
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let idFieldTestVal = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let idFieldTestVal = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let idFieldTestVal = "a"
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let idFieldTestVal = "a"
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let idFieldTestVal = "abc"
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let idFieldTestVal = "abc"
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageId=idFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                schemasBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultSchema)
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", schemasBlocks)])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                schemasBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultSchema)
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", schemasBlocks)])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                schemasBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultSchema)
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", schemasBlocks), ("key-2-1", schemasBlocks)])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageSchemas2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                schemasBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultSchema)
                let schemasFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", schemasBlocks), ("key-2-1", schemasBlocks)])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                servicesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultService)
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", servicesBlocks)])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                servicesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultService)
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", servicesBlocks)])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                servicesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultService)
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", servicesBlocks), ("key-2-1", servicesBlocks)])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageServices2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                servicesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultService)
                let servicesFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", servicesBlocks), ("key-2-1", servicesBlocks)])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let versionDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageServices=servicesFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault, TypelayerCSchemasDefinitionsStructures.packageVersion=versionDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let versionFieldTestVal = ""
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let versionFieldTestVal = ""
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let versionFieldTestVal = "a"
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let versionFieldTestVal = "a"
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let versionFieldTestVal = "abc"
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "packageVersion2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let versionFieldTestVal = "abc"
                let servicesDefault = (TypelayerCommonPrelude.mapFromList [])
                let schemasDefault = (TypelayerCommonPrelude.mapFromList [])
                let idDefault = ""
                let docDefault = Nothing
                let collectionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Package{TypelayerCSchemasDefinitionsStructures.packageVersion=versionFieldTestVal, TypelayerCSchemasDefinitionsStructures.packageServices=servicesDefault, TypelayerCSchemasDefinitionsStructures.packageSchemas=schemasDefault, TypelayerCSchemasDefinitionsStructures.packageId=idDefault, TypelayerCSchemasDefinitionsStructures.packageDoc=docDefault, TypelayerCSchemasDefinitionsStructures.packageCollections=collectionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutPackage encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let structuresDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                structuresBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultStructure)
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", structuresBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                structuresBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultStructure)
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", structuresBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                structuresBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultStructure)
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", structuresBlocks), ("key-2-1", structuresBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaStructures2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                structuresBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultStructure)
                let structuresFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", structuresBlocks), ("key-2-1", structuresBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Schema{TypelayerCSchemasDefinitionsStructures.schemaStructures=structuresFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchema encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = ""
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = ""
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = "a"
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = "a"
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = "abc"
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferencePackage2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = "abc"
                let schemaIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaIdFieldTestVal = ""
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaIdFieldTestVal = ""
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaIdFieldTestVal = "a"
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaIdFieldTestVal = "a"
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let schemaIdFieldTestVal = "abc"
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "schemaReferenceSchemaId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let schemaIdFieldTestVal = "abc"
                let packageDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.SchemaReference{TypelayerCSchemasDefinitionsStructures.schemaReferenceSchemaId=schemaIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.schemaReferencePackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let functionsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                functionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultFunction)
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", functionsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                functionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultFunction)
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", functionsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                functionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultFunction)
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", functionsBlocks), ("key-2-1", functionsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "serviceFunctions2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                functionsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultFunction)
                let functionsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", functionsBlocks), ("key-2-1", functionsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Service{TypelayerCSchemasDefinitionsStructures.serviceFunctions=functionsFieldTestVal, TypelayerCSchemasDefinitionsStructures.serviceDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutService encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjService decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                constructorsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultConstructor)
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", constructorsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                constructorsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultConstructor)
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", constructorsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                constructorsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultConstructor)
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", constructorsBlocks), ("key-2-1", constructorsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureConstructors2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                constructorsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultConstructor)
                let constructorsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", constructorsBlocks), ("key-2-1", constructorsBlocks)])
                let docDefault = Nothing
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureDoc=docDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docFieldTestVal = Nothing
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docFieldTestVal = Nothing
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = ""
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "a"
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc3Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "structureDoc3MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let docBlocks = "abc"
                let docFieldTestVal = (Just docBlocks)
                let constructorsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Structure{TypelayerCSchemasDefinitionsStructures.structureDoc=docFieldTestVal, TypelayerCSchemasDefinitionsStructures.structureConstructors=constructorsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutStructure encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                columnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultColumn)
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", columnsBlocks)])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                columnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultColumn)
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", columnsBlocks)])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                columnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultColumn)
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", columnsBlocks), ("key-2-1", columnsBlocks)])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableColumns2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                columnsBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultColumn)
                let columnsFieldTestVal = (TypelayerCommonPrelude.mapFromList [("key-1", columnsBlocks), ("key-2-1", columnsBlocks)])
                let descriptionDefault = ""
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableColumns=columnsFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "a"
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "a"
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let descriptionFieldTestVal = "abc"
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableDescription2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let descriptionFieldTestVal = "abc"
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let tableDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault, TypelayerCSchemasDefinitionsStructures.tableTable=tableDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableFieldTestVal = ""
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableFieldTestVal = ""
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableFieldTestVal = "a"
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableFieldTestVal = "a"
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableFieldTestVal = "abc"
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableTable2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableFieldTestVal = "abc"
                let descriptionDefault = ""
                let columnsDefault = (TypelayerCommonPrelude.mapFromList [])
                let val = (TypelayerCSchemasDefinitionsStructures.Table{TypelayerCSchemasDefinitionsStructures.tableTable=tableFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableDescription=descriptionDefault, TypelayerCSchemasDefinitionsStructures.tableColumns=columnsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTable encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTable decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseFieldTestVal = ""
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseFieldTestVal = ""
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseFieldTestVal = "a"
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseFieldTestVal = "a"
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let databaseFieldTestVal = "abc"
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceDatabase2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let databaseFieldTestVal = "abc"
                let packageDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = ""
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = ""
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = "a"
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = "a"
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let packageFieldTestVal = "abc"
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferencePackage2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let packageFieldTestVal = "abc"
                let databaseDefault = ""
                let tableIdDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = ""
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = ""
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = "a"
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = "a"
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let tableIdFieldTestVal = "abc"
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "tableReferenceTableId2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let tableIdFieldTestVal = "abc"
                let packageDefault = ""
                let databaseDefault = ""
                let val = (TypelayerCSchemasDefinitionsStructures.TableReference{TypelayerCSchemasDefinitionsStructures.tableReferenceTableId=tableIdFieldTestVal, TypelayerCSchemasDefinitionsStructures.tableReferencePackage=packageDefault, TypelayerCSchemasDefinitionsStructures.tableReferenceDatabase=databaseDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasDefinitionsDynamic.dynamicPutTableReference encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight