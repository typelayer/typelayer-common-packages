{-# LANGUAGE OverloadedStrings #-}
module CompilerEncodableSymmetrySpec where

import Control.Monad.Trans (lift)
import Data.Either (isRight)
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerC.Services.Compiler.Dynamic as TypelayerCServicesCompilerDynamic
import qualified TypelayerC.Services.Compiler.Structures as TypelayerCServicesCompilerStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Encodings.Json as TypelayerCommonEncodingsJson
import qualified TypelayerCommon.Encodings.Msgpack as TypelayerCommonEncodingsMsgpack
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes
import qualified Test.Hspec as Hspec


spec :: Hspec.Spec
spec = do
    Hspec.describe "compilerEncodableSymmetry" $ do
        Hspec.it "newPackageInputName0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let nameFieldTestVal = ""
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageInputName0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let nameFieldTestVal = ""
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageInputName1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let nameFieldTestVal = "a"
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageInputName1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let nameFieldTestVal = "a"
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageInputName2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let nameFieldTestVal = "abc"
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageInputName2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let nameFieldTestVal = "abc"
                let val = (TypelayerCServicesCompilerStructures.NewPackageInput{TypelayerCServicesCompilerStructures.newPackageInputName=nameFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageOutputPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.NewPackageOutput{TypelayerCServicesCompilerStructures.newPackageOutputPackage=packageFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "newPackageOutputPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.NewPackageOutput{TypelayerCServicesCompilerStructures.newPackageOutputPackage=packageFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewInputLanguage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                languageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultLanguage)
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewInput{TypelayerCServicesCompilerStructures.previewInputLanguage=languageFieldTestVal, TypelayerCServicesCompilerStructures.previewInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewInputLanguage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                languageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultLanguage)
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewInput{TypelayerCServicesCompilerStructures.previewInputLanguage=languageFieldTestVal, TypelayerCServicesCompilerStructures.previewInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewInputPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                languageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultLanguage)
                let val = (TypelayerCServicesCompilerStructures.PreviewInput{TypelayerCServicesCompilerStructures.previewInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewInputLanguage=languageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewInputPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                languageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultLanguage)
                let val = (TypelayerCServicesCompilerStructures.PreviewInput{TypelayerCServicesCompilerStructures.previewInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewInputLanguage=languageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let filesFieldTestVal = []
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let filesFieldTestVal = []
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                filesBlocks <- (TypelayerCSchemasWorldStructures.defaultFile)
                let filesFieldTestVal = [filesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                filesBlocks <- (TypelayerCSchemasWorldStructures.defaultFile)
                let filesFieldTestVal = [filesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                filesBlocks <- (TypelayerCSchemasWorldStructures.defaultFile)
                let filesFieldTestVal = [filesBlocks, filesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewOutputFiles2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                filesBlocks <- (TypelayerCSchemasWorldStructures.defaultFile)
                let filesFieldTestVal = [filesBlocks, filesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewOutput{TypelayerCServicesCompilerStructures.previewOutputFiles=filesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let changesFieldTestVal = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let changesFieldTestVal = []
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesInputPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let changesDefault = []
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesInput{TypelayerCServicesCompilerStructures.previewChangesInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewChangesInputChanges=changesDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesOutputNewPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                newPackageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesOutput{TypelayerCServicesCompilerStructures.previewChangesOutputNewPackage=newPackageFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewChangesOutputNewPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                newPackageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewChangesOutput{TypelayerCServicesCompilerStructures.previewChangesOutputNewPackage=newPackageFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffInputOtherPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                otherPackageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffInput{TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage=otherPackageFieldTestVal, TypelayerCServicesCompilerStructures.previewDiffInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffInputOtherPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                otherPackageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                packageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffInput{TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage=otherPackageFieldTestVal, TypelayerCServicesCompilerStructures.previewDiffInputPackage=packageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffInputPackage0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                otherPackageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffInput{TypelayerCServicesCompilerStructures.previewDiffInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage=otherPackageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffInputPackage0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                packageFieldTestVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                otherPackageDefault <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffInput{TypelayerCServicesCompilerStructures.previewDiffInputPackage=packageFieldTestVal, TypelayerCServicesCompilerStructures.previewDiffInputOtherPackage=otherPackageDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let changesFieldTestVal = []
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let changesFieldTestVal = []
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "previewDiffOutputChanges2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                changesBlocks <- (TypelayerCSchemasDefinitionsStructures.defaultChange)
                let changesFieldTestVal = [changesBlocks, changesBlocks]
                let val = (TypelayerCServicesCompilerStructures.PreviewDiffOutput{TypelayerCServicesCompilerStructures.previewDiffOutputChanges=changesFieldTestVal})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight