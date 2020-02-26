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
// Module: schemas.definitions.collections
const typelayerCSchemasDefinitionsDynamic = __importStar(require("./dynamic"));
const typelayerCommonCollections = __importStar(require("typelayer-common"));
class ApplyChangesProxyKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ApplyChangesProxyKV = ApplyChangesProxyKV;
class ApplyChangesProxyDynamicCollection {
    constructor(arg) {
        this.kind = "ApplyChangesProxyDynamicCollection";
        Object.assign(this, arg);
    }
    applyChangesProxyCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    applyChangesProxyCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let applyChangesProxyValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                applyChangesProxyValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(newDecoder);
                reduceDynamicKvsAcc.push(new ApplyChangesProxyKV({
                    key: reduceDynamicKvsElem.key,
                    value: applyChangesProxyValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    applyChangesProxyCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(newEncoder, convertLoopElem.value);
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
    applyChangesProxyCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let applyChangesProxyValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                applyChangesProxyValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(newDecoder);
                reduceDynamicKvsAcc.push(new ApplyChangesProxyKV({
                    key: reduceDynamicKvsElem.key,
                    value: applyChangesProxyValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ApplyChangesProxyDynamicCollection = ApplyChangesProxyDynamicCollection;
class BackendKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.BackendKV = BackendKV;
class BackendDynamicCollection {
    constructor(arg) {
        this.kind = "BackendDynamicCollection";
        Object.assign(this, arg);
    }
    backendCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    backendCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let backendValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                backendValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend(newDecoder);
                reduceDynamicKvsAcc.push(new BackendKV({ key: reduceDynamicKvsElem.key, value: backendValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    backendCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutBackend(newEncoder, convertLoopElem.value);
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
    backendCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let backendValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                backendValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend(newDecoder);
                reduceDynamicKvsAcc.push(new BackendKV({ key: reduceDynamicKvsElem.key, value: backendValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.BackendDynamicCollection = BackendDynamicCollection;
class BasicTypeKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.BasicTypeKV = BasicTypeKV;
class BasicTypeDynamicCollection {
    constructor(arg) {
        this.kind = "BasicTypeDynamicCollection";
        Object.assign(this, arg);
    }
    basicTypeCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    basicTypeCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let basicTypeValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                basicTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType(newDecoder);
                reduceDynamicKvsAcc.push(new BasicTypeKV({
                    key: reduceDynamicKvsElem.key,
                    value: basicTypeValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    basicTypeCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutBasicType(newEncoder, convertLoopElem.value);
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
    basicTypeCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let basicTypeValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                basicTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType(newDecoder);
                reduceDynamicKvsAcc.push(new BasicTypeKV({
                    key: reduceDynamicKvsElem.key,
                    value: basicTypeValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.BasicTypeDynamicCollection = BasicTypeDynamicCollection;
class ChangeKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ChangeKV = ChangeKV;
class ChangeDynamicCollection {
    constructor(arg) {
        this.kind = "ChangeDynamicCollection";
        Object.assign(this, arg);
    }
    changeCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    changeCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let changeValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                changeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(newDecoder);
                reduceDynamicKvsAcc.push(new ChangeKV({ key: reduceDynamicKvsElem.key, value: changeValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    changeCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutChange(newEncoder, convertLoopElem.value);
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
    changeCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let changeValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                changeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(newDecoder);
                reduceDynamicKvsAcc.push(new ChangeKV({ key: reduceDynamicKvsElem.key, value: changeValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ChangeDynamicCollection = ChangeDynamicCollection;
class ChangesetKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ChangesetKV = ChangesetKV;
class ChangesetDynamicCollection {
    constructor(arg) {
        this.kind = "ChangesetDynamicCollection";
        Object.assign(this, arg);
    }
    changesetCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    changesetCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let changesetValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                changesetValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(newDecoder);
                reduceDynamicKvsAcc.push(new ChangesetKV({
                    key: reduceDynamicKvsElem.key,
                    value: changesetValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    changesetCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(newEncoder, convertLoopElem.value);
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
    changesetCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let changesetValue;
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                changesetValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(newDecoder);
                reduceDynamicKvsAcc.push(new ChangesetKV({
                    key: reduceDynamicKvsElem.key,
                    value: changesetValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ChangesetDynamicCollection = ChangesetDynamicCollection;
class CollectionKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.CollectionKV = CollectionKV;
class CollectionDynamicCollection {
    constructor(arg) {
        this.kind = "CollectionDynamicCollection";
        Object.assign(this, arg);
    }
    collectionCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    collectionCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let collectionValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                collectionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(newDecoder);
                reduceDynamicKvsAcc.push(new CollectionKV({
                    key: reduceDynamicKvsElem.key,
                    value: collectionValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    collectionCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(newEncoder, convertLoopElem.value);
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
    collectionCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let collectionValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                collectionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(newDecoder);
                reduceDynamicKvsAcc.push(new CollectionKV({
                    key: reduceDynamicKvsElem.key,
                    value: collectionValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.CollectionDynamicCollection = CollectionDynamicCollection;
class ColumnKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnKV = ColumnKV;
class ColumnDynamicCollection {
    constructor(arg) {
        this.kind = "ColumnDynamicCollection";
        Object.assign(this, arg);
    }
    columnCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    columnCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let columnValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                columnValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(newDecoder);
                reduceDynamicKvsAcc.push(new ColumnKV({ key: reduceDynamicKvsElem.key, value: columnValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    columnCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(newEncoder, convertLoopElem.value);
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
    columnCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let columnValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                columnValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(newDecoder);
                reduceDynamicKvsAcc.push(new ColumnKV({ key: reduceDynamicKvsElem.key, value: columnValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ColumnDynamicCollection = ColumnDynamicCollection;
class ColumnTypeKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnTypeKV = ColumnTypeKV;
class ColumnTypeDynamicCollection {
    constructor(arg) {
        this.kind = "ColumnTypeDynamicCollection";
        Object.assign(this, arg);
    }
    columnTypeCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    columnTypeCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let columnTypeValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                columnTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType(newDecoder);
                reduceDynamicKvsAcc.push(new ColumnTypeKV({
                    key: reduceDynamicKvsElem.key,
                    value: columnTypeValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    columnTypeCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutColumnType(newEncoder, convertLoopElem.value);
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
    columnTypeCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let columnTypeValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                columnTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType(newDecoder);
                reduceDynamicKvsAcc.push(new ColumnTypeKV({
                    key: reduceDynamicKvsElem.key,
                    value: columnTypeValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ColumnTypeDynamicCollection = ColumnTypeDynamicCollection;
class ConstructorKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ConstructorKV = ConstructorKV;
class ConstructorDynamicCollection {
    constructor(arg) {
        this.kind = "ConstructorDynamicCollection";
        Object.assign(this, arg);
    }
    constructorCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    constructorCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let constructorValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                constructorValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(newDecoder);
                reduceDynamicKvsAcc.push(new ConstructorKV({
                    key: reduceDynamicKvsElem.key,
                    value: constructorValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    constructorCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(newEncoder, convertLoopElem.value);
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
    constructorCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let constructorValue;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                constructorValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(newDecoder);
                reduceDynamicKvsAcc.push(new ConstructorKV({
                    key: reduceDynamicKvsElem.key,
                    value: constructorValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ConstructorDynamicCollection = ConstructorDynamicCollection;
class FieldKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.FieldKV = FieldKV;
class FieldDynamicCollection {
    constructor(arg) {
        this.kind = "FieldDynamicCollection";
        Object.assign(this, arg);
    }
    fieldCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    fieldCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let fieldValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                fieldValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(newDecoder);
                reduceDynamicKvsAcc.push(new FieldKV({ key: reduceDynamicKvsElem.key, value: fieldValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    fieldCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutField(newEncoder, convertLoopElem.value);
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
    fieldCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let fieldValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                fieldValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(newDecoder);
                reduceDynamicKvsAcc.push(new FieldKV({ key: reduceDynamicKvsElem.key, value: fieldValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.FieldDynamicCollection = FieldDynamicCollection;
class FunctionKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.FunctionKV = FunctionKV;
class FunctionDynamicCollection {
    constructor(arg) {
        this.kind = "FunctionDynamicCollection";
        Object.assign(this, arg);
    }
    functionCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    functionCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let functionValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                functionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(newDecoder);
                reduceDynamicKvsAcc.push(new FunctionKV({ key: reduceDynamicKvsElem.key, value: functionValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    functionCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(newEncoder, convertLoopElem.value);
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
    functionCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let functionValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                functionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(newDecoder);
                reduceDynamicKvsAcc.push(new FunctionKV({ key: reduceDynamicKvsElem.key, value: functionValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.FunctionDynamicCollection = FunctionDynamicCollection;
class LanguageKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.LanguageKV = LanguageKV;
class LanguageDynamicCollection {
    constructor(arg) {
        this.kind = "LanguageDynamicCollection";
        Object.assign(this, arg);
    }
    languageCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    languageCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let languageValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                languageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage(newDecoder);
                reduceDynamicKvsAcc.push(new LanguageKV({ key: reduceDynamicKvsElem.key, value: languageValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    languageCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutLanguage(newEncoder, convertLoopElem.value);
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
    languageCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let languageValue;
            let newDecoder;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                languageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage(newDecoder);
                reduceDynamicKvsAcc.push(new LanguageKV({ key: reduceDynamicKvsElem.key, value: languageValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.LanguageDynamicCollection = LanguageDynamicCollection;
class PackageKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.PackageKV = PackageKV;
class PackageDynamicCollection {
    constructor(arg) {
        this.kind = "PackageDynamicCollection";
        Object.assign(this, arg);
    }
    packageCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    packageCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let packageValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                packageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(newDecoder);
                reduceDynamicKvsAcc.push(new PackageKV({ key: reduceDynamicKvsElem.key, value: packageValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    packageCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(newEncoder, convertLoopElem.value);
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
    packageCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let packageValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                packageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(newDecoder);
                reduceDynamicKvsAcc.push(new PackageKV({ key: reduceDynamicKvsElem.key, value: packageValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.PackageDynamicCollection = PackageDynamicCollection;
class SchemaKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.SchemaKV = SchemaKV;
class SchemaDynamicCollection {
    constructor(arg) {
        this.kind = "SchemaDynamicCollection";
        Object.assign(this, arg);
    }
    schemaCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    schemaCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let schemaValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                schemaValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(newDecoder);
                reduceDynamicKvsAcc.push(new SchemaKV({ key: reduceDynamicKvsElem.key, value: schemaValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    schemaCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(newEncoder, convertLoopElem.value);
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
    schemaCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let schemaValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                schemaValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(newDecoder);
                reduceDynamicKvsAcc.push(new SchemaKV({ key: reduceDynamicKvsElem.key, value: schemaValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.SchemaDynamicCollection = SchemaDynamicCollection;
class SchemaReferenceKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.SchemaReferenceKV = SchemaReferenceKV;
class SchemaReferenceDynamicCollection {
    constructor(arg) {
        this.kind = "SchemaReferenceDynamicCollection";
        Object.assign(this, arg);
    }
    schemaReferenceCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    schemaReferenceCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let schemaReferenceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                schemaReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(newDecoder);
                reduceDynamicKvsAcc.push(new SchemaReferenceKV({
                    key: reduceDynamicKvsElem.key,
                    value: schemaReferenceValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    schemaReferenceCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(newEncoder, convertLoopElem.value);
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
    schemaReferenceCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let schemaReferenceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                schemaReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(newDecoder);
                reduceDynamicKvsAcc.push(new SchemaReferenceKV({
                    key: reduceDynamicKvsElem.key,
                    value: schemaReferenceValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.SchemaReferenceDynamicCollection = SchemaReferenceDynamicCollection;
class ServiceKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ServiceKV = ServiceKV;
class ServiceDynamicCollection {
    constructor(arg) {
        this.kind = "ServiceDynamicCollection";
        Object.assign(this, arg);
    }
    serviceCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    serviceCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let serviceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                serviceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(newDecoder);
                reduceDynamicKvsAcc.push(new ServiceKV({ key: reduceDynamicKvsElem.key, value: serviceValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    serviceCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutService(newEncoder, convertLoopElem.value);
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
    serviceCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let serviceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                serviceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(newDecoder);
                reduceDynamicKvsAcc.push(new ServiceKV({ key: reduceDynamicKvsElem.key, value: serviceValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.ServiceDynamicCollection = ServiceDynamicCollection;
class StructureKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.StructureKV = StructureKV;
class StructureDynamicCollection {
    constructor(arg) {
        this.kind = "StructureDynamicCollection";
        Object.assign(this, arg);
    }
    structureCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    structureCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let structureValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                structureValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(newDecoder);
                reduceDynamicKvsAcc.push(new StructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: structureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    structureCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(newEncoder, convertLoopElem.value);
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
    structureCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let structureValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                structureValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(newDecoder);
                reduceDynamicKvsAcc.push(new StructureKV({
                    key: reduceDynamicKvsElem.key,
                    value: structureValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.StructureDynamicCollection = StructureDynamicCollection;
class TableKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.TableKV = TableKV;
class TableDynamicCollection {
    constructor(arg) {
        this.kind = "TableDynamicCollection";
        Object.assign(this, arg);
    }
    tableCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    tableCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let tableValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                tableValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(newDecoder);
                reduceDynamicKvsAcc.push(new TableKV({ key: reduceDynamicKvsElem.key, value: tableValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    tableCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutTable(newEncoder, convertLoopElem.value);
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
    tableCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let tableValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                tableValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(newDecoder);
                reduceDynamicKvsAcc.push(new TableKV({ key: reduceDynamicKvsElem.key, value: tableValue }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.TableDynamicCollection = TableDynamicCollection;
class TableReferenceKV {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.TableReferenceKV = TableReferenceKV;
class TableReferenceDynamicCollection {
    constructor(arg) {
        this.kind = "TableReferenceDynamicCollection";
        Object.assign(this, arg);
    }
    tableReferenceCollectionDelete(toDelete) {
        return __awaiter(this, void 0, void 0, function* () {
            let dynamicObject;
            dynamicObject = this.dynamicObj;
            return yield dynamicObject.binaryCollectionDelete(toDelete);
        });
    }
    tableReferenceCollectionFetch(toFetch) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let tableReferenceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionFetch(toFetch);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                tableReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(newDecoder);
                reduceDynamicKvsAcc.push(new TableReferenceKV({
                    key: reduceDynamicKvsElem.key,
                    value: tableReferenceValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
    tableReferenceCollectionSave(toSave) {
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
                typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(newEncoder, convertLoopElem.value);
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
    tableReferenceCollectionSlice(offset, size) {
        return __awaiter(this, void 0, void 0, function* () {
            let collectionEncoding;
            let dynamicKvs;
            let dynamicObject;
            let newDecoder;
            let tableReferenceValue;
            dynamicObject = this.dynamicObj;
            dynamicKvs = yield dynamicObject.binaryCollectionSlice(offset, size);
            let reduceDynamicKvsIndex = 0;
            let reduceDynamicKvsAcc = [];
            for (let reduceDynamicKvsElem of dynamicKvs) {
                collectionEncoding = dynamicObject.binaryCollectionEncoding();
                newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
                tableReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(newDecoder);
                reduceDynamicKvsAcc.push(new TableReferenceKV({
                    key: reduceDynamicKvsElem.key,
                    value: tableReferenceValue
                }));
                reduceDynamicKvsAcc = reduceDynamicKvsAcc;
                reduceDynamicKvsIndex++;
            }
            return reduceDynamicKvsAcc;
        });
    }
}
exports.TableReferenceDynamicCollection = TableReferenceDynamicCollection;
