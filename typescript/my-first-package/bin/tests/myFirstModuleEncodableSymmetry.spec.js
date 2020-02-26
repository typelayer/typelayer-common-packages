"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const myFirstPackageSchemasMyFirstModuleDynamic = __importStar(require("../schemas/myFirstModule/dynamic"));
const myFirstPackageSchemasMyFirstModuleStructures = __importStar(require("../schemas/myFirstModule/structures"));
const typelayerCommonEncodingsJson = __importStar(require("typelayer-common"));
const typelayerCommonEncodingsMsgpack = __importStar(require("typelayer-common"));
const chai = __importStar(require("chai"));
const mocha = __importStar(require("mocha"));
mocha.describe("myFirstModuleEncodableSymmetry", () => {
    mocha.it("myEnumIntegerMyTextField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 255;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 255;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField3Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 65535;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField3MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 65535;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField4Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 16777215;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField4MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 16777215;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField5Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 4294967295;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField5MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 4294967295;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField6Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 1099511627775;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField6MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 1099511627775;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField7Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 281474976710655;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField7MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 281474976710655;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField8Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 72057594037927935;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField8MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 72057594037927935;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField9Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField9MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = 0;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField10Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -255;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField10MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -255;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField11Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -65535;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField11MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -65535;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField12Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -16777215;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField12MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -16777215;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField13Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -4294967295;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField13MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -4294967295;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField14Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -1099511627775;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField14MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -1099511627775;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField15Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -281474976710655;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField15MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -281474976710655;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField16Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = -72057594037927935;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myEnumIntegerMyTextField16MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = -72057594037927935;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyEnumInteger({
            myTextField: myTextFieldFieldTestVal
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyEnumStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyEnumStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyBooleanField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldFieldTestVal;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myBooleanFieldFieldTestVal = true;
        myDoubleFieldDefault = 0.0;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myBooleanField: myBooleanFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyBooleanField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldFieldTestVal;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myBooleanFieldFieldTestVal = true;
        myDoubleFieldDefault = 0.0;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myBooleanField: myBooleanFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyBooleanField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldFieldTestVal;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myBooleanFieldFieldTestVal = false;
        myDoubleFieldDefault = 0.0;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myBooleanField: myBooleanFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyBooleanField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldFieldTestVal;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myBooleanFieldFieldTestVal = false;
        myDoubleFieldDefault = 0.0;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myBooleanField: myBooleanFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 0.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 0.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 1.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 1.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 255.9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 255.9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField3Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 65484.810000000005;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField3MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 65484.810000000005;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField4Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 1.6757562879e7;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField4MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 1.6757562879e7;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField5Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 4.2882603407361e9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField5MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 4.2882603407361e9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField6Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 1.0973658211943682e12;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField6MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 1.0973658211943682e12;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField7Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 2.808159136436388e14;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField7MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 2.808159136436388e14;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField8Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 7.1860792301407176e16;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField8MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 7.1860792301407176e16;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField9Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = 1.8389176749930097e19;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField9MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = 1.8389176749930097e19;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField10Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -1.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField10MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -1.0;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField11Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -255.9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField11MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -255.9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField12Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -65484.810000000005;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField12MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -65484.810000000005;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField13Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -1.6757562879e7;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField13MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -1.6757562879e7;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField14Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -4.2882603407361e9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField14MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -4.2882603407361e9;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField15Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -1.0973658211943682e12;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField15MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -1.0973658211943682e12;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField16Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -2.808159136436388e14;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField16MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -2.808159136436388e14;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField17Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -7.1860792301407176e16;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField17MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -7.1860792301407176e16;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField18Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myDoubleFieldFieldTestVal = -1.8389176749930097e19;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyDoubleField18MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldFieldTestVal;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myDoubleFieldFieldTestVal = -1.8389176749930097e19;
        myBooleanFieldDefault = false;
        myIntegerFieldDefault = 0;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myDoubleField: myDoubleFieldFieldTestVal,
            myBooleanField: myBooleanFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 255;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 255;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField3Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 65535;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField3MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 65535;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField4Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 16777215;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField4MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 16777215;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField5Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 4294967295;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField5MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 4294967295;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField6Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 1099511627775;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField6MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 1099511627775;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField7Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 281474976710655;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField7MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 281474976710655;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField8Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 72057594037927935;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField8MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 72057594037927935;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField9Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField9MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField10Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -255;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField10MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -255;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField11Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -65535;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField11MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -65535;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField12Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -16777215;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField12MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -16777215;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField13Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -4294967295;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField13MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -4294967295;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField14Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -1099511627775;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField14MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -1099511627775;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField15Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -281474976710655;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField15MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -281474976710655;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField16Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myIntegerFieldFieldTestVal = -72057594037927935;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyIntegerField16MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldFieldTestVal;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myIntegerFieldFieldTestVal = -72057594037927935;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myListFieldDefault = [];
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myIntegerField: myIntegerFieldFieldTestVal,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myListField: myListFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myListFieldFieldTestVal = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myListFieldFieldTestVal = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldBlocks;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myListFieldBlocks = "";
        myListFieldFieldTestVal = [myListFieldBlocks];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldBlocks;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myListFieldBlocks = "";
        myListFieldFieldTestVal = [myListFieldBlocks];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldBlocks;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myListFieldBlocks = "";
        myListFieldFieldTestVal = [myListFieldBlocks, myListFieldBlocks];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyListField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldBlocks;
        let myListFieldFieldTestVal;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myListFieldBlocks = "";
        myListFieldFieldTestVal = [myListFieldBlocks, myListFieldBlocks];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myMapFieldDefault = new Map([]);
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myListField: myListFieldFieldTestVal,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myMapField: myMapFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myMapFieldFieldTestVal = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myMapFieldFieldTestVal = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldBlocks;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myMapFieldBlocks = "";
        myMapFieldFieldTestVal = new Map([["key-1", myMapFieldBlocks]]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldBlocks;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myMapFieldBlocks = "";
        myMapFieldFieldTestVal = new Map([["key-1", myMapFieldBlocks]]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldBlocks;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myMapFieldBlocks = "";
        myMapFieldFieldTestVal = new Map([
            ["key-1", myMapFieldBlocks],
            ["key-2-1", myMapFieldBlocks]
        ]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyMapField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldBlocks;
        let myMapFieldFieldTestVal;
        let myNestedFieldDefault;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myMapFieldBlocks = "";
        myMapFieldFieldTestVal = new Map([
            ["key-1", myMapFieldBlocks],
            ["key-2-1", myMapFieldBlocks]
        ]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myMapField: myMapFieldFieldTestVal,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myNestedField: myNestedFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyNestedField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldFieldTestVal;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myNestedFieldFieldTestVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myNestedField: myNestedFieldFieldTestVal,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyNestedField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldFieldTestVal;
        let myTextFieldDefault;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myNestedFieldFieldTestVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        myTextFieldDefault = "";
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myNestedField: myNestedFieldFieldTestVal,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault,
            myTextField: myTextFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField0Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = "";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField0MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = "";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField1Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = "a";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField1MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = "a";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField2Json", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsJson.JsonEncoding({});
        myTextFieldFieldTestVal = "abc";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
    mocha.it("myFirstStructureMyTextField2MsgPack", () => {
        let decoder;
        let encoder;
        let encoding;
        let myBooleanFieldDefault;
        let myDoubleFieldDefault;
        let myIntegerFieldDefault;
        let myListFieldDefault;
        let myMapFieldDefault;
        let myNestedFieldDefault;
        let myTextFieldFieldTestVal;
        let resultingBin;
        let val;
        let valToCheck;
        encoding = new typelayerCommonEncodingsMsgpack.MsgPackEncoding({});
        myTextFieldFieldTestVal = "abc";
        myNestedFieldDefault = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
        myMapFieldDefault = new Map([]);
        myListFieldDefault = [];
        myIntegerFieldDefault = 0;
        myDoubleFieldDefault = 0.0;
        myBooleanFieldDefault = false;
        val = new myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure({
            myTextField: myTextFieldFieldTestVal,
            myNestedField: myNestedFieldDefault,
            myMapField: myMapFieldDefault,
            myListField: myListFieldDefault,
            myIntegerField: myIntegerFieldDefault,
            myDoubleField: myDoubleFieldDefault,
            myBooleanField: myBooleanFieldDefault
        });
        encoder = encoding.encodingStartEncoding();
        myFirstPackageSchemasMyFirstModuleDynamic.dynamicPutMyFirstStructure(encoder, val);
        resultingBin = encoder.encoderToBinary();
        decoder = encoding.encodingStartDecoding(resultingBin);
        valToCheck = myFirstPackageSchemasMyFirstModuleDynamic.dynamicGetObjMyFirstStructure(decoder);
        chai.expect(val).to.deep.equal(valToCheck);
    });
});
