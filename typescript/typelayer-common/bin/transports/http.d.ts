import * as typelayerCommonApplication from "../application";
import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonTypes from "../types";
export declare class InvalidContentType extends typelayerCommonTypes.TypelayerException {
    constructor(m: string, meta: {});
}
export declare class HttpSettings {
    host: string;
    port: number;
    constructor(arg: {
        host: string;
        port: number;
    });
}
export declare class HttpRequest {
    body: Uint8Array;
    headers: Map<string, string>;
    path: Array<string>;
    constructor(arg: {
        body: Uint8Array;
        headers: Map<string, string>;
        path: Array<string>;
    });
}
export declare class HttpResponse {
    body: Array<Uint8Array>;
    headers: Map<string, string>;
    statusCode: number;
    constructor(arg: {
        body: Array<Uint8Array>;
        headers: Map<string, string>;
        statusCode: number;
    });
}
export declare class HttpState {
    request: HttpRequest;
    responseHeaders: Map<string, string>;
    constructor(arg: {
        request: HttpRequest;
        responseHeaders: Map<string, string>;
    });
}
export interface HasHttp {
    hasHttpGet: () => HttpState;
    hasHttpPut: (request: HttpState) => void;
}
export interface HttpApplication {
    httpApplicationHandleRequest: (request: HttpRequest) => Promise<HttpResponse>;
}
export declare class BasicHttpApplication implements HttpApplication {
    kind: string;
    app: typelayerCommonApplication.Process;
    constructor(arg: {
        app: typelayerCommonApplication.Process;
    });
    httpApplicationHandleRequest(this: BasicHttpApplication, request: HttpRequest): Promise<HttpResponse>;
}
export declare function getRequest(hasHttpObj: HasHttp): HttpRequest;
export declare function getRequestHeaders(hasHttpObj: HasHttp): Map<string, string>;
export declare function getEncodingForRequest(request: HttpRequest): typelayerCommonDynamic.Encoding;
export declare function putHeader(hasHttpObj: HasHttp, key: string, value: string): void;
