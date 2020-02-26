import { Encoding, TransportClient } from "typelayer-common";
export declare class NodeHttpTransport implements TransportClient {
    baseUrl: string;
    encoding: Encoding;
    constructor({ baseUrl, encoding }: {
        baseUrl: string;
        encoding?: Encoding;
    });
    transportClientEncoding(): Encoding;
    transportClientHandle(path: Array<string>, body: Uint8Array): Promise<import("typelayer-common").Response>;
}
