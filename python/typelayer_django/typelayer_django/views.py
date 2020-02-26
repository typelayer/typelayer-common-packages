from typing import Callable
from typelayer_common.transports.http import InvalidContentType
from typelayer_common.encodings import json, msgpack
from typelayer_common import application as typelayer_common_application
from typelayer_common import types as typelayer_common_types
from django import http
from dataclasses import dataclass
from django.contrib.auth import get_user_model


@dataclass
class DjangoService:
    request: http.HttpRequest


json_encoding = json.JsonEncoding()
msgpack_encoding = msgpack.MsgPackEncoding()


def get_encoding(request: http.HttpRequest):
    for enc in [msgpack_encoding, json_encoding]:
        if request.content_type == enc.encoding_mimetype():
            return enc
    raise InvalidContentType


def create_view(
    make_main_process: Callable[
        [http.HttpRequest], typelayer_common_application.Process
    ]
):
    def view(request: http.HttpRequest, path: str):
        process = make_main_process(request)
        split_url = path.split("/")
        try:
            encoding = get_encoding(request)
            result_bin = process.process_handle(encoding, split_url, request.body)
        except typelayer_common_types.TypelayerException as e:
            meta = to_serializable(e.to_meta())
            encoder = encoding.start_encoding()
            dynamic_put_exception_meta_serializable(encoder, meta)
            return http.HttpResponse(
                content, status=400, content_type=encoding.encoding_mimetype()
            )
        return http.HttpResponse(
            [result_bin, "\n"], status=200, content_type=encoding.encoding_mimetype()
        )

    return view
