// Module: schemas.world.dynamic
import * as typelayerCSchemasWorldStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";

export function dynamicGetFile(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasWorldStructures.File {
  let constructor: string;
  let fileBuilder: typelayerCSchemasWorldStructures.File;
  let fileContentsValue: string;
  let fileFieldName: string;
  let fileFieldsLeft: number;
  let fileFileidValue: string;
  let fileInit: typelayerCSchemasWorldStructures.File;
  let fileNewFieldsLeft: number;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("file");
  switch (constructor) {
    case "file":
      fileInit = typelayerCSchemasWorldStructures.defaultFile();
      [fileFieldsLeft, fileBuilder] = [numFields, fileInit];
      while (-1 < fileFieldsLeft) {
        if (0 < fileFieldsLeft) {
          fileNewFieldsLeft = fileFieldsLeft;
        } else {
          fileNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < fileNewFieldsLeft) {
          fileFieldName = dynamicObject.decoderPopField();
          switch (fileFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "contents":
              fileContentsValue = dynamicObject.decoderPopString();
              fileBuilder.contents = fileContentsValue;

              [fileFieldsLeft, fileBuilder] = [
                fileNewFieldsLeft - 1,
                fileBuilder
              ];
              break;
            case "fileid":
              fileFileidValue = dynamicObject.decoderPopString();
              fileBuilder.fileid = fileFileidValue;

              [fileFieldsLeft, fileBuilder] = [
                fileNewFieldsLeft - 1,
                fileBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [fileFieldsLeft, fileBuilder] = [-1, fileBuilder];
        }
      }
      return fileBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjFile(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasWorldStructures.File {
  let retObj: typelayerCSchemasWorldStructures.File;
  retObj = dynamicGetFile(dynamicObject);
  return retObj;
}

export function dynamicPutFile(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasWorldStructures.File
): void {
  let fileFieldFile: typelayerCSchemasWorldStructures.File;
  if (inputObject instanceof typelayerCSchemasWorldStructures.File) {
    let fileFieldFile = inputObject;
    dynamicObject.encoderPutStruct("file", 2);
    dynamicObject.encoderPutField("contents");
    dynamicObject.encoderPutString(fileFieldFile.contents);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("fileid");
    dynamicObject.encoderPutString(fileFieldFile.fileid);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}
