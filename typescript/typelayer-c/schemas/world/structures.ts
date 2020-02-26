// Module: schemas.world.structures
import * as typelayerCommonDocumentation from "typelayer-common";

export class File {
  contents: string;
  fileid: string;
  constructor(arg: { contents: string; fileid: string }) {
    Object.assign(this, arg);
  }
}

export function defaultFile(): File {
  let contentsVal: string;
  let fileidVal: string;
  contentsVal = "";
  fileidVal = "";
  return new File({ contents: contentsVal, fileid: fileidVal });
}

export function describeFile(): typelayerCommonDocumentation.StructureInfo {
  let contentsFieldInfo: typelayerCommonDocumentation.TypeInfo;
  let fileConstructorInfo: typelayerCommonDocumentation.ConstructorInfo;
  let fileContentsFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let fileFileidFieldInfo: typelayerCommonDocumentation.FieldDescription;
  let fileidFieldInfo: typelayerCommonDocumentation.TypeInfo;
  contentsFieldInfo = new typelayerCommonDocumentation.TlText({});
  fileContentsFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "contents",
    description: null,
    typeInfo: contentsFieldInfo
  });
  fileidFieldInfo = new typelayerCommonDocumentation.TlText({});
  fileFileidFieldInfo = new typelayerCommonDocumentation.FieldDescription({
    name: "fileid",
    description: null,
    typeInfo: fileidFieldInfo
  });
  fileConstructorInfo = new typelayerCommonDocumentation.ConstructorInfo({
    name: "file",
    description: null,
    fields: [fileContentsFieldInfo, fileFileidFieldInfo]
  });
  return new typelayerCommonDocumentation.StructureInfo({
    structureId: "file",
    structureType: new typelayerCommonDocumentation.StructureEnum({}),
    description: null,
    constructors: [fileConstructorInfo]
  });
}
