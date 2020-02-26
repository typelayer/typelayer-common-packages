// Module: encodings.msgpack
import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonTypes from "../types";


export class MsgPackEncoding implements typelayerCommonDynamic.Encoding {
    kind : string = "MsgPackEncoding";
    constructor(arg: {}) {
        Object.assign(this, arg);
    }
    encodingLabel(this: MsgPackEncoding): string {
    
        return "msgpack";
    }
    encodingMimetype(this: MsgPackEncoding): string {
    
        return "application/msgpack";
    }
    encodingStartDecoding(this: MsgPackEncoding, val: Uint8Array): typelayerCommonDynamic.Decoder {
    
        return new MsgPackDecoder({index: 0, reader: new typelayerCommonTypes.ArrayReader(val)});
    }
    encodingStartEncoding(this: MsgPackEncoding): typelayerCommonDynamic.Encoder {
    
        return new MsgPackEncoder({writer: new typelayerCommonTypes.ArrayWriter(0)});
    }
}

export class MsgPackDecoder implements typelayerCommonDynamic.Decoder {
    kind : string = "MsgPackDecoder";
    index: number;
    reader: typelayerCommonTypes.ArrayReader;
    constructor(arg: {index: number; reader: typelayerCommonTypes.ArrayReader;}) {
        Object.assign(this, arg);
    }
    decoderPath(this: MsgPackDecoder): string {
    
        return `${this.index}`;
    }
    decoderPopBool(this: MsgPackDecoder): boolean {
        let headByte : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xc2:
                return true;
                break;
            case 0xc3:
                return false;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected bool", {path: this.decoderPath()});
        }
    }
    decoderPopDouble(this: MsgPackDecoder): number {
        let headByte : number;
        let value : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xcb:
                value = this.reader.view.getFloat64(this.index);
                this.index = (8 + this.index);
                
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected double", {path: this.decoderPath()});
        }
    }
    decoderPopField(this: MsgPackDecoder): string {
        let fieldSize : number;
        let fieldValue : string;
        let headByte : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xc6:
                fieldSize = (this.reader.array[(this.index + 1)] | (this.reader.array[this.index] << 16));
                this.index = (2 + this.index);
                
                fieldValue = this.reader.getString(this.index, fieldSize);
                this.index = (fieldSize + this.index);
                
                return fieldValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected field", {path: this.decoderPath()});
        }
    }
    decoderPopHasMoreList(this: MsgPackDecoder): number {
    
        return 0;
    }
    decoderPopHasMoreMap(this: MsgPackDecoder): number {
    
        return 0;
    }
    decoderPopHasMoreStruct(this: MsgPackDecoder): number {
    
        return 0;
    }
    decoderPopInteger(this: MsgPackDecoder): number {
        let headByte : number;
        let value : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xcf:
                value = this.reader.getInt64(this.index);
                this.index = (8 + this.index);
                
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected integer", {path: this.decoderPath()});
        }
    }
    decoderPopKey(this: MsgPackDecoder): string {
        let headByte : number;
        let keySize : number;
        let keyValue : string;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xdb:
                keySize = (this.reader.array[(this.index + 1)] | (this.reader.array[this.index] << 16));
                this.index = (2 + this.index);
                
                keyValue = this.reader.getString(this.index, keySize);
                this.index = (keySize + this.index);
                
                return keyValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected key", {path: this.decoderPath()});
        }
    }
    decoderPopList(this: MsgPackDecoder): number {
        let headByte : number;
        let value : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xdd:
                value = this.reader.view.getUint32(this.index);
                this.index = (4 + this.index);
                
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected list", {path: this.decoderPath()});
        }
    }
    decoderPopMap(this: MsgPackDecoder): number {
        let headByte : number;
        let value : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xdf:
                value = this.reader.view.getUint32(this.index);
                this.index = (4 + this.index);
                
                return value;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected map", {path: this.decoderPath()});
        }
    }
    decoderPopMaybe(this: MsgPackDecoder): boolean {
        let headByte : number;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xc0:
                return false;
                break;
            case 0x91:
                return true;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected maybe", {path: this.decoderPath()});
        }
    }
    decoderPopString(this: MsgPackDecoder): string {
        let headByte : number;
        let strSize : number;
        let strValue : string;
        headByte = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (headByte) {
            case 0xdb:
                strSize = this.reader.view.getUint32(this.index);
                this.index = (4 + this.index);
                
                strValue = this.reader.getString(this.index, strSize);
                this.index = (strSize + this.index);
                
                return strValue;
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected string", {path: this.decoderPath()});
        }
    }
    decoderPopStruct(this: MsgPackDecoder, defaultConstructor: string): [string, number] {
        let cName : string;
        let cSize : number;
        let numFields : number;
        let value : number;
        value = this.reader.array[this.index];
        this.index = (1 + this.index);
        
        switch (value) {
            case 0xde:
                numFields = this.reader.view.getUint32(this.index);
                this.index = (4 + this.index);
                
                if ((0 < numFields)) {
                    if ((this.reader.array[this.index] === 0xc4)) {
                        this.index = (4 + this.index);
                        
                        cSize = this.reader.view.getUint32(this.index);
                        this.index = (4 + this.index);
                        
                        cName = this.reader.getString(this.index, cSize);
                        this.index = (cSize + this.index);
                        
                        return [cName, (numFields - 1)];
                    } else {
                        return [defaultConstructor, numFields];
                    }
                } else {
                    return [defaultConstructor, numFields];
                }
                break;
            default:
                throw new typelayerCommonDynamic.DynamicGetException("Expected struct", {path: this.decoderPath()});
        }
    }
}

export class MsgPackEncoder implements typelayerCommonDynamic.Encoder {
    kind : string = "MsgPackEncoder";
    writer: typelayerCommonTypes.ArrayWriter;
    constructor(arg: {writer: typelayerCommonTypes.ArrayWriter;}) {
        Object.assign(this, arg);
    }
    encoderPutBool(this: MsgPackEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc2;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc3;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutDouble(this: MsgPackEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
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
    encoderPutElementEnd(this: MsgPackEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutField(this: MsgPackEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        let strAsBytes : Uint8Array;
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
    encoderPutFieldEnd(this: MsgPackEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutInteger(this: MsgPackEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xcf;
        this.writer.offset += 1;
        this.writer.setInt64(this.writer.offset, value);
        this.writer.offset += 8;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutKey(this: MsgPackEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        let strAsBytes : Uint8Array;
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
    encoderPutList(this: MsgPackEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
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
    encoderPutMap(this: MsgPackEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
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
    encoderPutMaybe(this: MsgPackEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x91;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0xc0;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutString(this: MsgPackEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        let strAsBytes : Uint8Array;
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
    encoderPutStruct(this: MsgPackEncoder, constructor: string, numFields: number): void {
        let cAsBytes : Uint8Array;
        let newWriter : typelayerCommonTypes.ArrayWriter;
        cAsBytes = typelayerCommonTypes.stringToBytes(constructor);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0xde;
        this.writer.offset += 1;
        this.writer.reserve(4);
        this.writer.view.setInt32(this.writer.offset, (numFields + 1));
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
    encoderPutValueEnd(this: MsgPackEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderToBinary(this: MsgPackEncoder): Uint8Array {
    
        return this.writer.finalize();
    }
}