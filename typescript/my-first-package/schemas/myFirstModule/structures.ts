// Module: schemas.myFirstModule.structures
import * as typelayerCommonDocumentation from "typelayer-common";


export class MyFirstStructure {
    myBooleanField: boolean;
    myDoubleField: number;
    myIntegerField: number;
    myListField: Array<string>;
    myMapField: Map<string, string>;
    myNestedField: MyEnumStructure;
    myTextField: string;
    constructor(arg: {myBooleanField: boolean; myDoubleField: number; myIntegerField: number; myListField: Array<string>; myMapField: Map<string, string>; myNestedField: MyEnumStructure; myTextField: string;}) {
        Object.assign(this, arg);
    }
}

export class MyEnumInteger {
    myTextField: number;
    constructor(arg: {myTextField: number;}) {
        Object.assign(this, arg);
    }
}

export class MyEnumText {
    myTextField: string;
    constructor(arg: {myTextField: string;}) {
        Object.assign(this, arg);
    }
}

export type MyEnumStructure = MyEnumInteger| MyEnumText

export function defaultMyFirstStructure(): MyFirstStructure {
    let myBooleanFieldVal : boolean;
    let myDoubleFieldVal : number;
    let myIntegerFieldVal : number;
    let myListFieldVal : Array<string>;
    let myMapFieldVal : Map<string, string>;
    let myNestedFieldVal : MyEnumStructure;
    let myTextFieldVal : string;
    myBooleanFieldVal = false;
    myDoubleFieldVal = 0.0;
    myIntegerFieldVal = 0;
    myListFieldVal = [];
    myMapFieldVal = new Map([]);
    myNestedFieldVal = defaultMyEnumStructure();
    myTextFieldVal = "";
    return new MyFirstStructure({myBooleanField: myBooleanFieldVal, myDoubleField: myDoubleFieldVal, myIntegerField: myIntegerFieldVal, myListField: myListFieldVal, myMapField: myMapFieldVal, myNestedField: myNestedFieldVal, myTextField: myTextFieldVal});
}

export function describeMyFirstStructure(): typelayerCommonDocumentation.StructureInfo {
    let myBooleanFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myDoubleFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myFirstStructureConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let myFirstStructureMyBooleanFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyDoubleFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyIntegerFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyListFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyMapFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyNestedFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstStructureMyTextFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myIntegerFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myListFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myListFieldInnerFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myMapFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myMapFieldInnerFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myNestedFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myTextFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    myBooleanFieldFieldInfo = new typelayerCommonDocumentation.TlBoolean({});
    myFirstStructureMyBooleanFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_boolean_field", description: null, typeInfo: myBooleanFieldFieldInfo});
    myDoubleFieldFieldInfo = new typelayerCommonDocumentation.TlDouble({});
    myFirstStructureMyDoubleFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_double_field", description: null, typeInfo: myDoubleFieldFieldInfo});
    myIntegerFieldFieldInfo = new typelayerCommonDocumentation.TlInteger({});
    myFirstStructureMyIntegerFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_integer_field", description: null, typeInfo: myIntegerFieldFieldInfo});
    myListFieldInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    myListFieldFieldInfo = new typelayerCommonDocumentation.TlList({listInner: myListFieldInnerFieldInfo});
    myFirstStructureMyListFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_list_field", description: null, typeInfo: myListFieldFieldInfo});
    myMapFieldInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    myMapFieldFieldInfo = new typelayerCommonDocumentation.TlMap({mapInner: myMapFieldInnerFieldInfo});
    myFirstStructureMyMapFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_map_field", description: null, typeInfo: myMapFieldFieldInfo});
    myNestedFieldFieldInfo = new typelayerCommonDocumentation.TlStructure({package: "my_first_package", schema: "structures", structureId: "my_enum_structure"});
    myFirstStructureMyNestedFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_nested_field", description: null, typeInfo: myNestedFieldFieldInfo});
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstStructureMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo});
    myFirstStructureConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_first_structure", description: null, fields: [myFirstStructureMyBooleanFieldFieldInfo, myFirstStructureMyDoubleFieldFieldInfo, myFirstStructureMyIntegerFieldFieldInfo, myFirstStructureMyListFieldFieldInfo, myFirstStructureMyMapFieldFieldInfo, myFirstStructureMyNestedFieldFieldInfo, myFirstStructureMyTextFieldFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_first_structure", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [myFirstStructureConstructorInfo]});
}

export function defaultMyEnumStructure(): MyEnumInteger {
    let myTextFieldVal : number;
    myTextFieldVal = 0;
    return new MyEnumInteger({myTextField: myTextFieldVal});
}

export function defaultMyEnumInteger(): MyEnumInteger {
    let myTextFieldVal : number;
    myTextFieldVal = 0;
    return new MyEnumInteger({myTextField: myTextFieldVal});
}

export function defaultMyEnumText(): MyEnumText {
    let myTextFieldVal : string;
    myTextFieldVal = "";
    return new MyEnumText({myTextField: myTextFieldVal});
}

export function describeMyEnumStructure(): typelayerCommonDocumentation.StructureInfo {
    let myEnumIntegerConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let myEnumIntegerMyTextFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myEnumTextConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let myEnumTextMyTextFieldFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myTextFieldFieldInfo : typelayerCommonDocumentation.TypeInfo;
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlInteger({});
    myEnumIntegerMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo});
    myEnumIntegerConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_enum_integer", description: null, fields: [myEnumIntegerMyTextFieldFieldInfo]});
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlText({});
    myEnumTextMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo});
    myEnumTextConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_enum_text", description: null, fields: [myEnumTextMyTextFieldFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_enum_structure", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [myEnumIntegerConstructorInfo, myEnumTextConstructorInfo]});
}