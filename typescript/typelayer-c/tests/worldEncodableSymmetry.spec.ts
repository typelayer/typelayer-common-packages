import * as typelayerCSchemasWorldDynamic from "../schemas/world/dynamic";
import * as typelayerCSchemasWorldStructures from "../schemas/world/structures";
import * as typelayerCommonDynamic from "typelayer-common";
import * as typelayerCommonEncodingsJson from "typelayer-common";
import * as typelayerCommonEncodingsMsgpack from "typelayer-common";
import * as chai from "chai";
import * as mocha from "mocha";
mocha.describe("worldEncodableSymmetry", () => {
  mocha.it("fileContents0Json", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    contentsFieldTestVal = "";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileContents0MsgPack", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    contentsFieldTestVal = "";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileContents1Json", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    contentsFieldTestVal = "a";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileContents1MsgPack", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    contentsFieldTestVal = "a";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileContents2Json", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    contentsFieldTestVal = "abc";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileContents2MsgPack", () => {
    let contentsFieldTestVal: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidDefault: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    contentsFieldTestVal = "abc";
    fileidDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      contents: contentsFieldTestVal,
      fileid: fileidDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid0Json", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fileidFieldTestVal = "";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid0MsgPack", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fileidFieldTestVal = "";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid1Json", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fileidFieldTestVal = "a";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid1MsgPack", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fileidFieldTestVal = "a";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid2Json", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
    fileidFieldTestVal = "abc";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
  mocha.it("fileFileid2MsgPack", () => {
    let contentsDefault: string;
    let decoder: typelayerCommonDynamic.Decoder;
    let encoder: typelayerCommonDynamic.Encoder;
    let encoding: typelayerCommonDynamic.Encoding;
    let fileidFieldTestVal: string;
    let resultingBin: Uint8Array;
    let val: typelayerCSchemasWorldStructures.File;
    let valToCheck: typelayerCSchemasWorldStructures.File;
    encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
    fileidFieldTestVal = "abc";
    contentsDefault = "";
    val = new typelayerCSchemasWorldStructures.File({
      fileid: fileidFieldTestVal,
      contents: contentsDefault
    });
    encoder = encoding.encodingStartEncoding();
    typelayerCSchemasWorldDynamic.dynamicPutFile(encoder, val);
    resultingBin = encoder.encoderToBinary();
    decoder = encoding.encodingStartDecoding(resultingBin);
    valToCheck = typelayerCSchemasWorldDynamic.dynamicGetObjFile(decoder);
    chai.expect(val).to.deep.equal(valToCheck);
  });
});
