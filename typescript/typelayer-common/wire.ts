// Module: wire
import * as typelayerCommonTypes from "./types";


export class DecoderException extends  typelayerCommonTypes.TypelayerException {
    offset: string;
    constructor(m: string, meta: {offset: string;}) {
        super(m, "typelayer_common_wire", "decoder_exception", new Map([["offset", meta.offset]]));
        Object.setPrototypeOf(this, DecoderException.prototype);
        this.offset = meta.offset;
    }
}