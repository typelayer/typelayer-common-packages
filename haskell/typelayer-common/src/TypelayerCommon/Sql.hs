{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCommon.Sql where
import qualified TypelayerCommon.Exceptions as TypelayerCommonExceptions
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data RelationNotLoaded = 
    RelationNotLoaded
        { relationNotLoadedMessage :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)


instance TypelayerCommonPrelude.IsTypelayerError RelationNotLoaded where
    toErrorMeta x = (TypelayerCommonExceptions.ExceptionMeta{TypelayerCommonExceptions.exceptionMetaExceptionMessage=(relationNotLoadedMessage x), TypelayerCommonExceptions.exceptionMetaExceptionFields=(TypelayerCommonPrelude.mapFromList []), TypelayerCommonExceptions.exceptionMetaExceptionModule="typelayer_common_sql", TypelayerCommonExceptions.exceptionMetaExceptionType="relation_not_loaded"})

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => QText a where
    qTextEvaluate :: a -> TypelayerCommonTypes.Builder {-writer-} -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder


data PackedQText where
    PackedQText :: QText a => a -> PackedQText
deriving instance Show PackedQText
deriving instance TypelayerCommonTypes.Typeable PackedQText
instance Eq PackedQText where
    (==) (PackedQText a) (PackedQText b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance QText PackedQText where
    qTextEvaluate (PackedQText x) writer = qTextEvaluate x writer

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => QInt a where
    qIntEvaluate :: a -> TypelayerCommonTypes.Builder {-writer-} -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder


data PackedQInt where
    PackedQInt :: QInt a => a -> PackedQInt
deriving instance Show PackedQInt
deriving instance TypelayerCommonTypes.Typeable PackedQInt
instance Eq PackedQInt where
    (==) (PackedQInt a) (PackedQInt b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance QInt PackedQInt where
    qIntEvaluate (PackedQInt x) writer = qIntEvaluate x writer

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => QDouble a where
    qDoubleEvaluate :: a -> TypelayerCommonTypes.Builder {-writer-} -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder


data PackedQDouble where
    PackedQDouble :: QDouble a => a -> PackedQDouble
deriving instance Show PackedQDouble
deriving instance TypelayerCommonTypes.Typeable PackedQDouble
instance Eq PackedQDouble where
    (==) (PackedQDouble a) (PackedQDouble b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance QDouble PackedQDouble where
    qDoubleEvaluate (PackedQDouble x) writer = qDoubleEvaluate x writer

class (Show a, Eq a, TypelayerCommonTypes.Typeable a) => QBool a where
    qBoolEvaluate :: a -> TypelayerCommonTypes.Builder {-writer-} -> TypelayerCommonPrelude.ExecuteM TypelayerCommonTypes.Builder


data PackedQBool where
    PackedQBool :: QBool a => a -> PackedQBool
deriving instance Show PackedQBool
deriving instance TypelayerCommonTypes.Typeable PackedQBool
instance Eq PackedQBool where
    (==) (PackedQBool a) (PackedQBool b) = 
      case (TypelayerCommonPrelude.cast a) of
        Nothing -> False
        Just a' -> a' == b

instance QBool PackedQBool where
    qBoolEvaluate (PackedQBool x) writer = qBoolEvaluate x writer

data QBindText = 
    QBindText
    { qBindTextValue :: TypelayerCommonTypes.Text
    }
    deriving (Show, Eq)


instance QText QBindText where
    qTextEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writer 0x27) (qBindTextValue this)) 0x27)

data QBindInt = 
    QBindInt
    { qBindIntValue :: Integer
    }
    deriving (Show, Eq)


instance QInt QBindInt where
    qIntEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutDecimal writer (qBindIntValue this))

data QBindDouble = 
    QBindDouble
    { qBindDoubleValue :: Double
    }
    deriving (Show, Eq)


instance QDouble QBindDouble where
    qDoubleEvaluate this writer = do
        return (TypelayerCommonPrelude.writerPutDecimalDouble writer (qBindDoubleValue this))

data QBindBool = 
    QBindBool
    { qBindBoolValue :: Bool
    }
    deriving (Show, Eq)


instance QBool QBindBool where
    qBoolEvaluate this writer = do
        if (qBindBoolValue this)
        then do
            return (TypelayerCommonPrelude.writerPutBinary writer "\84\82\85\69")
        else do
            return (TypelayerCommonPrelude.writerPutBinary writer "\70\65\76\83\69")

data And = 
    And
    { andLeft :: PackedQBool
    , andRight :: PackedQBool
    }
    deriving (Show, Eq)


instance QBool And where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qBoolEvaluate (andLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "and") 0x20)
        writerAfterRight <- (qBoolEvaluate (andRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data Or = 
    Or
    { orLeft :: PackedQBool
    , orRight :: PackedQBool
    }
    deriving (Show, Eq)


instance QBool Or where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qBoolEvaluate (orLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "OR") 0x20)
        writerAfterRight <- (qBoolEvaluate (orRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data BoolIsNot = 
    BoolIsNot
    { boolIsNotLeft :: PackedQBool
    , boolIsNotRight :: PackedQBool
    }
    deriving (Show, Eq)


instance QBool BoolIsNot where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qBoolEvaluate (boolIsNotLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<>") 0x20)
        writerAfterRight <- (qBoolEvaluate (boolIsNotRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data BoolIsEq = 
    BoolIsEq
    { boolIsEqLeft :: PackedQBool
    , boolIsEqRight :: PackedQBool
    }
    deriving (Show, Eq)


instance QBool BoolIsEq where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qBoolEvaluate (boolIsEqLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "=") 0x20)
        writerAfterRight <- (qBoolEvaluate (boolIsEqRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsNot = 
    IsNot
    { isNotLeft :: PackedQInt
    , isNotRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsNot where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isNotLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<>") 0x20)
        writerAfterRight <- (qIntEvaluate (isNotRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsEq = 
    IsEq
    { isEqLeft :: PackedQInt
    , isEqRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsEq where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isEqLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "=") 0x20)
        writerAfterRight <- (qIntEvaluate (isEqRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsGt = 
    IsGt
    { isGtLeft :: PackedQInt
    , isGtRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsGt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isGtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">") 0x20)
        writerAfterRight <- (qIntEvaluate (isGtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsGte = 
    IsGte
    { isGteLeft :: PackedQInt
    , isGteRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsGte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isGteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">=") 0x20)
        writerAfterRight <- (qIntEvaluate (isGteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsLt = 
    IsLt
    { isLtLeft :: PackedQInt
    , isLtRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsLt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isLtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<") 0x20)
        writerAfterRight <- (qIntEvaluate (isLtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IsLte = 
    IsLte
    { isLteLeft :: PackedQInt
    , isLteRight :: PackedQInt
    }
    deriving (Show, Eq)


instance QBool IsLte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (isLteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<=") 0x20)
        writerAfterRight <- (qIntEvaluate (isLteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsNot = 
    DoubleIsNot
    { doubleIsNotLeft :: PackedQDouble
    , doubleIsNotRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsNot where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsNotLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<>") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsNotRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsEq = 
    DoubleIsEq
    { doubleIsEqLeft :: PackedQDouble
    , doubleIsEqRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsEq where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsEqLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "=") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsEqRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsGt = 
    DoubleIsGt
    { doubleIsGtLeft :: PackedQDouble
    , doubleIsGtRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsGt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsGtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsGtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsGte = 
    DoubleIsGte
    { doubleIsGteLeft :: PackedQDouble
    , doubleIsGteRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsGte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsGteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">=") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsGteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsLt = 
    DoubleIsLt
    { doubleIsLtLeft :: PackedQDouble
    , doubleIsLtRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsLt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsLtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsLtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIsLte = 
    DoubleIsLte
    { doubleIsLteLeft :: PackedQDouble
    , doubleIsLteRight :: PackedQDouble
    }
    deriving (Show, Eq)


instance QBool DoubleIsLte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleIsLteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<=") 0x20)
        writerAfterRight <- (qDoubleEvaluate (doubleIsLteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsNot = 
    TextIsNot
    { textIsNotLeft :: PackedQText
    , textIsNotRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsNot where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsNotLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<>") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsNotRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsEq = 
    TextIsEq
    { textIsEqLeft :: PackedQText
    , textIsEqRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsEq where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsEqLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "=") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsEqRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsGt = 
    TextIsGt
    { textIsGtLeft :: PackedQText
    , textIsGtRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsGt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsGtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsGtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsGte = 
    TextIsGte
    { textIsGteLeft :: PackedQText
    , textIsGteRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsGte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsGteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) ">=") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsGteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsLt = 
    TextIsLt
    { textIsLtLeft :: PackedQText
    , textIsLtRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsLt where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsLtLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsLtRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIsLte = 
    TextIsLte
    { textIsLteLeft :: PackedQText
    , textIsLteRight :: PackedQText
    }
    deriving (Show, Eq)


instance QBool TextIsLte where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textIsLteLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "<=") 0x20)
        writerAfterRight <- (qTextEvaluate (textIsLteRight this) writerAfterMiddle)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IntIn = 
    IntIn
    { intInLeft :: PackedQInt
    , intInRight :: [PackedQInt]
    }
    deriving (Show, Eq)


instance QBool IntIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (intInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (intInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qIntEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (intInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data IntNotIn = 
    IntNotIn
    { intNotInLeft :: PackedQInt
    , intNotInRight :: [PackedQInt]
    }
    deriving (Show, Eq)


instance QBool IntNotIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qIntEvaluate (intNotInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "NOT IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (intNotInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qIntEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (intNotInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextIn = 
    TextIn
    { textInLeft :: PackedQText
    , textInRight :: [PackedQText]
    }
    deriving (Show, Eq)


instance QBool TextIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (textInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qTextEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (textInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data TextNotIn = 
    TextNotIn
    { textNotInLeft :: PackedQText
    , textNotInRight :: [PackedQText]
    }
    deriving (Show, Eq)


instance QBool TextNotIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qTextEvaluate (textNotInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "NOT IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (textNotInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qTextEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (textNotInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleIn = 
    DoubleIn
    { doubleInLeft :: PackedQDouble
    , doubleInRight :: [PackedQDouble]
    }
    deriving (Show, Eq)


instance QBool DoubleIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (doubleInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qDoubleEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (doubleInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data DoubleNotIn = 
    DoubleNotIn
    { doubleNotInLeft :: PackedQDouble
    , doubleNotInRight :: [PackedQDouble]
    }
    deriving (Show, Eq)


instance QBool DoubleNotIn where
    qBoolEvaluate this writer = do
        let writerAfterLp = (TypelayerCommonPrelude.writerPutChar writer 0x28)
        writerAfterLeft <- (qDoubleEvaluate (doubleNotInLeft this) writerAfterLp)
        let writerAfterMiddle = (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutText (TypelayerCommonPrelude.writerPutChar writerAfterLeft 0x20) "NOT IN") 0x20) 0x28)
        writerAfterRight <- do
            TypelayerCommonPrelude.listReduceM (doubleNotInRight this) writerAfterMiddle $ \reduceInIndex reduceInElem reduceInAcc -> do
                afterElem <- (qDoubleEvaluate reduceInElem reduceInAcc)
                if ((reduceInIndex + 1) == (fromIntegral $ length (doubleNotInRight this)))
                then do
                    return (TypelayerCommonPrelude.writerPutChar afterElem 0x29)
                else do
                    return (TypelayerCommonPrelude.writerPutChar (TypelayerCommonPrelude.writerPutChar afterElem 0x2c) 0x20)
        return (TypelayerCommonPrelude.writerPutChar writerAfterRight 0x29)

data JoinType
    = Inner
    | LeftInner
    | LeftOuter
    deriving (Show, Eq)

data JoinInstance = 
    JoinInstance
        { joinInstanceAlias :: TypelayerCommonTypes.Text
        , joinInstanceFromTable :: TypelayerCommonTypes.Text
        , joinInstanceJoin :: JoinType
        , joinInstanceToTable :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

qText :: TypelayerCommonTypes.Text -> PackedQText
qText value = 
    (PackedQText (QBindText{qBindTextValue=value}))

qInt :: Integer -> PackedQInt
qInt value = 
    (PackedQInt (QBindInt{qBindIntValue=value}))

qDouble :: Double -> PackedQDouble
qDouble value = 
    (PackedQDouble (QBindDouble{qBindDoubleValue=value}))

qBool :: Bool -> PackedQBool
qBool value = 
    (PackedQBool (QBindBool{qBindBoolValue=value}))

qIntIn :: PackedQInt -> [PackedQInt] -> PackedQBool
qIntIn left right = 
    (PackedQBool (IntIn{intInLeft=left, intInRight=right}))

qIntNotIn :: PackedQInt -> [PackedQInt] -> PackedQBool
qIntNotIn left right = 
    (PackedQBool (IntNotIn{intNotInLeft=left, intNotInRight=right}))

qTextIn :: PackedQText -> [PackedQText] -> PackedQBool
qTextIn left right = 
    (PackedQBool (TextIn{textInLeft=left, textInRight=right}))

qTextNotIn :: PackedQText -> [PackedQText] -> PackedQBool
qTextNotIn left right = 
    (PackedQBool (TextNotIn{textNotInLeft=left, textNotInRight=right}))

qDoubleIn :: PackedQDouble -> [PackedQDouble] -> PackedQBool
qDoubleIn left right = 
    (PackedQBool (DoubleIn{doubleInLeft=left, doubleInRight=right}))

qDoubleNotIn :: PackedQDouble -> [PackedQDouble] -> PackedQBool
qDoubleNotIn left right = 
    (PackedQBool (DoubleNotIn{doubleNotInLeft=left, doubleNotInRight=right}))

qAnd :: PackedQBool -> PackedQBool -> PackedQBool
qAnd left right = 
    (PackedQBool (And{andLeft=left, andRight=right}))

qOr :: PackedQBool -> PackedQBool -> PackedQBool
qOr left right = 
    (PackedQBool (Or{orLeft=left, orRight=right}))

qBoolIsNot :: PackedQBool -> PackedQBool -> PackedQBool
qBoolIsNot left right = 
    (PackedQBool (BoolIsNot{boolIsNotLeft=left, boolIsNotRight=right}))

qBoolIsEq :: PackedQBool -> PackedQBool -> PackedQBool
qBoolIsEq left right = 
    (PackedQBool (BoolIsEq{boolIsEqLeft=left, boolIsEqRight=right}))

qIsNot :: PackedQInt -> PackedQInt -> PackedQBool
qIsNot left right = 
    (PackedQBool (IsNot{isNotLeft=left, isNotRight=right}))

qIsEq :: PackedQInt -> PackedQInt -> PackedQBool
qIsEq left right = 
    (PackedQBool (IsEq{isEqLeft=left, isEqRight=right}))

qIsGt :: PackedQInt -> PackedQInt -> PackedQBool
qIsGt left right = 
    (PackedQBool (IsGt{isGtLeft=left, isGtRight=right}))

qIsGte :: PackedQInt -> PackedQInt -> PackedQBool
qIsGte left right = 
    (PackedQBool (IsGte{isGteLeft=left, isGteRight=right}))

qIsLt :: PackedQInt -> PackedQInt -> PackedQBool
qIsLt left right = 
    (PackedQBool (IsLt{isLtLeft=left, isLtRight=right}))

qIsLte :: PackedQInt -> PackedQInt -> PackedQBool
qIsLte left right = 
    (PackedQBool (IsLte{isLteLeft=left, isLteRight=right}))

qDoubleIsNot :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsNot left right = 
    (PackedQBool (DoubleIsNot{doubleIsNotLeft=left, doubleIsNotRight=right}))

qDoubleIsEq :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsEq left right = 
    (PackedQBool (DoubleIsEq{doubleIsEqLeft=left, doubleIsEqRight=right}))

qDoubleIsGt :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsGt left right = 
    (PackedQBool (DoubleIsGt{doubleIsGtLeft=left, doubleIsGtRight=right}))

qDoubleIsGte :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsGte left right = 
    (PackedQBool (DoubleIsGte{doubleIsGteLeft=left, doubleIsGteRight=right}))

qDoubleIsLt :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsLt left right = 
    (PackedQBool (DoubleIsLt{doubleIsLtLeft=left, doubleIsLtRight=right}))

qDoubleIsLte :: PackedQDouble -> PackedQDouble -> PackedQBool
qDoubleIsLte left right = 
    (PackedQBool (DoubleIsLte{doubleIsLteLeft=left, doubleIsLteRight=right}))

qTextIsNot :: PackedQText -> PackedQText -> PackedQBool
qTextIsNot left right = 
    (PackedQBool (TextIsNot{textIsNotLeft=left, textIsNotRight=right}))

qTextIsEq :: PackedQText -> PackedQText -> PackedQBool
qTextIsEq left right = 
    (PackedQBool (TextIsEq{textIsEqLeft=left, textIsEqRight=right}))

qTextIsGt :: PackedQText -> PackedQText -> PackedQBool
qTextIsGt left right = 
    (PackedQBool (TextIsGt{textIsGtLeft=left, textIsGtRight=right}))

qTextIsGte :: PackedQText -> PackedQText -> PackedQBool
qTextIsGte left right = 
    (PackedQBool (TextIsGte{textIsGteLeft=left, textIsGteRight=right}))

qTextIsLt :: PackedQText -> PackedQText -> PackedQBool
qTextIsLt left right = 
    (PackedQBool (TextIsLt{textIsLtLeft=left, textIsLtRight=right}))

qTextIsLte :: PackedQText -> PackedQText -> PackedQBool
qTextIsLte left right = 
    (PackedQBool (TextIsLte{textIsLteLeft=left, textIsLteRight=right}))