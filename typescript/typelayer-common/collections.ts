// Module: collections
import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonTypes from "./types";


export class KeyNotFoundException extends  typelayerCommonTypes.TypelayerException {
    key: string;
    constructor(m: string, meta: {key: string;}) {
        super(m, "typelayer_common_collections", "key_not_found_exception", new Map([["key", meta.key]]));
        Object.setPrototypeOf(this, KeyNotFoundException.prototype);
        this.key = meta.key;
    }
}

export class BinaryKV {
    key: string;
    value: Uint8Array;
    constructor(arg: {key: string; value: Uint8Array;}) {
        Object.assign(this, arg);
    }
}

export interface BinaryCollection {
    binaryCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    binaryCollectionEncoding: () => typelayerCommonDynamic.Encoding;
    binaryCollectionFetch: (toFetch: Array<string>) => Promise<Array<BinaryKV>>;
    binaryCollectionSave: (toSave: Array<BinaryKV>) => Promise<Array<string>>;
    binaryCollectionSlice: (offset: number, count: number) => Promise<Array<BinaryKV>>;
}