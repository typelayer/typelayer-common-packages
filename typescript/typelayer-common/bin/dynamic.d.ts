import * as typelayerCommonTypes from "./types";
export declare class DynamicGetException extends typelayerCommonTypes.TypelayerException {
    path: string;
    constructor(m: string, meta: {
        path: string;
    });
}
export interface Decoder {
    decoderPath: () => string;
    decoderPopBool: () => boolean;
    decoderPopDouble: () => number;
    decoderPopField: () => string;
    decoderPopHasMoreList: () => number;
    decoderPopHasMoreMap: () => number;
    decoderPopHasMoreStruct: () => number;
    decoderPopInteger: () => number;
    decoderPopKey: () => string;
    decoderPopList: () => number;
    decoderPopMap: () => number;
    decoderPopMaybe: () => boolean;
    decoderPopString: () => string;
    decoderPopStruct: (defaultConstructor: string) => [string, number];
}
export interface Encoder {
    encoderPutBool: (value: boolean) => void;
    encoderPutDouble: (value: number) => void;
    encoderPutElementEnd: (lastElement: boolean) => void;
    encoderPutField: (fieldId: string) => void;
    encoderPutFieldEnd: (lastField: boolean) => void;
    encoderPutInteger: (value: number) => void;
    encoderPutKey: (key: string) => void;
    encoderPutList: (numElements: number) => void;
    encoderPutMap: (numKeys: number) => void;
    encoderPutMaybe: (value: boolean) => void;
    encoderPutString: (value: string) => void;
    encoderPutStruct: (constructor: string, numFields: number) => void;
    encoderPutValueEnd: (lastValue: boolean) => void;
    encoderToBinary: () => Uint8Array;
}
export interface Encoding {
    encodingLabel: () => string;
    encodingMimetype: () => string;
    encodingStartDecoding: (binData: Uint8Array) => Decoder;
    encodingStartEncoding: () => Encoder;
}
