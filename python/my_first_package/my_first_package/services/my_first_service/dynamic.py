from ...schemas.my_first_module import dynamic as my_first_package_schemas_my_first_module_dynamic
from ...schemas.my_first_module import structures as my_first_package_schemas_my_first_module_structures
from . import structures as my_first_package_services_my_first_service_structures
from typelayer_common import dynamic as typelayer_common_dynamic
from dataclasses import dataclass
from typing import List, Dict, Optional


def dynamic_get_my_first_function_input(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MyFirstFunctionInput:
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_first_function_input")
    if (constructor == "my_first_function_input"):
        my_first_function_input_init = my_first_package_services_my_first_service_structures.default_my_first_function_input()
        (my_first_function_input_fields_left, my_first_function_input_builder) = (num_fields, my_first_function_input_init)
        while ((-1 < my_first_function_input_fields_left)):
            if ((0 < my_first_function_input_fields_left)):
                my_first_function_input_new_fields_left = my_first_function_input_fields_left
            else:
                my_first_function_input_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_first_function_input_new_fields_left)):
                my_first_function_input_field_name = dynamic_object.decoder_pop_field()
                if (my_first_function_input_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_first_function_input_field_name == "my_first_argument"):
                    my_first_function_input_my_first_argument_value = dynamic_object.decoder_pop_string()
                    my_first_function_input_builder.my_first_argument = my_first_function_input_my_first_argument_value;
                    
                    (my_first_function_input_fields_left, my_first_function_input_builder) = ((my_first_function_input_new_fields_left - 1), my_first_function_input_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_first_function_input_fields_left, my_first_function_input_builder) = (-1, my_first_function_input_builder)
        return my_first_function_input_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_first_function_input(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MyFirstFunctionInput:

    ret_obj = dynamic_get_my_first_function_input(dynamic_object)
    return ret_obj

def dynamic_put_my_first_function_input(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_services_my_first_service_structures.MyFirstFunctionInput) -> None:

    if isinstance(input_object, my_first_package_services_my_first_service_structures.MyFirstFunctionInput):
        my_first_function_input_field_my_first_function_input = input_object
        dynamic_object.encoder_put_struct("my_first_function_input", 1)
        dynamic_object.encoder_put_field("my_first_argument")
        dynamic_object.encoder_put_string(my_first_function_input_field_my_first_function_input.my_first_argument)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")

def dynamic_get_my_first_function_output(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MyFirstFunctionOutput:
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_first_function_output")
    if (constructor == "my_first_function_output"):
        my_first_function_output_init = my_first_package_services_my_first_service_structures.default_my_first_function_output()
        (my_first_function_output_fields_left, my_first_function_output_builder) = (num_fields, my_first_function_output_init)
        while ((-1 < my_first_function_output_fields_left)):
            if ((0 < my_first_function_output_fields_left)):
                my_first_function_output_new_fields_left = my_first_function_output_fields_left
            else:
                my_first_function_output_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_first_function_output_new_fields_left)):
                my_first_function_output_field_name = dynamic_object.decoder_pop_field()
                if (my_first_function_output_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_first_function_output_field_name == "my_first_return"):
                    my_first_function_output_my_first_return_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_my_first_structure(dynamic_object)
                    my_first_function_output_builder.my_first_return = my_first_function_output_my_first_return_value;
                    
                    (my_first_function_output_fields_left, my_first_function_output_builder) = ((my_first_function_output_new_fields_left - 1), my_first_function_output_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_first_function_output_fields_left, my_first_function_output_builder) = (-1, my_first_function_output_builder)
        return my_first_function_output_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_first_function_output(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MyFirstFunctionOutput:

    ret_obj = dynamic_get_my_first_function_output(dynamic_object)
    return ret_obj

def dynamic_put_my_first_function_output(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_services_my_first_service_structures.MyFirstFunctionOutput) -> None:

    if isinstance(input_object, my_first_package_services_my_first_service_structures.MyFirstFunctionOutput):
        my_first_function_output_field_my_first_function_output = input_object
        dynamic_object.encoder_put_struct("my_first_function_output", 1)
        dynamic_object.encoder_put_field("my_first_return")
        my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(dynamic_object, my_first_function_output_field_my_first_function_output.my_first_return)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")

def dynamic_get_my_second_function_input(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MySecondFunctionInput:
    
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_second_function_input")
    if (constructor == "my_second_function_input"):
        my_second_function_input_init = my_first_package_services_my_first_service_structures.default_my_second_function_input()
        (my_second_function_input_fields_left, my_second_function_input_builder) = (num_fields, my_second_function_input_init)
        while ((-1 < my_second_function_input_fields_left)):
            if ((0 < my_second_function_input_fields_left)):
                my_second_function_input_new_fields_left = my_second_function_input_fields_left
            else:
                my_second_function_input_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_second_function_input_new_fields_left)):
                my_second_function_input_field_name = dynamic_object.decoder_pop_field()
                if (my_second_function_input_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_second_function_input_field_name == "arg_one"):
                    my_second_function_input_arg_one_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_my_enum_structure(dynamic_object)
                    my_second_function_input_builder.arg_one = my_second_function_input_arg_one_value;
                    
                    (my_second_function_input_fields_left, my_second_function_input_builder) = ((my_second_function_input_new_fields_left - 1), my_second_function_input_builder)
                elif (my_second_function_input_field_name == "arg_two"):
                    my_second_function_input_arg_two_value = dynamic_object.decoder_pop_string()
                    my_second_function_input_builder.arg_two = my_second_function_input_arg_two_value;
                    
                    (my_second_function_input_fields_left, my_second_function_input_builder) = ((my_second_function_input_new_fields_left - 1), my_second_function_input_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_second_function_input_fields_left, my_second_function_input_builder) = (-1, my_second_function_input_builder)
        return my_second_function_input_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_second_function_input(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MySecondFunctionInput:

    ret_obj = dynamic_get_my_second_function_input(dynamic_object)
    return ret_obj

def dynamic_put_my_second_function_input(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_services_my_first_service_structures.MySecondFunctionInput) -> None:

    if isinstance(input_object, my_first_package_services_my_first_service_structures.MySecondFunctionInput):
        my_second_function_input_field_my_second_function_input = input_object
        dynamic_object.encoder_put_struct("my_second_function_input", 2)
        dynamic_object.encoder_put_field("arg_one")
        my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(dynamic_object, my_second_function_input_field_my_second_function_input.arg_one)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("arg_two")
        dynamic_object.encoder_put_string(my_second_function_input_field_my_second_function_input.arg_two)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")

def dynamic_get_my_second_function_output(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MySecondFunctionOutput:
    
    
    
    
    
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_second_function_output")
    if (constructor == "my_second_function_output"):
        my_second_function_output_init = my_first_package_services_my_first_service_structures.default_my_second_function_output()
        (my_second_function_output_fields_left, my_second_function_output_builder) = (num_fields, my_second_function_output_init)
        while ((-1 < my_second_function_output_fields_left)):
            if ((0 < my_second_function_output_fields_left)):
                my_second_function_output_new_fields_left = my_second_function_output_fields_left
            else:
                my_second_function_output_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_second_function_output_new_fields_left)):
                my_second_function_output_field_name = dynamic_object.decoder_pop_field()
                if (my_second_function_output_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_second_function_output_field_name == "ret_one"):
                    my_second_function_output_ret_one_init = dynamic_object.decoder_pop_list()
                    (my_second_function_output_ret_one_elements_left, my_second_function_output_ret_one_list_acc) = (my_second_function_output_ret_one_init, [])
                    while ((-1 < my_second_function_output_ret_one_elements_left)):
                        if ((0 < my_second_function_output_ret_one_elements_left)):
                            my_second_function_output_ret_one_new_fields_left = my_second_function_output_ret_one_elements_left
                        else:
                            my_second_function_output_ret_one_new_fields_left = dynamic_object.decoder_pop_has_more_list()
                        if ((0 < my_second_function_output_ret_one_new_fields_left)):
                            my_second_function_output_ret_one_list_value = dynamic_object.decoder_pop_string()
                            my_second_function_output_ret_one_list_acc.append(my_second_function_output_ret_one_list_value);
                            
                            (my_second_function_output_ret_one_elements_left, my_second_function_output_ret_one_list_acc) = ((my_second_function_output_ret_one_new_fields_left - 1), my_second_function_output_ret_one_list_acc)
                        else:
                            (my_second_function_output_ret_one_elements_left, my_second_function_output_ret_one_list_acc) = (-1, my_second_function_output_ret_one_list_acc)
                    my_second_function_output_ret_one_value = my_second_function_output_ret_one_list_acc
                    my_second_function_output_builder.ret_one = my_second_function_output_ret_one_value;
                    
                    (my_second_function_output_fields_left, my_second_function_output_builder) = ((my_second_function_output_new_fields_left - 1), my_second_function_output_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_second_function_output_fields_left, my_second_function_output_builder) = (-1, my_second_function_output_builder)
        return my_second_function_output_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_second_function_output(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_services_my_first_service_structures.MySecondFunctionOutput:

    ret_obj = dynamic_get_my_second_function_output(dynamic_object)
    return ret_obj

def dynamic_put_my_second_function_output(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_services_my_first_service_structures.MySecondFunctionOutput) -> None:

    if isinstance(input_object, my_first_package_services_my_first_service_structures.MySecondFunctionOutput):
        my_second_function_output_field_my_second_function_output = input_object
        dynamic_object.encoder_put_struct("my_second_function_output", 1)
        dynamic_object.encoder_put_field("ret_one")
        dynamic_object.encoder_put_list(len(my_second_function_output_field_my_second_function_output.ret_one))
        if ((0 == len(my_second_function_output_field_my_second_function_output.ret_one))):
            dynamic_object.encoder_put_element_end(True)
        else:
            ret_one_index = 0;
            for ret_one_elem in my_second_function_output_field_my_second_function_output.ret_one:
                dynamic_object.encoder_put_string(ret_one_elem)
                dynamic_object.encoder_put_element_end((ret_one_index == (len(my_second_function_output_field_my_second_function_output.ret_one) - 1)))
                
                ret_one_index += 1
            
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")