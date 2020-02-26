// Module: exceptionsEncoding
import * as typelayerCommonDocumentation from "./documentation";
import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonExceptions from "./exceptions";


export class ExceptionMetaSerializable {
    exceptionFields: Map<string, string>;
    exceptionMessage: string;
    exceptionModule: string;
    exceptionType: string;
    constructor(arg: {exceptionFields: Map<string, string>; exceptionMessage: string; exceptionModule: string; exceptionType: string;}) {
        Object.assign(this, arg);
    }
}

export function dynamicGetExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Decoder): ExceptionMetaSerializable {
    let constructor : string;
    let exceptionMetaSerializableBuilder : ExceptionMetaSerializable;
    let exceptionMetaSerializableExceptionFieldsElementsLeft : number;
    let exceptionMetaSerializableExceptionFieldsInit : number;
    let exceptionMetaSerializableExceptionFieldsKey : string;
    let exceptionMetaSerializableExceptionFieldsMapAcc : Map<string, string>;
    let exceptionMetaSerializableExceptionFieldsMapValue : string;
    let exceptionMetaSerializableExceptionFieldsNewFieldsLeft : number;
    let exceptionMetaSerializableExceptionFieldsValue : Map<string, string>;
    let exceptionMetaSerializableExceptionMessageValue : string;
    let exceptionMetaSerializableExceptionModuleValue : string;
    let exceptionMetaSerializableExceptionTypeValue : string;
    let exceptionMetaSerializableFieldName : string;
    let exceptionMetaSerializableFieldsLeft : number;
    let exceptionMetaSerializableInit : ExceptionMetaSerializable;
    let exceptionMetaSerializableNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("exception_meta_serializable");
    switch (constructor) {
        case "exception_meta_serializable":
            exceptionMetaSerializableInit = defaultExceptionMetaSerializable();
            [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [numFields, exceptionMetaSerializableInit];
            while ((-1 < exceptionMetaSerializableFieldsLeft)) {
                if ((0 < exceptionMetaSerializableFieldsLeft)) {
                    exceptionMetaSerializableNewFieldsLeft = exceptionMetaSerializableFieldsLeft;
                } else {
                    exceptionMetaSerializableNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < exceptionMetaSerializableNewFieldsLeft)) {
                    exceptionMetaSerializableFieldName = dynamicObject.decoderPopField();
                    switch (exceptionMetaSerializableFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "exception_fields":
                            exceptionMetaSerializableExceptionFieldsInit = dynamicObject.decoderPopMap();
                            [exceptionMetaSerializableExceptionFieldsElementsLeft, exceptionMetaSerializableExceptionFieldsMapAcc] = [exceptionMetaSerializableExceptionFieldsInit, new Map()];
                            while ((-1 < exceptionMetaSerializableExceptionFieldsElementsLeft)) {
                                if ((0 < exceptionMetaSerializableExceptionFieldsElementsLeft)) {
                                    exceptionMetaSerializableExceptionFieldsNewFieldsLeft = exceptionMetaSerializableExceptionFieldsElementsLeft;
                                } else {
                                    exceptionMetaSerializableExceptionFieldsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                                }
                                if ((0 < exceptionMetaSerializableExceptionFieldsNewFieldsLeft)) {
                                    exceptionMetaSerializableExceptionFieldsKey = dynamicObject.decoderPopKey();
                                    exceptionMetaSerializableExceptionFieldsMapValue = dynamicObject.decoderPopString();
                                    exceptionMetaSerializableExceptionFieldsMapAcc.set(exceptionMetaSerializableExceptionFieldsKey, exceptionMetaSerializableExceptionFieldsMapValue);
                                    
                                    [exceptionMetaSerializableExceptionFieldsElementsLeft, exceptionMetaSerializableExceptionFieldsMapAcc] = [(exceptionMetaSerializableExceptionFieldsNewFieldsLeft - 1), exceptionMetaSerializableExceptionFieldsMapAcc];
                                } else {
                                    [exceptionMetaSerializableExceptionFieldsElementsLeft, exceptionMetaSerializableExceptionFieldsMapAcc] = [-1, exceptionMetaSerializableExceptionFieldsMapAcc];
                                }
                            }
                            exceptionMetaSerializableExceptionFieldsValue = exceptionMetaSerializableExceptionFieldsMapAcc;
                            exceptionMetaSerializableBuilder.exceptionFields = exceptionMetaSerializableExceptionFieldsValue;
                            
                            [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [(exceptionMetaSerializableNewFieldsLeft - 1), exceptionMetaSerializableBuilder];
                            break;
                        case "exception_message":
                            exceptionMetaSerializableExceptionMessageValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionMessage = exceptionMetaSerializableExceptionMessageValue;
                            
                            [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [(exceptionMetaSerializableNewFieldsLeft - 1), exceptionMetaSerializableBuilder];
                            break;
                        case "exception_module":
                            exceptionMetaSerializableExceptionModuleValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionModule = exceptionMetaSerializableExceptionModuleValue;
                            
                            [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [(exceptionMetaSerializableNewFieldsLeft - 1), exceptionMetaSerializableBuilder];
                            break;
                        case "exception_type":
                            exceptionMetaSerializableExceptionTypeValue = dynamicObject.decoderPopString();
                            exceptionMetaSerializableBuilder.exceptionType = exceptionMetaSerializableExceptionTypeValue;
                            
                            [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [(exceptionMetaSerializableNewFieldsLeft - 1), exceptionMetaSerializableBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [exceptionMetaSerializableFieldsLeft, exceptionMetaSerializableBuilder] = [-1, exceptionMetaSerializableBuilder];
                }
            }
            return exceptionMetaSerializableBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Decoder): ExceptionMetaSerializable {
    let retObj : ExceptionMetaSerializable;
    retObj = dynamicGetExceptionMetaSerializable(dynamicObject);
    return retObj;
}

export function dynamicPutExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: ExceptionMetaSerializable): void {
    let exceptionMetaSerializableFieldExceptionMetaSerializable : ExceptionMetaSerializable;
    if (inputObject instanceof ExceptionMetaSerializable) {
        let exceptionMetaSerializableFieldExceptionMetaSerializable = inputObject;
        dynamicObject.encoderPutStruct("exception_meta_serializable", 4);
        dynamicObject.encoderPutField("exception_fields");
        dynamicObject.encoderPutMap(exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields.size);
        if ((0 === exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields.size)) {
            dynamicObject.encoderPutValueEnd(true);
        } else {
            let exceptionFieldsValuesIndex : number = 0;
            for (let [exceptionFieldsValuesKey, exceptionFieldsValuesElem] of exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields) {
                dynamicObject.encoderPutKey(exceptionFieldsValuesKey);
                dynamicObject.encoderPutString(exceptionFieldsValuesElem);
                dynamicObject.encoderPutValueEnd((exceptionFieldsValuesIndex === (exceptionMetaSerializableFieldExceptionMetaSerializable.exceptionFields.size - 1)));
                
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
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}

export function defaultExceptionMetaSerializable(): ExceptionMetaSerializable {
    let exceptionFieldsVal : Map<string, string>;
    let exceptionMessageVal : string;
    let exceptionModuleVal : string;
    let exceptionTypeVal : string;
    exceptionFieldsVal = new Map([]);
    exceptionMessageVal = "";
    exceptionModuleVal = "";
    exceptionTypeVal = "";
    return new ExceptionMetaSerializable({exceptionFields: exceptionFieldsVal, exceptionMessage: exceptionMessageVal, exceptionModule: exceptionModuleVal, exceptionType: exceptionTypeVal});
}

export function describeExceptionMetaSerializable(): typelayerCommonDocumentation.StructureInfo {
    let exceptionFieldsFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let exceptionFieldsInnerFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let exceptionMessageFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let exceptionMetaSerializableConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let exceptionMetaSerializableExceptionFieldsFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let exceptionMetaSerializableExceptionMessageFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let exceptionMetaSerializableExceptionModuleFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let exceptionMetaSerializableExceptionTypeFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let exceptionModuleFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let exceptionTypeFieldInfo : typelayerCommonDocumentation.TypeInfo;
    exceptionFieldsInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionFieldsFieldInfo = new typelayerCommonDocumentation.TlMap({mapInner: exceptionFieldsInnerFieldInfo});
    exceptionMetaSerializableExceptionFieldsFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "exception_fields", description: null, typeInfo: exceptionFieldsFieldInfo});
    exceptionMessageFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionMessageFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "exception_message", description: null, typeInfo: exceptionMessageFieldInfo});
    exceptionModuleFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionModuleFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "exception_module", description: null, typeInfo: exceptionModuleFieldInfo});
    exceptionTypeFieldInfo = new typelayerCommonDocumentation.TlText({});
    exceptionMetaSerializableExceptionTypeFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "exception_type", description: null, typeInfo: exceptionTypeFieldInfo});
    exceptionMetaSerializableConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "exception_meta_serializable", description: null, fields: [exceptionMetaSerializableExceptionFieldsFieldInfo, exceptionMetaSerializableExceptionMessageFieldInfo, exceptionMetaSerializableExceptionModuleFieldInfo, exceptionMetaSerializableExceptionTypeFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "exception_meta_serializable", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [exceptionMetaSerializableConstructorInfo]});
}

export function toSerializable(meta: typelayerCommonExceptions.ExceptionMeta): ExceptionMetaSerializable {

    return new ExceptionMetaSerializable({exceptionFields: meta.exceptionFields, exceptionModule: meta.exceptionModule, exceptionType: meta.exceptionType, exceptionMessage: meta.exceptionMessage});
}

export function toPlainMeta(meta: ExceptionMetaSerializable): typelayerCommonExceptions.ExceptionMeta {

    return new typelayerCommonExceptions.ExceptionMeta({exceptionFields: meta.exceptionFields, exceptionModule: meta.exceptionModule, exceptionType: meta.exceptionType, exceptionMessage: meta.exceptionMessage});
}