{-# LANGUAGE GADTs, OverloadedStrings, StandaloneDeriving, DeriveAnyClass, GeneralisedNewtypeDeriving #-}
module TypelayerC.Services.Compiler.Structures where
import qualified TypelayerC.Schemas.Definitions.Structures as TypelayerCSchemasDefinitionsStructures
import qualified TypelayerC.Schemas.World.Structures as TypelayerCSchemasWorldStructures
import qualified TypelayerCommon.Documentation as TypelayerCommonDocumentation
import qualified TypelayerCommon.Prelude as TypelayerCommonPrelude
import qualified TypelayerCommon.Types as TypelayerCommonTypes


data NewPackageInput = 
    NewPackageInput
        { newPackageInputName :: TypelayerCommonTypes.Text
        }
    deriving (Show, Eq)

data NewPackageOutput = 
    NewPackageOutput
        { newPackageOutputPackage :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

data PreviewInput = 
    PreviewInput
        { previewInputLanguage :: TypelayerCSchemasDefinitionsStructures.Language
        , previewInputPackage :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

data PreviewOutput = 
    PreviewOutput
        { previewOutputFiles :: [TypelayerCSchemasWorldStructures.File]
        }
    deriving (Show, Eq)

data PreviewChangesInput = 
    PreviewChangesInput
        { previewChangesInputChanges :: [TypelayerCSchemasDefinitionsStructures.Change]
        , previewChangesInputPackage :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

data PreviewChangesOutput = 
    PreviewChangesOutput
        { previewChangesOutputNewPackage :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

data PreviewDiffInput = 
    PreviewDiffInput
        { previewDiffInputOtherPackage :: TypelayerCSchemasDefinitionsStructures.Package
        , previewDiffInputPackage :: TypelayerCSchemasDefinitionsStructures.Package
        }
    deriving (Show, Eq)

data PreviewDiffOutput = 
    PreviewDiffOutput
        { previewDiffOutputChanges :: [TypelayerCSchemasDefinitionsStructures.Change]
        }
    deriving (Show, Eq)

defaultNewPackageInput :: TypelayerCommonPrelude.ExecuteM NewPackageInput
defaultNewPackageInput  = do
    let nameVal = ""
    return (NewPackageInput{newPackageInputName=nameVal})

describeNewPackageInput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeNewPackageInput  = do
    let nameFieldInfo = (TypelayerCommonDocumentation.TlText{})
    let newPackageInputNameFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="name", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=nameFieldInfo})
    let newPackageInputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="new_package_input", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[newPackageInputNameFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="new_package_input", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[newPackageInputConstructorInfo]})

defaultNewPackageOutput :: TypelayerCommonPrelude.ExecuteM NewPackageOutput
defaultNewPackageOutput  = do
    packageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    return (NewPackageOutput{newPackageOutputPackage=packageVal})

describeNewPackageOutput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describeNewPackageOutput  = do
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let newPackageOutputPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let newPackageOutputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="new_package_output", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[newPackageOutputPackageFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="new_package_output", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[newPackageOutputConstructorInfo]})

defaultPreviewInput :: TypelayerCommonPrelude.ExecuteM PreviewInput
defaultPreviewInput  = do
    languageVal <- (TypelayerCSchemasDefinitionsStructures.defaultLanguage)
    packageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    return (PreviewInput{previewInputLanguage=languageVal, previewInputPackage=packageVal})

describePreviewInput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewInput  = do
    let languageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="language"})
    let previewInputLanguageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="language", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=languageFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let previewInputPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewInputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_input", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewInputLanguageFieldInfo, previewInputPackageFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_input", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewInputConstructorInfo]})

defaultPreviewOutput :: TypelayerCommonPrelude.ExecuteM PreviewOutput
defaultPreviewOutput  = do
    let filesVal = []
    return (PreviewOutput{previewOutputFiles=filesVal})

describePreviewOutput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewOutput  = do
    let filesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="file"})
    let filesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=filesInnerFieldInfo})
    let previewOutputFilesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="files", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=filesFieldInfo})
    let previewOutputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_output", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewOutputFilesFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_output", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewOutputConstructorInfo]})

defaultPreviewChangesInput :: TypelayerCommonPrelude.ExecuteM PreviewChangesInput
defaultPreviewChangesInput  = do
    let changesVal = []
    packageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    return (PreviewChangesInput{previewChangesInputChanges=changesVal, previewChangesInputPackage=packageVal})

describePreviewChangesInput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewChangesInput  = do
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let previewChangesInputChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let previewChangesInputPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewChangesInputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_changes_input", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewChangesInputChangesFieldInfo, previewChangesInputPackageFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_changes_input", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewChangesInputConstructorInfo]})

defaultPreviewChangesOutput :: TypelayerCommonPrelude.ExecuteM PreviewChangesOutput
defaultPreviewChangesOutput  = do
    newPackageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    return (PreviewChangesOutput{previewChangesOutputNewPackage=newPackageVal})

describePreviewChangesOutput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewChangesOutput  = do
    let newPackageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let previewChangesOutputNewPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="new_package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=newPackageFieldInfo})
    let previewChangesOutputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_changes_output", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewChangesOutputNewPackageFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_changes_output", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewChangesOutputConstructorInfo]})

defaultPreviewDiffInput :: TypelayerCommonPrelude.ExecuteM PreviewDiffInput
defaultPreviewDiffInput  = do
    otherPackageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    packageVal <- (TypelayerCSchemasDefinitionsStructures.defaultPackage)
    return (PreviewDiffInput{previewDiffInputOtherPackage=otherPackageVal, previewDiffInputPackage=packageVal})

describePreviewDiffInput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewDiffInput  = do
    let otherPackageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let previewDiffInputOtherPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="other_package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=otherPackageFieldInfo})
    let packageFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="package"})
    let previewDiffInputPackageFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="package", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=packageFieldInfo})
    let previewDiffInputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_diff_input", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewDiffInputOtherPackageFieldInfo, previewDiffInputPackageFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_diff_input", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewDiffInputConstructorInfo]})

defaultPreviewDiffOutput :: TypelayerCommonPrelude.ExecuteM PreviewDiffOutput
defaultPreviewDiffOutput  = do
    let changesVal = []
    return (PreviewDiffOutput{previewDiffOutputChanges=changesVal})

describePreviewDiffOutput :: TypelayerCommonPrelude.ExecuteM TypelayerCommonDocumentation.StructureInfo
describePreviewDiffOutput  = do
    let changesInnerFieldInfo = (TypelayerCommonDocumentation.TlStructure{TypelayerCommonDocumentation.tlStructurePackage="typelayer_c", TypelayerCommonDocumentation.tlStructureSchema="structures", TypelayerCommonDocumentation.tlStructureStructureId="change"})
    let changesFieldInfo = (TypelayerCommonDocumentation.TlList{TypelayerCommonDocumentation.tlListListInner=changesInnerFieldInfo})
    let previewDiffOutputChangesFieldInfo = (TypelayerCommonDocumentation.FieldDescription{TypelayerCommonDocumentation.fieldDescriptionName="changes", TypelayerCommonDocumentation.fieldDescriptionDescription=Nothing, TypelayerCommonDocumentation.fieldDescriptionTypeInfo=changesFieldInfo})
    let previewDiffOutputConstructorInfo = (TypelayerCommonDocumentation.ConstructorInfo{TypelayerCommonDocumentation.constructorInfoName="preview_diff_output", TypelayerCommonDocumentation.constructorInfoDescription=Nothing, TypelayerCommonDocumentation.constructorInfoFields=[previewDiffOutputChangesFieldInfo]})
    return (TypelayerCommonDocumentation.StructureInfo{TypelayerCommonDocumentation.structureInfoStructureId="preview_diff_output", TypelayerCommonDocumentation.structureInfoStructureType=(TypelayerCommonDocumentation.StructureEnum{}), TypelayerCommonDocumentation.structureInfoDescription=Nothing, TypelayerCommonDocumentation.structureInfoConstructors=[previewDiffOutputConstructorInfo]})