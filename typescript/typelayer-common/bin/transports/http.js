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
const typelayerCommonEncodingsJson = __importStar(require("../encodings/json"));
const typelayerCommonEncodingsMsgpack = __importStar(require("../encodings/msgpack"));
const typelayerCommonTypes = __importStar(require("../types"));
class InvalidContentType extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_transports_http", "invalid_content_type", new Map([]));
        Object.setPrototypeOf(this, InvalidContentType.prototype);
    }
}
exports.InvalidContentType = InvalidContentType;
class HttpSettings {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.HttpSettings = HttpSettings;
class HttpRequest {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.HttpRequest = HttpRequest;
class HttpResponse {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.HttpResponse = HttpResponse;
class HttpState {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.HttpState = HttpState;
class BasicHttpApplication {
    constructor(arg) {
        this.kind = "BasicHttpApplication";
        Object.assign(this, arg);
    }
    httpApplicationHandleRequest(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let encoding;
            let resultBin;
            encoding = getEncodingForRequest(request);
            resultBin = yield this.app.processHandle(encoding, request.path, request.body);
            return new HttpResponse({
                statusCode: 200,
                headers: new Map([["Content-Type", encoding.encodingMimetype()]]),
                body: [resultBin]
            });
        });
    }
}
exports.BasicHttpApplication = BasicHttpApplication;
function getRequest(hasHttpObj) {
    return hasHttpObj.hasHttpGet().request;
}
exports.getRequest = getRequest;
function getRequestHeaders(hasHttpObj) {
    return hasHttpObj.hasHttpGet().request.headers;
}
exports.getRequestHeaders = getRequestHeaders;
function getEncodingForRequest(request) {
    let contentType;
    contentType = request.headers.get("content-type") || "application/json";
    switch (contentType) {
        case "application/json":
            return new typelayerCommonEncodingsJson.JsonEncoding({});
            break;
        case "application/msgpack":
            return new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
            break;
        default:
            throw new InvalidContentType("Invalid Content Type", {});
    }
}
exports.getEncodingForRequest = getEncodingForRequest;
function putHeader(hasHttpObj, key, value) {
    hasHttpObj.hasHttpGet().responseHeaders.set(key, value);
    hasHttpObj.hasHttpGet().responseHeaders = hasHttpObj.hasHttpGet().responseHeaders;
    return hasHttpObj.hasHttpPut(hasHttpObj.hasHttpGet());
}
exports.putHeader = putHeader;
