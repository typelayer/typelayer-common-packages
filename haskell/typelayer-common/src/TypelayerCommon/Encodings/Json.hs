{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Encodings.Json where
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data JsonEncoding = 
    JsonEncoding
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Encoding JsonEncoding where
    encodingLabel this = "json"
    encodingMimetype this = "application/json"
    encodingStartDecoding this val = do
        return (TypelayerCommonDynamic.PackedDecoder (JsonDecoder{jsonDecoderIndex=0, jsonDecoderReader=val}))
    encodingStartEncoding this = do
        return (TypelayerCommonDynamic.PackedEncoder (JsonEncoder{jsonEncoderWriter=TypelayerCommonPrelude.writerNew}))

data JsonDecoder = 
    JsonDecoder
    { jsonDecoderIndex :: Integer
    , jsonDecoderReader :: TypelayerCommonTypes.Binary
    }
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Decoder JsonDecoder where
    decoderPath this = ((TypelayerCommonPrelude.integerToText (jsonDecoderIndex this)))
    decoderPopBool this = do
        if (((((True && (0x66 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 0)))) && (0x61 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 1)))) && (0x6c == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 2)))) && (0x73 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 3)))) && (0x65 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 4))))
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(5 + (jsonDecoderIndex this))})
            return (popDecoder0, False)
        else do
            if ((((True && (0x74 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 0)))) && (0x72 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 1)))) && (0x75 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 2)))) && (0x65 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 3))))
            then do
                let popDecoder0 = (this{jsonDecoderIndex=(4 + (jsonDecoderIndex this))})
                return (popDecoder0, True)
            else do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected bool", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopDouble this = do
        let decodeIntegerBefore ix = do
                if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) < 0x3a) && ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) >= 0x30))
                then do
                    (decodeIntegerBefore (ix + 1))
                else do
                    afterNumber <- do
                        if (0x2e == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))))
                        then do
                            let decodeIntegerAfter ix = do
                                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) < 0x3a) && ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) >= 0x30))
                                    then do
                                        (decodeIntegerAfter (ix + 1))
                                    else do
                                        return ix
                            (decodeIntegerAfter (ix + 1))
                        else do
                            return ix
                    if ((0x45 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (afterNumber + (jsonDecoderIndex this)))) || (0x65 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (afterNumber + (jsonDecoderIndex this)))))
                    then do
                        let decodeExponent ix = do
                                if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) < 0x3a) && ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) >= 0x30))
                                then do
                                    (decodeExponent (ix + 1))
                                else do
                                    return ix
                        decodeExponentVal <- do
                            if ((0x2d == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((afterNumber + 1) + (jsonDecoderIndex this)))) || (0x2b == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((afterNumber + 1) + (jsonDecoderIndex this)))))
                            then do
                                return (afterNumber + 2)
                            else do
                                return (afterNumber + 1)
                        (decodeExponent decodeExponentVal)
                    else do
                        return afterNumber
        endIndex <- do
            decodeIntegerBeforeVal <- do
                if (0x2d == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)))
                then do
                    return 1
                else do
                    return 0
            (decodeIntegerBefore decodeIntegerBeforeVal)
        let decimalValue = (TypelayerCommonPrelude.readerDecimalDouble (jsonDecoderReader this) (jsonDecoderIndex this) endIndex)
        let popDecoder0 = (this{jsonDecoderIndex=(endIndex + (jsonDecoderIndex this))})
        return (popDecoder0, decimalValue)
    decoderPopField this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x22)
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let decodeString ix = do
                    if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) /= 0x22)
                    then do
                        (decodeString (ix + 1))
                    else do
                        let strValue = (TypelayerCommonPrelude.readerSliceString (jsonDecoderReader popDecoder0) (jsonDecoderIndex popDecoder0) ix)
                        let popDecoder1 = (popDecoder0{jsonDecoderIndex=((ix + 1) + (jsonDecoderIndex popDecoder0))})
                        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder1) (jsonDecoderIndex popDecoder1)) == 0x3a)
                        then do
                            let popDecoder2 = (popDecoder1{jsonDecoderIndex=(1 + (jsonDecoderIndex popDecoder1))})
                            let consumeWhitespace ix = do
                                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder2) (ix + (jsonDecoderIndex popDecoder2))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder2) (ix + (jsonDecoderIndex popDecoder2))) == 0xa))
                                    then do
                                        (consumeWhitespace (ix + 1))
                                    else do
                                        return (popDecoder2{jsonDecoderIndex=(ix + (jsonDecoderIndex popDecoder2))})
                            popDecoder3 <- (consumeWhitespace 0)
                            return (popDecoder3, strValue)
                        else do
                            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected colon", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder1) )})
            (decodeString 0)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected string", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopHasMoreList this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x2c)
        then do
            let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popHasMore0{jsonDecoderIndex=(ix + (jsonDecoderIndex popHasMore0))})
            popHasMore1 <- (consumeWhitespace 0)
            return (popHasMore1, 1)
        else do
            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x5d)
            then do
                let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
                return (popHasMore0, -1)
            else do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected comma or ]", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopHasMoreMap this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x2c)
        then do
            let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popHasMore0{jsonDecoderIndex=(ix + (jsonDecoderIndex popHasMore0))})
            popHasMore1 <- (consumeWhitespace 0)
            return (popHasMore1, 1)
        else do
            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x7d)
            then do
                let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
                return (popHasMore0, -1)
            else do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected comma or }", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopHasMoreStruct this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x2c)
        then do
            let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popHasMore0) (ix + (jsonDecoderIndex popHasMore0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popHasMore0{jsonDecoderIndex=(ix + (jsonDecoderIndex popHasMore0))})
            popHasMore1 <- (consumeWhitespace 0)
            return (popHasMore1, 1)
        else do
            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x7d)
            then do
                let popHasMore0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
                return (popHasMore0, -1)
            else do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected comma or }", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopInteger this = do
        let decodeInteger ix = do
                if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) < 0x3a) && ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (ix + (jsonDecoderIndex this))) >= 0x30))
                then do
                    (decodeInteger (ix + 1))
                else do
                    return ix
        endIndex <- do
            decodeIntegerVal <- do
                if (0x2d == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)))
                then do
                    return 1
                else do
                    return 0
            (decodeInteger decodeIntegerVal)
        let decimalValue = (TypelayerCommonPrelude.readerDecimal (jsonDecoderReader this) (jsonDecoderIndex this) endIndex)
        let popDecoder0 = (this{jsonDecoderIndex=(endIndex + (jsonDecoderIndex this))})
        return (popDecoder0, decimalValue)
    decoderPopKey this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x22)
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let decodeString ix = do
                    if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) /= 0x22)
                    then do
                        (decodeString (ix + 1))
                    else do
                        let strValue = (TypelayerCommonPrelude.readerSliceString (jsonDecoderReader popDecoder0) (jsonDecoderIndex popDecoder0) ix)
                        let popDecoder1 = (popDecoder0{jsonDecoderIndex=((ix + 1) + (jsonDecoderIndex popDecoder0))})
                        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder1) (jsonDecoderIndex popDecoder1)) == 0x3a)
                        then do
                            let popDecoder2 = (popDecoder1{jsonDecoderIndex=(1 + (jsonDecoderIndex popDecoder1))})
                            let consumeWhitespace ix = do
                                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder2) (ix + (jsonDecoderIndex popDecoder2))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder2) (ix + (jsonDecoderIndex popDecoder2))) == 0xa))
                                    then do
                                        (consumeWhitespace (ix + 1))
                                    else do
                                        return (popDecoder2{jsonDecoderIndex=(ix + (jsonDecoderIndex popDecoder2))})
                            popDecoder3 <- (consumeWhitespace 0)
                            return (popDecoder3, strValue)
                        else do
                            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected colon", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder1) )})
            (decodeString 0)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected string", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopList this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x5b)
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popDecoder0{jsonDecoderIndex=(ix + (jsonDecoderIndex popDecoder0))})
            popDecoder1 <- (consumeWhitespace 0)
            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder1) (jsonDecoderIndex popDecoder1)) == 0x5d)
            then do
                let popDecoder2 = (popDecoder1{jsonDecoderIndex=(1 + (jsonDecoderIndex popDecoder1))})
                return (popDecoder2, -1)
            else do
                return (popDecoder1, 1)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected array", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopMap this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x7b)
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popDecoder0{jsonDecoderIndex=(ix + (jsonDecoderIndex popDecoder0))})
            popDecoder1 <- (consumeWhitespace 0)
            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder1) (jsonDecoderIndex popDecoder1)) == 0x7d)
            then do
                let popDecoder2 = (popDecoder1{jsonDecoderIndex=(1 + (jsonDecoderIndex popDecoder1))})
                return (popDecoder2, -1)
            else do
                return (popDecoder1, 1)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected map", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopMaybe this = do
        if ((((True && (0x6e == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 0)))) && (0x75 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 1)))) && (0x6c == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 2)))) && (0x6c == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) ((jsonDecoderIndex this) + 3))))
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(4 + (jsonDecoderIndex this))})
            return (popDecoder0, False)
        else do
            return (this, True)
    decoderPopString this = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x22)
        then do
            let popDecoder0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let decodeString ix = do
                    if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popDecoder0) (ix + (jsonDecoderIndex popDecoder0))) /= 0x22)
                    then do
                        (decodeString (ix + 1))
                    else do
                        let strValue = (TypelayerCommonPrelude.readerSliceString (jsonDecoderReader popDecoder0) (jsonDecoderIndex popDecoder0) ix)
                        let popDecoder1 = (popDecoder0{jsonDecoderIndex=((ix + 1) + (jsonDecoderIndex popDecoder0))})
                        return (popDecoder1, strValue)
            (decodeString 0)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected string", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})
    decoderPopStruct this defaultConstructor = do
        if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader this) (jsonDecoderIndex this)) == 0x7b)
        then do
            let popStructMutation0 = (this{jsonDecoderIndex=(1 + (jsonDecoderIndex this))})
            let consumeWhitespace ix = do
                    if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation0) (ix + (jsonDecoderIndex popStructMutation0))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation0) (ix + (jsonDecoderIndex popStructMutation0))) == 0xa))
                    then do
                        (consumeWhitespace (ix + 1))
                    else do
                        return (popStructMutation0{jsonDecoderIndex=(ix + (jsonDecoderIndex popStructMutation0))})
            popStructMutation1 <- (consumeWhitespace 0)
            if ((((True && (0x22 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation1) ((jsonDecoderIndex popStructMutation1) + 0)))) && (0x5f == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation1) ((jsonDecoderIndex popStructMutation1) + 1)))) && (0x22 == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation1) ((jsonDecoderIndex popStructMutation1) + 2)))) && (0x3a == (TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation1) ((jsonDecoderIndex popStructMutation1) + 3))))
            then do
                let popStructMutation2 = (popStructMutation1{jsonDecoderIndex=(4 + (jsonDecoderIndex popStructMutation1))})
                let consumeWhitespace ix = do
                        if (((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation2) (ix + (jsonDecoderIndex popStructMutation2))) == 0x20) || ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation2) (ix + (jsonDecoderIndex popStructMutation2))) == 0xa))
                        then do
                            (consumeWhitespace (ix + 1))
                        else do
                            return (popStructMutation2{jsonDecoderIndex=(ix + (jsonDecoderIndex popStructMutation2))})
                popStructMutation3 <- (consumeWhitespace 0)
                if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation3) (jsonDecoderIndex popStructMutation3)) == 0x22)
                then do
                    let popStructMutation4 = (popStructMutation3{jsonDecoderIndex=(1 + (jsonDecoderIndex popStructMutation3))})
                    let decodeString ix = do
                            if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation4) (ix + (jsonDecoderIndex popStructMutation4))) /= 0x22)
                            then do
                                (decodeString (ix + 1))
                            else do
                                let strValue = (TypelayerCommonPrelude.readerSliceString (jsonDecoderReader popStructMutation4) (jsonDecoderIndex popStructMutation4) ix)
                                let popStructMutation5 = (popStructMutation4{jsonDecoderIndex=((ix + 1) + (jsonDecoderIndex popStructMutation4))})
                                return (popStructMutation5, strValue, 0)
                    (decodeString 0)
                else do
                    TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected string", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popStructMutation3) )})
            else do
                if ((TypelayerCommonPrelude.readerIndex (jsonDecoderReader popStructMutation1) (jsonDecoderIndex popStructMutation1)) == 0x7d)
                then do
                    let popStructMutation2 = (popStructMutation1{jsonDecoderIndex=(1 + (jsonDecoderIndex popStructMutation1))})
                    return (popStructMutation2, defaultConstructor, -1)
                else do
                    return (popStructMutation1, defaultConstructor, 1)
        else do
            TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected object", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder this) )})

data JsonEncoder = 
    JsonEncoder
    { jsonEncoderWriter :: TypelayerCommonTypes.Builder
    }
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Encoder JsonEncoder where
    encoderPutBool this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutBinary (jsonEncoderWriter this) "\116\114\117\101")
            else do
                return (TypelayerCommonPrelude.writerPutBinary (jsonEncoderWriter this) "\102\97\108\115\101")
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutDouble this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutDecimalDouble (jsonEncoderWriter this) value)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutElementEnd this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x5d)
            else do
                return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x2c) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutField this value = do
        let strAsBytes = (TypelayerCommonPrelude.textToBinary value)
        let newWriter = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x22) strAsBytes) 0x22) 0x3a) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutFieldEnd this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x7d)
            else do
                return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x2c) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutInteger this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutDecimal (jsonEncoderWriter this) value)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutKey this value = do
        let strAsBytes = (TypelayerCommonPrelude.textToBinary value)
        let newWriter = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x22) strAsBytes) 0x22) 0x3a) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutList this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x5b)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutMap this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x7b)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutMaybe this value = do
        newWriter <- do
            if value
            then do
                return (jsonEncoderWriter this)
            else do
                return (TypelayerCommonPrelude.writerPutBinary (jsonEncoderWriter this) "\110\117\108\108")
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutString this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x22) value) 0x22)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutStruct this constructor numFields = do
        let cAsBytes = (TypelayerCommonPrelude.textToBinary constructor)
        newWriter <- do
            if (0 == numFields)
            then do
                return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x7b) "\34\95\34\58\32\34") cAsBytes) 0x22) 0x7d)
            else do
                return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x7b) "\34\95\34\58\32\34") cAsBytes) 0x22) 0x2c) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutValueEnd this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x7d)
            else do
                return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (jsonEncoderWriter this) 0x2c) 0x20)
        let withNewWriter0 = (this{jsonEncoderWriter=newWriter})
        return withNewWriter0
    encoderToBinary this = do
        return (TypelayerCommonPrelude.writerToBinary (jsonEncoderWriter this))