from .. import dynamic as typelayer_common_dynamic
from .. import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class MsgPackEncoding(typelayer_common_dynamic.Encoding):

    def encoding_label(self: "MsgPackEncoding") -> str:
    
        return "msgpack"
    def encoding_mimetype(self: "MsgPackEncoding") -> str:
    
        return "application/msgpack"
    def encoding_start_decoding(self: "MsgPackEncoding", val: bytes) -> typelayer_common_dynamic.Decoder:
    
        return MsgPackDecoder(index=0, reader=typelayer_common_types.MemoryViewReader(val))
    def encoding_start_encoding(self: "MsgPackEncoding") -> typelayer_common_dynamic.Encoder:
    
        return MsgPackEncoder(writer=typelayer_common_types.MemoryViewWriter(0))

@dataclass
class MsgPackDecoder(typelayer_common_dynamic.Decoder):
    index: int;
    reader: typelayer_common_types.MemoryViewReader;
    def decoder_path(self: "MsgPackDecoder") -> str:
    
        return f"{self.index}"
    def decoder_pop_bool(self: "MsgPackDecoder") -> bool:
    
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xc2)):
            return True
        elif (head_byte == (0xc3)):
            return False
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected bool", {"path": self.decoder_path()});
    def decoder_pop_double(self: "MsgPackDecoder") -> float:
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xcb)):
            value = self.reader.getFloat64(self.index)
            self.index = (8 + self.index);
            
            return value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected double", {"path": self.decoder_path()});
    def decoder_pop_field(self: "MsgPackDecoder") -> str:
        
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xc6)):
            field_size = (self.reader.getChar((self.index + 1)) | (self.reader.getChar(self.index) << 16))
            self.index = (2 + self.index);
            
            field_value = self.reader.getString(self.index, field_size)
            self.index = (field_size + self.index);
            
            return field_value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected field", {"path": self.decoder_path()});
    def decoder_pop_has_more_list(self: "MsgPackDecoder") -> int:
    
        return 0
    def decoder_pop_has_more_map(self: "MsgPackDecoder") -> int:
    
        return 0
    def decoder_pop_has_more_struct(self: "MsgPackDecoder") -> int:
    
        return 0
    def decoder_pop_integer(self: "MsgPackDecoder") -> int:
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xcf)):
            value = self.reader.getInt64(self.index)
            self.index = (8 + self.index);
            
            return value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected integer", {"path": self.decoder_path()});
    def decoder_pop_key(self: "MsgPackDecoder") -> str:
        
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xdb)):
            key_size = (self.reader.getChar((self.index + 1)) | (self.reader.getChar(self.index) << 16))
            self.index = (2 + self.index);
            
            key_value = self.reader.getString(self.index, key_size)
            self.index = (key_size + self.index);
            
            return key_value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected key", {"path": self.decoder_path()});
    def decoder_pop_list(self: "MsgPackDecoder") -> int:
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xdd)):
            value = self.reader.getUint32(self.index)
            self.index = (4 + self.index);
            
            return value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected list", {"path": self.decoder_path()});
    def decoder_pop_map(self: "MsgPackDecoder") -> int:
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xdf)):
            value = self.reader.getUint32(self.index)
            self.index = (4 + self.index);
            
            return value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected map", {"path": self.decoder_path()});
    def decoder_pop_maybe(self: "MsgPackDecoder") -> bool:
    
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xc0)):
            return False
        elif (head_byte == (0x91)):
            return True
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected maybe", {"path": self.decoder_path()});
    def decoder_pop_string(self: "MsgPackDecoder") -> str:
        
        
        
        head_byte = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (head_byte == (0xdb)):
            str_size = self.reader.getUint32(self.index)
            self.index = (4 + self.index);
            
            str_value = self.reader.getString(self.index, str_size)
            self.index = (str_size + self.index);
            
            return str_value
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected string", {"path": self.decoder_path()});
    def decoder_pop_struct(self: "MsgPackDecoder", default_constructor: str) -> (str, int):
        
        
        
        
        value = self.reader.getChar(self.index)
        self.index = (1 + self.index);
        
        if (value == (0xde)):
            num_fields = self.reader.getUint32(self.index)
            self.index = (4 + self.index);
            
            if ((0 < num_fields)):
                if ((self.reader.getChar(self.index) == (0xc4))):
                    self.index = (4 + self.index);
                    
                    c_size = self.reader.getUint32(self.index)
                    self.index = (4 + self.index);
                    
                    c_name = self.reader.getString(self.index, c_size)
                    self.index = (c_size + self.index);
                    
                    return (c_name, (num_fields - 1))
                else:
                    return (default_constructor, num_fields)
            else:
                return (default_constructor, num_fields)
        else:
                raise typelayer_common_dynamic.DynamicGetException("Expected struct", {"path": self.decoder_path()});

@dataclass
class MsgPackEncoder(typelayer_common_dynamic.Encoder):
    writer: typelayer_common_types.MemoryViewWriter;
    def encoder_put_bool(self: "MsgPackEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setChar((0xc2))
            new_writer = self.writer
        else:
            self.writer.setChar((0xc3))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_double(self: "MsgPackEncoder", value: float) -> None:
    
        self.writer.setChar((0xcb))
        self.writer.setFloat64(value)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_element_end(self: "MsgPackEncoder", value: bool) -> None:
    
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_field(self: "MsgPackEncoder", value: str) -> None:
        
        
        str_as_bytes = (value.encode("utf8"))
        self.writer.setChar((0xc6))
        self.writer.setUint16(len(str_as_bytes))
        self.writer.setBytes(str_as_bytes)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_field_end(self: "MsgPackEncoder", value: bool) -> None:
    
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_integer(self: "MsgPackEncoder", value: int) -> None:
    
        self.writer.setChar((0xcf))
        self.writer.setInt64(value)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_key(self: "MsgPackEncoder", value: str) -> None:
        
        
        str_as_bytes = (value.encode("utf8"))
        self.writer.setChar((0xdb))
        self.writer.setUint16(len(str_as_bytes))
        self.writer.setBytes(str_as_bytes)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_list(self: "MsgPackEncoder", value: int) -> None:
    
        self.writer.setChar((0xdd))
        self.writer.setUint32(value)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_map(self: "MsgPackEncoder", value: int) -> None:
    
        self.writer.setChar((0xdf))
        self.writer.setUint32(value)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_maybe(self: "MsgPackEncoder", value: bool) -> None:
    
        if (value):
            self.writer.setChar((0x91))
            new_writer = self.writer
        else:
            self.writer.setChar((0xc0))
            new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_string(self: "MsgPackEncoder", value: str) -> None:
        
        
        str_as_bytes = (value.encode("utf8"))
        self.writer.setChar((0xdb))
        self.writer.setUint32(len(str_as_bytes))
        self.writer.setBytes(str_as_bytes)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_struct(self: "MsgPackEncoder", constructor: str, num_fields: int) -> None:
        
        
        c_as_bytes = (constructor.encode("utf8"))
        self.writer.setChar((0xde))
        self.writer.setUint32((num_fields + 1))
        self.writer.setChar((0xc4))
        self.writer.setChar((0x1))
        self.writer.setString("_")
        self.writer.setChar((0xdb))
        self.writer.setUint32(len(c_as_bytes))
        self.writer.setBytes(c_as_bytes)
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_put_value_end(self: "MsgPackEncoder", value: bool) -> None:
    
        new_writer = self.writer
        self.writer = new_writer;
        
        return;
    def encoder_to_binary(self: "MsgPackEncoder") -> bytes:
    
        return self.writer.finalize()