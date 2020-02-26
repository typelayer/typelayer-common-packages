// Module: schemas.definitions.structures
import * as typelayerCommonDocumentation from "typelayer-common";

export class Table {
  columns: Map<string, Column>;
  description: string;
  table: string;
  constructor(arg: {
    columns: Map<string, Column>;
    description: string;
    table: string;
  }) {
    Object.assign(this, arg);
  }
}

export class Structure {
  constructors: Map<string, Constructor>;
  doc: string | null;
  constructor(arg: {
    constructors: Map<string, Constructor>;
    doc: string | null;
  }) {
    Object.assign(this, arg);
  }
}

export class Service {
  doc: string | null;
  functions: Map<string, Function>;
  constructor(arg: { doc: string | null; functions: Map<string, Function> }) {
    Object.assign(this, arg);
  }
}

export class Schema {
  doc: string | null;
  structures: Map<string, Structure>;
  constructor(arg: { doc: string | null; structures: Map<string, Structure> }) {
    Object.assign(this, arg);
  }
}

export class Haskell {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class Python {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class Typescript {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export type Language = Haskell | Python | Typescript;

export class Mutation {
  arguments: Map<string, Field>;
  doc: string | null;
  returns: Map<string, Field>;
  targetTable: TableReference;
  constructor(arg: {
    arguments: Map<string, Field>;
    doc: string | null;
    returns: Map<string, Field>;
    targetTable: TableReference;
  }) {
    Object.assign(this, arg);
  }
}

export class Query {
  arguments: Map<string, Field>;
  doc: string | null;
  returns: Map<string, Field>;
  constructor(arg: {
    arguments: Map<string, Field>;
    doc: string | null;
    returns: Map<string, Field>;
  }) {
    Object.assign(this, arg);
  }
}

export type Function = Mutation | Query;

export class Constructor {
  doc: string | null;
  fields: Map<string, Field>;
  constructor(arg: { doc: string | null; fields: Map<string, Field> }) {
    Object.assign(this, arg);
  }
}

export class Column {
  column: string;
  description: string;
  type: ColumnType;
  constructor(arg: { column: string; description: string; type: ColumnType }) {
    Object.assign(this, arg);
  }
}

export class ColumnBinary {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ColumnBoolean {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ColumnDateTime {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ColumnDouble {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ColumnEmbeded {
  id: string;
  schema: SchemaReference;
  constructor(arg: { id: string; schema: SchemaReference }) {
    Object.assign(this, arg);
  }
}

export class ColumnInteger {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ColumnText {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ForiegnKey {
  id: string;
  table: string;
  constructor(arg: { id: string; table: string }) {
    Object.assign(this, arg);
  }
}

export type ColumnType =
  | ColumnBinary
  | ColumnBoolean
  | ColumnDateTime
  | ColumnDouble
  | ColumnEmbeded
  | ColumnInteger
  | ColumnText
  | ForiegnKey;

export class Collection {
  backend: Backend;
  description: string;
  schema: string;
  tables: Map<string, Table>;
  constructor(arg: {
    backend: Backend;
    description: string;
    schema: string;
    tables: Map<string, Table>;
  }) {
    Object.assign(this, arg);
  }
}

export class Changeset {
  changes: Array<Change>;
  constructor(arg: { changes: Array<Change> }) {
    Object.assign(this, arg);
  }
}

export class AddColumn {
  columnId: string;
  databaseId: string;
  tableId: string;
  constructor(arg: { columnId: string; databaseId: string; tableId: string }) {
    Object.assign(this, arg);
  }
}

export class AddDatabase {
  databaseId: string;
  constructor(arg: { databaseId: string }) {
    Object.assign(this, arg);
  }
}

export class AddField {
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
  }) {
    Object.assign(this, arg);
  }
}

export class AddMutation {
  mutationId: string;
  serviceId: string;
  targetTable: TableReference;
  constructor(arg: {
    mutationId: string;
    serviceId: string;
    targetTable: TableReference;
  }) {
    Object.assign(this, arg);
  }
}

export class AddMutationArgument {
  argumentId: string;
  field: Field;
  mutationId: string;
  serviceId: string;
  constructor(arg: {
    argumentId: string;
    field: Field;
    mutationId: string;
    serviceId: string;
  }) {
    Object.assign(this, arg);
  }
}

export class AddMutationReturn {
  field: Field;
  mutationId: string;
  returnId: string;
  serviceId: string;
  constructor(arg: {
    field: Field;
    mutationId: string;
    returnId: string;
    serviceId: string;
  }) {
    Object.assign(this, arg);
  }
}

export class AddQuery {
  queryId: string;
  serviceId: string;
  constructor(arg: { queryId: string; serviceId: string }) {
    Object.assign(this, arg);
  }
}

export class AddQueryArgument {
  argumentId: string;
  field: Field;
  queryId: string;
  serviceId: string;
  constructor(arg: {
    argumentId: string;
    field: Field;
    queryId: string;
    serviceId: string;
  }) {
    Object.assign(this, arg);
  }
}

export class AddQueryReturn {
  field: Field;
  queryId: string;
  returnId: string;
  serviceId: string;
  constructor(arg: {
    field: Field;
    queryId: string;
    returnId: string;
    serviceId: string;
  }) {
    Object.assign(this, arg);
  }
}

export class AddSchema {
  schemaId: string;
  constructor(arg: { schemaId: string }) {
    Object.assign(this, arg);
  }
}

export class AddService {
  serviceId: string;
  constructor(arg: { serviceId: string }) {
    Object.assign(this, arg);
  }
}

export class AddStructure {
  schemaId: string;
  structureId: string;
  constructor(arg: { schemaId: string; structureId: string }) {
    Object.assign(this, arg);
  }
}

export class AddTable {
  databaseId: string;
  tableId: string;
  constructor(arg: { databaseId: string; tableId: string }) {
    Object.assign(this, arg);
  }
}

export type Change =
  | AddColumn
  | AddDatabase
  | AddField
  | AddMutation
  | AddMutationArgument
  | AddMutationReturn
  | AddQuery
  | AddQueryArgument
  | AddQueryReturn
  | AddSchema
  | AddService
  | AddStructure
  | AddTable;

export class TableReference {
  database: string;
  package: string;
  tableId: string;
  constructor(arg: { database: string; package: string; tableId: string }) {
    Object.assign(this, arg);
  }
}

export class Field {
  doc: string | null;
  type: BasicType;
  constructor(arg: { doc: string | null; type: BasicType }) {
    Object.assign(this, arg);
  }
}

export class BinaryType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class BooleanType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class DateTimeType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class DoubleType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class IntegerType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class ListType {
  of: BasicType;
  constructor(arg: { of: BasicType }) {
    Object.assign(this, arg);
  }
}

export class MapType {
  of: BasicType;
  constructor(arg: { of: BasicType }) {
    Object.assign(this, arg);
  }
}

export class MaybeType {
  of: BasicType;
  constructor(arg: { of: BasicType }) {
    Object.assign(this, arg);
  }
}

export class StructType {
  id: string;
  schema: SchemaReference;
  constructor(arg: { id: string; schema: SchemaReference }) {
    Object.assign(this, arg);
  }
}

export class TextType {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export type BasicType =
  | BinaryType
  | BooleanType
  | DateTimeType
  | DoubleType
  | IntegerType
  | ListType
  | MapType
  | MaybeType
  | StructType
  | TextType;

export class SchemaReference {
  package: string;
  schemaId: string;
  constructor(arg: { package: string; schemaId: string }) {
    Object.assign(this, arg);
  }
}

export class Database {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export class Simple {
  constructor(arg: {}) {
    Object.assign(this, arg);
  }
}

export type Backend = Database | Simple;

export class ApplyChangesProxy {
  aChanges: Array<Change>;
  changes: Array<Change>;
  package: Package;
  zChanges: Array<Change>;
  constructor(arg: {
    aChanges: Array<Change>;
    changes: Array<Change>;
    package: Package;
    zChanges: Array<Change>;
  }) {
    Object.assign(this, arg);
  }
}

export class Package {
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
  }) {
    Object.assign(this, arg);
  }
}

export function defaultTable(): Table {
  let columnsVal: Map<string, Column>;
  let descriptionVal: string;
  let tableVal: string;
  columnsVal = new Map([]);
  descriptionVal = "";
  tableVal = "";
  return new Table({
    columns: columnsVal,
    description: descriptionVal,
    table: tableVal
  });
}

export function describeTable(): typelayerCommonDocumentation.StructureInfo {
  let columnsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let columnsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let descriptionFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableColumnsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let tableConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let tableDescriptionFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let tableFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableTableFieldInfo: typelayerCommonDocumentation.FieldDescription;
  columnsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "column"
  });
  columnsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: columnsInnerFieldInfo
  });
  tableColumnsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "columns",
    description: null,
    typeInfo: columnsFieldInfo
  });
  descriptionFieldInfo = new typelayerCommonDocumentation.TlText({});
  tableDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "description", description: null, typeInfo: descriptionFieldInfo }
  );
  tableFieldInfo = new typelayerCommonDocumentation.TlText({});
  tableTableFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "table",
    description: null,
    typeInfo: tableFieldInfo
  });
  tableConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "table",
    description: null,
    fields: [
      tableColumnsFieldInfo,
      tableDescriptionFieldInfo,
      tableTableFieldInfo
    ]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "table",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [tableConstructorInfo]
  });
}

export function defaultStructure(): Structure {
  let constructorsVal: Map<string, Constructor>;
  let docVal: string | null;
  constructorsVal = new Map([]);
  docVal = null;
  return new Structure({ constructors: constructorsVal, doc: docVal });
}

export function describeStructure(): typelayerCommonDocumentation.StructureInfo {
  let constructorsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let constructorsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let structureConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let structureConstructorsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let structureDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  constructorsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "constructor"
  });
  constructorsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: constructorsInnerFieldInfo
  });
  structureConstructorsFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "constructors", description: null, typeInfo: constructorsFieldInfo }
  );
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  structureDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  structureConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "structure",
    description: null,
    fields: [structureConstructorsFieldInfo, structureDocFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "structure",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [structureConstructorInfo]
  });
}

export function defaultService(): Service {
  let docVal: string | null;
  let functionsVal: Map<string, Function>;
  docVal = null;
  functionsVal = new Map([]);
  return new Service({ doc: docVal, functions: functionsVal });
}

export function describeService(): typelayerCommonDocumentation.StructureInfo {
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let functionsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let functionsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let serviceConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let serviceDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let serviceFunctionsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  serviceDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  functionsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "function"
  });
  functionsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: functionsInnerFieldInfo
  });
  serviceFunctionsFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "functions", description: null, typeInfo: functionsFieldInfo }
  );
  serviceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "service",
    description: null,
    fields: [serviceDocFieldInfo, serviceFunctionsFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "service",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [serviceConstructorInfo]
  });
}

export function defaultSchema(): Schema {
  let docVal: string | null;
  let structuresVal: Map<string, Structure>;
  docVal = null;
  structuresVal = new Map([]);
  return new Schema({ doc: docVal, structures: structuresVal });
}

export function describeSchema(): typelayerCommonDocumentation.StructureInfo {
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let schemaDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let schemaStructuresFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let structuresFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let structuresInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  schemaDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  structuresInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "structure"
  });
  structuresFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: structuresInnerFieldInfo
  });
  schemaStructuresFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "structures", description: null, typeInfo: structuresFieldInfo }
  );
  schemaConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "schema",
    description: null,
    fields: [schemaDocFieldInfo, schemaStructuresFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "schema",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [schemaConstructorInfo]
  });
}

export function defaultLanguage(): Haskell {
  return new Haskell({});
}

export function defaultHaskell(): Haskell {
  return new Haskell({});
}

export function defaultPython(): Python {
  return new Python({});
}

export function defaultTypescript(): Typescript {
  return new Typescript({});
}

export function describeLanguage(): typelayerCommonDocumentation.StructureInfo {
  let haskellConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let pythonConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let typescriptConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  haskellConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "haskell",
    description: null,
    fields: []
  });
  pythonConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "python",
    description: null,
    fields: []
  });
  typescriptConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "typescript",
    description: null,
    fields: []
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "language",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [
      haskellConstructorInfo,
      pythonConstructorInfo,
      typescriptConstructorInfo
    ]
  });
}

export function defaultFunction(): Mutation {
  let argumentsVal: Map<string, Field>;
  let docVal: string | null;
  let returnsVal: Map<string, Field>;
  let targetTableVal: TableReference;
  argumentsVal = new Map([]);
  docVal = null;
  returnsVal = new Map([]);
  targetTableVal = defaultTableReference();
  return new Mutation({
    arguments: argumentsVal,
    doc: docVal,
    returns: returnsVal,
    targetTable: targetTableVal
  });
}

export function defaultMutation(): Mutation {
  let argumentsVal: Map<string, Field>;
  let docVal: string | null;
  let returnsVal: Map<string, Field>;
  let targetTableVal: TableReference;
  argumentsVal = new Map([]);
  docVal = null;
  returnsVal = new Map([]);
  targetTableVal = defaultTableReference();
  return new Mutation({
    arguments: argumentsVal,
    doc: docVal,
    returns: returnsVal,
    targetTable: targetTableVal
  });
}

export function defaultQuery(): Query {
  let argumentsVal: Map<string, Field>;
  let docVal: string | null;
  let returnsVal: Map<string, Field>;
  argumentsVal = new Map([]);
  docVal = null;
  returnsVal = new Map([]);
  return new Query({
    arguments: argumentsVal,
    doc: docVal,
    returns: returnsVal
  });
}

export function describeFunction(): typelayerCommonDocumentation.StructureInfo {
  let argumentsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let argumentsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let mutationArgumentsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let mutationConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let mutationDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let mutationReturnsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let mutationTargetTableFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let queryArgumentsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let queryConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let queryDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let queryReturnsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let returnsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let returnsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let targetTableFieldInfo: typelayerCommonDocumentation.TypeInfo;
  argumentsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  argumentsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: argumentsInnerFieldInfo
  });
  mutationArgumentsFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "arguments", description: null, typeInfo: argumentsFieldInfo }
  );
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  mutationDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  returnsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  returnsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: returnsInnerFieldInfo
  });
  mutationReturnsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "returns",
    description: null,
    typeInfo: returnsFieldInfo
  });
  targetTableFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "table_reference"
  });
  mutationTargetTableFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "target_table", description: null, typeInfo: targetTableFieldInfo }
  );
  mutationConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "mutation",
    description: null,
    fields: [
      mutationArgumentsFieldInfo,
      mutationDocFieldInfo,
      mutationReturnsFieldInfo,
      mutationTargetTableFieldInfo
    ]
  });
  argumentsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  argumentsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: argumentsInnerFieldInfo
  });
  queryArgumentsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "arguments",
    description: null,
    typeInfo: argumentsFieldInfo
  });
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  queryDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  returnsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  returnsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: returnsInnerFieldInfo
  });
  queryReturnsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "returns",
    description: null,
    typeInfo: returnsFieldInfo
  });
  queryConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "query",
    description: null,
    fields: [queryArgumentsFieldInfo, queryDocFieldInfo, queryReturnsFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "function",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [mutationConstructorInfo, queryConstructorInfo]
  });
}

export function defaultConstructor(): Constructor {
  let docVal: string | null;
  let fieldsVal: Map<string, Field>;
  docVal = null;
  fieldsVal = new Map([]);
  return new Constructor({ doc: docVal, fields: fieldsVal });
}

export function describeConstructor(): typelayerCommonDocumentation.StructureInfo {
  let constructorConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let constructorDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let constructorFieldsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fieldsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fieldsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  constructorDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  fieldsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  fieldsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: fieldsInnerFieldInfo
  });
  constructorFieldsFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "fields", description: null, typeInfo: fieldsFieldInfo }
  );
  constructorConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "constructor",
      description: null,
      fields: [constructorDocFieldInfo, constructorFieldsFieldInfo]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "constructor",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [constructorConstructorInfo]
  });
}

export function defaultColumn(): Column {
  let columnVal: string;
  let descriptionVal: string;
  let typeVal: ColumnType;
  columnVal = "";
  descriptionVal = "";
  typeVal = defaultColumnType();
  return new Column({
    column: columnVal,
    description: descriptionVal,
    type: typeVal
  });
}

export function describeColumn(): typelayerCommonDocumentation.StructureInfo {
  let columnColumnFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let columnConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnDescriptionFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let columnFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let columnTypeFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let descriptionFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let typeFieldInfo: typelayerCommonDocumentation.TypeInfo;
  columnFieldInfo = new typelayerCommonDocumentation.TlText({});
  columnColumnFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "column",
    description: null,
    typeInfo: columnFieldInfo
  });
  descriptionFieldInfo = new typelayerCommonDocumentation.TlText({});
  columnDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "description", description: null, typeInfo: descriptionFieldInfo }
  );
  typeFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "column_type"
  });
  columnTypeFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "type",
    description: null,
    typeInfo: typeFieldInfo
  });
  columnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "column",
    description: null,
    fields: [
      columnColumnFieldInfo,
      columnDescriptionFieldInfo,
      columnTypeFieldInfo
    ]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "column",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [columnConstructorInfo]
  });
}

export function defaultColumnType(): ColumnBinary {
  return new ColumnBinary({});
}

export function defaultColumnBinary(): ColumnBinary {
  return new ColumnBinary({});
}

export function defaultColumnBoolean(): ColumnBoolean {
  return new ColumnBoolean({});
}

export function defaultColumnDateTime(): ColumnDateTime {
  return new ColumnDateTime({});
}

export function defaultColumnDouble(): ColumnDouble {
  return new ColumnDouble({});
}

export function defaultColumnEmbeded(): ColumnEmbeded {
  let idVal: string;
  let schemaVal: SchemaReference;
  idVal = "";
  schemaVal = defaultSchemaReference();
  return new ColumnEmbeded({ id: idVal, schema: schemaVal });
}

export function defaultColumnInteger(): ColumnInteger {
  return new ColumnInteger({});
}

export function defaultColumnText(): ColumnText {
  return new ColumnText({});
}

export function defaultForiegnKey(): ForiegnKey {
  let idVal: string;
  let tableVal: string;
  idVal = "";
  tableVal = "";
  return new ForiegnKey({ id: idVal, table: tableVal });
}

export function describeColumnType(): typelayerCommonDocumentation.StructureInfo {
  let columnBinaryConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnBooleanConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnDateTimeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnDoubleConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnEmbededConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnEmbededIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let columnEmbededSchemaFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let columnIntegerConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let columnTextConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let foriegnKeyConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let foriegnKeyIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let foriegnKeyTableFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let idFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableFieldInfo: typelayerCommonDocumentation.TypeInfo;
  columnBinaryConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "column_binary", description: null, fields: [] }
  );
  columnBooleanConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "column_boolean", description: null, fields: [] }
  );
  columnDateTimeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "column_date_time", description: null, fields: [] }
  );
  columnDoubleConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "column_double", description: null, fields: [] }
  );
  idFieldInfo = new typelayerCommonDocumentation.TlText({});
  columnEmbededIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "id",
    description: null,
    typeInfo: idFieldInfo
  });
  schemaFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "schema_reference"
  });
  columnEmbededSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema", description: null, typeInfo: schemaFieldInfo }
  );
  columnEmbededConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "column_embeded",
      description: null,
      fields: [columnEmbededIdFieldInfo, columnEmbededSchemaFieldInfo]
    }
  );
  columnIntegerConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "column_integer", description: null, fields: [] }
  );
  columnTextConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "column_text",
    description: null,
    fields: []
  });
  idFieldInfo = new typelayerCommonDocumentation.TlText({});
  foriegnKeyIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "id",
    description: null,
    typeInfo: idFieldInfo
  });
  tableFieldInfo = new typelayerCommonDocumentation.TlText({});
  foriegnKeyTableFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "table",
    description: null,
    typeInfo: tableFieldInfo
  });
  foriegnKeyConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "foriegn_key",
    description: null,
    fields: [foriegnKeyIdFieldInfo, foriegnKeyTableFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "column_type",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [
      columnBinaryConstructorInfo,
      columnBooleanConstructorInfo,
      columnDateTimeConstructorInfo,
      columnDoubleConstructorInfo,
      columnEmbededConstructorInfo,
      columnIntegerConstructorInfo,
      columnTextConstructorInfo,
      foriegnKeyConstructorInfo
    ]
  });
}

export function defaultCollection(): Collection {
  let backendVal: Backend;
  let descriptionVal: string;
  let schemaVal: string;
  let tablesVal: Map<string, Table>;
  backendVal = defaultBackend();
  descriptionVal = "";
  schemaVal = "";
  tablesVal = new Map([]);
  return new Collection({
    backend: backendVal,
    description: descriptionVal,
    schema: schemaVal,
    tables: tablesVal
  });
}

export function describeCollection(): typelayerCommonDocumentation.StructureInfo {
  let backendFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let collectionBackendFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let collectionConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let collectionDescriptionFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let collectionSchemaFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let collectionTablesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let descriptionFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tablesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tablesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  backendFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "backend"
  });
  collectionBackendFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "backend", description: null, typeInfo: backendFieldInfo }
  );
  descriptionFieldInfo = new typelayerCommonDocumentation.TlText({});
  collectionDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "description", description: null, typeInfo: descriptionFieldInfo }
  );
  schemaFieldInfo = new typelayerCommonDocumentation.TlText({});
  collectionSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema", description: null, typeInfo: schemaFieldInfo }
  );
  tablesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "table"
  });
  tablesFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: tablesInnerFieldInfo
  });
  collectionTablesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "tables", description: null, typeInfo: tablesFieldInfo }
  );
  collectionConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "collection",
    description: null,
    fields: [
      collectionBackendFieldInfo,
      collectionDescriptionFieldInfo,
      collectionSchemaFieldInfo,
      collectionTablesFieldInfo
    ]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "collection",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [collectionConstructorInfo]
  });
}

export function defaultChangeset(): Changeset {
  let changesVal: Array<Change>;
  changesVal = [];
  return new Changeset({ changes: changesVal });
}

export function describeChangeset(): typelayerCommonDocumentation.StructureInfo {
  let changesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesetChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let changesetConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  changesetChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "changes", description: null, typeInfo: changesFieldInfo }
  );
  changesetConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "changeset",
    description: null,
    fields: [changesetChangesFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "changeset",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [changesetConstructorInfo]
  });
}

export function defaultChange(): AddColumn {
  let columnIdVal: string;
  let databaseIdVal: string;
  let tableIdVal: string;
  columnIdVal = "";
  databaseIdVal = "";
  tableIdVal = "";
  return new AddColumn({
    columnId: columnIdVal,
    databaseId: databaseIdVal,
    tableId: tableIdVal
  });
}

export function defaultAddColumn(): AddColumn {
  let columnIdVal: string;
  let databaseIdVal: string;
  let tableIdVal: string;
  columnIdVal = "";
  databaseIdVal = "";
  tableIdVal = "";
  return new AddColumn({
    columnId: columnIdVal,
    databaseId: databaseIdVal,
    tableId: tableIdVal
  });
}

export function defaultAddDatabase(): AddDatabase {
  let databaseIdVal: string;
  databaseIdVal = "";
  return new AddDatabase({ databaseId: databaseIdVal });
}

export function defaultAddField(): AddField {
  let constructorIdVal: string;
  let fieldIdVal: string;
  let fieldVal: Field;
  let schemaIdVal: string;
  let structureIdVal: string;
  constructorIdVal = "";
  fieldVal = defaultField();
  fieldIdVal = "";
  schemaIdVal = "";
  structureIdVal = "";
  return new AddField({
    constructorId: constructorIdVal,
    field: fieldVal,
    fieldId: fieldIdVal,
    schemaId: schemaIdVal,
    structureId: structureIdVal
  });
}

export function defaultAddMutation(): AddMutation {
  let mutationIdVal: string;
  let serviceIdVal: string;
  let targetTableVal: TableReference;
  mutationIdVal = "";
  serviceIdVal = "";
  targetTableVal = defaultTableReference();
  return new AddMutation({
    mutationId: mutationIdVal,
    serviceId: serviceIdVal,
    targetTable: targetTableVal
  });
}

export function defaultAddMutationArgument(): AddMutationArgument {
  let argumentIdVal: string;
  let fieldVal: Field;
  let mutationIdVal: string;
  let serviceIdVal: string;
  argumentIdVal = "";
  fieldVal = defaultField();
  mutationIdVal = "";
  serviceIdVal = "";
  return new AddMutationArgument({
    argumentId: argumentIdVal,
    field: fieldVal,
    mutationId: mutationIdVal,
    serviceId: serviceIdVal
  });
}

export function defaultAddMutationReturn(): AddMutationReturn {
  let fieldVal: Field;
  let mutationIdVal: string;
  let returnIdVal: string;
  let serviceIdVal: string;
  fieldVal = defaultField();
  mutationIdVal = "";
  returnIdVal = "";
  serviceIdVal = "";
  return new AddMutationReturn({
    field: fieldVal,
    mutationId: mutationIdVal,
    returnId: returnIdVal,
    serviceId: serviceIdVal
  });
}

export function defaultAddQuery(): AddQuery {
  let queryIdVal: string;
  let serviceIdVal: string;
  queryIdVal = "";
  serviceIdVal = "";
  return new AddQuery({ queryId: queryIdVal, serviceId: serviceIdVal });
}

export function defaultAddQueryArgument(): AddQueryArgument {
  let argumentIdVal: string;
  let fieldVal: Field;
  let queryIdVal: string;
  let serviceIdVal: string;
  argumentIdVal = "";
  fieldVal = defaultField();
  queryIdVal = "";
  serviceIdVal = "";
  return new AddQueryArgument({
    argumentId: argumentIdVal,
    field: fieldVal,
    queryId: queryIdVal,
    serviceId: serviceIdVal
  });
}

export function defaultAddQueryReturn(): AddQueryReturn {
  let fieldVal: Field;
  let queryIdVal: string;
  let returnIdVal: string;
  let serviceIdVal: string;
  fieldVal = defaultField();
  queryIdVal = "";
  returnIdVal = "";
  serviceIdVal = "";
  return new AddQueryReturn({
    field: fieldVal,
    queryId: queryIdVal,
    returnId: returnIdVal,
    serviceId: serviceIdVal
  });
}

export function defaultAddSchema(): AddSchema {
  let schemaIdVal: string;
  schemaIdVal = "";
  return new AddSchema({ schemaId: schemaIdVal });
}

export function defaultAddService(): AddService {
  let serviceIdVal: string;
  serviceIdVal = "";
  return new AddService({ serviceId: serviceIdVal });
}

export function defaultAddStructure(): AddStructure {
  let schemaIdVal: string;
  let structureIdVal: string;
  schemaIdVal = "";
  structureIdVal = "";
  return new AddStructure({
    schemaId: schemaIdVal,
    structureId: structureIdVal
  });
}

export function defaultAddTable(): AddTable {
  let databaseIdVal: string;
  let tableIdVal: string;
  databaseIdVal = "";
  tableIdVal = "";
  return new AddTable({ databaseId: databaseIdVal, tableId: tableIdVal });
}

export function describeChange(): typelayerCommonDocumentation.StructureInfo {
  let addColumnColumnIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addColumnConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addColumnDatabaseIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addColumnTableIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addDatabaseConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addDatabaseDatabaseIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addFieldConstructorIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addFieldConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addFieldFieldFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addFieldFieldIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addFieldSchemaIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addFieldStructureIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationArgumentArgumentIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationArgumentConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addMutationArgumentFieldFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationArgumentMutationIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationArgumentServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addMutationMutationIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationReturnConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addMutationReturnFieldFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationReturnMutationIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationReturnReturnIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationReturnServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addMutationTargetTableFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryArgumentArgumentIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryArgumentConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addQueryArgumentFieldFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryArgumentQueryIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryArgumentServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addQueryQueryIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryReturnConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addQueryReturnFieldFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryReturnQueryIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryReturnReturnIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryReturnServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addQueryServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addSchemaConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addSchemaSchemaIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addServiceConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addServiceServiceIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addStructureConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addStructureSchemaIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addStructureStructureIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addTableConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let addTableDatabaseIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let addTableTableIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let argumentIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let columnIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let constructorIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let databaseIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fieldFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fieldIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let mutationIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let queryIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let returnIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let serviceIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let structureIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let targetTableFieldInfo: typelayerCommonDocumentation.TypeInfo;
  columnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addColumnColumnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "column_id", description: null, typeInfo: columnIdFieldInfo }
  );
  databaseIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addColumnDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "database_id", description: null, typeInfo: databaseIdFieldInfo }
  );
  tableIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addColumnTableIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "table_id", description: null, typeInfo: tableIdFieldInfo }
  );
  addColumnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_column",
    description: null,
    fields: [
      addColumnColumnIdFieldInfo,
      addColumnDatabaseIdFieldInfo,
      addColumnTableIdFieldInfo
    ]
  });
  databaseIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addDatabaseDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "database_id", description: null, typeInfo: databaseIdFieldInfo }
  );
  addDatabaseConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_database",
      description: null,
      fields: [addDatabaseDatabaseIdFieldInfo]
    }
  );
  constructorIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addFieldConstructorIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    {
      name: "constructor_id",
      description: null,
      typeInfo: constructorIdFieldInfo
    }
  );
  fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  addFieldFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "field",
    description: null,
    typeInfo: fieldFieldInfo
  });
  fieldIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addFieldFieldIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "field_id",
    description: null,
    typeInfo: fieldIdFieldInfo
  });
  schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addFieldSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema_id", description: null, typeInfo: schemaIdFieldInfo }
  );
  structureIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addFieldStructureIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "structure_id", description: null, typeInfo: structureIdFieldInfo }
  );
  addFieldConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_field",
    description: null,
    fields: [
      addFieldConstructorIdFieldInfo,
      addFieldFieldFieldInfo,
      addFieldFieldIdFieldInfo,
      addFieldSchemaIdFieldInfo,
      addFieldStructureIdFieldInfo
    ]
  });
  mutationIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo }
  );
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  targetTableFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "table_reference"
  });
  addMutationTargetTableFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "target_table", description: null, typeInfo: targetTableFieldInfo }
  );
  addMutationConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_mutation",
      description: null,
      fields: [
        addMutationMutationIdFieldInfo,
        addMutationServiceIdFieldInfo,
        addMutationTargetTableFieldInfo
      ]
    }
  );
  argumentIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationArgumentArgumentIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "argument_id", description: null, typeInfo: argumentIdFieldInfo }
  );
  fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  addMutationArgumentFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "field", description: null, typeInfo: fieldFieldInfo }
  );
  mutationIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationArgumentMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo }
  );
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationArgumentServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addMutationArgumentConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_mutation_argument",
      description: null,
      fields: [
        addMutationArgumentArgumentIdFieldInfo,
        addMutationArgumentFieldFieldInfo,
        addMutationArgumentMutationIdFieldInfo,
        addMutationArgumentServiceIdFieldInfo
      ]
    }
  );
  fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  addMutationReturnFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "field", description: null, typeInfo: fieldFieldInfo }
  );
  mutationIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationReturnMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo }
  );
  returnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationReturnReturnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "return_id", description: null, typeInfo: returnIdFieldInfo }
  );
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addMutationReturnServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addMutationReturnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_mutation_return",
      description: null,
      fields: [
        addMutationReturnFieldFieldInfo,
        addMutationReturnMutationIdFieldInfo,
        addMutationReturnReturnIdFieldInfo,
        addMutationReturnServiceIdFieldInfo
      ]
    }
  );
  queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "query_id",
    description: null,
    typeInfo: queryIdFieldInfo
  });
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addQueryConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_query",
    description: null,
    fields: [addQueryQueryIdFieldInfo, addQueryServiceIdFieldInfo]
  });
  argumentIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryArgumentArgumentIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "argument_id", description: null, typeInfo: argumentIdFieldInfo }
  );
  fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  addQueryArgumentFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "field", description: null, typeInfo: fieldFieldInfo }
  );
  queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryArgumentQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "query_id", description: null, typeInfo: queryIdFieldInfo }
  );
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryArgumentServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addQueryArgumentConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_query_argument",
      description: null,
      fields: [
        addQueryArgumentArgumentIdFieldInfo,
        addQueryArgumentFieldFieldInfo,
        addQueryArgumentQueryIdFieldInfo,
        addQueryArgumentServiceIdFieldInfo
      ]
    }
  );
  fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "field"
  });
  addQueryReturnFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "field", description: null, typeInfo: fieldFieldInfo }
  );
  queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryReturnQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "query_id", description: null, typeInfo: queryIdFieldInfo }
  );
  returnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryReturnReturnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "return_id", description: null, typeInfo: returnIdFieldInfo }
  );
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addQueryReturnServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addQueryReturnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_query_return",
      description: null,
      fields: [
        addQueryReturnFieldFieldInfo,
        addQueryReturnQueryIdFieldInfo,
        addQueryReturnReturnIdFieldInfo,
        addQueryReturnServiceIdFieldInfo
      ]
    }
  );
  schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addSchemaSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema_id", description: null, typeInfo: schemaIdFieldInfo }
  );
  addSchemaConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_schema",
    description: null,
    fields: [addSchemaSchemaIdFieldInfo]
  });
  serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addServiceServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "service_id", description: null, typeInfo: serviceIdFieldInfo }
  );
  addServiceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_service",
    description: null,
    fields: [addServiceServiceIdFieldInfo]
  });
  schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addStructureSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema_id", description: null, typeInfo: schemaIdFieldInfo }
  );
  structureIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addStructureStructureIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "structure_id", description: null, typeInfo: structureIdFieldInfo }
  );
  addStructureConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "add_structure",
      description: null,
      fields: [addStructureSchemaIdFieldInfo, addStructureStructureIdFieldInfo]
    }
  );
  databaseIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addTableDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "database_id", description: null, typeInfo: databaseIdFieldInfo }
  );
  tableIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  addTableTableIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "table_id",
    description: null,
    typeInfo: tableIdFieldInfo
  });
  addTableConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "add_table",
    description: null,
    fields: [addTableDatabaseIdFieldInfo, addTableTableIdFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "change",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [
      addColumnConstructorInfo,
      addDatabaseConstructorInfo,
      addFieldConstructorInfo,
      addMutationConstructorInfo,
      addMutationArgumentConstructorInfo,
      addMutationReturnConstructorInfo,
      addQueryConstructorInfo,
      addQueryArgumentConstructorInfo,
      addQueryReturnConstructorInfo,
      addSchemaConstructorInfo,
      addServiceConstructorInfo,
      addStructureConstructorInfo,
      addTableConstructorInfo
    ]
  });
}

export function defaultTableReference(): TableReference {
  let databaseVal: string;
  let packageVal: string;
  let tableIdVal: string;
  databaseVal = "";
  packageVal = "";
  tableIdVal = "";
  return new TableReference({
    database: databaseVal,
    package: packageVal,
    tableId: tableIdVal
  });
}

export function describeTableReference(): typelayerCommonDocumentation.StructureInfo {
  let databaseFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let tableReferenceConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let tableReferenceDatabaseFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let tableReferencePackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let tableReferenceTableIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  databaseFieldInfo = new typelayerCommonDocumentation.TlText({});
  tableReferenceDatabaseFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "database", description: null, typeInfo: databaseFieldInfo }
  );
  packageFieldInfo = new typelayerCommonDocumentation.TlText({});
  tableReferencePackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  tableIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  tableReferenceTableIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "table_id", description: null, typeInfo: tableIdFieldInfo }
  );
  tableReferenceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "table_reference",
      description: null,
      fields: [
        tableReferenceDatabaseFieldInfo,
        tableReferencePackageFieldInfo,
        tableReferenceTableIdFieldInfo
      ]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "table_reference",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [tableReferenceConstructorInfo]
  });
}

export function defaultField(): Field {
  let docVal: string | null;
  let typeVal: BasicType;
  docVal = null;
  typeVal = defaultBasicType();
  return new Field({ doc: docVal, type: typeVal });
}

export function describeField(): typelayerCommonDocumentation.StructureInfo {
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fieldConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let fieldDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let fieldTypeFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let typeFieldInfo: typelayerCommonDocumentation.TypeInfo;
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  fieldDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  typeFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "basic_type"
  });
  fieldTypeFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "type",
    description: null,
    typeInfo: typeFieldInfo
  });
  fieldConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "field",
    description: null,
    fields: [fieldDocFieldInfo, fieldTypeFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "field",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [fieldConstructorInfo]
  });
}

export function defaultBasicType(): BinaryType {
  return new BinaryType({});
}

export function defaultBinaryType(): BinaryType {
  return new BinaryType({});
}

export function defaultBooleanType(): BooleanType {
  return new BooleanType({});
}

export function defaultDateTimeType(): DateTimeType {
  return new DateTimeType({});
}

export function defaultDoubleType(): DoubleType {
  return new DoubleType({});
}

export function defaultIntegerType(): IntegerType {
  return new IntegerType({});
}

export function defaultListType(): ListType {
  let ofVal: BasicType;
  ofVal = defaultBasicType();
  return new ListType({ of: ofVal });
}

export function defaultMapType(): MapType {
  let ofVal: BasicType;
  ofVal = defaultBasicType();
  return new MapType({ of: ofVal });
}

export function defaultMaybeType(): MaybeType {
  let ofVal: BasicType;
  ofVal = defaultBasicType();
  return new MaybeType({ of: ofVal });
}

export function defaultStructType(): StructType {
  let idVal: string;
  let schemaVal: SchemaReference;
  idVal = "";
  schemaVal = defaultSchemaReference();
  return new StructType({ id: idVal, schema: schemaVal });
}

export function defaultTextType(): TextType {
  return new TextType({});
}

export function describeBasicType(): typelayerCommonDocumentation.StructureInfo {
  let binaryTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let booleanTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let dateTimeTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let doubleTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let idFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let integerTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let listTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let listTypeOfFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let mapTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let mapTypeOfFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let maybeTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let maybeTypeOfFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let ofFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let structTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let structTypeIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let structTypeSchemaFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let textTypeConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  binaryTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "binary_type",
    description: null,
    fields: []
  });
  booleanTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "boolean_type", description: null, fields: [] }
  );
  dateTimeTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "date_time_type", description: null, fields: [] }
  );
  doubleTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "double_type",
    description: null,
    fields: []
  });
  integerTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    { name: "integer_type", description: null, fields: [] }
  );
  ofFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "basic_type"
  });
  listTypeOfFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "of",
    description: null,
    typeInfo: ofFieldInfo
  });
  listTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "list_type",
    description: null,
    fields: [listTypeOfFieldInfo]
  });
  ofFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "basic_type"
  });
  mapTypeOfFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "of",
    description: null,
    typeInfo: ofFieldInfo
  });
  mapTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "map_type",
    description: null,
    fields: [mapTypeOfFieldInfo]
  });
  ofFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "basic_type"
  });
  maybeTypeOfFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "of",
    description: null,
    typeInfo: ofFieldInfo
  });
  maybeTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "maybe_type",
    description: null,
    fields: [maybeTypeOfFieldInfo]
  });
  idFieldInfo = new typelayerCommonDocumentation.TlText({});
  structTypeIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "id",
    description: null,
    typeInfo: idFieldInfo
  });
  schemaFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "schema_reference"
  });
  structTypeSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema", description: null, typeInfo: schemaFieldInfo }
  );
  structTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "struct_type",
    description: null,
    fields: [structTypeIdFieldInfo, structTypeSchemaFieldInfo]
  });
  textTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "text_type",
    description: null,
    fields: []
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "basic_type",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [
      binaryTypeConstructorInfo,
      booleanTypeConstructorInfo,
      dateTimeTypeConstructorInfo,
      doubleTypeConstructorInfo,
      integerTypeConstructorInfo,
      listTypeConstructorInfo,
      mapTypeConstructorInfo,
      maybeTypeConstructorInfo,
      structTypeConstructorInfo,
      textTypeConstructorInfo
    ]
  });
}

export function defaultSchemaReference(): SchemaReference {
  let packageVal: string;
  let schemaIdVal: string;
  packageVal = "";
  schemaIdVal = "";
  return new SchemaReference({ package: packageVal, schemaId: schemaIdVal });
}

export function describeSchemaReference(): typelayerCommonDocumentation.StructureInfo {
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaIdFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemaReferenceConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let schemaReferencePackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let schemaReferenceSchemaIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  packageFieldInfo = new typelayerCommonDocumentation.TlText({});
  schemaReferencePackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
  schemaReferenceSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "schema_id", description: null, typeInfo: schemaIdFieldInfo }
  );
  schemaReferenceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "schema_reference",
      description: null,
      fields: [
        schemaReferencePackageFieldInfo,
        schemaReferenceSchemaIdFieldInfo
      ]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "schema_reference",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [schemaReferenceConstructorInfo]
  });
}

export function defaultBackend(): Database {
  return new Database({});
}

export function defaultDatabase(): Database {
  return new Database({});
}

export function defaultSimple(): Simple {
  return new Simple({});
}

export function describeBackend(): typelayerCommonDocumentation.StructureInfo {
  let databaseConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let simpleConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  databaseConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "database",
    description: null,
    fields: []
  });
  simpleConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "simple",
    description: null,
    fields: []
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "backend",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [databaseConstructorInfo, simpleConstructorInfo]
  });
}

export function defaultApplyChangesProxy(): ApplyChangesProxy {
  let aChangesVal: Array<Change>;
  let changesVal: Array<Change>;
  let packageVal: Package;
  let zChangesVal: Array<Change>;
  aChangesVal = [];
  changesVal = [];
  packageVal = defaultPackage();
  zChangesVal = [];
  return new ApplyChangesProxy({
    aChanges: aChangesVal,
    changes: changesVal,
    package: packageVal,
    zChanges: zChangesVal
  });
}

export function describeApplyChangesProxy(): typelayerCommonDocumentation.StructureInfo {
  let aChangesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let aChangesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let applyChangesProxyAChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let applyChangesProxyChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let applyChangesProxyConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let applyChangesProxyPackageFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let applyChangesProxyZChangesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let changesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let changesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let zChangesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let zChangesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  aChangesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  aChangesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: aChangesInnerFieldInfo
  });
  applyChangesProxyAChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "a_changes", description: null, typeInfo: aChangesFieldInfo }
  );
  changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  changesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: changesInnerFieldInfo
  });
  applyChangesProxyChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "changes", description: null, typeInfo: changesFieldInfo }
  );
  packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "package"
  });
  applyChangesProxyPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "package", description: null, typeInfo: packageFieldInfo }
  );
  zChangesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "change"
  });
  zChangesFieldInfo = new typelayerCommonDocumentation.TlList({
    listInner: zChangesInnerFieldInfo
  });
  applyChangesProxyZChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "z_changes", description: null, typeInfo: zChangesFieldInfo }
  );
  applyChangesProxyConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo(
    {
      name: "apply_changes_proxy",
      description: null,
      fields: [
        applyChangesProxyAChangesFieldInfo,
        applyChangesProxyChangesFieldInfo,
        applyChangesProxyPackageFieldInfo,
        applyChangesProxyZChangesFieldInfo
      ]
    }
  );
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "apply_changes_proxy",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [applyChangesProxyConstructorInfo]
  });
}

export function defaultPackage(): Package {
  let collectionsVal: Map<string, Collection>;
  let docVal: string | null;
  let idVal: string;
  let schemasVal: Map<string, Schema>;
  let servicesVal: Map<string, Service>;
  let versionVal: string;
  collectionsVal = new Map([]);
  docVal = null;
  idVal = "";
  schemasVal = new Map([]);
  servicesVal = new Map([]);
  versionVal = "";
  return new Package({
    collections: collectionsVal,
    doc: docVal,
    id: idVal,
    schemas: schemasVal,
    services: servicesVal,
    version: versionVal
  });
}

export function describePackage(): typelayerCommonDocumentation.StructureInfo {
  let collectionsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let collectionsInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let docInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let idFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let packageCollectionsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let packageDocFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageIdFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageSchemasFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageServicesFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let packageVersionFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let schemasFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let schemasInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let servicesFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let servicesInnerFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let versionFieldInfo: typelayerCommonDocumentation.TypeInfo;
  collectionsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "collection"
  });
  collectionsFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: collectionsInnerFieldInfo
  });
  packageCollectionsFieldInfo = new typelayerCommonDocumentation.FieldDescription(
    { name: "collections", description: null, typeInfo: collectionsFieldInfo }
  );
  docInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
  docFieldInfo = new typelayerCommonDocumentation.TlMaybe({
    maybeInner: docInnerFieldInfo
  });
  packageDocFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "doc",
    description: null,
    typeInfo: docFieldInfo
  });
  idFieldInfo = new typelayerCommonDocumentation.TlText({});
  packageIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "id",
    description: null,
    typeInfo: idFieldInfo
  });
  schemasInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "schema"
  });
  schemasFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: schemasInnerFieldInfo
  });
  packageSchemasFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "schemas",
    description: null,
    typeInfo: schemasFieldInfo
  });
  servicesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
    package: "typelayer_c",
    schema: "structures",
    structureId: "service"
  });
  servicesFieldInfo = new typelayerCommonDocumentation.TlMap({
    mapInner: servicesInnerFieldInfo
  });
  packageServicesFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "services",
    description: null,
    typeInfo: servicesFieldInfo
  });
  versionFieldInfo = new typelayerCommonDocumentation.TlText({});
  packageVersionFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "version",
    description: null,
    typeInfo: versionFieldInfo
  });
  packageConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "package",
    description: null,
    fields: [
      packageCollectionsFieldInfo,
      packageDocFieldInfo,
      packageIdFieldInfo,
      packageSchemasFieldInfo,
      packageServicesFieldInfo,
      packageVersionFieldInfo
    ]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "package",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [packageConstructorInfo]
  });
}
