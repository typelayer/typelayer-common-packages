from my_first_package.schemas.my_first_module import structures as my_first_package_schemas_my_first_module_structures
from my_first_package.services.my_first_service import dynamic as my_first_package_services_my_first_service_dynamic
from my_first_package.services.my_first_service import structures as my_first_package_services_my_first_service_structures
from typelayer_common import dynamic as typelayer_common_dynamic
from typelayer_common.encodings import json as typelayer_common_encodings_json
from typelayer_common.encodings import msgpack as typelayer_common_encodings_msgpack
# my_first_service_encodable_symmetry
def test_my_first_function_input_my_first_argument_0_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_first_argument_field_test_val = ""
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_input_my_first_argument_0_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_first_argument_field_test_val = ""
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_input_my_first_argument_1_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_first_argument_field_test_val = "a"
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_input_my_first_argument_1_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_first_argument_field_test_val = "a"
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_input_my_first_argument_2_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_first_argument_field_test_val = "abc"
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_input_my_first_argument_2_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_first_argument_field_test_val = "abc"
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionInput(my_first_argument=my_first_argument_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_input(decoder)
    assert val == val_to_check
def test_my_first_function_output_my_first_return_0_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_first_return_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_first_structure()
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionOutput(my_first_return=my_first_return_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_output(decoder)
    assert val == val_to_check
def test_my_first_function_output_my_first_return_0_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_first_return_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_first_structure()
    val = my_first_package_services_my_first_service_structures.MyFirstFunctionOutput(my_first_return=my_first_return_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_first_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_first_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_one_0_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    arg_one_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    arg_two_default = ""
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_one=arg_one_field_test_val, arg_two=arg_two_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_one_0_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    arg_one_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    arg_two_default = ""
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_one=arg_one_field_test_val, arg_two=arg_two_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_0_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    arg_two_field_test_val = ""
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_0_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    arg_two_field_test_val = ""
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_1_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    arg_two_field_test_val = "a"
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_1_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    arg_two_field_test_val = "a"
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_2_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    arg_two_field_test_val = "abc"
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_input_arg_two_2_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    arg_two_field_test_val = "abc"
    arg_one_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    val = my_first_package_services_my_first_service_structures.MySecondFunctionInput(arg_two=arg_two_field_test_val, arg_one=arg_one_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_input(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_input(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_0_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    ret_one_field_test_val = []
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_0_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    ret_one_field_test_val = []
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_1_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    ret_one_blocks = ""
    ret_one_field_test_val = [ret_one_blocks]
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_1_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    ret_one_blocks = ""
    ret_one_field_test_val = [ret_one_blocks]
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_2_json():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    ret_one_blocks = ""
    ret_one_field_test_val = [ret_one_blocks, ret_one_blocks]
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check
def test_my_second_function_output_ret_one_2_msg_pack():
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    ret_one_blocks = ""
    ret_one_field_test_val = [ret_one_blocks, ret_one_blocks]
    val = my_first_package_services_my_first_service_structures.MySecondFunctionOutput(ret_one=ret_one_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_services_my_first_service_dynamic.dynamic_put_my_second_function_output(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_services_my_first_service_dynamic.dynamic_get_obj_my_second_function_output(decoder)
    assert val == val_to_check