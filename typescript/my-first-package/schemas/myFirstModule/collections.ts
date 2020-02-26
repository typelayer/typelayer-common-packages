// Module: schemas.myFirstModule.collections
import * as myFirstPackageSchemasMyFirstModuleDynamic from "./dynamic";
import * as myFirstPackageSchemasMyFirstModuleStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";


export class MyEnumStructureKV {
    key: string;
    value: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    constructor(arg: {key: string; value: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;}) {
        Object.assign(this, arg);
    }
}

export interface MyEnumStructureCollection {
    myEnumStructureCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    myEnumStructureCollectionFetch: (toFetch: Array<string>) => Promise<Array<MyEnumStructureKV>>;
    myEnumStructureCollectionSave: (toSave: Array<MyEnumStructureKV>) => Promise<Array<string>>;
    myEnumStructureCollectionSlice: (offset: number, count: number) => Promise<Array<MyEnumStructureKV>>;
}

export class MyEnumStructureDynamicCollection implements MyEnumStructureCollection {
    kind : string = "MyEnumStructureDynamicCollection";
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {dynamicObj: typelayerCommonCollections.BinaryCollection;}) {
        Object.assign(this, arg);
    }
    async myEnumStructureCollectionDelete(this: MyEnumStructureDynamicCollection, toDelete: Array<string>): Promise<Array<string>> {
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        dynamicObject = this.dynamicObj;
        return await dynamicObject.binaryCollectionDelete(toDelete);
    }
    async myEnumStructureCollectionFetch(this: MyEnumStructureDynamicCollection, toFetch: Array<string>): Promise<Array<MyEnumStructureKV>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicKvs : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let myEnumStructureValue : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
        let newDecoder : typelayerCommonDynamic.Decoder;
        dynamicObject = this.dynamicObj;
        dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
        let reduceDynamicKvsIndex : number = 0;
        let reduceDynamicKvsAcc : Array<MyEnumStructureKV> = [];
        for (let reduceDynamicKvsElem of dynamicKvs) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
            myEnumStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(newDecoder);
            reduceDynamicKvsAcc.push(new MyEnumStructureKV({key: reduceDynamicKvsElem.key, value: myEnumStructureValue}));
            
            reduceDynamicKvsAcc = reduceDynamicKvsAcc;
            reduceDynamicKvsIndex++;
        }
        return reduceDynamicKvsAcc;
    }
    async myEnumStructureCollectionSave(this: MyEnumStructureDynamicCollection, toSave: Array<MyEnumStructureKV>): Promise<Array<string>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicList : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let elemBinary : Uint8Array;
        let newEncoder : typelayerCommonDynamic.Encoder;
        dynamicObject = this.dynamicObj;
        let convertLoopIndex : number = 0;
        let convertLoopAcc : Array<typelayerCommonCollections.BinaryKV> = [];
        for (let convertLoopElem of toSave) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newEncoder = collectionEncoding.encodingStartEncoding();
            myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(newEncoder, convertLoopElem.value);
            elemBinary = newEncoder.encoderToBinary();
            convertLoopAcc.push(new typelayerCommonCollections.BinaryKV({key: convertLoopElem.key, value: elemBinary}));
            
            convertLoopAcc = convertLoopAcc;
            convertLoopIndex++;
        }
        dynamicList = convertLoopAcc;
        return await dynamicObject.binaryCollectionSave(dynamicList);
    }
    async myEnumStructureCollectionSlice(this: MyEnumStructureDynamicCollection, offset: number, size: number): Promise<Array<MyEnumStructureKV>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicKvs : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let myEnumStructureValue : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
        let newDecoder : typelayerCommonDynamic.Decoder;
        dynamicObject = this.dynamicObj;
        dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
        let reduceDynamicKvsIndex : number = 0;
        let reduceDynamicKvsAcc : Array<MyEnumStructureKV> = [];
        for (let reduceDynamicKvsElem of dynamicKvs) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
            myEnumStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(newDecoder);
            reduceDynamicKvsAcc.push(new MyEnumStructureKV({key: reduceDynamicKvsElem.key, value: myEnumStructureValue}));
            
            reduceDynamicKvsAcc = reduceDynamicKvsAcc;
            reduceDynamicKvsIndex++;
        }
        return reduceDynamicKvsAcc;
    }
}

export class MyFirstStructureKV {
    key: string;
    value: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    constructor(arg: {key: string; value: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;}) {
        Object.assign(this, arg);
    }
}

export interface MyFirstStructureCollection {
    myFirstStructureCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    myFirstStructureCollectionFetch: (toFetch: Array<string>) => Promise<Array<MyFirstStructureKV>>;
    myFirstStructureCollectionSave: (toSave: Array<MyFirstStructureKV>) => Promise<Array<string>>;
    myFirstStructureCollectionSlice: (offset: number, count: number) => Promise<Array<MyFirstStructureKV>>;
}

export class MyFirstStructureDynamicCollection implements MyFirstStructureCollection {
    kind : string = "MyFirstStructureDynamicCollection";
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {dynamicObj: typelayerCommonCollections.BinaryCollection;}) {
        Object.assign(this, arg);
    }
    async myFirstStructureCollectionDelete(this: MyFirstStructureDynamicCollection, toDelete: Array<string>): Promise<Array<string>> {
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        dynamicObject = this.dynamicObj;
        return await dynamicObject.binaryCollectionDelete(toDelete);
    }
    async myFirstStructureCollectionFetch(this: MyFirstStructureDynamicCollection, toFetch: Array<string>): Promise<Array<MyFirstStructureKV>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicKvs : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let myFirstStructureValue : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
        let newDecoder : typelayerCommonDynamic.Decoder;
        dynamicObject = this.dynamicObj;
        dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
        let reduceDynamicKvsIndex : number = 0;
        let reduceDynamicKvsAcc : Array<MyFirstStructureKV> = [];
        for (let reduceDynamicKvsElem of dynamicKvs) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
            myFirstStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(newDecoder);
            reduceDynamicKvsAcc.push(new MyFirstStructureKV({key: reduceDynamicKvsElem.key, value: myFirstStructureValue}));
            
            reduceDynamicKvsAcc = reduceDynamicKvsAcc;
            reduceDynamicKvsIndex++;
        }
        return reduceDynamicKvsAcc;
    }
    async myFirstStructureCollectionSave(this: MyFirstStructureDynamicCollection, toSave: Array<MyFirstStructureKV>): Promise<Array<string>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicList : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let elemBinary : Uint8Array;
        let newEncoder : typelayerCommonDynamic.Encoder;
        dynamicObject = this.dynamicObj;
        let convertLoopIndex : number = 0;
        let convertLoopAcc : Array<typelayerCommonCollections.BinaryKV> = [];
        for (let convertLoopElem of toSave) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newEncoder = collectionEncoding.encodingStartEncoding();
            myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(newEncoder, convertLoopElem.value);
            elemBinary = newEncoder.encoderToBinary();
            convertLoopAcc.push(new typelayerCommonCollections.BinaryKV({key: convertLoopElem.key, value: elemBinary}));
            
            convertLoopAcc = convertLoopAcc;
            convertLoopIndex++;
        }
        dynamicList = convertLoopAcc;
        return await dynamicObject.binaryCollectionSave(dynamicList);
    }
    async myFirstStructureCollectionSlice(this: MyFirstStructureDynamicCollection, offset: number, size: number): Promise<Array<MyFirstStructureKV>> {
        let collectionEncoding : typelayerCommonDynamic.Encoding;
        let dynamicKvs : Array<typelayerCommonCollections.BinaryKV>;
        let dynamicObject : typelayerCommonCollections.BinaryCollection;
        let myFirstStructureValue : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
        let newDecoder : typelayerCommonDynamic.Decoder;
        dynamicObject = this.dynamicObj;
        dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
        let reduceDynamicKvsIndex : number = 0;
        let reduceDynamicKvsAcc : Array<MyFirstStructureKV> = [];
        for (let reduceDynamicKvsElem of dynamicKvs) {
            collectionEncoding = dynamicObject.binaryCollectionEncoding();
            newDecoder = collectionEncoding.encodingStartDecoding(reduceDynamicKvsElem.value);
            myFirstStructureValue = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(newDecoder);
            reduceDynamicKvsAcc.push(new MyFirstStructureKV({key: reduceDynamicKvsElem.key, value: myFirstStructureValue}));
            
            reduceDynamicKvsAcc = reduceDynamicKvsAcc;
            reduceDynamicKvsIndex++;
        }
        return reduceDynamicKvsAcc;
    }
}