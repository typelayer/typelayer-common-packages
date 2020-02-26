// Module: sql
import * as typelayerCommonTypes from "./types";


export class RelationNotLoaded extends  typelayerCommonTypes.TypelayerException {

    constructor(m: string, meta: {}) {
        super(m, "typelayer_common_sql", "relation_not_loaded", new Map([]));
        Object.setPrototypeOf(this, RelationNotLoaded.prototype);

    }
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

export class QBindText implements QText {
    kind : string = "QBindText";
    value: string;
    constructor(arg: {value: string;}) {
        Object.assign(this, arg);
    }
    qTextEvaluate(this: QBindText, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
    
        writer.reserve(1);
        writer.array[writer.offset] = 0x27;
        writer.offset += 1;
        writer.offset += writer.setString(this.value, writer.offset);
        writer.reserve(1);
        writer.array[writer.offset] = 0x27;
        writer.offset += 1;
        return writer;
    }
}

export class QBindInt implements QInt {
    kind : string = "QBindInt";
    value: number;
    constructor(arg: {value: number;}) {
        Object.assign(this, arg);
    }
    qIntEvaluate(this: QBindInt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
    
        writer.offset += writer.setString(this.value.toString() , writer.offset);
        return writer;
    }
}

export class QBindDouble implements QDouble {
    kind : string = "QBindDouble";
    value: number;
    constructor(arg: {value: number;}) {
        Object.assign(this, arg);
    }
    qDoubleEvaluate(this: QBindDouble, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
    
        writer.offset += writer.setString(this.value.toString() , writer.offset);
        return writer;
    }
}

export class QBindBool implements QBool {
    kind : string = "QBindBool";
    value: boolean;
    constructor(arg: {value: boolean;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: QBindBool, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
    
        if (this.value) {
            writer.reserve(new Uint8Array([0x54, 0x52, 0x55, 0x45]).length);
            writer.array.set(new Uint8Array([0x54, 0x52, 0x55, 0x45]), writer.offset);
            writer.offset += new Uint8Array([0x54, 0x52, 0x55, 0x45]).length;
            return writer;
        } else {
            writer.reserve(new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]).length);
            writer.array.set(new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]), writer.offset);
            writer.offset += new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]).length;
            return writer;
        }
    }
}

export class And implements QBool {
    kind : string = "And";
    left: QBool;
    right: QBool;
    constructor(arg: {left: QBool; right: QBool;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: And, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qBoolEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("and", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qBoolEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class Or implements QBool {
    kind : string = "Or";
    left: QBool;
    right: QBool;
    constructor(arg: {left: QBool; right: QBool;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: Or, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qBoolEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("OR", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qBoolEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class BoolIsNot implements QBool {
    kind : string = "BoolIsNot";
    left: QBool;
    right: QBool;
    constructor(arg: {left: QBool; right: QBool;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: BoolIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qBoolEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<>", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qBoolEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class BoolIsEq implements QBool {
    kind : string = "BoolIsEq";
    left: QBool;
    right: QBool;
    constructor(arg: {left: QBool; right: QBool;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: BoolIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qBoolEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qBoolEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsNot implements QBool {
    kind : string = "IsNot";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<>", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsEq implements QBool {
    kind : string = "IsEq";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsGt implements QBool {
    kind : string = "IsGt";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsGte implements QBool {
    kind : string = "IsGte";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsLt implements QBool {
    kind : string = "IsLt";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IsLte implements QBool {
    kind : string = "IsLte";
    left: QInt;
    right: QInt;
    constructor(arg: {left: QInt; right: QInt;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qIntEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsNot implements QBool {
    kind : string = "DoubleIsNot";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<>", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsEq implements QBool {
    kind : string = "DoubleIsEq";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsGt implements QBool {
    kind : string = "DoubleIsGt";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsGte implements QBool {
    kind : string = "DoubleIsGte";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsLt implements QBool {
    kind : string = "DoubleIsLt";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIsLte implements QBool {
    kind : string = "DoubleIsLte";
    left: QDouble;
    right: QDouble;
    constructor(arg: {left: QDouble; right: QDouble;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qDoubleEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsNot implements QBool {
    kind : string = "TextIsNot";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsNot, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<>", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsEq implements QBool {
    kind : string = "TextIsEq";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsEq, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsGt implements QBool {
    kind : string = "TextIsGt";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsGt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsGte implements QBool {
    kind : string = "TextIsGte";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsGte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString(">=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsLt implements QBool {
    kind : string = "TextIsLt";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsLt, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIsLte implements QBool {
    kind : string = "TextIsLte";
    left: QText;
    right: QText;
    constructor(arg: {left: QText; right: QText;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIsLte, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("<=", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        writerAfterRight = this.right.qTextEvaluate(writerAfterMiddle);
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IntIn implements QBool {
    kind : string = "IntIn";
    left: QInt;
    right: Array<QInt>;
    constructor(arg: {left: QInt; right: Array<QInt>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IntIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qIntEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class IntNotIn implements QBool {
    kind : string = "IntNotIn";
    left: QInt;
    right: Array<QInt>;
    constructor(arg: {left: QInt; right: Array<QInt>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: IntNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qIntEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("NOT IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qIntEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextIn implements QBool {
    kind : string = "TextIn";
    left: QText;
    right: Array<QText>;
    constructor(arg: {left: QText; right: Array<QText>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qTextEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class TextNotIn implements QBool {
    kind : string = "TextNotIn";
    left: QText;
    right: Array<QText>;
    constructor(arg: {left: QText; right: Array<QText>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: TextNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qTextEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("NOT IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qTextEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleIn implements QBool {
    kind : string = "DoubleIn";
    left: QDouble;
    right: Array<QDouble>;
    constructor(arg: {left: QDouble; right: Array<QDouble>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qDoubleEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class DoubleNotIn implements QBool {
    kind : string = "DoubleNotIn";
    left: QDouble;
    right: Array<QDouble>;
    constructor(arg: {left: QDouble; right: Array<QDouble>;}) {
        Object.assign(this, arg);
    }
    qBoolEvaluate(this: DoubleNotIn, writer: typelayerCommonTypes.ArrayWriter): typelayerCommonTypes.ArrayWriter {
        let afterElem : typelayerCommonTypes.ArrayWriter;
        let writerAfterLeft : typelayerCommonTypes.ArrayWriter;
        let writerAfterLp : typelayerCommonTypes.ArrayWriter;
        let writerAfterMiddle : typelayerCommonTypes.ArrayWriter;
        let writerAfterRight : typelayerCommonTypes.ArrayWriter;
        writer.reserve(1);
        writer.array[writer.offset] = 0x28;
        writer.offset += 1;
        writerAfterLp = writer;
        writerAfterLeft = this.left.qDoubleEvaluate(writerAfterLp);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.offset += writerAfterLeft.setString("NOT IN", writerAfterLeft.offset);
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x20;
        writerAfterLeft.offset += 1;
        writerAfterLeft.reserve(1);
        writerAfterLeft.array[writerAfterLeft.offset] = 0x28;
        writerAfterLeft.offset += 1;
        writerAfterMiddle = writerAfterLeft;
        let reduceInIndex : number = 0;
        let reduceInAcc : typelayerCommonTypes.ArrayWriter = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qDoubleEvaluate(reduceInAcc);
            if (((reduceInIndex + 1) === this.right.length)) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            } else {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x2c;
                afterElem.offset += 1;
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x20;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            reduceInIndex++;
        }
        writerAfterRight = reduceInAcc;
        writerAfterRight.reserve(1);
        writerAfterRight.array[writerAfterRight.offset] = 0x29;
        writerAfterRight.offset += 1;
        return writerAfterRight;
    }
}

export class Inner {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class LeftInner {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class LeftOuter {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export type JoinType = Inner| LeftInner| LeftOuter

export class JoinInstance {
    alias: string;
    fromTable: string;
    join: JoinType;
    toTable: string;
    constructor(arg: {alias: string; fromTable: string; join: JoinType; toTable: string;}) {
        Object.assign(this, arg);
    }
}

export function qText(value: string): QText {

    return new QBindText({value: value});
}

export function qInt(value: number): QInt {

    return new QBindInt({value: value});
}

export function qDouble(value: number): QDouble {

    return new QBindDouble({value: value});
}

export function qBool(value: boolean): QBool {

    return new QBindBool({value: value});
}

export function qIntIn(left: QInt, right: Array<QInt>): QBool {

    return new IntIn({left: left, right: right});
}

export function qIntNotIn(left: QInt, right: Array<QInt>): QBool {

    return new IntNotIn({left: left, right: right});
}

export function qTextIn(left: QText, right: Array<QText>): QBool {

    return new TextIn({left: left, right: right});
}

export function qTextNotIn(left: QText, right: Array<QText>): QBool {

    return new TextNotIn({left: left, right: right});
}

export function qDoubleIn(left: QDouble, right: Array<QDouble>): QBool {

    return new DoubleIn({left: left, right: right});
}

export function qDoubleNotIn(left: QDouble, right: Array<QDouble>): QBool {

    return new DoubleNotIn({left: left, right: right});
}

export function qAnd(left: QBool, right: QBool): QBool {

    return new And({left: left, right: right});
}

export function qOr(left: QBool, right: QBool): QBool {

    return new Or({left: left, right: right});
}

export function qBoolIsNot(left: QBool, right: QBool): QBool {

    return new BoolIsNot({left: left, right: right});
}

export function qBoolIsEq(left: QBool, right: QBool): QBool {

    return new BoolIsEq({left: left, right: right});
}

export function qIsNot(left: QInt, right: QInt): QBool {

    return new IsNot({left: left, right: right});
}

export function qIsEq(left: QInt, right: QInt): QBool {

    return new IsEq({left: left, right: right});
}

export function qIsGt(left: QInt, right: QInt): QBool {

    return new IsGt({left: left, right: right});
}

export function qIsGte(left: QInt, right: QInt): QBool {

    return new IsGte({left: left, right: right});
}

export function qIsLt(left: QInt, right: QInt): QBool {

    return new IsLt({left: left, right: right});
}

export function qIsLte(left: QInt, right: QInt): QBool {

    return new IsLte({left: left, right: right});
}

export function qDoubleIsNot(left: QDouble, right: QDouble): QBool {

    return new DoubleIsNot({left: left, right: right});
}

export function qDoubleIsEq(left: QDouble, right: QDouble): QBool {

    return new DoubleIsEq({left: left, right: right});
}

export function qDoubleIsGt(left: QDouble, right: QDouble): QBool {

    return new DoubleIsGt({left: left, right: right});
}

export function qDoubleIsGte(left: QDouble, right: QDouble): QBool {

    return new DoubleIsGte({left: left, right: right});
}

export function qDoubleIsLt(left: QDouble, right: QDouble): QBool {

    return new DoubleIsLt({left: left, right: right});
}

export function qDoubleIsLte(left: QDouble, right: QDouble): QBool {

    return new DoubleIsLte({left: left, right: right});
}

export function qTextIsNot(left: QText, right: QText): QBool {

    return new TextIsNot({left: left, right: right});
}

export function qTextIsEq(left: QText, right: QText): QBool {

    return new TextIsEq({left: left, right: right});
}

export function qTextIsGt(left: QText, right: QText): QBool {

    return new TextIsGt({left: left, right: right});
}

export function qTextIsGte(left: QText, right: QText): QBool {

    return new TextIsGte({left: left, right: right});
}

export function qTextIsLt(left: QText, right: QText): QBool {

    return new TextIsLt({left: left, right: right});
}

export function qTextIsLte(left: QText, right: QText): QBool {

    return new TextIsLte({left: left, right: right});
}