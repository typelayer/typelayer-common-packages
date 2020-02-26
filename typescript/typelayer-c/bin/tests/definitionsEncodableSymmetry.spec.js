"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayerCSchemasDefinitionsDynamic = __importStar(require("../schemas/definitions/dynamic"));
const typelayerCSchemasDefinitionsStructures = __importStar(require("../schemas/definitions/structures"));
const typelayerCommonEncodingsJson = __importStar(require("typelayer-common"));
const typelayerCommonEncodingsMsgpack = __importStar(require("typelayer-common"));
const chai = __importStar(require("chai"));
const mocha = __importStar(require("mocha"));
mocha.describe("definitionsEncodableSymmetry", () => {
    mocha.it("applyChangesProxyAChanges0Json", () => {
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyAChanges0MsgPack", () => {
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyAChanges1Json", () => {
        let aChangesBlocks;
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyAChanges1MsgPack", () => {
        let aChangesBlocks;
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyAChanges2Json", () => {
        let aChangesBlocks;
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyAChanges2MsgPack", () => {
        let aChangesBlocks;
        let aChangesFieldTestVal;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges0Json", () => {
        let aChangesDefault;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges0MsgPack", () => {
        let aChangesDefault;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges1Json", () => {
        let aChangesDefault;
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges1MsgPack", () => {
        let aChangesDefault;
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges2Json", () => {
        let aChangesDefault;
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyChanges2MsgPack", () => {
        let aChangesDefault;
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyPackage0Json", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyPackage0MsgPack", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesDefault;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges0Json", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges0MsgPack", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges1Json", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesBlocks;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges1MsgPack", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesBlocks;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges2Json", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesBlocks;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("applyChangesProxyZChanges2MsgPack", () => {
        let aChangesDefault;
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        let zChangesBlocks;
        let zChangesFieldTestVal;
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
        typelayerCSchemasDefinitionsDynamic.dynamicPutApplyChangesProxy(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjApplyChangesProxy(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId0Json", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId0MsgPack", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId1Json", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId1MsgPack", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId2Json", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnColumnId2MsgPack", () => {
        let columnIdFieldTestVal;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId0Json", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId0MsgPack", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId1Json", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId1MsgPack", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId2Json", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnDatabaseId2MsgPack", () => {
        let columnIdDefault;
        let databaseIdFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId0Json", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId0MsgPack", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId1Json", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId1MsgPack", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId2Json", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("addColumnTableId2MsgPack", () => {
        let columnIdDefault;
        let databaseIdDefault;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChange(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges0Json", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        changesFieldTestVal = [];
        val = new typelayerCSchemasDefinitionsStructures.Changeset({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges0MsgPack", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        changesFieldTestVal = [];
        val = new typelayerCSchemasDefinitionsStructures.Changeset({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCSchemasDefinitionsDynamic.dynamicPutChangeset(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges1Json", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges1MsgPack", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges2Json", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("changesetChanges2MsgPack", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjChangeset(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionBackend0Json", () => {
        let backendFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionBackend0MsgPack", () => {
        let backendFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription0Json", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription0MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription1Json", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription1MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription2Json", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionDescription2MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema0Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema0MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema1Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema1MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema2Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionSchema2MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaFieldTestVal;
        let tablesDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables0Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables0MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables1Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesBlocks;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables1MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesBlocks;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables2Json", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesBlocks;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("collectionTables2MsgPack", () => {
        let backendDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let schemaDefault;
        let tablesBlocks;
        let tablesFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjCollection(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn0Json", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn0MsgPack", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn1Json", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn1MsgPack", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn2Json", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnColumn2MsgPack", () => {
        let columnFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription0Json", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription0MsgPack", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription1Json", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription1MsgPack", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription2Json", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnDescription2MsgPack", () => {
        let columnDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnType0Json", () => {
        let columnDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("columnType0MsgPack", () => {
        let columnDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjColumn(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc0Json", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc0MsgPack", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc1Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc1MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc2Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc2MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc3Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorDoc3MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let fieldsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields0Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields0MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields1Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsBlocks;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields1MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsBlocks;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields2Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsBlocks;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("constructorFields2MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let fieldsBlocks;
        let fieldsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjConstructor(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc0Json", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc0MsgPack", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc1Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc1MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc2Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc2MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc3Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldDoc3MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let typeDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldType0Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("fieldType0MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let typeFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjField(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments0Json", () => {
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments0MsgPack", () => {
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments1Json", () => {
        let argumentsBlocks;
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments1MsgPack", () => {
        let argumentsBlocks;
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments2Json", () => {
        let argumentsBlocks;
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationArguments2MsgPack", () => {
        let argumentsBlocks;
        let argumentsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc0Json", () => {
        let argumentsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc0MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc1Json", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc1MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc2Json", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc2MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc3Json", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationDoc3MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns0Json", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns0MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns1Json", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsBlocks;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns1MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsBlocks;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns2Json", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsBlocks;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationReturns2MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsBlocks;
        let returnsFieldTestVal;
        let targetTableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationTargetTable0Json", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("mutationTargetTable0MsgPack", () => {
        let argumentsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let returnsDefault;
        let targetTableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjFunction(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections0Json", () => {
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections0MsgPack", () => {
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections1Json", () => {
        let collectionsBlocks;
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections1MsgPack", () => {
        let collectionsBlocks;
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections2Json", () => {
        let collectionsBlocks;
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageCollections2MsgPack", () => {
        let collectionsBlocks;
        let collectionsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc0Json", () => {
        let collectionsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc0MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc1Json", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc1MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc2Json", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc2MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc3Json", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageDoc3MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId0Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId0MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId1Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId1MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId2Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageId2MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idFieldTestVal;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas0Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas0MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas1Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasBlocks;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas1MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasBlocks;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas2Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasBlocks;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageSchemas2MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasBlocks;
        let schemasFieldTestVal;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices0Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices0MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices1Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesBlocks;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices1MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesBlocks;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices2Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesBlocks;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageServices2MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesBlocks;
        let servicesFieldTestVal;
        let val;
        let valToCheck;
        let versionDefault;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion0Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion0MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion1Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion1MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion2Json", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("packageVersion2MsgPack", () => {
        let collectionsDefault;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let idDefault;
        let resultingBin;
        let schemasDefault;
        let servicesDefault;
        let val;
        let valToCheck;
        let versionFieldTestVal;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjPackage(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc0Json", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc0MsgPack", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc1Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc1MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc2Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc2MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc3Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaDoc3MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures0Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures0MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures1Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresBlocks;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures1MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresBlocks;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures2Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresBlocks;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaStructures2MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let structuresBlocks;
        let structuresFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchema(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferencePackage2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let schemaIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("schemaReferenceSchemaId2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let schemaIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjSchemaReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc0Json", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc0MsgPack", () => {
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc1Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc1MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc2Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc2MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc3Json", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceDoc3MsgPack", () => {
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let functionsDefault;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions0Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions0MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions1Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsBlocks;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions1MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsBlocks;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions2Json", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsBlocks;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("serviceFunctions2MsgPack", () => {
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let functionsBlocks;
        let functionsFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjService(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors0Json", () => {
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors0MsgPack", () => {
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors1Json", () => {
        let constructorsBlocks;
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors1MsgPack", () => {
        let constructorsBlocks;
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors2Json", () => {
        let constructorsBlocks;
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureConstructors2MsgPack", () => {
        let constructorsBlocks;
        let constructorsFieldTestVal;
        let decoder;
        let docDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc0Json", () => {
        let constructorsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc0MsgPack", () => {
        let constructorsDefault;
        let decoder;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc1Json", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc1MsgPack", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc2Json", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc2MsgPack", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc3Json", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("structureDoc3MsgPack", () => {
        let constructorsDefault;
        let decoder;
        let docBlocks;
        let docFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns0Json", () => {
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns0MsgPack", () => {
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns1Json", () => {
        let columnsBlocks;
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns1MsgPack", () => {
        let columnsBlocks;
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns2Json", () => {
        let columnsBlocks;
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableColumns2MsgPack", () => {
        let columnsBlocks;
        let columnsFieldTestVal;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription0Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription0MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription1Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription1MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription2Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableDescription2MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionFieldTestVal;
        let encoder;
        let encoding;
        let resultingBin;
        let tableDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable0Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable0MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable1Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable1MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable2Json", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableTable2MsgPack", () => {
        let columnsDefault;
        let decoder;
        let descriptionDefault;
        let encoder;
        let encoding;
        let resultingBin;
        let tableFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTable(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase0Json", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase0MsgPack", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase1Json", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase1MsgPack", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase2Json", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceDatabase2MsgPack", () => {
        let databaseFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage0Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage0MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage1Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage1MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage2Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferencePackage2MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let tableIdDefault;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId0Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId0MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId1Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId1MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId2Json", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("tableReferenceTableId2MsgPack", () => {
        let databaseDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let tableIdFieldTestVal;
        let val;
        let valToCheck;
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
        valToCheck = typelayerCSchemasDefinitionsDynamic.dynamicGetObjTableReference(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
});
