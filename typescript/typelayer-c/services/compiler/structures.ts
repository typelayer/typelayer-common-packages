// Module: services.compiler.structures
import * as typelayerCSchemasDefinitionsStructures from "../../schemas/definitions/structures";
import * as typelayerCSchemasWorldStructures from "../../schemas/world/structures";
import * as typelayerCommonDocumentation from "typelayer-common";

export class NewPackageInput {
  name: string;
  constructor(arg: { name: string }) {
    Object.assign(this, arg);
  }
}

export class NewPackageOutput {
  package: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    package: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export class PreviewInput {
  language: typelayerCSchemasDefinitionsStructures.Language;
  package: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    language: typelayerCSchemasDefinitionsStructures.Language;
    package: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export class PreviewOutput {
  files: Array<typelayerCSchemasWorldStructures.File>;
  constructor(arg: { files: Array<typelayerCSchemasWorldStructures.File> }) {
    Object.assign(this, arg);
  }
}

export class PreviewChangesInput {
  changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
  package: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
    package: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export class PreviewChangesOutput {
  newPackage: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    newPackage: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export class PreviewDiffInput {
  otherPackage: typelayerCSchemasDefinitionsStructures.Package;
  package: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    otherPackage: typelayerCSchemasDefinitionsStructures.Package;
    package: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export class PreviewDiffOutput {
  changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
  constructor(arg: {
    changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
  }) {
    Object.assign(this, arg);
  }
}

export function defaultNewPackageInput(): NewPackageInput {
  let nameVal: string;
  nameVal = "";
  return new NewPackageInput({ name: nameVal });
}

export function describeNewPackageInput(): typelayerCommonDocumentation.StructureInfo {
  let nameFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let newPackageInputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let newPackageInputNameFieldInfo: typelayerCommonDocumentation.FieldDescription;
  nameFieldInfo = new typelayerCommonDocumentation.TlText({});
  newPackageInputNameFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "name", description: null, typeInfo: nameFieldInfo }
  );
  newPackageInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "new_package_input",
      description: null,
      fields: [newPackageInputNameFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "new_package_input",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [newPackageInputConstructorInfo]
  });
}

export function defaultNewPackageOutput(): NewPackageOutput {
  let packageVal: typelayerCSchemasDefinitionsStructures.Package;
  packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  return new NewPackageOutput({ package: packageVal });
}

export function describeNewPackageOutput(): typelayerCommonDocumentation.StructureInfo {
  let newPackageOutputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let newPackageOutputPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  newPackageOutputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  newPackageOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "new_package_output",
      description: null,
      fields: [newPackageOutputPackageFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "new_package_output",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [newPackageOutputConstructorInfo]
  });
}

export function defaultPreviewInput(): PreviewInput {
  let languageVal: typelayerCSchemasDefinitionsStructures.Language;
  let packageVal: typelayerCSchemasDefinitionsStructures.Package;
  languageVal = typelayerCSchemasDefinitionsStructures.defaultLanguage();
  packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  return new PreviewInput({ language: languageVal, package: packageVal });
}

export function describePreviewInput(): typelayerCommonDocumentation.StructureInfo {
  let languageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewInputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let previewInputLanguageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let previewInputPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  languageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "language"
  });
  previewInputLanguageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "language", description: null, typeInfo: languageFieldInfo }
  );
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  previewInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  previewInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_input",
      description: null,
      fields: [previewInputLanguageFieldInfo, previewInputPackageFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_input",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewInputConstructorInfo]
  });
}

export function defaultPreviewOutput(): PreviewOutput {
  let filesVal: Array<typelayerCSchemasWorldStructures.File>;
  filesVal = [];
  return new PreviewOutput({ files: filesVal });
}

export function describePreviewOutput(): typelayerCommonDocumentation.StructureInfo {
  let filesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let filesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewOutputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let previewOutputFilesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  filesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "file"
  });
  filesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: filesInnerFieldInfo
  });
  previewOutputFilesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "files", description: null, typeInfo: filesFieldInfo }
  );
  previewOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_output",
      description: null,
      fields: [previewOutputFilesFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_output",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewOutputConstructorInfo]
  });
}

export function defaultPreviewChangesInput(): PreviewChangesInput {
  let changesVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let packageVal: typelayerCSchemasDefinitionsStructures.Package;
  changesVal = [];
  packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  return new PreviewChangesInput({ changes: changesVal, package: packageVal });
}

export function describePreviewChangesInput(): typelayerCommonDocumentation.StructureInfo {
  let changesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewChangesInputChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let previewChangesInputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let previewChangesInputPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  previewChangesInputChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "changes", description: null, typeInfo: changesFieldInfo }
  );
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  previewChangesInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  previewChangesInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_changes_input",
      description: null,
      fields: [
        previewChangesInputChangesFieldInfo,
        previewChangesInputPackageFieldInfo
      ]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_changes_input",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewChangesInputConstructorInfo]
  });
}

export function defaultPreviewChangesOutput(): PreviewChangesOutput {
  let newPackageVal: typelayerCSchemasDefinitionsStructures.Package;
  newPackageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  return new PreviewChangesOutput({ newPackage: newPackageVal });
}

export function describePreviewChangesOutput(): typelayerCommonDocumentation.StructureInfo {
  let newPackageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewChangesOutputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let previewChangesOutputNewPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  newPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  previewChangesOutputNewPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "new_package", description: null, typeInfo: newPackageFieldInfo }
  );
  previewChangesOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_changes_output",
      description: null,
      fields: [previewChangesOutputNewPackageFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_changes_output",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewChangesOutputConstructorInfo]
  });
}

export function defaultPreviewDiffInput(): PreviewDiffInput {
  let otherPackageVal: typelayerCSchemasDefinitionsStructures.Package;
  let packageVal: typelayerCSchemasDefinitionsStructures.Package;
  otherPackageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  packageVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
  return new PreviewDiffInput({
    otherPackage: otherPackageVal,
    package: packageVal
  });
}

export function describePreviewDiffInput(): typelayerCommonDocumentation.StructureInfo {
  let otherPackageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewDiffInputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let previewDiffInputOtherPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let previewDiffInputPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  otherPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  previewDiffInputOtherPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    {
      name: "other_package",
      description: null,
      typeInfo: otherPackageFieldInfo
    }
  );
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  previewDiffInputPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  previewDiffInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_diff_input",
      description: null,
      fields: [
        previewDiffInputOtherPackageFieldInfo,
        previewDiffInputPackageFieldInfo
      ]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_diff_input",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewDiffInputConstructorInfo]
  });
}

export function defaultPreviewDiffOutput(): PreviewDiffOutput {
  let changesVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
  changesVal = [];
  return new PreviewDiffOutput({ changes: changesVal });
}

export function describePreviewDiffOutput(): typelayerCommonDocumentation.StructureInfo {
  let changesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let previewDiffOutputChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let previewDiffOutputConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  previewDiffOutputChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "changes", description: null, typeInfo: changesFieldInfo }
  );
  previewDiffOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "preview_diff_output",
      description: null,
      fields: [previewDiffOutputChangesFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "preview_diff_output",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [previewDiffOutputConstructorInfo]
  });
}
