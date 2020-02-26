// Module: services.compiler.dynamic
import * as typelayerCSchemasDefinitionsDynamic from "../../schemas/definitions/dynamic";
import * as typelayerCSchemasDefinitionsStructures from "../../schemas/definitions/structures";
import * as typelayerCSchemasWorldDynamic from "../../schemas/world/dynamic";
import * as typelayerCSchemasWorldStructures from "../../schemas/world/structures";
import * as typelayerCServicesCompilerStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";

export function dynamicGetNewPackageInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.NewPackageInput {
  let constructor: string;
  let newPackageInputBuilder: typelayerCServicesCompilerStructures.NewPackageInput;
  let newPackageInputFieldName: string;
  let newPackageInputFieldsLeft: number;
  let newPackageInputInit: typelayerCServicesCompilerStructures.NewPackageInput;
  let newPackageInputNameValue: string;
  let newPackageInputNewFieldsLeft: number;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "new_package_input"
  );
  switch (constructor) {
    case "new_package_input":
      newPackageInputInit = typelayerCServicesCompilerStructures.defaultNewPackageInput();
      [newPackageInputFieldsLeft, newPackageInputBuilder] = [
        numFields,
        newPackageInputInit
      ];
      while (-1 < newPackageInputFieldsLeft) {
        if (0 < newPackageInputFieldsLeft) {
          newPackageInputNewFieldsLeft = newPackageInputFieldsLeft;
        } else {
          newPackageInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < newPackageInputNewFieldsLeft) {
          newPackageInputFieldName = dynamicObject.decoderPopField();
          switch (newPackageInputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "name":
              newPackageInputNameValue = dynamicObject.decoderPopString();
              newPackageInputBuilder.name = newPackageInputNameValue;

              [newPackageInputFieldsLeft, newPackageInputBuilder] = [
                newPackageInputNewFieldsLeft - 1,
                newPackageInputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [newPackageInputFieldsLeft, newPackageInputBuilder] = [
            -1,
            newPackageInputBuilder
          ];
        }
      }
      return newPackageInputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjNewPackageInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.NewPackageInput {
  let retObj: typelayerCServicesCompilerStructures.NewPackageInput;
  retObj = dynamicGetNewPackageInput(dynamicObject);
  return retObj;
}

export function dynamicPutNewPackageInput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.NewPackageInput
): void {
  let newPackageInputFieldNewPackageInput: typelayerCServicesCompilerStructures.NewPackageInput;
  if (
    inputObject instanceof typelayerCServicesCompilerStructures.NewPackageInput
  ) {
    let newPackageInputFieldNewPackageInput = inputObject;
    dynamicObject.encoderPutStruct("new_package_input", 1);
    dynamicObject.encoderPutField("name");
    dynamicObject.encoderPutString(newPackageInputFieldNewPackageInput.name);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetNewPackageOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.NewPackageOutput {
  let constructor: string;
  let newPackageOutputBuilder: typelayerCServicesCompilerStructures.NewPackageOutput;
  let newPackageOutputFieldName: string;
  let newPackageOutputFieldsLeft: number;
  let newPackageOutputInit: typelayerCServicesCompilerStructures.NewPackageOutput;
  let newPackageOutputNewFieldsLeft: number;
  let newPackageOutputPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "new_package_output"
  );
  switch (constructor) {
    case "new_package_output":
      newPackageOutputInit = typelayerCServicesCompilerStructures.defaultNewPackageOutput();
      [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
        numFields,
        newPackageOutputInit
      ];
      while (-1 < newPackageOutputFieldsLeft) {
        if (0 < newPackageOutputFieldsLeft) {
          newPackageOutputNewFieldsLeft = newPackageOutputFieldsLeft;
        } else {
          newPackageOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < newPackageOutputNewFieldsLeft) {
          newPackageOutputFieldName = dynamicObject.decoderPopField();
          switch (newPackageOutputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "package":
              newPackageOutputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              newPackageOutputBuilder.package = newPackageOutputPackageValue;

              [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
                newPackageOutputNewFieldsLeft - 1,
                newPackageOutputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
            -1,
            newPackageOutputBuilder
          ];
        }
      }
      return newPackageOutputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjNewPackageOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.NewPackageOutput {
  let retObj: typelayerCServicesCompilerStructures.NewPackageOutput;
  retObj = dynamicGetNewPackageOutput(dynamicObject);
  return retObj;
}

export function dynamicPutNewPackageOutput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.NewPackageOutput
): void {
  let newPackageOutputFieldNewPackageOutput: typelayerCServicesCompilerStructures.NewPackageOutput;
  if (
    inputObject instanceof typelayerCServicesCompilerStructures.NewPackageOutput
  ) {
    let newPackageOutputFieldNewPackageOutput = inputObject;
    dynamicObject.encoderPutStruct("new_package_output", 1);
    dynamicObject.encoderPutField("package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      newPackageOutputFieldNewPackageOutput.package
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewInput {
  let constructor: string;
  let numFields: number;
  let previewInputBuilder: typelayerCServicesCompilerStructures.PreviewInput;
  let previewInputFieldName: string;
  let previewInputFieldsLeft: number;
  let previewInputInit: typelayerCServicesCompilerStructures.PreviewInput;
  let previewInputLanguageValue: typelayerCSchemasDefinitionsStructures.Language;
  let previewInputNewFieldsLeft: number;
  let previewInputPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  [constructor, numFields] = dynamicObject.decoderPopStruct("preview_input");
  switch (constructor) {
    case "preview_input":
      previewInputInit = typelayerCServicesCompilerStructures.defaultPreviewInput();
      [previewInputFieldsLeft, previewInputBuilder] = [
        numFields,
        previewInputInit
      ];
      while (-1 < previewInputFieldsLeft) {
        if (0 < previewInputFieldsLeft) {
          previewInputNewFieldsLeft = previewInputFieldsLeft;
        } else {
          previewInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewInputNewFieldsLeft) {
          previewInputFieldName = dynamicObject.decoderPopField();
          switch (previewInputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "language":
              previewInputLanguageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetLanguage(
                dynamicObject
              );
              previewInputBuilder.language = previewInputLanguageValue;

              [previewInputFieldsLeft, previewInputBuilder] = [
                previewInputNewFieldsLeft - 1,
                previewInputBuilder
              ];
              break;
            case "package":
              previewInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              previewInputBuilder.package = previewInputPackageValue;

              [previewInputFieldsLeft, previewInputBuilder] = [
                previewInputNewFieldsLeft - 1,
                previewInputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewInputFieldsLeft, previewInputBuilder] = [
            -1,
            previewInputBuilder
          ];
        }
      }
      return previewInputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewInput {
  let retObj: typelayerCServicesCompilerStructures.PreviewInput;
  retObj = dynamicGetPreviewInput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewInput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewInput
): void {
  let previewInputFieldPreviewInput: typelayerCServicesCompilerStructures.PreviewInput;
  if (
    inputObject instanceof typelayerCServicesCompilerStructures.PreviewInput
  ) {
    let previewInputFieldPreviewInput = inputObject;
    dynamicObject.encoderPutStruct("preview_input", 2);
    dynamicObject.encoderPutField("language");
    typelayerCSchemasDefinitionsDynamic.dynamicPutLanguage(
      dynamicObject,
      previewInputFieldPreviewInput.language
    );
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      previewInputFieldPreviewInput.package
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewOutput {
  let constructor: string;
  let numFields: number;
  let previewOutputBuilder: typelayerCServicesCompilerStructures.PreviewOutput;
  let previewOutputFieldName: string;
  let previewOutputFieldsLeft: number;
  let previewOutputFilesElementsLeft: number;
  let previewOutputFilesInit: number;
  let previewOutputFilesListAcc: Array<typelayerCSchemasWorldStructures.File>;
  let previewOutputFilesListValue: typelayerCSchemasWorldStructures.File;
  let previewOutputFilesNewFieldsLeft: number;
  let previewOutputFilesValue: Array<typelayerCSchemasWorldStructures.File>;
  let previewOutputInit: typelayerCServicesCompilerStructures.PreviewOutput;
  let previewOutputNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("preview_output");
  switch (constructor) {
    case "preview_output":
      previewOutputInit = typelayerCServicesCompilerStructures.defaultPreviewOutput();
      [previewOutputFieldsLeft, previewOutputBuilder] = [
        numFields,
        previewOutputInit
      ];
      while (-1 < previewOutputFieldsLeft) {
        if (0 < previewOutputFieldsLeft) {
          previewOutputNewFieldsLeft = previewOutputFieldsLeft;
        } else {
          previewOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewOutputNewFieldsLeft) {
          previewOutputFieldName = dynamicObject.decoderPopField();
          switch (previewOutputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "files":
              previewOutputFilesInit = dynamicObject.decoderPopList();
              [previewOutputFilesElementsLeft, previewOutputFilesListAcc] = [
                previewOutputFilesInit,
                []
              ];
              while (-1 < previewOutputFilesElementsLeft) {
                if (0 < previewOutputFilesElementsLeft) {
                  previewOutputFilesNewFieldsLeft = previewOutputFilesElementsLeft;
                } else {
                  previewOutputFilesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < previewOutputFilesNewFieldsLeft) {
                  previewOutputFilesListValue = typelayerCSchemasWorldDynamic.dynamicGetFile(
                    dynamicObject
                  );
                  previewOutputFilesListAcc.push(previewOutputFilesListValue);

                  [
                    previewOutputFilesElementsLeft,
                    previewOutputFilesListAcc
                  ] = [
                    previewOutputFilesNewFieldsLeft - 1,
                    previewOutputFilesListAcc
                  ];
                } else {
                  [
                    previewOutputFilesElementsLeft,
                    previewOutputFilesListAcc
                  ] = [-1, previewOutputFilesListAcc];
                }
              }
              previewOutputFilesValue = previewOutputFilesListAcc;
              previewOutputBuilder.files = previewOutputFilesValue;

              [previewOutputFieldsLeft, previewOutputBuilder] = [
                previewOutputNewFieldsLeft - 1,
                previewOutputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewOutputFieldsLeft, previewOutputBuilder] = [
            -1,
            previewOutputBuilder
          ];
        }
      }
      return previewOutputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewOutput {
  let retObj: typelayerCServicesCompilerStructures.PreviewOutput;
  retObj = dynamicGetPreviewOutput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewOutput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewOutput
): void {
  let previewOutputFieldPreviewOutput: typelayerCServicesCompilerStructures.PreviewOutput;
  if (
    inputObject instanceof typelayerCServicesCompilerStructures.PreviewOutput
  ) {
    let previewOutputFieldPreviewOutput = inputObject;
    dynamicObject.encoderPutStruct("preview_output", 1);
    dynamicObject.encoderPutField("files");
    dynamicObject.encoderPutList(previewOutputFieldPreviewOutput.files.length);
    if (0 === previewOutputFieldPreviewOutput.files.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let filesIndex: number = 0;
      for (let filesElem of previewOutputFieldPreviewOutput.files) {
        typelayerCSchemasWorldDynamic.dynamicPutFile(dynamicObject, filesElem);
        dynamicObject.encoderPutElementEnd(
          filesIndex === previewOutputFieldPreviewOutput.files.length - 1
        );

        filesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewChangesInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewChangesInput {
  let constructor: string;
  let numFields: number;
  let previewChangesInputBuilder: typelayerCServicesCompilerStructures.PreviewChangesInput;
  let previewChangesInputChangesElementsLeft: number;
  let previewChangesInputChangesInit: number;
  let previewChangesInputChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let previewChangesInputChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let previewChangesInputChangesNewFieldsLeft: number;
  let previewChangesInputChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let previewChangesInputFieldName: string;
  let previewChangesInputFieldsLeft: number;
  let previewChangesInputInit: typelayerCServicesCompilerStructures.PreviewChangesInput;
  let previewChangesInputNewFieldsLeft: number;
  let previewChangesInputPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "preview_changes_input"
  );
  switch (constructor) {
    case "preview_changes_input":
      previewChangesInputInit = typelayerCServicesCompilerStructures.defaultPreviewChangesInput();
      [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
        numFields,
        previewChangesInputInit
      ];
      while (-1 < previewChangesInputFieldsLeft) {
        if (0 < previewChangesInputFieldsLeft) {
          previewChangesInputNewFieldsLeft = previewChangesInputFieldsLeft;
        } else {
          previewChangesInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewChangesInputNewFieldsLeft) {
          previewChangesInputFieldName = dynamicObject.decoderPopField();
          switch (previewChangesInputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "changes":
              previewChangesInputChangesInit = dynamicObject.decoderPopList();
              [
                previewChangesInputChangesElementsLeft,
                previewChangesInputChangesListAcc
              ] = [previewChangesInputChangesInit, []];
              while (-1 < previewChangesInputChangesElementsLeft) {
                if (0 < previewChangesInputChangesElementsLeft) {
                  previewChangesInputChangesNewFieldsLeft = previewChangesInputChangesElementsLeft;
                } else {
                  previewChangesInputChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < previewChangesInputChangesNewFieldsLeft) {
                  previewChangesInputChangesListValue = typelayerCSchemasDefinitionsDynamic.dynamicGetChange(
                    dynamicObject
                  );
                  previewChangesInputChangesListAcc.push(
                    previewChangesInputChangesListValue
                  );

                  [
                    previewChangesInputChangesElementsLeft,
                    previewChangesInputChangesListAcc
                  ] = [
                    previewChangesInputChangesNewFieldsLeft - 1,
                    previewChangesInputChangesListAcc
                  ];
                } else {
                  [
                    previewChangesInputChangesElementsLeft,
                    previewChangesInputChangesListAcc
                  ] = [-1, previewChangesInputChangesListAcc];
                }
              }
              previewChangesInputChangesValue = previewChangesInputChangesListAcc;
              previewChangesInputBuilder.changes = previewChangesInputChangesValue;

              [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                previewChangesInputNewFieldsLeft - 1,
                previewChangesInputBuilder
              ];
              break;
            case "package":
              previewChangesInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              previewChangesInputBuilder.package = previewChangesInputPackageValue;

              [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                previewChangesInputNewFieldsLeft - 1,
                previewChangesInputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
            -1,
            previewChangesInputBuilder
          ];
        }
      }
      return previewChangesInputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewChangesInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewChangesInput {
  let retObj: typelayerCServicesCompilerStructures.PreviewChangesInput;
  retObj = dynamicGetPreviewChangesInput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewChangesInput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewChangesInput
): void {
  let previewChangesInputFieldPreviewChangesInput: typelayerCServicesCompilerStructures.PreviewChangesInput;
  if (
    inputObject instanceof
    typelayerCServicesCompilerStructures.PreviewChangesInput
  ) {
    let previewChangesInputFieldPreviewChangesInput = inputObject;
    dynamicObject.encoderPutStruct("preview_changes_input", 2);
    dynamicObject.encoderPutField("changes");
    dynamicObject.encoderPutList(
      previewChangesInputFieldPreviewChangesInput.changes.length
    );
    if (0 === previewChangesInputFieldPreviewChangesInput.changes.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let changesIndex: number = 0;
      for (let changesElem of previewChangesInputFieldPreviewChangesInput.changes) {
        typelayerCSchemasDefinitionsDynamic.dynamicPutChange(
          dynamicObject,
          changesElem
        );
        dynamicObject.encoderPutElementEnd(
          changesIndex ===
            previewChangesInputFieldPreviewChangesInput.changes.length - 1
        );

        changesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      previewChangesInputFieldPreviewChangesInput.package
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewChangesOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewChangesOutput {
  let constructor: string;
  let numFields: number;
  let previewChangesOutputBuilder: typelayerCServicesCompilerStructures.PreviewChangesOutput;
  let previewChangesOutputFieldName: string;
  let previewChangesOutputFieldsLeft: number;
  let previewChangesOutputInit: typelayerCServicesCompilerStructures.PreviewChangesOutput;
  let previewChangesOutputNewFieldsLeft: number;
  let previewChangesOutputNewPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "preview_changes_output"
  );
  switch (constructor) {
    case "preview_changes_output":
      previewChangesOutputInit = typelayerCServicesCompilerStructures.defaultPreviewChangesOutput();
      [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
        numFields,
        previewChangesOutputInit
      ];
      while (-1 < previewChangesOutputFieldsLeft) {
        if (0 < previewChangesOutputFieldsLeft) {
          previewChangesOutputNewFieldsLeft = previewChangesOutputFieldsLeft;
        } else {
          previewChangesOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewChangesOutputNewFieldsLeft) {
          previewChangesOutputFieldName = dynamicObject.decoderPopField();
          switch (previewChangesOutputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "new_package":
              previewChangesOutputNewPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              previewChangesOutputBuilder.newPackage = previewChangesOutputNewPackageValue;

              [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
                previewChangesOutputNewFieldsLeft - 1,
                previewChangesOutputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
            -1,
            previewChangesOutputBuilder
          ];
        }
      }
      return previewChangesOutputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewChangesOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewChangesOutput {
  let retObj: typelayerCServicesCompilerStructures.PreviewChangesOutput;
  retObj = dynamicGetPreviewChangesOutput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewChangesOutput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewChangesOutput
): void {
  let previewChangesOutputFieldPreviewChangesOutput: typelayerCServicesCompilerStructures.PreviewChangesOutput;
  if (
    inputObject instanceof
    typelayerCServicesCompilerStructures.PreviewChangesOutput
  ) {
    let previewChangesOutputFieldPreviewChangesOutput = inputObject;
    dynamicObject.encoderPutStruct("preview_changes_output", 1);
    dynamicObject.encoderPutField("new_package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      previewChangesOutputFieldPreviewChangesOutput.newPackage
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewDiffInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewDiffInput {
  let constructor: string;
  let numFields: number;
  let previewDiffInputBuilder: typelayerCServicesCompilerStructures.PreviewDiffInput;
  let previewDiffInputFieldName: string;
  let previewDiffInputFieldsLeft: number;
  let previewDiffInputInit: typelayerCServicesCompilerStructures.PreviewDiffInput;
  let previewDiffInputNewFieldsLeft: number;
  let previewDiffInputOtherPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  let previewDiffInputPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "preview_diff_input"
  );
  switch (constructor) {
    case "preview_diff_input":
      previewDiffInputInit = typelayerCServicesCompilerStructures.defaultPreviewDiffInput();
      [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
        numFields,
        previewDiffInputInit
      ];
      while (-1 < previewDiffInputFieldsLeft) {
        if (0 < previewDiffInputFieldsLeft) {
          previewDiffInputNewFieldsLeft = previewDiffInputFieldsLeft;
        } else {
          previewDiffInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewDiffInputNewFieldsLeft) {
          previewDiffInputFieldName = dynamicObject.decoderPopField();
          switch (previewDiffInputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "other_package":
              previewDiffInputOtherPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              previewDiffInputBuilder.otherPackage = previewDiffInputOtherPackageValue;

              [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                previewDiffInputNewFieldsLeft - 1,
                previewDiffInputBuilder
              ];
              break;
            case "package":
              previewDiffInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(
                dynamicObject
              );
              previewDiffInputBuilder.package = previewDiffInputPackageValue;

              [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                previewDiffInputNewFieldsLeft - 1,
                previewDiffInputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
            -1,
            previewDiffInputBuilder
          ];
        }
      }
      return previewDiffInputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewDiffInput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewDiffInput {
  let retObj: typelayerCServicesCompilerStructures.PreviewDiffInput;
  retObj = dynamicGetPreviewDiffInput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewDiffInput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewDiffInput
): void {
  let previewDiffInputFieldPreviewDiffInput: typelayerCServicesCompilerStructures.PreviewDiffInput;
  if (
    inputObject instanceof typelayerCServicesCompilerStructures.PreviewDiffInput
  ) {
    let previewDiffInputFieldPreviewDiffInput = inputObject;
    dynamicObject.encoderPutStruct("preview_diff_input", 2);
    dynamicObject.encoderPutField("other_package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      previewDiffInputFieldPreviewDiffInput.otherPackage
    );
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("package");
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
      dynamicObject,
      previewDiffInputFieldPreviewDiffInput.package
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPreviewDiffOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewDiffOutput {
  let constructor: string;
  let numFields: number;
  let previewDiffOutputBuilder: typelayerCServicesCompilerStructures.PreviewDiffOutput;
  let previewDiffOutputChangesElementsLeft: number;
  let previewDiffOutputChangesInit: number;
  let previewDiffOutputChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let previewDiffOutputChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let previewDiffOutputChangesNewFieldsLeft: number;
  let previewDiffOutputChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let previewDiffOutputFieldName: string;
  let previewDiffOutputFieldsLeft: number;
  let previewDiffOutputInit: typelayerCServicesCompilerStructures.PreviewDiffOutput;
  let previewDiffOutputNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "preview_diff_output"
  );
  switch (constructor) {
    case "preview_diff_output":
      previewDiffOutputInit = typelayerCServicesCompilerStructures.defaultPreviewDiffOutput();
      [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
        numFields,
        previewDiffOutputInit
      ];
      while (-1 < previewDiffOutputFieldsLeft) {
        if (0 < previewDiffOutputFieldsLeft) {
          previewDiffOutputNewFieldsLeft = previewDiffOutputFieldsLeft;
        } else {
          previewDiffOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < previewDiffOutputNewFieldsLeft) {
          previewDiffOutputFieldName = dynamicObject.decoderPopField();
          switch (previewDiffOutputFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "changes":
              previewDiffOutputChangesInit = dynamicObject.decoderPopList();
              [
                previewDiffOutputChangesElementsLeft,
                previewDiffOutputChangesListAcc
              ] = [previewDiffOutputChangesInit, []];
              while (-1 < previewDiffOutputChangesElementsLeft) {
                if (0 < previewDiffOutputChangesElementsLeft) {
                  previewDiffOutputChangesNewFieldsLeft = previewDiffOutputChangesElementsLeft;
                } else {
                  previewDiffOutputChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < previewDiffOutputChangesNewFieldsLeft) {
                  previewDiffOutputChangesListValue = typelayerCSchemasDefinitionsDynamic.dynamicGetChange(
                    dynamicObject
                  );
                  previewDiffOutputChangesListAcc.push(
                    previewDiffOutputChangesListValue
                  );

                  [
                    previewDiffOutputChangesElementsLeft,
                    previewDiffOutputChangesListAcc
                  ] = [
                    previewDiffOutputChangesNewFieldsLeft - 1,
                    previewDiffOutputChangesListAcc
                  ];
                } else {
                  [
                    previewDiffOutputChangesElementsLeft,
                    previewDiffOutputChangesListAcc
                  ] = [-1, previewDiffOutputChangesListAcc];
                }
              }
              previewDiffOutputChangesValue = previewDiffOutputChangesListAcc;
              previewDiffOutputBuilder.changes = previewDiffOutputChangesValue;

              [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
                previewDiffOutputNewFieldsLeft - 1,
                previewDiffOutputBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
            -1,
            previewDiffOutputBuilder
          ];
        }
      }
      return previewDiffOutputBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPreviewDiffOutput(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCServicesCompilerStructures.PreviewDiffOutput {
  let retObj: typelayerCServicesCompilerStructures.PreviewDiffOutput;
  retObj = dynamicGetPreviewDiffOutput(dynamicObject);
  return retObj;
}

export function dynamicPutPreviewDiffOutput(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCServicesCompilerStructures.PreviewDiffOutput
): void {
  let previewDiffOutputFieldPreviewDiffOutput: typelayerCServicesCompilerStructures.PreviewDiffOutput;
  if (
    inputObject instanceof
    typelayerCServicesCompilerStructures.PreviewDiffOutput
  ) {
    let previewDiffOutputFieldPreviewDiffOutput = inputObject;
    dynamicObject.encoderPutStruct("preview_diff_output", 1);
    dynamicObject.encoderPutField("changes");
    dynamicObject.encoderPutList(
      previewDiffOutputFieldPreviewDiffOutput.changes.length
    );
    if (0 === previewDiffOutputFieldPreviewDiffOutput.changes.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let changesIndex: number = 0;
      for (let changesElem of previewDiffOutputFieldPreviewDiffOutput.changes) {
        typelayerCSchemasDefinitionsDynamic.dynamicPutChange(
          dynamicObject,
          changesElem
        );
        dynamicObject.encoderPutElementEnd(
          changesIndex ===
            previewDiffOutputFieldPreviewDiffOutput.changes.length - 1
        );

        changesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}
