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
// Module: services.compiler.client
const typelayerCServicesCompilerDynamic = __importStar(require("./dynamic"));
const typelayerCommonExceptionsEncoding = __importStar(require("typelayer-common"));
const typelayerCommonTransportClient = __importStar(require("typelayer-common"));
function newPackage(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["new-package"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput(outputDecoder);
    });
}
exports.newPackage = newPackage;
function preview(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["preview"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(outputDecoder);
    });
}
exports.preview = preview;
function previewChanges(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["preview-changes"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput(outputDecoder);
    });
}
exports.previewChanges = previewChanges;
function previewDiff(transportClient, outgoingMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        let inputBin;
        let newEncoder;
        let outputDecoder;
        let responseBin;
        newEncoder = transportClient
            .transportClientEncoding()
            .encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(newEncoder, outgoingMessage);
        inputBin = newEncoder.encoderToBinary();
        responseBin = yield doRequest(transportClient, ["preview-diff"], inputBin);
        outputDecoder = transportClient
            .transportClientEncoding()
            .encodingStartDecoding(responseBin);
        return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(outputDecoder);
    });
}
exports.previewDiff = previewDiff;
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
