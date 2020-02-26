"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.myFirstService.handler
const myFirstPackageServicesMyFirstServiceDynamic = __importStar(require("./dynamic"));
const typelayerCommonApplication = __importStar(require("typelayer-common"));
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class MyFirstServiceApp {
    constructor(arg) {
        this.kind = "MyFirstServiceApp";
        Object.assign(this, arg);
    }
    processDescribe() {
        let serviceDescription;
        serviceDescription = describeMyFirstService();
        return new typelayerCommonDocumentation.ApplicationDescription({
            name: "my_first_service",
            description: null,
            services: [serviceDescription]
        });
    }
    processHandle(encoding, path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let respBin;
            let response;
            switch (path[0]) {
                case "my-first-function":
                    response = yield handleMyFirstServiceMyFirstFunction(this.service, encoding, body);
                    break;
                case "my-second-function":
                    response = yield handleMyFirstServiceMySecondFunction(this.service, encoding, body);
                    break;
                default:
                    throw new typelayerCommonApplication.FunctionNotFound("Function not found", {
                        requestedService: "my-first-service",
                        requestedFunction: path[0],
                        availableFunctions: "my-first-function | my-second-function"
                    });
            }
            this.service = this.service;
            respBin = response.encoderToBinary();
            return respBin;
        });
    }
}
exports.MyFirstServiceApp = MyFirstServiceApp;
function describeMyFirstService() {
    let argOneFieldInfo;
    let argOneInfo;
    let argTwoFieldInfo;
    let argTwoInfo;
    let myFirstArgumentFieldInfo;
    let myFirstArgumentInfo;
    let myFirstFunctionInputs;
    let myFirstFunctionOutputs;
    let myFirstReturnFieldInfo;
    let myFirstReturnInfo;
    let mySecondFunctionInputs;
    let mySecondFunctionOutputs;
    let retOneFieldInfo;
    let retOneInfo;
    let retOneInnerFieldInfo;
    myFirstArgumentFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstArgumentInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_first_argument",
        description: null,
        typeInfo: myFirstArgumentFieldInfo
    });
    myFirstFunctionInputs = [myFirstArgumentInfo];
    myFirstReturnFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "my_first_package",
        schema: "structures",
        structureId: "my_first_structure"
    });
    myFirstReturnInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_first_return",
        description: null,
        typeInfo: myFirstReturnFieldInfo
    });
    myFirstFunctionOutputs = [myFirstReturnInfo];
    argOneFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "my_first_package",
        schema: "structures",
        structureId: "my_enum_structure"
    });
    argOneInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "arg_one",
        description: null,
        typeInfo: argOneFieldInfo
    });
    argTwoFieldInfo = new typelayerCommonDocumentation.TlText({});
    argTwoInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "arg_two",
        description: null,
        typeInfo: argTwoFieldInfo
    });
    mySecondFunctionInputs = [argOneInfo, argTwoInfo];
    retOneInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    retOneFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: retOneInnerFieldInfo
    });
    retOneInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "ret_one",
        description: null,
        typeInfo: retOneFieldInfo
    });
    mySecondFunctionOutputs = [retOneInfo];
    return new typelayerCommonDocumentation.ServiceDescription({
        name: "my_first_service",
        description: null,
        functions: [
            new typelayerCommonDocumentation.FunctionDescription({
                name: "my_first_service",
                description: null,
                inputs: myFirstFunctionInputs,
                outputs: myFirstFunctionOutputs
            }),
            new typelayerCommonDocumentation.FunctionDescription({
                name: "my_first_service",
                description: null,
                inputs: mySecondFunctionInputs,
                outputs: mySecondFunctionOutputs
            })
        ]
    });
}
exports.describeMyFirstService = describeMyFirstService;
function handleMyFirstServiceMyFirstFunction(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMyFirstFunctionInput(decoderStart);
        result = yield implementation.myFirstServiceMyFirstFunction(input);
        myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMyFirstFunctionOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleMyFirstServiceMyFirstFunction = handleMyFirstServiceMyFirstFunction;
function handleMyFirstServiceMySecondFunction(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMySecondFunctionInput(decoderStart);
        result = yield implementation.myFirstServiceMySecondFunction(input);
        myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMySecondFunctionOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleMyFirstServiceMySecondFunction = handleMyFirstServiceMySecondFunction;
