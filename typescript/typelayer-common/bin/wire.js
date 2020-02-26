"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: wire
const typelayerCommonTypes = __importStar(require("./types"));
class DecoderException extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_wire", "decoder_exception", new Map([["offset", meta.offset]]));
        Object.setPrototypeOf(this, DecoderException.prototype);
        this.offset = meta.offset;
    }
}
exports.DecoderException = DecoderException;
