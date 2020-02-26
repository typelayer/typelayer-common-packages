import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonTypes from "./types";
export declare class KeyNotFoundException extends typelayerCommonTypes.TypelayerException {
    key: string;
    constructor(m: string, meta: {
        key: string;
    });
}
export declare class BinaryKV {
    key: string;
    value: Uint8Array;
    constructor(arg: {
        key: string;
        value: Uint8Array;
    });
}
export interface BinaryCollection {
    binaryCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    binaryCollectionEncoding: () => typelayerCommonDynamic.Encoding;
    binaryCollectionFetch: (toFetch: Array<string>) => Promise<Array<BinaryKV>>;
    binaryCollectionSave: (toSave: Array<BinaryKV>) => Promise<Array<string>>;
    binaryCollectionSlice: (offset: number, count: number) => Promise<Array<BinaryKV>>;
}
