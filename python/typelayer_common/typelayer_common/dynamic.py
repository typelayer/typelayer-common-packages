from . import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class DynamicGetException(typelayer_common_types.TypelayerException):
    path: str;
    def __init__(self, m: str, path: str):
        super().__init__(m, "typelayer_common_dynamic", "dynamic_get_exception", {"path": path})
        self.path = path;

class Decoder:
    def decoder_path(self, ) -> str:
        raise NotImplementedError
    def decoder_pop_bool(self, ) -> bool:
        raise NotImplementedError
    def decoder_pop_double(self, ) -> float:
        raise NotImplementedError
    def decoder_pop_field(self, ) -> str:
        raise NotImplementedError
    def decoder_pop_has_more_list(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_has_more_map(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_has_more_struct(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_integer(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_key(self, ) -> str:
        raise NotImplementedError
    def decoder_pop_list(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_map(self, ) -> int:
        raise NotImplementedError
    def decoder_pop_maybe(self, ) -> bool:
        raise NotImplementedError
    def decoder_pop_string(self, ) -> str:
        raise NotImplementedError
    def decoder_pop_struct(self, default_constructor: str) -> (str, int):
        raise NotImplementedError

class Encoder:
    def encoder_put_bool(self, value: bool) -> None:
        raise NotImplementedError
    def encoder_put_double(self, value: float) -> None:
        raise NotImplementedError
    def encoder_put_element_end(self, last_element: bool) -> None:
        raise NotImplementedError
    def encoder_put_field(self, field_id: str) -> None:
        raise NotImplementedError
    def encoder_put_field_end(self, last_field: bool) -> None:
        raise NotImplementedError
    def encoder_put_integer(self, value: int) -> None:
        raise NotImplementedError
    def encoder_put_key(self, key: str) -> None:
        raise NotImplementedError
    def encoder_put_list(self, num_elements: int) -> None:
        raise NotImplementedError
    def encoder_put_map(self, num_keys: int) -> None:
        raise NotImplementedError
    def encoder_put_maybe(self, value: bool) -> None:
        raise NotImplementedError
    def encoder_put_string(self, value: str) -> None:
        raise NotImplementedError
    def encoder_put_struct(self, constructor: str, num_fields: int) -> None:
        raise NotImplementedError
    def encoder_put_value_end(self, last_value: bool) -> None:
        raise NotImplementedError
    def encoder_to_binary(self, ) -> bytes:
        raise NotImplementedError

class Encoding:
    def encoding_label(self, ) -> str:
        raise NotImplementedError
    def encoding_mimetype(self, ) -> str:
        raise NotImplementedError
    def encoding_start_decoding(self, bin_data: bytes) -> Decoder:
        raise NotImplementedError
    def encoding_start_encoding(self, ) -> Encoder:
        raise NotImplementedError