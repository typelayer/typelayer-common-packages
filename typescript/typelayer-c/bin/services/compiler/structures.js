"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.compiler.structures
const typelayerCSchemasDefinitionsStructures = __importStar(require("../../schemas/definitions/structures"));
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class NewPackageInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.NewPackageInput = NewPackageInput;
class NewPackageOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.NewPackageOutput = NewPackageOutput;
class PreviewInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewInput = PreviewInput;
class PreviewOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewOutput = PreviewOutput;
class PreviewChangesInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewChangesInput = PreviewChangesInput;
class PreviewChangesOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewChangesOutput = PreviewChangesOutput;
class PreviewDiffInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewDiffInput = PreviewDiffInput;
class PreviewDiffOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PreviewDiffOutput = PreviewDiffOutput;
function defaultNewPackageInput() {
    let nameVal;
    nameVal = "";
    return new NewPackageInput({ name: nameVal });
}
exports.defaultNewPackageInput = defaultNewPackageInput;
function describeNewPackageInput() {
    let nameFieldInfo;
    let newPackageInputConstructorInfo;
    let newPackageInputNameFieldInfo;
    nameFieldInfo = new typelayerCommonDocumentation.TlText({});
    newPackageInputNameFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "name", description: null, typeInfo: nameFieldInfo });
    newPackageInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "new_package_input",
        description: null,
        fields: [newPackageInputNameFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "new_package_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [newPackageInputConstructorInfo]
    });
}
exports.describeNewPackageInput = describeNewPackageInput;
function defaultNewPackageOutput() {
    let packageVal;
    packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    return new NewPackageOutput({ package: packageVal });
}
exports.defaultNewPackageOutput = defaultNewPackageOutput;
function describeNewPackageOutput() {
    let newPackageOutputConstructorInfo;
    let newPackageOutputPackageFieldInfo;
    let packageFieldInfo;
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    newPackageOutputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    newPackageOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "new_package_output",
        description: null,
        fields: [newPackageOutputPackageFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "new_package_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [newPackageOutputConstructorInfo]
    });
}
exports.describeNewPackageOutput = describeNewPackageOutput;
function defaultPreviewInput() {
    let languageVal;
    let packageVal;
    languageVal = typelayerCSchemasDefinitionsStructures.defaultLanguage();
    packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    return new PreviewInput({ language: languageVal, package: packageVal });
}
exports.defaultPreviewInput = defaultPreviewInput;
function describePreviewInput() {
    let languageFieldInfo;
    let packageFieldInfo;
    let previewInputConstructorInfo;
    let previewInputLanguageFieldInfo;
    let previewInputPackageFieldInfo;
    languageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "language"
    });
    previewInputLanguageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "language", description: null, typeInfo: languageFieldInfo });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    previewInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    previewInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_input",
        description: null,
        fields: [previewInputLanguageFieldInfo, previewInputPackageFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewInputConstructorInfo]
    });
}
exports.describePreviewInput = describePreviewInput;
function defaultPreviewOutput() {
    let filesVal;
    filesVal = [];
    return new PreviewOutput({ files: filesVal });
}
exports.defaultPreviewOutput = defaultPreviewOutput;
function describePreviewOutput() {
    let filesFieldInfo;
    let filesInnerFieldInfo;
    let previewOutputConstructorInfo;
    let previewOutputFilesFieldInfo;
    filesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "file"
    });
    filesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: filesInnerFieldInfo
    });
    previewOutputFilesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "files", description: null, typeInfo: filesFieldInfo });
    previewOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_output",
        description: null,
        fields: [previewOutputFilesFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewOutputConstructorInfo]
    });
}
exports.describePreviewOutput = describePreviewOutput;
function defaultPreviewChangesInput() {
    let changesVal;
    let packageVal;
    changesVal = [];
    packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    return new PreviewChangesInput({ changes: changesVal, package: packageVal });
}
exports.defaultPreviewChangesInput = defaultPreviewChangesInput;
function describePreviewChangesInput() {
    let changesFieldInfo;
    let changesInnerFieldInfo;
    let packageFieldInfo;
    let previewChangesInputChangesFieldInfo;
    let previewChangesInputConstructorInfo;
    let previewChangesInputPackageFieldInfo;
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    previewChangesInputChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "changes", description: null, typeInfo: changesFieldInfo });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    previewChangesInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    previewChangesInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_changes_input",
        description: null,
        fields: [
            previewChangesInputChangesFieldInfo,
            previewChangesInputPackageFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_changes_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewChangesInputConstructorInfo]
    });
}
exports.describePreviewChangesInput = describePreviewChangesInput;
function defaultPreviewChangesOutput() {
    let newPackageVal;
    newPackageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    return new PreviewChangesOutput({ newPackage: newPackageVal });
}
exports.defaultPreviewChangesOutput = defaultPreviewChangesOutput;
function describePreviewChangesOutput() {
    let newPackageFieldInfo;
    let previewChangesOutputConstructorInfo;
    let previewChangesOutputNewPackageFieldInfo;
    newPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    previewChangesOutputNewPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "new_package", description: null, typeInfo: newPackageFieldInfo });
    previewChangesOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_changes_output",
        description: null,
        fields: [previewChangesOutputNewPackageFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_changes_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewChangesOutputConstructorInfo]
    });
}
exports.describePreviewChangesOutput = describePreviewChangesOutput;
function defaultPreviewDiffInput() {
    let otherPackageVal;
    let packageVal;
    otherPackageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    return new PreviewDiffInput({
        otherPackage: otherPackageVal,
        package: packageVal
    });
}
exports.defaultPreviewDiffInput = defaultPreviewDiffInput;
function describePreviewDiffInput() {
    let otherPackageFieldInfo;
    let packageFieldInfo;
    let previewDiffInputConstructorInfo;
    let previewDiffInputOtherPackageFieldInfo;
    let previewDiffInputPackageFieldInfo;
    otherPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    previewDiffInputOtherPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "other_package",
        description: null,
        typeInfo: otherPackageFieldInfo
    });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    previewDiffInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    previewDiffInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_diff_input",
        description: null,
        fields: [
            previewDiffInputOtherPackageFieldInfo,
            previewDiffInputPackageFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_diff_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewDiffInputConstructorInfo]
    });
}
exports.describePreviewDiffInput = describePreviewDiffInput;
function defaultPreviewDiffOutput() {
    let changesVal;
    changesVal = [];
    return new PreviewDiffOutput({ changes: changesVal });
}
exports.defaultPreviewDiffOutput = defaultPreviewDiffOutput;
function describePreviewDiffOutput() {
    let changesFieldInfo;
    let changesInnerFieldInfo;
    let previewDiffOutputChangesFieldInfo;
    let previewDiffOutputConstructorInfo;
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    previewDiffOutputChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "changes", description: null, typeInfo: changesFieldInfo });
    previewDiffOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "preview_diff_output",
        description: null,
        fields: [previewDiffOutputChangesFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "preview_diff_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [previewDiffOutputConstructorInfo]
    });
}
exports.describePreviewDiffOutput = describePreviewDiffOutput;
