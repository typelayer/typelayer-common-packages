// Module: transportClient
import * as typelayerCommonDynamic from "./dynamic";


export class Ok {
    body: Uint8Array;
    constructor(arg: {body: Uint8Array;}) {
        Object.assign(this, arg);
    }
}

export class Uhoh {
    exceptionBody: Uint8Array;
    exceptionEncoding: typelayerCommonDynamic.Encoding;
    constructor(arg: {exceptionBody: Uint8Array; exceptionEncoding: typelayerCommonDynamic.Encoding;}) {
        Object.assign(this, arg);
    }
}

export type Response = Ok| Uhoh

export interface TransportClient {
    transportClientEncoding: () => typelayerCommonDynamic.Encoding;
    transportClientHandle: (path: Array<string>, body: Uint8Array) => Promise<Response>;
}