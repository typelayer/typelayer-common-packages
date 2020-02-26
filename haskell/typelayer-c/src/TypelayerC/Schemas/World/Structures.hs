{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Schemas.World.Structures where
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data File = 
    File
        { fileContents :: TypelayerCommonTypes.Text
        , fileFileid :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

defaultFile :: TypelayerCommonPrelude.ExecuteM File
defaultFile  = do
    let contentsVal = ""
    let fileidVal = ""
    return (File{fileContents=contentsVal, fileFileid=fileidVal})

describeFile :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeFile  = do
    let contentsFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let fileContentsFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="contents", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=contentsFieldInfo})
    let fileidFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let fileFileidFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="fileid", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=fileidFieldInfo})
    let fileConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="file", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[fileContentsFieldInfo, fileFileidFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="file", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[fileConstructorInfo]})