export declare class TlBinary {
    constructor(arg: {});
}
export declare class TlBoolean {
    constructor(arg: {});
}
export declare class TlDatetime {
    constructor(arg: {});
}
export declare class TlDouble {
    constructor(arg: {});
}
export declare class TlInteger {
    constructor(arg: {});
}
export declare class TlList {
    listInner: TypeInfo;
    constructor(arg: {
        listInner: TypeInfo;
    });
}
export declare class TlMap {
    mapInner: TypeInfo;
    constructor(arg: {
        mapInner: TypeInfo;
    });
}
export declare class TlMaybe {
    maybeInner: TypeInfo;
    constructor(arg: {
        maybeInner: TypeInfo;
    });
}
export declare class TlStructure {
    package: string;
    schema: string;
    structureId: string;
    constructor(arg: {
        package: string;
        schema: string;
        structureId: string;
    });
}
export declare class TlText {
    constructor(arg: {});
}
export declare type TypeInfo = TlBinary | TlBoolean | TlDatetime | TlDouble | TlInteger | TlList | TlMap | TlMaybe | TlStructure | TlText;
export declare class FieldDescription {
    description: string | null;
    name: string;
    typeInfo: TypeInfo;
    constructor(arg: {
        description: string | null;
        name: string;
        typeInfo: TypeInfo;
    });
}
export declare class FunctionDescription {
    description: string | null;
    inputs: Array<FieldDescription>;
    name: string;
    outputs: Array<FieldDescription>;
    constructor(arg: {
        description: string | null;
        inputs: Array<FieldDescription>;
        name: string;
        outputs: Array<FieldDescription>;
    });
}
export declare class ServiceDescription {
    description: string | null;
    functions: Array<FunctionDescription>;
    name: string;
    constructor(arg: {
        description: string | null;
        functions: Array<FunctionDescription>;
        name: string;
    });
}
export declare class ConstructorInfo {
    description: string | null;
    fields: Array<FieldDescription>;
    name: string;
    constructor(arg: {
        description: string | null;
        fields: Array<FieldDescription>;
        name: string;
    });
}
export declare class StructureInfo {
    constructors: Array<ConstructorInfo>;
    description: string | null;
    structureId: string;
    structureType: StructureType;
    constructor(arg: {
        constructors: Array<ConstructorInfo>;
        description: string | null;
        structureId: string;
        structureType: StructureType;
    });
}
export declare class StructureEnum {
    constructor(arg: {});
}
export declare class StructureSimple {
    constructor(arg: {});
}
export declare type StructureType = StructureEnum | StructureSimple;
export declare class ApplicationDescription {
    description: string | null;
    name: string;
    services: Array<ServiceDescription>;
    constructor(arg: {
        description: string | null;
        name: string;
        services: Array<ServiceDescription>;
    });
}
export declare class TlBinaryColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare class TlBooleanColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare class TlDatetimeColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare class TlDoubleColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare class TlIntegerColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare class TlReference {
    database: string;
    isNull: boolean;
    package: string;
    tableId: string;
    constructor(arg: {
        database: string;
        isNull: boolean;
        package: string;
        tableId: string;
    });
}
export declare class TlTextColumn {
    isNull: boolean;
    constructor(arg: {
        isNull: boolean;
    });
}
export declare type ColumnTypeInfo = TlBinaryColumn | TlBooleanColumn | TlDatetimeColumn | TlDoubleColumn | TlIntegerColumn | TlReference | TlTextColumn;
export declare class ColumnInfo {
    columnInfo: ColumnTypeInfo;
    description: string | null;
    name: string;
    constructor(arg: {
        columnInfo: ColumnTypeInfo;
        description: string | null;
        name: string;
    });
}
export declare class TableInfo {
    columns: Array<ColumnInfo>;
    description: string | null;
    name: string;
    table: string;
    constructor(arg: {
        columns: Array<ColumnInfo>;
        description: string | null;
        name: string;
        table: string;
    });
}
