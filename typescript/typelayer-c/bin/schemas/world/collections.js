"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.world.collections
const typelayerCSchemasWorldDynamic = __importStar(require("./dynamic"));
const typelayerCommonCollections = __importStar(require("typelayer-common"));
class FileKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.FileKV = FileKV;
class FileDynamicCollection {
    constructor(arg) {
        this.kind = "FileDynamicCollection";
        Object.assign(this, arg);
    }
    fileCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    fileCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let fileValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                fileValue = typelayerCSchemasWorldDynamic.dynamicGetObjFile(newDecoder);
                reduceDynamicKvsAcc.push(new FileKV({ key: reduceDynamicKvsElem.key, value: fileValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    fileCollectionSave(toSave) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicList;
            let dynamicObject;
            let elemBinary;
            let newEncoder;
            dynamicObject = this.dynamicObj;
            let convertLoopIndex = 0;
            let convertLoopAcc = [];
            for (let convertLoopElem of toSave) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newEncoder = collectionEncoding.encodingStartEncoding();
                typelayerCSchemasWorldDynamic.dynamicPutFile(newEncoder, convertLoopElem.value);
                elemBinary = newEncoder.encoderToBinary();
                convertLoopAcc.push(new typelayerCommonCollections.BinaryKV({
                    key: convertLoopElem.key,
                    value: elemBinary
                }));
                convertLoopAcc = convertLoopAcc;
                convertLoopIndex++;
            }
            dynamicList = convertLoopAcc;
            return yield dynamicObject.binaryCollectionSave(dynamicList);
        });
    }
    fileCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let fileValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                fileValue = typelayerCSchemasWorldDynamic.dynamicGetObjFile(newDecoder);
                reduceDynamicKvsAcc.push(new FileKV({ key: reduceDynamicKvsElem.key, value: fileValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.FileDynamicCollection = FileDynamicCollection;
