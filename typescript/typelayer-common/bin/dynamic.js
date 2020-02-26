"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: dynamic
const typelayerCommonTypes = __importStar(require("./types"));
class DynamicGetException extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_dynamic", "dynamic_get_exception", new Map([["path", meta.path]]));
        Object.setPrototypeOf(this, DynamicGetException.prototype);
        this.path = meta.path;
    }
}
exports.DynamicGetException = DynamicGetException;
