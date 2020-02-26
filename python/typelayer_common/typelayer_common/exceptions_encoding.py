from . import documentation as typelayer_common_documentation
from . import dynamic as typelayer_common_dynamic
from . import exceptions as typelayer_common_exceptions
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class ExceptionMetaSerializable:
    exception_fields: Dict[str, str]
    exception_message: str
    exception_module: str
    exception_type: str

def dynamic_get_exception_meta_serializable(dynamic_object: typelayer_common_dynamic.Decoder) -> "ExceptionMetaSerializable":
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (constructor, num_fields) = dynamic_object.decoder_pop_struct("exception_meta_serializable")
    if (constructor == "exception_meta_serializable"):
        exception_meta_serializable_init = default_exception_meta_serializable()
        (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = (num_fields, exception_meta_serializable_init)
        while ((-1 < exception_meta_serializable_fields_left)):
            if ((0 < exception_meta_serializable_fields_left)):
                exception_meta_serializable_new_fields_left = exception_meta_serializable_fields_left
            else:
                exception_meta_serializable_new_fields_left = dynamic_object.decoder_pop_has_more_struct()
            if ((0 < exception_meta_serializable_new_fields_left)):
                exception_meta_serializable_field_name = dynamic_object.decoder_pop_field()
                if (exception_meta_serializable_field_name == "*"):
                    raise typelayer_common_dynamic.DynamicGetException("Constructor must be first field", {"path": dynamic_object.decoder_path()});
                elif (exception_meta_serializable_field_name == "exception_fields"):
                    exception_meta_serializable_exception_fields_init = dynamic_object.decoder_pop_map()
                    (exception_meta_serializable_exception_fields_elements_left, exception_meta_serializable_exception_fields_map_acc) = (exception_meta_serializable_exception_fields_init, {})
                    while ((-1 < exception_meta_serializable_exception_fields_elements_left)):
                        if ((0 < exception_meta_serializable_exception_fields_elements_left)):
                            exception_meta_serializable_exception_fields_new_fields_left = exception_meta_serializable_exception_fields_elements_left
                        else:
                            exception_meta_serializable_exception_fields_new_fields_left = dynamic_object.decoder_pop_has_more_map()
                        if ((0 < exception_meta_serializable_exception_fields_new_fields_left)):
                            exception_meta_serializable_exception_fields_key = dynamic_object.decoder_pop_key()
                            exception_meta_serializable_exception_fields_map_value = dynamic_object.decoder_pop_string()
                            exception_meta_serializable_exception_fields_map_acc[exception_meta_serializable_exception_fields_key] = exception_meta_serializable_exception_fields_map_value
                            
                            (exception_meta_serializable_exception_fields_elements_left, exception_meta_serializable_exception_fields_map_acc) = ((exception_meta_serializable_exception_fields_new_fields_left - 1), exception_meta_serializable_exception_fields_map_acc)
                        else:
                            (exception_meta_serializable_exception_fields_elements_left, exception_meta_serializable_exception_fields_map_acc) = (-1, exception_meta_serializable_exception_fields_map_acc)
                    exception_meta_serializable_exception_fields_value = exception_meta_serializable_exception_fields_map_acc
                    exception_meta_serializable_builder.exception_fields = exception_meta_serializable_exception_fields_value;
                    
                    (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = ((exception_meta_serializable_new_fields_left - 1), exception_meta_serializable_builder)
                elif (exception_meta_serializable_field_name == "exception_message"):
                    exception_meta_serializable_exception_message_value = dynamic_object.decoder_pop_string()
                    exception_meta_serializable_builder.exception_message = exception_meta_serializable_exception_message_value;
                    
                    (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = ((exception_meta_serializable_new_fields_left - 1), exception_meta_serializable_builder)
                elif (exception_meta_serializable_field_name == "exception_module"):
                    exception_meta_serializable_exception_module_value = dynamic_object.decoder_pop_string()
                    exception_meta_serializable_builder.exception_module = exception_meta_serializable_exception_module_value;
                    
                    (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = ((exception_meta_serializable_new_fields_left - 1), exception_meta_serializable_builder)
                elif (exception_meta_serializable_field_name == "exception_type"):
                    exception_meta_serializable_exception_type_value = dynamic_object.decoder_pop_string()
                    exception_meta_serializable_builder.exception_type = exception_meta_serializable_exception_type_value;
                    
                    (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = ((exception_meta_serializable_new_fields_left - 1), exception_meta_serializable_builder)
                else:
                        raise typelayer_common_dynamic.DynamicGetException("Unknown Field", {"path": dynamic_object.decoder_path()});
            else:
                (exception_meta_serializable_fields_left, exception_meta_serializable_builder) = (-1, exception_meta_serializable_builder)
        return exception_meta_serializable_builder
    else:
            raise typelayer_common_dynamic.DynamicGetException("Unknown Constructor", {"path": dynamic_object.decoder_path()});

def dynamic_get_obj_exception_meta_serializable(dynamic_object: typelayer_common_dynamic.Decoder) -> "ExceptionMetaSerializable":

    ret_obj = dynamic_get_exception_meta_serializable(dynamic_object)
    return ret_obj

def dynamic_put_exception_meta_serializable(dynamic_object: typelayer_common_dynamic.Encoder, input_object: "ExceptionMetaSerializable") -> None:

    if isinstance(input_object, "ExceptionMetaSerializable"):
        exception_meta_serializable_field_exception_meta_serializable = input_object
        dynamic_object.encoder_put_struct("exception_meta_serializable", 4)
        dynamic_object.encoder_put_field("exception_fields")
        dynamic_object.encoder_put_map(len(exception_meta_serializable_field_exception_meta_serializable.exception_fields))
        if ((0 == len(exception_meta_serializable_field_exception_meta_serializable.exception_fields))):
            dynamic_object.encoder_put_value_end(True)
        else:
            exception_fields_values_index = 0;
            for exception_fields_values_key, exception_fields_values_elem in exception_meta_serializable_field_exception_meta_serializable.exception_fields.items():
                dynamic_object.encoder_put_key(exception_fields_values_key)
                dynamic_object.encoder_put_string(exception_fields_values_elem)
                dynamic_object.encoder_put_value_end((exception_fields_values_index == (len(exception_meta_serializable_field_exception_meta_serializable.exception_fields) - 1)))
                
                exception_fields_values_index += 1
            
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("exception_message")
        dynamic_object.encoder_put_string(exception_meta_serializable_field_exception_meta_serializable.exception_message)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("exception_module")
        dynamic_object.encoder_put_string(exception_meta_serializable_field_exception_meta_serializable.exception_module)
        dynamic_object.encoder_put_field_end(False)
        dynamic_object.encoder_put_field("exception_type")
        dynamic_object.encoder_put_string(exception_meta_serializable_field_exception_meta_serializable.exception_type)
        dynamic_object.encoder_put_field_end(True)
        return;
    else:
        raise Exception(f"Invalid type {input_object}")

def default_exception_meta_serializable() -> ExceptionMetaSerializable:
    
    
    
    
    exception_fields_val = {}
    exception_message_val = ""
    exception_module_val = ""
    exception_type_val = ""
    return ExceptionMetaSerializable(exception_fields=exception_fields_val, exception_message=exception_message_val, exception_module=exception_module_val, exception_type=exception_type_val)

def describe_exception_meta_serializable() -> typelayer_common_documentation.StructureInfo:
    
    
    
    
    
    
    
    
    
    
    exception_fields_inner_field_info = typelayer_common_documentation.TlText()
    exception_fields_field_info = typelayer_common_documentation.TlMap(map_inner=exception_fields_inner_field_info)
    exception_meta_serializable_exception_fields_field_info = typelayer_common_documentation.FieldDescription(name="exception_fields", description=None, type_info=exception_fields_field_info)
    exception_message_field_info = typelayer_common_documentation.TlText()
    exception_meta_serializable_exception_message_field_info = typelayer_common_documentation.FieldDescription(name="exception_message", description=None, type_info=exception_message_field_info)
    exception_module_field_info = typelayer_common_documentation.TlText()
    exception_meta_serializable_exception_module_field_info = typelayer_common_documentation.FieldDescription(name="exception_module", description=None, type_info=exception_module_field_info)
    exception_type_field_info = typelayer_common_documentation.TlText()
    exception_meta_serializable_exception_type_field_info = typelayer_common_documentation.FieldDescription(name="exception_type", description=None, type_info=exception_type_field_info)
    exception_meta_serializable_constructor_info = typelayer_common_documentation.ConstructorInfo(name="exception_meta_serializable", description=None, fields=[exception_meta_serializable_exception_fields_field_info, exception_meta_serializable_exception_message_field_info, exception_meta_serializable_exception_module_field_info, exception_meta_serializable_exception_type_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="exception_meta_serializable", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[exception_meta_serializable_constructor_info])

def to_serializable(meta: typelayer_common_exceptions.ExceptionMeta) -> "ExceptionMetaSerializable":

    return ExceptionMetaSerializable(exception_fields=meta.exception_fields, exception_module=meta.exception_module, exception_type=meta.exception_type, exception_message=meta.exception_message)

def to_plain_meta(meta: "ExceptionMetaSerializable") -> typelayer_common_exceptions.ExceptionMeta:

    return typelayer_common_exceptions.ExceptionMeta(exception_fields=meta.exception_fields, exception_module=meta.exception_module, exception_type=meta.exception_type, exception_message=meta.exception_message)