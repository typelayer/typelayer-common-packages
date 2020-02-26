import * as typelayerCSchemasWorldStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
export declare class FileKV {
    key: string;
    value: typelayerCSchemasWorldStructures.File;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasWorldStructures.File;
    });
}
export interface FileCollection {
    fileCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    fileCollectionFetch: (toFetch: Array<string>) => Promise<Array<FileKV>>;
    fileCollectionSave: (toSave: Array<FileKV>) => Promise<Array<string>>;
    fileCollectionSlice: (offset: number, count: number) => Promise<Array<FileKV>>;
}
export declare class FileDynamicCollection implements FileCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    fileCollectionDelete(this: FileDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    fileCollectionFetch(this: FileDynamicCollection, toFetch: Array<string>): Promise<Array<FileKV>>;
    fileCollectionSave(this: FileDynamicCollection, toSave: Array<FileKV>): Promise<Array<string>>;
    fileCollectionSlice(this: FileDynamicCollection, offset: number, size: number): Promise<Array<FileKV>>;
}
