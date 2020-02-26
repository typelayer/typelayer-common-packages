"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: encodings.msgpack
const typelayerCommonDynamic = __importStar(require("../dynamic"));
const typelayerCommonTypes = __importStar(require("../types"));
class MsgPackEncoding {
    constructor(arg) {
        this.kind = "MsgPackEncoding";
        Object.assign(this, arg);
    }
    encodingLabel() {
        return "msgpack";
    }
    encodingMimetype() {
        return "application/msgpack";
    }
    encodingStartDecoding(val) {
        return new MsgPackDecoder({
            index: 0,
            reader: new typelayerCommonTypes.ArrayReader(val)
        });
    }
    encodingStartEncoding() {
        return new MsgPackEncoder({
            writer: new typelayerCommonTypes.ArrayWriter(0)
        });
    }
}
exports.MsgPackEncoding = MsgPackEncoding;
class MsgPackDecoder {
    constructor(arg) {
        this.kind = "MsgPackDecoder";
        Object.assign(this, arg);
    }
    decoderPath() {
        return `${this.index}`;
    }
    decoderPopBool() {
        let headByte;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xc2:
                return true;
                break;
            case 0xc3:
                return false;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected bool", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopDouble() {
        let headByte;
        let value;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xcb:
                value = this.reader.view.getFloat64(this.index);
                this.index = 8 + this.index;
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected double", { path: this.decoderPath() });
        }
    }
    decoderPopField() {
        let fieldSize;
        let fieldValue;
        let headByte;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xc6:
                fieldSize =
                    this.reader.array[this.index + 1] |
                        (this.reader.array[this.index] << 16);
                this.index = 2 + this.index;
                fieldValue = this.reader.getString(this.index, fieldSize);
                this.index = fieldSize + this.index;
                return fieldValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected field", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopHasMoreList() {
        return 0;
    }
    decoderPopHasMoreMap() {
        return 0;
    }
    decoderPopHasMoreStruct() {
        return 0;
    }
    decoderPopInteger() {
        let headByte;
        let value;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xcf:
                value = this.reader.getInt64(this.index);
                this.index = 8 + this.index;
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected integer", { path: this.decoderPath() });
        }
    }
    decoderPopKey() {
        let headByte;
        let keySize;
        let keyValue;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xdb:
                keySize =
                    this.reader.array[this.index + 1] |
                        (this.reader.array[this.index] << 16);
                this.index = 2 + this.index;
                keyValue = this.reader.getString(this.index, keySize);
                this.index = keySize + this.index;
                return keyValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected key", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopList() {
        let headByte;
        let value;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xdd:
                value = this.reader.view.getUint32(this.index);
                this.index = 4 + this.index;
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected list", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopMap() {
        let headByte;
        let value;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xdf:
                value = this.reader.view.getUint32(this.index);
                this.index = 4 + this.index;
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected map", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopMaybe() {
        let headByte;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xc0:
                return false;
                break;
            case 0x91:
                return true;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected maybe", {
                    path: this.decoderPath()
                });
        }
    }
    decoderPopString() {
        let headByte;
        let strSize;
        let strValue;
        headByte = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (headByte) {
            case 0xdb:
                strSize = this.reader.view.getUint32(this.index);
                this.index = 4 + this.index;
                strValue = this.reader.getString(this.index, strSize);
                this.index = strSize + this.index;
                return strValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected string", { path: this.decoderPath() });
        }
    }
    decoderPopStruct(defaultConstructor) {
        let cName;
        let cSize;
        let numFields;
        let value;
        value = this.reader.array[this.index];
        this.index = 1 + this.index;
        switch (value) {
            case 0xde:
                numFields = this.reader.view.getUint32(this.index);
                this.index = 4 + this.index;
                if (0 < numFields) {
                    if (this.reader.array[this.index] === 0xc4) {
                        this.index = 4 + this.index;
                        cSize = this.reader.view.getUint32(this.index);
                        this.index = 4 + this.index;
                        cName = this.reader.getString(this.index, cSize);
                        this.index = cSize + this.index;
                        return [cName, numFields - 1];
                    }
                    else {
                        return [defaultConstructor, numFields];
                    }
                }
                else {
                    return [defaultConstructor, numFields];
                }
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected struct", { path: this.decoderPath() });
        }
    }
}
exports.MsgPackDecoder = MsgPackDecoder;
class MsgPackEncoder {
    constructor(arg) {
        this.kind = "MsgPackEncoder";
        Object.assign(this, arg);
    }
    encoderPutBool(value) {
        let newWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc2;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc3;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        return;
    }
    encoderPutDouble(value) {
        let newWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xcb;
        this.writer.offset += 1;
        this.writer.reserve(8);
        this.writer.view.setFloat64(this.writer.offset, value);
        this.writer.offset += 8;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutElementEnd(value) {
        let newWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutField(value) {
        let newWriter;
        let strAsBytes;
        strAsBytes = typelayerCommonTypes.stringToBytes(value);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xc6;
        this.writer.offset += 1;
        this.writer.reserve(2);
        this.writer.view.setUint16(this.writer.offset, strAsBytes.length);
        this.writer.offset += 2;
        this.writer.reserve(strAsBytes.length);
        this.writer.array.set(strAsBytes, this.writer.offset);
        this.writer.offset += strAsBytes.length;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutFieldEnd(value) {
        let newWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutInteger(value) {
        let newWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xcf;
        this.writer.offset += 1;
        this.writer.setInt64(this.writer.offset, value);
        this.writer.offset += 8;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutKey(value) {
        let newWriter;
        let strAsBytes;
        strAsBytes = typelayerCommonTypes.stringToBytes(value);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xdb;
        this.writer.offset += 1;
        this.writer.reserve(2);
        this.writer.view.setUint16(this.writer.offset, strAsBytes.length);
        this.writer.offset += 2;
        this.writer.reserve(strAsBytes.length);
        this.writer.array.set(strAsBytes, this.writer.offset);
        this.writer.offset += strAsBytes.length;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutList(value) {
        let newWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xdd;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, value);
        this.writer.offset += 4;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutMap(value) {
        let newWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xdf;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, value);
        this.writer.offset += 4;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutMaybe(value) {
        let newWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x91;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc0;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        return;
    }
    encoderPutString(value) {
        let newWriter;
        let strAsBytes;
        strAsBytes = typelayerCommonTypes.stringToBytes(value);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xdb;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, strAsBytes.length);
        this.writer.offset += 4;
        this.writer.reserve(strAsBytes.length);
        this.writer.array.set(strAsBytes, this.writer.offset);
        this.writer.offset += strAsBytes.length;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutStruct(constructor, numFields) {
        let cAsBytes;
        let newWriter;
        cAsBytes = typelayerCommonTypes.stringToBytes(constructor);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xde;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, numFields + 1);
        this.writer.offset += 4;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xc4;
        this.writer.offset += 1;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x1;
        this.writer.offset += 1;
        this.writer.offset += this.writer.setString("_", this.writer.offset);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xdb;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, cAsBytes.length);
        this.writer.offset += 4;
        this.writer.reserve(cAsBytes.length);
        this.writer.array.set(cAsBytes, this.writer.offset);
        this.writer.offset += cAsBytes.length;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderPutValueEnd(value) {
        let newWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        return;
    }
    encoderToBinary() {
        return this.writer.finalize();
    }
}
exports.MsgPackEncoder = MsgPackEncoder;
