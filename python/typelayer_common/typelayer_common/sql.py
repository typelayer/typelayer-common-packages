from . import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class RelationNotLoaded(typelayer_common_types.TypelayerException):

    def __init__(self, m: str, ):
        super().__init__(m, "typelayer_common_sql", "relation_not_loaded", {})


class QText:
    def q_text_evaluate(self, writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        raise NotImplementedError

class QInt:
    def q_int_evaluate(self, writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        raise NotImplementedError

class QDouble:
    def q_double_evaluate(self, writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        raise NotImplementedError

class QBool:
    def q_bool_evaluate(self, writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        raise NotImplementedError

@dataclass
class QBindText(QText):
    value: str;
    def q_text_evaluate(self: "QBindText", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
    
        writer.setChar((0x27))
        writer.setString(self.value)
        writer.setChar((0x27))
        return writer

@dataclass
class QBindInt(QInt):
    value: int;
    def q_int_evaluate(self: "QBindInt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
    
        writer.setString(str(self.value))
        return writer

@dataclass
class QBindDouble(QDouble):
    value: float;
    def q_double_evaluate(self: "QBindDouble", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
    
        writer.setString(str(self.value))
        return writer

@dataclass
class QBindBool(QBool):
    value: bool;
    def q_bool_evaluate(self: "QBindBool", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
    
        if (self.value):
            writer.setBytes(b"\x54\x52\x55\x45")
            return writer
        else:
            writer.setBytes(b"\x46\x41\x4c\x53\x45")
            return writer

@dataclass
class And(QBool):
    left: QBool;
    right: QBool;
    def q_bool_evaluate(self: "And", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_bool_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("and")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_bool_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class Or(QBool):
    left: QBool;
    right: QBool;
    def q_bool_evaluate(self: "Or", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_bool_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("OR")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_bool_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class BoolIsNot(QBool):
    left: QBool;
    right: QBool;
    def q_bool_evaluate(self: "BoolIsNot", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_bool_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<>")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_bool_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class BoolIsEq(QBool):
    left: QBool;
    right: QBool;
    def q_bool_evaluate(self: "BoolIsEq", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_bool_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_bool_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsNot(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsNot", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<>")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsEq(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsEq", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsGt(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsGt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsGte(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsGte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsLt(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsLt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IsLte(QBool):
    left: QInt;
    right: QInt;
    def q_bool_evaluate(self: "IsLte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_int_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsNot(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsNot", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<>")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsEq(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsEq", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsGt(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsGt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsGte(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsGte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsLt(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsLt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIsLte(QBool):
    left: QDouble;
    right: QDouble;
    def q_bool_evaluate(self: "DoubleIsLte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_double_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsNot(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsNot", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<>")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsEq(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsEq", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsGt(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsGt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsGte(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsGte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString(">=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsLt(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsLt", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIsLte(QBool):
    left: QText;
    right: QText;
    def q_bool_evaluate(self: "TextIsLte", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("<=")
        writer_after_left.setChar((0x20))
        writer_after_middle = writer_after_left
        writer_after_right = self.right.q_text_evaluate(writer_after_middle)
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IntIn(QBool):
    left: QInt;
    right: List[QInt];
    def q_bool_evaluate(self: "IntIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_int_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class IntNotIn(QBool):
    left: QInt;
    right: List[QInt];
    def q_bool_evaluate(self: "IntNotIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_int_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("NOT IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_int_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextIn(QBool):
    left: QText;
    right: List[QText];
    def q_bool_evaluate(self: "TextIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_text_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class TextNotIn(QBool):
    left: QText;
    right: List[QText];
    def q_bool_evaluate(self: "TextNotIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_text_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("NOT IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_text_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleIn(QBool):
    left: QDouble;
    right: List[QDouble];
    def q_bool_evaluate(self: "DoubleIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_double_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

@dataclass
class DoubleNotIn(QBool):
    left: QDouble;
    right: List[QDouble];
    def q_bool_evaluate(self: "DoubleNotIn", writer: typelayer_common_types.MemoryViewWriter) -> typelayer_common_types.MemoryViewWriter:
        
        
        
        
        
        writer.setChar((0x28))
        writer_after_lp = writer
        writer_after_left = self.left.q_double_evaluate(writer_after_lp)
        writer_after_left.setChar((0x20))
        writer_after_left.setString("NOT IN")
        writer_after_left.setChar((0x20))
        writer_after_left.setChar((0x28))
        writer_after_middle = writer_after_left
        reduce_in_index = 0;
        reduce_in_acc : typelayer_common_types.MemoryViewWriter = writer_after_middle
        for reduce_in_elem in self.right:
            after_elem = reduce_in_elem.q_double_evaluate(reduce_in_acc)
            if (((reduce_in_index + 1) == len(self.right))):
                after_elem.setChar((0x29))
                reduce_in_acc = after_elem
            else:
                after_elem.setChar((0x2c))
                after_elem.setChar((0x20))
                reduce_in_acc = after_elem
            reduce_in_index += 1
        writer_after_right = reduce_in_acc
        writer_after_right.setChar((0x29))
        return writer_after_right

class JoinType:
    pass


@dataclass
class Inner(JoinType):
    pass

@dataclass
class LeftInner(JoinType):
    pass

@dataclass
class LeftOuter(JoinType):
    pass

@dataclass
class JoinInstance:
    alias: str
    from_table: str
    join: "JoinType"
    to_table: str

def q_text(value: str) -> QText:

    return QBindText(value=value)

def q_int(value: int) -> QInt:

    return QBindInt(value=value)

def q_double(value: float) -> QDouble:

    return QBindDouble(value=value)

def q_bool(value: bool) -> QBool:

    return QBindBool(value=value)

def q_int_in(left: QInt, right: List[QInt]) -> QBool:

    return IntIn(left=left, right=right)

def q_int_not_in(left: QInt, right: List[QInt]) -> QBool:

    return IntNotIn(left=left, right=right)

def q_text_in(left: QText, right: List[QText]) -> QBool:

    return TextIn(left=left, right=right)

def q_text_not_in(left: QText, right: List[QText]) -> QBool:

    return TextNotIn(left=left, right=right)

def q_double_in(left: QDouble, right: List[QDouble]) -> QBool:

    return DoubleIn(left=left, right=right)

def q_double_not_in(left: QDouble, right: List[QDouble]) -> QBool:

    return DoubleNotIn(left=left, right=right)

def q_and(left: QBool, right: QBool) -> QBool:

    return And(left=left, right=right)

def q_or(left: QBool, right: QBool) -> QBool:

    return Or(left=left, right=right)

def q_bool_is_not(left: QBool, right: QBool) -> QBool:

    return BoolIsNot(left=left, right=right)

def q_bool_is_eq(left: QBool, right: QBool) -> QBool:

    return BoolIsEq(left=left, right=right)

def q_is_not(left: QInt, right: QInt) -> QBool:

    return IsNot(left=left, right=right)

def q_is_eq(left: QInt, right: QInt) -> QBool:

    return IsEq(left=left, right=right)

def q_is_gt(left: QInt, right: QInt) -> QBool:

    return IsGt(left=left, right=right)

def q_is_gte(left: QInt, right: QInt) -> QBool:

    return IsGte(left=left, right=right)

def q_is_lt(left: QInt, right: QInt) -> QBool:

    return IsLt(left=left, right=right)

def q_is_lte(left: QInt, right: QInt) -> QBool:

    return IsLte(left=left, right=right)

def q_double_is_not(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsNot(left=left, right=right)

def q_double_is_eq(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsEq(left=left, right=right)

def q_double_is_gt(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsGt(left=left, right=right)

def q_double_is_gte(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsGte(left=left, right=right)

def q_double_is_lt(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsLt(left=left, right=right)

def q_double_is_lte(left: QDouble, right: QDouble) -> QBool:

    return DoubleIsLte(left=left, right=right)

def q_text_is_not(left: QText, right: QText) -> QBool:

    return TextIsNot(left=left, right=right)

def q_text_is_eq(left: QText, right: QText) -> QBool:

    return TextIsEq(left=left, right=right)

def q_text_is_gt(left: QText, right: QText) -> QBool:

    return TextIsGt(left=left, right=right)

def q_text_is_gte(left: QText, right: QText) -> QBool:

    return TextIsGte(left=left, right=right)

def q_text_is_lt(left: QText, right: QText) -> QBool:

    return TextIsLt(left=left, right=right)

def q_text_is_lte(left: QText, right: QText) -> QBool:

    return TextIsLte(left=left, right=right)