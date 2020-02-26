// Module: schemas.myFirstModule.dynamic
import * as myFirstPackageSchemasMyFirstModuleStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";


export function dynamicGetMyEnumStructure(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure {
    let constructor : string;
    let myEnumIntegerBuilder : myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger;
    let myEnumIntegerFieldName : string;
    let myEnumIntegerFieldsLeft : number;
    let myEnumIntegerInit : myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger;
    let myEnumIntegerMyTextFieldValue : number;
    let myEnumIntegerNewFieldsLeft : number;
    let myEnumTextBuilder : myFirstPackageSchemasMyFirstModuleStructures.MyEnumText;
    let myEnumTextFieldName : string;
    let myEnumTextFieldsLeft : number;
    let myEnumTextInit : myFirstPackageSchemasMyFirstModuleStructures.MyEnumText;
    let myEnumTextMyTextFieldValue : string;
    let myEnumTextNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_enum_integer");
    switch (constructor) {
        case "my_enum_integer":
            myEnumIntegerInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumInteger();
            [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [numFields, myEnumIntegerInit];
            while ((-1 < myEnumIntegerFieldsLeft)) {
                if ((0 < myEnumIntegerFieldsLeft)) {
                    myEnumIntegerNewFieldsLeft = myEnumIntegerFieldsLeft;
                } else {
                    myEnumIntegerNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < myEnumIntegerNewFieldsLeft)) {
                    myEnumIntegerFieldName = dynamicObject.decoderPopField();
                    switch (myEnumIntegerFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "my_text_field":
                            myEnumIntegerMyTextFieldValue = dynamicObject.decoderPopInteger();
                            myEnumIntegerBuilder.myTextField = myEnumIntegerMyTextFieldValue;
                            
                            [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [(myEnumIntegerNewFieldsLeft - 1), myEnumIntegerBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [myEnumIntegerFieldsLeft, myEnumIntegerBuilder] = [-1, myEnumIntegerBuilder];
                }
            }
            return myEnumIntegerBuilder;
            break;
        case "my_enum_text":
            myEnumTextInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumText();
            [myEnumTextFieldsLeft, myEnumTextBuilder] = [numFields, myEnumTextInit];
            while ((-1 < myEnumTextFieldsLeft)) {
                if ((0 < myEnumTextFieldsLeft)) {
                    myEnumTextNewFieldsLeft = myEnumTextFieldsLeft;
                } else {
                    myEnumTextNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < myEnumTextNewFieldsLeft)) {
                    myEnumTextFieldName = dynamicObject.decoderPopField();
                    switch (myEnumTextFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "my_text_field":
                            myEnumTextMyTextFieldValue = dynamicObject.decoderPopString();
                            myEnumTextBuilder.myTextField = myEnumTextMyTextFieldValue;
                            
                            [myEnumTextFieldsLeft, myEnumTextBuilder] = [(myEnumTextNewFieldsLeft - 1), myEnumTextBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [myEnumTextFieldsLeft, myEnumTextBuilder] = [-1, myEnumTextBuilder];
                }
            }
            return myEnumTextBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMyEnumStructure(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure {
    let retObj : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    retObj = dynamicGetMyEnumStructure(dynamicObject);
    return retObj;
}

export function dynamicPutMyEnumStructure(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure): void {
    let myEnumStructureFieldMyEnumInteger : myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger;
    let myEnumStructureFieldMyEnumText : myFirstPackageSchemasMyFirstModuleStructures.MyEnumText;
    if (inputObject instanceof myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger) {
        let myEnumStructureFieldMyEnumInteger = inputObject;
        dynamicObject.encoderPutStruct("my_enum_integer", 1);
        dynamicObject.encoderPutField("my_text_field");
        dynamicObject.encoderPutInteger(myEnumStructureFieldMyEnumInteger.myTextField);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else if (inputObject instanceof myFirstPackageSchemasMyFirstModuleStructures.MyEnumText) {
        let myEnumStructureFieldMyEnumText = inputObject;
        dynamicObject.encoderPutStruct("my_enum_text", 1);
        dynamicObject.encoderPutField("my_text_field");
        dynamicObject.encoderPutString(myEnumStructureFieldMyEnumText.myTextField);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}

export function dynamicGetMyFirstStructure(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure {
    let constructor : string;
    let myFirstStructureBuilder : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    let myFirstStructureFieldName : string;
    let myFirstStructureFieldsLeft : number;
    let myFirstStructureInit : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    let myFirstStructureMyBooleanFieldValue : boolean;
    let myFirstStructureMyDoubleFieldValue : number;
    let myFirstStructureMyIntegerFieldValue : number;
    let myFirstStructureMyListFieldElementsLeft : number;
    let myFirstStructureMyListFieldInit : number;
    let myFirstStructureMyListFieldListAcc : Array<string>;
    let myFirstStructureMyListFieldListValue : string;
    let myFirstStructureMyListFieldNewFieldsLeft : number;
    let myFirstStructureMyListFieldValue : Array<string>;
    let myFirstStructureMyMapFieldElementsLeft : number;
    let myFirstStructureMyMapFieldInit : number;
    let myFirstStructureMyMapFieldKey : string;
    let myFirstStructureMyMapFieldMapAcc : Map<string, string>;
    let myFirstStructureMyMapFieldMapValue : string;
    let myFirstStructureMyMapFieldNewFieldsLeft : number;
    let myFirstStructureMyMapFieldValue : Map<string, string>;
    let myFirstStructureMyNestedFieldValue : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    let myFirstStructureMyTextFieldValue : string;
    let myFirstStructureNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_structure");
    switch (constructor) {
        case "my_first_structure":
            myFirstStructureInit = myFirstPackageSchemasMyFirstModuleStructures.defaultMyFirstStructure();
            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [numFields, myFirstStructureInit];
            while ((-1 < myFirstStructureFieldsLeft)) {
                if ((0 < myFirstStructureFieldsLeft)) {
                    myFirstStructureNewFieldsLeft = myFirstStructureFieldsLeft;
                } else {
                    myFirstStructureNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < myFirstStructureNewFieldsLeft)) {
                    myFirstStructureFieldName = dynamicObject.decoderPopField();
                    switch (myFirstStructureFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "my_boolean_field":
                            myFirstStructureMyBooleanFieldValue = dynamicObject.decoderPopBool();
                            myFirstStructureBuilder.myBooleanField = myFirstStructureMyBooleanFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_double_field":
                            myFirstStructureMyDoubleFieldValue = dynamicObject.decoderPopDouble();
                            myFirstStructureBuilder.myDoubleField = myFirstStructureMyDoubleFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_integer_field":
                            myFirstStructureMyIntegerFieldValue = dynamicObject.decoderPopInteger();
                            myFirstStructureBuilder.myIntegerField = myFirstStructureMyIntegerFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_list_field":
                            myFirstStructureMyListFieldInit = dynamicObject.decoderPopList();
                            [myFirstStructureMyListFieldElementsLeft, myFirstStructureMyListFieldListAcc] = [myFirstStructureMyListFieldInit, []];
                            while ((-1 < myFirstStructureMyListFieldElementsLeft)) {
                                if ((0 < myFirstStructureMyListFieldElementsLeft)) {
                                    myFirstStructureMyListFieldNewFieldsLeft = myFirstStructureMyListFieldElementsLeft;
                                } else {
                                    myFirstStructureMyListFieldNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if ((0 < myFirstStructureMyListFieldNewFieldsLeft)) {
                                    myFirstStructureMyListFieldListValue = dynamicObject.decoderPopString();
                                    myFirstStructureMyListFieldListAcc.push(myFirstStructureMyListFieldListValue);
                                    
                                    [myFirstStructureMyListFieldElementsLeft, myFirstStructureMyListFieldListAcc] = [(myFirstStructureMyListFieldNewFieldsLeft - 1), myFirstStructureMyListFieldListAcc];
                                } else {
                                    [myFirstStructureMyListFieldElementsLeft, myFirstStructureMyListFieldListAcc] = [-1, myFirstStructureMyListFieldListAcc];
                                }
                            }
                            myFirstStructureMyListFieldValue = myFirstStructureMyListFieldListAcc;
                            myFirstStructureBuilder.myListField = myFirstStructureMyListFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_map_field":
                            myFirstStructureMyMapFieldInit = dynamicObject.decoderPopMap();
                            [myFirstStructureMyMapFieldElementsLeft, myFirstStructureMyMapFieldMapAcc] = [myFirstStructureMyMapFieldInit, new Map()];
                            while ((-1 < myFirstStructureMyMapFieldElementsLeft)) {
                                if ((0 < myFirstStructureMyMapFieldElementsLeft)) {
                                    myFirstStructureMyMapFieldNewFieldsLeft = myFirstStructureMyMapFieldElementsLeft;
                                } else {
                                    myFirstStructureMyMapFieldNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                                }
                                if ((0 < myFirstStructureMyMapFieldNewFieldsLeft)) {
                                    myFirstStructureMyMapFieldKey = dynamicObject.decoderPopKey();
                                    myFirstStructureMyMapFieldMapValue = dynamicObject.decoderPopString();
                                    myFirstStructureMyMapFieldMapAcc.set(myFirstStructureMyMapFieldKey, myFirstStructureMyMapFieldMapValue);
                                    
                                    [myFirstStructureMyMapFieldElementsLeft, myFirstStructureMyMapFieldMapAcc] = [(myFirstStructureMyMapFieldNewFieldsLeft - 1), myFirstStructureMyMapFieldMapAcc];
                                } else {
                                    [myFirstStructureMyMapFieldElementsLeft, myFirstStructureMyMapFieldMapAcc] = [-1, myFirstStructureMyMapFieldMapAcc];
                                }
                            }
                            myFirstStructureMyMapFieldValue = myFirstStructureMyMapFieldMapAcc;
                            myFirstStructureBuilder.myMapField = myFirstStructureMyMapFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_nested_field":
                            myFirstStructureMyNestedFieldValue = dynamicGetMyEnumStructure(dynamicObject);
                            myFirstStructureBuilder.myNestedField = myFirstStructureMyNestedFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        case "my_text_field":
                            myFirstStructureMyTextFieldValue = dynamicObject.decoderPopString();
                            myFirstStructureBuilder.myTextField = myFirstStructureMyTextFieldValue;
                            
                            [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [(myFirstStructureNewFieldsLeft - 1), myFirstStructureBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [myFirstStructureFieldsLeft, myFirstStructureBuilder] = [-1, myFirstStructureBuilder];
                }
            }
            return myFirstStructureBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMyFirstStructure(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure {
    let retObj : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    retObj = dynamicGetMyFirstStructure(dynamicObject);
    return retObj;
}

export function dynamicPutMyFirstStructure(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure): void {
    let myFirstStructureFieldMyFirstStructure : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    if (inputObject instanceof myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure) {
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
        if ((0 === myFirstStructureFieldMyFirstStructure.myListField.length)) {
            dynamicObject.encoderPutElementEnd(true);
        } else {
            let myListFieldIndex : number = 0;
            for (let myListFieldElem of myFirstStructureFieldMyFirstStructure.myListField) {
                dynamicObject.encoderPutString(myListFieldElem);
                dynamicObject.encoderPutElementEnd((myListFieldIndex === (myFirstStructureFieldMyFirstStructure.myListField.length - 1)));
                
                myListFieldIndex++;
            }
            
        }
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("my_map_field");
        dynamicObject.encoderPutMap(myFirstStructureFieldMyFirstStructure.myMapField.size);
        if ((0 === myFirstStructureFieldMyFirstStructure.myMapField.size)) {
            dynamicObject.encoderPutValueEnd(true);
        } else {
            let myMapFieldValuesIndex : number = 0;
            for (let [myMapFieldValuesKey, myMapFieldValuesElem] of myFirstStructureFieldMyFirstStructure.myMapField) {
                dynamicObject.encoderPutKey(myMapFieldValuesKey);
                dynamicObject.encoderPutString(myMapFieldValuesElem);
                dynamicObject.encoderPutValueEnd((myMapFieldValuesIndex === (myFirstStructureFieldMyFirstStructure.myMapField.size - 1)));
                
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
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}