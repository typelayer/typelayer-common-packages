from typelayer_common import documentation as typelayer_common_documentation
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class MyFirstStructure:
    my_boolean_field: bool
    my_double_field: float
    my_integer_field: int
    my_list_field: List[str]
    my_map_field: Dict[str, str]
    my_nested_field: "MyEnumStructure"
    my_text_field: str

class MyEnumStructure:
    pass


@dataclass
class MyEnumInteger(MyEnumStructure):
    my_text_field: int

@dataclass
class MyEnumText(MyEnumStructure):
    my_text_field: str

def default_my_first_structure() -> MyFirstStructure:
    
    
    
    
    
    
    
    my_boolean_field_val = False
    my_double_field_val = 0.0
    my_integer_field_val = 0
    my_list_field_val = []
    my_map_field_val = {}
    my_nested_field_val = default_my_enum_structure()
    my_text_field_val = ""
    return MyFirstStructure(my_boolean_field=my_boolean_field_val, my_double_field=my_double_field_val, my_integer_field=my_integer_field_val, my_list_field=my_list_field_val, my_map_field=my_map_field_val, my_nested_field=my_nested_field_val, my_text_field=my_text_field_val)

def describe_my_first_structure() -> typelayer_common_documentation.StructureInfo:
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    my_boolean_field_field_info = typelayer_common_documentation.TlBoolean()
    my_first_structure_my_boolean_field_field_info = typelayer_common_documentation.FieldDescription(name="my_boolean_field", description=None, type_info=my_boolean_field_field_info)
    my_double_field_field_info = typelayer_common_documentation.TlDouble()
    my_first_structure_my_double_field_field_info = typelayer_common_documentation.FieldDescription(name="my_double_field", description=None, type_info=my_double_field_field_info)
    my_integer_field_field_info = typelayer_common_documentation.TlInteger()
    my_first_structure_my_integer_field_field_info = typelayer_common_documentation.FieldDescription(name="my_integer_field", description=None, type_info=my_integer_field_field_info)
    my_list_field_inner_field_info = typelayer_common_documentation.TlText()
    my_list_field_field_info = typelayer_common_documentation.TlList(list_inner=my_list_field_inner_field_info)
    my_first_structure_my_list_field_field_info = typelayer_common_documentation.FieldDescription(name="my_list_field", description=None, type_info=my_list_field_field_info)
    my_map_field_inner_field_info = typelayer_common_documentation.TlText()
    my_map_field_field_info = typelayer_common_documentation.TlMap(map_inner=my_map_field_inner_field_info)
    my_first_structure_my_map_field_field_info = typelayer_common_documentation.FieldDescription(name="my_map_field", description=None, type_info=my_map_field_field_info)
    my_nested_field_field_info = typelayer_common_documentation.TlStructure(package="my_first_package", schema="structures", structure_id="my_enum_structure")
    my_first_structure_my_nested_field_field_info = typelayer_common_documentation.FieldDescription(name="my_nested_field", description=None, type_info=my_nested_field_field_info)
    my_text_field_field_info = typelayer_common_documentation.TlText()
    my_first_structure_my_text_field_field_info = typelayer_common_documentation.FieldDescription(name="my_text_field", description=None, type_info=my_text_field_field_info)
    my_first_structure_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_first_structure", description=None, fields=[my_first_structure_my_boolean_field_field_info, my_first_structure_my_double_field_field_info, my_first_structure_my_integer_field_field_info, my_first_structure_my_list_field_field_info, my_first_structure_my_map_field_field_info, my_first_structure_my_nested_field_field_info, my_first_structure_my_text_field_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_first_structure", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_first_structure_constructor_info])

def default_my_enum_structure() -> MyEnumInteger:

    my_text_field_val = 0
    return MyEnumInteger(my_text_field=my_text_field_val)

def default_my_enum_integer() -> MyEnumInteger:

    my_text_field_val = 0
    return MyEnumInteger(my_text_field=my_text_field_val)

def default_my_enum_text() -> MyEnumText:

    my_text_field_val = ""
    return MyEnumText(my_text_field=my_text_field_val)

def describe_my_enum_structure() -> typelayer_common_documentation.StructureInfo:
    
    
    
    
    
    my_text_field_field_info = typelayer_common_documentation.TlInteger()
    my_enum_integer_my_text_field_field_info = typelayer_common_documentation.FieldDescription(name="my_text_field", description=None, type_info=my_text_field_field_info)
    my_enum_integer_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_enum_integer", description=None, fields=[my_enum_integer_my_text_field_field_info])
    my_text_field_field_info = typelayer_common_documentation.TlText()
    my_enum_text_my_text_field_field_info = typelayer_common_documentation.FieldDescription(name="my_text_field", description=None, type_info=my_text_field_field_info)
    my_enum_text_constructor_info = typelayer_common_documentation.ConstructorInfo(name="my_enum_text", description=None, fields=[my_enum_text_my_text_field_field_info])
    return typelayer_common_documentation.StructureInfo(structure_id="my_enum_structure", structure_type=typelayer_common_documentation.StructureEnum(), description=None, constructors=[my_enum_integer_constructor_info, my_enum_text_constructor_info])