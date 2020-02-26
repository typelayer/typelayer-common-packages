import * as typelayerCommonDocumentation from "typelayer-common";
export declare class File {
    contents: string;
    fileid: string;
    constructor(arg: {
        contents: string;
        fileid: string;
    });
}
export declare function defaultFile(): File;
export declare function describeFile(): typelayerCommonDocumentation.StructureInfo;
