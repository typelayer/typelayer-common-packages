import * as typelayerCommonDynamic from "./dynamic";
export declare class Ok {
    body: Uint8Array;
    constructor(arg: {
        body: Uint8Array;
    });
}
export declare class Uhoh {
    exceptionBody: Uint8Array;
    exceptionEncoding: typelayerCommonDynamic.Encoding;
    constructor(arg: {
        exceptionBody: Uint8Array;
        exceptionEncoding: typelayerCommonDynamic.Encoding;
    });
}
export declare type Response = Ok | Uhoh;
export interface TransportClient {
    transportClientEncoding: () => typelayerCommonDynamic.Encoding;
    transportClientHandle: (path: Array<string>, body: Uint8Array) => Promise<Response>;
}
