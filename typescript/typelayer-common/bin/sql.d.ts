import * as typelayerCommonTypes from "./types";
export declare class RelationNotLoaded extends typelayerCommonTypes.TypelayerException {
    constructor(m: string, meta: {});
}
export interface QText {
    qTextEvaluate: (writer: typelayerCommonTypes.ArrayWriter) => typelayerCommonTypes.ArrayWriter;
}
export interface QInt {
    qIntEvaluate: (writer: typelayerCommonTypes.ArrayWriter) => typelayerCommonTypes.ArrayWriter;
}
export interface QDouble {
    qDoubleEvaluate: (writer: typelayerCommonTypes.ArrayWriter) => typelayerCommonTypes.ArrayWriter;
}
export interface QBool {
    qBoolEvaluate: (writer: typelayerCommonTypes.ArrayWriter) => typelayerCommonTypes.ArrayWriter;
}
export declare class QBindText implements QText {
    kind: string;
    value: string;
    constructor(arg: {
        value: string;
    });
    qTextEvaluate(this: QBindText, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class QBindInt implements QInt {
    kind: string;
    value: number;
    constructor(arg: {
        value: number;
    });
    qIntEvaluate(this: QBindInt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class QBindDouble implements QDouble {
    kind: string;
    value: number;
    constructor(arg: {
        value: number;
    });
    qDoubleEvaluate(this: QBindDouble, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class QBindBool implements QBool {
    kind: string;
    value: boolean;
    constructor(arg: {
        value: boolean;
    });
    qBoolEvaluate(this: QBindBool, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class And implements QBool {
    kind: string;
    left: QBool;
    right: QBool;
    constructor(arg: {
        left: QBool;
        right: QBool;
    });
    qBoolEvaluate(this: And, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class Or implements QBool {
    kind: string;
    left: QBool;
    right: QBool;
    constructor(arg: {
        left: QBool;
        right: QBool;
    });
    qBoolEvaluate(this: Or, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class BoolIsNot implements QBool {
    kind: string;
    left: QBool;
    right: QBool;
    constructor(arg: {
        left: QBool;
        right: QBool;
    });
    qBoolEvaluate(this: BoolIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class BoolIsEq implements QBool {
    kind: string;
    left: QBool;
    right: QBool;
    constructor(arg: {
        left: QBool;
        right: QBool;
    });
    qBoolEvaluate(this: BoolIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsNot implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsEq implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsGt implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsGte implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsLt implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IsLte implements QBool {
    kind: string;
    left: QInt;
    right: QInt;
    constructor(arg: {
        left: QInt;
        right: QInt;
    });
    qBoolEvaluate(this: IsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsNot implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsEq implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsGt implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsGte implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsLt implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIsLte implements QBool {
    kind: string;
    left: QDouble;
    right: QDouble;
    constructor(arg: {
        left: QDouble;
        right: QDouble;
    });
    qBoolEvaluate(this: DoubleIsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsNot implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsEq implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsGt implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsGte implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsLt implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIsLte implements QBool {
    kind: string;
    left: QText;
    right: QText;
    constructor(arg: {
        left: QText;
        right: QText;
    });
    qBoolEvaluate(this: TextIsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IntIn implements QBool {
    kind: string;
    left: QInt;
    right: Array<QInt>;
    constructor(arg: {
        left: QInt;
        right: Array<QInt>;
    });
    qBoolEvaluate(this: IntIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class IntNotIn implements QBool {
    kind: string;
    left: QInt;
    right: Array<QInt>;
    constructor(arg: {
        left: QInt;
        right: Array<QInt>;
    });
    qBoolEvaluate(this: IntNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextIn implements QBool {
    kind: string;
    left: QText;
    right: Array<QText>;
    constructor(arg: {
        left: QText;
        right: Array<QText>;
    });
    qBoolEvaluate(this: TextIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class TextNotIn implements QBool {
    kind: string;
    left: QText;
    right: Array<QText>;
    constructor(arg: {
        left: QText;
        right: Array<QText>;
    });
    qBoolEvaluate(this: TextNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleIn implements QBool {
    kind: string;
    left: QDouble;
    right: Array<QDouble>;
    constructor(arg: {
        left: QDouble;
        right: Array<QDouble>;
    });
    qBoolEvaluate(this: DoubleIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class DoubleNotIn implements QBool {
    kind: string;
    left: QDouble;
    right: Array<QDouble>;
    constructor(arg: {
        left: QDouble;
        right: Array<QDouble>;
    });
    qBoolEvaluate(this: DoubleNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter;
}
export declare class Inner {
    constructor(arg: {});
}
export declare class LeftInner {
    constructor(arg: {});
}
export declare class LeftOuter {
    constructor(arg: {});
}
export declare type JoinType = Inner | LeftInner | LeftOuter;
export declare class JoinInstance {
    alias: string;
    fromTable: string;
    join: JoinType;
    toTable: string;
    constructor(arg: {
        alias: string;
        fromTable: string;
        join: JoinType;
        toTable: string;
    });
}
export declare function qText(value: string): QText;
export declare function qInt(value: number): QInt;
export declare function qDouble(value: number): QDouble;
export declare function qBool(value: boolean): QBool;
export declare function qIntIn(left: QInt, right: Array<QInt>): QBool;
export declare function qIntNotIn(left: QInt, right: Array<QInt>): QBool;
export declare function qTextIn(left: QText, right: Array<QText>): QBool;
export declare function qTextNotIn(left: QText, right: Array<QText>): QBool;
export declare function qDoubleIn(left: QDouble, right: Array<QDouble>): QBool;
export declare function qDoubleNotIn(left: QDouble, right: Array<QDouble>): QBool;
export declare function qAnd(left: QBool, right: QBool): QBool;
export declare function qOr(left: QBool, right: QBool): QBool;
export declare function qBoolIsNot(left: QBool, right: QBool): QBool;
export declare function qBoolIsEq(left: QBool, right: QBool): QBool;
export declare function qIsNot(left: QInt, right: QInt): QBool;
export declare function qIsEq(left: QInt, right: QInt): QBool;
export declare function qIsGt(left: QInt, right: QInt): QBool;
export declare function qIsGte(left: QInt, right: QInt): QBool;
export declare function qIsLt(left: QInt, right: QInt): QBool;
export declare function qIsLte(left: QInt, right: QInt): QBool;
export declare function qDoubleIsNot(left: QDouble, right: QDouble): QBool;
export declare function qDoubleIsEq(left: QDouble, right: QDouble): QBool;
export declare function qDoubleIsGt(left: QDouble, right: QDouble): QBool;
export declare function qDoubleIsGte(left: QDouble, right: QDouble): QBool;
export declare function qDoubleIsLt(left: QDouble, right: QDouble): QBool;
export declare function qDoubleIsLte(left: QDouble, right: QDouble): QBool;
export declare function qTextIsNot(left: QText, right: QText): QBool;
export declare function qTextIsEq(left: QText, right: QText): QBool;
export declare function qTextIsGt(left: QText, right: QText): QBool;
export declare function qTextIsGte(left: QText, right: QText): QBool;
export declare function qTextIsLt(left: QText, right: QText): QBool;
export declare function qTextIsLte(left: QText, right: QText): QBool;
