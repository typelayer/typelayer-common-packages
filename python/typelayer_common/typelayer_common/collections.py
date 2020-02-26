from . import dynamic as typelayer_common_dynamic
from . import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class KeyNotFoundException(typelayer_common_types.TypelayerException):
    key: str;
    def __init__(self, m: str, key: str):
        super().__init__(m, "typelayer_common_collections", "key_not_found_exception", {"key": key})
        self.key = key;

@dataclass
class BinaryKV:
    key: str
    value: bytes

class BinaryCollection:
    def binary_collection_delete(self, to_delete: List[str]) -> List[str]:
        raise NotImplementedError
    def binary_collection_encoding(self, ) -> typelayer_common_dynamic.Encoding:
        raise NotImplementedError
    def binary_collection_fetch(self, to_fetch: List[str]) -> List["BinaryKV"]:
        raise NotImplementedError
    def binary_collection_save(self, to_save: List["BinaryKV"]) -> List[str]:
        raise NotImplementedError
    def binary_collection_slice(self, offset: int, count: int) -> List["BinaryKV"]:
        raise NotImplementedError