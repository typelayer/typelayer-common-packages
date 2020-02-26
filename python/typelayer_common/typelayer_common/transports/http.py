from .. import application as typelayer_common_application
from .. import dynamic as typelayer_common_dynamic
from ..encodings import json as typelayer_common_encodings_json
from ..encodings import msgpack as typelayer_common_encodings_msgpack
from .. import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class InvalidContentType(typelayer_common_types.TypelayerException):

    def __init__(self, m: str, ):
        super().__init__(m, "typelayer_common_transports_http", "invalid_content_type", {})


@dataclass
class HttpSettings:
    host: str
    port: int

@dataclass
class HttpRequest:
    body: bytes
    headers: Dict[str, str]
    path: List[str]

@dataclass
class HttpResponse:
    body: List[bytes]
    headers: Dict[str, str]
    status_code: int

@dataclass
class HttpState:
    request: "HttpRequest"
    response_headers: Dict[str, str]

class HasHttp:
    def has_http_get(self, ) -> "HttpState":
        raise NotImplementedError
    def has_http_put(self, request: "HttpState") -> None:
        raise NotImplementedError

class HttpApplication:
    def http_application_handle_request(self, request: "HttpRequest") -> "HttpResponse":
        raise NotImplementedError

@dataclass
class BasicHttpApplication(HttpApplication):
    app: typelayer_common_application.Process;
    def http_application_handle_request(self: "BasicHttpApplication", request: "HttpRequest") -> "HttpResponse":
        
        
        encoding = get_encoding_for_request(request)
        result_bin = self.app.process_handle(encoding, request.path, request.body)
        return HttpResponse(status_code=200, headers={"Content-Type": encoding.encoding_mimetype()}, body=[result_bin])

def get_request(has_http_obj: HasHttp) -> "HttpRequest":

    return has_http_obj.has_http_get().request

def get_request_headers(has_http_obj: HasHttp) -> Dict[str, str]:

    return has_http_obj.has_http_get().request.headers

def get_encoding_for_request(request: "HttpRequest") -> typelayer_common_dynamic.Encoding:

    content_type = request.headers.get("content-type", "application/json")
    if (content_type == "application/json"):
        return typelayer_common_encodings_json.JsonEncoding()
    elif (content_type == "application/msgpack"):
        return typelayer_common_encodings_msgpack.MsgPackEncoding()
    else:
            raise InvalidContentType("Invalid Content Type", {});

def put_header(has_http_obj: HasHttp, key: str, value: str) -> None:

    has_http_obj.has_http_get().response_headers[key] = value
    
    has_http_obj.has_http_get().response_headers = has_http_obj.has_http_get().response_headers;
    
    return has_http_obj.has_http_put(has_http_obj.has_http_get())