import * as typelayerCommonDocumentation from "./documentation";
import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonTypes from "./types";
export declare class ServiceNotFound extends typelayerCommonTypes.TypelayerException {
    requestedService: string;
    availableServices: string;
    constructor(m: string, meta: {
        requestedService: string;
        availableServices: string;
    });
}
export declare class FunctionNotFound extends typelayerCommonTypes.TypelayerException {
    requestedService: string;
    requestedFunction: string;
    availableFunctions: string;
    constructor(m: string, meta: {
        requestedService: string;
        requestedFunction: string;
        availableFunctions: string;
    });
}
export interface Process {
    processDescribe: () => typelayerCommonDocumentation.ApplicationDescription;
    processHandle: (encoding: typelayerCommonDynamic.Encoding, path: Array<string>, body: Uint8Array) => Promise<Uint8Array>;
}
