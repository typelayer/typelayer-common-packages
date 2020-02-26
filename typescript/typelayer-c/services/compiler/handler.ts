// Module: services.compiler.handler
import * as typelayerCServicesCompilerDynamic from "./dynamic";
import * as typelayerCServicesCompilerStructures from "./structures";
import * as typelayerCommonApplication from "typelayer-common";
import * as typelayerCommonDocumentation from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";

export interface Compiler {
  compilerNewPackage: (
    incomingMsg: typelayerCServicesCompilerStructures.NewPackageInput
  ) => Promise<typelayerCServicesCompilerStructures.NewPackageOutput>;
  compilerPreview: (
    incomingMsg: typelayerCServicesCompilerStructures.PreviewInput
  ) => Promise<typelayerCServicesCompilerStructures.PreviewOutput>;
  compilerPreviewChanges: (
    incomingMsg: typelayerCServicesCompilerStructures.PreviewChangesInput
  ) => Promise<typelayerCServicesCompilerStructures.PreviewChangesOutput>;
  compilerPreviewDiff: (
    incomingMsg: typelayerCServicesCompilerStructures.PreviewDiffInput
  ) => Promise<typelayerCServicesCompilerStructures.PreviewDiffOutput>;
}

export class CompilerApp implements typelayerCommonApplication.Process {
  kind: string = "CompilerApp";
  service: Compiler;
  constructor(arg: { service: Compiler }) {
    Object.assign(this, arg);
  }
  processDescribe(
    this: CompilerApp
  ): typelayerCommonDocumentation.ApplicationDescription {
    let serviceDescription: typelayerCommonDocumentation.ServiceDescription;
    serviceDescription = describeCompiler();
    return new typelayerCommonDocumentation.ApplicationDescription({
      name: "compiler",
      description: null,
      services: [serviceDescription]
    });
  }
  async processHandle(
    this: CompilerApp,
    encoding: typelayerCommonDynamic.Encoding,
    path: Array<string>,
    body: Uint8Array
  ): Promise<Uint8Array> {
    let respBin: Uint8Array;
    let response: typelayerCommonDynamic.Encoder;
    switch (path[0]) {
      case "new-package":
        response = await handleCompilerNewPackage(this.service, encoding, body);
        break;
      case "preview":
        response = await handleCompilerPreview(this.service, encoding, body);
        break;
      case "preview-changes":
        response = await handleCompilerPreviewChanges(
          this.service,
          encoding,
          body
        );
        break;
      case "preview-diff":
        response = await handleCompilerPreviewDiff(
          this.service,
          encoding,
          body
        );
        break;
      default:
        throw new typelayerCommonApplication.FunctionNotFound(
          "Function not found",
          {
            requestedService: "compiler",
            requestedFunction: path[0],
            availableFunctions:
              "new-package | preview | preview-changes | preview-diff"
          }
        );
    }
    this.service = this.service;

    respBin = response.encoderToBinary();
    return respBin;
  }
}

export function describeCompiler(): typelayerCommonDocumentation.ServiceDescription {
  let changesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesInfo: typelayerCommonDocumentation.FieldDescription;
  let changesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let filesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let filesInfo: typelayerCommonDocumentation.FieldDescription;
  let filesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let languageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let languageInfo: typelayerCommonDocumentation.FieldDescription;
  let nameFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let nameInfo: typelayerCommonDocumentation.FieldDescription;
  let newPackageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let newPackageInfo: typelayerCommonDocumentation.FieldDescription;
  let newPackageInputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let newPackageOutputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let otherPackageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let otherPackageInfo: typelayerCommonDocumentation.FieldDescription;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageInfo: typelayerCommonDocumentation.FieldDescription;
  let previewChangesInputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let previewChangesOutputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let previewDiffInputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let previewDiffOutputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let previewInputs: Array<typelayerCommonDocumentation.FieldDescription>;
  let previewOutputs: Array<typelayerCommonDocumentation.FieldDescription>;
  nameFieldInfo = new typelayerCommonDocumentation.TlText({});
  nameInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "name",
    description: null,
    typeInfo: nameFieldInfo
  });
  newPackageInputs = [nameInfo];
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  packageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "package",
    description: null,
    typeInfo: packageFieldInfo
  });
  newPackageOutputs = [packageInfo];
  languageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "language"
  });
  languageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "language",
    description: null,
    typeInfo: languageFieldInfo
  });
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  packageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "package",
    description: null,
    typeInfo: packageFieldInfo
  });
  previewInputs = [languageInfo, packageInfo];
  filesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "file"
  });
  filesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: filesInnerFieldInfo
  });
  filesInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "files",
    description: null,
    typeInfo: filesFieldInfo
  });
  previewOutputs = [filesInfo];
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  changesInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "changes",
    description: null,
    typeInfo: changesFieldInfo
  });
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  packageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "package",
    description: null,
    typeInfo: packageFieldInfo
  });
  previewChangesInputs = [changesInfo, packageInfo];
  newPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  newPackageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "new_package",
    description: null,
    typeInfo: newPackageFieldInfo
  });
  previewChangesOutputs = [newPackageInfo];
  otherPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  otherPackageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "other_package",
    description: null,
    typeInfo: otherPackageFieldInfo
  });
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  packageInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "package",
    description: null,
    typeInfo: packageFieldInfo
  });
  previewDiffInputs = [otherPackageInfo, packageInfo];
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  changesInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "changes",
    description: null,
    typeInfo: changesFieldInfo
  });
  previewDiffOutputs = [changesInfo];
  return new typelayerCommonDocumentation.ServiceDescription({
    name: "compiler",
    description: null,
    functions: [
      new typelayerCommonDocumentation.FunctionDescription({
        name: "compiler",
        description: null,
        inputs: newPackageInputs,
        outputs: newPackageOutputs
      }),
      new typelayerCommonDocumentation.FunctionDescription({
        name: "compiler",
        description: null,
        inputs: previewInputs,
        outputs: previewOutputs
      }),
      new typelayerCommonDocumentation.FunctionDescription({
        name: "compiler",
        description: null,
        inputs: previewChangesInputs,
        outputs: previewChangesOutputs
      }),
      new typelayerCommonDocumentation.FunctionDescription({
        name: "compiler",
        description: null,
        inputs: previewDiffInputs,
        outputs: previewDiffOutputs
      })
    ]
  });
}

export async function handleCompilerNewPackage(
  implementation: Compiler,
  encoding: typelayerCommonDynamic.Encoding,
  binary: Uint8Array
): Promise<typelayerCommonDynamic.Encoder> {
  let decoderStart: typelayerCommonDynamic.Decoder;
  let encoderStart: typelayerCommonDynamic.Encoder;
  let input: typelayerCServicesCompilerStructures.NewPackageInput;
  let result: typelayerCServicesCompilerStructures.NewPackageOutput;
  decoderStart = encoding.encodingStartDecoding(binary);
  encoderStart = encoding.encodingStartEncoding();
  input = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(
    decoderStart
  );
  result = await implementation.compilerNewPackage(input);
  typelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput(
    encoderStart,
    result
  );
  return encoderStart;
}

export async function handleCompilerPreview(
  implementation: Compiler,
  encoding: typelayerCommonDynamic.Encoding,
  binary: Uint8Array
): Promise<typelayerCommonDynamic.Encoder> {
  let decoderStart: typelayerCommonDynamic.Decoder;
  let encoderStart: typelayerCommonDynamic.Encoder;
  let input: typelayerCServicesCompilerStructures.PreviewInput;
  let result: typelayerCServicesCompilerStructures.PreviewOutput;
  decoderStart = encoding.encodingStartDecoding(binary);
  encoderStart = encoding.encodingStartEncoding();
  input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(
    decoderStart
  );
  result = await implementation.compilerPreview(input);
  typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(
    encoderStart,
    result
  );
  return encoderStart;
}

export async function handleCompilerPreviewChanges(
  implementation: Compiler,
  encoding: typelayerCommonDynamic.Encoding,
  binary: Uint8Array
): Promise<typelayerCommonDynamic.Encoder> {
  let decoderStart: typelayerCommonDynamic.Decoder;
  let encoderStart: typelayerCommonDynamic.Encoder;
  let input: typelayerCServicesCompilerStructures.PreviewChangesInput;
  let result: typelayerCServicesCompilerStructures.PreviewChangesOutput;
  decoderStart = encoding.encodingStartDecoding(binary);
  encoderStart = encoding.encodingStartEncoding();
  input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(
    decoderStart
  );
  result = await implementation.compilerPreviewChanges(input);
  typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput(
    encoderStart,
    result
  );
  return encoderStart;
}

export async function handleCompilerPreviewDiff(
  implementation: Compiler,
  encoding: typelayerCommonDynamic.Encoding,
  binary: Uint8Array
): Promise<typelayerCommonDynamic.Encoder> {
  let decoderStart: typelayerCommonDynamic.Decoder;
  let encoderStart: typelayerCommonDynamic.Encoder;
  let input: typelayerCServicesCompilerStructures.PreviewDiffInput;
  let result: typelayerCServicesCompilerStructures.PreviewDiffOutput;
  decoderStart = encoding.encodingStartDecoding(binary);
  encoderStart = encoding.encodingStartEncoding();
  input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(
    decoderStart
  );
  result = await implementation.compilerPreviewDiff(input);
  typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(
    encoderStart,
    result
  );
  return encoderStart;
}
