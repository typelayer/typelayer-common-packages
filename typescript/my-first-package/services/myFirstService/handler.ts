// Module: services.myFirstService.handler
import * as myFirstPackageServicesMyFirstServiceDynamic from "./dynamic";
import * as myFirstPackageServicesMyFirstServiceStructures from "./structures";
import * as typelayerCommonApplication from "typelayer-common";
import * as typelayerCommonDocumentation from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";


export interface MyFirstService {
    myFirstServiceMyFirstFunction: (incomingMsg: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput) => Promise<myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput>;
    myFirstServiceMySecondFunction: (incomingMsg: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput) => Promise<myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput>;
}

export class MyFirstServiceApp implements typelayerCommonApplication.Process {
    kind : string = "MyFirstServiceApp";
    service: MyFirstService;
    constructor(arg: {service: MyFirstService;}) {
        Object.assign(this, arg);
    }
    processDescribe(this: MyFirstServiceApp): typelayerCommonDocumentation.ApplicationDescription {
        let serviceDescription : typelayerCommonDocumentation.ServiceDescription;
        serviceDescription = describeMyFirstService();
        return new typelayerCommonDocumentation.ApplicationDescription({name: "my_first_service", description: null, services: [serviceDescription]});
    }
    async processHandle(this: MyFirstServiceApp, encoding: typelayerCommonDynamic.Encoding, path: Array<string>, body: Uint8Array): Promise<Uint8Array> {
        let respBin : Uint8Array;
        let response : typelayerCommonDynamic.Encoder;
        switch (path[0]) {
            case "my-first-function":
                response = await handleMyFirstServiceMyFirstFunction(this.service, encoding, body);
                break;
            case "my-second-function":
                response = await handleMyFirstServiceMySecondFunction(this.service, encoding, body);
                break;
            default:
                throw new typelayerCommonApplication.FunctionNotFound("Function not found", {requestedService: "my-first-service", requestedFunction: path[0], availableFunctions: "my-first-function | my-second-function"});
        }
        this.service = this.service;
        
        respBin = response.encoderToBinary();
        return respBin;
    }
}

export function describeMyFirstService(): typelayerCommonDocumentation.ServiceDescription {
    let argOneFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let argOneInfo : typelayerCommonDocumentation.FieldDescription;
    let argTwoFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let argTwoInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstArgumentFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myFirstArgumentInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstFunctionInputs : Array<typelayerCommonDocumentation.FieldDescription>;
    let myFirstFunctionOutputs : Array<typelayerCommonDocumentation.FieldDescription>;
    let myFirstReturnFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myFirstReturnInfo : typelayerCommonDocumentation.FieldDescription;
    let mySecondFunctionInputs : Array<typelayerCommonDocumentation.FieldDescription>;
    let mySecondFunctionOutputs : Array<typelayerCommonDocumentation.FieldDescription>;
    let retOneFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let retOneInfo : typelayerCommonDocumentation.FieldDescription;
    let retOneInnerFieldInfo : typelayerCommonDocumentation.TypeInfo;
    myFirstArgumentFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstArgumentInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_first_argument", description: null, typeInfo: myFirstArgumentFieldInfo});
    myFirstFunctionInputs = [myFirstArgumentInfo];
    myFirstReturnFieldInfo = new typelayerCommonDocumentation.TlStructure({package: "my_first_package", schema: "structures", structureId: "my_first_structure"});
    myFirstReturnInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_first_return", description: null, typeInfo: myFirstReturnFieldInfo});
    myFirstFunctionOutputs = [myFirstReturnInfo];
    argOneFieldInfo = new typelayerCommonDocumentation.TlStructure({package: "my_first_package", schema: "structures", structureId: "my_enum_structure"});
    argOneInfo = new typelayerCommonDocumentation.FieldDescription({name: "arg_one", description: null, typeInfo: argOneFieldInfo});
    argTwoFieldInfo = new typelayerCommonDocumentation.TlText({});
    argTwoInfo = new typelayerCommonDocumentation.FieldDescription({name: "arg_two", description: null, typeInfo: argTwoFieldInfo});
    mySecondFunctionInputs = [argOneInfo, argTwoInfo];
    retOneInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    retOneFieldInfo = new typelayerCommonDocumentation.TlList({listInner: retOneInnerFieldInfo});
    retOneInfo = new typelayerCommonDocumentation.FieldDescription({name: "ret_one", description: null, typeInfo: retOneFieldInfo});
    mySecondFunctionOutputs = [retOneInfo];
    return new typelayerCommonDocumentation.ServiceDescription({name: "my_first_service", description: null, functions: [new typelayerCommonDocumentation.FunctionDescription({name: "my_first_service", description: null, inputs: myFirstFunctionInputs, outputs: myFirstFunctionOutputs}), new typelayerCommonDocumentation.FunctionDescription({name: "my_first_service", description: null, inputs: mySecondFunctionInputs, outputs: mySecondFunctionOutputs})]});
}

export async function handleMyFirstServiceMyFirstFunction(implementation: MyFirstService, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder> {
    let decoderStart : typelayerCommonDynamic.Decoder;
    let encoderStart : typelayerCommonDynamic.Encoder;
    let input : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput;
    let result : myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput;
    decoderStart = encoding.encodingStartDecoding(binary);
    encoderStart = encoding.encodingStartEncoding();
    input = myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMyFirstFunctionInput(decoderStart);
    result = await implementation.myFirstServiceMyFirstFunction(input);
    myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMyFirstFunctionOutput(encoderStart, result);
    return encoderStart;
}

export async function handleMyFirstServiceMySecondFunction(implementation: MyFirstService, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder> {
    let decoderStart : typelayerCommonDynamic.Decoder;
    let encoderStart : typelayerCommonDynamic.Encoder;
    let input : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput;
    let result : myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput;
    decoderStart = encoding.encodingStartDecoding(binary);
    encoderStart = encoding.encodingStartEncoding();
    input = myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMySecondFunctionInput(decoderStart);
    result = await implementation.myFirstServiceMySecondFunction(input);
    myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMySecondFunctionOutput(encoderStart, result);
    return encoderStart;
}