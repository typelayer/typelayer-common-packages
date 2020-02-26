import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonTypes from "../types";
export declare class JsonEncoding implements typelayerCommonDynamic.Encoding {
    kind: string;
    constructor(arg: {});
    encodingLabel(this: JsonEncoding): string;
    encodingMimetype(this: JsonEncoding): string;
    encodingStartDecoding(this: JsonEncoding, val: Uint8Array): typelayerCommonDynamic.Decoder;
    encodingStartEncoding(this: JsonEncoding): typelayerCommonDynamic.Encoder;
}
export declare class JsonDecoder implements typelayerCommonDynamic.Decoder {
    kind: string;
    index: number;
    reader: typelayerCommonTypes.ArrayReader;
    constructor(arg: {
        index: number;
        reader: typelayerCommonTypes.ArrayReader;
    });
    decoderPath(this: JsonDecoder): string;
    decoderPopBool(this: JsonDecoder): boolean;
    decoderPopDouble(this: JsonDecoder): number;
    decoderPopField(this: JsonDecoder): string;
    decoderPopHasMoreList(this: JsonDecoder): number;
    decoderPopHasMoreMap(this: JsonDecoder): number;
    decoderPopHasMoreStruct(this: JsonDecoder): number;
    decoderPopInteger(this: JsonDecoder): number;
    decoderPopKey(this: JsonDecoder): string;
    decoderPopList(this: JsonDecoder): number;
    decoderPopMap(this: JsonDecoder): number;
    decoderPopMaybe(this: JsonDecoder): boolean;
    decoderPopString(this: JsonDecoder): string;
    decoderPopStruct(this: JsonDecoder, defaultConstructor: string): [string, number];
}
export declare class JsonEncoder implements typelayerCommonDynamic.Encoder {
    kind: string;
    writer: typelayerCommonTypes.ArrayWriter;
    constructor(arg: {
        writer: typelayerCommonTypes.ArrayWriter;
    });
    encoderPutBool(this: JsonEncoder, value: boolean): void;
    encoderPutDouble(this: JsonEncoder, value: number): void;
    encoderPutElementEnd(this: JsonEncoder, value: boolean): void;
    encoderPutField(this: JsonEncoder, value: string): void;
    encoderPutFieldEnd(this: JsonEncoder, value: boolean): void;
    encoderPutInteger(this: JsonEncoder, value: number): void;
    encoderPutKey(this: JsonEncoder, value: string): void;
    encoderPutList(this: JsonEncoder, value: number): void;
    encoderPutMap(this: JsonEncoder, value: number): void;
    encoderPutMaybe(this: JsonEncoder, value: boolean): void;
    encoderPutString(this: JsonEncoder, value: string): void;
    encoderPutStruct(this: JsonEncoder, constructor: string, numFields: number): void;
    encoderPutValueEnd(this: JsonEncoder, value: boolean): void;
    encoderToBinary(this: JsonEncoder): Uint8Array;
}
