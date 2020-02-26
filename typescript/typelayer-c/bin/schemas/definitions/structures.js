"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.definitions.structures
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class Table {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Table = Table;
class Structure {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Structure = Structure;
class Service {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Service = Service;
class Schema {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Schema = Schema;
class Haskell {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Haskell = Haskell;
class Python {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Python = Python;
class Typescript {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Typescript = Typescript;
class Mutation {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Mutation = Mutation;
class Query {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Query = Query;
class Constructor {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Constructor = Constructor;
class Column {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Column = Column;
class ColumnBinary {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnBinary = ColumnBinary;
class ColumnBoolean {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnBoolean = ColumnBoolean;
class ColumnDateTime {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnDateTime = ColumnDateTime;
class ColumnDouble {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnDouble = ColumnDouble;
class ColumnEmbeded {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnEmbeded = ColumnEmbeded;
class ColumnInteger {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnInteger = ColumnInteger;
class ColumnText {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ColumnText = ColumnText;
class ForiegnKey {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ForiegnKey = ForiegnKey;
class Collection {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Collection = Collection;
class Changeset {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Changeset = Changeset;
class AddColumn {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddColumn = AddColumn;
class AddDatabase {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddDatabase = AddDatabase;
class AddField {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddField = AddField;
class AddMutation {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddMutation = AddMutation;
class AddMutationArgument {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddMutationArgument = AddMutationArgument;
class AddMutationReturn {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddMutationReturn = AddMutationReturn;
class AddQuery {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddQuery = AddQuery;
class AddQueryArgument {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddQueryArgument = AddQueryArgument;
class AddQueryReturn {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddQueryReturn = AddQueryReturn;
class AddSchema {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddSchema = AddSchema;
class AddService {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddService = AddService;
class AddStructure {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddStructure = AddStructure;
class AddTable {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.AddTable = AddTable;
class TableReference {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.TableReference = TableReference;
class Field {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Field = Field;
class BinaryType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.BinaryType = BinaryType;
class BooleanType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.BooleanType = BooleanType;
class DateTimeType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.DateTimeType = DateTimeType;
class DoubleType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.DoubleType = DoubleType;
class IntegerType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.IntegerType = IntegerType;
class ListType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ListType = ListType;
class MapType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MapType = MapType;
class MaybeType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MaybeType = MaybeType;
class StructType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.StructType = StructType;
class TextType {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.TextType = TextType;
class SchemaReference {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.SchemaReference = SchemaReference;
class Database {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Database = Database;
class Simple {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Simple = Simple;
class ApplyChangesProxy {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.ApplyChangesProxy = ApplyChangesProxy;
class Package {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.Package = Package;
function defaultTable() {
    let columnsVal;
    let descriptionVal;
    let tableVal;
    columnsVal = new Map([]);
    descriptionVal = "";
    tableVal = "";
    return new Table({
        columns: columnsVal,
        description: descriptionVal,
        table: tableVal
    });
}
exports.defaultTable = defaultTable;
function describeTable() {
    let columnsFieldInfo;
    let columnsInnerFieldInfo;
    let descriptionFieldInfo;
    let tableColumnsFieldInfo;
    let tableConstructorInfo;
    let tableDescriptionFieldInfo;
    let tableFieldInfo;
    let tableTableFieldInfo;
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
    tableDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "description", description: null, typeInfo: descriptionFieldInfo });
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
exports.describeTable = describeTable;
function defaultStructure() {
    let constructorsVal;
    let docVal;
    constructorsVal = new Map([]);
    docVal = null;
    return new Structure({ constructors: constructorsVal, doc: docVal });
}
exports.defaultStructure = defaultStructure;
function describeStructure() {
    let constructorsFieldInfo;
    let constructorsInnerFieldInfo;
    let docFieldInfo;
    let docInnerFieldInfo;
    let structureConstructorInfo;
    let structureConstructorsFieldInfo;
    let structureDocFieldInfo;
    constructorsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "constructor"
    });
    constructorsFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: constructorsInnerFieldInfo
    });
    structureConstructorsFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "constructors", description: null, typeInfo: constructorsFieldInfo });
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
exports.describeStructure = describeStructure;
function defaultService() {
    let docVal;
    let functionsVal;
    docVal = null;
    functionsVal = new Map([]);
    return new Service({ doc: docVal, functions: functionsVal });
}
exports.defaultService = defaultService;
function describeService() {
    let docFieldInfo;
    let docInnerFieldInfo;
    let functionsFieldInfo;
    let functionsInnerFieldInfo;
    let serviceConstructorInfo;
    let serviceDocFieldInfo;
    let serviceFunctionsFieldInfo;
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
    serviceFunctionsFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "functions", description: null, typeInfo: functionsFieldInfo });
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
exports.describeService = describeService;
function defaultSchema() {
    let docVal;
    let structuresVal;
    docVal = null;
    structuresVal = new Map([]);
    return new Schema({ doc: docVal, structures: structuresVal });
}
exports.defaultSchema = defaultSchema;
function describeSchema() {
    let docFieldInfo;
    let docInnerFieldInfo;
    let schemaConstructorInfo;
    let schemaDocFieldInfo;
    let schemaStructuresFieldInfo;
    let structuresFieldInfo;
    let structuresInnerFieldInfo;
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
    schemaStructuresFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "structures", description: null, typeInfo: structuresFieldInfo });
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
exports.describeSchema = describeSchema;
function defaultLanguage() {
    return new Haskell({});
}
exports.defaultLanguage = defaultLanguage;
function defaultHaskell() {
    return new Haskell({});
}
exports.defaultHaskell = defaultHaskell;
function defaultPython() {
    return new Python({});
}
exports.defaultPython = defaultPython;
function defaultTypescript() {
    return new Typescript({});
}
exports.defaultTypescript = defaultTypescript;
function describeLanguage() {
    let haskellConstructorInfo;
    let pythonConstructorInfo;
    let typescriptConstructorInfo;
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
exports.describeLanguage = describeLanguage;
function defaultFunction() {
    let argumentsVal;
    let docVal;
    let returnsVal;
    let targetTableVal;
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
exports.defaultFunction = defaultFunction;
function defaultMutation() {
    let argumentsVal;
    let docVal;
    let returnsVal;
    let targetTableVal;
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
exports.defaultMutation = defaultMutation;
function defaultQuery() {
    let argumentsVal;
    let docVal;
    let returnsVal;
    argumentsVal = new Map([]);
    docVal = null;
    returnsVal = new Map([]);
    return new Query({
        arguments: argumentsVal,
        doc: docVal,
        returns: returnsVal
    });
}
exports.defaultQuery = defaultQuery;
function describeFunction() {
    let argumentsFieldInfo;
    let argumentsInnerFieldInfo;
    let docFieldInfo;
    let docInnerFieldInfo;
    let mutationArgumentsFieldInfo;
    let mutationConstructorInfo;
    let mutationDocFieldInfo;
    let mutationReturnsFieldInfo;
    let mutationTargetTableFieldInfo;
    let queryArgumentsFieldInfo;
    let queryConstructorInfo;
    let queryDocFieldInfo;
    let queryReturnsFieldInfo;
    let returnsFieldInfo;
    let returnsInnerFieldInfo;
    let targetTableFieldInfo;
    argumentsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "field"
    });
    argumentsFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: argumentsInnerFieldInfo
    });
    mutationArgumentsFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "arguments", description: null, typeInfo: argumentsFieldInfo });
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
    mutationTargetTableFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "target_table", description: null, typeInfo: targetTableFieldInfo });
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
exports.describeFunction = describeFunction;
function defaultConstructor() {
    let docVal;
    let fieldsVal;
    docVal = null;
    fieldsVal = new Map([]);
    return new Constructor({ doc: docVal, fields: fieldsVal });
}
exports.defaultConstructor = defaultConstructor;
function describeConstructor() {
    let constructorConstructorInfo;
    let constructorDocFieldInfo;
    let constructorFieldsFieldInfo;
    let docFieldInfo;
    let docInnerFieldInfo;
    let fieldsFieldInfo;
    let fieldsInnerFieldInfo;
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
    constructorFieldsFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "fields", description: null, typeInfo: fieldsFieldInfo });
    constructorConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "constructor",
        description: null,
        fields: [constructorDocFieldInfo, constructorFieldsFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "constructor",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [constructorConstructorInfo]
    });
}
exports.describeConstructor = describeConstructor;
function defaultColumn() {
    let columnVal;
    let descriptionVal;
    let typeVal;
    columnVal = "";
    descriptionVal = "";
    typeVal = defaultColumnType();
    return new Column({
        column: columnVal,
        description: descriptionVal,
        type: typeVal
    });
}
exports.defaultColumn = defaultColumn;
function describeColumn() {
    let columnColumnFieldInfo;
    let columnConstructorInfo;
    let columnDescriptionFieldInfo;
    let columnFieldInfo;
    let columnTypeFieldInfo;
    let descriptionFieldInfo;
    let typeFieldInfo;
    columnFieldInfo = new typelayerCommonDocumentation.TlText({});
    columnColumnFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "column",
        description: null,
        typeInfo: columnFieldInfo
    });
    descriptionFieldInfo = new typelayerCommonDocumentation.TlText({});
    columnDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "description", description: null, typeInfo: descriptionFieldInfo });
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
exports.describeColumn = describeColumn;
function defaultColumnType() {
    return new ColumnBinary({});
}
exports.defaultColumnType = defaultColumnType;
function defaultColumnBinary() {
    return new ColumnBinary({});
}
exports.defaultColumnBinary = defaultColumnBinary;
function defaultColumnBoolean() {
    return new ColumnBoolean({});
}
exports.defaultColumnBoolean = defaultColumnBoolean;
function defaultColumnDateTime() {
    return new ColumnDateTime({});
}
exports.defaultColumnDateTime = defaultColumnDateTime;
function defaultColumnDouble() {
    return new ColumnDouble({});
}
exports.defaultColumnDouble = defaultColumnDouble;
function defaultColumnEmbeded() {
    let idVal;
    let schemaVal;
    idVal = "";
    schemaVal = defaultSchemaReference();
    return new ColumnEmbeded({ id: idVal, schema: schemaVal });
}
exports.defaultColumnEmbeded = defaultColumnEmbeded;
function defaultColumnInteger() {
    return new ColumnInteger({});
}
exports.defaultColumnInteger = defaultColumnInteger;
function defaultColumnText() {
    return new ColumnText({});
}
exports.defaultColumnText = defaultColumnText;
function defaultForiegnKey() {
    let idVal;
    let tableVal;
    idVal = "";
    tableVal = "";
    return new ForiegnKey({ id: idVal, table: tableVal });
}
exports.defaultForiegnKey = defaultForiegnKey;
function describeColumnType() {
    let columnBinaryConstructorInfo;
    let columnBooleanConstructorInfo;
    let columnDateTimeConstructorInfo;
    let columnDoubleConstructorInfo;
    let columnEmbededConstructorInfo;
    let columnEmbededIdFieldInfo;
    let columnEmbededSchemaFieldInfo;
    let columnIntegerConstructorInfo;
    let columnTextConstructorInfo;
    let foriegnKeyConstructorInfo;
    let foriegnKeyIdFieldInfo;
    let foriegnKeyTableFieldInfo;
    let idFieldInfo;
    let schemaFieldInfo;
    let tableFieldInfo;
    columnBinaryConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "column_binary", description: null, fields: [] });
    columnBooleanConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "column_boolean", description: null, fields: [] });
    columnDateTimeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "column_date_time", description: null, fields: [] });
    columnDoubleConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "column_double", description: null, fields: [] });
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
    columnEmbededSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema", description: null, typeInfo: schemaFieldInfo });
    columnEmbededConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "column_embeded",
        description: null,
        fields: [columnEmbededIdFieldInfo, columnEmbededSchemaFieldInfo]
    });
    columnIntegerConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "column_integer", description: null, fields: [] });
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
exports.describeColumnType = describeColumnType;
function defaultCollection() {
    let backendVal;
    let descriptionVal;
    let schemaVal;
    let tablesVal;
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
exports.defaultCollection = defaultCollection;
function describeCollection() {
    let backendFieldInfo;
    let collectionBackendFieldInfo;
    let collectionConstructorInfo;
    let collectionDescriptionFieldInfo;
    let collectionSchemaFieldInfo;
    let collectionTablesFieldInfo;
    let descriptionFieldInfo;
    let schemaFieldInfo;
    let tablesFieldInfo;
    let tablesInnerFieldInfo;
    backendFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "backend"
    });
    collectionBackendFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "backend", description: null, typeInfo: backendFieldInfo });
    descriptionFieldInfo = new typelayerCommonDocumentation.TlText({});
    collectionDescriptionFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "description", description: null, typeInfo: descriptionFieldInfo });
    schemaFieldInfo = new typelayerCommonDocumentation.TlText({});
    collectionSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema", description: null, typeInfo: schemaFieldInfo });
    tablesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "table"
    });
    tablesFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: tablesInnerFieldInfo
    });
    collectionTablesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "tables", description: null, typeInfo: tablesFieldInfo });
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
exports.describeCollection = describeCollection;
function defaultChangeset() {
    let changesVal;
    changesVal = [];
    return new Changeset({ changes: changesVal });
}
exports.defaultChangeset = defaultChangeset;
function describeChangeset() {
    let changesFieldInfo;
    let changesInnerFieldInfo;
    let changesetChangesFieldInfo;
    let changesetConstructorInfo;
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    changesetChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "changes", description: null, typeInfo: changesFieldInfo });
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
exports.describeChangeset = describeChangeset;
function defaultChange() {
    let columnIdVal;
    let databaseIdVal;
    let tableIdVal;
    columnIdVal = "";
    databaseIdVal = "";
    tableIdVal = "";
    return new AddColumn({
        columnId: columnIdVal,
        databaseId: databaseIdVal,
        tableId: tableIdVal
    });
}
exports.defaultChange = defaultChange;
function defaultAddColumn() {
    let columnIdVal;
    let databaseIdVal;
    let tableIdVal;
    columnIdVal = "";
    databaseIdVal = "";
    tableIdVal = "";
    return new AddColumn({
        columnId: columnIdVal,
        databaseId: databaseIdVal,
        tableId: tableIdVal
    });
}
exports.defaultAddColumn = defaultAddColumn;
function defaultAddDatabase() {
    let databaseIdVal;
    databaseIdVal = "";
    return new AddDatabase({ databaseId: databaseIdVal });
}
exports.defaultAddDatabase = defaultAddDatabase;
function defaultAddField() {
    let constructorIdVal;
    let fieldIdVal;
    let fieldVal;
    let schemaIdVal;
    let structureIdVal;
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
exports.defaultAddField = defaultAddField;
function defaultAddMutation() {
    let mutationIdVal;
    let serviceIdVal;
    let targetTableVal;
    mutationIdVal = "";
    serviceIdVal = "";
    targetTableVal = defaultTableReference();
    return new AddMutation({
        mutationId: mutationIdVal,
        serviceId: serviceIdVal,
        targetTable: targetTableVal
    });
}
exports.defaultAddMutation = defaultAddMutation;
function defaultAddMutationArgument() {
    let argumentIdVal;
    let fieldVal;
    let mutationIdVal;
    let serviceIdVal;
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
exports.defaultAddMutationArgument = defaultAddMutationArgument;
function defaultAddMutationReturn() {
    let fieldVal;
    let mutationIdVal;
    let returnIdVal;
    let serviceIdVal;
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
exports.defaultAddMutationReturn = defaultAddMutationReturn;
function defaultAddQuery() {
    let queryIdVal;
    let serviceIdVal;
    queryIdVal = "";
    serviceIdVal = "";
    return new AddQuery({ queryId: queryIdVal, serviceId: serviceIdVal });
}
exports.defaultAddQuery = defaultAddQuery;
function defaultAddQueryArgument() {
    let argumentIdVal;
    let fieldVal;
    let queryIdVal;
    let serviceIdVal;
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
exports.defaultAddQueryArgument = defaultAddQueryArgument;
function defaultAddQueryReturn() {
    let fieldVal;
    let queryIdVal;
    let returnIdVal;
    let serviceIdVal;
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
exports.defaultAddQueryReturn = defaultAddQueryReturn;
function defaultAddSchema() {
    let schemaIdVal;
    schemaIdVal = "";
    return new AddSchema({ schemaId: schemaIdVal });
}
exports.defaultAddSchema = defaultAddSchema;
function defaultAddService() {
    let serviceIdVal;
    serviceIdVal = "";
    return new AddService({ serviceId: serviceIdVal });
}
exports.defaultAddService = defaultAddService;
function defaultAddStructure() {
    let schemaIdVal;
    let structureIdVal;
    schemaIdVal = "";
    structureIdVal = "";
    return new AddStructure({
        schemaId: schemaIdVal,
        structureId: structureIdVal
    });
}
exports.defaultAddStructure = defaultAddStructure;
function defaultAddTable() {
    let databaseIdVal;
    let tableIdVal;
    databaseIdVal = "";
    tableIdVal = "";
    return new AddTable({ databaseId: databaseIdVal, tableId: tableIdVal });
}
exports.defaultAddTable = defaultAddTable;
function describeChange() {
    let addColumnColumnIdFieldInfo;
    let addColumnConstructorInfo;
    let addColumnDatabaseIdFieldInfo;
    let addColumnTableIdFieldInfo;
    let addDatabaseConstructorInfo;
    let addDatabaseDatabaseIdFieldInfo;
    let addFieldConstructorIdFieldInfo;
    let addFieldConstructorInfo;
    let addFieldFieldFieldInfo;
    let addFieldFieldIdFieldInfo;
    let addFieldSchemaIdFieldInfo;
    let addFieldStructureIdFieldInfo;
    let addMutationArgumentArgumentIdFieldInfo;
    let addMutationArgumentConstructorInfo;
    let addMutationArgumentFieldFieldInfo;
    let addMutationArgumentMutationIdFieldInfo;
    let addMutationArgumentServiceIdFieldInfo;
    let addMutationConstructorInfo;
    let addMutationMutationIdFieldInfo;
    let addMutationReturnConstructorInfo;
    let addMutationReturnFieldFieldInfo;
    let addMutationReturnMutationIdFieldInfo;
    let addMutationReturnReturnIdFieldInfo;
    let addMutationReturnServiceIdFieldInfo;
    let addMutationServiceIdFieldInfo;
    let addMutationTargetTableFieldInfo;
    let addQueryArgumentArgumentIdFieldInfo;
    let addQueryArgumentConstructorInfo;
    let addQueryArgumentFieldFieldInfo;
    let addQueryArgumentQueryIdFieldInfo;
    let addQueryArgumentServiceIdFieldInfo;
    let addQueryConstructorInfo;
    let addQueryQueryIdFieldInfo;
    let addQueryReturnConstructorInfo;
    let addQueryReturnFieldFieldInfo;
    let addQueryReturnQueryIdFieldInfo;
    let addQueryReturnReturnIdFieldInfo;
    let addQueryReturnServiceIdFieldInfo;
    let addQueryServiceIdFieldInfo;
    let addSchemaConstructorInfo;
    let addSchemaSchemaIdFieldInfo;
    let addServiceConstructorInfo;
    let addServiceServiceIdFieldInfo;
    let addStructureConstructorInfo;
    let addStructureSchemaIdFieldInfo;
    let addStructureStructureIdFieldInfo;
    let addTableConstructorInfo;
    let addTableDatabaseIdFieldInfo;
    let addTableTableIdFieldInfo;
    let argumentIdFieldInfo;
    let columnIdFieldInfo;
    let constructorIdFieldInfo;
    let databaseIdFieldInfo;
    let fieldFieldInfo;
    let fieldIdFieldInfo;
    let mutationIdFieldInfo;
    let queryIdFieldInfo;
    let returnIdFieldInfo;
    let schemaIdFieldInfo;
    let serviceIdFieldInfo;
    let structureIdFieldInfo;
    let tableIdFieldInfo;
    let targetTableFieldInfo;
    columnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addColumnColumnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "column_id", description: null, typeInfo: columnIdFieldInfo });
    databaseIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addColumnDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "database_id", description: null, typeInfo: databaseIdFieldInfo });
    tableIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addColumnTableIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "table_id", description: null, typeInfo: tableIdFieldInfo });
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
    addDatabaseDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "database_id", description: null, typeInfo: databaseIdFieldInfo });
    addDatabaseConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_database",
        description: null,
        fields: [addDatabaseDatabaseIdFieldInfo]
    });
    constructorIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addFieldConstructorIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "constructor_id",
        description: null,
        typeInfo: constructorIdFieldInfo
    });
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
    addFieldSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema_id", description: null, typeInfo: schemaIdFieldInfo });
    structureIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addFieldStructureIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "structure_id", description: null, typeInfo: structureIdFieldInfo });
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
    addMutationMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    targetTableFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "table_reference"
    });
    addMutationTargetTableFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "target_table", description: null, typeInfo: targetTableFieldInfo });
    addMutationConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_mutation",
        description: null,
        fields: [
            addMutationMutationIdFieldInfo,
            addMutationServiceIdFieldInfo,
            addMutationTargetTableFieldInfo
        ]
    });
    argumentIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationArgumentArgumentIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "argument_id", description: null, typeInfo: argumentIdFieldInfo });
    fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "field"
    });
    addMutationArgumentFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "field", description: null, typeInfo: fieldFieldInfo });
    mutationIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationArgumentMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationArgumentServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addMutationArgumentConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_mutation_argument",
        description: null,
        fields: [
            addMutationArgumentArgumentIdFieldInfo,
            addMutationArgumentFieldFieldInfo,
            addMutationArgumentMutationIdFieldInfo,
            addMutationArgumentServiceIdFieldInfo
        ]
    });
    fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "field"
    });
    addMutationReturnFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "field", description: null, typeInfo: fieldFieldInfo });
    mutationIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationReturnMutationIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "mutation_id", description: null, typeInfo: mutationIdFieldInfo });
    returnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationReturnReturnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "return_id", description: null, typeInfo: returnIdFieldInfo });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addMutationReturnServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addMutationReturnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_mutation_return",
        description: null,
        fields: [
            addMutationReturnFieldFieldInfo,
            addMutationReturnMutationIdFieldInfo,
            addMutationReturnReturnIdFieldInfo,
            addMutationReturnServiceIdFieldInfo
        ]
    });
    queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "query_id",
        description: null,
        typeInfo: queryIdFieldInfo
    });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addQueryConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_query",
        description: null,
        fields: [addQueryQueryIdFieldInfo, addQueryServiceIdFieldInfo]
    });
    argumentIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryArgumentArgumentIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "argument_id", description: null, typeInfo: argumentIdFieldInfo });
    fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "field"
    });
    addQueryArgumentFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "field", description: null, typeInfo: fieldFieldInfo });
    queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryArgumentQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "query_id", description: null, typeInfo: queryIdFieldInfo });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryArgumentServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addQueryArgumentConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_query_argument",
        description: null,
        fields: [
            addQueryArgumentArgumentIdFieldInfo,
            addQueryArgumentFieldFieldInfo,
            addQueryArgumentQueryIdFieldInfo,
            addQueryArgumentServiceIdFieldInfo
        ]
    });
    fieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "field"
    });
    addQueryReturnFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "field", description: null, typeInfo: fieldFieldInfo });
    queryIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryReturnQueryIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "query_id", description: null, typeInfo: queryIdFieldInfo });
    returnIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryReturnReturnIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "return_id", description: null, typeInfo: returnIdFieldInfo });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addQueryReturnServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addQueryReturnConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_query_return",
        description: null,
        fields: [
            addQueryReturnFieldFieldInfo,
            addQueryReturnQueryIdFieldInfo,
            addQueryReturnReturnIdFieldInfo,
            addQueryReturnServiceIdFieldInfo
        ]
    });
    schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addSchemaSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema_id", description: null, typeInfo: schemaIdFieldInfo });
    addSchemaConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_schema",
        description: null,
        fields: [addSchemaSchemaIdFieldInfo]
    });
    serviceIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addServiceServiceIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "service_id", description: null, typeInfo: serviceIdFieldInfo });
    addServiceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_service",
        description: null,
        fields: [addServiceServiceIdFieldInfo]
    });
    schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addStructureSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema_id", description: null, typeInfo: schemaIdFieldInfo });
    structureIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addStructureStructureIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "structure_id", description: null, typeInfo: structureIdFieldInfo });
    addStructureConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "add_structure",
        description: null,
        fields: [addStructureSchemaIdFieldInfo, addStructureStructureIdFieldInfo]
    });
    databaseIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    addTableDatabaseIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "database_id", description: null, typeInfo: databaseIdFieldInfo });
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
exports.describeChange = describeChange;
function defaultTableReference() {
    let databaseVal;
    let packageVal;
    let tableIdVal;
    databaseVal = "";
    packageVal = "";
    tableIdVal = "";
    return new TableReference({
        database: databaseVal,
        package: packageVal,
        tableId: tableIdVal
    });
}
exports.defaultTableReference = defaultTableReference;
function describeTableReference() {
    let databaseFieldInfo;
    let packageFieldInfo;
    let tableIdFieldInfo;
    let tableReferenceConstructorInfo;
    let tableReferenceDatabaseFieldInfo;
    let tableReferencePackageFieldInfo;
    let tableReferenceTableIdFieldInfo;
    databaseFieldInfo = new typelayerCommonDocumentation.TlText({});
    tableReferenceDatabaseFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "database", description: null, typeInfo: databaseFieldInfo });
    packageFieldInfo = new typelayerCommonDocumentation.TlText({});
    tableReferencePackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    tableIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    tableReferenceTableIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "table_id", description: null, typeInfo: tableIdFieldInfo });
    tableReferenceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "table_reference",
        description: null,
        fields: [
            tableReferenceDatabaseFieldInfo,
            tableReferencePackageFieldInfo,
            tableReferenceTableIdFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "table_reference",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [tableReferenceConstructorInfo]
    });
}
exports.describeTableReference = describeTableReference;
function defaultField() {
    let docVal;
    let typeVal;
    docVal = null;
    typeVal = defaultBasicType();
    return new Field({ doc: docVal, type: typeVal });
}
exports.defaultField = defaultField;
function describeField() {
    let docFieldInfo;
    let docInnerFieldInfo;
    let fieldConstructorInfo;
    let fieldDocFieldInfo;
    let fieldTypeFieldInfo;
    let typeFieldInfo;
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
exports.describeField = describeField;
function defaultBasicType() {
    return new BinaryType({});
}
exports.defaultBasicType = defaultBasicType;
function defaultBinaryType() {
    return new BinaryType({});
}
exports.defaultBinaryType = defaultBinaryType;
function defaultBooleanType() {
    return new BooleanType({});
}
exports.defaultBooleanType = defaultBooleanType;
function defaultDateTimeType() {
    return new DateTimeType({});
}
exports.defaultDateTimeType = defaultDateTimeType;
function defaultDoubleType() {
    return new DoubleType({});
}
exports.defaultDoubleType = defaultDoubleType;
function defaultIntegerType() {
    return new IntegerType({});
}
exports.defaultIntegerType = defaultIntegerType;
function defaultListType() {
    let ofVal;
    ofVal = defaultBasicType();
    return new ListType({ of: ofVal });
}
exports.defaultListType = defaultListType;
function defaultMapType() {
    let ofVal;
    ofVal = defaultBasicType();
    return new MapType({ of: ofVal });
}
exports.defaultMapType = defaultMapType;
function defaultMaybeType() {
    let ofVal;
    ofVal = defaultBasicType();
    return new MaybeType({ of: ofVal });
}
exports.defaultMaybeType = defaultMaybeType;
function defaultStructType() {
    let idVal;
    let schemaVal;
    idVal = "";
    schemaVal = defaultSchemaReference();
    return new StructType({ id: idVal, schema: schemaVal });
}
exports.defaultStructType = defaultStructType;
function defaultTextType() {
    return new TextType({});
}
exports.defaultTextType = defaultTextType;
function describeBasicType() {
    let binaryTypeConstructorInfo;
    let booleanTypeConstructorInfo;
    let dateTimeTypeConstructorInfo;
    let doubleTypeConstructorInfo;
    let idFieldInfo;
    let integerTypeConstructorInfo;
    let listTypeConstructorInfo;
    let listTypeOfFieldInfo;
    let mapTypeConstructorInfo;
    let mapTypeOfFieldInfo;
    let maybeTypeConstructorInfo;
    let maybeTypeOfFieldInfo;
    let ofFieldInfo;
    let schemaFieldInfo;
    let structTypeConstructorInfo;
    let structTypeIdFieldInfo;
    let structTypeSchemaFieldInfo;
    let textTypeConstructorInfo;
    binaryTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "binary_type",
        description: null,
        fields: []
    });
    booleanTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "boolean_type", description: null, fields: [] });
    dateTimeTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "date_time_type", description: null, fields: [] });
    doubleTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "double_type",
        description: null,
        fields: []
    });
    integerTypeConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({ name: "integer_type", description: null, fields: [] });
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
    structTypeSchemaFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema", description: null, typeInfo: schemaFieldInfo });
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
exports.describeBasicType = describeBasicType;
function defaultSchemaReference() {
    let packageVal;
    let schemaIdVal;
    packageVal = "";
    schemaIdVal = "";
    return new SchemaReference({ package: packageVal, schemaId: schemaIdVal });
}
exports.defaultSchemaReference = defaultSchemaReference;
function describeSchemaReference() {
    let packageFieldInfo;
    let schemaIdFieldInfo;
    let schemaReferenceConstructorInfo;
    let schemaReferencePackageFieldInfo;
    let schemaReferenceSchemaIdFieldInfo;
    packageFieldInfo = new typelayerCommonDocumentation.TlText({});
    schemaReferencePackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    schemaIdFieldInfo = new typelayerCommonDocumentation.TlText({});
    schemaReferenceSchemaIdFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "schema_id", description: null, typeInfo: schemaIdFieldInfo });
    schemaReferenceConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "schema_reference",
        description: null,
        fields: [
            schemaReferencePackageFieldInfo,
            schemaReferenceSchemaIdFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "schema_reference",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [schemaReferenceConstructorInfo]
    });
}
exports.describeSchemaReference = describeSchemaReference;
function defaultBackend() {
    return new Database({});
}
exports.defaultBackend = defaultBackend;
function defaultDatabase() {
    return new Database({});
}
exports.defaultDatabase = defaultDatabase;
function defaultSimple() {
    return new Simple({});
}
exports.defaultSimple = defaultSimple;
function describeBackend() {
    let databaseConstructorInfo;
    let simpleConstructorInfo;
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
exports.describeBackend = describeBackend;
function defaultApplyChangesProxy() {
    let aChangesVal;
    let changesVal;
    let packageVal;
    let zChangesVal;
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
exports.defaultApplyChangesProxy = defaultApplyChangesProxy;
function describeApplyChangesProxy() {
    let aChangesFieldInfo;
    let aChangesInnerFieldInfo;
    let applyChangesProxyAChangesFieldInfo;
    let applyChangesProxyChangesFieldInfo;
    let applyChangesProxyConstructorInfo;
    let applyChangesProxyPackageFieldInfo;
    let applyChangesProxyZChangesFieldInfo;
    let changesFieldInfo;
    let changesInnerFieldInfo;
    let packageFieldInfo;
    let zChangesFieldInfo;
    let zChangesInnerFieldInfo;
    aChangesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    aChangesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: aChangesInnerFieldInfo
    });
    applyChangesProxyAChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "a_changes", description: null, typeInfo: aChangesFieldInfo });
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    applyChangesProxyChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "changes", description: null, typeInfo: changesFieldInfo });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    applyChangesProxyPackageFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "package", description: null, typeInfo: packageFieldInfo });
    zChangesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    zChangesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: zChangesInnerFieldInfo
    });
    applyChangesProxyZChangesFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "z_changes", description: null, typeInfo: zChangesFieldInfo });
    applyChangesProxyConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "apply_changes_proxy",
        description: null,
        fields: [
            applyChangesProxyAChangesFieldInfo,
            applyChangesProxyChangesFieldInfo,
            applyChangesProxyPackageFieldInfo,
            applyChangesProxyZChangesFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "apply_changes_proxy",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [applyChangesProxyConstructorInfo]
    });
}
exports.describeApplyChangesProxy = describeApplyChangesProxy;
function defaultPackage() {
    let collectionsVal;
    let docVal;
    let idVal;
    let schemasVal;
    let servicesVal;
    let versionVal;
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
exports.defaultPackage = defaultPackage;
function describePackage() {
    let collectionsFieldInfo;
    let collectionsInnerFieldInfo;
    let docFieldInfo;
    let docInnerFieldInfo;
    let idFieldInfo;
    let packageCollectionsFieldInfo;
    let packageConstructorInfo;
    let packageDocFieldInfo;
    let packageIdFieldInfo;
    let packageSchemasFieldInfo;
    let packageServicesFieldInfo;
    let packageVersionFieldInfo;
    let schemasFieldInfo;
    let schemasInnerFieldInfo;
    let servicesFieldInfo;
    let servicesInnerFieldInfo;
    let versionFieldInfo;
    collectionsInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "collection"
    });
    collectionsFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: collectionsInnerFieldInfo
    });
    packageCollectionsFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "collections", description: null, typeInfo: collectionsFieldInfo });
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
exports.describePackage = describePackage;
