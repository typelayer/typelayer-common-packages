"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayerCSchemasDefinitionsStructures = __importStar(require("../schemas/definitions/structures"));
const typelayerCSchemasWorldStructures = __importStar(require("../schemas/world/structures"));
const typelayerCServicesCompilerDynamic = __importStar(require("../services/compiler/dynamic"));
const typelayerCServicesCompilerStructures = __importStar(require("../services/compiler/structures"));
const typelayerCommonEncodingsJson = __importStar(require("typelayer-common"));
const typelayerCommonEncodingsMsgpack = __importStar(require("typelayer-common"));
const chai = __importStar(require("chai"));
const mocha = __importStar(require("mocha"));
mocha.describe("compilerEncodableSymmetry", () => {
    mocha.it("newPackageInputName0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        nameFieldTestVal = "";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageInputName0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        nameFieldTestVal = "";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageInputName1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        nameFieldTestVal = "a";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageInputName1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        nameFieldTestVal = "a";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageInputName2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        nameFieldTestVal = "abc";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageInputName2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let nameFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        nameFieldTestVal = "abc";
        val = new typelayerCServicesCompilerStructures.NewPackageInput({
            name: nameFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageOutputPackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.NewPackageOutput({
            package: packageFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("newPackageOutputPackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.NewPackageOutput({
            package: packageFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewInputLanguage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let languageFieldTestVal;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        languageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultLanguage();
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewInput({
            language: languageFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewInputLanguage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let languageFieldTestVal;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        languageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultLanguage();
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewInput({
            language: languageFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewInputPackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let languageDefault;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        languageDefault = typelayerCSchemasDefinitionsStructures.defaultLanguage();
        val = new typelayerCServicesCompilerStructures.PreviewInput({
            package: packageFieldTestVal,
            language: languageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewInputPackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let languageDefault;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        languageDefault = typelayerCSchemasDefinitionsStructures.defaultLanguage();
        val = new typelayerCServicesCompilerStructures.PreviewInput({
            package: packageFieldTestVal,
            language: languageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        filesFieldTestVal = [];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        filesFieldTestVal = [];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesBlocks;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        filesBlocks = typelayerCSchemasWorldStructures.defaultFile();
        filesFieldTestVal = [filesBlocks];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesBlocks;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        filesBlocks = typelayerCSchemasWorldStructures.defaultFile();
        filesFieldTestVal = [filesBlocks];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesBlocks;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        filesBlocks = typelayerCSchemasWorldStructures.defaultFile();
        filesFieldTestVal = [filesBlocks, filesBlocks];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewOutputFiles2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let filesBlocks;
        let filesFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        filesBlocks = typelayerCSchemasWorldStructures.defaultFile();
        filesFieldTestVal = [filesBlocks, filesBlocks];
        val = new typelayerCServicesCompilerStructures.PreviewOutput({
            files: filesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges0Json", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        changesFieldTestVal = [];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges0MsgPack", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        changesFieldTestVal = [];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges1Json", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
        changesFieldTestVal = [changesBlocks];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges1MsgPack", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
        changesFieldTestVal = [changesBlocks];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges2Json", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
        changesFieldTestVal = [changesBlocks, changesBlocks];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputChanges2MsgPack", () => {
        let changesBlocks;
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        changesBlocks = typelayerCSchemasDefinitionsStructures.defaultChange();
        changesFieldTestVal = [changesBlocks, changesBlocks];
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            changes: changesFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputPackage0Json", () => {
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        changesDefault = [];
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            package: packageFieldTestVal,
            changes: changesDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesInputPackage0MsgPack", () => {
        let changesDefault;
        let decoder;
        let encoder;
        let encoding;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        changesDefault = [];
        val = new typelayerCServicesCompilerStructures.PreviewChangesInput({
            package: packageFieldTestVal,
            changes: changesDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesOutputNewPackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let newPackageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        newPackageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesOutput({
            newPackage: newPackageFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewChangesOutputNewPackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let newPackageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        newPackageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewChangesOutput({
            newPackage: newPackageFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffInputOtherPackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let otherPackageFieldTestVal;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        otherPackageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewDiffInput({
            otherPackage: otherPackageFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffInputOtherPackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let otherPackageFieldTestVal;
        let packageDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        otherPackageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        packageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewDiffInput({
            otherPackage: otherPackageFieldTestVal,
            package: packageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffInputPackage0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let otherPackageDefault;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        otherPackageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewDiffInput({
            package: packageFieldTestVal,
            otherPackage: otherPackageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffInputPackage0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let otherPackageDefault;
        let packageFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        packageFieldTestVal = typelayerCSchemasDefinitionsStructures.defaultPackage();
        otherPackageDefault = typelayerCSchemasDefinitionsStructures.defaultPackage();
        val = new typelayerCServicesCompilerStructures.PreviewDiffInput({
            package: packageFieldTestVal,
            otherPackage: otherPackageDefault
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges0Json", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        changesFieldTestVal = [];
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges0MsgPack", () => {
        let changesFieldTestVal;
        let decoder;
        let encoder;
        let encoding;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        changesFieldTestVal = [];
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges1Json", () => {
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
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges1MsgPack", () => {
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
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges2Json", () => {
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
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("previewDiffOutputChanges2MsgPack", () => {
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
        val = new typelayerCServicesCompilerStructures.PreviewDiffOutput({
            changes: changesFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
});
