from . import dynamic as my_first_package_services_my_first_service_dynamic
from . import structures as my_first_package_services_my_first_service_structures
from typelayer_common import application as typelayer_common_application
from typelayer_common import documentation as typelayer_common_documentation
from typelayer_common import dynamic as typelayer_common_dynamic
from dataclasses import dataclass
from typing import List, Dict, Optional


class MyFirstService:
    def my_first_service_my_first_function(self, incoming_msg: my_first_package_services_my_first_service_structures.MyFirstFunctionInput) -> my_first_package_services_my_first_service_structures.MyFirstFunctionOutput:
        raise NotImplementedError
    def my_first_service_my_second_function(self, incoming_msg: my_first_package_services_my_first_service_structures.MySecondFunctionInput) -> my_first_package_services_my_first_service_structures.MySecondFunctionOutput:
        raise NotImplementedError

@dataclass
class MyFirstServiceApp(typelayer_common_application.Process):
    service: MyFirstService;
    def process_describe(self: "MyFirstServiceApp") -> typelayer_common_documentation.ApplicationDescription:
    
        service_description = describe_my_first_service()
        return typelayer_common_documentation.ApplicationDescription(name="my_first_service", description=None, services=[service_description])
    def process_handle(self: "MyFirstServiceApp", encoding: typelayer_common_dynamic.Encoding, path: List[str], body: bytes) -> bytes:
        
        
        if (path[0] == "my-first-function"):
            response = handle_my_first_service_my_first_function(self.service, encoding, body)
        elif (path[0] == "my-second-function"):
            response = handle_my_first_service_my_second_function(self.service, encoding, body)
        else:
                raise typelayer_common_application.FunctionNotFound("Function not found", {"requested_service": "my-first-service", "requested_function": path[0], "available_functions": "my-first-function | my-second-function"});
        self.service = self.service;
        
        resp_bin = response.encoder_to_binary()
        return resp_bin

def describe_my_first_service() -> typelayer_common_documentation.ServiceDescription:
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    my_first_argument_field_info = typelayer_common_documentation.TlText()
    my_first_argument_info = typelayer_common_documentation.FieldDescription(name="my_first_argument", description=None, type_info=my_first_argument_field_info)
    my_first_function_inputs = [my_first_argument_info]
    my_first_return_field_info = typelayer_common_documentation.TlStructure(package="my_first_package", schema="structures", structure_id="my_first_structure")
    my_first_return_info = typelayer_common_documentation.FieldDescription(name="my_first_return", description=None, type_info=my_first_return_field_info)
    my_first_function_outputs = [my_first_return_info]
    arg_one_field_info = typelayer_common_documentation.TlStructure(package="my_first_package", schema="structures", structure_id="my_enum_structure")
    arg_one_info = typelayer_common_documentation.FieldDescription(name="arg_one", description=None, type_info=arg_one_field_info)
    arg_two_field_info = typelayer_common_documentation.TlText()
    arg_two_info = typelayer_common_documentation.FieldDescription(name="arg_two", description=None, type_info=arg_two_field_info)
    my_second_function_inputs = [arg_one_info, arg_two_info]
    ret_one_inner_field_info = typelayer_common_documentation.TlText()
    ret_one_field_info = typelayer_common_documentation.TlList(list_inner=ret_one_inner_field_info)
    ret_one_info = typelayer_common_documentation.FieldDescription(name="ret_one", description=None, type_info=ret_one_field_info)
    my_second_function_outputs = [ret_one_info]
    return typelayer_common_documentation.ServiceDescription(name="my_first_service", description=None, functions=[typelayer_common_documentation.FunctionDescription(name="my_first_service", description=None, inputs=my_first_function_inputs, outputs=my_first_function_outputs), typelayer_common_documentation.FunctionDescription(name="my_first_service", description=None, inputs=my_second_function_inputs, outputs=my_second_function_outputs)])

def handle_my_first_service_my_first_function(implementation: MyFirstService, encoding: typelayer_common_dynamic.Encoding, binary: bytes) -> typelayer_common_dynamic.Encoder:
    
    
    
    
    decoder_start = encoding.encoding_start_decoding(binary)
    encoder_start = encoding.encoding_start_encoding()
    input = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder_start)
    result = implementation.my_first_service_my_first_function(input)
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_output(encoder_start, result)
    return encoder_start

def handle_my_first_service_my_second_function(implementation: MyFirstService, encoding: typelayer_common_dynamic.Encoding, binary: bytes) -> typelayer_common_dynamic.Encoder:
    
    
    
    
    decoder_start = encoding.encoding_start_decoding(binary)
    encoder_start = encoding.encoding_start_encoding()
    input = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder_start)
    result = implementation.my_first_service_my_second_function(input)
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder_start, result)
    return encoder_start