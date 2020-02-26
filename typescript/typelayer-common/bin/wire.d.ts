import * as typelayerCommonTypes from "./types";
export declare class DecoderException extends typelayerCommonTypes.TypelayerException {
    offset: string;
    constructor(m: string, meta: {
        offset: string;
    });
}
