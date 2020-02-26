// Module: services.myFirstService.structures
import * as myFirstPackageSchemasMyFirstModuleStructures from "../../schemas/myFirstModule/structures";
import * as typelayerCommonDocumentation from "typelayer-common";


export class MyFirstFunctionInput {
    myFirstArgument: string;
    constructor(arg: {myFirstArgument: string;}) {
        Object.assign(this, arg);
    }
}

export class MyFirstFunctionOutput {
    myFirstReturn: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    constructor(arg: {myFirstReturn: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;}) {
        Object.assign(this, arg);
    }
}

export class MySecondFunctionInput {
    argOne: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    argTwo: string;
    constructor(arg: {argOne: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure; argTwo: string;}) {
        Object.assign(this, arg);
    }
}

export class MySecondFunctionOutput {
    retOne: Array<string>;
    constructor(arg: {retOne: Array<string>;}) {
        Object.assign(this, arg);
    }
}

export function defaultMyFirstFunctionInput(): MyFirstFunctionInput {
    let myFirstArgumentVal : string;
    myFirstArgumentVal = "";
    return new MyFirstFunctionInput({myFirstArgument: myFirstArgumentVal});
}

export function describeMyFirstFunctionInput(): typelayerCommonDocumentation.StructureInfo {
    let myFirstArgumentFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let myFirstFunctionInputConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let myFirstFunctionInputMyFirstArgumentFieldInfo : typelayerCommonDocumentation.FieldDescription;
    myFirstArgumentFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstFunctionInputMyFirstArgumentFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_first_argument", description: null, typeInfo: myFirstArgumentFieldInfo});
    myFirstFunctionInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_first_function_input", description: null, fields: [myFirstFunctionInputMyFirstArgumentFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_first_function_input", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [myFirstFunctionInputConstructorInfo]});
}

export function defaultMyFirstFunctionOutput(): MyFirstFunctionOutput {
    let myFirstReturnVal : myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    myFirstReturnVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyFirstStructure();
    return new MyFirstFunctionOutput({myFirstReturn: myFirstReturnVal});
}

export function describeMyFirstFunctionOutput(): typelayerCommonDocumentation.StructureInfo {
    let myFirstFunctionOutputConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let myFirstFunctionOutputMyFirstReturnFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let myFirstReturnFieldInfo : typelayerCommonDocumentation.TypeInfo;
    myFirstReturnFieldInfo = new typelayerCommonDocumentation.TlStructure({package: "my_first_package", schema: "structures", structureId: "my_first_structure"});
    myFirstFunctionOutputMyFirstReturnFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "my_first_return", description: null, typeInfo: myFirstReturnFieldInfo});
    myFirstFunctionOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_first_function_output", description: null, fields: [myFirstFunctionOutputMyFirstReturnFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_first_function_output", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [myFirstFunctionOutputConstructorInfo]});
}

export function defaultMySecondFunctionInput(): MySecondFunctionInput {
    let argOneVal : myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    let argTwoVal : string;
    argOneVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
    argTwoVal = "";
    return new MySecondFunctionInput({argOne: argOneVal, argTwo: argTwoVal});
}

export function describeMySecondFunctionInput(): typelayerCommonDocumentation.StructureInfo {
    let argOneFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let argTwoFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let mySecondFunctionInputArgOneFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let mySecondFunctionInputArgTwoFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let mySecondFunctionInputConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    argOneFieldInfo = new typelayerCommonDocumentation.TlStructure({package: "my_first_package", schema: "structures", structureId: "my_enum_structure"});
    mySecondFunctionInputArgOneFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "arg_one", description: null, typeInfo: argOneFieldInfo});
    argTwoFieldInfo = new typelayerCommonDocumentation.TlText({});
    mySecondFunctionInputArgTwoFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "arg_two", description: null, typeInfo: argTwoFieldInfo});
    mySecondFunctionInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_second_function_input", description: null, fields: [mySecondFunctionInputArgOneFieldInfo, mySecondFunctionInputArgTwoFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_second_function_input", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [mySecondFunctionInputConstructorInfo]});
}

export function defaultMySecondFunctionOutput(): MySecondFunctionOutput {
    let retOneVal : Array<string>;
    retOneVal = [];
    return new MySecondFunctionOutput({retOne: retOneVal});
}

export function describeMySecondFunctionOutput(): typelayerCommonDocumentation.StructureInfo {
    let mySecondFunctionOutputConstructorInfo : typelayerCommonDocumentation.ConstructorInfo;
    let mySecondFunctionOutputRetOneFieldInfo : typelayerCommonDocumentation.FieldDescription;
    let retOneFieldInfo : typelayerCommonDocumentation.TypeInfo;
    let retOneInnerFieldInfo : typelayerCommonDocumentation.TypeInfo;
    retOneInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    retOneFieldInfo = new typelayerCommonDocumentation.TlList({listInner: retOneInnerFieldInfo});
    mySecondFunctionOutputRetOneFieldInfo = new typelayerCommonDocumentation.FieldDescription({name: "ret_one", description: null, typeInfo: retOneFieldInfo});
    mySecondFunctionOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({name: "my_second_function_output", description: null, fields: [mySecondFunctionOutputRetOneFieldInfo]});
    return new typelayerCommonDocumentation.StructureInfo({structureId: "my_second_function_output", structureType: new typelayerCommonDocumentation.StructureEnum({}), description: null, constructors: [mySecondFunctionOutputConstructorInfo]});
}