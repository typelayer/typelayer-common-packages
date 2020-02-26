// Module: services.myFirstService.dynamic
import * as myFirstPackageSchemasMyFirstModuleDynamic from "../../schemas/myFirstModule/dynamic";
import * as myFirstPackageSchemasMyFirstModuleStructures from "../../schemas/myFirstModule/structures";
import * as myFirstPackageServicesMyFirstServiceStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";


export function dynamicGetMyFirstFunctionInput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput {
    let constructor : string;
    let myFirstFunctionInputBuilder : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput;
    let myFirstFunctionInputFieldName : string;
    let myFirstFunctionInputFieldsLeft : number;
    let myFirstFunctionInputInit : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput;
    let myFirstFunctionInputMyFirstArgumentValue : string;
    let myFirstFunctionInputNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_function_input");
    switch (constructor) {
        case "my_first_function_input":
            myFirstFunctionInputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMyFirstFunctionInput();
            [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [numFields, myFirstFunctionInputInit];
            while ((-1 < myFirstFunctionInputFieldsLeft)) {
                if ((0 < myFirstFunctionInputFieldsLeft)) {
                    myFirstFunctionInputNewFieldsLeft = myFirstFunctionInputFieldsLeft;
                } else {
                    myFirstFunctionInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < myFirstFunctionInputNewFieldsLeft)) {
                    myFirstFunctionInputFieldName = dynamicObject.decoderPopField();
                    switch (myFirstFunctionInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "my_first_argument":
                            myFirstFunctionInputMyFirstArgumentValue = dynamicObject.decoderPopString();
                            myFirstFunctionInputBuilder.myFirstArgument = myFirstFunctionInputMyFirstArgumentValue;
                            
                            [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [(myFirstFunctionInputNewFieldsLeft - 1), myFirstFunctionInputBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [-1, myFirstFunctionInputBuilder];
                }
            }
            return myFirstFunctionInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMyFirstFunctionInput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput {
    let retObj : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput;
    retObj = dynamicGetMyFirstFunctionInput(dynamicObject);
    return retObj;
}

export function dynamicPutMyFirstFunctionInput(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput): void {
    let myFirstFunctionInputFieldMyFirstFunctionInput : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput;
    if (inputObject instanceof myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput) {
        let myFirstFunctionInputFieldMyFirstFunctionInput = inputObject;
        dynamicObject.encoderPutStruct("my_first_function_input", 1);
        dynamicObject.encoderPutField("my_first_argument");
        dynamicObject.encoderPutString(myFirstFunctionInputFieldMyFirstFunctionInput.myFirstArgument);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}

export function dynamicGetMyFirstFunctionOutput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput {
    let constructor : string;
    let myFirstFunctionOutputBuilder : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput;
    let myFirstFunctionOutputFieldName : string;
    let myFirstFunctionOutputFieldsLeft : number;
    let myFirstFunctionOutputInit : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput;
    let myFirstFunctionOutputMyFirstReturnValue : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    let myFirstFunctionOutputNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_function_output");
    switch (constructor) {
        case "my_first_function_output":
            myFirstFunctionOutputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMyFirstFunctionOutput();
            [myFirstFunctionOutputFieldsLeft, myFirstFunctionOutputBuilder] = [numFields, myFirstFunctionOutputInit];
            while ((-1 < myFirstFunctionOutputFieldsLeft)) {
                if ((0 < myFirstFunctionOutputFieldsLeft)) {
                    myFirstFunctionOutputNewFieldsLeft = myFirstFunctionOutputFieldsLeft;
                } else {
                    myFirstFunctionOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < myFirstFunctionOutputNewFieldsLeft)) {
                    myFirstFunctionOutputFieldName = dynamicObject.decoderPopField();
                    switch (myFirstFunctionOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "my_first_return":
                            myFirstFunctionOutputMyFirstReturnValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetMyFirstStructure(dynamicObject);
                            myFirstFunctionOutputBuilder.myFirstReturn = myFirstFunctionOutputMyFirstReturnValue;
                            
                            [myFirstFunctionOutputFieldsLeft, myFirstFunctionOutputBuilder] = [(myFirstFunctionOutputNewFieldsLeft - 1), myFirstFunctionOutputBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [myFirstFunctionOutputFieldsLeft, myFirstFunctionOutputBuilder] = [-1, myFirstFunctionOutputBuilder];
                }
            }
            return myFirstFunctionOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMyFirstFunctionOutput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput {
    let retObj : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput;
    retObj = dynamicGetMyFirstFunctionOutput(dynamicObject);
    return retObj;
}

export function dynamicPutMyFirstFunctionOutput(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput): void {
    let myFirstFunctionOutputFieldMyFirstFunctionOutput : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput;
    if (inputObject instanceof myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput) {
        let myFirstFunctionOutputFieldMyFirstFunctionOutput = inputObject;
        dynamicObject.encoderPutStruct("my_first_function_output", 1);
        dynamicObject.encoderPutField("my_first_return");
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(dynamicObject, myFirstFunctionOutputFieldMyFirstFunctionOutput.myFirstReturn);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}

export function dynamicGetMySecondFunctionInput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput {
    let constructor : string;
    let mySecondFunctionInputArgOneValue : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    let mySecondFunctionInputArgTwoValue : string;
    let mySecondFunctionInputBuilder : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput;
    let mySecondFunctionInputFieldName : string;
    let mySecondFunctionInputFieldsLeft : number;
    let mySecondFunctionInputInit : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput;
    let mySecondFunctionInputNewFieldsLeft : number;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_second_function_input");
    switch (constructor) {
        case "my_second_function_input":
            mySecondFunctionInputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMySecondFunctionInput();
            [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [numFields, mySecondFunctionInputInit];
            while ((-1 < mySecondFunctionInputFieldsLeft)) {
                if ((0 < mySecondFunctionInputFieldsLeft)) {
                    mySecondFunctionInputNewFieldsLeft = mySecondFunctionInputFieldsLeft;
                } else {
                    mySecondFunctionInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < mySecondFunctionInputNewFieldsLeft)) {
                    mySecondFunctionInputFieldName = dynamicObject.decoderPopField();
                    switch (mySecondFunctionInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "arg_one":
                            mySecondFunctionInputArgOneValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetMyEnumStructure(dynamicObject);
                            mySecondFunctionInputBuilder.argOne = mySecondFunctionInputArgOneValue;
                            
                            [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [(mySecondFunctionInputNewFieldsLeft - 1), mySecondFunctionInputBuilder];
                            break;
                        case "arg_two":
                            mySecondFunctionInputArgTwoValue = dynamicObject.decoderPopString();
                            mySecondFunctionInputBuilder.argTwo = mySecondFunctionInputArgTwoValue;
                            
                            [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [(mySecondFunctionInputNewFieldsLeft - 1), mySecondFunctionInputBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [-1, mySecondFunctionInputBuilder];
                }
            }
            return mySecondFunctionInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMySecondFunctionInput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput {
    let retObj : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput;
    retObj = dynamicGetMySecondFunctionInput(dynamicObject);
    return retObj;
}

export function dynamicPutMySecondFunctionInput(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput): void {
    let mySecondFunctionInputFieldMySecondFunctionInput : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput;
    if (inputObject instanceof myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput) {
        let mySecondFunctionInputFieldMySecondFunctionInput = inputObject;
        dynamicObject.encoderPutStruct("my_second_function_input", 2);
        dynamicObject.encoderPutField("arg_one");
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(dynamicObject, mySecondFunctionInputFieldMySecondFunctionInput.argOne);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("arg_two");
        dynamicObject.encoderPutString(mySecondFunctionInputFieldMySecondFunctionInput.argTwo);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}

export function dynamicGetMySecondFunctionOutput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput {
    let constructor : string;
    let mySecondFunctionOutputBuilder : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput;
    let mySecondFunctionOutputFieldName : string;
    let mySecondFunctionOutputFieldsLeft : number;
    let mySecondFunctionOutputInit : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput;
    let mySecondFunctionOutputNewFieldsLeft : number;
    let mySecondFunctionOutputRetOneElementsLeft : number;
    let mySecondFunctionOutputRetOneInit : number;
    let mySecondFunctionOutputRetOneListAcc : Array<string>;
    let mySecondFunctionOutputRetOneListValue : string;
    let mySecondFunctionOutputRetOneNewFieldsLeft : number;
    let mySecondFunctionOutputRetOneValue : Array<string>;
    let numFields : number;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_second_function_output");
    switch (constructor) {
        case "my_second_function_output":
            mySecondFunctionOutputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMySecondFunctionOutput();
            [mySecondFunctionOutputFieldsLeft, mySecondFunctionOutputBuilder] = [numFields, mySecondFunctionOutputInit];
            while ((-1 < mySecondFunctionOutputFieldsLeft)) {
                if ((0 < mySecondFunctionOutputFieldsLeft)) {
                    mySecondFunctionOutputNewFieldsLeft = mySecondFunctionOutputFieldsLeft;
                } else {
                    mySecondFunctionOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if ((0 < mySecondFunctionOutputNewFieldsLeft)) {
                    mySecondFunctionOutputFieldName = dynamicObject.decoderPopField();
                    switch (mySecondFunctionOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", {path: dynamicObject.decoderPath()});
                            break;
                        case "ret_one":
                            mySecondFunctionOutputRetOneInit = dynamicObject.decoderPopList();
                            [mySecondFunctionOutputRetOneElementsLeft, mySecondFunctionOutputRetOneListAcc] = [mySecondFunctionOutputRetOneInit, []];
                            while ((-1 < mySecondFunctionOutputRetOneElementsLeft)) {
                                if ((0 < mySecondFunctionOutputRetOneElementsLeft)) {
                                    mySecondFunctionOutputRetOneNewFieldsLeft = mySecondFunctionOutputRetOneElementsLeft;
                                } else {
                                    mySecondFunctionOutputRetOneNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if ((0 < mySecondFunctionOutputRetOneNewFieldsLeft)) {
                                    mySecondFunctionOutputRetOneListValue = dynamicObject.decoderPopString();
                                    mySecondFunctionOutputRetOneListAcc.push(mySecondFunctionOutputRetOneListValue);
                                    
                                    [mySecondFunctionOutputRetOneElementsLeft, mySecondFunctionOutputRetOneListAcc] = [(mySecondFunctionOutputRetOneNewFieldsLeft - 1), mySecondFunctionOutputRetOneListAcc];
                                } else {
                                    [mySecondFunctionOutputRetOneElementsLeft, mySecondFunctionOutputRetOneListAcc] = [-1, mySecondFunctionOutputRetOneListAcc];
                                }
                            }
                            mySecondFunctionOutputRetOneValue = mySecondFunctionOutputRetOneListAcc;
                            mySecondFunctionOutputBuilder.retOne = mySecondFunctionOutputRetOneValue;
                            
                            [mySecondFunctionOutputFieldsLeft, mySecondFunctionOutputBuilder] = [(mySecondFunctionOutputNewFieldsLeft - 1), mySecondFunctionOutputBuilder];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", {path: dynamicObject.decoderPath()});
                    }
                } else {
                    [mySecondFunctionOutputFieldsLeft, mySecondFunctionOutputBuilder] = [-1, mySecondFunctionOutputBuilder];
                }
            }
            return mySecondFunctionOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", {path: dynamicObject.decoderPath()});
    }
}

export function dynamicGetObjMySecondFunctionOutput(dynamicObject: typelayerCommonDynamic.Decoder): myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput {
    let retObj : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput;
    retObj = dynamicGetMySecondFunctionOutput(dynamicObject);
    return retObj;
}

export function dynamicPutMySecondFunctionOutput(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput): void {
    let mySecondFunctionOutputFieldMySecondFunctionOutput : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput;
    if (inputObject instanceof myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput) {
        let mySecondFunctionOutputFieldMySecondFunctionOutput = inputObject;
        dynamicObject.encoderPutStruct("my_second_function_output", 1);
        dynamicObject.encoderPutField("ret_one");
        dynamicObject.encoderPutList(mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length);
        if ((0 === mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length)) {
            dynamicObject.encoderPutElementEnd(true);
        } else {
            let retOneIndex : number = 0;
            for (let retOneElem of mySecondFunctionOutputFieldMySecondFunctionOutput.retOne) {
                dynamicObject.encoderPutString(retOneElem);
                dynamicObject.encoderPutElementEnd((retOneIndex === (mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length - 1)));
                
                retOneIndex++;
            }
            
        }
        dynamicObject.encoderPutFieldEnd(true);
        return;
    } else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}