import * as myFirstPackageServicesMyFirstServiceStructures from "./structures";
import * as typelayerCommonApplication from "typelayer-common";
import * as typelayerCommonDocumentation from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";
export interface MyFirstService {
    myFirstServiceMyFirstFunction: (incomingMsg: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput) => Promise<myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput>;
    myFirstServiceMySecondFunction: (incomingMsg: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput) => Promise<myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput>;
}
export declare class MyFirstServiceApp implements typelayerCommonApplication.Process {
    kind: string;
    service: MyFirstService;
    constructor(arg: {
        service: MyFirstService;
    });
    processDescribe(this: MyFirstServiceApp): typelayerCommonDocumentation.ApplicationDescription;
    processHandle(this: MyFirstServiceApp, encoding: typelayerCommonDynamic.Encoding, path: Array<string>, body: Uint8Array): Promise<Uint8Array>;
}
export declare function describeMyFirstService(): typelayerCommonDocumentation.ServiceDescription;
export declare function handleMyFirstServiceMyFirstFunction(implementation: MyFirstService, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
export declare function handleMyFirstServiceMySecondFunction(implementation: MyFirstService, encoding: typelayerCommonDynamic.Encoding, binary: Uint8Array): Promise<typelayerCommonDynamic.Encoder>;
