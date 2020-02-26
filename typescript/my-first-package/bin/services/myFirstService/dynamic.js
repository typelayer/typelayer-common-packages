"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.myFirstService.dynamic
const myFirstPackageSchemasMyFirstModuleDynamic = __importStar(require("../../schemas/myFirstModule/dynamic"));
const myFirstPackageServicesMyFirstServiceStructures = __importStar(require("./structures"));
const typelayerCommonDynamic = __importStar(require("typelayer-common"));
function dynamicGetMyFirstFunctionInput(dynamicObject) {
    let constructor;
    let myFirstFunctionInputBuilder;
    let myFirstFunctionInputFieldName;
    let myFirstFunctionInputFieldsLeft;
    let myFirstFunctionInputInit;
    let myFirstFunctionInputMyFirstArgumentValue;
    let myFirstFunctionInputNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_function_input");
    switch (constructor) {
        case "my_first_function_input":
            myFirstFunctionInputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMyFirstFunctionInput();
            [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [
                numFields,
                myFirstFunctionInputInit
            ];
            while (-1 < myFirstFunctionInputFieldsLeft) {
                if (0 < myFirstFunctionInputFieldsLeft) {
                    myFirstFunctionInputNewFieldsLeft = myFirstFunctionInputFieldsLeft;
                }
                else {
                    myFirstFunctionInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < myFirstFunctionInputNewFieldsLeft) {
                    myFirstFunctionInputFieldName = dynamicObject.decoderPopField();
                    switch (myFirstFunctionInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "my_first_argument":
                            myFirstFunctionInputMyFirstArgumentValue = dynamicObject.decoderPopString();
                            myFirstFunctionInputBuilder.myFirstArgument = myFirstFunctionInputMyFirstArgumentValue;
                            [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [
                                myFirstFunctionInputNewFieldsLeft - 1,
                                myFirstFunctionInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [myFirstFunctionInputFieldsLeft, myFirstFunctionInputBuilder] = [
                        -1,
                        myFirstFunctionInputBuilder
                    ];
                }
            }
            return myFirstFunctionInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMyFirstFunctionInput = dynamicGetMyFirstFunctionInput;
function dynamicGetObjMyFirstFunctionInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetMyFirstFunctionInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMyFirstFunctionInput = dynamicGetObjMyFirstFunctionInput;
function dynamicPutMyFirstFunctionInput(dynamicObject, inputObject) {
    let myFirstFunctionInputFieldMyFirstFunctionInput;
    if (inputObject instanceof
        myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput) {
        let myFirstFunctionInputFieldMyFirstFunctionInput = inputObject;
        dynamicObject.encoderPutStruct("my_first_function_input", 1);
        dynamicObject.encoderPutField("my_first_argument");
        dynamicObject.encoderPutString(myFirstFunctionInputFieldMyFirstFunctionInput.myFirstArgument);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMyFirstFunctionInput = dynamicPutMyFirstFunctionInput;
function dynamicGetMyFirstFunctionOutput(dynamicObject) {
    let constructor;
    let myFirstFunctionOutputBuilder;
    let myFirstFunctionOutputFieldName;
    let myFirstFunctionOutputFieldsLeft;
    let myFirstFunctionOutputInit;
    let myFirstFunctionOutputMyFirstReturnValue;
    let myFirstFunctionOutputNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_first_function_output");
    switch (constructor) {
        case "my_first_function_output":
            myFirstFunctionOutputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMyFirstFunctionOutput();
            [myFirstFunctionOutputFieldsLeft, myFirstFunctionOutputBuilder] = [
                numFields,
                myFirstFunctionOutputInit
            ];
            while (-1 < myFirstFunctionOutputFieldsLeft) {
                if (0 < myFirstFunctionOutputFieldsLeft) {
                    myFirstFunctionOutputNewFieldsLeft = myFirstFunctionOutputFieldsLeft;
                }
                else {
                    myFirstFunctionOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < myFirstFunctionOutputNewFieldsLeft) {
                    myFirstFunctionOutputFieldName = dynamicObject.decoderPopField();
                    switch (myFirstFunctionOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "my_first_return":
                            myFirstFunctionOutputMyFirstReturnValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetMyFirstStructure(dynamicObject);
                            myFirstFunctionOutputBuilder.myFirstReturn = myFirstFunctionOutputMyFirstReturnValue;
                            [
                                myFirstFunctionOutputFieldsLeft,
                                myFirstFunctionOutputBuilder
                            ] = [
                                myFirstFunctionOutputNewFieldsLeft - 1,
                                myFirstFunctionOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [myFirstFunctionOutputFieldsLeft, myFirstFunctionOutputBuilder] = [
                        -1,
                        myFirstFunctionOutputBuilder
                    ];
                }
            }
            return myFirstFunctionOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMyFirstFunctionOutput = dynamicGetMyFirstFunctionOutput;
function dynamicGetObjMyFirstFunctionOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetMyFirstFunctionOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMyFirstFunctionOutput = dynamicGetObjMyFirstFunctionOutput;
function dynamicPutMyFirstFunctionOutput(dynamicObject, inputObject) {
    let myFirstFunctionOutputFieldMyFirstFunctionOutput;
    if (inputObject instanceof
        myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput) {
        let myFirstFunctionOutputFieldMyFirstFunctionOutput = inputObject;
        dynamicObject.encoderPutStruct("my_first_function_output", 1);
        dynamicObject.encoderPutField("my_first_return");
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(dynamicObject, myFirstFunctionOutputFieldMyFirstFunctionOutput.myFirstReturn);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMyFirstFunctionOutput = dynamicPutMyFirstFunctionOutput;
function dynamicGetMySecondFunctionInput(dynamicObject) {
    let constructor;
    let mySecondFunctionInputArgOneValue;
    let mySecondFunctionInputArgTwoValue;
    let mySecondFunctionInputBuilder;
    let mySecondFunctionInputFieldName;
    let mySecondFunctionInputFieldsLeft;
    let mySecondFunctionInputInit;
    let mySecondFunctionInputNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_second_function_input");
    switch (constructor) {
        case "my_second_function_input":
            mySecondFunctionInputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMySecondFunctionInput();
            [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [
                numFields,
                mySecondFunctionInputInit
            ];
            while (-1 < mySecondFunctionInputFieldsLeft) {
                if (0 < mySecondFunctionInputFieldsLeft) {
                    mySecondFunctionInputNewFieldsLeft = mySecondFunctionInputFieldsLeft;
                }
                else {
                    mySecondFunctionInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < mySecondFunctionInputNewFieldsLeft) {
                    mySecondFunctionInputFieldName = dynamicObject.decoderPopField();
                    switch (mySecondFunctionInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "arg_one":
                            mySecondFunctionInputArgOneValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetMyEnumStructure(dynamicObject);
                            mySecondFunctionInputBuilder.argOne = mySecondFunctionInputArgOneValue;
                            [
                                mySecondFunctionInputFieldsLeft,
                                mySecondFunctionInputBuilder
                            ] = [
                                mySecondFunctionInputNewFieldsLeft - 1,
                                mySecondFunctionInputBuilder
                            ];
                            break;
                        case "arg_two":
                            mySecondFunctionInputArgTwoValue = dynamicObject.decoderPopString();
                            mySecondFunctionInputBuilder.argTwo = mySecondFunctionInputArgTwoValue;
                            [
                                mySecondFunctionInputFieldsLeft,
                                mySecondFunctionInputBuilder
                            ] = [
                                mySecondFunctionInputNewFieldsLeft - 1,
                                mySecondFunctionInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [mySecondFunctionInputFieldsLeft, mySecondFunctionInputBuilder] = [
                        -1,
                        mySecondFunctionInputBuilder
                    ];
                }
            }
            return mySecondFunctionInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMySecondFunctionInput = dynamicGetMySecondFunctionInput;
function dynamicGetObjMySecondFunctionInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetMySecondFunctionInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMySecondFunctionInput = dynamicGetObjMySecondFunctionInput;
function dynamicPutMySecondFunctionInput(dynamicObject, inputObject) {
    let mySecondFunctionInputFieldMySecondFunctionInput;
    if (inputObject instanceof
        myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput) {
        let mySecondFunctionInputFieldMySecondFunctionInput = inputObject;
        dynamicObject.encoderPutStruct("my_second_function_input", 2);
        dynamicObject.encoderPutField("arg_one");
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(dynamicObject, mySecondFunctionInputFieldMySecondFunctionInput.argOne);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("arg_two");
        dynamicObject.encoderPutString(mySecondFunctionInputFieldMySecondFunctionInput.argTwo);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMySecondFunctionInput = dynamicPutMySecondFunctionInput;
function dynamicGetMySecondFunctionOutput(dynamicObject) {
    let constructor;
    let mySecondFunctionOutputBuilder;
    let mySecondFunctionOutputFieldName;
    let mySecondFunctionOutputFieldsLeft;
    let mySecondFunctionOutputInit;
    let mySecondFunctionOutputNewFieldsLeft;
    let mySecondFunctionOutputRetOneElementsLeft;
    let mySecondFunctionOutputRetOneInit;
    let mySecondFunctionOutputRetOneListAcc;
    let mySecondFunctionOutputRetOneListValue;
    let mySecondFunctionOutputRetOneNewFieldsLeft;
    let mySecondFunctionOutputRetOneValue;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("my_second_function_output");
    switch (constructor) {
        case "my_second_function_output":
            mySecondFunctionOutputInit = myFirstPackageServicesMyFirstServiceStructures.defaultMySecondFunctionOutput();
            [mySecondFunctionOutputFieldsLeft, mySecondFunctionOutputBuilder] = [
                numFields,
                mySecondFunctionOutputInit
            ];
            while (-1 < mySecondFunctionOutputFieldsLeft) {
                if (0 < mySecondFunctionOutputFieldsLeft) {
                    mySecondFunctionOutputNewFieldsLeft = mySecondFunctionOutputFieldsLeft;
                }
                else {
                    mySecondFunctionOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < mySecondFunctionOutputNewFieldsLeft) {
                    mySecondFunctionOutputFieldName = dynamicObject.decoderPopField();
                    switch (mySecondFunctionOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "ret_one":
                            mySecondFunctionOutputRetOneInit = dynamicObject.decoderPopList();
                            [
                                mySecondFunctionOutputRetOneElementsLeft,
                                mySecondFunctionOutputRetOneListAcc
                            ] = [mySecondFunctionOutputRetOneInit, []];
                            while (-1 < mySecondFunctionOutputRetOneElementsLeft) {
                                if (0 < mySecondFunctionOutputRetOneElementsLeft) {
                                    mySecondFunctionOutputRetOneNewFieldsLeft = mySecondFunctionOutputRetOneElementsLeft;
                                }
                                else {
                                    mySecondFunctionOutputRetOneNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if (0 < mySecondFunctionOutputRetOneNewFieldsLeft) {
                                    mySecondFunctionOutputRetOneListValue = dynamicObject.decoderPopString();
                                    mySecondFunctionOutputRetOneListAcc.push(mySecondFunctionOutputRetOneListValue);
                                    [
                                        mySecondFunctionOutputRetOneElementsLeft,
                                        mySecondFunctionOutputRetOneListAcc
                                    ] = [
                                        mySecondFunctionOutputRetOneNewFieldsLeft - 1,
                                        mySecondFunctionOutputRetOneListAcc
                                    ];
                                }
                                else {
                                    [
                                        mySecondFunctionOutputRetOneElementsLeft,
                                        mySecondFunctionOutputRetOneListAcc
                                    ] = [-1, mySecondFunctionOutputRetOneListAcc];
                                }
                            }
                            mySecondFunctionOutputRetOneValue = mySecondFunctionOutputRetOneListAcc;
                            mySecondFunctionOutputBuilder.retOne = mySecondFunctionOutputRetOneValue;
                            [
                                mySecondFunctionOutputFieldsLeft,
                                mySecondFunctionOutputBuilder
                            ] = [
                                mySecondFunctionOutputNewFieldsLeft - 1,
                                mySecondFunctionOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [mySecondFunctionOutputFieldsLeft, mySecondFunctionOutputBuilder] = [
                        -1,
                        mySecondFunctionOutputBuilder
                    ];
                }
            }
            return mySecondFunctionOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetMySecondFunctionOutput = dynamicGetMySecondFunctionOutput;
function dynamicGetObjMySecondFunctionOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetMySecondFunctionOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjMySecondFunctionOutput = dynamicGetObjMySecondFunctionOutput;
function dynamicPutMySecondFunctionOutput(dynamicObject, inputObject) {
    let mySecondFunctionOutputFieldMySecondFunctionOutput;
    if (inputObject instanceof
        myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput) {
        let mySecondFunctionOutputFieldMySecondFunctionOutput = inputObject;
        dynamicObject.encoderPutStruct("my_second_function_output", 1);
        dynamicObject.encoderPutField("ret_one");
        dynamicObject.encoderPutList(mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length);
        if (0 === mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length) {
            dynamicObject.encoderPutElementEnd(true);
        }
        else {
            let retOneIndex = 0;
            for (let retOneElem of mySecondFunctionOutputFieldMySecondFunctionOutput.retOne) {
                dynamicObject.encoderPutString(retOneElem);
                dynamicObject.encoderPutElementEnd(retOneIndex ===
                    mySecondFunctionOutputFieldMySecondFunctionOutput.retOne.length - 1);
                retOneIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutMySecondFunctionOutput = dynamicPutMySecondFunctionOutput;
