import * as typelayerCommonDocumentation from "./documentation";
import * as typelayerCommonDynamic from "./dynamic";
import * as typelayerCommonExceptions from "./exceptions";
export declare class ExceptionMetaSerializable {
    exceptionFields: Map<string, string>;
    exceptionMessage: string;
    exceptionModule: string;
    exceptionType: string;
    constructor(arg: {
        exceptionFields: Map<string, string>;
        exceptionMessage: string;
        exceptionModule: string;
        exceptionType: string;
    });
}
export declare function dynamicGetExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Decoder): ExceptionMetaSerializable;
export declare function dynamicGetObjExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Decoder): ExceptionMetaSerializable;
export declare function dynamicPutExceptionMetaSerializable(dynamicObject: typelayerCommonDynamic.Encoder, inputObject: ExceptionMetaSerializable): void;
export declare function defaultExceptionMetaSerializable(): ExceptionMetaSerializable;
export declare function describeExceptionMetaSerializable(): typelayerCommonDocumentation.StructureInfo;
export declare function toSerializable(meta: typelayerCommonExceptions.ExceptionMeta): ExceptionMetaSerializable;
export declare function toPlainMeta(meta: ExceptionMetaSerializable): typelayerCommonExceptions.ExceptionMeta;
