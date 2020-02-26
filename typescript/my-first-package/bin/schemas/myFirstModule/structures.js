"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: schemas.myFirstModule.structures
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class MyFirstStructure {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyFirstStructure = MyFirstStructure;
class MyEnumInteger {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyEnumInteger = MyEnumInteger;
class MyEnumText {
    constructor(arg) {
        Object.assign(this, arg);
    }
}
exports.MyEnumText = MyEnumText;
function defaultMyFirstStructure() {
    let myBooleanFieldVal;
    let myDoubleFieldVal;
    let myIntegerFieldVal;
    let myListFieldVal;
    let myMapFieldVal;
    let myNestedFieldVal;
    let myTextFieldVal;
    myBooleanFieldVal = false;
    myDoubleFieldVal = 0.0;
    myIntegerFieldVal = 0;
    myListFieldVal = [];
    myMapFieldVal = new Map([]);
    myNestedFieldVal = defaultMyEnumStructure();
    myTextFieldVal = "";
    return new MyFirstStructure({
        myBooleanField: myBooleanFieldVal,
        myDoubleField: myDoubleFieldVal,
        myIntegerField: myIntegerFieldVal,
        myListField: myListFieldVal,
        myMapField: myMapFieldVal,
        myNestedField: myNestedFieldVal,
        myTextField: myTextFieldVal
    });
}
exports.defaultMyFirstStructure = defaultMyFirstStructure;
function describeMyFirstStructure() {
    let myBooleanFieldFieldInfo;
    let myDoubleFieldFieldInfo;
    let myFirstStructureConstructorInfo;
    let myFirstStructureMyBooleanFieldFieldInfo;
    let myFirstStructureMyDoubleFieldFieldInfo;
    let myFirstStructureMyIntegerFieldFieldInfo;
    let myFirstStructureMyListFieldFieldInfo;
    let myFirstStructureMyMapFieldFieldInfo;
    let myFirstStructureMyNestedFieldFieldInfo;
    let myFirstStructureMyTextFieldFieldInfo;
    let myIntegerFieldFieldInfo;
    let myListFieldFieldInfo;
    let myListFieldInnerFieldInfo;
    let myMapFieldFieldInfo;
    let myMapFieldInnerFieldInfo;
    let myNestedFieldFieldInfo;
    let myTextFieldFieldInfo;
    myBooleanFieldFieldInfo = new typelayerCommonDocumentation.TlBoolean({});
    myFirstStructureMyBooleanFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_boolean_field",
        description: null,
        typeInfo: myBooleanFieldFieldInfo
    });
    myDoubleFieldFieldInfo = new typelayerCommonDocumentation.TlDouble({});
    myFirstStructureMyDoubleFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_double_field",
        description: null,
        typeInfo: myDoubleFieldFieldInfo
    });
    myIntegerFieldFieldInfo = new typelayerCommonDocumentation.TlInteger({});
    myFirstStructureMyIntegerFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_integer_field",
        description: null,
        typeInfo: myIntegerFieldFieldInfo
    });
    myListFieldInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    myListFieldFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: myListFieldInnerFieldInfo
    });
    myFirstStructureMyListFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "my_list_field", description: null, typeInfo: myListFieldFieldInfo });
    myMapFieldInnerFieldInfo = new typelayerCommonDocumentation.TlText({});
    myMapFieldFieldInfo = new typelayerCommonDocumentation.TlMap({
        mapInner: myMapFieldInnerFieldInfo
    });
    myFirstStructureMyMapFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "my_map_field", description: null, typeInfo: myMapFieldFieldInfo });
    myNestedFieldFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "my_first_package",
        schema: "structures",
        structureId: "my_enum_structure"
    });
    myFirstStructureMyNestedFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "my_nested_field",
        description: null,
        typeInfo: myNestedFieldFieldInfo
    });
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlText({});
    myFirstStructureMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo });
    myFirstStructureConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_first_structure",
        description: null,
        fields: [
            myFirstStructureMyBooleanFieldFieldInfo,
            myFirstStructureMyDoubleFieldFieldInfo,
            myFirstStructureMyIntegerFieldFieldInfo,
            myFirstStructureMyListFieldFieldInfo,
            myFirstStructureMyMapFieldFieldInfo,
            myFirstStructureMyNestedFieldFieldInfo,
            myFirstStructureMyTextFieldFieldInfo
        ]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_first_structure",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [myFirstStructureConstructorInfo]
    });
}
exports.describeMyFirstStructure = describeMyFirstStructure;
function defaultMyEnumStructure() {
    let myTextFieldVal;
    myTextFieldVal = 0;
    return new MyEnumInteger({ myTextField: myTextFieldVal });
}
exports.defaultMyEnumStructure = defaultMyEnumStructure;
function defaultMyEnumInteger() {
    let myTextFieldVal;
    myTextFieldVal = 0;
    return new MyEnumInteger({ myTextField: myTextFieldVal });
}
exports.defaultMyEnumInteger = defaultMyEnumInteger;
function defaultMyEnumText() {
    let myTextFieldVal;
    myTextFieldVal = "";
    return new MyEnumText({ myTextField: myTextFieldVal });
}
exports.defaultMyEnumText = defaultMyEnumText;
function describeMyEnumStructure() {
    let myEnumIntegerConstructorInfo;
    let myEnumIntegerMyTextFieldFieldInfo;
    let myEnumTextConstructorInfo;
    let myEnumTextMyTextFieldFieldInfo;
    let myTextFieldFieldInfo;
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlInteger({});
    myEnumIntegerMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo });
    myEnumIntegerConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_enum_integer",
        description: null,
        fields: [myEnumIntegerMyTextFieldFieldInfo]
    });
    myTextFieldFieldInfo = new typelayerCommonDocumentation.TlText({});
    myEnumTextMyTextFieldFieldInfo = new typelayerCommonDocumentation.FieldDescription({ name: "my_text_field", description: null, typeInfo: myTextFieldFieldInfo });
    myEnumTextConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
        name: "my_enum_text",
        description: null,
        fields: [myEnumTextMyTextFieldFieldInfo]
    });
    return new typelayerCommonDocumentation.StructureInfo({
        structureId: "my_enum_structure",
        structureType: new typelayerCommonDocumentation.StructureEnum({}),
        description: null,
        constructors: [myEnumIntegerConstructorInfo, myEnumTextConstructorInfo]
    });
}
exports.describeMyEnumStructure = describeMyEnumStructure;
