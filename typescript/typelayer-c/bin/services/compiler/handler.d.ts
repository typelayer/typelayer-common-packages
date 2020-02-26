import * as typelayerCServicesCompilerStructures from "./structures";
import * as typelayerCommonApplication from "typelayer-common";
import * as typelayerCommonDocumentation from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";
export interface Compiler {
    compilerNewPackage: (incomingMsg: typelayerCServicesCompilerStructures.NewPackageInput) => Promise<typelayerCServicesCompilerStructures.NewPackageOutput>;
    compilerPreview: (incomingMsg: typelayerCServicesCompilerStructures.PreviewInput) => Promise<typelayerCServicesCompilerStructures.PreviewOutput>;
    compilerPreviewChanges: (incomingMsg: typelayerCServicesCompilerStructures.PreviewChangesInput) => Promise<typelayerCServicesCompilerStructures.PreviewChangesOutput>;
    compilerPreviewDiff: (incomingMsg: typelayerCServicesCompilerStructures.PreviewDiffInput) => Promise<typelayerCServicesCompilerStructures.PreviewDiffOutput>;
}
export declare class CompilerApp implements typelayerCommonApplication.Process {
    kind: string;
    service: Compiler;
    constructor(arg: {
        service: Compiler;
    });
    processDescribe(this: CompilerApp): typelayerCommonDocumentation.ApplicationDescription;
    processHandle(this: CompilerApp, encoding: typelayerCommonDynamic.Encoding, path: Array<string>, body: Uint8Array): Promise<Uint8Array>;
}
export declare function describeCompiler(): typelayerCommonDocumentation.ServiceDescription;
export declare function handleCompilerNewPackage(implementation: Compiler, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
export declare function handleCompilerPreview(implementation: Compiler, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
export declare function handleCompilerPreviewChanges(implementation: Compiler, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
export declare function handleCompilerPreviewDiff(implementation: Compiler, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
