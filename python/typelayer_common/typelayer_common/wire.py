from . import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class DecoderException(typelayer_common_types.TypelayerException):
    offset: str;
    def __init__(self, m: str, offset: str):
        super().__init__(m, "typelayer_common_wire", "decoder_exception", {"offset": offset})
        self.offset = offset;