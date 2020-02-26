{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Encodings.Msgpack where
import qualified TypelayerCommon.Dynamic as TypelayerCommonDynamic
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data MsgPackEncoding = 
    MsgPackEncoding
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Encoding MsgPackEncoding where
    encodingLabel this = "msgpack"
    encodingMimetype this = "application/msgpack"
    encodingStartDecoding this val = do
        return (TypelayerCommonDynamic.PackedDecoder (MsgPackDecoder{msgPackDecoderIndex=0, msgPackDecoderReader=val}))
    encodingStartEncoding this = do
        return (TypelayerCommonDynamic.PackedEncoder (MsgPackEncoder{msgPackEncoderWriter=TypelayerCommonPrelude.writerNew}))

data MsgPackDecoder = 
    MsgPackDecoder
    { msgPackDecoderIndex :: Integer
    , msgPackDecoderReader :: TypelayerCommonTypes.Binary
    }
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Decoder MsgPackDecoder where
    decoderPath this = ((TypelayerCommonPrelude.integerToText (msgPackDecoderIndex this)))
    decoderPopBool this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xc2 -> do
                return (popDecoder0, True)
            0xc3 -> do
                return (popDecoder0, False)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected bool", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopDouble this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xcb -> do
                let value = (TypelayerCommonPrelude.readerFloat64 (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(8 + (msgPackDecoderIndex popDecoder0))})
                return (popDecoder1, value)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected double", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopField this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xc6 -> do
                let fieldSize = (TypelayerCommonPrelude.bitOr (fromIntegral (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader popDecoder0) ((msgPackDecoderIndex popDecoder0) + 1)) :: Integer) (TypelayerCommonPrelude.shiftL(fromIntegral (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0)) :: Integer) 16))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(2 + (msgPackDecoderIndex popDecoder0))})
                let fieldValue = (TypelayerCommonPrelude.readerSliceString (msgPackDecoderReader popDecoder1) (msgPackDecoderIndex popDecoder1) fieldSize)
                let popDecoder2 = (popDecoder1{msgPackDecoderIndex=(fieldSize + (msgPackDecoderIndex popDecoder1))})
                return (popDecoder2, fieldValue)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected field", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopHasMoreList this = do
        return (this, 0)
    decoderPopHasMoreMap this = do
        return (this, 0)
    decoderPopHasMoreStruct this = do
        return (this, 0)
    decoderPopInteger this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xcf -> do
                let value = (TypelayerCommonPrelude.readerInt64 (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(8 + (msgPackDecoderIndex popDecoder0))})
                return (popDecoder1, value)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected integer", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopKey this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xdb -> do
                let keySize = (TypelayerCommonPrelude.bitOr (fromIntegral (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader popDecoder0) ((msgPackDecoderIndex popDecoder0) + 1)) :: Integer) (TypelayerCommonPrelude.shiftL(fromIntegral (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0)) :: Integer) 16))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(2 + (msgPackDecoderIndex popDecoder0))})
                let keyValue = (TypelayerCommonPrelude.readerSliceString (msgPackDecoderReader popDecoder1) (msgPackDecoderIndex popDecoder1) keySize)
                let popDecoder2 = (popDecoder1{msgPackDecoderIndex=(keySize + (msgPackDecoderIndex popDecoder1))})
                return (popDecoder2, keyValue)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected key", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopList this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xdd -> do
                let value = (TypelayerCommonPrelude.readerUInt32 (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popDecoder0))})
                return (popDecoder1, value)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected list", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopMap this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xdf -> do
                let value = (TypelayerCommonPrelude.readerUInt32 (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popDecoder0))})
                return (popDecoder1, value)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected map", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopMaybe this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xc0 -> do
                return (popDecoder0, False)
            0x91 -> do
                return (popDecoder0, True)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected maybe", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopString this = do
        let headByte = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popDecoder0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case headByte of
            0xdb -> do
                let strSize = (TypelayerCommonPrelude.readerUInt32 (msgPackDecoderReader popDecoder0) (msgPackDecoderIndex popDecoder0))
                let popDecoder1 = (popDecoder0{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popDecoder0))})
                let strValue = (TypelayerCommonPrelude.readerSliceString (msgPackDecoderReader popDecoder1) (msgPackDecoderIndex popDecoder1) strSize)
                let popDecoder2 = (popDecoder1{msgPackDecoderIndex=(strSize + (msgPackDecoderIndex popDecoder1))})
                return (popDecoder2, strValue)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected string", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popDecoder0) )})
    decoderPopStruct this defaultConstructor = do
        let value = (TypelayerCommonPrelude.readerIndex (msgPackDecoderReader this) (msgPackDecoderIndex this))
        let popStructMutation0 = (this{msgPackDecoderIndex=(1 + (msgPackDecoderIndex this))})
        case value of
            0xde -> do
                let numFields = (TypelayerCommonPrelude.readerUInt32 (msgPackDecoderReader popStructMutation0) (msgPackDecoderIndex popStructMutation0))
                let popStructMutation1 = (popStructMutation0{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popStructMutation0))})
                if (0 < numFields)
                then do
                    if ((TypelayerCommonPrelude.readerIndex (msgPackDecoderReader popStructMutation1) (msgPackDecoderIndex popStructMutation1)) == 0xc4)
                    then do
                        let popStructMutation2 = (popStructMutation1{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popStructMutation1))})
                        let cSize = (TypelayerCommonPrelude.readerUInt32 (msgPackDecoderReader popStructMutation2) (msgPackDecoderIndex popStructMutation2))
                        let popStructMutation3 = (popStructMutation2{msgPackDecoderIndex=(4 + (msgPackDecoderIndex popStructMutation2))})
                        let cName = (TypelayerCommonPrelude.readerSliceString (msgPackDecoderReader popStructMutation3) (msgPackDecoderIndex popStructMutation3) cSize)
                        let popStructMutation4 = (popStructMutation3{msgPackDecoderIndex=(cSize + (msgPackDecoderIndex popStructMutation3))})
                        return (popStructMutation4, cName, (numFields - 1))
                    else do
                        return (popStructMutation1, defaultConstructor, numFields)
                else do
                    return (popStructMutation1, defaultConstructor, numFields)
            _ -> do
                TypelayerCommonPrelude.throwE (TypelayerCommonDynamic.DynamicGetException{TypelayerCommonDynamic.dynamicGetExceptionMessage="Expected struct", TypelayerCommonDynamic.dynamicGetExceptionPath=(TypelayerCommonDynamic.decoderPath (TypelayerCommonDynamic.PackedDecoder popStructMutation0) )})

data MsgPackEncoder = 
    MsgPackEncoder
    { msgPackEncoderWriter :: TypelayerCommonTypes.Builder
    }
    deriving (Show, Eq)


instance TypelayerCommonDynamic.Encoder MsgPackEncoder where
    encoderPutBool this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xc2)
            else do
                return (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xc3)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutDouble this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutFloat64 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xcb) value)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutElementEnd this value = do
        let newWriter = (msgPackEncoderWriter this)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutField this value = do
        let strAsBytes = (TypelayerCommonPrelude.textToBinary value)
        let newWriter = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutUInt16 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xc6) (TypelayerCommonPrelude.binaryLength strAsBytes)) strAsBytes)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutFieldEnd this value = do
        let newWriter = (msgPackEncoderWriter this)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutInteger this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutInt64 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xcf) value)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutKey this value = do
        let strAsBytes = (TypelayerCommonPrelude.textToBinary value)
        let newWriter = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutUInt16 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xdb) (TypelayerCommonPrelude.binaryLength strAsBytes)) strAsBytes)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutList this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutUInt32 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xdd) value)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutMap this value = do
        let newWriter = (TypelayerCommonPrelude.writerPutUInt32 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xdf) value)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutMaybe this value = do
        newWriter <- do
            if value
            then do
                return (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0x91)
            else do
                return (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xc0)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutString this value = do
        let strAsBytes = (TypelayerCommonPrelude.textToBinary value)
        let newWriter = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutUInt32 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xdb) (TypelayerCommonPrelude.binaryLength strAsBytes)) strAsBytes)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutStruct this constructor numFields = do
        let cAsBytes = (TypelayerCommonPrelude.textToBinary constructor)
        let newWriter = (TypelayerCommonPrelude.writerPutBinary (TypelayerCommonPrelude.writerPutUInt32 (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutUInt32 (TypelayerCommonPrelude.writerPutChar (msgPackEncoderWriter this) 0xde) (numFields + 1)) 0xc4) 0x1) "_") 0xdb) (TypelayerCommonPrelude.binaryLength cAsBytes)) cAsBytes)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderPutValueEnd this value = do
        let newWriter = (msgPackEncoderWriter this)
        let withNewWriter0 = (this{msgPackEncoderWriter=newWriter})
        return withNewWriter0
    encoderToBinary this = do
        return (TypelayerCommonPrelude.writerToBinary (msgPackEncoderWriter this))