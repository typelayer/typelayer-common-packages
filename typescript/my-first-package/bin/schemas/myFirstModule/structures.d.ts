import * as typelayerCommonDocumentation from "typelayer-common";
export declare class MyFirstStructure {
    myBooleanField: boolean;
    myDoubleField: number;
    myIntegerField: number;
    myListField: Array<string>;
    myMapField: Map<string, string>;
    myNestedField: MyEnumStructure;
    myTextField: string;
    constructor(arg: {
        myBooleanField: boolean;
        myDoubleField: number;
        myIntegerField: number;
        myListField: Array<string>;
        myMapField: Map<string, string>;
        myNestedField: MyEnumStructure;
        myTextField: string;
    });
}
export declare class MyEnumInteger {
    myTextField: number;
    constructor(arg: {
        myTextField: number;
    });
}
export declare class MyEnumText {
    myTextField: string;
    constructor(arg: {
        myTextField: string;
    });
}
export declare type MyEnumStructure = MyEnumInteger | MyEnumText;
export declare function defaultMyFirstStructure(): MyFirstStructure;
export declare function describeMyFirstStructure(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultMyEnumStructure(): MyEnumInteger;
export declare function defaultMyEnumInteger(): MyEnumInteger;
export declare function defaultMyEnumText(): MyEnumText;
export declare function describeMyEnumStructure(): typelayerCommonDocumentation.StructureInfo;
