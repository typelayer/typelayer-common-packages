import { ExceptionMeta } from "./exceptions";
export declare class TypelayerException extends Error {
    exceptionMessage: string;
    exceptionModule: string;
    exceptionType: string;
    exceptionFields: Map<string, string>;
    constructor(exceptionMessage: string, exceptionModule: string, exceptionType: string, exceptionFields: Map<string, string>);
    toMeta(): ExceptionMeta;
}
export declare function objectToMap(o: object): Map<string, string>;
export declare function mapToObject(m: Map<string, string>): {
    [k: string]: string;
};
export declare function stringToBytes(s: string): Uint8Array;
export declare function getStringByteSize(inp: string): number;
export declare function compareUint8Array(left: Uint8Array, other: Uint8Array): number;
export declare class ArrayWriter {
    array: Uint8Array;
    view: DataView;
    offset: number;
    chunk_size: number;
    constructor(size: number, chunk_size?: number);
    finalize(): Uint8Array;
    reserve(needed: number): void;
    setInt64(offset: number, value: number): void;
    setString(inp: string, i: number): number;
}
export declare class ArrayReader {
    array: Uint8Array;
    view: DataView;
    constructor(bin: Uint8Array);
    getString(offset: number, length: number): string;
    getUInt8Array(offset: number, length: number): Uint8Array;
    getInt64(offset: number): number;
}
