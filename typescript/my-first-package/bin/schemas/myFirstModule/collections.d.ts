import * as myFirstPackageSchemasMyFirstModuleStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
export declare class MyEnumStructureKV {
    key: string;
    value: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    constructor(arg: {
        key: string;
        value: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    });
}
export interface MyEnumStructureCollection {
    myEnumStructureCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    myEnumStructureCollectionFetch: (toFetch: Array<string>) => Promise<Array<MyEnumStructureKV>>;
    myEnumStructureCollectionSave: (toSave: Array<MyEnumStructureKV>) => Promise<Array<string>>;
    myEnumStructureCollectionSlice: (offset: number, count: number) => Promise<Array<MyEnumStructureKV>>;
}
export declare class MyEnumStructureDynamicCollection implements MyEnumStructureCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    myEnumStructureCollectionDelete(this: MyEnumStructureDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    myEnumStructureCollectionFetch(this: MyEnumStructureDynamicCollection, toFetch: Array<string>): Promise<Array<MyEnumStructureKV>>;
    myEnumStructureCollectionSave(this: MyEnumStructureDynamicCollection, toSave: Array<MyEnumStructureKV>): Promise<Array<string>>;
    myEnumStructureCollectionSlice(this: MyEnumStructureDynamicCollection, offset: number, size: number): Promise<Array<MyEnumStructureKV>>;
}
export declare class MyFirstStructureKV {
    key: string;
    value: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    constructor(arg: {
        key: string;
        value: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    });
}
export interface MyFirstStructureCollection {
    myFirstStructureCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    myFirstStructureCollectionFetch: (toFetch: Array<string>) => Promise<Array<MyFirstStructureKV>>;
    myFirstStructureCollectionSave: (toSave: Array<MyFirstStructureKV>) => Promise<Array<string>>;
    myFirstStructureCollectionSlice: (offset: number, count: number) => Promise<Array<MyFirstStructureKV>>;
}
export declare class MyFirstStructureDynamicCollection implements MyFirstStructureCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    myFirstStructureCollectionDelete(this: MyFirstStructureDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    myFirstStructureCollectionFetch(this: MyFirstStructureDynamicCollection, toFetch: Array<string>): Promise<Array<MyFirstStructureKV>>;
    myFirstStructureCollectionSave(this: MyFirstStructureDynamicCollection, toSave: Array<MyFirstStructureKV>): Promise<Array<string>>;
    myFirstStructureCollectionSlice(this: MyFirstStructureDynamicCollection, offset: number, size: number): Promise<Array<MyFirstStructureKV>>;
}
