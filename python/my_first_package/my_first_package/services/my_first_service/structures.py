from ...schemas.my_first_module import structures as my_first_package_schemas_my_first_module_structures
from typelayer_common import documentation as typelayer_common_documentation
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class MyFirstFunctionInput:
    my_first_argument: str

@dataclass
class MyFirstFunctionOutput:
    my_first_return: my_first_package_schemas_my_first_module_structures.MyFirstStructure

@dataclass
class MySecondFunctionInput:
    arg_one: my_first_package_schemas_my_first_module_structures.MyEnumStructure
    arg_two: str

@dataclass
class MySecondFunctionOutput:
    ret_one: List[str]

def default_my_first_function_input() -> MyFirstFunctionInput:

    my_first_argument_val = ""
    return MyFirstFunctionInput(my_first_argument=my_first_argument_val)

def describe_my_first_function_input() -> typelayer_common_documentation.StructureInfo:
    
    
    
    my_first_argument_field_info = typelayer_common_documentation.TlText()
    my_first_function_input_my_first_argument_field_info = typelayer_common_documentation.FieldDescription(name="my_first_argument", description=None, type_info=my_first_argument_field_info)
    my_first_function_input_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_first_function_input", description=None, fields=[my_first_function_input_my_first_argument_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_first_function_input", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_first_function_input_constructor_info])

def default_my_first_function_output() -> MyFirstFunctionOutput:

    my_first_return_val = my_first_package_schemas_my_first_module_structures.default_my_first_structure()
    return MyFirstFunctionOutput(my_first_return=my_first_return_val)

def describe_my_first_function_output() -> typelayer_common_documentation.StructureInfo:
    
    
    
    my_first_return_field_info = typelayer_common_documentation.TlStructure(package="my_first_package", schema="structures", structure_id="my_first_structure")
    my_first_function_output_my_first_return_field_info = typelayer_common_documentation.FieldDescription(name="my_first_return", description=None, type_info=my_first_return_field_info)
    my_first_function_output_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_first_function_output", description=None, fields=[my_first_function_output_my_first_return_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_first_function_output", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_first_function_output_constructor_info])

def default_my_second_function_input() -> MySecondFunctionInput:
    
    
    arg_one_val = my_first_package_schemas_my_first_module_structures.default_my_enum_structure()
    arg_two_val = ""
    return MySecondFunctionInput(arg_one=arg_one_val, arg_two=arg_two_val)

def describe_my_second_function_input() -> typelayer_common_documentation.StructureInfo:
    
    
    
    
    
    arg_one_field_info = typelayer_common_documentation.TlStructure(package="my_first_package", schema="structures", structure_id="my_enum_structure")
    my_second_function_input_arg_one_field_info = typelayer_common_documentation.FieldDescription(name="arg_one", description=None, type_info=arg_one_field_info)
    arg_two_field_info = typelayer_common_documentation.TlText()
    my_second_function_input_arg_two_field_info = typelayer_common_documentation.FieldDescription(name="arg_two", description=None, type_info=arg_two_field_info)
    my_second_function_input_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_second_function_input", description=None, fields=[my_second_function_input_arg_one_field_info, my_second_function_input_arg_two_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_second_function_input", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_second_function_input_constructor_info])

def default_my_second_function_output() -> MySecondFunctionOutput:

    ret_one_val = []
    return MySecondFunctionOutput(ret_one=ret_one_val)

def describe_my_second_function_output() -> typelayer_common_documentation.StructureInfo:
    
    
    
    
    ret_one_inner_field_info = typelayer_common_documentation.TlText()
    ret_one_field_info = typelayer_common_documentation.TlList(list_inner=ret_one_inner_field_info)
    my_second_function_output_ret_one_field_info = typelayer_common_documentation.FieldDescription(name="ret_one", description=None, type_info=ret_one_field_info)
    my_second_function_output_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_second_function_output", description=None, fields=[my_second_function_output_ret_one_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_second_function_output", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_second_function_output_constructor_info])