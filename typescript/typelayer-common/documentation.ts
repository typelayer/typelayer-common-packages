// Module: documentation



export class TlBinary {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class TlBoolean {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class TlDatetime {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class TlDouble {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class TlInteger {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class TlList {
    listInner: TypeInfo;
    constructor(arg: {listInner: TypeInfo;}) {
        Object.assign(this, arg);
    }
}

export class TlMap {
    mapInner: TypeInfo;
    constructor(arg: {mapInner: TypeInfo;}) {
        Object.assign(this, arg);
    }
}

export class TlMaybe {
    maybeInner: TypeInfo;
    constructor(arg: {maybeInner: TypeInfo;}) {
        Object.assign(this, arg);
    }
}

export class TlStructure {
    package: string;
    schema: string;
    structureId: string;
    constructor(arg: {package: string; schema: string; structureId: string;}) {
        Object.assign(this, arg);
    }
}

export class TlText {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export type TypeInfo = TlBinary| TlBoolean| TlDatetime| TlDouble| TlInteger| TlList| TlMap| TlMaybe| TlStructure| TlText

export class FieldDescription {
    description: string | null;
    name: string;
    typeInfo: TypeInfo;
    constructor(arg: {description: string | null; name: string; typeInfo: TypeInfo;}) {
        Object.assign(this, arg);
    }
}

export class FunctionDescription {
    description: string | null;
    inputs: Array<FieldDescription>;
    name: string;
    outputs: Array<FieldDescription>;
    constructor(arg: {description: string | null; inputs: Array<FieldDescription>; name: string; outputs: Array<FieldDescription>;}) {
        Object.assign(this, arg);
    }
}

export class ServiceDescription {
    description: string | null;
    functions: Array<FunctionDescription>;
    name: string;
    constructor(arg: {description: string | null; functions: Array<FunctionDescription>; name: string;}) {
        Object.assign(this, arg);
    }
}

export class ConstructorInfo {
    description: string | null;
    fields: Array<FieldDescription>;
    name: string;
    constructor(arg: {description: string | null; fields: Array<FieldDescription>; name: string;}) {
        Object.assign(this, arg);
    }
}

export class StructureInfo {
    constructors: Array<ConstructorInfo>;
    description: string | null;
    structureId: string;
    structureType: StructureType;
    constructor(arg: {constructors: Array<ConstructorInfo>; description: string | null; structureId: string; structureType: StructureType;}) {
        Object.assign(this, arg);
    }
}

export class StructureEnum {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export class StructureSimple {

    constructor(arg: {}) {
        Object.assign(this, arg);
    }
}

export type StructureType = StructureEnum| StructureSimple

export class ApplicationDescription {
    description: string | null;
    name: string;
    services: Array<ServiceDescription>;
    constructor(arg: {description: string | null; name: string; services: Array<ServiceDescription>;}) {
        Object.assign(this, arg);
    }
}

export class TlBinaryColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export class TlBooleanColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export class TlDatetimeColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export class TlDoubleColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export class TlIntegerColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export class TlReference {
    database: string;
    isNull: boolean;
    package: string;
    tableId: string;
    constructor(arg: {database: string; isNull: boolean; package: string; tableId: string;}) {
        Object.assign(this, arg);
    }
}

export class TlTextColumn {
    isNull: boolean;
    constructor(arg: {isNull: boolean;}) {
        Object.assign(this, arg);
    }
}

export type ColumnTypeInfo = TlBinaryColumn| TlBooleanColumn| TlDatetimeColumn| TlDoubleColumn| TlIntegerColumn| TlReference| TlTextColumn

export class ColumnInfo {
    columnInfo: ColumnTypeInfo;
    description: string | null;
    name: string;
    constructor(arg: {columnInfo: ColumnTypeInfo; description: string | null; name: string;}) {
        Object.assign(this, arg);
    }
}

export class TableInfo {
    columns: Array<ColumnInfo>;
    description: string | null;
    name: string;
    table: string;
    constructor(arg: {columns: Array<ColumnInfo>; description: string | null; name: string; table: string;}) {
        Object.assign(this, arg);
    }
}