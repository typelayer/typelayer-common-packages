from . import dynamic as my_first_package_services_my_first_service_dynamic
from . import structures as my_first_package_services_my_first_service_structures
from typelayer_common import dynamic as typelayer_common_dynamic
from typelayer_common import exceptions as typelayer_common_exceptions
from typelayer_common import exceptions_encoding as typelayer_common_exceptions_encoding
from typelayer_common import transport_client as typelayer_common_transport_client
from dataclasses import dataclass
from typing import List, Dict, Optional


def my_first_function(transport_client: typelayer_common_transport_client.TransportClient, outgoing_message: my_first_package_services_my_first_service_structures.MyFirstFunctionInput) -> my_first_package_services_my_first_service_structures.MyFirstFunctionOutput:
    
    
    
    
    new_encoder = transport_client.transport_client_encoding().encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(new_encoder, outgoing_message)
    input_bin = new_encoder.encoder_to_binary()
    response_bin = do_request(transport_client, ["my-first-function"], input_bin)
    output_decoder = transport_client.transport_client_encoding().encoding_start_decoding(response_bin)
    return my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_output(output_decoder)

def my_second_function(transport_client: typelayer_common_transport_client.TransportClient, outgoing_message: my_first_package_services_my_first_service_structures.MySecondFunctionInput) -> my_first_package_services_my_first_service_structures.MySecondFunctionOutput:
    
    
    
    
    new_encoder = transport_client.transport_client_encoding().encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(new_encoder, outgoing_message)
    input_bin = new_encoder.encoder_to_binary()
    response_bin = do_request(transport_client, ["my-second-function"], input_bin)
    output_decoder = transport_client.transport_client_encoding().encoding_start_decoding(response_bin)
    return my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(output_decoder)

def do_request(transport: typelayer_common_transport_client.TransportClient, path: List[str], body: bytes) -> bytes:
    
    
    
    
    
    
    response = transport.transport_client_handle(path, body)
    if isinstance(response, typelayer_common_transport_client.Ok):
        switch_ok_ok = response
        return switch_ok_ok.body
    elif isinstance(response, typelayer_common_transport_client.Uhoh):
        switch_ok_uhoh = response
        decoder = switch_ok_uhoh.exception_encoding.encoding_start_decoding(switch_ok_uhoh.exception_body)
        meta_serialized_obj = typelayer_common_exceptions_encoding.dynamic_get_obj_exception_meta_serializable(decoder)
        meta_obj = typelayer_common_exceptions_encoding.to_plain_meta(meta_serialized_obj)
        raise meta_obj;
    else:
        raise Exception(f"Invalid type {response}")