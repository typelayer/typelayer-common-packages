// Module: schemas.definitions.collections
import * as typelayerCSchemasDefinitionsDynamic from "./dynamic";
import * as typelayerCSchemasDefinitionsStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
import * as typelayerCommonDynamic from "typelayer-common";

export class ApplyChangesProxyKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  }) {
    Object.assign(this, arg);
  }
}

export interface ApplyChangesProxyCollection {
  applyChangesProxyCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  applyChangesProxyCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<ApplyChangesProxyKV>>;
  applyChangesProxyCollectionSave: (
    toSave: Array<ApplyChangesProxyKV>
  ) => Promise<Array<string>>;
  applyChangesProxyCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ApplyChangesProxyKV>>;
}

export class ApplyChangesProxyDynamicCollection
  implements ApplyChangesProxyCollection {
  kind: string = "ApplyChangesProxyDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async applyChangesProxyCollectionDelete(
    this: ApplyChangesProxyDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async applyChangesProxyCollectionFetch(
    this: ApplyChangesProxyDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ApplyChangesProxyKV>> {
    let applyChangesProxyValue: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ApplyChangesProxyKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      applyChangesProxyValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ApplyChangesProxyKV({
          key: reduceDynamicKvsElem.key,
          value: applyChangesProxyValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async applyChangesProxyCollectionSave(
    this: ApplyChangesProxyDynamicCollection,
    toSave: Array<ApplyChangesProxyKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
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
  async applyChangesProxyCollectionSlice(
    this: ApplyChangesProxyDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ApplyChangesProxyKV>> {
    let applyChangesProxyValue: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ApplyChangesProxyKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      applyChangesProxyValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ApplyChangesProxyKV({
          key: reduceDynamicKvsElem.key,
          value: applyChangesProxyValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class BackendKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Backend;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Backend;
  }) {
    Object.assign(this, arg);
  }
}

export interface BackendCollection {
  backendCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  backendCollectionFetch: (toFetch: Array<string>) => Promise<Array<BackendKV>>;
  backendCollectionSave: (toSave: Array<BackendKV>) => Promise<Array<string>>;
  backendCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<BackendKV>>;
}

export class BackendDynamicCollection implements BackendCollection {
  kind: string = "BackendDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async backendCollectionDelete(
    this: BackendDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async backendCollectionFetch(
    this: BackendDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<BackendKV>> {
    let backendValue: typelayerCSchemasDefinitionsStructures.Backend;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<BackendKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      backendValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new BackendKV({ key: reduceDynamicKvsElem.key, value: backendValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async backendCollectionSave(
    this: BackendDynamicCollection,
    toSave: Array<BackendKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutBackend(
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
  async backendCollectionSlice(
    this: BackendDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<BackendKV>> {
    let backendValue: typelayerCSchemasDefinitionsStructures.Backend;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<BackendKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      backendValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBackend(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new BackendKV({ key: reduceDynamicKvsElem.key, value: backendValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class BasicTypeKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.BasicType;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.BasicType;
  }) {
    Object.assign(this, arg);
  }
}

export interface BasicTypeCollection {
  basicTypeCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  basicTypeCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<BasicTypeKV>>;
  basicTypeCollectionSave: (
    toSave: Array<BasicTypeKV>
  ) => Promise<Array<string>>;
  basicTypeCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<BasicTypeKV>>;
}

export class BasicTypeDynamicCollection implements BasicTypeCollection {
  kind: string = "BasicTypeDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async basicTypeCollectionDelete(
    this: BasicTypeDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async basicTypeCollectionFetch(
    this: BasicTypeDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<BasicTypeKV>> {
    let basicTypeValue: typelayerCSchemasDefinitionsStructures.BasicType;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<BasicTypeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      basicTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new BasicTypeKV({
          key: reduceDynamicKvsElem.key,
          value: basicTypeValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async basicTypeCollectionSave(
    this: BasicTypeDynamicCollection,
    toSave: Array<BasicTypeKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutBasicType(
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
  async basicTypeCollectionSlice(
    this: BasicTypeDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<BasicTypeKV>> {
    let basicTypeValue: typelayerCSchemasDefinitionsStructures.BasicType;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<BasicTypeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      basicTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjBasicType(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new BasicTypeKV({
          key: reduceDynamicKvsElem.key,
          value: basicTypeValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ChangeKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Change;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Change;
  }) {
    Object.assign(this, arg);
  }
}

export interface ChangeCollection {
  changeCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  changeCollectionFetch: (toFetch: Array<string>) => Promise<Array<ChangeKV>>;
  changeCollectionSave: (toSave: Array<ChangeKV>) => Promise<Array<string>>;
  changeCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ChangeKV>>;
}

export class ChangeDynamicCollection implements ChangeCollection {
  kind: string = "ChangeDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async changeCollectionDelete(
    this: ChangeDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async changeCollectionFetch(
    this: ChangeDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ChangeKV>> {
    let changeValue: typelayerCSchemasDefinitionsStructures.Change;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ChangeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      changeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ChangeKV({ key: reduceDynamicKvsElem.key, value: changeValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async changeCollectionSave(
    this: ChangeDynamicCollection,
    toSave: Array<ChangeKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutChange(
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
  async changeCollectionSlice(
    this: ChangeDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ChangeKV>> {
    let changeValue: typelayerCSchemasDefinitionsStructures.Change;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ChangeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      changeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ChangeKV({ key: reduceDynamicKvsElem.key, value: changeValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ChangesetKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Changeset;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Changeset;
  }) {
    Object.assign(this, arg);
  }
}

export interface ChangesetCollection {
  changesetCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  changesetCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<ChangesetKV>>;
  changesetCollectionSave: (
    toSave: Array<ChangesetKV>
  ) => Promise<Array<string>>;
  changesetCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ChangesetKV>>;
}

export class ChangesetDynamicCollection implements ChangesetCollection {
  kind: string = "ChangesetDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async changesetCollectionDelete(
    this: ChangesetDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async changesetCollectionFetch(
    this: ChangesetDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ChangesetKV>> {
    let changesetValue: typelayerCSchemasDefinitionsStructures.Changeset;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ChangesetKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      changesetValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ChangesetKV({
          key: reduceDynamicKvsElem.key,
          value: changesetValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async changesetCollectionSave(
    this: ChangesetDynamicCollection,
    toSave: Array<ChangesetKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(
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
  async changesetCollectionSlice(
    this: ChangesetDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ChangesetKV>> {
    let changesetValue: typelayerCSchemasDefinitionsStructures.Changeset;
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ChangesetKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      changesetValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ChangesetKV({
          key: reduceDynamicKvsElem.key,
          value: changesetValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class CollectionKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Collection;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Collection;
  }) {
    Object.assign(this, arg);
  }
}

export interface CollectionCollection {
  collectionCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  collectionCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<CollectionKV>>;
  collectionCollectionSave: (
    toSave: Array<CollectionKV>
  ) => Promise<Array<string>>;
  collectionCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<CollectionKV>>;
}

export class CollectionDynamicCollection implements CollectionCollection {
  kind: string = "CollectionDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async collectionCollectionDelete(
    this: CollectionDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async collectionCollectionFetch(
    this: CollectionDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<CollectionKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let collectionValue: typelayerCSchemasDefinitionsStructures.Collection;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<CollectionKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      collectionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new CollectionKV({
          key: reduceDynamicKvsElem.key,
          value: collectionValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async collectionCollectionSave(
    this: CollectionDynamicCollection,
    toSave: Array<CollectionKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(
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
  async collectionCollectionSlice(
    this: CollectionDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<CollectionKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let collectionValue: typelayerCSchemasDefinitionsStructures.Collection;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<CollectionKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      collectionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new CollectionKV({
          key: reduceDynamicKvsElem.key,
          value: collectionValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ColumnKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Column;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Column;
  }) {
    Object.assign(this, arg);
  }
}

export interface ColumnCollection {
  columnCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  columnCollectionFetch: (toFetch: Array<string>) => Promise<Array<ColumnKV>>;
  columnCollectionSave: (toSave: Array<ColumnKV>) => Promise<Array<string>>;
  columnCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ColumnKV>>;
}

export class ColumnDynamicCollection implements ColumnCollection {
  kind: string = "ColumnDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async columnCollectionDelete(
    this: ColumnDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async columnCollectionFetch(
    this: ColumnDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ColumnKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let columnValue: typelayerCSchemasDefinitionsStructures.Column;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ColumnKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      columnValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ColumnKV({ key: reduceDynamicKvsElem.key, value: columnValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async columnCollectionSave(
    this: ColumnDynamicCollection,
    toSave: Array<ColumnKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(
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
  async columnCollectionSlice(
    this: ColumnDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ColumnKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let columnValue: typelayerCSchemasDefinitionsStructures.Column;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ColumnKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      columnValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ColumnKV({ key: reduceDynamicKvsElem.key, value: columnValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ColumnTypeKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.ColumnType;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.ColumnType;
  }) {
    Object.assign(this, arg);
  }
}

export interface ColumnTypeCollection {
  columnTypeCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  columnTypeCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<ColumnTypeKV>>;
  columnTypeCollectionSave: (
    toSave: Array<ColumnTypeKV>
  ) => Promise<Array<string>>;
  columnTypeCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ColumnTypeKV>>;
}

export class ColumnTypeDynamicCollection implements ColumnTypeCollection {
  kind: string = "ColumnTypeDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async columnTypeCollectionDelete(
    this: ColumnTypeDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async columnTypeCollectionFetch(
    this: ColumnTypeDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ColumnTypeKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let columnTypeValue: typelayerCSchemasDefinitionsStructures.ColumnType;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ColumnTypeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      columnTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ColumnTypeKV({
          key: reduceDynamicKvsElem.key,
          value: columnTypeValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async columnTypeCollectionSave(
    this: ColumnTypeDynamicCollection,
    toSave: Array<ColumnTypeKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutColumnType(
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
  async columnTypeCollectionSlice(
    this: ColumnTypeDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ColumnTypeKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let columnTypeValue: typelayerCSchemasDefinitionsStructures.ColumnType;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ColumnTypeKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      columnTypeValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumnType(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ColumnTypeKV({
          key: reduceDynamicKvsElem.key,
          value: columnTypeValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ConstructorKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Constructor;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Constructor;
  }) {
    Object.assign(this, arg);
  }
}

export interface ConstructorCollection {
  constructorCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  constructorCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<ConstructorKV>>;
  constructorCollectionSave: (
    toSave: Array<ConstructorKV>
  ) => Promise<Array<string>>;
  constructorCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ConstructorKV>>;
}

export class ConstructorDynamicCollection implements ConstructorCollection {
  kind: string = "ConstructorDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async constructorCollectionDelete(
    this: ConstructorDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async constructorCollectionFetch(
    this: ConstructorDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ConstructorKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let constructorValue: typelayerCSchemasDefinitionsStructures.Constructor;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ConstructorKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      constructorValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ConstructorKV({
          key: reduceDynamicKvsElem.key,
          value: constructorValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async constructorCollectionSave(
    this: ConstructorDynamicCollection,
    toSave: Array<ConstructorKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(
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
  async constructorCollectionSlice(
    this: ConstructorDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ConstructorKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let constructorValue: typelayerCSchemasDefinitionsStructures.Constructor;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ConstructorKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      constructorValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ConstructorKV({
          key: reduceDynamicKvsElem.key,
          value: constructorValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class FieldKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Field;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Field;
  }) {
    Object.assign(this, arg);
  }
}

export interface FieldCollection {
  fieldCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  fieldCollectionFetch: (toFetch: Array<string>) => Promise<Array<FieldKV>>;
  fieldCollectionSave: (toSave: Array<FieldKV>) => Promise<Array<string>>;
  fieldCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<FieldKV>>;
}

export class FieldDynamicCollection implements FieldCollection {
  kind: string = "FieldDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async fieldCollectionDelete(
    this: FieldDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async fieldCollectionFetch(
    this: FieldDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<FieldKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let fieldValue: typelayerCSchemasDefinitionsStructures.Field;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FieldKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      fieldValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new FieldKV({ key: reduceDynamicKvsElem.key, value: fieldValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async fieldCollectionSave(
    this: FieldDynamicCollection,
    toSave: Array<FieldKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutField(
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
  async fieldCollectionSlice(
    this: FieldDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<FieldKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let fieldValue: typelayerCSchemasDefinitionsStructures.Field;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FieldKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      fieldValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new FieldKV({ key: reduceDynamicKvsElem.key, value: fieldValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class FunctionKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Function;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Function;
  }) {
    Object.assign(this, arg);
  }
}

export interface FunctionCollection {
  functionCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  functionCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<FunctionKV>>;
  functionCollectionSave: (toSave: Array<FunctionKV>) => Promise<Array<string>>;
  functionCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<FunctionKV>>;
}

export class FunctionDynamicCollection implements FunctionCollection {
  kind: string = "FunctionDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async functionCollectionDelete(
    this: FunctionDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async functionCollectionFetch(
    this: FunctionDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<FunctionKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let functionValue: typelayerCSchemasDefinitionsStructures.Function;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FunctionKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      functionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new FunctionKV({ key: reduceDynamicKvsElem.key, value: functionValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async functionCollectionSave(
    this: FunctionDynamicCollection,
    toSave: Array<FunctionKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(
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
  async functionCollectionSlice(
    this: FunctionDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<FunctionKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let functionValue: typelayerCSchemasDefinitionsStructures.Function;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<FunctionKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      functionValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new FunctionKV({ key: reduceDynamicKvsElem.key, value: functionValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class LanguageKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Language;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Language;
  }) {
    Object.assign(this, arg);
  }
}

export interface LanguageCollection {
  languageCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  languageCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<LanguageKV>>;
  languageCollectionSave: (toSave: Array<LanguageKV>) => Promise<Array<string>>;
  languageCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<LanguageKV>>;
}

export class LanguageDynamicCollection implements LanguageCollection {
  kind: string = "LanguageDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async languageCollectionDelete(
    this: LanguageDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async languageCollectionFetch(
    this: LanguageDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<LanguageKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let languageValue: typelayerCSchemasDefinitionsStructures.Language;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<LanguageKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      languageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new LanguageKV({ key: reduceDynamicKvsElem.key, value: languageValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async languageCollectionSave(
    this: LanguageDynamicCollection,
    toSave: Array<LanguageKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutLanguage(
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
  async languageCollectionSlice(
    this: LanguageDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<LanguageKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let languageValue: typelayerCSchemasDefinitionsStructures.Language;
    let newDecoder: typelayerCommonDynamic.Decoder;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<LanguageKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      languageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjLanguage(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new LanguageKV({ key: reduceDynamicKvsElem.key, value: languageValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class PackageKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Package;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Package;
  }) {
    Object.assign(this, arg);
  }
}

export interface PackageCollection {
  packageCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  packageCollectionFetch: (toFetch: Array<string>) => Promise<Array<PackageKV>>;
  packageCollectionSave: (toSave: Array<PackageKV>) => Promise<Array<string>>;
  packageCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<PackageKV>>;
}

export class PackageDynamicCollection implements PackageCollection {
  kind: string = "PackageDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async packageCollectionDelete(
    this: PackageDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async packageCollectionFetch(
    this: PackageDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<PackageKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let packageValue: typelayerCSchemasDefinitionsStructures.Package;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<PackageKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      packageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new PackageKV({ key: reduceDynamicKvsElem.key, value: packageValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async packageCollectionSave(
    this: PackageDynamicCollection,
    toSave: Array<PackageKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(
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
  async packageCollectionSlice(
    this: PackageDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<PackageKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let packageValue: typelayerCSchemasDefinitionsStructures.Package;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<PackageKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      packageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new PackageKV({ key: reduceDynamicKvsElem.key, value: packageValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class SchemaKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Schema;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Schema;
  }) {
    Object.assign(this, arg);
  }
}

export interface SchemaCollection {
  schemaCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  schemaCollectionFetch: (toFetch: Array<string>) => Promise<Array<SchemaKV>>;
  schemaCollectionSave: (toSave: Array<SchemaKV>) => Promise<Array<string>>;
  schemaCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<SchemaKV>>;
}

export class SchemaDynamicCollection implements SchemaCollection {
  kind: string = "SchemaDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async schemaCollectionDelete(
    this: SchemaDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async schemaCollectionFetch(
    this: SchemaDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<SchemaKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let schemaValue: typelayerCSchemasDefinitionsStructures.Schema;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<SchemaKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      schemaValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new SchemaKV({ key: reduceDynamicKvsElem.key, value: schemaValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async schemaCollectionSave(
    this: SchemaDynamicCollection,
    toSave: Array<SchemaKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(
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
  async schemaCollectionSlice(
    this: SchemaDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<SchemaKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let schemaValue: typelayerCSchemasDefinitionsStructures.Schema;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<SchemaKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      schemaValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new SchemaKV({ key: reduceDynamicKvsElem.key, value: schemaValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class SchemaReferenceKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.SchemaReference;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.SchemaReference;
  }) {
    Object.assign(this, arg);
  }
}

export interface SchemaReferenceCollection {
  schemaReferenceCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  schemaReferenceCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<SchemaReferenceKV>>;
  schemaReferenceCollectionSave: (
    toSave: Array<SchemaReferenceKV>
  ) => Promise<Array<string>>;
  schemaReferenceCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<SchemaReferenceKV>>;
}

export class SchemaReferenceDynamicCollection
  implements SchemaReferenceCollection {
  kind: string = "SchemaReferenceDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async schemaReferenceCollectionDelete(
    this: SchemaReferenceDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async schemaReferenceCollectionFetch(
    this: SchemaReferenceDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<SchemaReferenceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let schemaReferenceValue: typelayerCSchemasDefinitionsStructures.SchemaReference;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<SchemaReferenceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      schemaReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new SchemaReferenceKV({
          key: reduceDynamicKvsElem.key,
          value: schemaReferenceValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async schemaReferenceCollectionSave(
    this: SchemaReferenceDynamicCollection,
    toSave: Array<SchemaReferenceKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(
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
  async schemaReferenceCollectionSlice(
    this: SchemaReferenceDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<SchemaReferenceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let schemaReferenceValue: typelayerCSchemasDefinitionsStructures.SchemaReference;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<SchemaReferenceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      schemaReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new SchemaReferenceKV({
          key: reduceDynamicKvsElem.key,
          value: schemaReferenceValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class ServiceKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Service;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Service;
  }) {
    Object.assign(this, arg);
  }
}

export interface ServiceCollection {
  serviceCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  serviceCollectionFetch: (toFetch: Array<string>) => Promise<Array<ServiceKV>>;
  serviceCollectionSave: (toSave: Array<ServiceKV>) => Promise<Array<string>>;
  serviceCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<ServiceKV>>;
}

export class ServiceDynamicCollection implements ServiceCollection {
  kind: string = "ServiceDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async serviceCollectionDelete(
    this: ServiceDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async serviceCollectionFetch(
    this: ServiceDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<ServiceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let serviceValue: typelayerCSchemasDefinitionsStructures.Service;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ServiceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      serviceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ServiceKV({ key: reduceDynamicKvsElem.key, value: serviceValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async serviceCollectionSave(
    this: ServiceDynamicCollection,
    toSave: Array<ServiceKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutService(
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
  async serviceCollectionSlice(
    this: ServiceDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<ServiceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let serviceValue: typelayerCSchemasDefinitionsStructures.Service;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<ServiceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      serviceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new ServiceKV({ key: reduceDynamicKvsElem.key, value: serviceValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class StructureKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Structure;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Structure;
  }) {
    Object.assign(this, arg);
  }
}

export interface StructureCollection {
  structureCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  structureCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<StructureKV>>;
  structureCollectionSave: (
    toSave: Array<StructureKV>
  ) => Promise<Array<string>>;
  structureCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<StructureKV>>;
}

export class StructureDynamicCollection implements StructureCollection {
  kind: string = "StructureDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async structureCollectionDelete(
    this: StructureDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async structureCollectionFetch(
    this: StructureDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<StructureKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let structureValue: typelayerCSchemasDefinitionsStructures.Structure;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<StructureKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      structureValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new StructureKV({
          key: reduceDynamicKvsElem.key,
          value: structureValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async structureCollectionSave(
    this: StructureDynamicCollection,
    toSave: Array<StructureKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(
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
  async structureCollectionSlice(
    this: StructureDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<StructureKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let structureValue: typelayerCSchemasDefinitionsStructures.Structure;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<StructureKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      structureValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new StructureKV({
          key: reduceDynamicKvsElem.key,
          value: structureValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class TableKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.Table;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Table;
  }) {
    Object.assign(this, arg);
  }
}

export interface TableCollection {
  tableCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
  tableCollectionFetch: (toFetch: Array<string>) => Promise<Array<TableKV>>;
  tableCollectionSave: (toSave: Array<TableKV>) => Promise<Array<string>>;
  tableCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<TableKV>>;
}

export class TableDynamicCollection implements TableCollection {
  kind: string = "TableDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async tableCollectionDelete(
    this: TableDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async tableCollectionFetch(
    this: TableDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<TableKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let tableValue: typelayerCSchemasDefinitionsStructures.Table;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<TableKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      tableValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new TableKV({ key: reduceDynamicKvsElem.key, value: tableValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async tableCollectionSave(
    this: TableDynamicCollection,
    toSave: Array<TableKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutTable(
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
  async tableCollectionSlice(
    this: TableDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<TableKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let tableValue: typelayerCSchemasDefinitionsStructures.Table;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<TableKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      tableValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new TableKV({ key: reduceDynamicKvsElem.key, value: tableValue })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}

export class TableReferenceKV {
  key: string;
  value: typelayerCSchemasDefinitionsStructures.TableReference;
  constructor(arg: {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.TableReference;
  }) {
    Object.assign(this, arg);
  }
}

export interface TableReferenceCollection {
  tableReferenceCollectionDelete: (
    toDelete: Array<string>
  ) => Promise<Array<string>>;
  tableReferenceCollectionFetch: (
    toFetch: Array<string>
  ) => Promise<Array<TableReferenceKV>>;
  tableReferenceCollectionSave: (
    toSave: Array<TableReferenceKV>
  ) => Promise<Array<string>>;
  tableReferenceCollectionSlice: (
    offset: number,
    count: number
  ) => Promise<Array<TableReferenceKV>>;
}

export class TableReferenceDynamicCollection
  implements TableReferenceCollection {
  kind: string = "TableReferenceDynamicCollection";
  dynamicObj: typelayerCommonCollections.BinaryCollection;
  constructor(arg: {
    dynamicObj: typelayerCommonCollections.BinaryCollection;
  }) {
    Object.assign(this, arg);
  }
  async tableReferenceCollectionDelete(
    this: TableReferenceDynamicCollection,
    toDelete: Array<string>
  ): Promise<Array<string>> {
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    dynamicObject = this.dynamicObj;
    return await dynamicObject.binaryCollectionDelete(toDelete);
  }
  async tableReferenceCollectionFetch(
    this: TableReferenceDynamicCollection,
    toFetch: Array<string>
  ): Promise<Array<TableReferenceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let tableReferenceValue: typelayerCSchemasDefinitionsStructures.TableReference;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionFetch(toFetch);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<TableReferenceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      tableReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new TableReferenceKV({
          key: reduceDynamicKvsElem.key,
          value: tableReferenceValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
  async tableReferenceCollectionSave(
    this: TableReferenceDynamicCollection,
    toSave: Array<TableReferenceKV>
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
      typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(
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
  async tableReferenceCollectionSlice(
    this: TableReferenceDynamicCollection,
    offset: number,
    size: number
  ): Promise<Array<TableReferenceKV>> {
    let collectionEncoding: typelayerCommonDynamic.Encoding;
    let dynamicKvs: Array<typelayerCommonCollections.BinaryKV>;
    let dynamicObject: typelayerCommonCollections.BinaryCollection;
    let newDecoder: typelayerCommonDynamic.Decoder;
    let tableReferenceValue: typelayerCSchemasDefinitionsStructures.TableReference;
    dynamicObject = this.dynamicObj;
    dynamicKvs = await dynamicObject.binaryCollectionSlice(offset, size);
    let reduceDynamicKvsIndex: number = 0;
    let reduceDynamicKvsAcc: Array<TableReferenceKV> = [];
    for (let reduceDynamicKvsElem of dynamicKvs) {
      collectionEncoding = dynamicObject.binaryCollectionEncoding();
      newDecoder = collectionEncoding.encodingStartDecoding(
        reduceDynamicKvsElem.value
      );
      tableReferenceValue = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
        newDecoder
      );
      reduceDynamicKvsAcc.push(
        new TableReferenceKV({
          key: reduceDynamicKvsElem.key,
          value: tableReferenceValue
        })
      );

      reduceDynamicKvsAcc = reduceDynamicKvsAcc;
      reduceDynamicKvsIndex++;
    }
    return reduceDynamicKvsAcc;
  }
}
