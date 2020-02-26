"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
class TypelayerException extends Error {
    constructor(exceptionMessage, exceptionModule, exceptionType, exceptionFields) {
        const trueProto = new.target.prototype;
        super(exceptionMessage);
        this.exceptionMessage = exceptionMessage;
        this.exceptionModule = exceptionModule;
        this.exceptionType = exceptionType;
        this.exceptionFields = exceptionFields;
        Object.setPrototypeOf(this, trueProto);
        this.name = this.constructor.name;
    }
    toMeta() {
        return new exceptions_1.ExceptionMeta({
            exceptionMessage: this.exceptionMessage,
            exceptionType: this.exceptionType,
            exceptionModule: this.exceptionModule,
            exceptionFields: this.exceptionFields
        });
    }
}
exports.TypelayerException = TypelayerException;
const BIT32 = 4294967296;
const enc = new TextEncoder();
const dec = new TextDecoder();
function objectToMap(o) {
    return new Map(Object.entries(o).map(([k, v]) => [k, String(v)]));
}
exports.objectToMap = objectToMap;
function mapToObject(m) {
    return [...m.entries()].reduce((obj, [key, value]) => ((obj[key] = value), obj), {});
}
exports.mapToObject = mapToObject;
function stringToBytes(s) {
    return enc.encode(s);
}
exports.stringToBytes = stringToBytes;
function getStringByteSize(inp) {
    return stringToBytes(inp).length;
}
exports.getStringByteSize = getStringByteSize;
function compareUint8Array(left, other) {
    const minLength = Math.min(left.length, other.length);
    for (let x = 0; x < minLength; x++) {
        if (left[x] < other[x]) {
            return -1;
        }
        else if (left[x] > other[x]) {
            return 1;
        }
    }
    return 0;
}
exports.compareUint8Array = compareUint8Array;
class ArrayWriter {
    constructor(size, chunk_size = 4098) {
        this.offset = 0;
        this.chunk_size = chunk_size;
        this.array = new Uint8Array(size || chunk_size);
        this.view = new DataView(this.array.buffer);
    }
    finalize() {
        return this.array.subarray(0, this.offset);
    }
    reserve(needed) {
        let newEnd = this.offset + needed;
        if (this.array.length < newEnd) {
            let newSize = this.array.length * 1.5;
            while (newSize < newEnd) {
                newSize *= 1.5;
            }
            let array = new Uint8Array(newSize);
            array.set(this.array, 0);
            this.array = array;
            this.view = new DataView(this.array.buffer);
        }
    }
    setInt64(offset, value) {
        this.reserve(8);
        if (value > 0) {
            var pos = offset + 8;
            while (pos > offset) {
                this.array[--pos] = value & 255;
                value /= 256;
            }
        }
        else if (value < 0) {
            var pos = offset + 8;
            value++;
            while (pos > offset) {
                this.array[--pos] = (-value & 255) ^ 255;
                value /= 256;
            }
        }
    }
    setString(inp, i) {
        let bs = stringToBytes(inp);
        this.reserve(bs.length);
        this.array.set(bs, i);
        return bs.length;
    }
}
exports.ArrayWriter = ArrayWriter;
class ArrayReader {
    constructor(bin) {
        this.array = bin;
        this.view = new DataView(bin.buffer);
    }
    getString(offset, length) {
        return dec.decode(this.array.subarray(offset, offset + length));
    }
    getUInt8Array(offset, length) {
        return this.array.subarray(offset, offset + length);
    }
    getInt64(offset) {
        var high = this.view.getUint32(offset);
        var low = this.view.getUint32(offset + 4);
        high |= 0;
        return high ? high * BIT32 + low : low;
    }
}
exports.ArrayReader = ArrayReader;
