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
// Module: services.myFirstService.client
const myFirstPackageServicesMyFirstServiceDynamic = __importStar(require("./dynamic"));
const typelayerCommonExceptionsEncoding = __importStar(require("typelayer-common"));
const typelayerCommonTransportClient = __importStar(require("typelayer-common"));
function myFirstFunction(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMyFirstFunctionInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["my-first-function"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMyFirstFunctionOutput(outputDecoder);
    });
}
exports.myFirstFunction = myFirstFunction;
function mySecondFunction(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMySecondFunctionInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["my-second-function"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMySecondFunctionOutput(outputDecoder);
    });
}
exports.mySecondFunction = mySecondFunction;
function doRequest(transport, path, body) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoder;
        let metaObj;
        let metaSerializedObj;
        let response;
        let switchOkOk;
        let switchOkUhoh;
        response = yield transport.transportClientHandle(path, body);
        if (response instanceof typelayerCommonTransportClient.Ok) {
            let switchOkOk = response;
            return switchOkOk.body;
        }
        else if (response instanceof typelayerCommonTransportClient.Uhoh) {
            let switchOkUhoh = response;
            decoder = switchOkUhoh.exceptionEncoding.encodingStartDecoding(switchOkUhoh.exceptionBody);
            metaSerializedObj = typelayerCommonExceptionsEncoding.dynamicGetObjExceptionMetaSerializable(decoder);
            metaObj = typelayerCommonExceptionsEncoding.toPlainMeta(metaSerializedObj);
            throw metaObj;
        }
        else {
            throw new Error(`Invalid type ${response}`);
        }
    });
}
exports.doRequest = doRequest;
