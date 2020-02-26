"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayerCSchemasWorldDynamic = __importStar(require("../schemas/world/dynamic"));
const typelayerCSchemasWorldStructures = __importStar(require("../schemas/world/structures"));
const typelayerCommonEncodingsJson = __importStar(require("typelayer-common"));
const typelayerCommonEncodingsMsgpack = __importStar(require("typelayer-common"));
const chai = __importStar(require("chai"));
const mocha = __importStar(require("mocha"));
mocha.describe("worldEncodableSymmetry", () => {
    mocha.it("fileContents0Json", () => {
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let fileidDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        let contentsDefault;
        let decoder;
        let encoder;
        let encoding;
        let fileidFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
