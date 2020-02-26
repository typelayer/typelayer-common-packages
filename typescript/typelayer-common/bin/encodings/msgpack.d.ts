import * as typelayerCommonDynamic from "../dynamic";
import * as typelayerCommonTypes from "../types";
export declare class MsgPackEncoding implements typelayerCommonDynamic.Encoding {
    kind: string;
    constructor(arg: {});
    encodingLabel(this: MsgPackEncoding): string;
    encodingMimetype(this: MsgPackEncoding): string;
    encodingStartDecoding(this: MsgPackEncoding, val: Uint8Array): typelayerCommonDynamic.Decoder;
    encodingStartEncoding(this: MsgPackEncoding): typelayerCommonDynamic.Encoder;
}
export declare class MsgPackDecoder implements typelayerCommonDynamic.Decoder {
    kind: string;
    index: number;
    reader: typelayerCommonTypes.ArrayReader;
    constructor(arg: {
        index: number;
        reader: typelayerCommonTypes.ArrayReader;
    });
    decoderPath(this: MsgPackDecoder): string;
    decoderPopBool(this: MsgPackDecoder): boolean;
    decoderPopDouble(this: MsgPackDecoder): number;
    decoderPopField(this: MsgPackDecoder): string;
    decoderPopHasMoreList(this: MsgPackDecoder): number;
    decoderPopHasMoreMap(this: MsgPackDecoder): number;
    decoderPopHasMoreStruct(this: MsgPackDecoder): number;
    decoderPopInteger(this: MsgPackDecoder): number;
    decoderPopKey(this: MsgPackDecoder): string;
    decoderPopList(this: MsgPackDecoder): number;
    decoderPopMap(this: MsgPackDecoder): number;
    decoderPopMaybe(this: MsgPackDecoder): boolean;
    decoderPopString(this: MsgPackDecoder): string;
    decoderPopStruct(this: MsgPackDecoder, defaultConstructor: string): [string, number];
}
export declare class MsgPackEncoder implements typelayerCommonDynamic.Encoder {
    kind: string;
    writer: typelayerCommonTypes.ArrayWriter;
    constructor(arg: {
        writer: typelayerCommonTypes.ArrayWriter;
    });
    encoderPutBool(this: MsgPackEncoder, value: boolean): void;
    encoderPutDouble(this: MsgPackEncoder, value: number): void;
    encoderPutElementEnd(this: MsgPackEncoder, value: boolean): void;
    encoderPutField(this: MsgPackEncoder, value: string): void;
    encoderPutFieldEnd(this: MsgPackEncoder, value: boolean): void;
    encoderPutInteger(this: MsgPackEncoder, value: number): void;
    encoderPutKey(this: MsgPackEncoder, value: string): void;
    encoderPutList(this: MsgPackEncoder, value: number): void;
    encoderPutMap(this: MsgPackEncoder, value: number): void;
    encoderPutMaybe(this: MsgPackEncoder, value: boolean): void;
    encoderPutString(this: MsgPackEncoder, value: string): void;
    encoderPutStruct(this: MsgPackEncoder, constructor: string, numFields: number): void;
    encoderPutValueEnd(this: MsgPackEncoder, value: boolean): void;
    encoderToBinary(this: MsgPackEncoder): Uint8Array;
}
