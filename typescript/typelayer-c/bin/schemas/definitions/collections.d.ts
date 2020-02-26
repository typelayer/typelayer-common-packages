import * as typelayerCSchemasDefinitionsStructures from "./structures";
import * as typelayerCommonCollections from "typelayer-common";
export declare class ApplyChangesProxyKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
    });
}
export interface ApplyChangesProxyCollection {
    applyChangesProxyCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    applyChangesProxyCollectionFetch: (toFetch: Array<string>) => Promise<Array<ApplyChangesProxyKV>>;
    applyChangesProxyCollectionSave: (toSave: Array<ApplyChangesProxyKV>) => Promise<Array<string>>;
    applyChangesProxyCollectionSlice: (offset: number, count: number) => Promise<Array<ApplyChangesProxyKV>>;
}
export declare class ApplyChangesProxyDynamicCollection implements ApplyChangesProxyCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    applyChangesProxyCollectionDelete(this: ApplyChangesProxyDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    applyChangesProxyCollectionFetch(this: ApplyChangesProxyDynamicCollection, toFetch: Array<string>): Promise<Array<ApplyChangesProxyKV>>;
    applyChangesProxyCollectionSave(this: ApplyChangesProxyDynamicCollection, toSave: Array<ApplyChangesProxyKV>): Promise<Array<string>>;
    applyChangesProxyCollectionSlice(this: ApplyChangesProxyDynamicCollection, offset: number, size: number): Promise<Array<ApplyChangesProxyKV>>;
}
export declare class BackendKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Backend;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Backend;
    });
}
export interface BackendCollection {
    backendCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    backendCollectionFetch: (toFetch: Array<string>) => Promise<Array<BackendKV>>;
    backendCollectionSave: (toSave: Array<BackendKV>) => Promise<Array<string>>;
    backendCollectionSlice: (offset: number, count: number) => Promise<Array<BackendKV>>;
}
export declare class BackendDynamicCollection implements BackendCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    backendCollectionDelete(this: BackendDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    backendCollectionFetch(this: BackendDynamicCollection, toFetch: Array<string>): Promise<Array<BackendKV>>;
    backendCollectionSave(this: BackendDynamicCollection, toSave: Array<BackendKV>): Promise<Array<string>>;
    backendCollectionSlice(this: BackendDynamicCollection, offset: number, size: number): Promise<Array<BackendKV>>;
}
export declare class BasicTypeKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.BasicType;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.BasicType;
    });
}
export interface BasicTypeCollection {
    basicTypeCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    basicTypeCollectionFetch: (toFetch: Array<string>) => Promise<Array<BasicTypeKV>>;
    basicTypeCollectionSave: (toSave: Array<BasicTypeKV>) => Promise<Array<string>>;
    basicTypeCollectionSlice: (offset: number, count: number) => Promise<Array<BasicTypeKV>>;
}
export declare class BasicTypeDynamicCollection implements BasicTypeCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    basicTypeCollectionDelete(this: BasicTypeDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    basicTypeCollectionFetch(this: BasicTypeDynamicCollection, toFetch: Array<string>): Promise<Array<BasicTypeKV>>;
    basicTypeCollectionSave(this: BasicTypeDynamicCollection, toSave: Array<BasicTypeKV>): Promise<Array<string>>;
    basicTypeCollectionSlice(this: BasicTypeDynamicCollection, offset: number, size: number): Promise<Array<BasicTypeKV>>;
}
export declare class ChangeKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Change;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Change;
    });
}
export interface ChangeCollection {
    changeCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    changeCollectionFetch: (toFetch: Array<string>) => Promise<Array<ChangeKV>>;
    changeCollectionSave: (toSave: Array<ChangeKV>) => Promise<Array<string>>;
    changeCollectionSlice: (offset: number, count: number) => Promise<Array<ChangeKV>>;
}
export declare class ChangeDynamicCollection implements ChangeCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    changeCollectionDelete(this: ChangeDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    changeCollectionFetch(this: ChangeDynamicCollection, toFetch: Array<string>): Promise<Array<ChangeKV>>;
    changeCollectionSave(this: ChangeDynamicCollection, toSave: Array<ChangeKV>): Promise<Array<string>>;
    changeCollectionSlice(this: ChangeDynamicCollection, offset: number, size: number): Promise<Array<ChangeKV>>;
}
export declare class ChangesetKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Changeset;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Changeset;
    });
}
export interface ChangesetCollection {
    changesetCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    changesetCollectionFetch: (toFetch: Array<string>) => Promise<Array<ChangesetKV>>;
    changesetCollectionSave: (toSave: Array<ChangesetKV>) => Promise<Array<string>>;
    changesetCollectionSlice: (offset: number, count: number) => Promise<Array<ChangesetKV>>;
}
export declare class ChangesetDynamicCollection implements ChangesetCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    changesetCollectionDelete(this: ChangesetDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    changesetCollectionFetch(this: ChangesetDynamicCollection, toFetch: Array<string>): Promise<Array<ChangesetKV>>;
    changesetCollectionSave(this: ChangesetDynamicCollection, toSave: Array<ChangesetKV>): Promise<Array<string>>;
    changesetCollectionSlice(this: ChangesetDynamicCollection, offset: number, size: number): Promise<Array<ChangesetKV>>;
}
export declare class CollectionKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Collection;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Collection;
    });
}
export interface CollectionCollection {
    collectionCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    collectionCollectionFetch: (toFetch: Array<string>) => Promise<Array<CollectionKV>>;
    collectionCollectionSave: (toSave: Array<CollectionKV>) => Promise<Array<string>>;
    collectionCollectionSlice: (offset: number, count: number) => Promise<Array<CollectionKV>>;
}
export declare class CollectionDynamicCollection implements CollectionCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    collectionCollectionDelete(this: CollectionDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    collectionCollectionFetch(this: CollectionDynamicCollection, toFetch: Array<string>): Promise<Array<CollectionKV>>;
    collectionCollectionSave(this: CollectionDynamicCollection, toSave: Array<CollectionKV>): Promise<Array<string>>;
    collectionCollectionSlice(this: CollectionDynamicCollection, offset: number, size: number): Promise<Array<CollectionKV>>;
}
export declare class ColumnKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Column;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Column;
    });
}
export interface ColumnCollection {
    columnCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    columnCollectionFetch: (toFetch: Array<string>) => Promise<Array<ColumnKV>>;
    columnCollectionSave: (toSave: Array<ColumnKV>) => Promise<Array<string>>;
    columnCollectionSlice: (offset: number, count: number) => Promise<Array<ColumnKV>>;
}
export declare class ColumnDynamicCollection implements ColumnCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    columnCollectionDelete(this: ColumnDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    columnCollectionFetch(this: ColumnDynamicCollection, toFetch: Array<string>): Promise<Array<ColumnKV>>;
    columnCollectionSave(this: ColumnDynamicCollection, toSave: Array<ColumnKV>): Promise<Array<string>>;
    columnCollectionSlice(this: ColumnDynamicCollection, offset: number, size: number): Promise<Array<ColumnKV>>;
}
export declare class ColumnTypeKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.ColumnType;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.ColumnType;
    });
}
export interface ColumnTypeCollection {
    columnTypeCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    columnTypeCollectionFetch: (toFetch: Array<string>) => Promise<Array<ColumnTypeKV>>;
    columnTypeCollectionSave: (toSave: Array<ColumnTypeKV>) => Promise<Array<string>>;
    columnTypeCollectionSlice: (offset: number, count: number) => Promise<Array<ColumnTypeKV>>;
}
export declare class ColumnTypeDynamicCollection implements ColumnTypeCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    columnTypeCollectionDelete(this: ColumnTypeDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    columnTypeCollectionFetch(this: ColumnTypeDynamicCollection, toFetch: Array<string>): Promise<Array<ColumnTypeKV>>;
    columnTypeCollectionSave(this: ColumnTypeDynamicCollection, toSave: Array<ColumnTypeKV>): Promise<Array<string>>;
    columnTypeCollectionSlice(this: ColumnTypeDynamicCollection, offset: number, size: number): Promise<Array<ColumnTypeKV>>;
}
export declare class ConstructorKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Constructor;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Constructor;
    });
}
export interface ConstructorCollection {
    constructorCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    constructorCollectionFetch: (toFetch: Array<string>) => Promise<Array<ConstructorKV>>;
    constructorCollectionSave: (toSave: Array<ConstructorKV>) => Promise<Array<string>>;
    constructorCollectionSlice: (offset: number, count: number) => Promise<Array<ConstructorKV>>;
}
export declare class ConstructorDynamicCollection implements ConstructorCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    constructorCollectionDelete(this: ConstructorDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    constructorCollectionFetch(this: ConstructorDynamicCollection, toFetch: Array<string>): Promise<Array<ConstructorKV>>;
    constructorCollectionSave(this: ConstructorDynamicCollection, toSave: Array<ConstructorKV>): Promise<Array<string>>;
    constructorCollectionSlice(this: ConstructorDynamicCollection, offset: number, size: number): Promise<Array<ConstructorKV>>;
}
export declare class FieldKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Field;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Field;
    });
}
export interface FieldCollection {
    fieldCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    fieldCollectionFetch: (toFetch: Array<string>) => Promise<Array<FieldKV>>;
    fieldCollectionSave: (toSave: Array<FieldKV>) => Promise<Array<string>>;
    fieldCollectionSlice: (offset: number, count: number) => Promise<Array<FieldKV>>;
}
export declare class FieldDynamicCollection implements FieldCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    fieldCollectionDelete(this: FieldDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    fieldCollectionFetch(this: FieldDynamicCollection, toFetch: Array<string>): Promise<Array<FieldKV>>;
    fieldCollectionSave(this: FieldDynamicCollection, toSave: Array<FieldKV>): Promise<Array<string>>;
    fieldCollectionSlice(this: FieldDynamicCollection, offset: number, size: number): Promise<Array<FieldKV>>;
}
export declare class FunctionKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Function;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Function;
    });
}
export interface FunctionCollection {
    functionCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    functionCollectionFetch: (toFetch: Array<string>) => Promise<Array<FunctionKV>>;
    functionCollectionSave: (toSave: Array<FunctionKV>) => Promise<Array<string>>;
    functionCollectionSlice: (offset: number, count: number) => Promise<Array<FunctionKV>>;
}
export declare class FunctionDynamicCollection implements FunctionCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    functionCollectionDelete(this: FunctionDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    functionCollectionFetch(this: FunctionDynamicCollection, toFetch: Array<string>): Promise<Array<FunctionKV>>;
    functionCollectionSave(this: FunctionDynamicCollection, toSave: Array<FunctionKV>): Promise<Array<string>>;
    functionCollectionSlice(this: FunctionDynamicCollection, offset: number, size: number): Promise<Array<FunctionKV>>;
}
export declare class LanguageKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Language;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Language;
    });
}
export interface LanguageCollection {
    languageCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    languageCollectionFetch: (toFetch: Array<string>) => Promise<Array<LanguageKV>>;
    languageCollectionSave: (toSave: Array<LanguageKV>) => Promise<Array<string>>;
    languageCollectionSlice: (offset: number, count: number) => Promise<Array<LanguageKV>>;
}
export declare class LanguageDynamicCollection implements LanguageCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    languageCollectionDelete(this: LanguageDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    languageCollectionFetch(this: LanguageDynamicCollection, toFetch: Array<string>): Promise<Array<LanguageKV>>;
    languageCollectionSave(this: LanguageDynamicCollection, toSave: Array<LanguageKV>): Promise<Array<string>>;
    languageCollectionSlice(this: LanguageDynamicCollection, offset: number, size: number): Promise<Array<LanguageKV>>;
}
export declare class PackageKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Package;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Package;
    });
}
export interface PackageCollection {
    packageCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    packageCollectionFetch: (toFetch: Array<string>) => Promise<Array<PackageKV>>;
    packageCollectionSave: (toSave: Array<PackageKV>) => Promise<Array<string>>;
    packageCollectionSlice: (offset: number, count: number) => Promise<Array<PackageKV>>;
}
export declare class PackageDynamicCollection implements PackageCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    packageCollectionDelete(this: PackageDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    packageCollectionFetch(this: PackageDynamicCollection, toFetch: Array<string>): Promise<Array<PackageKV>>;
    packageCollectionSave(this: PackageDynamicCollection, toSave: Array<PackageKV>): Promise<Array<string>>;
    packageCollectionSlice(this: PackageDynamicCollection, offset: number, size: number): Promise<Array<PackageKV>>;
}
export declare class SchemaKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Schema;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Schema;
    });
}
export interface SchemaCollection {
    schemaCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    schemaCollectionFetch: (toFetch: Array<string>) => Promise<Array<SchemaKV>>;
    schemaCollectionSave: (toSave: Array<SchemaKV>) => Promise<Array<string>>;
    schemaCollectionSlice: (offset: number, count: number) => Promise<Array<SchemaKV>>;
}
export declare class SchemaDynamicCollection implements SchemaCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    schemaCollectionDelete(this: SchemaDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    schemaCollectionFetch(this: SchemaDynamicCollection, toFetch: Array<string>): Promise<Array<SchemaKV>>;
    schemaCollectionSave(this: SchemaDynamicCollection, toSave: Array<SchemaKV>): Promise<Array<string>>;
    schemaCollectionSlice(this: SchemaDynamicCollection, offset: number, size: number): Promise<Array<SchemaKV>>;
}
export declare class SchemaReferenceKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.SchemaReference;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.SchemaReference;
    });
}
export interface SchemaReferenceCollection {
    schemaReferenceCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    schemaReferenceCollectionFetch: (toFetch: Array<string>) => Promise<Array<SchemaReferenceKV>>;
    schemaReferenceCollectionSave: (toSave: Array<SchemaReferenceKV>) => Promise<Array<string>>;
    schemaReferenceCollectionSlice: (offset: number, count: number) => Promise<Array<SchemaReferenceKV>>;
}
export declare class SchemaReferenceDynamicCollection implements SchemaReferenceCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    schemaReferenceCollectionDelete(this: SchemaReferenceDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    schemaReferenceCollectionFetch(this: SchemaReferenceDynamicCollection, toFetch: Array<string>): Promise<Array<SchemaReferenceKV>>;
    schemaReferenceCollectionSave(this: SchemaReferenceDynamicCollection, toSave: Array<SchemaReferenceKV>): Promise<Array<string>>;
    schemaReferenceCollectionSlice(this: SchemaReferenceDynamicCollection, offset: number, size: number): Promise<Array<SchemaReferenceKV>>;
}
export declare class ServiceKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Service;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Service;
    });
}
export interface ServiceCollection {
    serviceCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    serviceCollectionFetch: (toFetch: Array<string>) => Promise<Array<ServiceKV>>;
    serviceCollectionSave: (toSave: Array<ServiceKV>) => Promise<Array<string>>;
    serviceCollectionSlice: (offset: number, count: number) => Promise<Array<ServiceKV>>;
}
export declare class ServiceDynamicCollection implements ServiceCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    serviceCollectionDelete(this: ServiceDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    serviceCollectionFetch(this: ServiceDynamicCollection, toFetch: Array<string>): Promise<Array<ServiceKV>>;
    serviceCollectionSave(this: ServiceDynamicCollection, toSave: Array<ServiceKV>): Promise<Array<string>>;
    serviceCollectionSlice(this: ServiceDynamicCollection, offset: number, size: number): Promise<Array<ServiceKV>>;
}
export declare class StructureKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Structure;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Structure;
    });
}
export interface StructureCollection {
    structureCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    structureCollectionFetch: (toFetch: Array<string>) => Promise<Array<StructureKV>>;
    structureCollectionSave: (toSave: Array<StructureKV>) => Promise<Array<string>>;
    structureCollectionSlice: (offset: number, count: number) => Promise<Array<StructureKV>>;
}
export declare class StructureDynamicCollection implements StructureCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    structureCollectionDelete(this: StructureDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    structureCollectionFetch(this: StructureDynamicCollection, toFetch: Array<string>): Promise<Array<StructureKV>>;
    structureCollectionSave(this: StructureDynamicCollection, toSave: Array<StructureKV>): Promise<Array<string>>;
    structureCollectionSlice(this: StructureDynamicCollection, offset: number, size: number): Promise<Array<StructureKV>>;
}
export declare class TableKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.Table;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.Table;
    });
}
export interface TableCollection {
    tableCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    tableCollectionFetch: (toFetch: Array<string>) => Promise<Array<TableKV>>;
    tableCollectionSave: (toSave: Array<TableKV>) => Promise<Array<string>>;
    tableCollectionSlice: (offset: number, count: number) => Promise<Array<TableKV>>;
}
export declare class TableDynamicCollection implements TableCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    tableCollectionDelete(this: TableDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    tableCollectionFetch(this: TableDynamicCollection, toFetch: Array<string>): Promise<Array<TableKV>>;
    tableCollectionSave(this: TableDynamicCollection, toSave: Array<TableKV>): Promise<Array<string>>;
    tableCollectionSlice(this: TableDynamicCollection, offset: number, size: number): Promise<Array<TableKV>>;
}
export declare class TableReferenceKV {
    key: string;
    value: typelayerCSchemasDefinitionsStructures.TableReference;
    constructor(arg: {
        key: string;
        value: typelayerCSchemasDefinitionsStructures.TableReference;
    });
}
export interface TableReferenceCollection {
    tableReferenceCollectionDelete: (toDelete: Array<string>) => Promise<Array<string>>;
    tableReferenceCollectionFetch: (toFetch: Array<string>) => Promise<Array<TableReferenceKV>>;
    tableReferenceCollectionSave: (toSave: Array<TableReferenceKV>) => Promise<Array<string>>;
    tableReferenceCollectionSlice: (offset: number, count: number) => Promise<Array<TableReferenceKV>>;
}
export declare class TableReferenceDynamicCollection implements TableReferenceCollection {
    kind: string;
    dynamicObj: typelayerCommonCollections.BinaryCollection;
    constructor(arg: {
        dynamicObj: typelayerCommonCollections.BinaryCollection;
    });
    tableReferenceCollectionDelete(this: TableReferenceDynamicCollection, toDelete: Array<string>): Promise<Array<string>>;
    tableReferenceCollectionFetch(this: TableReferenceDynamicCollection, toFetch: Array<string>): Promise<Array<TableReferenceKV>>;
    tableReferenceCollectionSave(this: TableReferenceDynamicCollection, toSave: Array<TableReferenceKV>): Promise<Array<string>>;
    tableReferenceCollectionSlice(this: TableReferenceDynamicCollection, offset: number, size: number): Promise<Array<TableReferenceKV>>;
}
