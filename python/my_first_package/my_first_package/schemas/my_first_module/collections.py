from . import dynamic as my_first_package_schemas_my_first_module_dynamic
from . import structures as my_first_package_schemas_my_first_module_structures
from typelayer_common import collections as typelayer_common_collections
from typelayer_common import dynamic as typelayer_common_dynamic
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class MyEnumStructureKV:
    key: str
    value: my_first_package_schemas_my_first_module_structures.MyEnumStructure

class MyEnumStructureCollection:
    def my_enum_structure_collection_delete(self, to_delete: List[str]) -> List[str]:
        raise NotImplementedError
    def my_enum_structure_collection_fetch(self, to_fetch: List[str]) -> List["MyEnumStructureKV"]:
        raise NotImplementedError
    def my_enum_structure_collection_save(self, to_save: List["MyEnumStructureKV"]) -> List[str]:
        raise NotImplementedError
    def my_enum_structure_collection_slice(self, offset: int, count: int) -> List["MyEnumStructureKV"]:
        raise NotImplementedError

@dataclass
class MyEnumStructureDynamicCollection(MyEnumStructureCollection):
    dynamic_obj: typelayer_common_collections.BinaryCollection;
    def my_enum_structure_collection_delete(self: "MyEnumStructureDynamicCollection", to_delete: List[str]) -> List[str]:
    
        dynamic_object = self.dynamic_obj
        return dynamic_object.binary_collection_delete(to_delete)
    def my_enum_structure_collection_fetch(self: "MyEnumStructureDynamicCollection", to_fetch: List[str]) -> List["MyEnumStructureKV"]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        dynamic_kvs = dynamic_object.binary_collection_fetch(to_fetch)
        reduce_dynamic_kvs_index = 0;
        reduce_dynamic_kvs_acc : List["MyEnumStructureKV"] = []
        for reduce_dynamic_kvs_elem in dynamic_kvs:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_decoder = collection_encoding.encoding_start_decoding(reduce_dynamic_kvs_elem.value)
            my_enum_structure_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(new_decoder)
            reduce_dynamic_kvs_acc.append(MyEnumStructureKV(key=reduce_dynamic_kvs_elem.key, value=my_enum_structure_value));
            
            reduce_dynamic_kvs_acc = reduce_dynamic_kvs_acc
            reduce_dynamic_kvs_index += 1
        return reduce_dynamic_kvs_acc
    def my_enum_structure_collection_save(self: "MyEnumStructureDynamicCollection", to_save: List["MyEnumStructureKV"]) -> List[str]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        convert_loop_index = 0;
        convert_loop_acc : List[typelayer_common_collections.BinaryKV] = []
        for convert_loop_elem in to_save:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_encoder = collection_encoding.encoding_start_encoding()
            my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_enum_structure(new_encoder, convert_loop_elem.value)
            elem_binary = new_encoder.encoder_to_binary()
            convert_loop_acc.append(typelayer_common_collections.BinaryKV(key=convert_loop_elem.key, value=elem_binary));
            
            convert_loop_acc = convert_loop_acc
            convert_loop_index += 1
        dynamic_list = convert_loop_acc
        return dynamic_object.binary_collection_save(dynamic_list)
    def my_enum_structure_collection_slice(self: "MyEnumStructureDynamicCollection", offset: int, size: int) -> List["MyEnumStructureKV"]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        dynamic_kvs = dynamic_object.binary_collection_slice(offset, size)
        reduce_dynamic_kvs_index = 0;
        reduce_dynamic_kvs_acc : List["MyEnumStructureKV"] = []
        for reduce_dynamic_kvs_elem in dynamic_kvs:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_decoder = collection_encoding.encoding_start_decoding(reduce_dynamic_kvs_elem.value)
            my_enum_structure_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_enum_structure(new_decoder)
            reduce_dynamic_kvs_acc.append(MyEnumStructureKV(key=reduce_dynamic_kvs_elem.key, value=my_enum_structure_value));
            
            reduce_dynamic_kvs_acc = reduce_dynamic_kvs_acc
            reduce_dynamic_kvs_index += 1
        return reduce_dynamic_kvs_acc

@dataclass
class MyFirstStructureKV:
    key: str
    value: my_first_package_schemas_my_first_module_structures.MyFirstStructure

class MyFirstStructureCollection:
    def my_first_structure_collection_delete(self, to_delete: List[str]) -> List[str]:
        raise NotImplementedError
    def my_first_structure_collection_fetch(self, to_fetch: List[str]) -> List["MyFirstStructureKV"]:
        raise NotImplementedError
    def my_first_structure_collection_save(self, to_save: List["MyFirstStructureKV"]) -> List[str]:
        raise NotImplementedError
    def my_first_structure_collection_slice(self, offset: int, count: int) -> List["MyFirstStructureKV"]:
        raise NotImplementedError

@dataclass
class MyFirstStructureDynamicCollection(MyFirstStructureCollection):
    dynamic_obj: typelayer_common_collections.BinaryCollection;
    def my_first_structure_collection_delete(self: "MyFirstStructureDynamicCollection", to_delete: List[str]) -> List[str]:
    
        dynamic_object = self.dynamic_obj
        return dynamic_object.binary_collection_delete(to_delete)
    def my_first_structure_collection_fetch(self: "MyFirstStructureDynamicCollection", to_fetch: List[str]) -> List["MyFirstStructureKV"]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        dynamic_kvs = dynamic_object.binary_collection_fetch(to_fetch)
        reduce_dynamic_kvs_index = 0;
        reduce_dynamic_kvs_acc : List["MyFirstStructureKV"] = []
        for reduce_dynamic_kvs_elem in dynamic_kvs:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_decoder = collection_encoding.encoding_start_decoding(reduce_dynamic_kvs_elem.value)
            my_first_structure_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(new_decoder)
            reduce_dynamic_kvs_acc.append(MyFirstStructureKV(key=reduce_dynamic_kvs_elem.key, value=my_first_structure_value));
            
            reduce_dynamic_kvs_acc = reduce_dynamic_kvs_acc
            reduce_dynamic_kvs_index += 1
        return reduce_dynamic_kvs_acc
    def my_first_structure_collection_save(self: "MyFirstStructureDynamicCollection", to_save: List["MyFirstStructureKV"]) -> List[str]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        convert_loop_index = 0;
        convert_loop_acc : List[typelayer_common_collections.BinaryKV] = []
        for convert_loop_elem in to_save:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_encoder = collection_encoding.encoding_start_encoding()
            my_first_package_schemas_my_first_module_dynamic.dynamic_put_my_first_structure(new_encoder, convert_loop_elem.value)
            elem_binary = new_encoder.encoder_to_binary()
            convert_loop_acc.append(typelayer_common_collections.BinaryKV(key=convert_loop_elem.key, value=elem_binary));
            
            convert_loop_acc = convert_loop_acc
            convert_loop_index += 1
        dynamic_list = convert_loop_acc
        return dynamic_object.binary_collection_save(dynamic_list)
    def my_first_structure_collection_slice(self: "MyFirstStructureDynamicCollection", offset: int, size: int) -> List["MyFirstStructureKV"]:
        
        
        
        
        
        dynamic_object = self.dynamic_obj
        dynamic_kvs = dynamic_object.binary_collection_slice(offset, size)
        reduce_dynamic_kvs_index = 0;
        reduce_dynamic_kvs_acc : List["MyFirstStructureKV"] = []
        for reduce_dynamic_kvs_elem in dynamic_kvs:
            collection_encoding = dynamic_object.binary_collection_encoding()
            new_decoder = collection_encoding.encoding_start_decoding(reduce_dynamic_kvs_elem.value)
            my_first_structure_value = my_first_package_schemas_my_first_module_dynamic.dynamic_get_obj_my_first_structure(new_decoder)
            reduce_dynamic_kvs_acc.append(MyFirstStructureKV(key=reduce_dynamic_kvs_elem.key, value=my_first_structure_value));
            
            reduce_dynamic_kvs_acc = reduce_dynamic_kvs_acc
            reduce_dynamic_kvs_index += 1
        return reduce_dynamic_kvs_acc