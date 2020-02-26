import * as myFirstPackageSchemasMyFirstModuleStructures from "../../schemas/myFirstModule/structures";
import * as typelayerCommonDocumentation from "typelayer-common";
export declare class MyFirstFunctionInput {
    myFirstArgument: string;
    constructor(arg: {
        myFirstArgument: string;
    });
}
export declare class MyFirstFunctionOutput {
    myFirstReturn: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    constructor(arg: {
        myFirstReturn: myFirstPackageSchemasMyFirstModuleStructures.MyFirstStructure;
    });
}
export declare class MySecondFunctionInput {
    argOne: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
    argTwo: string;
    constructor(arg: {
        argOne: myFirstPackageSchemasMyFirstModuleStructures.MyEnumStructure;
        argTwo: string;
    });
}
export declare class MySecondFunctionOutput {
    retOne: Array<string>;
    constructor(arg: {
        retOne: Array<string>;
    });
}
export declare function defaultMyFirstFunctionInput(): MyFirstFunctionInput;
export declare function describeMyFirstFunctionInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultMyFirstFunctionOutput(): MyFirstFunctionOutput;
export declare function describeMyFirstFunctionOutput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultMySecondFunctionInput(): MySecondFunctionInput;
export declare function describeMySecondFunctionInput(): typelayerCommonDocumentation.StructureInfo;
export declare function defaultMySecondFunctionOutput(): MySecondFunctionOutput;
export declare function describeMySecondFunctionOutput(): typelayerCommonDocumentation.StructureInfo;
