"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: exceptionsEncoding
const typelayerCommonDocumentation = __importStar(require("./documentation"));
const typelayerCommonDynamic = __importStar(require("./dynamic"));
const typelayerCommonExceptions = __importStar(require("./exceptions"));
class ExceptionMetaSerializable {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ExceptionMetaSerializable = ExceptionMetaSerializable;
function dynamicGetExceptionMetaSerializable(dynamicObject) {
    let constructor;
    let exceptionMetaSerializableBuilder;
    let exceptionMetaSerializableExceptionFieldsElementsLeft;
    let exceptionMetaSerializableExceptionFieldsInit;
    let exceptionMetaSerializableExceptionFieldsKey;
    let exceptionMetaSerializableExceptionFieldsMapAcc;
    let exceptionMetaSerializableExceptionFieldsMapValue;
    let exceptionMetaSerializableExceptionFieldsNewFieldsLeft;
    let exceptionMetaSerializableExceptionFieldsValue;
    let exceptionMetaSerializableExceptionMessageValue;
    let exceptionMetaSerializableExceptionModuleValue;
    let exceptionMetaSerializableExceptionTypeValue;
    let exceptionMetaSerializableFieldName;
    let exceptionMetaSerializableFieldsLeft;
    let exceptionMetaSerializableInit;
    let exceptionMetaSerializableNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("exception_meta_serializable");
    switch (constructor) {
        case "exception_meta_serializable":
            exceptionMetaSerializableInit = defaultExceptionMetaSerializable();
            [
                exceptionMetaSerializableFieldsLeft,
                exceptionMetaSerializableBuilder
            ] = [numFields, exceptionMetaSerializableInit];
            while (-1 < exceptionMetaSerializableFieldsLeft) {
                if (0 < exceptionMetaSerializableFieldsLeft) {
                    exceptionMetaSerializableNewFieldsLeft = exceptionMetaSerializableFieldsLeft;
                }
                else {
                    exceptionMetaSerializableNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < exceptionMetaSerializableNewFieldsLeft) {
                    exceptionMetaSerializableFieldName = dynamicObject.decoderPopField();
                    switch (exceptionMetaSerializableFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "exception_fields":
                            exceptionMetaSerializableExceptionFieldsInit = dynamicObject.decoderPopMap();
                            [
                                exceptionMetaSerializableExceptionFieldsElementsLeft,
                                exceptionMetaSerializableExceptionFieldsMapAcc
                            ] = [exceptionMetaSerializableExceptionFieldsInit, new Map()];
                            while (-1 < exceptionMetaSerializableExceptionFieldsElementsLeft) {
                                if (0 < exceptionMetaSerializableExceptionFieldsElementsLeft) {
                                    exceptionMetaSerializableExceptionFieldsNewFieldsLeft = exceptionMetaSerializableExceptionFieldsElementsLeft;
                                }
                                else {
                                    exceptionMetaSerializableExceptionFieldsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                                }
                                if (0 < exceptionMetaSerializableExceptionFieldsNewFieldsLeft) {
                                    exceptionMetaSerializableExceptionFieldsKey = dynamicObject.decoderPopKey();
                                    exceptionMetaSerializableExceptionFieldsMapValue = dynamicObject.decoderPopString();
                                    exceptionMetaSerializableExceptionFieldsMapAcc.set(exceptionMetaSerializableExceptionFieldsKey, exceptionMetaSerializableExceptionFieldsMapValue);
                                    [
                                        exceptionMetaSerializableExceptionFieldsElementsLeft,
                                        exceptionMetaSerializableExceptionFieldsMapAcc
                                    ] = [
                                        exceptionMetaSerializableExceptionFieldsNewFieldsLeft - 1,
                                        exceptionMetaSerializableExceptionFieldsMapAcc
                                    ];
                                }
                                else {
                                    [
                                        exceptionMetaSerializableExceptionFieldsElementsLeft,
                                        exceptionMetaSerializableExceptionFieldsMapAcc
                                    ] = [-1, exceptionMetaSerializableExceptionFieldsMapAcc];
                                }
                            }
                            exceptionMetaSerializableExceptionFieldsValue = exceptionMetaSerializableExceptionFieldsMapAcc;
                            exceptionMetaSerializableBuilder.exceptionFields = exceptionMetaSerializableExceptionFieldsValue;
                            [
                                exceptionMetaSerializableFieldsLeft,
                                exceptionMetaSerializableBuilder
                            ] = [
                                exceptionMetaSerializableNewFieldsLeft - 1,
                                exceptionMetaSerializableBuilder
                            ];
                            break;
                        case "exception_message":
                            exceptionMetaSerializableExceptionMessageValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionMessage = exceptionMetaSerializableExceptionMessageValue;
                            [
                                exceptionMetaSerializableFieldsLeft,
                                exceptionMetaSerializableBuilder
                            ] = [
                                exceptionMetaSerializableNewFieldsLeft - 1,
                                exceptionMetaSerializableBuilder
                            ];
                            break;
                        case "exception_module":
                            exceptionMetaSerializableExceptionModuleValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionModule = exceptionMetaSerializableExceptionModuleValue;
                            [
                                exceptionMetaSerializableFieldsLeft,
                                exceptionMetaSerializableBuilder
                            ] = [
                                exceptionMetaSerializableNewFieldsLeft - 1,
                                exceptionMetaSerializableBuilder
                            ];
                            break;
                        case "exception_type":
                            exceptionMetaSerializableExceptionTypeValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionType = exceptionMetaSerializableExceptionTypeValue;
                            [
                                exceptionMetaSerializableFieldsLeft,
                                exceptionMetaSerializableBuilder
                            ] = [
                                exceptionMetaSerializableNewFieldsLeft - 1,
                                exceptionMetaSerializableBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [
                        exceptionMetaSerializableFieldsLeft,
                        exceptionMetaSerializableBuilder
                    ] = [-1, exceptionMetaSerializableBuilder];
                }
            }
            return exceptionMetaSerializableBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetExceptionMetaSerializable = dynamicGetExceptionMetaSerializable;
function dynamicGetObjExceptionMetaSerializable(dynamicObject) {
    let retObj;
    retObj = dynamicGetExceptionMetaSerializable(dynamicObject);
    return retObj;
}
exports.dynamicGetObjExceptionMetaSerializable = dynamicGetObjExceptionMetaSerializable;
function dynamicPutExceptionMetaSerializable(dynamicObject, inputObject) {
    let exceptionMetaSerializableFieldExceptionMetaSerializable;
    if (inputObject instanceof ExceptionMetaSerializable) {
        let exceptionMetaSerializableFieldExceptionMetaSerializable = inputObject;
        dynamicObject.encoderPutStruct("exception_meta_serializable", 4);
        dynamicObject.encoderPutField("exception_fields");
        dynamicObject.encoderPutMap(exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields
            .size);
        if (0 ===
            exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields
                .size) {
            dynamicObject.encoderPutValueEnd(true);
        }
        else {
            let exceptionFieldsValuesIndex = 0;
            for (let [exceptionFieldsValuesKey, exceptionFieldsValuesElem] of exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields) {
                dynamicObject.encoderPutKey(exceptionFieldsValuesKey);
                dynamicObject.encoderPutString(exceptionFieldsValuesElem);
                dynamicObject.encoderPutValueEnd(exceptionFieldsValuesIndex ===
                    exceptionMetaSerializableFieldExceptionMetaSerializable
                        .exceptionFields.size -
                        1);
                exceptionFieldsValuesIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("exception_message");
        dynamicObject.encoderPutString(exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionMessage);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("exception_module");
        dynamicObject.encoderPutString(exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionModule);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("exception_type");
        dynamicObject.encoderPutString(exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionType);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutExceptionMetaSerializable = dynamicPutExceptionMetaSerializable;
function defaultExceptionMetaSerializable() {
    let exceptionFieldsVal;
    let exceptionMessageVal;
    let exceptionModuleVal;
    let exceptionTypeVal;
    exceptionFieldsVal = new Map([]);
    exceptionMessageVal = "";
    exceptionModuleVal = "";
    exceptionTypeVal = "";
    return new ExceptionMetaSerializable({
        exceptionFields: exceptionFieldsVal,
        exceptionMessage: exceptionMessageVal,
        exceptionModule: exceptionModuleVal,
        exceptionType: exceptionTypeVal
    });
}
exports.defaultExceptionMetaSerializable = defaultExceptionMetaSerializable;
function describeExceptionMetaSerializable() {
    let exceptionFieldsFieldInfo;
    let exceptionFieldsInnerFieldInfo;
    let exceptionMessageFieldInfo;
    let exceptionMetaSerializableConstructorInfo;
    let exceptionMetaSerializableExceptionFieldsFieldInfo;
    let exceptionMetaSerializableExceptionMessageFieldInfo;
    let exceptionMetaSerializableExceptionModuleFieldInfo;
    let exceptionMetaSerializableExceptionTypeFieldInfo;
    let exceptionModuleFieldInfo;
    let exceptionTypeFieldInfo;
    exceptionFieldsInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionFieldsFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: exceptionFieldsInnerFieldInfo
    });
    exceptionMetaSerializableExceptionFieldsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "exception_fields",
        description: null,
        typeInfo: exceptionFieldsFieldInfo
    });
    exceptionMessageFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionMessageFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "exception_message",
        description: null,
        typeInfo: exceptionMessageFieldInfo
    });
    exceptionModuleFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionModuleFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "exception_module",
        description: null,
        typeInfo: exceptionModuleFieldInfo
    });
    exceptionTypeFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionTypeFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "exception_type",
        description: null,
        typeInfo: exceptionTypeFieldInfo
    });
    exceptionMetaSerializableConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "exception_meta_serializable",
        description: null,
        fields: [
            exceptionMetaSerializableExceptionFieldsFieldInfo,
            exceptionMetaSerializableExceptionMessageFieldInfo,
            exceptionMetaSerializableExceptionModuleFieldInfo,
            exceptionMetaSerializableExceptionTypeFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "exception_meta_serializable",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [exceptionMetaSerializableConstructorInfo]
    });
}
exports.describeExceptionMetaSerializable = describeExceptionMetaSerializable;
function toSerializable(meta) {
    return new ExceptionMetaSerializable({
        exceptionFields: meta.exceptionFields,
        exceptionModule: meta.exceptionModule,
        exceptionType: meta.exceptionType,
        exceptionMessage: meta.exceptionMessage
    });
}
exports.toSerializable = toSerializable;
function toPlainMeta(meta) {
    return new typelayerCommonExceptions.ExceptionMeta({
        exceptionFields: meta.exceptionFields,
        exceptionModule: meta.exceptionModule,
        exceptionType: meta.exceptionType,
        exceptionMessage: meta.exceptionMessage
    });
}
exports.toPlainMeta = toPlainMeta;
