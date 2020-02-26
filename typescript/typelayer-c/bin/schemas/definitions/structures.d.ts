import * as typelayerCommonDocumentation from "typelayer-common";
export declare class Table {
    columns: Map<string, Column>;
    description: string;
    table: string;
    constructor(arg: {
        columns: Map<string, Column>;
        description: string;
        table: string;
    });
}
export declare class Structure {
    constructors: Map<string, Constructor>;
    doc: string | null;
    constructor(arg: {
        constructors: Map<string, Constructor>;
        doc: string | null;
    });
}
export declare class Service {
    doc: string | null;
    functions: Map<string, Function>;
    constructor(arg: {
        doc: string | null;
        functions: Map<string, Function>;
    });
}
export declare class Schema {
    doc: string | null;
    structures: Map<string, Structure>;
    constructor(arg: {
        doc: string | null;
        structures: Map<string, Structure>;
    });
}
export declare class Haskell {
    constructor(arg: {});
}
export declare class Python {
    constructor(arg: {});
}
export declare class Typescript {
    constructor(arg: {});
}
export declare type Language = Haskell | Python | Typescript;
export declare class Mutation {
    arguments: Map<string, Field>;
    doc: string | null;
    returns: Map<string, Field>;
    targetTable: TableReference;
    constructor(arg: {
        arguments: Map<string, Field>;
        doc: string | null;
        returns: Map<string, Field>;
        targetTable: TableReference;
    });
}
export declare class Query {
    arguments: Map<string, Field>;
    doc: string | null;
    returns: Map<string, Field>;
    constructor(arg: {
        arguments: Map<string, Field>;
        doc: string | null;
        returns: Map<string, Field>;
    });
}
export declare type Function = Mutation | Query;
export declare class Constructor {
    doc: string | null;
    fields: Map<string, Field>;
    constructor(arg: {
        doc: string | null;
        fields: Map<string, Field>;
    });
}
export declare class Column {
    column: string;
    description: string;
    type: ColumnType;
    constructor(arg: {
        column: string;
        description: string;
        type: ColumnType;
    });
}
export declare class ColumnBinary {
    constructor(arg: {});
}
export declare class ColumnBoolean {
    constructor(arg: {});
}
export declare class ColumnDateTime {
    constructor(arg: {});
}
export declare class ColumnDouble {
    constructor(arg: {});
}
export declare class ColumnEmbeded {
    id: string;
    schema: SchemaReference;
    constructor(arg: {
        id: string;
        schema: SchemaReference;
    });
}
export declare class ColumnInteger {
    constructor(arg: {});
}
export declare class ColumnText {
    constructor(arg: {});
}
export declare class ForiegnKey {
    id: string;
    table: string;
    constructor(arg: {
        id: string;
        table: string;
    });
}
export declare type ColumnType = ColumnBinary | ColumnBoolean | ColumnDateTime | ColumnDouble | ColumnEmbeded | ColumnInteger | ColumnText | ForiegnKey;
export declare class Collection {
    backend: Backend;
    description: string;
    schema: string;
    tables: Map<string, Table>;
    constructor(arg: {
        backend: Backend;
        description: string;
        schema: string;
        tables: Map<string, Table>;
    });
}
export declare class Changeset {
    changes: Array<Change>;
    constructor(arg: {
        changes: Array<Change>;
    });
}
export declare class AddColumn {
    columnId: string;
    databaseId: string;
    tableId: string;
    constructor(arg: {
        columnId: string;
        databaseId: string;
        tableId: string;
    });
}
export declare class AddDatabase {
    databaseId: string;
    constructor(arg: {
        databaseId: string;
    });
}
export declare class AddField {
    constructorId: string;
    field: Field;
    fieldId: string;
    schemaId: string;
    structureId: string;
    constructor(arg: {
        constructorId: string;
        field: Field;
        fieldId: string;
        schemaId: string;
        structureId: string;
    });
}
export declare class AddMutation {
    mutationId: string;
    serviceId: string;
    targetTable: TableReference;
    constructor(arg: {
        mutationId: string;
        serviceId: string;
        targetTable: TableReference;
    });
}
export declare class AddMutationArgument {
    argumentId: string;
    field: Field;
    mutationId: string;
    serviceId: string;
    constructor(arg: {
        argumentId: string;
        field: Field;
        mutationId: string;
        serviceId: string;
    });
}
export declare class AddMutationReturn {
    field: Field;
    mutationId: string;
    returnId: string;
    serviceId: string;
    constructor(arg: {
        field: Field;
        mutationId: string;
        returnId: string;
        serviceId: string;
    });
}
export declare class AddQuery {
    queryId: string;
    serviceId: string;
    constructor(arg: {
        queryId: string;
        serviceId: string;
    });
}
export declare class AddQueryArgument {
    argumentId: string;
    field: Field;
    queryId: string;
    serviceId: string;
    constructor(arg: {
        argumentId: string;
        field: Field;
        queryId: string;
        serviceId: string;
    });
}
export declare class AddQueryReturn {
    field: Field;
    queryId: string;
    returnId: string;
    serviceId: string;
    constructor(arg: {
        field: Field;
        queryId: string;
        returnId: string;
        serviceId: string;
    });
}
export declare class AddSchema {
    schemaId: string;
    constructor(arg: {
        schemaId: string;
    });
}
export declare class AddService {
    serviceId: string;
    constructor(arg: {
        serviceId: string;
    });
}
export declare class AddStructure {
    schemaId: string;
    structureId: string;
    constructor(arg: {
        schemaId: string;
        structureId: string;
    });
}
export declare class AddTable {
    databaseId: string;
    tableId: string;
    constructor(arg: {
        databaseId: string;
        tableId: string;
    });
}
export declare type Change = AddColumn | AddDatabase | AddField | AddMutation | AddMutationArgument | AddMutationReturn | AddQuery | AddQueryArgument | AddQueryReturn | AddSchema | AddService | AddStructure | AddTable;
export declare class TableReference {
    database: string;
    package: string;
    tableId: string;
    constructor(arg: {
        database: string;
        package: string;
        tableId: string;
    });
}
export declare class Field {
    doc: string | null;
    type: BasicType;
    constructor(arg: {
        doc: string | null;
        type: BasicType;
    });
}
export declare class BinaryType {
    constructor(arg: {});
}
export declare class BooleanType {
    constructor(arg: {});
}
export declare class DateTimeType {
    constructor(arg: {});
}
export declare class DoubleType {
    constructor(arg: {});
}
export declare class IntegerType {
    constructor(arg: {});
}
export declare class ListType {
    of: BasicType;
    constructor(arg: {
        of: BasicType;
    });
}
export declare class MapType {
    of: BasicType;
    constructor(arg: {
        of: BasicType;
    });
}
export declare class MaybeType {
    of: BasicType;
    constructor(arg: {
        of: BasicType;
    });
}
export declare class StructType {
    id: string;
    schema: SchemaReference;
    constructor(arg: {
        id: string;
        schema: SchemaReference;
    });
}
export declare class TextType {
    constructor(arg: {});
}
export declare type BasicType = BinaryType | BooleanType | DateTimeType | DoubleType | IntegerType | ListType | MapType | MaybeType | StructType | TextType;
export declare class SchemaReference {
    package: string;
    schemaId: string;
    constructor(arg: {
        package: string;
        schemaId: string;
    });
}
export declare class Database {
    constructor(arg: {});
}
export declare class Simple {
    constructor(arg: {});
}
export declare type Backend = Database | Simple;
export declare class ApplyChangesProxy {
    aChanges: Array<Change>;
    changes: Array<Change>;
    package: Package;
    zChanges: Array<Change>;
    constructor(arg: {
        aChanges: Array<Change>;
        changes: Array<Change>;
        package: Package;
        zChanges: Array<Change>;
    });
}
export declare class Package {
    collections: Map<string, Collection>;
    doc: string | null;
    id: string;
    schemas: Map<string, Schema>;
    services: Map<string, Service>;
    version: string;
    constructor(arg: {
        collections: Map<string, Collection>;
        doc: string | null;
        id: string;
        schemas: Map<string, Schema>;
        services: Map<string, Service>;
        version: string;
    });
}
export declare function defaultTable(): Table;
export declare function describeTable(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultStructure(): Structure;
export declare function describeStructure(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultService(): Service;
export declare function describeService(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultSchema(): Schema;
export declare function describeSchema(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultLanguage(): Haskell;
export declare function defaultHaskell(): Haskell;
export declare function defaultPython(): Python;
export declare function defaultTypescript(): Typescript;
export declare function describeLanguage(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultFunction(): Mutation;
export declare function defaultMutation(): Mutation;
export declare function defaultQuery(): Query;
export declare function describeFunction(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultConstructor(): Constructor;
export declare function describeConstructor(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultColumn(): Column;
export declare function describeColumn(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultColumnType(): ColumnBinary;
export declare function defaultColumnBinary(): ColumnBinary;
export declare function defaultColumnBoolean(): ColumnBoolean;
export declare function defaultColumnDateTime(): ColumnDateTime;
export declare function defaultColumnDouble(): ColumnDouble;
export declare function defaultColumnEmbeded(): ColumnEmbeded;
export declare function defaultColumnInteger(): ColumnInteger;
export declare function defaultColumnText(): ColumnText;
export declare function defaultForiegnKey(): ForiegnKey;
export declare function describeColumnType(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultCollection(): Collection;
export declare function describeCollection(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultChangeset(): Changeset;
export declare function describeChangeset(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultChange(): AddColumn;
export declare function defaultAddColumn(): AddColumn;
export declare function defaultAddDatabase(): AddDatabase;
export declare function defaultAddField(): AddField;
export declare function defaultAddMutation(): AddMutation;
export declare function defaultAddMutationArgument(): AddMutationArgument;
export declare function defaultAddMutationReturn(): AddMutationReturn;
export declare function defaultAddQuery(): AddQuery;
export declare function defaultAddQueryArgument(): AddQueryArgument;
export declare function defaultAddQueryReturn(): AddQueryReturn;
export declare function defaultAddSchema(): AddSchema;
export declare function defaultAddService(): AddService;
export declare function defaultAddStructure(): AddStructure;
export declare function defaultAddTable(): AddTable;
export declare function describeChange(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultTableReference(): TableReference;
export declare function describeTableReference(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultField(): Field;
export declare function describeField(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultBasicType(): BinaryType;
export declare function defaultBinaryType(): BinaryType;
export declare function defaultBooleanType(): BooleanType;
export declare function defaultDateTimeType(): DateTimeType;
export declare function defaultDoubleType(): DoubleType;
export declare function defaultIntegerType(): IntegerType;
export declare function defaultListType(): ListType;
export declare function defaultMapType(): MapType;
export declare function defaultMaybeType(): MaybeType;
export declare function defaultStructType(): StructType;
export declare function defaultTextType(): TextType;
export declare function describeBasicType(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultSchemaReference(): SchemaReference;
export declare function describeSchemaReference(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultBackend(): Database;
export declare function defaultDatabase(): Database;
export declare function defaultSimple(): Simple;
export declare function describeBackend(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultApplyChangesProxy(): ApplyChangesProxy;
export declare function describeApplyChangesProxy(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultPackage(): Package;
export declare function describePackage(): typelayerCommonDocumentation.StructureInfo;
