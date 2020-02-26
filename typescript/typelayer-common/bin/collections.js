"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayerCommonTypes = __importStar(require("./types"));
class KeyNotFoundException extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_collections", "key_not_found_exception", new Map([["key", meta.key]]));
        Object.setPrototypeOf(this, KeyNotFoundException.prototype);
        this.key = meta.key;
    }
}
exports.KeyNotFoundException = KeyNotFoundException;
class BinaryKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.BinaryKV = BinaryKV;
