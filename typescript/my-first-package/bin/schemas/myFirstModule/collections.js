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
// Module: schemas.myFirstModule.collections
const myFirstPackageSchemasMyFirstModuleDynamic = __importStar(require("./dynamic"));
const typelayerCommonCollections = __importStar(require("typelayer-common"));
class MyEnumStructureKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyEnumStructureKV = MyEnumStructureKV;
class MyEnumStructureDynamicCollection {
    constructor(arg) {
        this.kind = "MyEnumStructureDynamicCollection";
        Object.assign(this, arg);
    }
    myEnumStructureCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    myEnumStructureCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let myEnumStructureValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                myEnumStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(newDecoder);
                reduceDynamicKvsAcc.push(new MyEnumStructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: myEnumStructureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    myEnumStructureCollectionSave(toSave) {
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
                myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(newEncoder, convertLoopElem.value);
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
    myEnumStructureCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let myEnumStructureValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                myEnumStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(newDecoder);
                reduceDynamicKvsAcc.push(new MyEnumStructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: myEnumStructureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.MyEnumStructureDynamicCollection = MyEnumStructureDynamicCollection;
class MyFirstStructureKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyFirstStructureKV = MyFirstStructureKV;
class MyFirstStructureDynamicCollection {
    constructor(arg) {
        this.kind = "MyFirstStructureDynamicCollection";
        Object.assign(this, arg);
    }
    myFirstStructureCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    myFirstStructureCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let myFirstStructureValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                myFirstStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(newDecoder);
                reduceDynamicKvsAcc.push(new MyFirstStructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: myFirstStructureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    myFirstStructureCollectionSave(toSave) {
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
                myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(newEncoder, convertLoopElem.value);
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
    myFirstStructureCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let myFirstStructureValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                myFirstStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(newDecoder);
                reduceDynamicKvsAcc.push(new MyFirstStructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: myFirstStructureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.MyFirstStructureDynamicCollection = MyFirstStructureDynamicCollection;
