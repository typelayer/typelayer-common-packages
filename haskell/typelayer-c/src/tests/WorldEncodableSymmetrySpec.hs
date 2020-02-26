{-# LANGUAGE OverloadedStrings #-}
module WorldEncodableSymmetrySpec where

import Control.Monad.Trans (lift)
import Data.Either (isRight)
import qualified TypelayerC.Schemas.World.Dynamic as TypelayerCSchemasWorldDynamic
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Encodings.Json as TypelayerCommonEncodingsJson
import qualified TypelayerCommon.Encodings.Msgpack as TypelayerCommonEncodingsMsgpack
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes
import qualified Test.Hspec as Hspec


spec :: Hspec.Spec
spec = do
    Hspec.describe "worldEncodableSymmetry" $ do
        Hspec.it "fileContents0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let contentsFieldTestVal = ""
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileContents0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let contentsFieldTestVal = ""
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileContents1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let contentsFieldTestVal = "a"
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileContents1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let contentsFieldTestVal = "a"
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileContents2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let contentsFieldTestVal = "abc"
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileContents2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let contentsFieldTestVal = "abc"
                let fileidDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileContents=contentsFieldTestVal, TypelayerCSchemasWorldStructures.fileFileid=fileidDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid0Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let fileidFieldTestVal = ""
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid0MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let fileidFieldTestVal = ""
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid1Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let fileidFieldTestVal = "a"
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid1MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let fileidFieldTestVal = "a"
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid2Json" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsJson.JsonEncoding{}))
                let fileidFieldTestVal = "abc"
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight
        Hspec.it "fileFileid2MsgPack" $ do
            eitherError <- TypelayerCommonPrelude.runExecuteM $ do
                
                
                
                
                
                
                
                
                
                let encoding = (TypelayerCommonDynamic.PackedEncoding (TypelayerCommonEncodingsMsgpack.MsgPackEncoding{}))
                let fileidFieldTestVal = "abc"
                let contentsDefault = ""
                let val = (TypelayerCSchemasWorldStructures.File{TypelayerCSchemasWorldStructures.fileFileid=fileidFieldTestVal, TypelayerCSchemasWorldStructures.fileContents=contentsDefault})
                encoder <- (TypelayerCommonDynamic.encodingStartEncoding encoding )
                encoder0 <- (TypelayerCSchemasWorldDynamic.dynamicPutFile encoder val)
                resultingBin <- (TypelayerCommonDynamic.encoderToBinary encoder0 )
                decoder <- (TypelayerCommonDynamic.encodingStartDecoding encoding resultingBin)
                valToCheck <- (TypelayerCSchemasWorldDynamic.dynamicGetObjFile decoder)
                TypelayerCommonPrelude.lift $ Hspec.shouldBe val valToCheck
            Hspec.shouldSatisfy eitherError isRight