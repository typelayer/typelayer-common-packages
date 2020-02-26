
from dataclasses import dataclass
from typing import List, Dict, Optional


class TypeInfo:
    pass


@dataclass
class TlBinary(TypeInfo):
    pass

@dataclass
class TlBoolean(TypeInfo):
    pass

@dataclass
class TlDatetime(TypeInfo):
    pass

@dataclass
class TlDouble(TypeInfo):
    pass

@dataclass
class TlInteger(TypeInfo):
    pass

@dataclass
class TlList(TypeInfo):
    list_inner: "TypeInfo"

@dataclass
class TlMap(TypeInfo):
    map_inner: "TypeInfo"

@dataclass
class TlMaybe(TypeInfo):
    maybe_inner: "TypeInfo"

@dataclass
class TlStructure(TypeInfo):
    package: str
    schema: str
    structure_id: str

@dataclass
class TlText(TypeInfo):
    pass

@dataclass
class FieldDescription:
    description: Optional[str]
    name: str
    type_info: "TypeInfo"

@dataclass
class FunctionDescription:
    description: Optional[str]
    inputs: List["FieldDescription"]
    name: str
    outputs: List["FieldDescription"]

@dataclass
class ServiceDescription:
    description: Optional[str]
    functions: List["FunctionDescription"]
    name: str

@dataclass
class ConstructorInfo:
    description: Optional[str]
    fields: List["FieldDescription"]
    name: str

@dataclass
class StructureInfo:
    constructors: List["ConstructorInfo"]
    description: Optional[str]
    structure_id: str
    structure_type: "StructureType"

class StructureType:
    pass


@dataclass
class StructureEnum(StructureType):
    pass

@dataclass
class StructureSimple(StructureType):
    pass

@dataclass
class ApplicationDescription:
    description: Optional[str]
    name: str
    services: List["ServiceDescription"]

class ColumnTypeInfo:
    pass


@dataclass
class TlBinaryColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class TlBooleanColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class TlDatetimeColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class TlDoubleColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class TlIntegerColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class TlReference(ColumnTypeInfo):
    database: str
    is_null: bool
    package: str
    table_id: str

@dataclass
class TlTextColumn(ColumnTypeInfo):
    is_null: bool

@dataclass
class ColumnInfo:
    column_info: "ColumnTypeInfo"
    description: Optional[str]
    name: str

@dataclass
class TableInfo:
    columns: List["ColumnInfo"]
    description: Optional[str]
    name: str
    table: str