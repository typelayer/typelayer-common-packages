{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Dynamic where
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data DynamicGetException = 
    DynamicGetException
        { dynamicGetExceptionMessage :: TypelayerCommonTypes.Text
        , dynamicGetExceptionPath :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError DynamicGetException where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(dynamicGetExceptionMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList [("path", (dynamicGetExceptionPath x))]), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_dynamic", TypelayerCommonExceptions.exceptionMetaExceptionType="dynamic_get_exception"})

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => Decoder a where
    decoderPath :: a -> TypelayerCommonTypes.Text
    decoderPopBool :: a -> TypelayerCommonPrelude.ExecuteM (a, Bool)
    decoderPopDouble :: a -> TypelayerCommonPrelude.ExecuteM (a, Double)
    decoderPopField :: a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCommonTypes.Text)
    decoderPopHasMoreList :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopHasMoreMap :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopHasMoreStruct :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopInteger :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopKey :: a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCommonTypes.Text)
    decoderPopList :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopMap :: a -> TypelayerCommonPrelude.ExecuteM (a, Integer)
    decoderPopMaybe :: a -> TypelayerCommonPrelude.ExecuteM (a, Bool)
    decoderPopString :: a -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCommonTypes.Text)
    decoderPopStruct :: a -> TypelayerCommonTypes.Text {-defaultConstructor-} -> TypelayerCommonPrelude.ExecuteM (a, TypelayerCommonTypes.Text, Integer)


data PackedDecoder where
    PackedDecoder :: Decoder a => a -> PackedDecoder
deriving instance Show PackedDecoder
deriving instance TypelayerCommonTypes.Typeable PackedDecoder
instance Eq PackedDecoder where
    (==) (PackedDecoder a) (PackedDecoder b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance Decoder PackedDecoder where
    decoderPath (PackedDecoder x)  = decoderPath x 
    decoderPopBool (PackedDecoder x)  = do {(r1, r2) <- decoderPopBool x ; return ((PackedDecoder r1), r2)}
    decoderPopDouble (PackedDecoder x)  = do {(r1, r2) <- decoderPopDouble x ; return ((PackedDecoder r1), r2)}
    decoderPopField (PackedDecoder x)  = do {(r1, r2) <- decoderPopField x ; return ((PackedDecoder r1), r2)}
    decoderPopHasMoreList (PackedDecoder x)  = do {(r1, r2) <- decoderPopHasMoreList x ; return ((PackedDecoder r1), r2)}
    decoderPopHasMoreMap (PackedDecoder x)  = do {(r1, r2) <- decoderPopHasMoreMap x ; return ((PackedDecoder r1), r2)}
    decoderPopHasMoreStruct (PackedDecoder x)  = do {(r1, r2) <- decoderPopHasMoreStruct x ; return ((PackedDecoder r1), r2)}
    decoderPopInteger (PackedDecoder x)  = do {(r1, r2) <- decoderPopInteger x ; return ((PackedDecoder r1), r2)}
    decoderPopKey (PackedDecoder x)  = do {(r1, r2) <- decoderPopKey x ; return ((PackedDecoder r1), r2)}
    decoderPopList (PackedDecoder x)  = do {(r1, r2) <- decoderPopList x ; return ((PackedDecoder r1), r2)}
    decoderPopMap (PackedDecoder x)  = do {(r1, r2) <- decoderPopMap x ; return ((PackedDecoder r1), r2)}
    decoderPopMaybe (PackedDecoder x)  = do {(r1, r2) <- decoderPopMaybe x ; return ((PackedDecoder r1), r2)}
    decoderPopString (PackedDecoder x)  = do {(r1, r2) <- decoderPopString x ; return ((PackedDecoder r1), r2)}
    decoderPopStruct (PackedDecoder x) defaultConstructor = do {(r1, r2, r3) <- decoderPopStruct x defaultConstructor; return ((PackedDecoder r1), r2, r3)}

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => Encoder a where
    encoderPutBool :: a -> Bool {-value-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutDouble :: a -> Double {-value-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutElementEnd :: a -> Bool {-lastElement-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutField :: a -> TypelayerCommonTypes.Text {-fieldId-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutFieldEnd :: a -> Bool {-lastField-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutInteger :: a -> Integer {-value-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutKey :: a -> TypelayerCommonTypes.Text {-key-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutList :: a -> Integer {-numElements-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutMap :: a -> Integer {-numKeys-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutMaybe :: a -> Bool {-value-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutString :: a -> TypelayerCommonTypes.Text {-value-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutStruct :: a -> TypelayerCommonTypes.Text {-constructor-} -> Integer {-numFields-} -> TypelayerCommonPrelude.ExecuteM a
    encoderPutValueEnd :: a -> Bool {-lastValue-} -> TypelayerCommonPrelude.ExecuteM a
    encoderToBinary :: a -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Binary


data PackedEncoder where
    PackedEncoder :: Encoder a => a -> PackedEncoder
deriving instance Show PackedEncoder
deriving instance TypelayerCommonTypes.Typeable PackedEncoder
instance Eq PackedEncoder where
    (==) (PackedEncoder a) (PackedEncoder b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance Encoder PackedEncoder where
    encoderPutBool (PackedEncoder x) value = do {(r1) <- encoderPutBool x value; return ((PackedEncoder r1))}
    encoderPutDouble (PackedEncoder x) value = do {(r1) <- encoderPutDouble x value; return ((PackedEncoder r1))}
    encoderPutElementEnd (PackedEncoder x) lastElement = do {(r1) <- encoderPutElementEnd x lastElement; return ((PackedEncoder r1))}
    encoderPutField (PackedEncoder x) fieldId = do {(r1) <- encoderPutField x fieldId; return ((PackedEncoder r1))}
    encoderPutFieldEnd (PackedEncoder x) lastField = do {(r1) <- encoderPutFieldEnd x lastField; return ((PackedEncoder r1))}
    encoderPutInteger (PackedEncoder x) value = do {(r1) <- encoderPutInteger x value; return ((PackedEncoder r1))}
    encoderPutKey (PackedEncoder x) key = do {(r1) <- encoderPutKey x key; return ((PackedEncoder r1))}
    encoderPutList (PackedEncoder x) numElements = do {(r1) <- encoderPutList x numElements; return ((PackedEncoder r1))}
    encoderPutMap (PackedEncoder x) numKeys = do {(r1) <- encoderPutMap x numKeys; return ((PackedEncoder r1))}
    encoderPutMaybe (PackedEncoder x) value = do {(r1) <- encoderPutMaybe x value; return ((PackedEncoder r1))}
    encoderPutString (PackedEncoder x) value = do {(r1) <- encoderPutString x value; return ((PackedEncoder r1))}
    encoderPutStruct (PackedEncoder x) constructor numFields = do {(r1) <- encoderPutStruct x constructor numFields; return ((PackedEncoder r1))}
    encoderPutValueEnd (PackedEncoder x) lastValue = do {(r1) <- encoderPutValueEnd x lastValue; return ((PackedEncoder r1))}
    encoderToBinary (PackedEncoder x)  = encoderToBinary x 

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => Encoding a where
    encodingLabel :: a -> TypelayerCommonTypes.Text
    encodingMimetype :: a -> TypelayerCommonTypes.Text
    encodingStartDecoding :: a -> TypelayerCommonTypes.Binary {-binData-} -> TypelayerCommonPrelude.ExecuteM PackedDecoder
    encodingStartEncoding :: a -> TypelayerCommonPrelude.ExecuteM PackedEncoder


data PackedEncoding where
    PackedEncoding :: Encoding a => a -> PackedEncoding
deriving instance Show PackedEncoding
deriving instance TypelayerCommonTypes.Typeable PackedEncoding
instance Eq PackedEncoding where
    (==) (PackedEncoding a) (PackedEncoding b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance Encoding PackedEncoding where
    encodingLabel (PackedEncoding x)  = encodingLabel x 
    encodingMimetype (PackedEncoding x)  = encodingMimetype x 
    encodingStartDecoding (PackedEncoding x) binData = encodingStartDecoding x binData
    encodingStartEncoding (PackedEncoding x)  = encodingStartEncoding x 