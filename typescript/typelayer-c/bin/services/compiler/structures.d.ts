import * as typelayerCSchemasDefinitionsStructures from "../../schemas/definitions/structures";
import * as typelayerCSchemasWorldStructures from "../../schemas/world/structures";
import * as typelayerCommonDocumentation from "typelayer-common";
export declare class NewPackageInput {
    name: string;
    constructor(arg: {
        name: string;
    });
}
export declare class NewPackageOutput {
    package: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        package: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export declare class PreviewInput {
    language: typelayerCSchemasDefinitionsStructures.Language;
    package: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        language: typelayerCSchemasDefinitionsStructures.Language;
        package: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export declare class PreviewOutput {
    files: Array<typelayerCSchemasWorldStructures.File>;
    constructor(arg: {
        files: Array<typelayerCSchemasWorldStructures.File>;
    });
}
export declare class PreviewChangesInput {
    changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
    package: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
        package: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export declare class PreviewChangesOutput {
    newPackage: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        newPackage: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export declare class PreviewDiffInput {
    otherPackage: typelayerCSchemasDefinitionsStructures.Package;
    package: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        otherPackage: typelayerCSchemasDefinitionsStructures.Package;
        package: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export declare class PreviewDiffOutput {
    changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
    constructor(arg: {
        changes: Array<typelayerCSchemasDefinitionsStructures.Change>;
    });
}
export declare function defaultNewPackageInput(): NewPackageInput;
export declare function describeNewPackageInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultNewPackageOutput(): NewPackageOutput;
export declare function describeNewPackageOutput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewInput(): PreviewInput;
export declare function describePreviewInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewOutput(): PreviewOutput;
export declare function describePreviewOutput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewChangesInput(): PreviewChangesInput;
export declare function describePreviewChangesInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewChangesOutput(): PreviewChangesOutput;
export declare function describePreviewChangesOutput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewDiffInput(): PreviewDiffInput;
export declare function describePreviewDiffInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPreviewDiffOutput(): PreviewDiffOutput;
export declare function describePreviewDiffOutput(): typelayerCommonDocumentation.StructureInfo;
