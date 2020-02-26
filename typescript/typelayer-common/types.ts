import {ExceptionMeta} from "./exceptions";
export class TypelayerException extends Error {
    exceptionMessage: string;
    exceptionModule: string;
    exceptionType: string;
    exceptionFields: Map<string, string>;
    constructor(exceptionMessage: string, exceptionModule: string, exceptionType: string, exceptionFields: Map<string, string>) {
        const trueProto = new.target.prototype;
        super(exceptionMessage);
        this.exceptionMessage = exceptionMessage;
        this.exceptionModule = exceptionModule;
        this.exceptionType = exceptionType;
        this.exceptionFields = exceptionFields;
        Object.setPrototypeOf(this, trueProto);
        this.name = this.constructor.name;
    }
    toMeta(): ExceptionMeta {
        return new ExceptionMeta({exceptionMessage: this.exceptionMessage, exceptionType: this.exceptionType, exceptionModule: this.exceptionModule, exceptionFields: this.exceptionFields});
    }
}

const BIT32 = 4294967296;
const enc = new TextEncoder()
const dec = new TextDecoder()

export function objectToMap(o: object): Map<string, string> {
    return new Map(Object.entries(o).map(([k, v]) => [k, String(v)]))
}

export function mapToObject(m: Map<string, string>): {[k: string]: string} {
    return [...m.entries()].reduce((obj : any, [key, value]) => (obj[key] = value, obj), {})
}

export function stringToBytes(s: string) : Uint8Array {
    return enc.encode(s);
}

export function getStringByteSize(inp: string) : number {
    return stringToBytes(inp).length;
}

export function compareUint8Array(left: Uint8Array, other: Uint8Array) : number {
    const minLength = Math.min(left.length, other.length);
    for (let x = 0; x < minLength; x++) {
        if (left[x] < other[x]) {
            return -1;
        } else if (left[x] > other[x]) {
            return 1;
        }
    }
    return 0;
}

export class ArrayWriter {
    array : Uint8Array;
    view : DataView;
    offset : number;
    chunk_size : number;
    constructor(size: number, chunk_size = 4098) {
        this.offset = 0;
        this.chunk_size = chunk_size;
        this.array = new Uint8Array(size || chunk_size);
        this.view = new DataView(this.array.buffer);
    }
    finalize() : Uint8Array {
        return this.array.subarray(0, this.offset);
    }
    reserve(needed: number) {
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
    setInt64(offset: number, value: number) {
        this.reserve(8)
        if (value > 0) {
            var pos = offset + 8;
            while (pos > offset) {
              this.array[--pos] = value & 255;
              value /= 256;
            }
        } else if (value < 0) {
            var pos = offset + 8;
            value++;
            while (pos > offset) {
              this.array[--pos] = ((-value) & 255) ^ 255;
              value /= 256;
            }
        }
    }
    setString(inp: string, i: number) : number {
        let bs = stringToBytes(inp);
        this.reserve(bs.length)
        this.array.set(bs, i)
        return bs.length;
    }
}

export class ArrayReader {
    array : Uint8Array;
    view : DataView;
    constructor(bin: Uint8Array) {
        this.array = bin;
        this.view = new DataView(bin.buffer);
    }
    getString(offset: number, length: number) : string {
        return dec.decode(this.array.subarray(offset, offset + length));
    }
    getUInt8Array(offset: number, length: number) : Uint8Array {
        return this.array.subarray(offset, offset + length);
    }
    getInt64(offset: number) {
      var high = this.view.getUint32(offset);
      var low = this.view.getUint32(offset + 4);
      high |= 0;
      return high ? (high * BIT32 + low) : low;
    }
}
