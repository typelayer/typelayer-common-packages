from my_first_package.schemas.my_first_module import dynamic as my_first_package_schemas_my_first_module_dynamic
from my_first_package.schemas.my_first_module import structures as my_first_package_schemas_my_first_module_structures
from typelayer_common import dynamic as typelayer_common_dynamic
from typelayer_common.encodings import json as typelayer_common_encodings_json
from typelayer_common.encodings import msgpack as typelayer_common_encodings_msgpack
# my_first_module_encodable_symmetry
def test_my_enum_integer_my_text_field_0_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_0_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_1_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_1_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_2_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 255
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_2_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 255
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_3_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 65535
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_3_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 65535
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_4_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 16777215
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_4_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 16777215
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_5_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 4294967295
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_5_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 4294967295
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_6_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 1099511627775
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_6_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 1099511627775
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_7_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 281474976710655
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_7_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 281474976710655
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_8_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 72057594037927935
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_8_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 72057594037927935
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_9_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_9_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = 0
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_10_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -255
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_10_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -255
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_11_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -65535
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_11_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -65535
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_12_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -16777215
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_12_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -16777215
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_13_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -4294967295
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_13_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -4294967295
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_14_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -1099511627775
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_14_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -1099511627775
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_15_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -281474976710655
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_15_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -281474976710655
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_16_json():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = -72057594037927935
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_enum_integer_my_text_field_16_msg_pack():
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = -72057594037927935
    val = my_first_package_schemas_my_first_module_structures.MyEnumInteger(my_text_field=my_text_field_field_test_val)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_boolean_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_boolean_field_field_test_val = True
    my_double_field_default = 0.0
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_boolean_field=my_boolean_field_field_test_val, my_double_field=my_double_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_boolean_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_boolean_field_field_test_val = True
    my_double_field_default = 0.0
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_boolean_field=my_boolean_field_field_test_val, my_double_field=my_double_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_boolean_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_boolean_field_field_test_val = False
    my_double_field_default = 0.0
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_boolean_field=my_boolean_field_field_test_val, my_double_field=my_double_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_boolean_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_boolean_field_field_test_val = False
    my_double_field_default = 0.0
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_boolean_field=my_boolean_field_field_test_val, my_double_field=my_double_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 0.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 0.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 1.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 1.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_2_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 255.9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_2_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 255.9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_3_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 65484.810000000005
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_3_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 65484.810000000005
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_4_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 1.6757562879e7
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_4_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 1.6757562879e7
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_5_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 4.2882603407361e9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_5_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 4.2882603407361e9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_6_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 1.0973658211943682e12
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_6_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 1.0973658211943682e12
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_7_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 2.808159136436388e14
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_7_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 2.808159136436388e14
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_8_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 7.1860792301407176e16
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_8_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 7.1860792301407176e16
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_9_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = 1.8389176749930097e19
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_9_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = 1.8389176749930097e19
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_10_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -1.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_10_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -1.0
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_11_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -255.9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_11_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -255.9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_12_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -65484.810000000005
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_12_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -65484.810000000005
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_13_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -1.6757562879e7
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_13_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -1.6757562879e7
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_14_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -4.2882603407361e9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_14_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -4.2882603407361e9
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_15_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -1.0973658211943682e12
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_15_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -1.0973658211943682e12
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_16_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -2.808159136436388e14
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_16_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -2.808159136436388e14
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_17_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -7.1860792301407176e16
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_17_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -7.1860792301407176e16
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_18_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_double_field_field_test_val = -1.8389176749930097e19
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_double_field_18_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_double_field_field_test_val = -1.8389176749930097e19
    my_boolean_field_default = False
    my_integer_field_default = 0
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_double_field=my_double_field_field_test_val, my_boolean_field=my_boolean_field_default, my_integer_field=my_integer_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_2_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 255
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_2_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 255
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_3_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 65535
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_3_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 65535
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_4_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 16777215
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_4_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 16777215
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_5_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 4294967295
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_5_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 4294967295
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_6_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 1099511627775
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_6_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 1099511627775
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_7_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 281474976710655
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_7_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 281474976710655
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_8_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 72057594037927935
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_8_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 72057594037927935
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_9_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_9_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_10_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -255
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_10_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -255
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_11_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -65535
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_11_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -65535
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_12_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -16777215
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_12_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -16777215
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_13_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -4294967295
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_13_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -4294967295
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_14_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -1099511627775
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_14_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -1099511627775
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_15_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -281474976710655
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_15_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -281474976710655
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_16_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_integer_field_field_test_val = -72057594037927935
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_integer_field_16_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_integer_field_field_test_val = -72057594037927935
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_list_field_default = []
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_integer_field=my_integer_field_field_test_val, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_list_field=my_list_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_list_field_field_test_val = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_list_field_field_test_val = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_list_field_blocks = ""
    my_list_field_field_test_val = [my_list_field_blocks]
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_list_field_blocks = ""
    my_list_field_field_test_val = [my_list_field_blocks]
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_2_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_list_field_blocks = ""
    my_list_field_field_test_val = [my_list_field_blocks, my_list_field_blocks]
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_list_field_2_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_list_field_blocks = ""
    my_list_field_field_test_val = [my_list_field_blocks, my_list_field_blocks]
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_map_field_default = {}
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_list_field=my_list_field_field_test_val, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_map_field=my_map_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_map_field_field_test_val = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_map_field_field_test_val = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_map_field_blocks = ""
    my_map_field_field_test_val = {"key-1": my_map_field_blocks}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_map_field_blocks = ""
    my_map_field_field_test_val = {"key-1": my_map_field_blocks}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_2_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_map_field_blocks = ""
    my_map_field_field_test_val = {"key-1": my_map_field_blocks, "key-2-1": my_map_field_blocks}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_map_field_2_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_map_field_blocks = ""
    my_map_field_field_test_val = {"key-1": my_map_field_blocks, "key-2-1": my_map_field_blocks}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_map_field=my_map_field_field_test_val, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_nested_field=my_nested_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_nested_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_nested_field_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_nested_field=my_nested_field_field_test_val, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_nested_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_nested_field_field_test_val = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    my_text_field_default = ""
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_nested_field=my_nested_field_field_test_val, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default, my_text_field=my_text_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_0_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = ""
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_0_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = ""
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_1_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = "a"
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_1_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = "a"
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_2_json():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_json.JsonEncoding()
    my_text_field_field_test_val = "abc"
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check
def test_my_first_structure_my_text_field_2_msg_pack():
    
    
    
    
    
    
    
    
    
    
    
    
    
    encoding = typelayer_common_encodings_msgpack.MsgPackEncoding()
    my_text_field_field_test_val = "abc"
    my_nested_field_default = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    my_map_field_default = {}
    my_list_field_default = []
    my_integer_field_default = 0
    my_double_field_default = 0.0
    my_boolean_field_default = False
    val = my_first_package_schemas_my_first_module_structures.MyFirstStructure(my_text_field=my_text_field_field_test_val, my_nested_field=my_nested_field_default, my_map_field=my_map_field_default, my_list_field=my_list_field_default, my_integer_field=my_integer_field_default, my_double_field=my_double_field_default, my_boolean_field=my_boolean_field_default)
    encoder = encoding.encoding_start_encoding()
    my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(encoder, val)
    resulting_bin = encoder.encoder_to_binary()
    decoder = encoding.encoding_start_decoding(resulting_bin)
    val_to_check = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(decoder)
    assert val == val_to_check