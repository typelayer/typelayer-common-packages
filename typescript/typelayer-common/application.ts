// Module: application
import * as typelayerCommonDocumentation from "./documentation";
import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonTypes from "./types";


export class ServiceNotFound extends  typelayerCommonTypes.TypelayerException {
    requestedService: string;
    availableServices: string;
    constructor(m: string, meta: {requestedService: string; availableServices: string;}) {
        super(m, "typelayer_common_application", "service_not_found", new Map([["requested_service", meta.requestedService], ["available_services", meta.availableServices]]));
        Object.setPrototypeOf(this, ServiceNotFound.prototype);
        this.requestedService = meta.requestedService;
        this.availableServices = meta.availableServices;
    }
}

export class FunctionNotFound extends  typelayerCommonTypes.TypelayerException {
    requestedService: string;
    requestedFunction: string;
    availableFunctions: string;
    constructor(m: string, meta: {requestedService: string; requestedFunction: string; availableFunctions: string;}) {
        super(m, "typelayer_common_application", "function_not_found", new Map([["requested_service", meta.requestedService], ["requested_function", meta.requestedFunction], ["available_functions", meta.availableFunctions]]));
        Object.setPrototypeOf(this, FunctionNotFound.prototype);
        this.requestedService = meta.requestedService;
        this.requestedFunction = meta.requestedFunction;
        this.availableFunctions = meta.availableFunctions;
    }
}

export interface Process {
    processDescribe: () => typelayerCommonDocumentation.ApplicationDescription;
    processHandle: (encoding: typelayerCommonDynamic.Encoding, path: Array<string>, body: Uint8Array) => Promise<Uint8Array>;
}