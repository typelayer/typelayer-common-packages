import * as myFirstPackageServicesMyFirstServiceStructures from "./structures";
import * as typelayerCommonTransportClient from "typelayer-common";
export declare function myFirstFunction(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput): Promise<myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput>;
export declare function mySecondFunction(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput): Promise<myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput>;
export declare function doRequest(transport: typelayerCommonTransportClient.TransportClient, path: Array<string>, body: Uint8Array): Promise<Uint8Array>;
