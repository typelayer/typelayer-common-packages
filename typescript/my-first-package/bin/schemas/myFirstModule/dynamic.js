"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.myFirstModule.dynamic
const myFirstPackageSchemasMyFirstModuleStructures = __importStar(require("./structures"));
const typelayerCommonDynamic = __importStar(require("typelayer-common"));
function dynamicGetMyEnumStructure(dynamicObject) {
    let constructor;
    let myEnumIntegerBuilder;
    let myEnumIntegerFieldName;
    let myEnumIntegerFieldsLeft;
    let myEnumIntegerInit;
    let myEnumIntegerMyTextFieldValue;
    let myEnumIntegerNewFieldsLeft;
    let myEnumTextBuilder;
    let myEnumTextFieldName;
    let myEnumTextFieldsLeft;
    let myEnumTextInit;
    let myEnumTextMyTextFieldValue;
    let myEnumTextNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_enum_integer");
    switch (constructor) {
        case "my_enum_integer":
            myEnumIntegerInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumInteger();
            [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [
                numFields,
                myEnumIntegerInit
            ];
            while (-1 < myEnumIntegerFieldsLeft) {
                if (0 < myEnumIntegerFieldsLeft) {
                    myEnumIntegerNewFieldsLeft = myEnumIntegerFieldsLeft;
                }
                else {
                    myEnumIntegerNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < myEnumIntegerNewFieldsLeft) {
                    myEnumIntegerFieldName = dynamicObject.decoderPopField();
                    switch (myEnumIntegerFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "my_text_field":
                            myEnumIntegerMyTextFieldValue = dynamicObject.decoderPopInteger();
                            myEnumIntegerBuilder.myTextField = myEnumIntegerMyTextFieldValue;
                            [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [
                                myEnumIntegerNewFieldsLeft - 1,
                                myEnumIntegerBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [
                        -1,
                        myEnumIntegerBuilder
                    ];
                }
            }
            return myEnumIntegerBuilder;
            break;
        case "my_enum_text":
            myEnumTextInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumText();
            [myEnumTextFieldsLeft, myEnumTextBuilder] = [numFields, myEnumTextInit];
            while (-1 < myEnumTextFieldsLeft) {
                if (0 < myEnumTextFieldsLeft) {
                    myEnumTextNewFieldsLeft = myEnumTextFieldsLeft;
                }
                else {
                    myEnumTextNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < myEnumTextNewFieldsLeft) {
                    myEnumTextFieldName = dynamicObject.decoderPopField();
                    switch (myEnumTextFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "my_text_field":
                            myEnumTextMyTextFieldValue = dynamicObject.decoderPopString();
                            myEnumTextBuilder.myTextField = myEnumTextMyTextFieldValue;
                            [myEnumTextFieldsLeft, myEnumTextBuilder] = [
                                myEnumTextNewFieldsLeft - 1,
                                myEnumTextBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [myEnumTextFieldsLeft, myEnumTextBuilder] = [-1, myEnumTextBuilder];
                }
            }
            return myEnumTextBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMyEnumStructure = dynamicGetMyEnumStructure;
function dynamicGetObjMyEnumStructure(dynamicObject) {
    let retObj;
    retObj = dynamicGetMyEnumStructure(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMyEnumStructure = dynamicGetObjMyEnumStructure;
function dynamicPutMyEnumStructure(dynamicObject, inputObject) {
    let myEnumStructureFieldMyEnumInteger;
    let myEnumStructureFieldMyEnumText;
    if (inputObject instanceof
        myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger) {
        let myEnumStructureFieldMyEnumInteger = inputObject;
        dynamicObject.encoderPutStruct("my_enum_integer", 1);
        dynamicObject.encoderPutField("my_text_field");
        dynamicObject.encoderPutInteger(myEnumStructureFieldMyEnumInteger.myTextField);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else if (inputObject instanceof
        myFirstPackageSchemasMyFirstModuleStructures.MyEnumText) {
        let myEnumStructureFieldMyEnumText = inputObject;
        dynamicObject.encoderPutStruct("my_enum_text", 1);
        dynamicObject.encoderPutField("my_text_field");
        dynamicObject.encoderPutString(myEnumStructureFieldMyEnumText.myTextField);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMyEnumStructure = dynamicPutMyEnumStructure;
function dynamicGetMyFirstStructure(dynamicObject) {
    let constructor;
    let myFirstStructureBuilder;
    let myFirstStructureFieldName;
    let myFirstStructureFieldsLeft;
    let myFirstStructureInit;
    let myFirstStructureMyBooleanFieldValue;
    let myFirstStructureMyDoubleFieldValue;
    let myFirstStructureMyIntegerFieldValue;
    let myFirstStructureMyListFieldElementsLeft;
    let myFirstStructureMyListFieldInit;
    let myFirstStructureMyListFieldListAcc;
    let myFirstStructureMyListFieldListValue;
    let myFirstStructureMyListFieldNewFieldsLeft;
    let myFirstStructureMyListFieldValue;
    let myFirstStructureMyMapFieldElementsLeft;
    let myFirstStructureMyMapFieldInit;
    let myFirstStructureMyMapFieldKey;
    let myFirstStructureMyMapFieldMapAcc;
    let myFirstStructureMyMapFieldMapValue;
    let myFirstStructureMyMapFieldNewFieldsLeft;
    let myFirstStructureMyMapFieldValue;
    let myFirstStructureMyNestedFieldValue;
    let myFirstStructureMyTextFieldValue;
    let myFirstStructureNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_structure");
    switch (constructor) {
        case "my_first_structure":
            myFirstStructureInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyFirstStructure();
            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                numFields,
                myFirstStructureInit
            ];
            while (-1 < myFirstStructureFieldsLeft) {
                if (0 < myFirstStructureFieldsLeft) {
                    myFirstStructureNewFieldsLeft = myFirstStructureFieldsLeft;
                }
                else {
                    myFirstStructureNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < myFirstStructureNewFieldsLeft) {
                    myFirstStructureFieldName = dynamicObject.decoderPopField();
                    switch (myFirstStructureFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "my_boolean_field":
                            myFirstStructureMyBooleanFieldValue = dynamicObject.decoderPopBool();
                            myFirstStructureBuilder.myBooleanField = myFirstStructureMyBooleanFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_double_field":
                            myFirstStructureMyDoubleFieldValue = dynamicObject.decoderPopDouble();
                            myFirstStructureBuilder.myDoubleField = myFirstStructureMyDoubleFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_integer_field":
                            myFirstStructureMyIntegerFieldValue = dynamicObject.decoderPopInteger();
                            myFirstStructureBuilder.myIntegerField = myFirstStructureMyIntegerFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_list_field":
                            myFirstStructureMyListFieldInit = dynamicObject.decoderPopList();
                            [
                                myFirstStructureMyListFieldElementsLeft,
                                myFirstStructureMyListFieldListAcc
                            ] = [myFirstStructureMyListFieldInit, []];
                            while (-1 < myFirstStructureMyListFieldElementsLeft) {
                                if (0 < myFirstStructureMyListFieldElementsLeft) {
                                    myFirstStructureMyListFieldNewFieldsLeft = myFirstStructureMyListFieldElementsLeft;
                                }
                                else {
                                    myFirstStructureMyListFieldNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if (0 < myFirstStructureMyListFieldNewFieldsLeft) {
                                    myFirstStructureMyListFieldListValue = dynamicObject.decoderPopString();
                                    myFirstStructureMyListFieldListAcc.push(myFirstStructureMyListFieldListValue);
                                    [
                                        myFirstStructureMyListFieldElementsLeft,
                                        myFirstStructureMyListFieldListAcc
                                    ] = [
                                        myFirstStructureMyListFieldNewFieldsLeft - 1,
                                        myFirstStructureMyListFieldListAcc
                                    ];
                                }
                                else {
                                    [
                                        myFirstStructureMyListFieldElementsLeft,
                                        myFirstStructureMyListFieldListAcc
                                    ] = [-1, myFirstStructureMyListFieldListAcc];
                                }
                            }
                            myFirstStructureMyListFieldValue = myFirstStructureMyListFieldListAcc;
                            myFirstStructureBuilder.myListField = myFirstStructureMyListFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_map_field":
                            myFirstStructureMyMapFieldInit = dynamicObject.decoderPopMap();
                            [
                                myFirstStructureMyMapFieldElementsLeft,
                                myFirstStructureMyMapFieldMapAcc
                            ] = [myFirstStructureMyMapFieldInit, new Map()];
                            while (-1 < myFirstStructureMyMapFieldElementsLeft) {
                                if (0 < myFirstStructureMyMapFieldElementsLeft) {
                                    myFirstStructureMyMapFieldNewFieldsLeft = myFirstStructureMyMapFieldElementsLeft;
                                }
                                else {
                                    myFirstStructureMyMapFieldNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                                }
                                if (0 < myFirstStructureMyMapFieldNewFieldsLeft) {
                                    myFirstStructureMyMapFieldKey = dynamicObject.decoderPopKey();
                                    myFirstStructureMyMapFieldMapValue = dynamicObject.decoderPopString();
                                    myFirstStructureMyMapFieldMapAcc.set(myFirstStructureMyMapFieldKey, myFirstStructureMyMapFieldMapValue);
                                    [
                                        myFirstStructureMyMapFieldElementsLeft,
                                        myFirstStructureMyMapFieldMapAcc
                                    ] = [
                                        myFirstStructureMyMapFieldNewFieldsLeft - 1,
                                        myFirstStructureMyMapFieldMapAcc
                                    ];
                                }
                                else {
                                    [
                                        myFirstStructureMyMapFieldElementsLeft,
                                        myFirstStructureMyMapFieldMapAcc
                                    ] = [-1, myFirstStructureMyMapFieldMapAcc];
                                }
                            }
                            myFirstStructureMyMapFieldValue = myFirstStructureMyMapFieldMapAcc;
                            myFirstStructureBuilder.myMapField = myFirstStructureMyMapFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_nested_field":
                            myFirstStructureMyNestedFieldValue = dynamicGetMyEnumStructure(dynamicObject);
                            myFirstStructureBuilder.myNestedField = myFirstStructureMyNestedFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        case "my_text_field":
                            myFirstStructureMyTextFieldValue = dynamicObject.decoderPopString();
                            myFirstStructureBuilder.myTextField = myFirstStructureMyTextFieldValue;
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                                myFirstStructureNewFieldsLeft - 1,
                                myFirstStructureBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [
                        -1,
                        myFirstStructureBuilder
                    ];
                }
            }
            return myFirstStructureBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMyFirstStructure = dynamicGetMyFirstStructure;
function dynamicGetObjMyFirstStructure(dynamicObject) {
    let retObj;
    retObj = dynamicGetMyFirstStructure(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMyFirstStructure = dynamicGetObjMyFirstStructure;
function dynamicPutMyFirstStructure(dynamicObject, inputObject) {
    let myFirstStructureFieldMyFirstStructure;
    if (inputObject instanceof
        myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure) {
        let myFirstStructureFieldMyFirstStructure = inputObject;
        dynamicObject.encoderPutStruct("my_first_structure", 7);
        dynamicObject.encoderPutField("my_boolean_field");
        dynamicObject.encoderPutBool(myFirstStructureFieldMyFirstStructure.myBooleanField);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_double_field");
        dynamicObject.encoderPutDouble(myFirstStructureFieldMyFirstStructure.myDoubleField);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_integer_field");
        dynamicObject.encoderPutInteger(myFirstStructureFieldMyFirstStructure.myIntegerField);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_list_field");
        dynamicObject.encoderPutList(myFirstStructureFieldMyFirstStructure.myListField.length);
        if (0 === myFirstStructureFieldMyFirstStructure.myListField.length) {
            dynamicObject.encoderPutElementEnd(true);
        }
        else {
            let myListFieldIndex = 0;
            for (let myListFieldElem of myFirstStructureFieldMyFirstStructure.myListField) {
                dynamicObject.encoderPutString(myListFieldElem);
                dynamicObject.encoderPutElementEnd(myListFieldIndex ===
                    myFirstStructureFieldMyFirstStructure.myListField.length - 1);
                myListFieldIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_map_field");
        dynamicObject.encoderPutMap(myFirstStructureFieldMyFirstStructure.myMapField.size);
        if (0 === myFirstStructureFieldMyFirstStructure.myMapField.size) {
            dynamicObject.encoderPutValueEnd(true);
        }
        else {
            let myMapFieldValuesIndex = 0;
            for (let [myMapFieldValuesKey, myMapFieldValuesElem] of myFirstStructureFieldMyFirstStructure.myMapField) {
                dynamicObject.encoderPutKey(myMapFieldValuesKey);
                dynamicObject.encoderPutString(myMapFieldValuesElem);
                dynamicObject.encoderPutValueEnd(myMapFieldValuesIndex ===
                    myFirstStructureFieldMyFirstStructure.myMapField.size - 1);
                myMapFieldValuesIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_nested_field");
        dynamicPutMyEnumStructure(dynamicObject, myFirstStructureFieldMyFirstStructure.myNestedField);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_text_field");
        dynamicObject.encoderPutString(myFirstStructureFieldMyFirstStructure.myTextField);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMyFirstStructure = dynamicPutMyFirstStructure;
