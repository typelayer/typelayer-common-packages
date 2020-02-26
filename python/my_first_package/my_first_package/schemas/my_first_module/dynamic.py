from . import structures as my_first_package_schemas_my_first_module_structures
from typelayer_common import dynamic as typelayer_common_dynamic
from dataclasses import dataclass
from typing import List, Dict, Optional


def dynamic_get_my_enum_structure(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_schemas_my_first_module_structures.MyEnumStructure:
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_enum_integer")
    if (constructor == "my_enum_integer"):
        my_enum_integer_init = my_first_package_schemas_my_first_module_structures.default_my_enum_integer()
        (my_enum_integer_fields_left, my_enum_integer_builder) = (num_fields, my_enum_integer_init)
        while ((-1 < my_enum_integer_fields_left)):
            if ((0 < my_enum_integer_fields_left)):
                my_enum_integer_new_fields_left = my_enum_integer_fields_left
            else:
                my_enum_integer_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_enum_integer_new_fields_left)):
                my_enum_integer_field_name = dynamic_object.decoder_pop_field()
                if (my_enum_integer_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_enum_integer_field_name == "my_text_field"):
                    my_enum_integer_my_text_field_value = dynamic_object.decoder_pop_integer()
                    my_enum_integer_builder.my_text_field = my_enum_integer_my_text_field_value;
                    
                    (my_enum_integer_fields_left, my_enum_integer_builder) = ((my_enum_integer_new_fields_left - 1), my_enum_integer_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_enum_integer_fields_left, my_enum_integer_builder) = (-1, my_enum_integer_builder)
        return my_enum_integer_builder
    elif (constructor == "my_enum_text"):
        my_enum_text_init = my_first_package_schemas_my_first_module_structures.default_my_enum_text()
        (my_enum_text_fields_left, my_enum_text_builder) = (num_fields, my_enum_text_init)
        while ((-1 < my_enum_text_fields_left)):
            if ((0 < my_enum_text_fields_left)):
                my_enum_text_new_fields_left = my_enum_text_fields_left
            else:
                my_enum_text_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_enum_text_new_fields_left)):
                my_enum_text_field_name = dynamic_object.decoder_pop_field()
                if (my_enum_text_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_enum_text_field_name == "my_text_field"):
                    my_enum_text_my_text_field_value = dynamic_object.decoder_pop_string()
                    my_enum_text_builder.my_text_field = my_enum_text_my_text_field_value;
                    
                    (my_enum_text_fields_left, my_enum_text_builder) = ((my_enum_text_new_fields_left - 1), my_enum_text_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_enum_text_fields_left, my_enum_text_builder) = (-1, my_enum_text_builder)
        return my_enum_text_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_enum_structure(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_schemas_my_first_module_structures.MyEnumStructure:

    ret_obj = dynamic_get_my_enum_structure(dynamic_object)
    return ret_obj

def dynamic_put_my_enum_structure(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_schemas_my_first_module_structures.MyEnumStructure) -> None:
    
    
    if isinstance(input_object, my_first_package_schemas_my_first_module_structures.MyEnumInteger):
        my_enum_structure_field_my_enum_integer = input_object
        dynamic_object.encoder_put_struct("my_enum_integer", 1)
        dynamic_object.encoder_put_field("my_text_field")
        dynamic_object.encoder_put_integer(my_enum_structure_field_my_enum_integer.my_text_field)
        dynamic_object.encoder_put_field_end(True)
        return;
    elif isinstance(input_object, my_first_package_schemas_my_first_module_structures.MyEnumText):
        my_enum_structure_field_my_enum_text = input_object
        dynamic_object.encoder_put_struct("my_enum_text", 1)
        dynamic_object.encoder_put_field("my_text_field")
        dynamic_object.encoder_put_string(my_enum_structure_field_my_enum_text.my_text_field)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")

def dynamic_get_my_first_structure(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_schemas_my_first_module_structures.MyFirstStructure:
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("my_first_structure")
    if (constructor == "my_first_structure"):
        my_first_structure_init = my_first_package_schemas_my_first_module_structures.default_my_first_structure()
        (my_first_structure_fields_left, my_first_structure_builder) = (num_fields, my_first_structure_init)
        while ((-1 < my_first_structure_fields_left)):
            if ((0 < my_first_structure_fields_left)):
                my_first_structure_new_fields_left = my_first_structure_fields_left
            else:
                my_first_structure_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < my_first_structure_new_fields_left)):
                my_first_structure_field_name = dynamic_object.decoder_pop_field()
                if (my_first_structure_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (my_first_structure_field_name == "my_boolean_field"):
                    my_first_structure_my_boolean_field_value = dynamic_object.decoder_pop_bool()
                    my_first_structure_builder.my_boolean_field = my_first_structure_my_boolean_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_double_field"):
                    my_first_structure_my_double_field_value = dynamic_object.decoder_pop_double()
                    my_first_structure_builder.my_double_field = my_first_structure_my_double_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_integer_field"):
                    my_first_structure_my_integer_field_value = dynamic_object.decoder_pop_integer()
                    my_first_structure_builder.my_integer_field = my_first_structure_my_integer_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_list_field"):
                    my_first_structure_my_list_field_init = dynamic_object.decoder_pop_list()
                    (my_first_structure_my_list_field_elements_left, my_first_structure_my_list_field_list_acc) = (my_first_structure_my_list_field_init, [])
                    while ((-1 < my_first_structure_my_list_field_elements_left)):
                        if ((0 < my_first_structure_my_list_field_elements_left)):
                            my_first_structure_my_list_field_new_fields_left = my_first_structure_my_list_field_elements_left
                        else:
                            my_first_structure_my_list_field_new_fields_left = dynamic_object.decoder_pop_has_more_list()
                        if ((0 < my_first_structure_my_list_field_new_fields_left)):
                            my_first_structure_my_list_field_list_value = dynamic_object.decoder_pop_string()
                            my_first_structure_my_list_field_list_acc.append(my_first_structure_my_list_field_list_value);
                            
                            (my_first_structure_my_list_field_elements_left, my_first_structure_my_list_field_list_acc) = ((my_first_structure_my_list_field_new_fields_left - 1), my_first_structure_my_list_field_list_acc)
                        else:
                            (my_first_structure_my_list_field_elements_left, my_first_structure_my_list_field_list_acc) = (-1, my_first_structure_my_list_field_list_acc)
                    my_first_structure_my_list_field_value = my_first_structure_my_list_field_list_acc
                    my_first_structure_builder.my_list_field = my_first_structure_my_list_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_map_field"):
                    my_first_structure_my_map_field_init = dynamic_object.decoder_pop_map()
                    (my_first_structure_my_map_field_elements_left, my_first_structure_my_map_field_map_acc) = (my_first_structure_my_map_field_init, {})
                    while ((-1 < my_first_structure_my_map_field_elements_left)):
                        if ((0 < my_first_structure_my_map_field_elements_left)):
                            my_first_structure_my_map_field_new_fields_left = my_first_structure_my_map_field_elements_left
                        else:
                            my_first_structure_my_map_field_new_fields_left = dynamic_object.decoder_pop_has_more_map()
                        if ((0 < my_first_structure_my_map_field_new_fields_left)):
                            my_first_structure_my_map_field_key = dynamic_object.decoder_pop_key()
                            my_first_structure_my_map_field_map_value = dynamic_object.decoder_pop_string()
                            my_first_structure_my_map_field_map_acc[my_first_structure_my_map_field_key] = my_first_structure_my_map_field_map_value
                            
                            (my_first_structure_my_map_field_elements_left, my_first_structure_my_map_field_map_acc) = ((my_first_structure_my_map_field_new_fields_left - 1), my_first_structure_my_map_field_map_acc)
                        else:
                            (my_first_structure_my_map_field_elements_left, my_first_structure_my_map_field_map_acc) = (-1, my_first_structure_my_map_field_map_acc)
                    my_first_structure_my_map_field_value = my_first_structure_my_map_field_map_acc
                    my_first_structure_builder.my_map_field = my_first_structure_my_map_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_nested_field"):
                    my_first_structure_my_nested_field_value = dynamic_get_my_enum_structure(dynamic_object)
                    my_first_structure_builder.my_nested_field = my_first_structure_my_nested_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                elif (my_first_structure_field_name == "my_text_field"):
                    my_first_structure_my_text_field_value = dynamic_object.decoder_pop_string()
                    my_first_structure_builder.my_text_field = my_first_structure_my_text_field_value;
                    
                    (my_first_structure_fields_left, my_first_structure_builder) = ((my_first_structure_new_fields_left - 1), my_first_structure_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (my_first_structure_fields_left, my_first_structure_builder) = (-1, my_first_structure_builder)
        return my_first_structure_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_my_first_structure(dynamic_object: typelayer_common_dynamic.Decoder) -> my_first_package_schemas_my_first_module_structures.MyFirstStructure:

    ret_obj = dynamic_get_my_first_structure(dynamic_object)
    return ret_obj

def dynamic_put_my_first_structure(dynamic_object: typelayer_common_dynamic.Encoder, input_object: my_first_package_schemas_my_first_module_structures.MyFirstStructure) -> None:

    if isinstance(input_object, my_first_package_schemas_my_first_module_structures.MyFirstStructure):
        my_first_structure_field_my_first_structure = input_object
        dynamic_object.encoder_put_struct("my_first_structure", 7)
        dynamic_object.encoder_put_field("my_boolean_field")
        dynamic_object.encoder_put_bool(my_first_structure_field_my_first_structure.my_boolean_field)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_double_field")
        dynamic_object.encoder_put_double(my_first_structure_field_my_first_structure.my_double_field)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_integer_field")
        dynamic_object.encoder_put_integer(my_first_structure_field_my_first_structure.my_integer_field)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_list_field")
        dynamic_object.encoder_put_list(len(my_first_structure_field_my_first_structure.my_list_field))
        if ((0 == len(my_first_structure_field_my_first_structure.my_list_field))):
            dynamic_object.encoder_put_element_end(True)
        else:
            my_list_field_index = 0;
            for my_list_field_elem in my_first_structure_field_my_first_structure.my_list_field:
                dynamic_object.encoder_put_string(my_list_field_elem)
                dynamic_object.encoder_put_element_end((my_list_field_index == (len(my_first_structure_field_my_first_structure.my_list_field) - 1)))
                
                my_list_field_index += 1
            
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_map_field")
        dynamic_object.encoder_put_map(len(my_first_structure_field_my_first_structure.my_map_field))
        if ((0 == len(my_first_structure_field_my_first_structure.my_map_field))):
            dynamic_object.encoder_put_value_end(True)
        else:
            my_map_field_values_index = 0;
            for my_map_field_values_key, my_map_field_values_elem in my_first_structure_field_my_first_structure.my_map_field.items():
                dynamic_object.encoder_put_key(my_map_field_values_key)
                dynamic_object.encoder_put_string(my_map_field_values_elem)
                dynamic_object.encoder_put_value_end((my_map_field_values_index == (len(my_first_structure_field_my_first_structure.my_map_field) - 1)))
                
                my_map_field_values_index += 1
            
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_nested_field")
        dynamic_put_my_enum_structure(dynamic_object, my_first_structure_field_my_first_structure.my_nested_field)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("my_text_field")
        dynamic_object.encoder_put_string(my_first_structure_field_my_first_structure.my_text_field)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")