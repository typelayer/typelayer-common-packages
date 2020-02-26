// Module: schemas.world.collections
import * as typelayerCSchemasWorldDynamic from "./dynamic";
import * as typelayerCSchemasWorldStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";

export class FileKV {
  key: string;
  value: typelayerCSchemasWorldStructures.File;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasWorldStructures.File;
  }) {
    Object.assign(this, arg);
  }
}

export interface FileCollection {
  fileCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  fileCollectionFetch: (toFetch: Array<string>) => Promise<Array<FileKV>>;
  fileCollectionSave: (toSave: Array<FileKV>) => Promise<Array<string>>;
  fileCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<FileKV>>;
}

export class FileDynamicCollection implements FileCollection {
  kind: string = "FileDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async fileCollectionDelete(
    this: FileDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async fileCollectionFetch(
    this: FileDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<FileKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let fileValue: typelayerCSchemasWorldStructures.File;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FileKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      fileValue = typelayerCSchemasWorldDynamic.dynamicGetObjFile(newDecoder);
      reduceDynamicKvsAcc.push(
        new FileKV({ key: reduceDynamicKvsElem.key, value: fileValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async fileCollectionSave(
    this: FileDynamicCollection,
    toSave: Array<FileKV>
  ): Promise<Array<string>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicList: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let elemBinary: Uint8Array;
    let newEncoder: typelayerCommonDynamic.Encoder;
    dynamicObject = this.dynamicObj;
    let convertLoopIndex: number = 0;
    let convertLoopAcc: Array<typelayerCommonCollections.BinaryKV> = [];
    for (let convertLoopElem of toSave) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newEncoder = collectionEncoding.encodingStartEncoding();
      typelayerCSchemasWorldDynamic.dynamicPutFile(
        newEncoder,
        convertLoopElem.value
      );
      elemBinary = newEncoder.encoderToBinary();
      convertLoopAcc.push(
        new typelayerCommonCollections.BinaryKV({
          key: convertLoopElem.key,
          value: elemBinary
        })
      );

      convertLoopAcc = convertLoopAcc;
      convertLoopIndex++;
    }
    dynamicList = convertLoopAcc;
    return await dynamicObject.binaryCollectionSave(dynamicList);
  }
  async fileCollectionSlice(
    this: FileDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<FileKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let fileValue: typelayerCSchemasWorldStructures.File;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FileKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      fileValue = typelayerCSchemasWorldDynamic.dynamicGetObjFile(newDecoder);
      reduceDynamicKvsAcc.push(
        new FileKV({ key: reduceDynamicKvsElem.key, value: fileValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}
