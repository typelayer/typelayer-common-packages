{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerCBackend.Persisted.FirstDbSchema.Structures where
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data Boom = 
    Boom
        { boomBoomId :: Integer {-Primary Key-}
        , boomCool :: Integer {-Woah super cool-}
        , boomOther :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data BoomCreate = 
    BoomCreate
        { boomCreateCool :: Integer {-Woah super cool-}
        , boomCreateOther :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

defaultBoom :: TypelayerCommonPrelude.ExecuteM Boom
defaultBoom  = do
    let boomIdVal = 0
    let coolVal = 0
    let otherVal = ""
    return (Boom{boomBoomId=boomIdVal, boomCool=coolVal, boomOther=otherVal})

describeBoom :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeBoom  = do
    let boomIdFieldInfo = (TypelayerCommonDocumentation.TlInteger{})
    let boomBoomIdFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="boom_id", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=boomIdFieldInfo})
    let coolFieldInfo = (TypelayerCommonDocumentation.TlInteger{})
    let boomCoolFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="cool", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=coolFieldInfo})
    let otherFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let boomOtherFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="other", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=otherFieldInfo})
    let boomConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="boom", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[boomBoomIdFieldInfo, boomCoolFieldInfo, boomOtherFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="boom", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[boomConstructorInfo]})

defaultBoomCreate :: TypelayerCommonPrelude.ExecuteM BoomCreate
defaultBoomCreate  = do
    let coolVal = 0
    let otherVal = ""
    return (BoomCreate{boomCreateCool=coolVal, boomCreateOther=otherVal})

describeBoomCreate :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeBoomCreate  = do
    let coolFieldInfo = (TypelayerCommonDocumentation.TlInteger{})
    let boomCreateCoolFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="cool", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=coolFieldInfo})
    let otherFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let boomCreateOtherFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="other", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=otherFieldInfo})
    let boomCreateConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="boom_create", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[boomCreateCoolFieldInfo, boomCreateOtherFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="boom_create", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[boomCreateConstructorInfo]})