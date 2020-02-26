// Module: encodings.json
import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonTypes from "../types";


export class JsonEncoding implements typelayerCommonDynamic.Encoding {
    kind : string = "JsonEncoding";
    constructor(arg: {}) {
        Object.assign(this, arg);
    }
    encodingLabel(this: JsonEncoding): string {
    
        return "json";
    }
    encodingMimetype(this: JsonEncoding): string {
    
        return "application/json";
    }
    encodingStartDecoding(this: JsonEncoding, val: Uint8Array): typelayerCommonDynamic.Decoder {
    
        return new JsonDecoder({index: 0, reader: new typelayerCommonTypes.ArrayReader(val)});
    }
    encodingStartEncoding(this: JsonEncoding): typelayerCommonDynamic.Encoder {
    
        return new JsonEncoder({writer: new typelayerCommonTypes.ArrayWriter(0)});
    }
}

export class JsonDecoder implements typelayerCommonDynamic.Decoder {
    kind : string = "JsonDecoder";
    index: number;
    reader: typelayerCommonTypes.ArrayReader;
    constructor(arg: {index: number; reader: typelayerCommonTypes.ArrayReader;}) {
        Object.assign(this, arg);
    }
    decoderPath(this: JsonDecoder): string {
    
        return `${this.index}`;
    }
    decoderPopBool(this: JsonDecoder): boolean {
    
        if ((((((true && (0x66 === this.reader.array[(this.index + 0)])) && (0x61 === this.reader.array[(this.index + 1)])) && (0x6c === this.reader.array[(this.index + 2)])) && (0x73 === this.reader.array[(this.index + 3)])) && (0x65 === this.reader.array[(this.index + 4)]))) {
            this.index = (5 + this.index);
            
            return false;
        } else {
            if (((((true && (0x74 === this.reader.array[(this.index + 0)])) && (0x72 === this.reader.array[(this.index + 1)])) && (0x75 === this.reader.array[(this.index + 2)])) && (0x65 === this.reader.array[(this.index + 3)]))) {
                this.index = (4 + this.index);
                
                return true;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected bool", {path: this.decoderPath()});
            }
        }
    }
    decoderPopDouble(this: JsonDecoder): number {
        let afterNumber : number;
        let decimalValue : number;
        let endIndex : number;
        let ix : number;
        if ((0x2d === this.reader.array[this.index])) {
            ix = 1;
        } else {
            ix = 0;
        }
        while (((this.reader.array[(ix + this.index)] < 0x3a) && (this.reader.array[(ix + this.index)] >= 0x30))) {
            ix = (ix + 1);
        }
        if ((0x2e === this.reader.array[(ix + this.index)])) {
            ix = (ix + 1);
            while (((this.reader.array[(ix + this.index)] < 0x3a) && (this.reader.array[(ix + this.index)] >= 0x30))) {
                ix = (ix + 1);
            }
            afterNumber = ix;
        } else {
            afterNumber = ix;
        }
        if (((0x45 === this.reader.array[(afterNumber + this.index)]) || (0x65 === this.reader.array[(afterNumber + this.index)]))) {
            if (((0x2d === this.reader.array[((afterNumber + 1) + this.index)]) || (0x2b === this.reader.array[((afterNumber + 1) + this.index)]))) {
                ix = (afterNumber + 2);
            } else {
                ix = (afterNumber + 1);
            }
            while (((this.reader.array[(ix + this.index)] < 0x3a) && (this.reader.array[(ix + this.index)] >= 0x30))) {
                ix = (ix + 1);
            }
            endIndex = ix;
        } else {
            endIndex = afterNumber;
        }
        decimalValue = parseFloat(this.reader.getString(this.index, endIndex));
        this.index = (endIndex + this.index);
        
        return decimalValue;
    }
    decoderPopField(this: JsonDecoder): string {
        let ix : number;
        let strValue : string;
        if ((this.reader.array[this.index] === 0x22)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while ((this.reader.array[(ix + this.index)] !== 0x22)) {
                ix = (ix + 1);
            }
            strValue = this.reader.getString(this.index, ix);
            this.index = ((ix + 1) + this.index);
            
            if ((this.reader.array[this.index] === 0x3a)) {
                this.index = (1 + this.index);
                
                ix = 0;
                while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                    ix = (ix + 1);
                }
                this.index = (ix + this.index);
                
                return strValue;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected colon", {path: this.decoderPath()});
            }
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected string", {path: this.decoderPath()});
        }
    }
    decoderPopHasMoreList(this: JsonDecoder): number {
        let ix : number;
        if ((this.reader.array[this.index] === 0x2c)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            return 1;
        } else {
            if ((this.reader.array[this.index] === 0x5d)) {
                this.index = (1 + this.index);
                
                return -1;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected comma or ]", {path: this.decoderPath()});
            }
        }
    }
    decoderPopHasMoreMap(this: JsonDecoder): number {
        let ix : number;
        if ((this.reader.array[this.index] === 0x2c)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            return 1;
        } else {
            if ((this.reader.array[this.index] === 0x7d)) {
                this.index = (1 + this.index);
                
                return -1;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected comma or }", {path: this.decoderPath()});
            }
        }
    }
    decoderPopHasMoreStruct(this: JsonDecoder): number {
        let ix : number;
        if ((this.reader.array[this.index] === 0x2c)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            return 1;
        } else {
            if ((this.reader.array[this.index] === 0x7d)) {
                this.index = (1 + this.index);
                
                return -1;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected comma or }", {path: this.decoderPath()});
            }
        }
    }
    decoderPopInteger(this: JsonDecoder): number {
        let decimalValue : number;
        let endIndex : number;
        let ix : number;
        if ((0x2d === this.reader.array[this.index])) {
            ix = 1;
        } else {
            ix = 0;
        }
        while (((this.reader.array[(ix + this.index)] < 0x3a) && (this.reader.array[(ix + this.index)] >= 0x30))) {
            ix = (ix + 1);
        }
        endIndex = ix;
        decimalValue = parseInt(this.reader.getString(this.index, endIndex));
        this.index = (endIndex + this.index);
        
        return decimalValue;
    }
    decoderPopKey(this: JsonDecoder): string {
        let ix : number;
        let strValue : string;
        if ((this.reader.array[this.index] === 0x22)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while ((this.reader.array[(ix + this.index)] !== 0x22)) {
                ix = (ix + 1);
            }
            strValue = this.reader.getString(this.index, ix);
            this.index = ((ix + 1) + this.index);
            
            if ((this.reader.array[this.index] === 0x3a)) {
                this.index = (1 + this.index);
                
                ix = 0;
                while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                    ix = (ix + 1);
                }
                this.index = (ix + this.index);
                
                return strValue;
            } else {
                throw new typelayerCommonDynamic.DynamicGetException("Expected colon", {path: this.decoderPath()});
            }
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected string", {path: this.decoderPath()});
        }
    }
    decoderPopList(this: JsonDecoder): number {
        let ix : number;
        if ((this.reader.array[this.index] === 0x5b)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            if ((this.reader.array[this.index] === 0x5d)) {
                this.index = (1 + this.index);
                
                return -1;
            } else {
                return 1;
            }
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected array", {path: this.decoderPath()});
        }
    }
    decoderPopMap(this: JsonDecoder): number {
        let ix : number;
        if ((this.reader.array[this.index] === 0x7b)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            if ((this.reader.array[this.index] === 0x7d)) {
                this.index = (1 + this.index);
                
                return -1;
            } else {
                return 1;
            }
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected map", {path: this.decoderPath()});
        }
    }
    decoderPopMaybe(this: JsonDecoder): boolean {
    
        if (((((true && (0x6e === this.reader.array[(this.index + 0)])) && (0x75 === this.reader.array[(this.index + 1)])) && (0x6c === this.reader.array[(this.index + 2)])) && (0x6c === this.reader.array[(this.index + 3)]))) {
            this.index = (4 + this.index);
            
            return false;
        } else {
            return true;
        }
    }
    decoderPopString(this: JsonDecoder): string {
        let ix : number;
        let strValue : string;
        if ((this.reader.array[this.index] === 0x22)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while ((this.reader.array[(ix + this.index)] !== 0x22)) {
                ix = (ix + 1);
            }
            strValue = this.reader.getString(this.index, ix);
            this.index = ((ix + 1) + this.index);
            
            return strValue;
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected string", {path: this.decoderPath()});
        }
    }
    decoderPopStruct(this: JsonDecoder, defaultConstructor: string): [string, number] {
        let ix : number;
        let strValue : string;
        if ((this.reader.array[this.index] === 0x7b)) {
            this.index = (1 + this.index);
            
            ix = 0;
            while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                ix = (ix + 1);
            }
            this.index = (ix + this.index);
            
            if (((((true && (0x22 === this.reader.array[(this.index + 0)])) && (0x5f === this.reader.array[(this.index + 1)])) && (0x22 === this.reader.array[(this.index + 2)])) && (0x3a === this.reader.array[(this.index + 3)]))) {
                this.index = (4 + this.index);
                
                ix = 0;
                while (((this.reader.array[(ix + this.index)] === 0x20) || (this.reader.array[(ix + this.index)] === 0xa))) {
                    ix = (ix + 1);
                }
                this.index = (ix + this.index);
                
                if ((this.reader.array[this.index] === 0x22)) {
                    this.index = (1 + this.index);
                    
                    ix = 0;
                    while ((this.reader.array[(ix + this.index)] !== 0x22)) {
                        ix = (ix + 1);
                    }
                    strValue = this.reader.getString(this.index, ix);
                    this.index = ((ix + 1) + this.index);
                    
                    return [strValue, 0];
                } else {
                    throw new typelayerCommonDynamic.DynamicGetException("Expected string", {path: this.decoderPath()});
                }
            } else {
                if ((this.reader.array[this.index] === 0x7d)) {
                    this.index = (1 + this.index);
                    
                    return [defaultConstructor, -1];
                } else {
                    return [defaultConstructor, 1];
                }
            }
        } else {
            throw new typelayerCommonDynamic.DynamicGetException("Expected object", {path: this.decoderPath()});
        }
    }
}

export class JsonEncoder implements typelayerCommonDynamic.Encoder {
    kind : string = "JsonEncoder";
    writer: typelayerCommonTypes.ArrayWriter;
    constructor(arg: {writer: typelayerCommonTypes.ArrayWriter;}) {
        Object.assign(this, arg);
    }
    encoderPutBool(this: JsonEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(new Uint8Array([0x74, 0x72, 0x75, 0x65]).length);
            this.writer.array.set(new Uint8Array([0x74, 0x72, 0x75, 0x65]), this.writer.offset);
            this.writer.offset += new Uint8Array([0x74, 0x72, 0x75, 0x65]).length;
            newWriter = this.writer;
        } else {
            this.writer.reserve(new Uint8Array([0x66, 0x61, 0x6c, 0x73, 0x65]).length);
            this.writer.array.set(new Uint8Array([0x66, 0x61, 0x6c, 0x73, 0x65]), this.writer.offset);
            this.writer.offset += new Uint8Array([0x66, 0x61, 0x6c, 0x73, 0x65]).length;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutDouble(this: JsonEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.offset += this.writer.setString(value.toString() , this.writer.offset);
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutElementEnd(this: JsonEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x5d;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x2c;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x20;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutField(this: JsonEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        let strAsBytes : Uint8Array;
        strAsBytes = typelayerCommonTypes.stringToBytes(value);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        this.writer.reserve(strAsBytes.length);
        this.writer.array.set(strAsBytes, this.writer.offset);
        this.writer.offset += strAsBytes.length;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x3a;
        this.writer.offset += 1;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x20;
        this.writer.offset += 1;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutFieldEnd(this: JsonEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x7d;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x2c;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x20;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutInteger(this: JsonEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.offset += this.writer.setString(value.toString() , this.writer.offset);
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutKey(this: JsonEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        let strAsBytes : Uint8Array;
        strAsBytes = typelayerCommonTypes.stringToBytes(value);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        this.writer.reserve(strAsBytes.length);
        this.writer.array.set(strAsBytes, this.writer.offset);
        this.writer.offset += strAsBytes.length;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x3a;
        this.writer.offset += 1;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x20;
        this.writer.offset += 1;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutList(this: JsonEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x5b;
        this.writer.offset += 1;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutMap(this: JsonEncoder, value: number): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x7b;
        this.writer.offset += 1;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutMaybe(this: JsonEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            newWriter = this.writer;
        } else {
            this.writer.reserve(new Uint8Array([0x6e, 0x75, 0x6c, 0x6c]).length);
            this.writer.array.set(new Uint8Array([0x6e, 0x75, 0x6c, 0x6c]), this.writer.offset);
            this.writer.offset += new Uint8Array([0x6e, 0x75, 0x6c, 0x6c]).length;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutString(this: JsonEncoder, value: string): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        this.writer.offset += this.writer.setString(value, this.writer.offset);
        this.writer.reserve(1);
        this.writer.array[this.writer.offset] = 0x22;
        this.writer.offset += 1;
        newWriter = this.writer;
        this.writer = newWriter;
        
        return;
    }
    encoderPutStruct(this: JsonEncoder, constructor: string, numFields: number): void {
        let cAsBytes : Uint8Array;
        let newWriter : typelayerCommonTypes.ArrayWriter;
        cAsBytes = typelayerCommonTypes.stringToBytes(constructor);
        if ((0 === numFields)) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x7b;
            this.writer.offset += 1;
            this.writer.reserve(new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]).length);
            this.writer.array.set(new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]), this.writer.offset);
            this.writer.offset += new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]).length;
            this.writer.reserve(cAsBytes.length);
            this.writer.array.set(cAsBytes, this.writer.offset);
            this.writer.offset += cAsBytes.length;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x22;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x7d;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x7b;
            this.writer.offset += 1;
            this.writer.reserve(new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]).length);
            this.writer.array.set(new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]), this.writer.offset);
            this.writer.offset += new Uint8Array([0x22, 0x5f, 0x22, 0x3a, 0x20, 0x22]).length;
            this.writer.reserve(cAsBytes.length);
            this.writer.array.set(cAsBytes, this.writer.offset);
            this.writer.offset += cAsBytes.length;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x22;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x2c;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x20;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderPutValueEnd(this: JsonEncoder, value: boolean): void {
        let newWriter : typelayerCommonTypes.ArrayWriter;
        if (value) {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x7d;
            this.writer.offset += 1;
            newWriter = this.writer;
        } else {
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x2c;
            this.writer.offset += 1;
            this.writer.reserve(1);
            this.writer.array[this.writer.offset] = 0x20;
            this.writer.offset += 1;
            newWriter = this.writer;
        }
        this.writer = newWriter;
        
        return;
    }
    encoderToBinary(this: JsonEncoder): Uint8Array {
    
        return this.writer.finalize();
    }
}