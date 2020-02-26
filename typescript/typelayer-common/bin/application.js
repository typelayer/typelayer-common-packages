"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayerCommonTypes = __importStar(require("./types"));
class ServiceNotFound extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_application", "service_not_found", new Map([
            ["requested_service", meta.requestedService],
            ["available_services", meta.availableServices]
        ]));
        Object.setPrototypeOf(this, ServiceNotFound.prototype);
        this.requestedService = meta.requestedService;
        this.availableServices = meta.availableServices;
    }
}
exports.ServiceNotFound = ServiceNotFound;
class FunctionNotFound extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_application", "function_not_found", new Map([
            ["requested_service", meta.requestedService],
            ["requested_function", meta.requestedFunction],
            ["available_functions", meta.availableFunctions]
        ]));
        Object.setPrototypeOf(this, FunctionNotFound.prototype);
        this.requestedService = meta.requestedService;
        this.requestedFunction = meta.requestedFunction;
        this.availableFunctions = meta.availableFunctions;
    }
}
exports.FunctionNotFound = FunctionNotFound;
