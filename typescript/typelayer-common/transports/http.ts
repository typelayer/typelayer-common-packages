// Module: transports.http
import * as typelayerCommonApplication from "../application";
import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonEncodingsJson from "../encodings/json";
import * as typelayerCommonEncodingsMsgpack from "../encodings/msgpack";
import * as typelayerCommonTypes from "../types";


export class InvalidContentType extends  typelayerCommonTypes.TypelayerException {

    constructor(m: string, meta: {}) {
        super(m, "typelayer_common_transports_http", "invalid_content_type", new Map([]));
        Object.setPrototypeOf(this, InvalidContentType.prototype);

    }
}

export class HttpSettings {
    host: string;
    port: number;
    constructor(arg: {host: string; port: number;}) {
        Object.assign(this, arg);
    }
}

export class HttpRequest {
    body: Uint8Array;
    headers: Map<string, string>;
    path: Array<string>;
    constructor(arg: {body: Uint8Array; headers: Map<string, string>; path: Array<string>;}) {
        Object.assign(this, arg);
    }
}

export class HttpResponse {
    body: Array<Uint8Array>;
    headers: Map<string, string>;
    statusCode: number;
    constructor(arg: {body: Array<Uint8Array>; headers: Map<string, string>; statusCode: number;}) {
        Object.assign(this, arg);
    }
}

export class HttpState {
    request: HttpRequest;
    responseHeaders: Map<string, string>;
    constructor(arg: {request: HttpRequest; responseHeaders: Map<string, string>;}) {
        Object.assign(this, arg);
    }
}

export interface HasHttp {
    hasHttpGet: () => HttpState;
    hasHttpPut: (request: HttpState) => void;
}

export interface HttpApplication {
    httpApplicationHandleRequest: (request: HttpRequest) => Promise<HttpResponse>;
}

export class BasicHttpApplication implements HttpApplication {
    kind : string = "BasicHttpApplication";
    app: typelayerCommonApplication.Process;
    constructor(arg: {app: typelayerCommonApplication.Process;}) {
        Object.assign(this, arg);
    }
    async httpApplicationHandleRequest(this: BasicHttpApplication, request: HttpRequest): Promise<HttpResponse> {
        let encoding : typelayerCommonDynamic.Encoding;
        let resultBin : Uint8Array;
        encoding = getEncodingForRequest(request);
        resultBin = await this.app.processHandle(encoding, request.path, request.body);
        return new HttpResponse({statusCode: 200, headers: new Map([["Content-Type", encoding.encodingMimetype()]]), body: [resultBin]});
    }
}

export function getRequest(hasHttpObj: HasHttp): HttpRequest {

    return hasHttpObj.hasHttpGet().request;
}

export function getRequestHeaders(hasHttpObj: HasHttp): Map<string, string> {

    return hasHttpObj.hasHttpGet().request.headers;
}

export function getEncodingForRequest(request: HttpRequest): typelayerCommonDynamic.Encoding {
    let contentType : string;
    contentType = (request.headers.get("content-type") || "application/json");
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

export function putHeader(hasHttpObj: HasHttp, key: string, value: string): void {

    hasHttpObj.hasHttpGet().responseHeaders.set(key, value);
    
    hasHttpObj.hasHttpGet().responseHeaders = hasHttpObj.hasHttpGet().responseHeaders;
    
    return hasHttpObj.hasHttpPut(hasHttpObj.hasHttpGet());
}