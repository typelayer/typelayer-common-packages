"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: sql
const typelayerCommonTypes = __importStar(require("./types"));
class RelationNotLoaded extends typelayerCommonTypes.TypelayerException {
    constructor(m, meta) {
        super(m, "typelayer_common_sql", "relation_not_loaded", new Map([]));
        Object.setPrototypeOf(this, RelationNotLoaded.prototype);
    }
}
exports.RelationNotLoaded = RelationNotLoaded;
class QBindText {
    constructor(arg) {
        this.kind = "QBindText";
        Object.assign(this, arg);
    }
    qTextEvaluate(writer) {
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
exports.QBindText = QBindText;
class QBindInt {
    constructor(arg) {
        this.kind = "QBindInt";
        Object.assign(this, arg);
    }
    qIntEvaluate(writer) {
        writer.offset += writer.setString(this.value.toString(), writer.offset);
        return writer;
    }
}
exports.QBindInt = QBindInt;
class QBindDouble {
    constructor(arg) {
        this.kind = "QBindDouble";
        Object.assign(this, arg);
    }
    qDoubleEvaluate(writer) {
        writer.offset += writer.setString(this.value.toString(), writer.offset);
        return writer;
    }
}
exports.QBindDouble = QBindDouble;
class QBindBool {
    constructor(arg) {
        this.kind = "QBindBool";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        if (this.value) {
            writer.reserve(new Uint8Array([0x54, 0x52, 0x55, 0x45]).length);
            writer.array.set(new Uint8Array([0x54, 0x52, 0x55, 0x45]), writer.offset);
            writer.offset += new Uint8Array([0x54, 0x52, 0x55, 0x45]).length;
            return writer;
        }
        else {
            writer.reserve(new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]).length);
            writer.array.set(new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]), writer.offset);
            writer.offset += new Uint8Array([0x46, 0x41, 0x4c, 0x53, 0x45]).length;
            return writer;
        }
    }
}
exports.QBindBool = QBindBool;
class And {
    constructor(arg) {
        this.kind = "And";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.And = And;
class Or {
    constructor(arg) {
        this.kind = "Or";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.Or = Or;
class BoolIsNot {
    constructor(arg) {
        this.kind = "BoolIsNot";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.BoolIsNot = BoolIsNot;
class BoolIsEq {
    constructor(arg) {
        this.kind = "BoolIsEq";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.BoolIsEq = BoolIsEq;
class IsNot {
    constructor(arg) {
        this.kind = "IsNot";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsNot = IsNot;
class IsEq {
    constructor(arg) {
        this.kind = "IsEq";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsEq = IsEq;
class IsGt {
    constructor(arg) {
        this.kind = "IsGt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsGt = IsGt;
class IsGte {
    constructor(arg) {
        this.kind = "IsGte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsGte = IsGte;
class IsLt {
    constructor(arg) {
        this.kind = "IsLt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsLt = IsLt;
class IsLte {
    constructor(arg) {
        this.kind = "IsLte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.IsLte = IsLte;
class DoubleIsNot {
    constructor(arg) {
        this.kind = "DoubleIsNot";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsNot = DoubleIsNot;
class DoubleIsEq {
    constructor(arg) {
        this.kind = "DoubleIsEq";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsEq = DoubleIsEq;
class DoubleIsGt {
    constructor(arg) {
        this.kind = "DoubleIsGt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsGt = DoubleIsGt;
class DoubleIsGte {
    constructor(arg) {
        this.kind = "DoubleIsGte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsGte = DoubleIsGte;
class DoubleIsLt {
    constructor(arg) {
        this.kind = "DoubleIsLt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsLt = DoubleIsLt;
class DoubleIsLte {
    constructor(arg) {
        this.kind = "DoubleIsLte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.DoubleIsLte = DoubleIsLte;
class TextIsNot {
    constructor(arg) {
        this.kind = "TextIsNot";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsNot = TextIsNot;
class TextIsEq {
    constructor(arg) {
        this.kind = "TextIsEq";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsEq = TextIsEq;
class TextIsGt {
    constructor(arg) {
        this.kind = "TextIsGt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsGt = TextIsGt;
class TextIsGte {
    constructor(arg) {
        this.kind = "TextIsGte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsGte = TextIsGte;
class TextIsLt {
    constructor(arg) {
        this.kind = "TextIsLt";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsLt = TextIsLt;
class TextIsLte {
    constructor(arg) {
        this.kind = "TextIsLte";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
exports.TextIsLte = TextIsLte;
class IntIn {
    constructor(arg) {
        this.kind = "IntIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qIntEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.IntIn = IntIn;
class IntNotIn {
    constructor(arg) {
        this.kind = "IntNotIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qIntEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.IntNotIn = IntNotIn;
class TextIn {
    constructor(arg) {
        this.kind = "TextIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qTextEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.TextIn = TextIn;
class TextNotIn {
    constructor(arg) {
        this.kind = "TextNotIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qTextEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.TextNotIn = TextNotIn;
class DoubleIn {
    constructor(arg) {
        this.kind = "DoubleIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qDoubleEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.DoubleIn = DoubleIn;
class DoubleNotIn {
    constructor(arg) {
        this.kind = "DoubleNotIn";
        Object.assign(this, arg);
    }
    qBoolEvaluate(writer) {
        let afterElem;
        let writerAfterLeft;
        let writerAfterLp;
        let writerAfterMiddle;
        let writerAfterRight;
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
        let reduceInIndex = 0;
        let reduceInAcc = writerAfterMiddle;
        for (let reduceInElem of this.right) {
            afterElem = reduceInElem.qDoubleEvaluate(reduceInAcc);
            if (reduceInIndex + 1 === this.right.length) {
                afterElem.reserve(1);
                afterElem.array[afterElem.offset] = 0x29;
                afterElem.offset += 1;
                reduceInAcc = afterElem;
            }
            else {
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
exports.DoubleNotIn = DoubleNotIn;
class Inner {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Inner = Inner;
class LeftInner {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.LeftInner = LeftInner;
class LeftOuter {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.LeftOuter = LeftOuter;
class JoinInstance {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.JoinInstance = JoinInstance;
function qText(value) {
    return new QBindText({ value: value });
}
exports.qText = qText;
function qInt(value) {
    return new QBindInt({ value: value });
}
exports.qInt = qInt;
function qDouble(value) {
    return new QBindDouble({ value: value });
}
exports.qDouble = qDouble;
function qBool(value) {
    return new QBindBool({ value: value });
}
exports.qBool = qBool;
function qIntIn(left, right) {
    return new IntIn({ left: left, right: right });
}
exports.qIntIn = qIntIn;
function qIntNotIn(left, right) {
    return new IntNotIn({ left: left, right: right });
}
exports.qIntNotIn = qIntNotIn;
function qTextIn(left, right) {
    return new TextIn({ left: left, right: right });
}
exports.qTextIn = qTextIn;
function qTextNotIn(left, right) {
    return new TextNotIn({ left: left, right: right });
}
exports.qTextNotIn = qTextNotIn;
function qDoubleIn(left, right) {
    return new DoubleIn({ left: left, right: right });
}
exports.qDoubleIn = qDoubleIn;
function qDoubleNotIn(left, right) {
    return new DoubleNotIn({ left: left, right: right });
}
exports.qDoubleNotIn = qDoubleNotIn;
function qAnd(left, right) {
    return new And({ left: left, right: right });
}
exports.qAnd = qAnd;
function qOr(left, right) {
    return new Or({ left: left, right: right });
}
exports.qOr = qOr;
function qBoolIsNot(left, right) {
    return new BoolIsNot({ left: left, right: right });
}
exports.qBoolIsNot = qBoolIsNot;
function qBoolIsEq(left, right) {
    return new BoolIsEq({ left: left, right: right });
}
exports.qBoolIsEq = qBoolIsEq;
function qIsNot(left, right) {
    return new IsNot({ left: left, right: right });
}
exports.qIsNot = qIsNot;
function qIsEq(left, right) {
    return new IsEq({ left: left, right: right });
}
exports.qIsEq = qIsEq;
function qIsGt(left, right) {
    return new IsGt({ left: left, right: right });
}
exports.qIsGt = qIsGt;
function qIsGte(left, right) {
    return new IsGte({ left: left, right: right });
}
exports.qIsGte = qIsGte;
function qIsLt(left, right) {
    return new IsLt({ left: left, right: right });
}
exports.qIsLt = qIsLt;
function qIsLte(left, right) {
    return new IsLte({ left: left, right: right });
}
exports.qIsLte = qIsLte;
function qDoubleIsNot(left, right) {
    return new DoubleIsNot({ left: left, right: right });
}
exports.qDoubleIsNot = qDoubleIsNot;
function qDoubleIsEq(left, right) {
    return new DoubleIsEq({ left: left, right: right });
}
exports.qDoubleIsEq = qDoubleIsEq;
function qDoubleIsGt(left, right) {
    return new DoubleIsGt({ left: left, right: right });
}
exports.qDoubleIsGt = qDoubleIsGt;
function qDoubleIsGte(left, right) {
    return new DoubleIsGte({ left: left, right: right });
}
exports.qDoubleIsGte = qDoubleIsGte;
function qDoubleIsLt(left, right) {
    return new DoubleIsLt({ left: left, right: right });
}
exports.qDoubleIsLt = qDoubleIsLt;
function qDoubleIsLte(left, right) {
    return new DoubleIsLte({ left: left, right: right });
}
exports.qDoubleIsLte = qDoubleIsLte;
function qTextIsNot(left, right) {
    return new TextIsNot({ left: left, right: right });
}
exports.qTextIsNot = qTextIsNot;
function qTextIsEq(left, right) {
    return new TextIsEq({ left: left, right: right });
}
exports.qTextIsEq = qTextIsEq;
function qTextIsGt(left, right) {
    return new TextIsGt({ left: left, right: right });
}
exports.qTextIsGt = qTextIsGt;
function qTextIsGte(left, right) {
    return new TextIsGte({ left: left, right: right });
}
exports.qTextIsGte = qTextIsGte;
function qTextIsLt(left, right) {
    return new TextIsLt({ left: left, right: right });
}
exports.qTextIsLt = qTextIsLt;
function qTextIsLte(left, right) {
    return new TextIsLte({ left: left, right: right });
}
exports.qTextIsLte = qTextIsLte;
