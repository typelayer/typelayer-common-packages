import * as typelayerCSchemasDefinitionsDynamic from "../schemas/definitions/dynamic";
import * as typelayerCSchemasDefinitionsStructures from "../schemas/definitions/structures";
import * as typelayerCommonDynamic from "typelayer-common";
import * as typelayerCommonEncodingsJson from "typelayer-common";
import * as typelayerCommonEncodingsMsgpack from "typelayer-common";
import * as chai from "chai";
import * as mocha from "mocha";
mocha.describe("definitionsEncodableSymmetry", () => {
  mocha.it("applyChangesProxyAChanges0Json", () => {
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    aChangesFieldTestVal = [];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyAChanges0MsgPack", () => {
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    aChangesFieldTestVal = [];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyAChanges1Json", () => {
    let aChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    aChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    aChangesFieldTestVal = [aChangesBlocks];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyAChanges1MsgPack", () => {
    let aChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    aChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    aChangesFieldTestVal = [aChangesBlocks];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyAChanges2Json", () => {
    let aChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    aChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    aChangesFieldTestVal = [aChangesBlocks, aChangesBlocks];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyAChanges2MsgPack", () => {
    let aChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let aChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    aChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    aChangesFieldTestVal = [aChangesBlocks, aChangesBlocks];
    changesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      aChanges: aChangesFieldTestVal,
      changes: changesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges0Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesFieldTestVal = [];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges0MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesFieldTestVal = [];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges1Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges1MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges2Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks, changesBlocks];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyChanges2MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks, changesBlocks];
    aChangesDefault = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      changes: changesFieldTestVal,
      aChanges: aChangesDefault,
      package: packageDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyPackage0Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      package: packageFieldTestVal,
      changes: changesDefault,
      aChanges: aChangesDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyPackage0MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    zChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      package: packageFieldTestVal,
      changes: changesDefault,
      aChanges: aChangesDefault,
      zChanges: zChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges0Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    zChangesFieldTestVal = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges0MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    zChangesFieldTestVal = [];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges1Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    zChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    zChangesFieldTestVal = [zChangesBlocks];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges1MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    zChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    zChangesFieldTestVal = [zChangesBlocks];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges2Json", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    zChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    zChangesFieldTestVal = [zChangesBlocks, zChangesBlocks];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("applyChangesProxyZChanges2MsgPack", () => {
    let aChangesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let changesDefault: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: typelayerCSchemasDefinitionsStructures.Package;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let valToCheck: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    let zChangesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let zChangesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    zChangesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    zChangesFieldTestVal = [zChangesBlocks, zChangesBlocks];
    packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
    changesDefault = [];
    aChangesDefault = [];
    val = new typelayerCSchemasDefinitionsStructures.ApplyChangesProxy({
      zChanges: zChangesFieldTestVal,
      package: packageDefault,
      changes: changesDefault,
      aChanges: aChangesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(
      encoder,
      val
    );
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId0Json", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnIdFieldTestVal = "";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId0MsgPack", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnIdFieldTestVal = "";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId1Json", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnIdFieldTestVal = "a";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId1MsgPack", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnIdFieldTestVal = "a";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId2Json", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnIdFieldTestVal = "abc";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnColumnId2MsgPack", () => {
    let columnIdFieldTestVal: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnIdFieldTestVal = "abc";
    databaseIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      columnId: columnIdFieldTestVal,
      databaseId: databaseIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId0Json", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseIdFieldTestVal = "";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId0MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseIdFieldTestVal = "";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId1Json", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseIdFieldTestVal = "a";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId1MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseIdFieldTestVal = "a";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId2Json", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseIdFieldTestVal = "abc";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnDatabaseId2MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseIdFieldTestVal = "abc";
    columnIdDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      databaseId: databaseIdFieldTestVal,
      columnId: columnIdDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId0Json", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId0MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId1Json", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "a";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId1MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "a";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId2Json", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "abc";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("addColumnTableId2MsgPack", () => {
    let columnIdDefault: string;
    let databaseIdDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Change;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Change;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "abc";
    databaseIdDefault = "";
    columnIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.AddColumn({
      tableId: tableIdFieldTestVal,
      databaseId: databaseIdDefault,
      columnId: columnIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChange(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges0Json", () => {
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesFieldTestVal = [];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges0MsgPack", () => {
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesFieldTestVal = [];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges1Json", () => {
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges1MsgPack", () => {
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges2Json", () => {
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks, changesBlocks];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("changesetChanges2MsgPack", () => {
    let changesBlocks: typelayerCSchemasDefinitionsStructures.Change;
    let changesFieldTestVal: Array<typelayerCSchemasDefinitionsStructures.Change>;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Changeset;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Changeset;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
    changesFieldTestVal = [changesBlocks, changesBlocks];
    val = new typelayerCSchemasDefinitionsStructures.Changeset({
      changes: changesFieldTestVal
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionBackend0Json", () => {
    let backendFieldTestVal: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    backendFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultBackend();
    descriptionDefault = "";
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      backend: backendFieldTestVal,
      description: descriptionDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionBackend0MsgPack", () => {
    let backendFieldTestVal: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    backendFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultBackend();
    descriptionDefault = "";
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      backend: backendFieldTestVal,
      description: descriptionDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription0Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription0MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription1Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "a";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription1MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "a";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription2Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "abc";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionDescription2MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "abc";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    schemaDefault = "";
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      description: descriptionFieldTestVal,
      backend: backendDefault,
      schema: schemaDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema0Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaFieldTestVal = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema0MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaFieldTestVal = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema1Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaFieldTestVal = "a";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema1MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaFieldTestVal = "a";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema2Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaFieldTestVal = "abc";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionSchema2MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaFieldTestVal: string;
    let tablesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaFieldTestVal = "abc";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    tablesDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      schema: schemaFieldTestVal,
      description: descriptionDefault,
      backend: backendDefault,
      tables: tablesDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables0Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tablesFieldTestVal = new Map([]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables0MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tablesFieldTestVal = new Map([]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables1Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesBlocks: typelayerCSchemasDefinitionsStructures.Table;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tablesBlocks = typelayerCSchemasDefinitionsStructures.defaultTable();
    tablesFieldTestVal = new Map([["key-1", tablesBlocks]]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables1MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesBlocks: typelayerCSchemasDefinitionsStructures.Table;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tablesBlocks = typelayerCSchemasDefinitionsStructures.defaultTable();
    tablesFieldTestVal = new Map([["key-1", tablesBlocks]]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables2Json", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesBlocks: typelayerCSchemasDefinitionsStructures.Table;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tablesBlocks = typelayerCSchemasDefinitionsStructures.defaultTable();
    tablesFieldTestVal = new Map([
      ["key-1", tablesBlocks],
      ["key-2-1", tablesBlocks]
    ]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("collectionTables2MsgPack", () => {
    let backendDefault: typelayerCSchemasDefinitionsStructures.Backend;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let schemaDefault: string;
    let tablesBlocks: typelayerCSchemasDefinitionsStructures.Table;
    let tablesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Table
    >;
    let val: typelayerCSchemasDefinitionsStructures.Collection;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Collection;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tablesBlocks = typelayerCSchemasDefinitionsStructures.defaultTable();
    tablesFieldTestVal = new Map([
      ["key-1", tablesBlocks],
      ["key-2-1", tablesBlocks]
    ]);
    schemaDefault = "";
    descriptionDefault = "";
    backendDefault = typelayerCSchemasDefinitionsStructures.defaultBackend();
    val = new typelayerCSchemasDefinitionsStructures.Collection({
      tables: tablesFieldTestVal,
      schema: schemaDefault,
      description: descriptionDefault,
      backend: backendDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutCollection(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn0Json", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnFieldTestVal = "";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn0MsgPack", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnFieldTestVal = "";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn1Json", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnFieldTestVal = "a";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn1MsgPack", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnFieldTestVal = "a";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn2Json", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnFieldTestVal = "abc";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnColumn2MsgPack", () => {
    let columnFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnFieldTestVal = "abc";
    descriptionDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      column: columnFieldTestVal,
      description: descriptionDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription0Json", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription0MsgPack", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription1Json", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "a";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription1MsgPack", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "a";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription2Json", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "abc";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnDescription2MsgPack", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "abc";
    columnDefault = "";
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    val = new typelayerCSchemasDefinitionsStructures.Column({
      description: descriptionFieldTestVal,
      column: columnDefault,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnType0Json", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeFieldTestVal: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    typeFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    descriptionDefault = "";
    columnDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Column({
      type: typeFieldTestVal,
      description: descriptionDefault,
      column: columnDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("columnType0MsgPack", () => {
    let columnDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeFieldTestVal: typelayerCSchemasDefinitionsStructures.ColumnType;
    let val: typelayerCSchemasDefinitionsStructures.Column;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Column;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    typeFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultColumnType();
    descriptionDefault = "";
    columnDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Column({
      type: typeFieldTestVal,
      description: descriptionDefault,
      column: columnDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutColumn(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc3Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorDoc3MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    fieldsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      doc: docFieldTestVal,
      fields: fieldsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fieldsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fieldsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fieldsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    fieldsFieldTestVal = new Map([["key-1", fieldsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fieldsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    fieldsFieldTestVal = new Map([["key-1", fieldsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fieldsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    fieldsFieldTestVal = new Map([
      ["key-1", fieldsBlocks],
      ["key-2-1", fieldsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("constructorFields2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fieldsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let fieldsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Constructor;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Constructor;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fieldsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    fieldsFieldTestVal = new Map([
      ["key-1", fieldsBlocks],
      ["key-2-1", fieldsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Constructor({
      fields: fieldsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutConstructor(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc3Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldDoc3MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeDefault: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    typeDefault = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    val = new typelayerCSchemasDefinitionsStructures.Field({
      doc: docFieldTestVal,
      type: typeDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldType0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeFieldTestVal: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    typeFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Field({
      type: typeFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fieldType0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let typeFieldTestVal: typelayerCSchemasDefinitionsStructures.BasicType;
    let val: typelayerCSchemasDefinitionsStructures.Field;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Field;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    typeFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultBasicType();
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Field({
      type: typeFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutField(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments0Json", () => {
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    argumentsFieldTestVal = new Map([]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments0MsgPack", () => {
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    argumentsFieldTestVal = new Map([]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments1Json", () => {
    let argumentsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    argumentsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    argumentsFieldTestVal = new Map([["key-1", argumentsBlocks]]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments1MsgPack", () => {
    let argumentsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    argumentsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    argumentsFieldTestVal = new Map([["key-1", argumentsBlocks]]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments2Json", () => {
    let argumentsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    argumentsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    argumentsFieldTestVal = new Map([
      ["key-1", argumentsBlocks],
      ["key-2-1", argumentsBlocks]
    ]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationArguments2MsgPack", () => {
    let argumentsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let argumentsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    argumentsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    argumentsFieldTestVal = new Map([
      ["key-1", argumentsBlocks],
      ["key-2-1", argumentsBlocks]
    ]);
    docDefault = null;
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      arguments: argumentsFieldTestVal,
      doc: docDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc0Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc0MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc1Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc1MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc2Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc2MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc3Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationDoc3MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    argumentsDefault = new Map([]);
    returnsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      doc: docFieldTestVal,
      arguments: argumentsDefault,
      returns: returnsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns0Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    returnsFieldTestVal = new Map([]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns0MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    returnsFieldTestVal = new Map([]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns1Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    returnsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    returnsFieldTestVal = new Map([["key-1", returnsBlocks]]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns1MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    returnsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    returnsFieldTestVal = new Map([["key-1", returnsBlocks]]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns2Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    returnsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    returnsFieldTestVal = new Map([
      ["key-1", returnsBlocks],
      ["key-2-1", returnsBlocks]
    ]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationReturns2MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsBlocks: typelayerCSchemasDefinitionsStructures.Field;
    let returnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableDefault: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    returnsBlocks = typelayerCSchemasDefinitionsStructures.defaultField();
    returnsFieldTestVal = new Map([
      ["key-1", returnsBlocks],
      ["key-2-1", returnsBlocks]
    ]);
    docDefault = null;
    argumentsDefault = new Map([]);
    targetTableDefault = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      returns: returnsFieldTestVal,
      doc: docDefault,
      arguments: argumentsDefault,
      targetTable: targetTableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationTargetTable0Json", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableFieldTestVal: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    targetTableFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    returnsDefault = new Map([]);
    docDefault = null;
    argumentsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      targetTable: targetTableFieldTestVal,
      returns: returnsDefault,
      doc: docDefault,
      arguments: argumentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("mutationTargetTable0MsgPack", () => {
    let argumentsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let returnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Field
    >;
    let targetTableFieldTestVal: typelayerCSchemasDefinitionsStructures.TableReference;
    let val: typelayerCSchemasDefinitionsStructures.Function;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Function;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    targetTableFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultTableReference();
    returnsDefault = new Map([]);
    docDefault = null;
    argumentsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Mutation({
      targetTable: targetTableFieldTestVal,
      returns: returnsDefault,
      doc: docDefault,
      arguments: argumentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutFunction(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections0Json", () => {
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    collectionsFieldTestVal = new Map([]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections0MsgPack", () => {
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    collectionsFieldTestVal = new Map([]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections1Json", () => {
    let collectionsBlocks: typelayerCSchemasDefinitionsStructures.Collection;
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    collectionsBlocks = typelayerCSchemasDefinitionsStructures.defaultCollection();
    collectionsFieldTestVal = new Map([["key-1", collectionsBlocks]]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections1MsgPack", () => {
    let collectionsBlocks: typelayerCSchemasDefinitionsStructures.Collection;
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    collectionsBlocks = typelayerCSchemasDefinitionsStructures.defaultCollection();
    collectionsFieldTestVal = new Map([["key-1", collectionsBlocks]]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections2Json", () => {
    let collectionsBlocks: typelayerCSchemasDefinitionsStructures.Collection;
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    collectionsBlocks = typelayerCSchemasDefinitionsStructures.defaultCollection();
    collectionsFieldTestVal = new Map([
      ["key-1", collectionsBlocks],
      ["key-2-1", collectionsBlocks]
    ]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageCollections2MsgPack", () => {
    let collectionsBlocks: typelayerCSchemasDefinitionsStructures.Collection;
    let collectionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    collectionsBlocks = typelayerCSchemasDefinitionsStructures.defaultCollection();
    collectionsFieldTestVal = new Map([
      ["key-1", collectionsBlocks],
      ["key-2-1", collectionsBlocks]
    ]);
    docDefault = null;
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      collections: collectionsFieldTestVal,
      doc: docDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc0Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc0MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc1Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc1MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc2Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc2MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc3Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageDoc3MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    collectionsDefault = new Map([]);
    idDefault = "";
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      doc: docFieldTestVal,
      collections: collectionsDefault,
      id: idDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId0Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    idFieldTestVal = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId0MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    idFieldTestVal = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId1Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    idFieldTestVal = "a";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId1MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    idFieldTestVal = "a";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId2Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    idFieldTestVal = "abc";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageId2MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    idFieldTestVal = "abc";
    docDefault = null;
    collectionsDefault = new Map([]);
    schemasDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      id: idFieldTestVal,
      doc: docDefault,
      collections: collectionsDefault,
      schemas: schemasDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas0Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemasFieldTestVal = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas0MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemasFieldTestVal = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas1Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasBlocks: typelayerCSchemasDefinitionsStructures.Schema;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemasBlocks = typelayerCSchemasDefinitionsStructures.defaultSchema();
    schemasFieldTestVal = new Map([["key-1", schemasBlocks]]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas1MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasBlocks: typelayerCSchemasDefinitionsStructures.Schema;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemasBlocks = typelayerCSchemasDefinitionsStructures.defaultSchema();
    schemasFieldTestVal = new Map([["key-1", schemasBlocks]]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas2Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasBlocks: typelayerCSchemasDefinitionsStructures.Schema;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemasBlocks = typelayerCSchemasDefinitionsStructures.defaultSchema();
    schemasFieldTestVal = new Map([
      ["key-1", schemasBlocks],
      ["key-2-1", schemasBlocks]
    ]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageSchemas2MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasBlocks: typelayerCSchemasDefinitionsStructures.Schema;
    let schemasFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemasBlocks = typelayerCSchemasDefinitionsStructures.defaultSchema();
    schemasFieldTestVal = new Map([
      ["key-1", schemasBlocks],
      ["key-2-1", schemasBlocks]
    ]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    servicesDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      schemas: schemasFieldTestVal,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      services: servicesDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices0Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    servicesFieldTestVal = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices0MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    servicesFieldTestVal = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices1Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesBlocks: typelayerCSchemasDefinitionsStructures.Service;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    servicesBlocks = typelayerCSchemasDefinitionsStructures.defaultService();
    servicesFieldTestVal = new Map([["key-1", servicesBlocks]]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices1MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesBlocks: typelayerCSchemasDefinitionsStructures.Service;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    servicesBlocks = typelayerCSchemasDefinitionsStructures.defaultService();
    servicesFieldTestVal = new Map([["key-1", servicesBlocks]]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices2Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesBlocks: typelayerCSchemasDefinitionsStructures.Service;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    servicesBlocks = typelayerCSchemasDefinitionsStructures.defaultService();
    servicesFieldTestVal = new Map([
      ["key-1", servicesBlocks],
      ["key-2-1", servicesBlocks]
    ]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageServices2MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesBlocks: typelayerCSchemasDefinitionsStructures.Service;
    let servicesFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionDefault: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    servicesBlocks = typelayerCSchemasDefinitionsStructures.defaultService();
    servicesFieldTestVal = new Map([
      ["key-1", servicesBlocks],
      ["key-2-1", servicesBlocks]
    ]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    versionDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Package({
      services: servicesFieldTestVal,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault,
      version: versionDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion0Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    versionFieldTestVal = "";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion0MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    versionFieldTestVal = "";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion1Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    versionFieldTestVal = "a";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion1MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    versionFieldTestVal = "a";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion2Json", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    versionFieldTestVal = "abc";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("packageVersion2MsgPack", () => {
    let collectionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Collection
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let idDefault: string;
    let resultingBin: Uint8Array;
    let schemasDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Schema
    >;
    let servicesDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Service
    >;
    let val: typelayerCSchemasDefinitionsStructures.Package;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Package;
    let versionFieldTestVal: string;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    versionFieldTestVal = "abc";
    servicesDefault = new Map([]);
    schemasDefault = new Map([]);
    idDefault = "";
    docDefault = null;
    collectionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Package({
      version: versionFieldTestVal,
      services: servicesDefault,
      schemas: schemasDefault,
      id: idDefault,
      doc: docDefault,
      collections: collectionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc3Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaDoc3MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    structuresDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      doc: docFieldTestVal,
      structures: structuresDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    structuresFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    structuresFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresBlocks: typelayerCSchemasDefinitionsStructures.Structure;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    structuresBlocks = typelayerCSchemasDefinitionsStructures.defaultStructure();
    structuresFieldTestVal = new Map([["key-1", structuresBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresBlocks: typelayerCSchemasDefinitionsStructures.Structure;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    structuresBlocks = typelayerCSchemasDefinitionsStructures.defaultStructure();
    structuresFieldTestVal = new Map([["key-1", structuresBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresBlocks: typelayerCSchemasDefinitionsStructures.Structure;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    structuresBlocks = typelayerCSchemasDefinitionsStructures.defaultStructure();
    structuresFieldTestVal = new Map([
      ["key-1", structuresBlocks],
      ["key-2-1", structuresBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaStructures2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let structuresBlocks: typelayerCSchemasDefinitionsStructures.Structure;
    let structuresFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Structure
    >;
    let val: typelayerCSchemasDefinitionsStructures.Schema;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Schema;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    structuresBlocks = typelayerCSchemasDefinitionsStructures.defaultStructure();
    structuresFieldTestVal = new Map([
      ["key-1", structuresBlocks],
      ["key-2-1", structuresBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Schema({
      structures: structuresFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchema(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "a";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "a";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "abc";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferencePackage2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let schemaIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "abc";
    schemaIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      package: packageFieldTestVal,
      schemaId: schemaIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaIdFieldTestVal = "";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaIdFieldTestVal = "";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaIdFieldTestVal = "a";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaIdFieldTestVal = "a";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    schemaIdFieldTestVal = "abc";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("schemaReferenceSchemaId2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let schemaIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.SchemaReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.SchemaReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    schemaIdFieldTestVal = "abc";
    packageDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.SchemaReference({
      schemaId: schemaIdFieldTestVal,
      package: packageDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutSchemaReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc3Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceDoc3MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    functionsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Service({
      doc: docFieldTestVal,
      functions: functionsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions0Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    functionsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions0MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    functionsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions1Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsBlocks: typelayerCSchemasDefinitionsStructures.Function;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    functionsBlocks = typelayerCSchemasDefinitionsStructures.defaultFunction();
    functionsFieldTestVal = new Map([["key-1", functionsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions1MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsBlocks: typelayerCSchemasDefinitionsStructures.Function;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    functionsBlocks = typelayerCSchemasDefinitionsStructures.defaultFunction();
    functionsFieldTestVal = new Map([["key-1", functionsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions2Json", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsBlocks: typelayerCSchemasDefinitionsStructures.Function;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    functionsBlocks = typelayerCSchemasDefinitionsStructures.defaultFunction();
    functionsFieldTestVal = new Map([
      ["key-1", functionsBlocks],
      ["key-2-1", functionsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("serviceFunctions2MsgPack", () => {
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let functionsBlocks: typelayerCSchemasDefinitionsStructures.Function;
    let functionsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Function
    >;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Service;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Service;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    functionsBlocks = typelayerCSchemasDefinitionsStructures.defaultFunction();
    functionsFieldTestVal = new Map([
      ["key-1", functionsBlocks],
      ["key-2-1", functionsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Service({
      functions: functionsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutService(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors0Json", () => {
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    constructorsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors0MsgPack", () => {
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    constructorsFieldTestVal = new Map([]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors1Json", () => {
    let constructorsBlocks: typelayerCSchemasDefinitionsStructures.Constructor;
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    constructorsBlocks = typelayerCSchemasDefinitionsStructures.defaultConstructor();
    constructorsFieldTestVal = new Map([["key-1", constructorsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors1MsgPack", () => {
    let constructorsBlocks: typelayerCSchemasDefinitionsStructures.Constructor;
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    constructorsBlocks = typelayerCSchemasDefinitionsStructures.defaultConstructor();
    constructorsFieldTestVal = new Map([["key-1", constructorsBlocks]]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors2Json", () => {
    let constructorsBlocks: typelayerCSchemasDefinitionsStructures.Constructor;
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    constructorsBlocks = typelayerCSchemasDefinitionsStructures.defaultConstructor();
    constructorsFieldTestVal = new Map([
      ["key-1", constructorsBlocks],
      ["key-2-1", constructorsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureConstructors2MsgPack", () => {
    let constructorsBlocks: typelayerCSchemasDefinitionsStructures.Constructor;
    let constructorsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docDefault: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    constructorsBlocks = typelayerCSchemasDefinitionsStructures.defaultConstructor();
    constructorsFieldTestVal = new Map([
      ["key-1", constructorsBlocks],
      ["key-2-1", constructorsBlocks]
    ]);
    docDefault = null;
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      constructors: constructorsFieldTestVal,
      doc: docDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc0Json", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docFieldTestVal = null;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc0MsgPack", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docFieldTestVal = null;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc1Json", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc1MsgPack", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc2Json", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc2MsgPack", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "a";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc3Json", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("structureDoc3MsgPack", () => {
    let constructorsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Constructor
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let docBlocks: string;
    let docFieldTestVal: string | null;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasDefinitionsStructures.Structure;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Structure;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    docBlocks = "abc";
    docFieldTestVal = docBlocks;
    constructorsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Structure({
      doc: docFieldTestVal,
      constructors: constructorsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutStructure(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns0Json", () => {
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnsFieldTestVal = new Map([]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns0MsgPack", () => {
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnsFieldTestVal = new Map([]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns1Json", () => {
    let columnsBlocks: typelayerCSchemasDefinitionsStructures.Column;
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnsBlocks = typelayerCSchemasDefinitionsStructures.defaultColumn();
    columnsFieldTestVal = new Map([["key-1", columnsBlocks]]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns1MsgPack", () => {
    let columnsBlocks: typelayerCSchemasDefinitionsStructures.Column;
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnsBlocks = typelayerCSchemasDefinitionsStructures.defaultColumn();
    columnsFieldTestVal = new Map([["key-1", columnsBlocks]]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns2Json", () => {
    let columnsBlocks: typelayerCSchemasDefinitionsStructures.Column;
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    columnsBlocks = typelayerCSchemasDefinitionsStructures.defaultColumn();
    columnsFieldTestVal = new Map([
      ["key-1", columnsBlocks],
      ["key-2-1", columnsBlocks]
    ]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableColumns2MsgPack", () => {
    let columnsBlocks: typelayerCSchemasDefinitionsStructures.Column;
    let columnsFieldTestVal: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    columnsBlocks = typelayerCSchemasDefinitionsStructures.defaultColumn();
    columnsFieldTestVal = new Map([
      ["key-1", columnsBlocks],
      ["key-2-1", columnsBlocks]
    ]);
    descriptionDefault = "";
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      columns: columnsFieldTestVal,
      description: descriptionDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription0Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription0MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription1Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "a";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription1MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "a";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription2Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    descriptionFieldTestVal = "abc";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableDescription2MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionFieldTestVal: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    descriptionFieldTestVal = "abc";
    columnsDefault = new Map([]);
    tableDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.Table({
      description: descriptionFieldTestVal,
      columns: columnsDefault,
      table: tableDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable0Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableFieldTestVal = "";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable0MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableFieldTestVal = "";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable1Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableFieldTestVal = "a";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable1MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableFieldTestVal = "a";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable2Json", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableFieldTestVal = "abc";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableTable2MsgPack", () => {
    let columnsDefault: Map<
      string,
      typelayerCSchemasDefinitionsStructures.Column
    >;
    let decoder: typelayerCommonDynamic.Decoder;
    let descriptionDefault: string;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let resultingBin: Uint8Array;
    let tableFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.Table;
    let valToCheck: typelayerCSchemasDefinitionsStructures.Table;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableFieldTestVal = "abc";
    descriptionDefault = "";
    columnsDefault = new Map([]);
    val = new typelayerCSchemasDefinitionsStructures.Table({
      table: tableFieldTestVal,
      description: descriptionDefault,
      columns: columnsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTable(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase0Json", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseFieldTestVal = "";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase0MsgPack", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseFieldTestVal = "";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase1Json", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseFieldTestVal = "a";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase1MsgPack", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseFieldTestVal = "a";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase2Json", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    databaseFieldTestVal = "abc";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceDatabase2MsgPack", () => {
    let databaseFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    databaseFieldTestVal = "abc";
    packageDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      database: databaseFieldTestVal,
      package: packageDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage0Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage0MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage1Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "a";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage1MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "a";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage2Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    packageFieldTestVal = "abc";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferencePackage2MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageFieldTestVal: string;
    let resultingBin: Uint8Array;
    let tableIdDefault: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    packageFieldTestVal = "abc";
    databaseDefault = "";
    tableIdDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      package: packageFieldTestVal,
      database: databaseDefault,
      tableId: tableIdDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId0Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId0MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId1Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "a";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId1MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "a";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId2Json", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    tableIdFieldTestVal = "abc";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("tableReferenceTableId2MsgPack", () => {
    let databaseDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let packageDefault: string;
    let resultingBin: Uint8Array;
    let tableIdFieldTestVal: string;
    let val: typelayerCSchemasDefinitionsStructures.TableReference;
    let valToCheck: typelayerCSchemasDefinitionsStructures.TableReference;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    tableIdFieldTestVal = "abc";
    packageDefault = "";
    databaseDefault = "";
    val = new typelayerCSchemasDefinitionsStructures.TableReference({
      tableId: tableIdFieldTestVal,
      package: packageDefault,
      database: databaseDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasDefinitionsDynamic.dynamicPutTableReference(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(
      decoder
    );
    chai.expect(val).to.deep.equal(valToCheck);
  });
});
