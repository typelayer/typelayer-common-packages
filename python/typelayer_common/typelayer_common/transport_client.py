from . import dynamic as typelayer_common_dynamic
from dataclasses import dataclass
from typing import List, Dict, Optional


class Response:
    pass


@dataclass
class Ok(Response):
    body: bytes

@dataclass
class Uhoh(Response):
    exception_body: bytes
    exception_encoding: typelayer_common_dynamic.Encoding

class TransportClient:
    def transport_client_encoding(self, ) -> typelayer_common_dynamic.Encoding:
        raise NotImplementedError
    def transport_client_handle(self, path: List[str], body: bytes) -> "Response":
        raise NotImplementedError