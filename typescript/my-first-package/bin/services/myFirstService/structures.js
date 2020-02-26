"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.myFirstService.structures
const myFirstPackageSchemasMyFirstModuleStructures = __importStar(require("../../schemas/myFirstModule/structures"));
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class MyFirstFunctionInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyFirstFunctionInput = MyFirstFunctionInput;
class MyFirstFunctionOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyFirstFunctionOutput = MyFirstFunctionOutput;
class MySecondFunctionInput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MySecondFunctionInput = MySecondFunctionInput;
class MySecondFunctionOutput {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MySecondFunctionOutput = MySecondFunctionOutput;
function defaultMyFirstFunctionInput() {
    let myFirstArgumentVal;
    myFirstArgumentVal = "";
    return new MyFirstFunctionInput({ myFirstArgument: myFirstArgumentVal });
}
exports.defaultMyFirstFunctionInput = defaultMyFirstFunctionInput;
function describeMyFirstFunctionInput() {
    let myFirstArgumentFieldInfo;
    let myFirstFunctionInputConstructorInfo;
    let myFirstFunctionInputMyFirstArgumentFieldInfo;
    myFirstArgumentFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstFunctionInputMyFirstArgumentFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_first_argument",
        description: null,
        typeInfo: myFirstArgumentFieldInfo
    });
    myFirstFunctionInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_first_function_input",
        description: null,
        fields: [myFirstFunctionInputMyFirstArgumentFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_first_function_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [myFirstFunctionInputConstructorInfo]
    });
}
exports.describeMyFirstFunctionInput = describeMyFirstFunctionInput;
function defaultMyFirstFunctionOutput() {
    let myFirstReturnVal;
    myFirstReturnVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyFirstStructure();
    return new MyFirstFunctionOutput({ myFirstReturn: myFirstReturnVal });
}
exports.defaultMyFirstFunctionOutput = defaultMyFirstFunctionOutput;
function describeMyFirstFunctionOutput() {
    let myFirstFunctionOutputConstructorInfo;
    let myFirstFunctionOutputMyFirstReturnFieldInfo;
    let myFirstReturnFieldInfo;
    myFirstReturnFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "my_first_package",
        schema: "structures",
        structureId: "my_first_structure"
    });
    myFirstFunctionOutputMyFirstReturnFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_first_return",
        description: null,
        typeInfo: myFirstReturnFieldInfo
    });
    myFirstFunctionOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_first_function_output",
        description: null,
        fields: [myFirstFunctionOutputMyFirstReturnFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_first_function_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [myFirstFunctionOutputConstructorInfo]
    });
}
exports.describeMyFirstFunctionOutput = describeMyFirstFunctionOutput;
function defaultMySecondFunctionInput() {
    let argOneVal;
    let argTwoVal;
    argOneVal = myFirstPackageSchemasMyFirstModuleStructures.defaultMyEnumStructure();
    argTwoVal = "";
    return new MySecondFunctionInput({ argOne: argOneVal, argTwo: argTwoVal });
}
exports.defaultMySecondFunctionInput = defaultMySecondFunctionInput;
function describeMySecondFunctionInput() {
    let argOneFieldInfo;
    let argTwoFieldInfo;
    let mySecondFunctionInputArgOneFieldInfo;
    let mySecondFunctionInputArgTwoFieldInfo;
    let mySecondFunctionInputConstructorInfo;
    argOneFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "my_first_package",
        schema: "structures",
        structureId: "my_enum_structure"
    });
    mySecondFunctionInputArgOneFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "arg_one", description: null, typeInfo: argOneFieldInfo });
    argTwoFieldInfo = new typelayerCommonDocumentation.TlText({});
    mySecondFunctionInputArgTwoFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "arg_two", description: null, typeInfo: argTwoFieldInfo });
    mySecondFunctionInputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_second_function_input",
        description: null,
        fields: [
            mySecondFunctionInputArgOneFieldInfo,
            mySecondFunctionInputArgTwoFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_second_function_input",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [mySecondFunctionInputConstructorInfo]
    });
}
exports.describeMySecondFunctionInput = describeMySecondFunctionInput;
function defaultMySecondFunctionOutput() {
    let retOneVal;
    retOneVal = [];
    return new MySecondFunctionOutput({ retOne: retOneVal });
}
exports.defaultMySecondFunctionOutput = defaultMySecondFunctionOutput;
function describeMySecondFunctionOutput() {
    let mySecondFunctionOutputConstructorInfo;
    let mySecondFunctionOutputRetOneFieldInfo;
    let retOneFieldInfo;
    let retOneInnerFieldInfo;
    retOneInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    retOneFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: retOneInnerFieldInfo
    });
    mySecondFunctionOutputRetOneFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "ret_one", description: null, typeInfo: retOneFieldInfo });
    mySecondFunctionOutputConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_second_function_output",
        description: null,
        fields: [mySecondFunctionOutputRetOneFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_second_function_output",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [mySecondFunctionOutputConstructorInfo]
    });
}
exports.describeMySecondFunctionOutput = describeMySecondFunctionOutput;
