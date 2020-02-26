from . import documentation as typelayer_common_documentation
from . import dynamic as typelayer_common_dynamic
from . import types as typelayer_common_types
from dataclasses import dataclass
from typing import List, Dict, Optional


class ServiceNotFound(typelayer_common_types.TypelayerException):
    requested_service: str;
    available_services: str;
    def __init__(self, m: str, requested_service: str, available_services: str):
        super().__init__(m, "typelayer_common_application", "service_not_found", {"requested_service": requested_service, "available_services": available_services})
        self.requested_service = requested_service;
        self.available_services = available_services;

class FunctionNotFound(typelayer_common_types.TypelayerException):
    requested_service: str;
    requested_function: str;
    available_functions: str;
    def __init__(self, m: str, requested_service: str, requested_function: str, available_functions: str):
        super().__init__(m, "typelayer_common_application", "function_not_found", {"requested_service": requested_service, "requested_function": requested_function, "available_functions": available_functions})
        self.requested_service = requested_service;
        self.requested_function = requested_function;
        self.available_functions = available_functions;

class Process:
    def process_describe(self, ) -> typelayer_common_documentation.ApplicationDescription:
        raise NotImplementedError
    def process_handle(self, encoding: typelayer_common_dynamic.Encoding, path: List[str], body: bytes) -> bytes:
        raise NotImplementedError