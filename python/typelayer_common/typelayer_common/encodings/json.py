from .. import dynamic as typelayer_common_dynamic
from .. import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class JsonEncoding(typelayer_common_dynamic.Encoding):

    def encoding_label(self: "JsonEncoding") -> str:
    
        return "json"
    def encoding_mimetype(self: "JsonEncoding") -> str:
    
        return "application/json"
    def encoding_start_decoding(self: "JsonEncoding", val: bytes) -> typelayer_common_dynamic.Decoder:
    
        return JsonDecoder(index=0, reader=typelayer_common_types.MemoryViewReader(val))
    def encoding_start_encoding(self: "JsonEncoding") -> typelayer_common_dynamic.Encoder:
    
        return JsonEncoder(writer=typelayer_common_types.MemoryViewWriter(0))

@dataclass
class JsonDecoder(typelayer_common_dynamic.Decoder):
    index: int;
    reader: typelayer_common_types.MemoryViewReader;
    def decoder_path(self: "JsonDecoder") -> str:
    
        return f"{self.index}"
    def decoder_pop_bool(self: "JsonDecoder") -> bool:
    
        if ((((((True and ((0x66) == self.reader.getChar((self.index + 0)))) and ((0x61) == self.reader.getChar((self.index + 1)))) and ((0x6c) == self.reader.getChar((self.index + 2)))) and ((0x73) == self.reader.getChar((self.index + 3)))) and ((0x65) == self.reader.getChar((self.index + 4))))):
            self.index = (5 + self.index);
            
            return False
        else:
            if (((((True and ((0x74) == self.reader.getChar((self.index + 0)))) and ((0x72) == self.reader.getChar((self.index + 1)))) and ((0x75) == self.reader.getChar((self.index + 2)))) and ((0x65) == self.reader.getChar((self.index + 3))))):
                self.index = (4 + self.index);
                
                return True
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected bool", {"path": self.decoder_path()});
    def decoder_pop_double(self: "JsonDecoder") -> float:
        
        
        
        
        if (((0x2d) == self.reader.getChar(self.index))):
            ix = 1
        else:
            ix = 0
        while (((self.reader.getChar((ix + self.index)) < (0x3a)) and (self.reader.getChar((ix + self.index)) >= (0x30)))):
            ix = (ix + 1)
        if (((0x2e) == self.reader.getChar((ix + self.index)))):
            ix = (ix + 1)
            while (((self.reader.getChar((ix + self.index)) < (0x3a)) and (self.reader.getChar((ix + self.index)) >= (0x30)))):
                ix = (ix + 1)
            after_number = ix
        else:
            after_number = ix
        if ((((0x45) == self.reader.getChar((after_number + self.index))) or ((0x65) == self.reader.getChar((after_number + self.index))))):
            if ((((0x2d) == self.reader.getChar(((after_number + 1) + self.index))) or ((0x2b) == self.reader.getChar(((after_number + 1) + self.index))))):
                ix = (after_number + 2)
            else:
                ix = (after_number + 1)
            while (((self.reader.getChar((ix + self.index)) < (0x3a)) and (self.reader.getChar((ix + self.index)) >= (0x30)))):
                ix = (ix + 1)
            end_index = ix
        else:
            end_index = after_number
        decimal_value = float(self.reader.getString(self.index, end_index))
        self.index = (end_index + self.index);
        
        return decimal_value
    def decoder_pop_field(self: "JsonDecoder") -> str:
        
        
        if ((self.reader.getChar(self.index) == (0x22))):
            self.index = (1 + self.index);
            
            ix = 0
            while ((self.reader.getChar((ix + self.index)) != (0x22))):
                ix = (ix + 1)
            str_value = self.reader.getString(self.index, ix)
            self.index = ((ix + 1) + self.index);
            
            if ((self.reader.getChar(self.index) == (0x3a))):
                self.index = (1 + self.index);
                
                ix = 0
                while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                    ix = (ix + 1)
                self.index = (ix + self.index);
                
                return str_value
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected colon", {"path": self.decoder_path()});
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected string", {"path": self.decoder_path()});
    def decoder_pop_has_more_list(self: "JsonDecoder") -> int:
    
        if ((self.reader.getChar(self.index) == (0x2c))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            return 1
        else:
            if ((self.reader.getChar(self.index) == (0x5d))):
                self.index = (1 + self.index);
                
                return -1
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected comma or ]", {"path": self.decoder_path()});
    def decoder_pop_has_more_map(self: "JsonDecoder") -> int:
    
        if ((self.reader.getChar(self.index) == (0x2c))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            return 1
        else:
            if ((self.reader.getChar(self.index) == (0x7d))):
                self.index = (1 + self.index);
                
                return -1
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected comma or }", {"path": self.decoder_path()});
    def decoder_pop_has_more_struct(self: "JsonDecoder") -> int:
    
        if ((self.reader.getChar(self.index) == (0x2c))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            return 1
        else:
            if ((self.reader.getChar(self.index) == (0x7d))):
                self.index = (1 + self.index);
                
                return -1
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected comma or }", {"path": self.decoder_path()});
    def decoder_pop_integer(self: "JsonDecoder") -> int:
        
        
        
        if (((0x2d) == self.reader.getChar(self.index))):
            ix = 1
        else:
            ix = 0
        while (((self.reader.getChar((ix + self.index)) < (0x3a)) and (self.reader.getChar((ix + self.index)) >= (0x30)))):
            ix = (ix + 1)
        end_index = ix
        decimal_value = int(self.reader.getString(self.index, end_index))
        self.index = (end_index + self.index);
        
        return decimal_value
    def decoder_pop_key(self: "JsonDecoder") -> str:
        
        
        if ((self.reader.getChar(self.index) == (0x22))):
            self.index = (1 + self.index);
            
            ix = 0
            while ((self.reader.getChar((ix + self.index)) != (0x22))):
                ix = (ix + 1)
            str_value = self.reader.getString(self.index, ix)
            self.index = ((ix + 1) + self.index);
            
            if ((self.reader.getChar(self.index) == (0x3a))):
                self.index = (1 + self.index);
                
                ix = 0
                while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                    ix = (ix + 1)
                self.index = (ix + self.index);
                
                return str_value
            else:
                raise typelayer_common_dynamic.DynamicGetException("Expected colon", {"path": self.decoder_path()});
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected string", {"path": self.decoder_path()});
    def decoder_pop_list(self: "JsonDecoder") -> int:
    
        if ((self.reader.getChar(self.index) == (0x5b))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            if ((self.reader.getChar(self.index) == (0x5d))):
                self.index = (1 + self.index);
                
                return -1
            else:
                return 1
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected array", {"path": self.decoder_path()});
    def decoder_pop_map(self: "JsonDecoder") -> int:
    
        if ((self.reader.getChar(self.index) == (0x7b))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            if ((self.reader.getChar(self.index) == (0x7d))):
                self.index = (1 + self.index);
                
                return -1
            else:
                return 1
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected map", {"path": self.decoder_path()});
    def decoder_pop_maybe(self: "JsonDecoder") -> bool:
    
        if (((((True and ((0x6e) == self.reader.getChar((self.index + 0)))) and ((0x75) == self.reader.getChar((self.index + 1)))) and ((0x6c) == self.reader.getChar((self.index + 2)))) and ((0x6c) == self.reader.getChar((self.index + 3))))):
            self.index = (4 + self.index);
            
            return False
        else:
            return True
    def decoder_pop_string(self: "JsonDecoder") -> str:
        
        
        if ((self.reader.getChar(self.index) == (0x22))):
            self.index = (1 + self.index);
            
            ix = 0
            while ((self.reader.getChar((ix + self.index)) != (0x22))):
                ix = (ix + 1)
            str_value = self.reader.getString(self.index, ix)
            self.index = ((ix + 1) + self.index);
            
            return str_value
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected string", {"path": self.decoder_path()});
    def decoder_pop_struct(self: "JsonDecoder", default_constructor: str) -> (str, int):
        
        
        if ((self.reader.getChar(self.index) == (0x7b))):
            self.index = (1 + self.index);
            
            ix = 0
            while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                ix = (ix + 1)
            self.index = (ix + self.index);
            
            if (((((True and ((0x22) == self.reader.getChar((self.index + 0)))) and ((0x5f) == self.reader.getChar((self.index + 1)))) and ((0x22) == self.reader.getChar((self.index + 2)))) and ((0x3a) == self.reader.getChar((self.index + 3))))):
                self.index = (4 + self.index);
                
                ix = 0
                while (((self.reader.getChar((ix + self.index)) == (0x20)) or (self.reader.getChar((ix + self.index)) == (0xa)))):
                    ix = (ix + 1)
                self.index = (ix + self.index);
                
                if ((self.reader.getChar(self.index) == (0x22))):
                    self.index = (1 + self.index);
                    
                    ix = 0
                    while ((self.reader.getChar((ix + self.index)) != (0x22))):
                        ix = (ix + 1)
                    str_value = self.reader.getString(self.index, ix)
                    self.index = ((ix + 1) + self.index);
                    
                    return (str_value, 0)
                else:
                    raise typelayer_common_dynamic.DynamicGetException("Expected string", {"path": self.decoder_path()});
            else:
                if ((self.reader.getChar(self.index) == (0x7d))):
                    self.index = (1 + self.index);
                    
                    return (default_constructor, -1)
                else:
                    return (default_constructor, 1)
        else:
            raise typelayer_common_dynamic.DynamicGetException("Expected object", {"path": self.decoder_path()});

@dataclass
class JsonEncoder(typelayer_common_dynamic.Encoder):
    writer: typelayer_common_types.MemoryViewWriter;
    def encoder_put_bool(self: "JsonEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setBytes(b"\x74\x72\x75\x65")
            new_writer = self.writer
        else:
            self.writer.setBytes(b"\x66\x61\x6c\x73\x65")
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_double(self: "JsonEncoder", value: float) -> None:
    
        self.writer.setString(str(value))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_element_end(self: "JsonEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setChar((0x5d))
            new_writer = self.writer
        else:
            self.writer.setChar((0x2c))
            self.writer.setChar((0x20))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_field(self: "JsonEncoder", value: str) -> None:
        
        
        str_as_bytes = (value.encode("utf8"))
        self.writer.setChar((0x22))
        self.writer.setBytes(str_as_bytes)
        self.writer.setChar((0x22))
        self.writer.setChar((0x3a))
        self.writer.setChar((0x20))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_field_end(self: "JsonEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setChar((0x7d))
            new_writer = self.writer
        else:
            self.writer.setChar((0x2c))
            self.writer.setChar((0x20))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_integer(self: "JsonEncoder", value: int) -> None:
    
        self.writer.setString(str(value))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_key(self: "JsonEncoder", value: str) -> None:
        
        
        str_as_bytes = (value.encode("utf8"))
        self.writer.setChar((0x22))
        self.writer.setBytes(str_as_bytes)
        self.writer.setChar((0x22))
        self.writer.setChar((0x3a))
        self.writer.setChar((0x20))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_list(self: "JsonEncoder", value: int) -> None:
    
        self.writer.setChar((0x5b))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_map(self: "JsonEncoder", value: int) -> None:
    
        self.writer.setChar((0x7b))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_maybe(self: "JsonEncoder", value: bool) -> None:
    
        if (value):
            new_writer = self.writer
        else:
            self.writer.setBytes(b"\x6e\x75\x6c\x6c")
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_string(self: "JsonEncoder", value: str) -> None:
    
        self.writer.setChar((0x22))
        self.writer.setString(value)
        self.writer.setChar((0x22))
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_struct(self: "JsonEncoder", constructor: str, num_fields: int) -> None:
        
        
        c_as_bytes = (constructor.encode("utf8"))
        if ((0 == num_fields)):
            self.writer.setChar((0x7b))
            self.writer.setBytes(b"\x22\x5f\x22\x3a\x20\x22")
            self.writer.setBytes(c_as_bytes)
            self.writer.setChar((0x22))
            self.writer.setChar((0x7d))
            new_writer = self.writer
        else:
            self.writer.setChar((0x7b))
            self.writer.setBytes(b"\x22\x5f\x22\x3a\x20\x22")
            self.writer.setBytes(c_as_bytes)
            self.writer.setChar((0x22))
            self.writer.setChar((0x2c))
            self.writer.setChar((0x20))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_value_end(self: "JsonEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setChar((0x7d))
            new_writer = self.writer
        else:
            self.writer.setChar((0x2c))
            self.writer.setChar((0x20))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_to_binary(self: "JsonEncoder") -> bytes:
    
        return self.writer.finalize()