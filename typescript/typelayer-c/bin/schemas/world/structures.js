"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.world.structures
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class File {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.File = File;
function defaultFile() {
    let contentsVal;
    let fileidVal;
    contentsVal = "";
    fileidVal = "";
    return new File({ contents: contentsVal, fileid: fileidVal });
}
exports.defaultFile = defaultFile;
function describeFile() {
    let contentsFieldInfo;
    let fileConstructorInfo;
    let fileContentsFieldInfo;
    let fileFileidFieldInfo;
    let fileidFieldInfo;
    contentsFieldInfo = new typelayerCommonDocumentation.TlText({});
    fileContentsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "contents",
        description: null,
        typeInfo: contentsFieldInfo
    });
    fileidFieldInfo = new typelayerCommonDocumentation.TlText({});
    fileFileidFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "fileid",
        description: null,
        typeInfo: fileidFieldInfo
    });
    fileConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "file",
        description: null,
        fields: [fileContentsFieldInfo, fileFileidFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "file",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [fileConstructorInfo]
    });
}
exports.describeFile = describeFile;
