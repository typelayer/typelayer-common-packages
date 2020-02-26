"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.world.dynamic
const typelayerCSchemasWorldStructures = __importStar(require("./structures"));
const typelayerCommonDynamic = __importStar(require("typelayer-common"));
function dynamicGetFile(dynamicObject) {
    let constructor;
    let fileBuilder;
    let fileContentsValue;
    let fileFieldName;
    let fileFieldsLeft;
    let fileFileidValue;
    let fileInit;
    let fileNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("file");
    switch (constructor) {
        case "file":
            fileInit = typelayerCSchemasWorldStructures.defaultFile();
            [fileFieldsLeft, fileBuilder] = [numFields, fileInit];
            while (-1 < fileFieldsLeft) {
                if (0 < fileFieldsLeft) {
                    fileNewFieldsLeft = fileFieldsLeft;
                }
                else {
                    fileNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < fileNewFieldsLeft) {
                    fileFieldName = dynamicObject.decoderPopField();
                    switch (fileFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
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
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [fileFieldsLeft, fileBuilder] = [-1, fileBuilder];
                }
            }
            return fileBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetFile = dynamicGetFile;
function dynamicGetObjFile(dynamicObject) {
    let retObj;
    retObj = dynamicGetFile(dynamicObject);
    return retObj;
}
exports.dynamicGetObjFile = dynamicGetObjFile;
function dynamicPutFile(dynamicObject, inputObject) {
    let fileFieldFile;
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
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutFile = dynamicPutFile;
