// Module: schemas.definitions.dynamic
import * as typelayerCSchemasDefinitionsStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";

export function dynamicGetApplyChangesProxy(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.ApplyChangesProxy {
  let applyChangesProxyAChangesElementsLeft: number;
  let applyChangesProxyAChangesInit: number;
  let applyChangesProxyAChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let applyChangesProxyAChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let applyChangesProxyAChangesNewFieldsLeft: number;
  let applyChangesProxyAChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let applyChangesProxyBuilder: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  let applyChangesProxyChangesElementsLeft: number;
  let applyChangesProxyChangesInit: number;
  let applyChangesProxyChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let applyChangesProxyChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let applyChangesProxyChangesNewFieldsLeft: number;
  let applyChangesProxyChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let applyChangesProxyFieldName: string;
  let applyChangesProxyFieldsLeft: number;
  let applyChangesProxyInit: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  let applyChangesProxyNewFieldsLeft: number;
  let applyChangesProxyPackageValue: typelayerCSchemasDefinitionsStructures.Package;
  let applyChangesProxyZChangesElementsLeft: number;
  let applyChangesProxyZChangesInit: number;
  let applyChangesProxyZChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let applyChangesProxyZChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let applyChangesProxyZChangesNewFieldsLeft: number;
  let applyChangesProxyZChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let constructor: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct(
    "apply_changes_proxy"
  );
  switch (constructor) {
    case "apply_changes_proxy":
      applyChangesProxyInit = typelayerCSchemasDefinitionsStructures.defaultApplyChangesProxy();
      [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
        numFields,
        applyChangesProxyInit
      ];
      while (-1 < applyChangesProxyFieldsLeft) {
        if (0 < applyChangesProxyFieldsLeft) {
          applyChangesProxyNewFieldsLeft = applyChangesProxyFieldsLeft;
        } else {
          applyChangesProxyNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < applyChangesProxyNewFieldsLeft) {
          applyChangesProxyFieldName = dynamicObject.decoderPopField();
          switch (applyChangesProxyFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "a_changes":
              applyChangesProxyAChangesInit = dynamicObject.decoderPopList();
              [
                applyChangesProxyAChangesElementsLeft,
                applyChangesProxyAChangesListAcc
              ] = [applyChangesProxyAChangesInit, []];
              while (-1 < applyChangesProxyAChangesElementsLeft) {
                if (0 < applyChangesProxyAChangesElementsLeft) {
                  applyChangesProxyAChangesNewFieldsLeft = applyChangesProxyAChangesElementsLeft;
                } else {
                  applyChangesProxyAChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < applyChangesProxyAChangesNewFieldsLeft) {
                  applyChangesProxyAChangesListValue = dynamicGetChange(
                    dynamicObject
                  );
                  applyChangesProxyAChangesListAcc.push(
                    applyChangesProxyAChangesListValue
                  );

                  [
                    applyChangesProxyAChangesElementsLeft,
                    applyChangesProxyAChangesListAcc
                  ] = [
                    applyChangesProxyAChangesNewFieldsLeft - 1,
                    applyChangesProxyAChangesListAcc
                  ];
                } else {
                  [
                    applyChangesProxyAChangesElementsLeft,
                    applyChangesProxyAChangesListAcc
                  ] = [-1, applyChangesProxyAChangesListAcc];
                }
              }
              applyChangesProxyAChangesValue = applyChangesProxyAChangesListAcc;
              applyChangesProxyBuilder.aChanges = applyChangesProxyAChangesValue;

              [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
                applyChangesProxyNewFieldsLeft - 1,
                applyChangesProxyBuilder
              ];
              break;
            case "changes":
              applyChangesProxyChangesInit = dynamicObject.decoderPopList();
              [
                applyChangesProxyChangesElementsLeft,
                applyChangesProxyChangesListAcc
              ] = [applyChangesProxyChangesInit, []];
              while (-1 < applyChangesProxyChangesElementsLeft) {
                if (0 < applyChangesProxyChangesElementsLeft) {
                  applyChangesProxyChangesNewFieldsLeft = applyChangesProxyChangesElementsLeft;
                } else {
                  applyChangesProxyChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < applyChangesProxyChangesNewFieldsLeft) {
                  applyChangesProxyChangesListValue = dynamicGetChange(
                    dynamicObject
                  );
                  applyChangesProxyChangesListAcc.push(
                    applyChangesProxyChangesListValue
                  );

                  [
                    applyChangesProxyChangesElementsLeft,
                    applyChangesProxyChangesListAcc
                  ] = [
                    applyChangesProxyChangesNewFieldsLeft - 1,
                    applyChangesProxyChangesListAcc
                  ];
                } else {
                  [
                    applyChangesProxyChangesElementsLeft,
                    applyChangesProxyChangesListAcc
                  ] = [-1, applyChangesProxyChangesListAcc];
                }
              }
              applyChangesProxyChangesValue = applyChangesProxyChangesListAcc;
              applyChangesProxyBuilder.changes = applyChangesProxyChangesValue;

              [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
                applyChangesProxyNewFieldsLeft - 1,
                applyChangesProxyBuilder
              ];
              break;
            case "package":
              applyChangesProxyPackageValue = dynamicGetPackage(dynamicObject);
              applyChangesProxyBuilder.package = applyChangesProxyPackageValue;

              [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
                applyChangesProxyNewFieldsLeft - 1,
                applyChangesProxyBuilder
              ];
              break;
            case "z_changes":
              applyChangesProxyZChangesInit = dynamicObject.decoderPopList();
              [
                applyChangesProxyZChangesElementsLeft,
                applyChangesProxyZChangesListAcc
              ] = [applyChangesProxyZChangesInit, []];
              while (-1 < applyChangesProxyZChangesElementsLeft) {
                if (0 < applyChangesProxyZChangesElementsLeft) {
                  applyChangesProxyZChangesNewFieldsLeft = applyChangesProxyZChangesElementsLeft;
                } else {
                  applyChangesProxyZChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < applyChangesProxyZChangesNewFieldsLeft) {
                  applyChangesProxyZChangesListValue = dynamicGetChange(
                    dynamicObject
                  );
                  applyChangesProxyZChangesListAcc.push(
                    applyChangesProxyZChangesListValue
                  );

                  [
                    applyChangesProxyZChangesElementsLeft,
                    applyChangesProxyZChangesListAcc
                  ] = [
                    applyChangesProxyZChangesNewFieldsLeft - 1,
                    applyChangesProxyZChangesListAcc
                  ];
                } else {
                  [
                    applyChangesProxyZChangesElementsLeft,
                    applyChangesProxyZChangesListAcc
                  ] = [-1, applyChangesProxyZChangesListAcc];
                }
              }
              applyChangesProxyZChangesValue = applyChangesProxyZChangesListAcc;
              applyChangesProxyBuilder.zChanges = applyChangesProxyZChangesValue;

              [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
                applyChangesProxyNewFieldsLeft - 1,
                applyChangesProxyBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [applyChangesProxyFieldsLeft, applyChangesProxyBuilder] = [
            -1,
            applyChangesProxyBuilder
          ];
        }
      }
      return applyChangesProxyBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjApplyChangesProxy(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.ApplyChangesProxy {
  let retObj: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  retObj = dynamicGetApplyChangesProxy(dynamicObject);
  return retObj;
}

export function dynamicPutApplyChangesProxy(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy
): void {
  let applyChangesProxyFieldApplyChangesProxy: typelayerCSchemasDefinitionsStructures.ApplyChangesProxy;
  if (
    inputObject instanceof
    typelayerCSchemasDefinitionsStructures.ApplyChangesProxy
  ) {
    let applyChangesProxyFieldApplyChangesProxy = inputObject;
    dynamicObject.encoderPutStruct("apply_changes_proxy", 4);
    dynamicObject.encoderPutField("a_changes");
    dynamicObject.encoderPutList(
      applyChangesProxyFieldApplyChangesProxy.aChanges.length
    );
    if (0 === applyChangesProxyFieldApplyChangesProxy.aChanges.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let aChangesIndex: number = 0;
      for (let aChangesElem of applyChangesProxyFieldApplyChangesProxy.aChanges) {
        dynamicPutChange(dynamicObject, aChangesElem);
        dynamicObject.encoderPutElementEnd(
          aChangesIndex ===
            applyChangesProxyFieldApplyChangesProxy.aChanges.length - 1
        );

        aChangesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("changes");
    dynamicObject.encoderPutList(
      applyChangesProxyFieldApplyChangesProxy.changes.length
    );
    if (0 === applyChangesProxyFieldApplyChangesProxy.changes.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let changesIndex: number = 0;
      for (let changesElem of applyChangesProxyFieldApplyChangesProxy.changes) {
        dynamicPutChange(dynamicObject, changesElem);
        dynamicObject.encoderPutElementEnd(
          changesIndex ===
            applyChangesProxyFieldApplyChangesProxy.changes.length - 1
        );

        changesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("package");
    dynamicPutPackage(
      dynamicObject,
      applyChangesProxyFieldApplyChangesProxy.package
    );
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("z_changes");
    dynamicObject.encoderPutList(
      applyChangesProxyFieldApplyChangesProxy.zChanges.length
    );
    if (0 === applyChangesProxyFieldApplyChangesProxy.zChanges.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let zChangesIndex: number = 0;
      for (let zChangesElem of applyChangesProxyFieldApplyChangesProxy.zChanges) {
        dynamicPutChange(dynamicObject, zChangesElem);
        dynamicObject.encoderPutElementEnd(
          zChangesIndex ===
            applyChangesProxyFieldApplyChangesProxy.zChanges.length - 1
        );

        zChangesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetBackend(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Backend {
  let constructor: string;
  let databaseBuilder: typelayerCSchemasDefinitionsStructures.Database;
  let databaseFieldName: string;
  let databaseFieldsLeft: number;
  let databaseInit: typelayerCSchemasDefinitionsStructures.Database;
  let databaseNewFieldsLeft: number;
  let numFields: number;
  let simpleBuilder: typelayerCSchemasDefinitionsStructures.Simple;
  let simpleFieldName: string;
  let simpleFieldsLeft: number;
  let simpleInit: typelayerCSchemasDefinitionsStructures.Simple;
  let simpleNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("database");
  switch (constructor) {
    case "database":
      databaseInit = typelayerCSchemasDefinitionsStructures.defaultDatabase();
      [databaseFieldsLeft, databaseBuilder] = [numFields, databaseInit];
      while (-1 < databaseFieldsLeft) {
        if (0 < databaseFieldsLeft) {
          databaseNewFieldsLeft = databaseFieldsLeft;
        } else {
          databaseNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < databaseNewFieldsLeft) {
          databaseFieldName = dynamicObject.decoderPopField();
          switch (databaseFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [databaseFieldsLeft, databaseBuilder] = [-1, databaseBuilder];
        }
      }
      return databaseBuilder;
      break;
    case "simple":
      simpleInit = typelayerCSchemasDefinitionsStructures.defaultSimple();
      [simpleFieldsLeft, simpleBuilder] = [numFields, simpleInit];
      while (-1 < simpleFieldsLeft) {
        if (0 < simpleFieldsLeft) {
          simpleNewFieldsLeft = simpleFieldsLeft;
        } else {
          simpleNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < simpleNewFieldsLeft) {
          simpleFieldName = dynamicObject.decoderPopField();
          switch (simpleFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [simpleFieldsLeft, simpleBuilder] = [-1, simpleBuilder];
        }
      }
      return simpleBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjBackend(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Backend {
  let retObj: typelayerCSchemasDefinitionsStructures.Backend;
  retObj = dynamicGetBackend(dynamicObject);
  return retObj;
}

export function dynamicPutBackend(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Backend
): void {
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Database) {
    let backendFieldDatabase = inputObject;
    dynamicObject.encoderPutStruct("database", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Simple
  ) {
    let backendFieldSimple = inputObject;
    dynamicObject.encoderPutStruct("simple", 0);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetBasicType(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.BasicType {
  let binaryTypeBuilder: typelayerCSchemasDefinitionsStructures.BinaryType;
  let binaryTypeFieldName: string;
  let binaryTypeFieldsLeft: number;
  let binaryTypeInit: typelayerCSchemasDefinitionsStructures.BinaryType;
  let binaryTypeNewFieldsLeft: number;
  let booleanTypeBuilder: typelayerCSchemasDefinitionsStructures.BooleanType;
  let booleanTypeFieldName: string;
  let booleanTypeFieldsLeft: number;
  let booleanTypeInit: typelayerCSchemasDefinitionsStructures.BooleanType;
  let booleanTypeNewFieldsLeft: number;
  let constructor: string;
  let dateTimeTypeBuilder: typelayerCSchemasDefinitionsStructures.DateTimeType;
  let dateTimeTypeFieldName: string;
  let dateTimeTypeFieldsLeft: number;
  let dateTimeTypeInit: typelayerCSchemasDefinitionsStructures.DateTimeType;
  let dateTimeTypeNewFieldsLeft: number;
  let doubleTypeBuilder: typelayerCSchemasDefinitionsStructures.DoubleType;
  let doubleTypeFieldName: string;
  let doubleTypeFieldsLeft: number;
  let doubleTypeInit: typelayerCSchemasDefinitionsStructures.DoubleType;
  let doubleTypeNewFieldsLeft: number;
  let integerTypeBuilder: typelayerCSchemasDefinitionsStructures.IntegerType;
  let integerTypeFieldName: string;
  let integerTypeFieldsLeft: number;
  let integerTypeInit: typelayerCSchemasDefinitionsStructures.IntegerType;
  let integerTypeNewFieldsLeft: number;
  let listTypeBuilder: typelayerCSchemasDefinitionsStructures.ListType;
  let listTypeFieldName: string;
  let listTypeFieldsLeft: number;
  let listTypeInit: typelayerCSchemasDefinitionsStructures.ListType;
  let listTypeNewFieldsLeft: number;
  let listTypeOfValue: typelayerCSchemasDefinitionsStructures.BasicType;
  let mapTypeBuilder: typelayerCSchemasDefinitionsStructures.MapType;
  let mapTypeFieldName: string;
  let mapTypeFieldsLeft: number;
  let mapTypeInit: typelayerCSchemasDefinitionsStructures.MapType;
  let mapTypeNewFieldsLeft: number;
  let mapTypeOfValue: typelayerCSchemasDefinitionsStructures.BasicType;
  let maybeTypeBuilder: typelayerCSchemasDefinitionsStructures.MaybeType;
  let maybeTypeFieldName: string;
  let maybeTypeFieldsLeft: number;
  let maybeTypeInit: typelayerCSchemasDefinitionsStructures.MaybeType;
  let maybeTypeNewFieldsLeft: number;
  let maybeTypeOfValue: typelayerCSchemasDefinitionsStructures.BasicType;
  let numFields: number;
  let structTypeBuilder: typelayerCSchemasDefinitionsStructures.StructType;
  let structTypeFieldName: string;
  let structTypeFieldsLeft: number;
  let structTypeIdValue: string;
  let structTypeInit: typelayerCSchemasDefinitionsStructures.StructType;
  let structTypeNewFieldsLeft: number;
  let structTypeSchemaValue: typelayerCSchemasDefinitionsStructures.SchemaReference;
  let textTypeBuilder: typelayerCSchemasDefinitionsStructures.TextType;
  let textTypeFieldName: string;
  let textTypeFieldsLeft: number;
  let textTypeInit: typelayerCSchemasDefinitionsStructures.TextType;
  let textTypeNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("binary_type");
  switch (constructor) {
    case "binary_type":
      binaryTypeInit = typelayerCSchemasDefinitionsStructures.defaultBinaryType();
      [binaryTypeFieldsLeft, binaryTypeBuilder] = [numFields, binaryTypeInit];
      while (-1 < binaryTypeFieldsLeft) {
        if (0 < binaryTypeFieldsLeft) {
          binaryTypeNewFieldsLeft = binaryTypeFieldsLeft;
        } else {
          binaryTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < binaryTypeNewFieldsLeft) {
          binaryTypeFieldName = dynamicObject.decoderPopField();
          switch (binaryTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [binaryTypeFieldsLeft, binaryTypeBuilder] = [-1, binaryTypeBuilder];
        }
      }
      return binaryTypeBuilder;
      break;
    case "boolean_type":
      booleanTypeInit = typelayerCSchemasDefinitionsStructures.defaultBooleanType();
      [booleanTypeFieldsLeft, booleanTypeBuilder] = [
        numFields,
        booleanTypeInit
      ];
      while (-1 < booleanTypeFieldsLeft) {
        if (0 < booleanTypeFieldsLeft) {
          booleanTypeNewFieldsLeft = booleanTypeFieldsLeft;
        } else {
          booleanTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < booleanTypeNewFieldsLeft) {
          booleanTypeFieldName = dynamicObject.decoderPopField();
          switch (booleanTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [booleanTypeFieldsLeft, booleanTypeBuilder] = [
            -1,
            booleanTypeBuilder
          ];
        }
      }
      return booleanTypeBuilder;
      break;
    case "date_time_type":
      dateTimeTypeInit = typelayerCSchemasDefinitionsStructures.defaultDateTimeType();
      [dateTimeTypeFieldsLeft, dateTimeTypeBuilder] = [
        numFields,
        dateTimeTypeInit
      ];
      while (-1 < dateTimeTypeFieldsLeft) {
        if (0 < dateTimeTypeFieldsLeft) {
          dateTimeTypeNewFieldsLeft = dateTimeTypeFieldsLeft;
        } else {
          dateTimeTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < dateTimeTypeNewFieldsLeft) {
          dateTimeTypeFieldName = dynamicObject.decoderPopField();
          switch (dateTimeTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [dateTimeTypeFieldsLeft, dateTimeTypeBuilder] = [
            -1,
            dateTimeTypeBuilder
          ];
        }
      }
      return dateTimeTypeBuilder;
      break;
    case "double_type":
      doubleTypeInit = typelayerCSchemasDefinitionsStructures.defaultDoubleType();
      [doubleTypeFieldsLeft, doubleTypeBuilder] = [numFields, doubleTypeInit];
      while (-1 < doubleTypeFieldsLeft) {
        if (0 < doubleTypeFieldsLeft) {
          doubleTypeNewFieldsLeft = doubleTypeFieldsLeft;
        } else {
          doubleTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < doubleTypeNewFieldsLeft) {
          doubleTypeFieldName = dynamicObject.decoderPopField();
          switch (doubleTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [doubleTypeFieldsLeft, doubleTypeBuilder] = [-1, doubleTypeBuilder];
        }
      }
      return doubleTypeBuilder;
      break;
    case "integer_type":
      integerTypeInit = typelayerCSchemasDefinitionsStructures.defaultIntegerType();
      [integerTypeFieldsLeft, integerTypeBuilder] = [
        numFields,
        integerTypeInit
      ];
      while (-1 < integerTypeFieldsLeft) {
        if (0 < integerTypeFieldsLeft) {
          integerTypeNewFieldsLeft = integerTypeFieldsLeft;
        } else {
          integerTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < integerTypeNewFieldsLeft) {
          integerTypeFieldName = dynamicObject.decoderPopField();
          switch (integerTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [integerTypeFieldsLeft, integerTypeBuilder] = [
            -1,
            integerTypeBuilder
          ];
        }
      }
      return integerTypeBuilder;
      break;
    case "list_type":
      listTypeInit = typelayerCSchemasDefinitionsStructures.defaultListType();
      [listTypeFieldsLeft, listTypeBuilder] = [numFields, listTypeInit];
      while (-1 < listTypeFieldsLeft) {
        if (0 < listTypeFieldsLeft) {
          listTypeNewFieldsLeft = listTypeFieldsLeft;
        } else {
          listTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < listTypeNewFieldsLeft) {
          listTypeFieldName = dynamicObject.decoderPopField();
          switch (listTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "of":
              listTypeOfValue = dynamicGetBasicType(dynamicObject);
              listTypeBuilder.of = listTypeOfValue;

              [listTypeFieldsLeft, listTypeBuilder] = [
                listTypeNewFieldsLeft - 1,
                listTypeBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [listTypeFieldsLeft, listTypeBuilder] = [-1, listTypeBuilder];
        }
      }
      return listTypeBuilder;
      break;
    case "map_type":
      mapTypeInit = typelayerCSchemasDefinitionsStructures.defaultMapType();
      [mapTypeFieldsLeft, mapTypeBuilder] = [numFields, mapTypeInit];
      while (-1 < mapTypeFieldsLeft) {
        if (0 < mapTypeFieldsLeft) {
          mapTypeNewFieldsLeft = mapTypeFieldsLeft;
        } else {
          mapTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < mapTypeNewFieldsLeft) {
          mapTypeFieldName = dynamicObject.decoderPopField();
          switch (mapTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "of":
              mapTypeOfValue = dynamicGetBasicType(dynamicObject);
              mapTypeBuilder.of = mapTypeOfValue;

              [mapTypeFieldsLeft, mapTypeBuilder] = [
                mapTypeNewFieldsLeft - 1,
                mapTypeBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [mapTypeFieldsLeft, mapTypeBuilder] = [-1, mapTypeBuilder];
        }
      }
      return mapTypeBuilder;
      break;
    case "maybe_type":
      maybeTypeInit = typelayerCSchemasDefinitionsStructures.defaultMaybeType();
      [maybeTypeFieldsLeft, maybeTypeBuilder] = [numFields, maybeTypeInit];
      while (-1 < maybeTypeFieldsLeft) {
        if (0 < maybeTypeFieldsLeft) {
          maybeTypeNewFieldsLeft = maybeTypeFieldsLeft;
        } else {
          maybeTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < maybeTypeNewFieldsLeft) {
          maybeTypeFieldName = dynamicObject.decoderPopField();
          switch (maybeTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "of":
              maybeTypeOfValue = dynamicGetBasicType(dynamicObject);
              maybeTypeBuilder.of = maybeTypeOfValue;

              [maybeTypeFieldsLeft, maybeTypeBuilder] = [
                maybeTypeNewFieldsLeft - 1,
                maybeTypeBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [maybeTypeFieldsLeft, maybeTypeBuilder] = [-1, maybeTypeBuilder];
        }
      }
      return maybeTypeBuilder;
      break;
    case "struct_type":
      structTypeInit = typelayerCSchemasDefinitionsStructures.defaultStructType();
      [structTypeFieldsLeft, structTypeBuilder] = [numFields, structTypeInit];
      while (-1 < structTypeFieldsLeft) {
        if (0 < structTypeFieldsLeft) {
          structTypeNewFieldsLeft = structTypeFieldsLeft;
        } else {
          structTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < structTypeNewFieldsLeft) {
          structTypeFieldName = dynamicObject.decoderPopField();
          switch (structTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "id":
              structTypeIdValue = dynamicObject.decoderPopString();
              structTypeBuilder.id = structTypeIdValue;

              [structTypeFieldsLeft, structTypeBuilder] = [
                structTypeNewFieldsLeft - 1,
                structTypeBuilder
              ];
              break;
            case "schema":
              structTypeSchemaValue = dynamicGetSchemaReference(dynamicObject);
              structTypeBuilder.schema = structTypeSchemaValue;

              [structTypeFieldsLeft, structTypeBuilder] = [
                structTypeNewFieldsLeft - 1,
                structTypeBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [structTypeFieldsLeft, structTypeBuilder] = [-1, structTypeBuilder];
        }
      }
      return structTypeBuilder;
      break;
    case "text_type":
      textTypeInit = typelayerCSchemasDefinitionsStructures.defaultTextType();
      [textTypeFieldsLeft, textTypeBuilder] = [numFields, textTypeInit];
      while (-1 < textTypeFieldsLeft) {
        if (0 < textTypeFieldsLeft) {
          textTypeNewFieldsLeft = textTypeFieldsLeft;
        } else {
          textTypeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < textTypeNewFieldsLeft) {
          textTypeFieldName = dynamicObject.decoderPopField();
          switch (textTypeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [textTypeFieldsLeft, textTypeBuilder] = [-1, textTypeBuilder];
        }
      }
      return textTypeBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjBasicType(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.BasicType {
  let retObj: typelayerCSchemasDefinitionsStructures.BasicType;
  retObj = dynamicGetBasicType(dynamicObject);
  return retObj;
}

export function dynamicPutBasicType(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.BasicType
): void {
  let basicTypeFieldListType: typelayerCSchemasDefinitionsStructures.ListType;
  let basicTypeFieldMapType: typelayerCSchemasDefinitionsStructures.MapType;
  let basicTypeFieldMaybeType: typelayerCSchemasDefinitionsStructures.MaybeType;
  let basicTypeFieldStructType: typelayerCSchemasDefinitionsStructures.StructType;
  if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.BinaryType
  ) {
    let basicTypeFieldBinaryType = inputObject;
    dynamicObject.encoderPutStruct("binary_type", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.BooleanType
  ) {
    let basicTypeFieldBooleanType = inputObject;
    dynamicObject.encoderPutStruct("boolean_type", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.DateTimeType
  ) {
    let basicTypeFieldDateTimeType = inputObject;
    dynamicObject.encoderPutStruct("date_time_type", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.DoubleType
  ) {
    let basicTypeFieldDoubleType = inputObject;
    dynamicObject.encoderPutStruct("double_type", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.IntegerType
  ) {
    let basicTypeFieldIntegerType = inputObject;
    dynamicObject.encoderPutStruct("integer_type", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ListType
  ) {
    let basicTypeFieldListType = inputObject;
    dynamicObject.encoderPutStruct("list_type", 1);
    dynamicObject.encoderPutField("of");
    dynamicPutBasicType(dynamicObject, basicTypeFieldListType.of);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.MapType
  ) {
    let basicTypeFieldMapType = inputObject;
    dynamicObject.encoderPutStruct("map_type", 1);
    dynamicObject.encoderPutField("of");
    dynamicPutBasicType(dynamicObject, basicTypeFieldMapType.of);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.MaybeType
  ) {
    let basicTypeFieldMaybeType = inputObject;
    dynamicObject.encoderPutStruct("maybe_type", 1);
    dynamicObject.encoderPutField("of");
    dynamicPutBasicType(dynamicObject, basicTypeFieldMaybeType.of);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.StructType
  ) {
    let basicTypeFieldStructType = inputObject;
    dynamicObject.encoderPutStruct("struct_type", 2);
    dynamicObject.encoderPutField("id");
    dynamicObject.encoderPutString(basicTypeFieldStructType.id);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schema");
    dynamicPutSchemaReference(dynamicObject, basicTypeFieldStructType.schema);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.TextType
  ) {
    let basicTypeFieldTextType = inputObject;
    dynamicObject.encoderPutStruct("text_type", 0);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetChange(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Change {
  let addColumnBuilder: typelayerCSchemasDefinitionsStructures.AddColumn;
  let addColumnColumnIdValue: string;
  let addColumnDatabaseIdValue: string;
  let addColumnFieldName: string;
  let addColumnFieldsLeft: number;
  let addColumnInit: typelayerCSchemasDefinitionsStructures.AddColumn;
  let addColumnNewFieldsLeft: number;
  let addColumnTableIdValue: string;
  let addDatabaseBuilder: typelayerCSchemasDefinitionsStructures.AddDatabase;
  let addDatabaseDatabaseIdValue: string;
  let addDatabaseFieldName: string;
  let addDatabaseFieldsLeft: number;
  let addDatabaseInit: typelayerCSchemasDefinitionsStructures.AddDatabase;
  let addDatabaseNewFieldsLeft: number;
  let addFieldBuilder: typelayerCSchemasDefinitionsStructures.AddField;
  let addFieldConstructorIdValue: string;
  let addFieldFieldIdValue: string;
  let addFieldFieldName: string;
  let addFieldFieldValue: typelayerCSchemasDefinitionsStructures.Field;
  let addFieldFieldsLeft: number;
  let addFieldInit: typelayerCSchemasDefinitionsStructures.AddField;
  let addFieldNewFieldsLeft: number;
  let addFieldSchemaIdValue: string;
  let addFieldStructureIdValue: string;
  let addMutationArgumentArgumentIdValue: string;
  let addMutationArgumentBuilder: typelayerCSchemasDefinitionsStructures.AddMutationArgument;
  let addMutationArgumentFieldName: string;
  let addMutationArgumentFieldValue: typelayerCSchemasDefinitionsStructures.Field;
  let addMutationArgumentFieldsLeft: number;
  let addMutationArgumentInit: typelayerCSchemasDefinitionsStructures.AddMutationArgument;
  let addMutationArgumentMutationIdValue: string;
  let addMutationArgumentNewFieldsLeft: number;
  let addMutationArgumentServiceIdValue: string;
  let addMutationBuilder: typelayerCSchemasDefinitionsStructures.AddMutation;
  let addMutationFieldName: string;
  let addMutationFieldsLeft: number;
  let addMutationInit: typelayerCSchemasDefinitionsStructures.AddMutation;
  let addMutationMutationIdValue: string;
  let addMutationNewFieldsLeft: number;
  let addMutationReturnBuilder: typelayerCSchemasDefinitionsStructures.AddMutationReturn;
  let addMutationReturnFieldName: string;
  let addMutationReturnFieldValue: typelayerCSchemasDefinitionsStructures.Field;
  let addMutationReturnFieldsLeft: number;
  let addMutationReturnInit: typelayerCSchemasDefinitionsStructures.AddMutationReturn;
  let addMutationReturnMutationIdValue: string;
  let addMutationReturnNewFieldsLeft: number;
  let addMutationReturnReturnIdValue: string;
  let addMutationReturnServiceIdValue: string;
  let addMutationServiceIdValue: string;
  let addMutationTargetTableValue: typelayerCSchemasDefinitionsStructures.TableReference;
  let addQueryArgumentArgumentIdValue: string;
  let addQueryArgumentBuilder: typelayerCSchemasDefinitionsStructures.AddQueryArgument;
  let addQueryArgumentFieldName: string;
  let addQueryArgumentFieldValue: typelayerCSchemasDefinitionsStructures.Field;
  let addQueryArgumentFieldsLeft: number;
  let addQueryArgumentInit: typelayerCSchemasDefinitionsStructures.AddQueryArgument;
  let addQueryArgumentNewFieldsLeft: number;
  let addQueryArgumentQueryIdValue: string;
  let addQueryArgumentServiceIdValue: string;
  let addQueryBuilder: typelayerCSchemasDefinitionsStructures.AddQuery;
  let addQueryFieldName: string;
  let addQueryFieldsLeft: number;
  let addQueryInit: typelayerCSchemasDefinitionsStructures.AddQuery;
  let addQueryNewFieldsLeft: number;
  let addQueryQueryIdValue: string;
  let addQueryReturnBuilder: typelayerCSchemasDefinitionsStructures.AddQueryReturn;
  let addQueryReturnFieldName: string;
  let addQueryReturnFieldValue: typelayerCSchemasDefinitionsStructures.Field;
  let addQueryReturnFieldsLeft: number;
  let addQueryReturnInit: typelayerCSchemasDefinitionsStructures.AddQueryReturn;
  let addQueryReturnNewFieldsLeft: number;
  let addQueryReturnQueryIdValue: string;
  let addQueryReturnReturnIdValue: string;
  let addQueryReturnServiceIdValue: string;
  let addQueryServiceIdValue: string;
  let addSchemaBuilder: typelayerCSchemasDefinitionsStructures.AddSchema;
  let addSchemaFieldName: string;
  let addSchemaFieldsLeft: number;
  let addSchemaInit: typelayerCSchemasDefinitionsStructures.AddSchema;
  let addSchemaNewFieldsLeft: number;
  let addSchemaSchemaIdValue: string;
  let addServiceBuilder: typelayerCSchemasDefinitionsStructures.AddService;
  let addServiceFieldName: string;
  let addServiceFieldsLeft: number;
  let addServiceInit: typelayerCSchemasDefinitionsStructures.AddService;
  let addServiceNewFieldsLeft: number;
  let addServiceServiceIdValue: string;
  let addStructureBuilder: typelayerCSchemasDefinitionsStructures.AddStructure;
  let addStructureFieldName: string;
  let addStructureFieldsLeft: number;
  let addStructureInit: typelayerCSchemasDefinitionsStructures.AddStructure;
  let addStructureNewFieldsLeft: number;
  let addStructureSchemaIdValue: string;
  let addStructureStructureIdValue: string;
  let addTableBuilder: typelayerCSchemasDefinitionsStructures.AddTable;
  let addTableDatabaseIdValue: string;
  let addTableFieldName: string;
  let addTableFieldsLeft: number;
  let addTableInit: typelayerCSchemasDefinitionsStructures.AddTable;
  let addTableNewFieldsLeft: number;
  let addTableTableIdValue: string;
  let constructor: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("add_column");
  switch (constructor) {
    case "add_column":
      addColumnInit = typelayerCSchemasDefinitionsStructures.defaultAddColumn();
      [addColumnFieldsLeft, addColumnBuilder] = [numFields, addColumnInit];
      while (-1 < addColumnFieldsLeft) {
        if (0 < addColumnFieldsLeft) {
          addColumnNewFieldsLeft = addColumnFieldsLeft;
        } else {
          addColumnNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addColumnNewFieldsLeft) {
          addColumnFieldName = dynamicObject.decoderPopField();
          switch (addColumnFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "column_id":
              addColumnColumnIdValue = dynamicObject.decoderPopString();
              addColumnBuilder.columnId = addColumnColumnIdValue;

              [addColumnFieldsLeft, addColumnBuilder] = [
                addColumnNewFieldsLeft - 1,
                addColumnBuilder
              ];
              break;
            case "database_id":
              addColumnDatabaseIdValue = dynamicObject.decoderPopString();
              addColumnBuilder.databaseId = addColumnDatabaseIdValue;

              [addColumnFieldsLeft, addColumnBuilder] = [
                addColumnNewFieldsLeft - 1,
                addColumnBuilder
              ];
              break;
            case "table_id":
              addColumnTableIdValue = dynamicObject.decoderPopString();
              addColumnBuilder.tableId = addColumnTableIdValue;

              [addColumnFieldsLeft, addColumnBuilder] = [
                addColumnNewFieldsLeft - 1,
                addColumnBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addColumnFieldsLeft, addColumnBuilder] = [-1, addColumnBuilder];
        }
      }
      return addColumnBuilder;
      break;
    case "add_database":
      addDatabaseInit = typelayerCSchemasDefinitionsStructures.defaultAddDatabase();
      [addDatabaseFieldsLeft, addDatabaseBuilder] = [
        numFields,
        addDatabaseInit
      ];
      while (-1 < addDatabaseFieldsLeft) {
        if (0 < addDatabaseFieldsLeft) {
          addDatabaseNewFieldsLeft = addDatabaseFieldsLeft;
        } else {
          addDatabaseNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addDatabaseNewFieldsLeft) {
          addDatabaseFieldName = dynamicObject.decoderPopField();
          switch (addDatabaseFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "database_id":
              addDatabaseDatabaseIdValue = dynamicObject.decoderPopString();
              addDatabaseBuilder.databaseId = addDatabaseDatabaseIdValue;

              [addDatabaseFieldsLeft, addDatabaseBuilder] = [
                addDatabaseNewFieldsLeft - 1,
                addDatabaseBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addDatabaseFieldsLeft, addDatabaseBuilder] = [
            -1,
            addDatabaseBuilder
          ];
        }
      }
      return addDatabaseBuilder;
      break;
    case "add_field":
      addFieldInit = typelayerCSchemasDefinitionsStructures.defaultAddField();
      [addFieldFieldsLeft, addFieldBuilder] = [numFields, addFieldInit];
      while (-1 < addFieldFieldsLeft) {
        if (0 < addFieldFieldsLeft) {
          addFieldNewFieldsLeft = addFieldFieldsLeft;
        } else {
          addFieldNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addFieldNewFieldsLeft) {
          addFieldFieldName = dynamicObject.decoderPopField();
          switch (addFieldFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "constructor_id":
              addFieldConstructorIdValue = dynamicObject.decoderPopString();
              addFieldBuilder.constructorId = addFieldConstructorIdValue;

              [addFieldFieldsLeft, addFieldBuilder] = [
                addFieldNewFieldsLeft - 1,
                addFieldBuilder
              ];
              break;
            case "field":
              addFieldFieldValue = dynamicGetField(dynamicObject);
              addFieldBuilder.field = addFieldFieldValue;

              [addFieldFieldsLeft, addFieldBuilder] = [
                addFieldNewFieldsLeft - 1,
                addFieldBuilder
              ];
              break;
            case "field_id":
              addFieldFieldIdValue = dynamicObject.decoderPopString();
              addFieldBuilder.fieldId = addFieldFieldIdValue;

              [addFieldFieldsLeft, addFieldBuilder] = [
                addFieldNewFieldsLeft - 1,
                addFieldBuilder
              ];
              break;
            case "schema_id":
              addFieldSchemaIdValue = dynamicObject.decoderPopString();
              addFieldBuilder.schemaId = addFieldSchemaIdValue;

              [addFieldFieldsLeft, addFieldBuilder] = [
                addFieldNewFieldsLeft - 1,
                addFieldBuilder
              ];
              break;
            case "structure_id":
              addFieldStructureIdValue = dynamicObject.decoderPopString();
              addFieldBuilder.structureId = addFieldStructureIdValue;

              [addFieldFieldsLeft, addFieldBuilder] = [
                addFieldNewFieldsLeft - 1,
                addFieldBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addFieldFieldsLeft, addFieldBuilder] = [-1, addFieldBuilder];
        }
      }
      return addFieldBuilder;
      break;
    case "add_mutation":
      addMutationInit = typelayerCSchemasDefinitionsStructures.defaultAddMutation();
      [addMutationFieldsLeft, addMutationBuilder] = [
        numFields,
        addMutationInit
      ];
      while (-1 < addMutationFieldsLeft) {
        if (0 < addMutationFieldsLeft) {
          addMutationNewFieldsLeft = addMutationFieldsLeft;
        } else {
          addMutationNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addMutationNewFieldsLeft) {
          addMutationFieldName = dynamicObject.decoderPopField();
          switch (addMutationFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "mutation_id":
              addMutationMutationIdValue = dynamicObject.decoderPopString();
              addMutationBuilder.mutationId = addMutationMutationIdValue;

              [addMutationFieldsLeft, addMutationBuilder] = [
                addMutationNewFieldsLeft - 1,
                addMutationBuilder
              ];
              break;
            case "service_id":
              addMutationServiceIdValue = dynamicObject.decoderPopString();
              addMutationBuilder.serviceId = addMutationServiceIdValue;

              [addMutationFieldsLeft, addMutationBuilder] = [
                addMutationNewFieldsLeft - 1,
                addMutationBuilder
              ];
              break;
            case "target_table":
              addMutationTargetTableValue = dynamicGetTableReference(
                dynamicObject
              );
              addMutationBuilder.targetTable = addMutationTargetTableValue;

              [addMutationFieldsLeft, addMutationBuilder] = [
                addMutationNewFieldsLeft - 1,
                addMutationBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addMutationFieldsLeft, addMutationBuilder] = [
            -1,
            addMutationBuilder
          ];
        }
      }
      return addMutationBuilder;
      break;
    case "add_mutation_argument":
      addMutationArgumentInit = typelayerCSchemasDefinitionsStructures.defaultAddMutationArgument();
      [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
        numFields,
        addMutationArgumentInit
      ];
      while (-1 < addMutationArgumentFieldsLeft) {
        if (0 < addMutationArgumentFieldsLeft) {
          addMutationArgumentNewFieldsLeft = addMutationArgumentFieldsLeft;
        } else {
          addMutationArgumentNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addMutationArgumentNewFieldsLeft) {
          addMutationArgumentFieldName = dynamicObject.decoderPopField();
          switch (addMutationArgumentFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "argument_id":
              addMutationArgumentArgumentIdValue = dynamicObject.decoderPopString();
              addMutationArgumentBuilder.argumentId = addMutationArgumentArgumentIdValue;

              [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
                addMutationArgumentNewFieldsLeft - 1,
                addMutationArgumentBuilder
              ];
              break;
            case "field":
              addMutationArgumentFieldValue = dynamicGetField(dynamicObject);
              addMutationArgumentBuilder.field = addMutationArgumentFieldValue;

              [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
                addMutationArgumentNewFieldsLeft - 1,
                addMutationArgumentBuilder
              ];
              break;
            case "mutation_id":
              addMutationArgumentMutationIdValue = dynamicObject.decoderPopString();
              addMutationArgumentBuilder.mutationId = addMutationArgumentMutationIdValue;

              [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
                addMutationArgumentNewFieldsLeft - 1,
                addMutationArgumentBuilder
              ];
              break;
            case "service_id":
              addMutationArgumentServiceIdValue = dynamicObject.decoderPopString();
              addMutationArgumentBuilder.serviceId = addMutationArgumentServiceIdValue;

              [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
                addMutationArgumentNewFieldsLeft - 1,
                addMutationArgumentBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addMutationArgumentFieldsLeft, addMutationArgumentBuilder] = [
            -1,
            addMutationArgumentBuilder
          ];
        }
      }
      return addMutationArgumentBuilder;
      break;
    case "add_mutation_return":
      addMutationReturnInit = typelayerCSchemasDefinitionsStructures.defaultAddMutationReturn();
      [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
        numFields,
        addMutationReturnInit
      ];
      while (-1 < addMutationReturnFieldsLeft) {
        if (0 < addMutationReturnFieldsLeft) {
          addMutationReturnNewFieldsLeft = addMutationReturnFieldsLeft;
        } else {
          addMutationReturnNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addMutationReturnNewFieldsLeft) {
          addMutationReturnFieldName = dynamicObject.decoderPopField();
          switch (addMutationReturnFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "field":
              addMutationReturnFieldValue = dynamicGetField(dynamicObject);
              addMutationReturnBuilder.field = addMutationReturnFieldValue;

              [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
                addMutationReturnNewFieldsLeft - 1,
                addMutationReturnBuilder
              ];
              break;
            case "mutation_id":
              addMutationReturnMutationIdValue = dynamicObject.decoderPopString();
              addMutationReturnBuilder.mutationId = addMutationReturnMutationIdValue;

              [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
                addMutationReturnNewFieldsLeft - 1,
                addMutationReturnBuilder
              ];
              break;
            case "return_id":
              addMutationReturnReturnIdValue = dynamicObject.decoderPopString();
              addMutationReturnBuilder.returnId = addMutationReturnReturnIdValue;

              [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
                addMutationReturnNewFieldsLeft - 1,
                addMutationReturnBuilder
              ];
              break;
            case "service_id":
              addMutationReturnServiceIdValue = dynamicObject.decoderPopString();
              addMutationReturnBuilder.serviceId = addMutationReturnServiceIdValue;

              [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
                addMutationReturnNewFieldsLeft - 1,
                addMutationReturnBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addMutationReturnFieldsLeft, addMutationReturnBuilder] = [
            -1,
            addMutationReturnBuilder
          ];
        }
      }
      return addMutationReturnBuilder;
      break;
    case "add_query":
      addQueryInit = typelayerCSchemasDefinitionsStructures.defaultAddQuery();
      [addQueryFieldsLeft, addQueryBuilder] = [numFields, addQueryInit];
      while (-1 < addQueryFieldsLeft) {
        if (0 < addQueryFieldsLeft) {
          addQueryNewFieldsLeft = addQueryFieldsLeft;
        } else {
          addQueryNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addQueryNewFieldsLeft) {
          addQueryFieldName = dynamicObject.decoderPopField();
          switch (addQueryFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "query_id":
              addQueryQueryIdValue = dynamicObject.decoderPopString();
              addQueryBuilder.queryId = addQueryQueryIdValue;

              [addQueryFieldsLeft, addQueryBuilder] = [
                addQueryNewFieldsLeft - 1,
                addQueryBuilder
              ];
              break;
            case "service_id":
              addQueryServiceIdValue = dynamicObject.decoderPopString();
              addQueryBuilder.serviceId = addQueryServiceIdValue;

              [addQueryFieldsLeft, addQueryBuilder] = [
                addQueryNewFieldsLeft - 1,
                addQueryBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addQueryFieldsLeft, addQueryBuilder] = [-1, addQueryBuilder];
        }
      }
      return addQueryBuilder;
      break;
    case "add_query_argument":
      addQueryArgumentInit = typelayerCSchemasDefinitionsStructures.defaultAddQueryArgument();
      [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
        numFields,
        addQueryArgumentInit
      ];
      while (-1 < addQueryArgumentFieldsLeft) {
        if (0 < addQueryArgumentFieldsLeft) {
          addQueryArgumentNewFieldsLeft = addQueryArgumentFieldsLeft;
        } else {
          addQueryArgumentNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addQueryArgumentNewFieldsLeft) {
          addQueryArgumentFieldName = dynamicObject.decoderPopField();
          switch (addQueryArgumentFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "argument_id":
              addQueryArgumentArgumentIdValue = dynamicObject.decoderPopString();
              addQueryArgumentBuilder.argumentId = addQueryArgumentArgumentIdValue;

              [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
                addQueryArgumentNewFieldsLeft - 1,
                addQueryArgumentBuilder
              ];
              break;
            case "field":
              addQueryArgumentFieldValue = dynamicGetField(dynamicObject);
              addQueryArgumentBuilder.field = addQueryArgumentFieldValue;

              [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
                addQueryArgumentNewFieldsLeft - 1,
                addQueryArgumentBuilder
              ];
              break;
            case "query_id":
              addQueryArgumentQueryIdValue = dynamicObject.decoderPopString();
              addQueryArgumentBuilder.queryId = addQueryArgumentQueryIdValue;

              [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
                addQueryArgumentNewFieldsLeft - 1,
                addQueryArgumentBuilder
              ];
              break;
            case "service_id":
              addQueryArgumentServiceIdValue = dynamicObject.decoderPopString();
              addQueryArgumentBuilder.serviceId = addQueryArgumentServiceIdValue;

              [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
                addQueryArgumentNewFieldsLeft - 1,
                addQueryArgumentBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addQueryArgumentFieldsLeft, addQueryArgumentBuilder] = [
            -1,
            addQueryArgumentBuilder
          ];
        }
      }
      return addQueryArgumentBuilder;
      break;
    case "add_query_return":
      addQueryReturnInit = typelayerCSchemasDefinitionsStructures.defaultAddQueryReturn();
      [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
        numFields,
        addQueryReturnInit
      ];
      while (-1 < addQueryReturnFieldsLeft) {
        if (0 < addQueryReturnFieldsLeft) {
          addQueryReturnNewFieldsLeft = addQueryReturnFieldsLeft;
        } else {
          addQueryReturnNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addQueryReturnNewFieldsLeft) {
          addQueryReturnFieldName = dynamicObject.decoderPopField();
          switch (addQueryReturnFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "field":
              addQueryReturnFieldValue = dynamicGetField(dynamicObject);
              addQueryReturnBuilder.field = addQueryReturnFieldValue;

              [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
                addQueryReturnNewFieldsLeft - 1,
                addQueryReturnBuilder
              ];
              break;
            case "query_id":
              addQueryReturnQueryIdValue = dynamicObject.decoderPopString();
              addQueryReturnBuilder.queryId = addQueryReturnQueryIdValue;

              [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
                addQueryReturnNewFieldsLeft - 1,
                addQueryReturnBuilder
              ];
              break;
            case "return_id":
              addQueryReturnReturnIdValue = dynamicObject.decoderPopString();
              addQueryReturnBuilder.returnId = addQueryReturnReturnIdValue;

              [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
                addQueryReturnNewFieldsLeft - 1,
                addQueryReturnBuilder
              ];
              break;
            case "service_id":
              addQueryReturnServiceIdValue = dynamicObject.decoderPopString();
              addQueryReturnBuilder.serviceId = addQueryReturnServiceIdValue;

              [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
                addQueryReturnNewFieldsLeft - 1,
                addQueryReturnBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addQueryReturnFieldsLeft, addQueryReturnBuilder] = [
            -1,
            addQueryReturnBuilder
          ];
        }
      }
      return addQueryReturnBuilder;
      break;
    case "add_schema":
      addSchemaInit = typelayerCSchemasDefinitionsStructures.defaultAddSchema();
      [addSchemaFieldsLeft, addSchemaBuilder] = [numFields, addSchemaInit];
      while (-1 < addSchemaFieldsLeft) {
        if (0 < addSchemaFieldsLeft) {
          addSchemaNewFieldsLeft = addSchemaFieldsLeft;
        } else {
          addSchemaNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addSchemaNewFieldsLeft) {
          addSchemaFieldName = dynamicObject.decoderPopField();
          switch (addSchemaFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "schema_id":
              addSchemaSchemaIdValue = dynamicObject.decoderPopString();
              addSchemaBuilder.schemaId = addSchemaSchemaIdValue;

              [addSchemaFieldsLeft, addSchemaBuilder] = [
                addSchemaNewFieldsLeft - 1,
                addSchemaBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addSchemaFieldsLeft, addSchemaBuilder] = [-1, addSchemaBuilder];
        }
      }
      return addSchemaBuilder;
      break;
    case "add_service":
      addServiceInit = typelayerCSchemasDefinitionsStructures.defaultAddService();
      [addServiceFieldsLeft, addServiceBuilder] = [numFields, addServiceInit];
      while (-1 < addServiceFieldsLeft) {
        if (0 < addServiceFieldsLeft) {
          addServiceNewFieldsLeft = addServiceFieldsLeft;
        } else {
          addServiceNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addServiceNewFieldsLeft) {
          addServiceFieldName = dynamicObject.decoderPopField();
          switch (addServiceFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "service_id":
              addServiceServiceIdValue = dynamicObject.decoderPopString();
              addServiceBuilder.serviceId = addServiceServiceIdValue;

              [addServiceFieldsLeft, addServiceBuilder] = [
                addServiceNewFieldsLeft - 1,
                addServiceBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addServiceFieldsLeft, addServiceBuilder] = [-1, addServiceBuilder];
        }
      }
      return addServiceBuilder;
      break;
    case "add_structure":
      addStructureInit = typelayerCSchemasDefinitionsStructures.defaultAddStructure();
      [addStructureFieldsLeft, addStructureBuilder] = [
        numFields,
        addStructureInit
      ];
      while (-1 < addStructureFieldsLeft) {
        if (0 < addStructureFieldsLeft) {
          addStructureNewFieldsLeft = addStructureFieldsLeft;
        } else {
          addStructureNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addStructureNewFieldsLeft) {
          addStructureFieldName = dynamicObject.decoderPopField();
          switch (addStructureFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "schema_id":
              addStructureSchemaIdValue = dynamicObject.decoderPopString();
              addStructureBuilder.schemaId = addStructureSchemaIdValue;

              [addStructureFieldsLeft, addStructureBuilder] = [
                addStructureNewFieldsLeft - 1,
                addStructureBuilder
              ];
              break;
            case "structure_id":
              addStructureStructureIdValue = dynamicObject.decoderPopString();
              addStructureBuilder.structureId = addStructureStructureIdValue;

              [addStructureFieldsLeft, addStructureBuilder] = [
                addStructureNewFieldsLeft - 1,
                addStructureBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addStructureFieldsLeft, addStructureBuilder] = [
            -1,
            addStructureBuilder
          ];
        }
      }
      return addStructureBuilder;
      break;
    case "add_table":
      addTableInit = typelayerCSchemasDefinitionsStructures.defaultAddTable();
      [addTableFieldsLeft, addTableBuilder] = [numFields, addTableInit];
      while (-1 < addTableFieldsLeft) {
        if (0 < addTableFieldsLeft) {
          addTableNewFieldsLeft = addTableFieldsLeft;
        } else {
          addTableNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < addTableNewFieldsLeft) {
          addTableFieldName = dynamicObject.decoderPopField();
          switch (addTableFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "database_id":
              addTableDatabaseIdValue = dynamicObject.decoderPopString();
              addTableBuilder.databaseId = addTableDatabaseIdValue;

              [addTableFieldsLeft, addTableBuilder] = [
                addTableNewFieldsLeft - 1,
                addTableBuilder
              ];
              break;
            case "table_id":
              addTableTableIdValue = dynamicObject.decoderPopString();
              addTableBuilder.tableId = addTableTableIdValue;

              [addTableFieldsLeft, addTableBuilder] = [
                addTableNewFieldsLeft - 1,
                addTableBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [addTableFieldsLeft, addTableBuilder] = [-1, addTableBuilder];
        }
      }
      return addTableBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjChange(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Change {
  let retObj: typelayerCSchemasDefinitionsStructures.Change;
  retObj = dynamicGetChange(dynamicObject);
  return retObj;
}

export function dynamicPutChange(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Change
): void {
  let changeFieldAddColumn: typelayerCSchemasDefinitionsStructures.AddColumn;
  let changeFieldAddDatabase: typelayerCSchemasDefinitionsStructures.AddDatabase;
  let changeFieldAddField: typelayerCSchemasDefinitionsStructures.AddField;
  let changeFieldAddMutation: typelayerCSchemasDefinitionsStructures.AddMutation;
  let changeFieldAddMutationArgument: typelayerCSchemasDefinitionsStructures.AddMutationArgument;
  let changeFieldAddMutationReturn: typelayerCSchemasDefinitionsStructures.AddMutationReturn;
  let changeFieldAddQuery: typelayerCSchemasDefinitionsStructures.AddQuery;
  let changeFieldAddQueryArgument: typelayerCSchemasDefinitionsStructures.AddQueryArgument;
  let changeFieldAddQueryReturn: typelayerCSchemasDefinitionsStructures.AddQueryReturn;
  let changeFieldAddSchema: typelayerCSchemasDefinitionsStructures.AddSchema;
  let changeFieldAddService: typelayerCSchemasDefinitionsStructures.AddService;
  let changeFieldAddStructure: typelayerCSchemasDefinitionsStructures.AddStructure;
  let changeFieldAddTable: typelayerCSchemasDefinitionsStructures.AddTable;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.AddColumn) {
    let changeFieldAddColumn = inputObject;
    dynamicObject.encoderPutStruct("add_column", 3);
    dynamicObject.encoderPutField("column_id");
    dynamicObject.encoderPutString(changeFieldAddColumn.columnId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("database_id");
    dynamicObject.encoderPutString(changeFieldAddColumn.databaseId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("table_id");
    dynamicObject.encoderPutString(changeFieldAddColumn.tableId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddDatabase
  ) {
    let changeFieldAddDatabase = inputObject;
    dynamicObject.encoderPutStruct("add_database", 1);
    dynamicObject.encoderPutField("database_id");
    dynamicObject.encoderPutString(changeFieldAddDatabase.databaseId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddField
  ) {
    let changeFieldAddField = inputObject;
    dynamicObject.encoderPutStruct("add_field", 5);
    dynamicObject.encoderPutField("constructor_id");
    dynamicObject.encoderPutString(changeFieldAddField.constructorId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("field");
    dynamicPutField(dynamicObject, changeFieldAddField.field);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("field_id");
    dynamicObject.encoderPutString(changeFieldAddField.fieldId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schema_id");
    dynamicObject.encoderPutString(changeFieldAddField.schemaId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("structure_id");
    dynamicObject.encoderPutString(changeFieldAddField.structureId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddMutation
  ) {
    let changeFieldAddMutation = inputObject;
    dynamicObject.encoderPutStruct("add_mutation", 3);
    dynamicObject.encoderPutField("mutation_id");
    dynamicObject.encoderPutString(changeFieldAddMutation.mutationId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddMutation.serviceId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("target_table");
    dynamicPutTableReference(dynamicObject, changeFieldAddMutation.targetTable);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof
    typelayerCSchemasDefinitionsStructures.AddMutationArgument
  ) {
    let changeFieldAddMutationArgument = inputObject;
    dynamicObject.encoderPutStruct("add_mutation_argument", 4);
    dynamicObject.encoderPutField("argument_id");
    dynamicObject.encoderPutString(changeFieldAddMutationArgument.argumentId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("field");
    dynamicPutField(dynamicObject, changeFieldAddMutationArgument.field);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("mutation_id");
    dynamicObject.encoderPutString(changeFieldAddMutationArgument.mutationId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddMutationArgument.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof
    typelayerCSchemasDefinitionsStructures.AddMutationReturn
  ) {
    let changeFieldAddMutationReturn = inputObject;
    dynamicObject.encoderPutStruct("add_mutation_return", 4);
    dynamicObject.encoderPutField("field");
    dynamicPutField(dynamicObject, changeFieldAddMutationReturn.field);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("mutation_id");
    dynamicObject.encoderPutString(changeFieldAddMutationReturn.mutationId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("return_id");
    dynamicObject.encoderPutString(changeFieldAddMutationReturn.returnId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddMutationReturn.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddQuery
  ) {
    let changeFieldAddQuery = inputObject;
    dynamicObject.encoderPutStruct("add_query", 2);
    dynamicObject.encoderPutField("query_id");
    dynamicObject.encoderPutString(changeFieldAddQuery.queryId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddQuery.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof
    typelayerCSchemasDefinitionsStructures.AddQueryArgument
  ) {
    let changeFieldAddQueryArgument = inputObject;
    dynamicObject.encoderPutStruct("add_query_argument", 4);
    dynamicObject.encoderPutField("argument_id");
    dynamicObject.encoderPutString(changeFieldAddQueryArgument.argumentId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("field");
    dynamicPutField(dynamicObject, changeFieldAddQueryArgument.field);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("query_id");
    dynamicObject.encoderPutString(changeFieldAddQueryArgument.queryId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddQueryArgument.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddQueryReturn
  ) {
    let changeFieldAddQueryReturn = inputObject;
    dynamicObject.encoderPutStruct("add_query_return", 4);
    dynamicObject.encoderPutField("field");
    dynamicPutField(dynamicObject, changeFieldAddQueryReturn.field);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("query_id");
    dynamicObject.encoderPutString(changeFieldAddQueryReturn.queryId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("return_id");
    dynamicObject.encoderPutString(changeFieldAddQueryReturn.returnId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddQueryReturn.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddSchema
  ) {
    let changeFieldAddSchema = inputObject;
    dynamicObject.encoderPutStruct("add_schema", 1);
    dynamicObject.encoderPutField("schema_id");
    dynamicObject.encoderPutString(changeFieldAddSchema.schemaId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddService
  ) {
    let changeFieldAddService = inputObject;
    dynamicObject.encoderPutStruct("add_service", 1);
    dynamicObject.encoderPutField("service_id");
    dynamicObject.encoderPutString(changeFieldAddService.serviceId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddStructure
  ) {
    let changeFieldAddStructure = inputObject;
    dynamicObject.encoderPutStruct("add_structure", 2);
    dynamicObject.encoderPutField("schema_id");
    dynamicObject.encoderPutString(changeFieldAddStructure.schemaId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("structure_id");
    dynamicObject.encoderPutString(changeFieldAddStructure.structureId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.AddTable
  ) {
    let changeFieldAddTable = inputObject;
    dynamicObject.encoderPutStruct("add_table", 2);
    dynamicObject.encoderPutField("database_id");
    dynamicObject.encoderPutString(changeFieldAddTable.databaseId);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("table_id");
    dynamicObject.encoderPutString(changeFieldAddTable.tableId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetChangeset(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Changeset {
  let changesetBuilder: typelayerCSchemasDefinitionsStructures.Changeset;
  let changesetChangesElementsLeft: number;
  let changesetChangesInit: number;
  let changesetChangesListAcc: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let changesetChangesListValue: typelayerCSchemasDefinitionsStructures.Change;
  let changesetChangesNewFieldsLeft: number;
  let changesetChangesValue: Array<typelayerCSchemasDefinitionsStructures.Change>;
  let changesetFieldName: string;
  let changesetFieldsLeft: number;
  let changesetInit: typelayerCSchemasDefinitionsStructures.Changeset;
  let changesetNewFieldsLeft: number;
  let constructor: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("changeset");
  switch (constructor) {
    case "changeset":
      changesetInit = typelayerCSchemasDefinitionsStructures.defaultChangeset();
      [changesetFieldsLeft, changesetBuilder] = [numFields, changesetInit];
      while (-1 < changesetFieldsLeft) {
        if (0 < changesetFieldsLeft) {
          changesetNewFieldsLeft = changesetFieldsLeft;
        } else {
          changesetNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < changesetNewFieldsLeft) {
          changesetFieldName = dynamicObject.decoderPopField();
          switch (changesetFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "changes":
              changesetChangesInit = dynamicObject.decoderPopList();
              [changesetChangesElementsLeft, changesetChangesListAcc] = [
                changesetChangesInit,
                []
              ];
              while (-1 < changesetChangesElementsLeft) {
                if (0 < changesetChangesElementsLeft) {
                  changesetChangesNewFieldsLeft = changesetChangesElementsLeft;
                } else {
                  changesetChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                }
                if (0 < changesetChangesNewFieldsLeft) {
                  changesetChangesListValue = dynamicGetChange(dynamicObject);
                  changesetChangesListAcc.push(changesetChangesListValue);

                  [changesetChangesElementsLeft, changesetChangesListAcc] = [
                    changesetChangesNewFieldsLeft - 1,
                    changesetChangesListAcc
                  ];
                } else {
                  [changesetChangesElementsLeft, changesetChangesListAcc] = [
                    -1,
                    changesetChangesListAcc
                  ];
                }
              }
              changesetChangesValue = changesetChangesListAcc;
              changesetBuilder.changes = changesetChangesValue;

              [changesetFieldsLeft, changesetBuilder] = [
                changesetNewFieldsLeft - 1,
                changesetBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [changesetFieldsLeft, changesetBuilder] = [-1, changesetBuilder];
        }
      }
      return changesetBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjChangeset(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Changeset {
  let retObj: typelayerCSchemasDefinitionsStructures.Changeset;
  retObj = dynamicGetChangeset(dynamicObject);
  return retObj;
}

export function dynamicPutChangeset(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Changeset
): void {
  let changesetFieldChangeset: typelayerCSchemasDefinitionsStructures.Changeset;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Changeset) {
    let changesetFieldChangeset = inputObject;
    dynamicObject.encoderPutStruct("changeset", 1);
    dynamicObject.encoderPutField("changes");
    dynamicObject.encoderPutList(changesetFieldChangeset.changes.length);
    if (0 === changesetFieldChangeset.changes.length) {
      dynamicObject.encoderPutElementEnd(true);
    } else {
      let changesIndex: number = 0;
      for (let changesElem of changesetFieldChangeset.changes) {
        dynamicPutChange(dynamicObject, changesElem);
        dynamicObject.encoderPutElementEnd(
          changesIndex === changesetFieldChangeset.changes.length - 1
        );

        changesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetCollection(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Collection {
  let collectionBackendValue: typelayerCSchemasDefinitionsStructures.Backend;
  let collectionBuilder: typelayerCSchemasDefinitionsStructures.Collection;
  let collectionDescriptionValue: string;
  let collectionFieldName: string;
  let collectionFieldsLeft: number;
  let collectionInit: typelayerCSchemasDefinitionsStructures.Collection;
  let collectionNewFieldsLeft: number;
  let collectionSchemaValue: string;
  let collectionTablesElementsLeft: number;
  let collectionTablesInit: number;
  let collectionTablesKey: string;
  let collectionTablesMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Table
  >;
  let collectionTablesMapValue: typelayerCSchemasDefinitionsStructures.Table;
  let collectionTablesNewFieldsLeft: number;
  let collectionTablesValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Table
  >;
  let constructor: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("collection");
  switch (constructor) {
    case "collection":
      collectionInit = typelayerCSchemasDefinitionsStructures.defaultCollection();
      [collectionFieldsLeft, collectionBuilder] = [numFields, collectionInit];
      while (-1 < collectionFieldsLeft) {
        if (0 < collectionFieldsLeft) {
          collectionNewFieldsLeft = collectionFieldsLeft;
        } else {
          collectionNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < collectionNewFieldsLeft) {
          collectionFieldName = dynamicObject.decoderPopField();
          switch (collectionFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "backend":
              collectionBackendValue = dynamicGetBackend(dynamicObject);
              collectionBuilder.backend = collectionBackendValue;

              [collectionFieldsLeft, collectionBuilder] = [
                collectionNewFieldsLeft - 1,
                collectionBuilder
              ];
              break;
            case "description":
              collectionDescriptionValue = dynamicObject.decoderPopString();
              collectionBuilder.description = collectionDescriptionValue;

              [collectionFieldsLeft, collectionBuilder] = [
                collectionNewFieldsLeft - 1,
                collectionBuilder
              ];
              break;
            case "schema":
              collectionSchemaValue = dynamicObject.decoderPopString();
              collectionBuilder.schema = collectionSchemaValue;

              [collectionFieldsLeft, collectionBuilder] = [
                collectionNewFieldsLeft - 1,
                collectionBuilder
              ];
              break;
            case "tables":
              collectionTablesInit = dynamicObject.decoderPopMap();
              [collectionTablesElementsLeft, collectionTablesMapAcc] = [
                collectionTablesInit,
                new Map()
              ];
              while (-1 < collectionTablesElementsLeft) {
                if (0 < collectionTablesElementsLeft) {
                  collectionTablesNewFieldsLeft = collectionTablesElementsLeft;
                } else {
                  collectionTablesNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < collectionTablesNewFieldsLeft) {
                  collectionTablesKey = dynamicObject.decoderPopKey();
                  collectionTablesMapValue = dynamicGetTable(dynamicObject);
                  collectionTablesMapAcc.set(
                    collectionTablesKey,
                    collectionTablesMapValue
                  );

                  [collectionTablesElementsLeft, collectionTablesMapAcc] = [
                    collectionTablesNewFieldsLeft - 1,
                    collectionTablesMapAcc
                  ];
                } else {
                  [collectionTablesElementsLeft, collectionTablesMapAcc] = [
                    -1,
                    collectionTablesMapAcc
                  ];
                }
              }
              collectionTablesValue = collectionTablesMapAcc;
              collectionBuilder.tables = collectionTablesValue;

              [collectionFieldsLeft, collectionBuilder] = [
                collectionNewFieldsLeft - 1,
                collectionBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [collectionFieldsLeft, collectionBuilder] = [-1, collectionBuilder];
        }
      }
      return collectionBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjCollection(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Collection {
  let retObj: typelayerCSchemasDefinitionsStructures.Collection;
  retObj = dynamicGetCollection(dynamicObject);
  return retObj;
}

export function dynamicPutCollection(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Collection
): void {
  let collectionFieldCollection: typelayerCSchemasDefinitionsStructures.Collection;
  if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Collection
  ) {
    let collectionFieldCollection = inputObject;
    dynamicObject.encoderPutStruct("collection", 4);
    dynamicObject.encoderPutField("backend");
    dynamicPutBackend(dynamicObject, collectionFieldCollection.backend);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("description");
    dynamicObject.encoderPutString(collectionFieldCollection.description);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schema");
    dynamicObject.encoderPutString(collectionFieldCollection.schema);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("tables");
    dynamicObject.encoderPutMap(collectionFieldCollection.tables.size);
    if (0 === collectionFieldCollection.tables.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let tablesValuesIndex: number = 0;
      for (let [
        tablesValuesKey,
        tablesValuesElem
      ] of collectionFieldCollection.tables) {
        dynamicObject.encoderPutKey(tablesValuesKey);
        dynamicPutTable(dynamicObject, tablesValuesElem);
        dynamicObject.encoderPutValueEnd(
          tablesValuesIndex === collectionFieldCollection.tables.size - 1
        );

        tablesValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetColumn(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Column {
  let columnBuilder: typelayerCSchemasDefinitionsStructures.Column;
  let columnColumnValue: string;
  let columnDescriptionValue: string;
  let columnFieldName: string;
  let columnFieldsLeft: number;
  let columnInit: typelayerCSchemasDefinitionsStructures.Column;
  let columnNewFieldsLeft: number;
  let columnTypeValue: typelayerCSchemasDefinitionsStructures.ColumnType;
  let constructor: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("column");
  switch (constructor) {
    case "column":
      columnInit = typelayerCSchemasDefinitionsStructures.defaultColumn();
      [columnFieldsLeft, columnBuilder] = [numFields, columnInit];
      while (-1 < columnFieldsLeft) {
        if (0 < columnFieldsLeft) {
          columnNewFieldsLeft = columnFieldsLeft;
        } else {
          columnNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnNewFieldsLeft) {
          columnFieldName = dynamicObject.decoderPopField();
          switch (columnFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "column":
              columnColumnValue = dynamicObject.decoderPopString();
              columnBuilder.column = columnColumnValue;

              [columnFieldsLeft, columnBuilder] = [
                columnNewFieldsLeft - 1,
                columnBuilder
              ];
              break;
            case "description":
              columnDescriptionValue = dynamicObject.decoderPopString();
              columnBuilder.description = columnDescriptionValue;

              [columnFieldsLeft, columnBuilder] = [
                columnNewFieldsLeft - 1,
                columnBuilder
              ];
              break;
            case "type":
              columnTypeValue = dynamicGetColumnType(dynamicObject);
              columnBuilder.type = columnTypeValue;

              [columnFieldsLeft, columnBuilder] = [
                columnNewFieldsLeft - 1,
                columnBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnFieldsLeft, columnBuilder] = [-1, columnBuilder];
        }
      }
      return columnBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjColumn(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Column {
  let retObj: typelayerCSchemasDefinitionsStructures.Column;
  retObj = dynamicGetColumn(dynamicObject);
  return retObj;
}

export function dynamicPutColumn(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Column
): void {
  let columnFieldColumn: typelayerCSchemasDefinitionsStructures.Column;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Column) {
    let columnFieldColumn = inputObject;
    dynamicObject.encoderPutStruct("column", 3);
    dynamicObject.encoderPutField("column");
    dynamicObject.encoderPutString(columnFieldColumn.column);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("description");
    dynamicObject.encoderPutString(columnFieldColumn.description);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("type");
    dynamicPutColumnType(dynamicObject, columnFieldColumn.type);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetColumnType(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.ColumnType {
  let columnBinaryBuilder: typelayerCSchemasDefinitionsStructures.ColumnBinary;
  let columnBinaryFieldName: string;
  let columnBinaryFieldsLeft: number;
  let columnBinaryInit: typelayerCSchemasDefinitionsStructures.ColumnBinary;
  let columnBinaryNewFieldsLeft: number;
  let columnBooleanBuilder: typelayerCSchemasDefinitionsStructures.ColumnBoolean;
  let columnBooleanFieldName: string;
  let columnBooleanFieldsLeft: number;
  let columnBooleanInit: typelayerCSchemasDefinitionsStructures.ColumnBoolean;
  let columnBooleanNewFieldsLeft: number;
  let columnDateTimeBuilder: typelayerCSchemasDefinitionsStructures.ColumnDateTime;
  let columnDateTimeFieldName: string;
  let columnDateTimeFieldsLeft: number;
  let columnDateTimeInit: typelayerCSchemasDefinitionsStructures.ColumnDateTime;
  let columnDateTimeNewFieldsLeft: number;
  let columnDoubleBuilder: typelayerCSchemasDefinitionsStructures.ColumnDouble;
  let columnDoubleFieldName: string;
  let columnDoubleFieldsLeft: number;
  let columnDoubleInit: typelayerCSchemasDefinitionsStructures.ColumnDouble;
  let columnDoubleNewFieldsLeft: number;
  let columnEmbededBuilder: typelayerCSchemasDefinitionsStructures.ColumnEmbeded;
  let columnEmbededFieldName: string;
  let columnEmbededFieldsLeft: number;
  let columnEmbededIdValue: string;
  let columnEmbededInit: typelayerCSchemasDefinitionsStructures.ColumnEmbeded;
  let columnEmbededNewFieldsLeft: number;
  let columnEmbededSchemaValue: typelayerCSchemasDefinitionsStructures.SchemaReference;
  let columnIntegerBuilder: typelayerCSchemasDefinitionsStructures.ColumnInteger;
  let columnIntegerFieldName: string;
  let columnIntegerFieldsLeft: number;
  let columnIntegerInit: typelayerCSchemasDefinitionsStructures.ColumnInteger;
  let columnIntegerNewFieldsLeft: number;
  let columnTextBuilder: typelayerCSchemasDefinitionsStructures.ColumnText;
  let columnTextFieldName: string;
  let columnTextFieldsLeft: number;
  let columnTextInit: typelayerCSchemasDefinitionsStructures.ColumnText;
  let columnTextNewFieldsLeft: number;
  let constructor: string;
  let foriegnKeyBuilder: typelayerCSchemasDefinitionsStructures.ForiegnKey;
  let foriegnKeyFieldName: string;
  let foriegnKeyFieldsLeft: number;
  let foriegnKeyIdValue: string;
  let foriegnKeyInit: typelayerCSchemasDefinitionsStructures.ForiegnKey;
  let foriegnKeyNewFieldsLeft: number;
  let foriegnKeyTableValue: string;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("column_binary");
  switch (constructor) {
    case "column_binary":
      columnBinaryInit = typelayerCSchemasDefinitionsStructures.defaultColumnBinary();
      [columnBinaryFieldsLeft, columnBinaryBuilder] = [
        numFields,
        columnBinaryInit
      ];
      while (-1 < columnBinaryFieldsLeft) {
        if (0 < columnBinaryFieldsLeft) {
          columnBinaryNewFieldsLeft = columnBinaryFieldsLeft;
        } else {
          columnBinaryNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnBinaryNewFieldsLeft) {
          columnBinaryFieldName = dynamicObject.decoderPopField();
          switch (columnBinaryFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnBinaryFieldsLeft, columnBinaryBuilder] = [
            -1,
            columnBinaryBuilder
          ];
        }
      }
      return columnBinaryBuilder;
      break;
    case "column_boolean":
      columnBooleanInit = typelayerCSchemasDefinitionsStructures.defaultColumnBoolean();
      [columnBooleanFieldsLeft, columnBooleanBuilder] = [
        numFields,
        columnBooleanInit
      ];
      while (-1 < columnBooleanFieldsLeft) {
        if (0 < columnBooleanFieldsLeft) {
          columnBooleanNewFieldsLeft = columnBooleanFieldsLeft;
        } else {
          columnBooleanNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnBooleanNewFieldsLeft) {
          columnBooleanFieldName = dynamicObject.decoderPopField();
          switch (columnBooleanFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnBooleanFieldsLeft, columnBooleanBuilder] = [
            -1,
            columnBooleanBuilder
          ];
        }
      }
      return columnBooleanBuilder;
      break;
    case "column_date_time":
      columnDateTimeInit = typelayerCSchemasDefinitionsStructures.defaultColumnDateTime();
      [columnDateTimeFieldsLeft, columnDateTimeBuilder] = [
        numFields,
        columnDateTimeInit
      ];
      while (-1 < columnDateTimeFieldsLeft) {
        if (0 < columnDateTimeFieldsLeft) {
          columnDateTimeNewFieldsLeft = columnDateTimeFieldsLeft;
        } else {
          columnDateTimeNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnDateTimeNewFieldsLeft) {
          columnDateTimeFieldName = dynamicObject.decoderPopField();
          switch (columnDateTimeFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnDateTimeFieldsLeft, columnDateTimeBuilder] = [
            -1,
            columnDateTimeBuilder
          ];
        }
      }
      return columnDateTimeBuilder;
      break;
    case "column_double":
      columnDoubleInit = typelayerCSchemasDefinitionsStructures.defaultColumnDouble();
      [columnDoubleFieldsLeft, columnDoubleBuilder] = [
        numFields,
        columnDoubleInit
      ];
      while (-1 < columnDoubleFieldsLeft) {
        if (0 < columnDoubleFieldsLeft) {
          columnDoubleNewFieldsLeft = columnDoubleFieldsLeft;
        } else {
          columnDoubleNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnDoubleNewFieldsLeft) {
          columnDoubleFieldName = dynamicObject.decoderPopField();
          switch (columnDoubleFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnDoubleFieldsLeft, columnDoubleBuilder] = [
            -1,
            columnDoubleBuilder
          ];
        }
      }
      return columnDoubleBuilder;
      break;
    case "column_embeded":
      columnEmbededInit = typelayerCSchemasDefinitionsStructures.defaultColumnEmbeded();
      [columnEmbededFieldsLeft, columnEmbededBuilder] = [
        numFields,
        columnEmbededInit
      ];
      while (-1 < columnEmbededFieldsLeft) {
        if (0 < columnEmbededFieldsLeft) {
          columnEmbededNewFieldsLeft = columnEmbededFieldsLeft;
        } else {
          columnEmbededNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnEmbededNewFieldsLeft) {
          columnEmbededFieldName = dynamicObject.decoderPopField();
          switch (columnEmbededFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "id":
              columnEmbededIdValue = dynamicObject.decoderPopString();
              columnEmbededBuilder.id = columnEmbededIdValue;

              [columnEmbededFieldsLeft, columnEmbededBuilder] = [
                columnEmbededNewFieldsLeft - 1,
                columnEmbededBuilder
              ];
              break;
            case "schema":
              columnEmbededSchemaValue = dynamicGetSchemaReference(
                dynamicObject
              );
              columnEmbededBuilder.schema = columnEmbededSchemaValue;

              [columnEmbededFieldsLeft, columnEmbededBuilder] = [
                columnEmbededNewFieldsLeft - 1,
                columnEmbededBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnEmbededFieldsLeft, columnEmbededBuilder] = [
            -1,
            columnEmbededBuilder
          ];
        }
      }
      return columnEmbededBuilder;
      break;
    case "column_integer":
      columnIntegerInit = typelayerCSchemasDefinitionsStructures.defaultColumnInteger();
      [columnIntegerFieldsLeft, columnIntegerBuilder] = [
        numFields,
        columnIntegerInit
      ];
      while (-1 < columnIntegerFieldsLeft) {
        if (0 < columnIntegerFieldsLeft) {
          columnIntegerNewFieldsLeft = columnIntegerFieldsLeft;
        } else {
          columnIntegerNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnIntegerNewFieldsLeft) {
          columnIntegerFieldName = dynamicObject.decoderPopField();
          switch (columnIntegerFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnIntegerFieldsLeft, columnIntegerBuilder] = [
            -1,
            columnIntegerBuilder
          ];
        }
      }
      return columnIntegerBuilder;
      break;
    case "column_text":
      columnTextInit = typelayerCSchemasDefinitionsStructures.defaultColumnText();
      [columnTextFieldsLeft, columnTextBuilder] = [numFields, columnTextInit];
      while (-1 < columnTextFieldsLeft) {
        if (0 < columnTextFieldsLeft) {
          columnTextNewFieldsLeft = columnTextFieldsLeft;
        } else {
          columnTextNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < columnTextNewFieldsLeft) {
          columnTextFieldName = dynamicObject.decoderPopField();
          switch (columnTextFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [columnTextFieldsLeft, columnTextBuilder] = [-1, columnTextBuilder];
        }
      }
      return columnTextBuilder;
      break;
    case "foriegn_key":
      foriegnKeyInit = typelayerCSchemasDefinitionsStructures.defaultForiegnKey();
      [foriegnKeyFieldsLeft, foriegnKeyBuilder] = [numFields, foriegnKeyInit];
      while (-1 < foriegnKeyFieldsLeft) {
        if (0 < foriegnKeyFieldsLeft) {
          foriegnKeyNewFieldsLeft = foriegnKeyFieldsLeft;
        } else {
          foriegnKeyNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < foriegnKeyNewFieldsLeft) {
          foriegnKeyFieldName = dynamicObject.decoderPopField();
          switch (foriegnKeyFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "id":
              foriegnKeyIdValue = dynamicObject.decoderPopString();
              foriegnKeyBuilder.id = foriegnKeyIdValue;

              [foriegnKeyFieldsLeft, foriegnKeyBuilder] = [
                foriegnKeyNewFieldsLeft - 1,
                foriegnKeyBuilder
              ];
              break;
            case "table":
              foriegnKeyTableValue = dynamicObject.decoderPopString();
              foriegnKeyBuilder.table = foriegnKeyTableValue;

              [foriegnKeyFieldsLeft, foriegnKeyBuilder] = [
                foriegnKeyNewFieldsLeft - 1,
                foriegnKeyBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [foriegnKeyFieldsLeft, foriegnKeyBuilder] = [-1, foriegnKeyBuilder];
        }
      }
      return foriegnKeyBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjColumnType(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.ColumnType {
  let retObj: typelayerCSchemasDefinitionsStructures.ColumnType;
  retObj = dynamicGetColumnType(dynamicObject);
  return retObj;
}

export function dynamicPutColumnType(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.ColumnType
): void {
  let columnTypeFieldColumnEmbeded: typelayerCSchemasDefinitionsStructures.ColumnEmbeded;
  let columnTypeFieldForiegnKey: typelayerCSchemasDefinitionsStructures.ForiegnKey;
  if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnBinary
  ) {
    let columnTypeFieldColumnBinary = inputObject;
    dynamicObject.encoderPutStruct("column_binary", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnBoolean
  ) {
    let columnTypeFieldColumnBoolean = inputObject;
    dynamicObject.encoderPutStruct("column_boolean", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnDateTime
  ) {
    let columnTypeFieldColumnDateTime = inputObject;
    dynamicObject.encoderPutStruct("column_date_time", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnDouble
  ) {
    let columnTypeFieldColumnDouble = inputObject;
    dynamicObject.encoderPutStruct("column_double", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnEmbeded
  ) {
    let columnTypeFieldColumnEmbeded = inputObject;
    dynamicObject.encoderPutStruct("column_embeded", 2);
    dynamicObject.encoderPutField("id");
    dynamicObject.encoderPutString(columnTypeFieldColumnEmbeded.id);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schema");
    dynamicPutSchemaReference(
      dynamicObject,
      columnTypeFieldColumnEmbeded.schema
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnInteger
  ) {
    let columnTypeFieldColumnInteger = inputObject;
    dynamicObject.encoderPutStruct("column_integer", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ColumnText
  ) {
    let columnTypeFieldColumnText = inputObject;
    dynamicObject.encoderPutStruct("column_text", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.ForiegnKey
  ) {
    let columnTypeFieldForiegnKey = inputObject;
    dynamicObject.encoderPutStruct("foriegn_key", 2);
    dynamicObject.encoderPutField("id");
    dynamicObject.encoderPutString(columnTypeFieldForiegnKey.id);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("table");
    dynamicObject.encoderPutString(columnTypeFieldForiegnKey.table);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetConstructor(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Constructor {
  let constructor: string;
  let constructorBuilder: typelayerCSchemasDefinitionsStructures.Constructor;
  let constructorDocIsNull: boolean;
  let constructorDocUnpacked: string;
  let constructorDocValue: string | null;
  let constructorFieldName: string;
  let constructorFieldsElementsLeft: number;
  let constructorFieldsInit: number;
  let constructorFieldsKey: string;
  let constructorFieldsLeft: number;
  let constructorFieldsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let constructorFieldsMapValue: typelayerCSchemasDefinitionsStructures.Field;
  let constructorFieldsNewFieldsLeft: number;
  let constructorFieldsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let constructorInit: typelayerCSchemasDefinitionsStructures.Constructor;
  let constructorNewFieldsLeft: number;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("constructor");
  switch (constructor) {
    case "constructor":
      constructorInit = typelayerCSchemasDefinitionsStructures.defaultConstructor();
      [constructorFieldsLeft, constructorBuilder] = [
        numFields,
        constructorInit
      ];
      while (-1 < constructorFieldsLeft) {
        if (0 < constructorFieldsLeft) {
          constructorNewFieldsLeft = constructorFieldsLeft;
        } else {
          constructorNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < constructorNewFieldsLeft) {
          constructorFieldName = dynamicObject.decoderPopField();
          switch (constructorFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "doc":
              constructorDocIsNull = dynamicObject.decoderPopMaybe();
              if (constructorDocIsNull) {
                constructorDocUnpacked = dynamicObject.decoderPopString();
                constructorDocValue = constructorDocUnpacked;
              } else {
                constructorDocValue = null;
              }
              constructorBuilder.doc = constructorDocValue;

              [constructorFieldsLeft, constructorBuilder] = [
                constructorNewFieldsLeft - 1,
                constructorBuilder
              ];
              break;
            case "fields":
              constructorFieldsInit = dynamicObject.decoderPopMap();
              [constructorFieldsElementsLeft, constructorFieldsMapAcc] = [
                constructorFieldsInit,
                new Map()
              ];
              while (-1 < constructorFieldsElementsLeft) {
                if (0 < constructorFieldsElementsLeft) {
                  constructorFieldsNewFieldsLeft = constructorFieldsElementsLeft;
                } else {
                  constructorFieldsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < constructorFieldsNewFieldsLeft) {
                  constructorFieldsKey = dynamicObject.decoderPopKey();
                  constructorFieldsMapValue = dynamicGetField(dynamicObject);
                  constructorFieldsMapAcc.set(
                    constructorFieldsKey,
                    constructorFieldsMapValue
                  );

                  [constructorFieldsElementsLeft, constructorFieldsMapAcc] = [
                    constructorFieldsNewFieldsLeft - 1,
                    constructorFieldsMapAcc
                  ];
                } else {
                  [constructorFieldsElementsLeft, constructorFieldsMapAcc] = [
                    -1,
                    constructorFieldsMapAcc
                  ];
                }
              }
              constructorFieldsValue = constructorFieldsMapAcc;
              constructorBuilder.fields = constructorFieldsValue;

              [constructorFieldsLeft, constructorBuilder] = [
                constructorNewFieldsLeft - 1,
                constructorBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [constructorFieldsLeft, constructorBuilder] = [
            -1,
            constructorBuilder
          ];
        }
      }
      return constructorBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjConstructor(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Constructor {
  let retObj: typelayerCSchemasDefinitionsStructures.Constructor;
  retObj = dynamicGetConstructor(dynamicObject);
  return retObj;
}

export function dynamicPutConstructor(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Constructor
): void {
  let constructorFieldConstructor: typelayerCSchemasDefinitionsStructures.Constructor;
  if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Constructor
  ) {
    let constructorFieldConstructor = inputObject;
    dynamicObject.encoderPutStruct("constructor", 2);
    dynamicObject.encoderPutField("doc");
    if (constructorFieldConstructor.doc !== null) {
      let docJust = constructorFieldConstructor.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("fields");
    dynamicObject.encoderPutMap(constructorFieldConstructor.fields.size);
    if (0 === constructorFieldConstructor.fields.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let fieldsValuesIndex: number = 0;
      for (let [
        fieldsValuesKey,
        fieldsValuesElem
      ] of constructorFieldConstructor.fields) {
        dynamicObject.encoderPutKey(fieldsValuesKey);
        dynamicPutField(dynamicObject, fieldsValuesElem);
        dynamicObject.encoderPutValueEnd(
          fieldsValuesIndex === constructorFieldConstructor.fields.size - 1
        );

        fieldsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetField(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Field {
  let constructor: string;
  let fieldBuilder: typelayerCSchemasDefinitionsStructures.Field;
  let fieldDocIsNull: boolean;
  let fieldDocUnpacked: string;
  let fieldDocValue: string | null;
  let fieldFieldName: string;
  let fieldFieldsLeft: number;
  let fieldInit: typelayerCSchemasDefinitionsStructures.Field;
  let fieldNewFieldsLeft: number;
  let fieldTypeValue: typelayerCSchemasDefinitionsStructures.BasicType;
  let numFields: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("field");
  switch (constructor) {
    case "field":
      fieldInit = typelayerCSchemasDefinitionsStructures.defaultField();
      [fieldFieldsLeft, fieldBuilder] = [numFields, fieldInit];
      while (-1 < fieldFieldsLeft) {
        if (0 < fieldFieldsLeft) {
          fieldNewFieldsLeft = fieldFieldsLeft;
        } else {
          fieldNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < fieldNewFieldsLeft) {
          fieldFieldName = dynamicObject.decoderPopField();
          switch (fieldFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "doc":
              fieldDocIsNull = dynamicObject.decoderPopMaybe();
              if (fieldDocIsNull) {
                fieldDocUnpacked = dynamicObject.decoderPopString();
                fieldDocValue = fieldDocUnpacked;
              } else {
                fieldDocValue = null;
              }
              fieldBuilder.doc = fieldDocValue;

              [fieldFieldsLeft, fieldBuilder] = [
                fieldNewFieldsLeft - 1,
                fieldBuilder
              ];
              break;
            case "type":
              fieldTypeValue = dynamicGetBasicType(dynamicObject);
              fieldBuilder.type = fieldTypeValue;

              [fieldFieldsLeft, fieldBuilder] = [
                fieldNewFieldsLeft - 1,
                fieldBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [fieldFieldsLeft, fieldBuilder] = [-1, fieldBuilder];
        }
      }
      return fieldBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjField(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Field {
  let retObj: typelayerCSchemasDefinitionsStructures.Field;
  retObj = dynamicGetField(dynamicObject);
  return retObj;
}

export function dynamicPutField(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Field
): void {
  let fieldFieldField: typelayerCSchemasDefinitionsStructures.Field;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Field) {
    let fieldFieldField = inputObject;
    dynamicObject.encoderPutStruct("field", 2);
    dynamicObject.encoderPutField("doc");
    if (fieldFieldField.doc !== null) {
      let docJust = fieldFieldField.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("type");
    dynamicPutBasicType(dynamicObject, fieldFieldField.type);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetFunction(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Function {
  let constructor: string;
  let mutationArgumentsElementsLeft: number;
  let mutationArgumentsInit: number;
  let mutationArgumentsKey: string;
  let mutationArgumentsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let mutationArgumentsMapValue: typelayerCSchemasDefinitionsStructures.Field;
  let mutationArgumentsNewFieldsLeft: number;
  let mutationArgumentsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let mutationBuilder: typelayerCSchemasDefinitionsStructures.Mutation;
  let mutationDocIsNull: boolean;
  let mutationDocUnpacked: string;
  let mutationDocValue: string | null;
  let mutationFieldName: string;
  let mutationFieldsLeft: number;
  let mutationInit: typelayerCSchemasDefinitionsStructures.Mutation;
  let mutationNewFieldsLeft: number;
  let mutationReturnsElementsLeft: number;
  let mutationReturnsInit: number;
  let mutationReturnsKey: string;
  let mutationReturnsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let mutationReturnsMapValue: typelayerCSchemasDefinitionsStructures.Field;
  let mutationReturnsNewFieldsLeft: number;
  let mutationReturnsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let mutationTargetTableValue: typelayerCSchemasDefinitionsStructures.TableReference;
  let numFields: number;
  let queryArgumentsElementsLeft: number;
  let queryArgumentsInit: number;
  let queryArgumentsKey: string;
  let queryArgumentsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let queryArgumentsMapValue: typelayerCSchemasDefinitionsStructures.Field;
  let queryArgumentsNewFieldsLeft: number;
  let queryArgumentsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let queryBuilder: typelayerCSchemasDefinitionsStructures.Query;
  let queryDocIsNull: boolean;
  let queryDocUnpacked: string;
  let queryDocValue: string | null;
  let queryFieldName: string;
  let queryFieldsLeft: number;
  let queryInit: typelayerCSchemasDefinitionsStructures.Query;
  let queryNewFieldsLeft: number;
  let queryReturnsElementsLeft: number;
  let queryReturnsInit: number;
  let queryReturnsKey: string;
  let queryReturnsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  let queryReturnsMapValue: typelayerCSchemasDefinitionsStructures.Field;
  let queryReturnsNewFieldsLeft: number;
  let queryReturnsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Field
  >;
  [constructor, numFields] = dynamicObject.decoderPopStruct("mutation");
  switch (constructor) {
    case "mutation":
      mutationInit = typelayerCSchemasDefinitionsStructures.defaultMutation();
      [mutationFieldsLeft, mutationBuilder] = [numFields, mutationInit];
      while (-1 < mutationFieldsLeft) {
        if (0 < mutationFieldsLeft) {
          mutationNewFieldsLeft = mutationFieldsLeft;
        } else {
          mutationNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < mutationNewFieldsLeft) {
          mutationFieldName = dynamicObject.decoderPopField();
          switch (mutationFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "arguments":
              mutationArgumentsInit = dynamicObject.decoderPopMap();
              [mutationArgumentsElementsLeft, mutationArgumentsMapAcc] = [
                mutationArgumentsInit,
                new Map()
              ];
              while (-1 < mutationArgumentsElementsLeft) {
                if (0 < mutationArgumentsElementsLeft) {
                  mutationArgumentsNewFieldsLeft = mutationArgumentsElementsLeft;
                } else {
                  mutationArgumentsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < mutationArgumentsNewFieldsLeft) {
                  mutationArgumentsKey = dynamicObject.decoderPopKey();
                  mutationArgumentsMapValue = dynamicGetField(dynamicObject);
                  mutationArgumentsMapAcc.set(
                    mutationArgumentsKey,
                    mutationArgumentsMapValue
                  );

                  [mutationArgumentsElementsLeft, mutationArgumentsMapAcc] = [
                    mutationArgumentsNewFieldsLeft - 1,
                    mutationArgumentsMapAcc
                  ];
                } else {
                  [mutationArgumentsElementsLeft, mutationArgumentsMapAcc] = [
                    -1,
                    mutationArgumentsMapAcc
                  ];
                }
              }
              mutationArgumentsValue = mutationArgumentsMapAcc;
              mutationBuilder.arguments = mutationArgumentsValue;

              [mutationFieldsLeft, mutationBuilder] = [
                mutationNewFieldsLeft - 1,
                mutationBuilder
              ];
              break;
            case "doc":
              mutationDocIsNull = dynamicObject.decoderPopMaybe();
              if (mutationDocIsNull) {
                mutationDocUnpacked = dynamicObject.decoderPopString();
                mutationDocValue = mutationDocUnpacked;
              } else {
                mutationDocValue = null;
              }
              mutationBuilder.doc = mutationDocValue;

              [mutationFieldsLeft, mutationBuilder] = [
                mutationNewFieldsLeft - 1,
                mutationBuilder
              ];
              break;
            case "returns":
              mutationReturnsInit = dynamicObject.decoderPopMap();
              [mutationReturnsElementsLeft, mutationReturnsMapAcc] = [
                mutationReturnsInit,
                new Map()
              ];
              while (-1 < mutationReturnsElementsLeft) {
                if (0 < mutationReturnsElementsLeft) {
                  mutationReturnsNewFieldsLeft = mutationReturnsElementsLeft;
                } else {
                  mutationReturnsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < mutationReturnsNewFieldsLeft) {
                  mutationReturnsKey = dynamicObject.decoderPopKey();
                  mutationReturnsMapValue = dynamicGetField(dynamicObject);
                  mutationReturnsMapAcc.set(
                    mutationReturnsKey,
                    mutationReturnsMapValue
                  );

                  [mutationReturnsElementsLeft, mutationReturnsMapAcc] = [
                    mutationReturnsNewFieldsLeft - 1,
                    mutationReturnsMapAcc
                  ];
                } else {
                  [mutationReturnsElementsLeft, mutationReturnsMapAcc] = [
                    -1,
                    mutationReturnsMapAcc
                  ];
                }
              }
              mutationReturnsValue = mutationReturnsMapAcc;
              mutationBuilder.returns = mutationReturnsValue;

              [mutationFieldsLeft, mutationBuilder] = [
                mutationNewFieldsLeft - 1,
                mutationBuilder
              ];
              break;
            case "target_table":
              mutationTargetTableValue = dynamicGetTableReference(
                dynamicObject
              );
              mutationBuilder.targetTable = mutationTargetTableValue;

              [mutationFieldsLeft, mutationBuilder] = [
                mutationNewFieldsLeft - 1,
                mutationBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [mutationFieldsLeft, mutationBuilder] = [-1, mutationBuilder];
        }
      }
      return mutationBuilder;
      break;
    case "query":
      queryInit = typelayerCSchemasDefinitionsStructures.defaultQuery();
      [queryFieldsLeft, queryBuilder] = [numFields, queryInit];
      while (-1 < queryFieldsLeft) {
        if (0 < queryFieldsLeft) {
          queryNewFieldsLeft = queryFieldsLeft;
        } else {
          queryNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < queryNewFieldsLeft) {
          queryFieldName = dynamicObject.decoderPopField();
          switch (queryFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "arguments":
              queryArgumentsInit = dynamicObject.decoderPopMap();
              [queryArgumentsElementsLeft, queryArgumentsMapAcc] = [
                queryArgumentsInit,
                new Map()
              ];
              while (-1 < queryArgumentsElementsLeft) {
                if (0 < queryArgumentsElementsLeft) {
                  queryArgumentsNewFieldsLeft = queryArgumentsElementsLeft;
                } else {
                  queryArgumentsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < queryArgumentsNewFieldsLeft) {
                  queryArgumentsKey = dynamicObject.decoderPopKey();
                  queryArgumentsMapValue = dynamicGetField(dynamicObject);
                  queryArgumentsMapAcc.set(
                    queryArgumentsKey,
                    queryArgumentsMapValue
                  );

                  [queryArgumentsElementsLeft, queryArgumentsMapAcc] = [
                    queryArgumentsNewFieldsLeft - 1,
                    queryArgumentsMapAcc
                  ];
                } else {
                  [queryArgumentsElementsLeft, queryArgumentsMapAcc] = [
                    -1,
                    queryArgumentsMapAcc
                  ];
                }
              }
              queryArgumentsValue = queryArgumentsMapAcc;
              queryBuilder.arguments = queryArgumentsValue;

              [queryFieldsLeft, queryBuilder] = [
                queryNewFieldsLeft - 1,
                queryBuilder
              ];
              break;
            case "doc":
              queryDocIsNull = dynamicObject.decoderPopMaybe();
              if (queryDocIsNull) {
                queryDocUnpacked = dynamicObject.decoderPopString();
                queryDocValue = queryDocUnpacked;
              } else {
                queryDocValue = null;
              }
              queryBuilder.doc = queryDocValue;

              [queryFieldsLeft, queryBuilder] = [
                queryNewFieldsLeft - 1,
                queryBuilder
              ];
              break;
            case "returns":
              queryReturnsInit = dynamicObject.decoderPopMap();
              [queryReturnsElementsLeft, queryReturnsMapAcc] = [
                queryReturnsInit,
                new Map()
              ];
              while (-1 < queryReturnsElementsLeft) {
                if (0 < queryReturnsElementsLeft) {
                  queryReturnsNewFieldsLeft = queryReturnsElementsLeft;
                } else {
                  queryReturnsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < queryReturnsNewFieldsLeft) {
                  queryReturnsKey = dynamicObject.decoderPopKey();
                  queryReturnsMapValue = dynamicGetField(dynamicObject);
                  queryReturnsMapAcc.set(queryReturnsKey, queryReturnsMapValue);

                  [queryReturnsElementsLeft, queryReturnsMapAcc] = [
                    queryReturnsNewFieldsLeft - 1,
                    queryReturnsMapAcc
                  ];
                } else {
                  [queryReturnsElementsLeft, queryReturnsMapAcc] = [
                    -1,
                    queryReturnsMapAcc
                  ];
                }
              }
              queryReturnsValue = queryReturnsMapAcc;
              queryBuilder.returns = queryReturnsValue;

              [queryFieldsLeft, queryBuilder] = [
                queryNewFieldsLeft - 1,
                queryBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [queryFieldsLeft, queryBuilder] = [-1, queryBuilder];
        }
      }
      return queryBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjFunction(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Function {
  let retObj: typelayerCSchemasDefinitionsStructures.Function;
  retObj = dynamicGetFunction(dynamicObject);
  return retObj;
}

export function dynamicPutFunction(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Function
): void {
  let functionFieldMutation: typelayerCSchemasDefinitionsStructures.Mutation;
  let functionFieldQuery: typelayerCSchemasDefinitionsStructures.Query;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Mutation) {
    let functionFieldMutation = inputObject;
    dynamicObject.encoderPutStruct("mutation", 4);
    dynamicObject.encoderPutField("arguments");
    dynamicObject.encoderPutMap(functionFieldMutation.arguments.size);
    if (0 === functionFieldMutation.arguments.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let argumentsValuesIndex: number = 0;
      for (let [
        argumentsValuesKey,
        argumentsValuesElem
      ] of functionFieldMutation.arguments) {
        dynamicObject.encoderPutKey(argumentsValuesKey);
        dynamicPutField(dynamicObject, argumentsValuesElem);
        dynamicObject.encoderPutValueEnd(
          argumentsValuesIndex === functionFieldMutation.arguments.size - 1
        );

        argumentsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("doc");
    if (functionFieldMutation.doc !== null) {
      let docJust = functionFieldMutation.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("returns");
    dynamicObject.encoderPutMap(functionFieldMutation.returns.size);
    if (0 === functionFieldMutation.returns.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let returnsValuesIndex: number = 0;
      for (let [
        returnsValuesKey,
        returnsValuesElem
      ] of functionFieldMutation.returns) {
        dynamicObject.encoderPutKey(returnsValuesKey);
        dynamicPutField(dynamicObject, returnsValuesElem);
        dynamicObject.encoderPutValueEnd(
          returnsValuesIndex === functionFieldMutation.returns.size - 1
        );

        returnsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("target_table");
    dynamicPutTableReference(dynamicObject, functionFieldMutation.targetTable);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Query
  ) {
    let functionFieldQuery = inputObject;
    dynamicObject.encoderPutStruct("query", 3);
    dynamicObject.encoderPutField("arguments");
    dynamicObject.encoderPutMap(functionFieldQuery.arguments.size);
    if (0 === functionFieldQuery.arguments.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let argumentsValuesIndex: number = 0;
      for (let [
        argumentsValuesKey,
        argumentsValuesElem
      ] of functionFieldQuery.arguments) {
        dynamicObject.encoderPutKey(argumentsValuesKey);
        dynamicPutField(dynamicObject, argumentsValuesElem);
        dynamicObject.encoderPutValueEnd(
          argumentsValuesIndex === functionFieldQuery.arguments.size - 1
        );

        argumentsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("doc");
    if (functionFieldQuery.doc !== null) {
      let docJust = functionFieldQuery.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("returns");
    dynamicObject.encoderPutMap(functionFieldQuery.returns.size);
    if (0 === functionFieldQuery.returns.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let returnsValuesIndex: number = 0;
      for (let [
        returnsValuesKey,
        returnsValuesElem
      ] of functionFieldQuery.returns) {
        dynamicObject.encoderPutKey(returnsValuesKey);
        dynamicPutField(dynamicObject, returnsValuesElem);
        dynamicObject.encoderPutValueEnd(
          returnsValuesIndex === functionFieldQuery.returns.size - 1
        );

        returnsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetLanguage(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Language {
  let constructor: string;
  let haskellBuilder: typelayerCSchemasDefinitionsStructures.Haskell;
  let haskellFieldName: string;
  let haskellFieldsLeft: number;
  let haskellInit: typelayerCSchemasDefinitionsStructures.Haskell;
  let haskellNewFieldsLeft: number;
  let numFields: number;
  let pythonBuilder: typelayerCSchemasDefinitionsStructures.Python;
  let pythonFieldName: string;
  let pythonFieldsLeft: number;
  let pythonInit: typelayerCSchemasDefinitionsStructures.Python;
  let pythonNewFieldsLeft: number;
  let typescriptBuilder: typelayerCSchemasDefinitionsStructures.Typescript;
  let typescriptFieldName: string;
  let typescriptFieldsLeft: number;
  let typescriptInit: typelayerCSchemasDefinitionsStructures.Typescript;
  let typescriptNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("haskell");
  switch (constructor) {
    case "haskell":
      haskellInit = typelayerCSchemasDefinitionsStructures.defaultHaskell();
      [haskellFieldsLeft, haskellBuilder] = [numFields, haskellInit];
      while (-1 < haskellFieldsLeft) {
        if (0 < haskellFieldsLeft) {
          haskellNewFieldsLeft = haskellFieldsLeft;
        } else {
          haskellNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < haskellNewFieldsLeft) {
          haskellFieldName = dynamicObject.decoderPopField();
          switch (haskellFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [haskellFieldsLeft, haskellBuilder] = [-1, haskellBuilder];
        }
      }
      return haskellBuilder;
      break;
    case "python":
      pythonInit = typelayerCSchemasDefinitionsStructures.defaultPython();
      [pythonFieldsLeft, pythonBuilder] = [numFields, pythonInit];
      while (-1 < pythonFieldsLeft) {
        if (0 < pythonFieldsLeft) {
          pythonNewFieldsLeft = pythonFieldsLeft;
        } else {
          pythonNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < pythonNewFieldsLeft) {
          pythonFieldName = dynamicObject.decoderPopField();
          switch (pythonFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [pythonFieldsLeft, pythonBuilder] = [-1, pythonBuilder];
        }
      }
      return pythonBuilder;
      break;
    case "typescript":
      typescriptInit = typelayerCSchemasDefinitionsStructures.defaultTypescript();
      [typescriptFieldsLeft, typescriptBuilder] = [numFields, typescriptInit];
      while (-1 < typescriptFieldsLeft) {
        if (0 < typescriptFieldsLeft) {
          typescriptNewFieldsLeft = typescriptFieldsLeft;
        } else {
          typescriptNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < typescriptNewFieldsLeft) {
          typescriptFieldName = dynamicObject.decoderPopField();
          switch (typescriptFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [typescriptFieldsLeft, typescriptBuilder] = [-1, typescriptBuilder];
        }
      }
      return typescriptBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjLanguage(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Language {
  let retObj: typelayerCSchemasDefinitionsStructures.Language;
  retObj = dynamicGetLanguage(dynamicObject);
  return retObj;
}

export function dynamicPutLanguage(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Language
): void {
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Haskell) {
    let languageFieldHaskell = inputObject;
    dynamicObject.encoderPutStruct("haskell", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Python
  ) {
    let languageFieldPython = inputObject;
    dynamicObject.encoderPutStruct("python", 0);
    return;
  } else if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.Typescript
  ) {
    let languageFieldTypescript = inputObject;
    dynamicObject.encoderPutStruct("typescript", 0);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetPackage(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Package {
  let constructor: string;
  let numFields: number;
  let packageBuilder: typelayerCSchemasDefinitionsStructures.Package;
  let packageCollectionsElementsLeft: number;
  let packageCollectionsInit: number;
  let packageCollectionsKey: string;
  let packageCollectionsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Collection
  >;
  let packageCollectionsMapValue: typelayerCSchemasDefinitionsStructures.Collection;
  let packageCollectionsNewFieldsLeft: number;
  let packageCollectionsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Collection
  >;
  let packageDocIsNull: boolean;
  let packageDocUnpacked: string;
  let packageDocValue: string | null;
  let packageFieldName: string;
  let packageFieldsLeft: number;
  let packageIdValue: string;
  let packageInit: typelayerCSchemasDefinitionsStructures.Package;
  let packageNewFieldsLeft: number;
  let packageSchemasElementsLeft: number;
  let packageSchemasInit: number;
  let packageSchemasKey: string;
  let packageSchemasMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Schema
  >;
  let packageSchemasMapValue: typelayerCSchemasDefinitionsStructures.Schema;
  let packageSchemasNewFieldsLeft: number;
  let packageSchemasValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Schema
  >;
  let packageServicesElementsLeft: number;
  let packageServicesInit: number;
  let packageServicesKey: string;
  let packageServicesMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Service
  >;
  let packageServicesMapValue: typelayerCSchemasDefinitionsStructures.Service;
  let packageServicesNewFieldsLeft: number;
  let packageServicesValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Service
  >;
  let packageVersionValue: string;
  [constructor, numFields] = dynamicObject.decoderPopStruct("package");
  switch (constructor) {
    case "package":
      packageInit = typelayerCSchemasDefinitionsStructures.defaultPackage();
      [packageFieldsLeft, packageBuilder] = [numFields, packageInit];
      while (-1 < packageFieldsLeft) {
        if (0 < packageFieldsLeft) {
          packageNewFieldsLeft = packageFieldsLeft;
        } else {
          packageNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < packageNewFieldsLeft) {
          packageFieldName = dynamicObject.decoderPopField();
          switch (packageFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "collections":
              packageCollectionsInit = dynamicObject.decoderPopMap();
              [packageCollectionsElementsLeft, packageCollectionsMapAcc] = [
                packageCollectionsInit,
                new Map()
              ];
              while (-1 < packageCollectionsElementsLeft) {
                if (0 < packageCollectionsElementsLeft) {
                  packageCollectionsNewFieldsLeft = packageCollectionsElementsLeft;
                } else {
                  packageCollectionsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < packageCollectionsNewFieldsLeft) {
                  packageCollectionsKey = dynamicObject.decoderPopKey();
                  packageCollectionsMapValue = dynamicGetCollection(
                    dynamicObject
                  );
                  packageCollectionsMapAcc.set(
                    packageCollectionsKey,
                    packageCollectionsMapValue
                  );

                  [packageCollectionsElementsLeft, packageCollectionsMapAcc] = [
                    packageCollectionsNewFieldsLeft - 1,
                    packageCollectionsMapAcc
                  ];
                } else {
                  [packageCollectionsElementsLeft, packageCollectionsMapAcc] = [
                    -1,
                    packageCollectionsMapAcc
                  ];
                }
              }
              packageCollectionsValue = packageCollectionsMapAcc;
              packageBuilder.collections = packageCollectionsValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            case "doc":
              packageDocIsNull = dynamicObject.decoderPopMaybe();
              if (packageDocIsNull) {
                packageDocUnpacked = dynamicObject.decoderPopString();
                packageDocValue = packageDocUnpacked;
              } else {
                packageDocValue = null;
              }
              packageBuilder.doc = packageDocValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            case "id":
              packageIdValue = dynamicObject.decoderPopString();
              packageBuilder.id = packageIdValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            case "schemas":
              packageSchemasInit = dynamicObject.decoderPopMap();
              [packageSchemasElementsLeft, packageSchemasMapAcc] = [
                packageSchemasInit,
                new Map()
              ];
              while (-1 < packageSchemasElementsLeft) {
                if (0 < packageSchemasElementsLeft) {
                  packageSchemasNewFieldsLeft = packageSchemasElementsLeft;
                } else {
                  packageSchemasNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < packageSchemasNewFieldsLeft) {
                  packageSchemasKey = dynamicObject.decoderPopKey();
                  packageSchemasMapValue = dynamicGetSchema(dynamicObject);
                  packageSchemasMapAcc.set(
                    packageSchemasKey,
                    packageSchemasMapValue
                  );

                  [packageSchemasElementsLeft, packageSchemasMapAcc] = [
                    packageSchemasNewFieldsLeft - 1,
                    packageSchemasMapAcc
                  ];
                } else {
                  [packageSchemasElementsLeft, packageSchemasMapAcc] = [
                    -1,
                    packageSchemasMapAcc
                  ];
                }
              }
              packageSchemasValue = packageSchemasMapAcc;
              packageBuilder.schemas = packageSchemasValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            case "services":
              packageServicesInit = dynamicObject.decoderPopMap();
              [packageServicesElementsLeft, packageServicesMapAcc] = [
                packageServicesInit,
                new Map()
              ];
              while (-1 < packageServicesElementsLeft) {
                if (0 < packageServicesElementsLeft) {
                  packageServicesNewFieldsLeft = packageServicesElementsLeft;
                } else {
                  packageServicesNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < packageServicesNewFieldsLeft) {
                  packageServicesKey = dynamicObject.decoderPopKey();
                  packageServicesMapValue = dynamicGetService(dynamicObject);
                  packageServicesMapAcc.set(
                    packageServicesKey,
                    packageServicesMapValue
                  );

                  [packageServicesElementsLeft, packageServicesMapAcc] = [
                    packageServicesNewFieldsLeft - 1,
                    packageServicesMapAcc
                  ];
                } else {
                  [packageServicesElementsLeft, packageServicesMapAcc] = [
                    -1,
                    packageServicesMapAcc
                  ];
                }
              }
              packageServicesValue = packageServicesMapAcc;
              packageBuilder.services = packageServicesValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            case "version":
              packageVersionValue = dynamicObject.decoderPopString();
              packageBuilder.version = packageVersionValue;

              [packageFieldsLeft, packageBuilder] = [
                packageNewFieldsLeft - 1,
                packageBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [packageFieldsLeft, packageBuilder] = [-1, packageBuilder];
        }
      }
      return packageBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjPackage(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Package {
  let retObj: typelayerCSchemasDefinitionsStructures.Package;
  retObj = dynamicGetPackage(dynamicObject);
  return retObj;
}

export function dynamicPutPackage(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Package
): void {
  let packageFieldPackage: typelayerCSchemasDefinitionsStructures.Package;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Package) {
    let packageFieldPackage = inputObject;
    dynamicObject.encoderPutStruct("package", 6);
    dynamicObject.encoderPutField("collections");
    dynamicObject.encoderPutMap(packageFieldPackage.collections.size);
    if (0 === packageFieldPackage.collections.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let collectionsValuesIndex: number = 0;
      for (let [
        collectionsValuesKey,
        collectionsValuesElem
      ] of packageFieldPackage.collections) {
        dynamicObject.encoderPutKey(collectionsValuesKey);
        dynamicPutCollection(dynamicObject, collectionsValuesElem);
        dynamicObject.encoderPutValueEnd(
          collectionsValuesIndex === packageFieldPackage.collections.size - 1
        );

        collectionsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("doc");
    if (packageFieldPackage.doc !== null) {
      let docJust = packageFieldPackage.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("id");
    dynamicObject.encoderPutString(packageFieldPackage.id);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schemas");
    dynamicObject.encoderPutMap(packageFieldPackage.schemas.size);
    if (0 === packageFieldPackage.schemas.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let schemasValuesIndex: number = 0;
      for (let [
        schemasValuesKey,
        schemasValuesElem
      ] of packageFieldPackage.schemas) {
        dynamicObject.encoderPutKey(schemasValuesKey);
        dynamicPutSchema(dynamicObject, schemasValuesElem);
        dynamicObject.encoderPutValueEnd(
          schemasValuesIndex === packageFieldPackage.schemas.size - 1
        );

        schemasValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("services");
    dynamicObject.encoderPutMap(packageFieldPackage.services.size);
    if (0 === packageFieldPackage.services.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let servicesValuesIndex: number = 0;
      for (let [
        servicesValuesKey,
        servicesValuesElem
      ] of packageFieldPackage.services) {
        dynamicObject.encoderPutKey(servicesValuesKey);
        dynamicPutService(dynamicObject, servicesValuesElem);
        dynamicObject.encoderPutValueEnd(
          servicesValuesIndex === packageFieldPackage.services.size - 1
        );

        servicesValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("version");
    dynamicObject.encoderPutString(packageFieldPackage.version);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetSchema(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Schema {
  let constructor: string;
  let numFields: number;
  let schemaBuilder: typelayerCSchemasDefinitionsStructures.Schema;
  let schemaDocIsNull: boolean;
  let schemaDocUnpacked: string;
  let schemaDocValue: string | null;
  let schemaFieldName: string;
  let schemaFieldsLeft: number;
  let schemaInit: typelayerCSchemasDefinitionsStructures.Schema;
  let schemaNewFieldsLeft: number;
  let schemaStructuresElementsLeft: number;
  let schemaStructuresInit: number;
  let schemaStructuresKey: string;
  let schemaStructuresMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Structure
  >;
  let schemaStructuresMapValue: typelayerCSchemasDefinitionsStructures.Structure;
  let schemaStructuresNewFieldsLeft: number;
  let schemaStructuresValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Structure
  >;
  [constructor, numFields] = dynamicObject.decoderPopStruct("schema");
  switch (constructor) {
    case "schema":
      schemaInit = typelayerCSchemasDefinitionsStructures.defaultSchema();
      [schemaFieldsLeft, schemaBuilder] = [numFields, schemaInit];
      while (-1 < schemaFieldsLeft) {
        if (0 < schemaFieldsLeft) {
          schemaNewFieldsLeft = schemaFieldsLeft;
        } else {
          schemaNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < schemaNewFieldsLeft) {
          schemaFieldName = dynamicObject.decoderPopField();
          switch (schemaFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "doc":
              schemaDocIsNull = dynamicObject.decoderPopMaybe();
              if (schemaDocIsNull) {
                schemaDocUnpacked = dynamicObject.decoderPopString();
                schemaDocValue = schemaDocUnpacked;
              } else {
                schemaDocValue = null;
              }
              schemaBuilder.doc = schemaDocValue;

              [schemaFieldsLeft, schemaBuilder] = [
                schemaNewFieldsLeft - 1,
                schemaBuilder
              ];
              break;
            case "structures":
              schemaStructuresInit = dynamicObject.decoderPopMap();
              [schemaStructuresElementsLeft, schemaStructuresMapAcc] = [
                schemaStructuresInit,
                new Map()
              ];
              while (-1 < schemaStructuresElementsLeft) {
                if (0 < schemaStructuresElementsLeft) {
                  schemaStructuresNewFieldsLeft = schemaStructuresElementsLeft;
                } else {
                  schemaStructuresNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < schemaStructuresNewFieldsLeft) {
                  schemaStructuresKey = dynamicObject.decoderPopKey();
                  schemaStructuresMapValue = dynamicGetStructure(dynamicObject);
                  schemaStructuresMapAcc.set(
                    schemaStructuresKey,
                    schemaStructuresMapValue
                  );

                  [schemaStructuresElementsLeft, schemaStructuresMapAcc] = [
                    schemaStructuresNewFieldsLeft - 1,
                    schemaStructuresMapAcc
                  ];
                } else {
                  [schemaStructuresElementsLeft, schemaStructuresMapAcc] = [
                    -1,
                    schemaStructuresMapAcc
                  ];
                }
              }
              schemaStructuresValue = schemaStructuresMapAcc;
              schemaBuilder.structures = schemaStructuresValue;

              [schemaFieldsLeft, schemaBuilder] = [
                schemaNewFieldsLeft - 1,
                schemaBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [schemaFieldsLeft, schemaBuilder] = [-1, schemaBuilder];
        }
      }
      return schemaBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjSchema(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Schema {
  let retObj: typelayerCSchemasDefinitionsStructures.Schema;
  retObj = dynamicGetSchema(dynamicObject);
  return retObj;
}

export function dynamicPutSchema(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Schema
): void {
  let schemaFieldSchema: typelayerCSchemasDefinitionsStructures.Schema;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Schema) {
    let schemaFieldSchema = inputObject;
    dynamicObject.encoderPutStruct("schema", 2);
    dynamicObject.encoderPutField("doc");
    if (schemaFieldSchema.doc !== null) {
      let docJust = schemaFieldSchema.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("structures");
    dynamicObject.encoderPutMap(schemaFieldSchema.structures.size);
    if (0 === schemaFieldSchema.structures.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let structuresValuesIndex: number = 0;
      for (let [
        structuresValuesKey,
        structuresValuesElem
      ] of schemaFieldSchema.structures) {
        dynamicObject.encoderPutKey(structuresValuesKey);
        dynamicPutStructure(dynamicObject, structuresValuesElem);
        dynamicObject.encoderPutValueEnd(
          structuresValuesIndex === schemaFieldSchema.structures.size - 1
        );

        structuresValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetSchemaReference(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.SchemaReference {
  let constructor: string;
  let numFields: number;
  let schemaReferenceBuilder: typelayerCSchemasDefinitionsStructures.SchemaReference;
  let schemaReferenceFieldName: string;
  let schemaReferenceFieldsLeft: number;
  let schemaReferenceInit: typelayerCSchemasDefinitionsStructures.SchemaReference;
  let schemaReferenceNewFieldsLeft: number;
  let schemaReferencePackageValue: string;
  let schemaReferenceSchemaIdValue: string;
  [constructor, numFields] = dynamicObject.decoderPopStruct("schema_reference");
  switch (constructor) {
    case "schema_reference":
      schemaReferenceInit = typelayerCSchemasDefinitionsStructures.defaultSchemaReference();
      [schemaReferenceFieldsLeft, schemaReferenceBuilder] = [
        numFields,
        schemaReferenceInit
      ];
      while (-1 < schemaReferenceFieldsLeft) {
        if (0 < schemaReferenceFieldsLeft) {
          schemaReferenceNewFieldsLeft = schemaReferenceFieldsLeft;
        } else {
          schemaReferenceNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < schemaReferenceNewFieldsLeft) {
          schemaReferenceFieldName = dynamicObject.decoderPopField();
          switch (schemaReferenceFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "package":
              schemaReferencePackageValue = dynamicObject.decoderPopString();
              schemaReferenceBuilder.package = schemaReferencePackageValue;

              [schemaReferenceFieldsLeft, schemaReferenceBuilder] = [
                schemaReferenceNewFieldsLeft - 1,
                schemaReferenceBuilder
              ];
              break;
            case "schema_id":
              schemaReferenceSchemaIdValue = dynamicObject.decoderPopString();
              schemaReferenceBuilder.schemaId = schemaReferenceSchemaIdValue;

              [schemaReferenceFieldsLeft, schemaReferenceBuilder] = [
                schemaReferenceNewFieldsLeft - 1,
                schemaReferenceBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [schemaReferenceFieldsLeft, schemaReferenceBuilder] = [
            -1,
            schemaReferenceBuilder
          ];
        }
      }
      return schemaReferenceBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjSchemaReference(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.SchemaReference {
  let retObj: typelayerCSchemasDefinitionsStructures.SchemaReference;
  retObj = dynamicGetSchemaReference(dynamicObject);
  return retObj;
}

export function dynamicPutSchemaReference(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.SchemaReference
): void {
  let schemaReferenceFieldSchemaReference: typelayerCSchemasDefinitionsStructures.SchemaReference;
  if (
    inputObject instanceof
    typelayerCSchemasDefinitionsStructures.SchemaReference
  ) {
    let schemaReferenceFieldSchemaReference = inputObject;
    dynamicObject.encoderPutStruct("schema_reference", 2);
    dynamicObject.encoderPutField("package");
    dynamicObject.encoderPutString(schemaReferenceFieldSchemaReference.package);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("schema_id");
    dynamicObject.encoderPutString(
      schemaReferenceFieldSchemaReference.schemaId
    );
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetService(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Service {
  let constructor: string;
  let numFields: number;
  let serviceBuilder: typelayerCSchemasDefinitionsStructures.Service;
  let serviceDocIsNull: boolean;
  let serviceDocUnpacked: string;
  let serviceDocValue: string | null;
  let serviceFieldName: string;
  let serviceFieldsLeft: number;
  let serviceFunctionsElementsLeft: number;
  let serviceFunctionsInit: number;
  let serviceFunctionsKey: string;
  let serviceFunctionsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Function
  >;
  let serviceFunctionsMapValue: typelayerCSchemasDefinitionsStructures.Function;
  let serviceFunctionsNewFieldsLeft: number;
  let serviceFunctionsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Function
  >;
  let serviceInit: typelayerCSchemasDefinitionsStructures.Service;
  let serviceNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("service");
  switch (constructor) {
    case "service":
      serviceInit = typelayerCSchemasDefinitionsStructures.defaultService();
      [serviceFieldsLeft, serviceBuilder] = [numFields, serviceInit];
      while (-1 < serviceFieldsLeft) {
        if (0 < serviceFieldsLeft) {
          serviceNewFieldsLeft = serviceFieldsLeft;
        } else {
          serviceNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < serviceNewFieldsLeft) {
          serviceFieldName = dynamicObject.decoderPopField();
          switch (serviceFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "doc":
              serviceDocIsNull = dynamicObject.decoderPopMaybe();
              if (serviceDocIsNull) {
                serviceDocUnpacked = dynamicObject.decoderPopString();
                serviceDocValue = serviceDocUnpacked;
              } else {
                serviceDocValue = null;
              }
              serviceBuilder.doc = serviceDocValue;

              [serviceFieldsLeft, serviceBuilder] = [
                serviceNewFieldsLeft - 1,
                serviceBuilder
              ];
              break;
            case "functions":
              serviceFunctionsInit = dynamicObject.decoderPopMap();
              [serviceFunctionsElementsLeft, serviceFunctionsMapAcc] = [
                serviceFunctionsInit,
                new Map()
              ];
              while (-1 < serviceFunctionsElementsLeft) {
                if (0 < serviceFunctionsElementsLeft) {
                  serviceFunctionsNewFieldsLeft = serviceFunctionsElementsLeft;
                } else {
                  serviceFunctionsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < serviceFunctionsNewFieldsLeft) {
                  serviceFunctionsKey = dynamicObject.decoderPopKey();
                  serviceFunctionsMapValue = dynamicGetFunction(dynamicObject);
                  serviceFunctionsMapAcc.set(
                    serviceFunctionsKey,
                    serviceFunctionsMapValue
                  );

                  [serviceFunctionsElementsLeft, serviceFunctionsMapAcc] = [
                    serviceFunctionsNewFieldsLeft - 1,
                    serviceFunctionsMapAcc
                  ];
                } else {
                  [serviceFunctionsElementsLeft, serviceFunctionsMapAcc] = [
                    -1,
                    serviceFunctionsMapAcc
                  ];
                }
              }
              serviceFunctionsValue = serviceFunctionsMapAcc;
              serviceBuilder.functions = serviceFunctionsValue;

              [serviceFieldsLeft, serviceBuilder] = [
                serviceNewFieldsLeft - 1,
                serviceBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [serviceFieldsLeft, serviceBuilder] = [-1, serviceBuilder];
        }
      }
      return serviceBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjService(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Service {
  let retObj: typelayerCSchemasDefinitionsStructures.Service;
  retObj = dynamicGetService(dynamicObject);
  return retObj;
}

export function dynamicPutService(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Service
): void {
  let serviceFieldService: typelayerCSchemasDefinitionsStructures.Service;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Service) {
    let serviceFieldService = inputObject;
    dynamicObject.encoderPutStruct("service", 2);
    dynamicObject.encoderPutField("doc");
    if (serviceFieldService.doc !== null) {
      let docJust = serviceFieldService.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("functions");
    dynamicObject.encoderPutMap(serviceFieldService.functions.size);
    if (0 === serviceFieldService.functions.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let functionsValuesIndex: number = 0;
      for (let [
        functionsValuesKey,
        functionsValuesElem
      ] of serviceFieldService.functions) {
        dynamicObject.encoderPutKey(functionsValuesKey);
        dynamicPutFunction(dynamicObject, functionsValuesElem);
        dynamicObject.encoderPutValueEnd(
          functionsValuesIndex === serviceFieldService.functions.size - 1
        );

        functionsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetStructure(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Structure {
  let constructor: string;
  let numFields: number;
  let structureBuilder: typelayerCSchemasDefinitionsStructures.Structure;
  let structureConstructorsElementsLeft: number;
  let structureConstructorsInit: number;
  let structureConstructorsKey: string;
  let structureConstructorsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Constructor
  >;
  let structureConstructorsMapValue: typelayerCSchemasDefinitionsStructures.Constructor;
  let structureConstructorsNewFieldsLeft: number;
  let structureConstructorsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Constructor
  >;
  let structureDocIsNull: boolean;
  let structureDocUnpacked: string;
  let structureDocValue: string | null;
  let structureFieldName: string;
  let structureFieldsLeft: number;
  let structureInit: typelayerCSchemasDefinitionsStructures.Structure;
  let structureNewFieldsLeft: number;
  [constructor, numFields] = dynamicObject.decoderPopStruct("structure");
  switch (constructor) {
    case "structure":
      structureInit = typelayerCSchemasDefinitionsStructures.defaultStructure();
      [structureFieldsLeft, structureBuilder] = [numFields, structureInit];
      while (-1 < structureFieldsLeft) {
        if (0 < structureFieldsLeft) {
          structureNewFieldsLeft = structureFieldsLeft;
        } else {
          structureNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < structureNewFieldsLeft) {
          structureFieldName = dynamicObject.decoderPopField();
          switch (structureFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "constructors":
              structureConstructorsInit = dynamicObject.decoderPopMap();
              [
                structureConstructorsElementsLeft,
                structureConstructorsMapAcc
              ] = [structureConstructorsInit, new Map()];
              while (-1 < structureConstructorsElementsLeft) {
                if (0 < structureConstructorsElementsLeft) {
                  structureConstructorsNewFieldsLeft = structureConstructorsElementsLeft;
                } else {
                  structureConstructorsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < structureConstructorsNewFieldsLeft) {
                  structureConstructorsKey = dynamicObject.decoderPopKey();
                  structureConstructorsMapValue = dynamicGetConstructor(
                    dynamicObject
                  );
                  structureConstructorsMapAcc.set(
                    structureConstructorsKey,
                    structureConstructorsMapValue
                  );

                  [
                    structureConstructorsElementsLeft,
                    structureConstructorsMapAcc
                  ] = [
                    structureConstructorsNewFieldsLeft - 1,
                    structureConstructorsMapAcc
                  ];
                } else {
                  [
                    structureConstructorsElementsLeft,
                    structureConstructorsMapAcc
                  ] = [-1, structureConstructorsMapAcc];
                }
              }
              structureConstructorsValue = structureConstructorsMapAcc;
              structureBuilder.constructors = structureConstructorsValue;

              [structureFieldsLeft, structureBuilder] = [
                structureNewFieldsLeft - 1,
                structureBuilder
              ];
              break;
            case "doc":
              structureDocIsNull = dynamicObject.decoderPopMaybe();
              if (structureDocIsNull) {
                structureDocUnpacked = dynamicObject.decoderPopString();
                structureDocValue = structureDocUnpacked;
              } else {
                structureDocValue = null;
              }
              structureBuilder.doc = structureDocValue;

              [structureFieldsLeft, structureBuilder] = [
                structureNewFieldsLeft - 1,
                structureBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [structureFieldsLeft, structureBuilder] = [-1, structureBuilder];
        }
      }
      return structureBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjStructure(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Structure {
  let retObj: typelayerCSchemasDefinitionsStructures.Structure;
  retObj = dynamicGetStructure(dynamicObject);
  return retObj;
}

export function dynamicPutStructure(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Structure
): void {
  let structureFieldStructure: typelayerCSchemasDefinitionsStructures.Structure;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Structure) {
    let structureFieldStructure = inputObject;
    dynamicObject.encoderPutStruct("structure", 2);
    dynamicObject.encoderPutField("constructors");
    dynamicObject.encoderPutMap(structureFieldStructure.constructors.size);
    if (0 === structureFieldStructure.constructors.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let constructorsValuesIndex: number = 0;
      for (let [
        constructorsValuesKey,
        constructorsValuesElem
      ] of structureFieldStructure.constructors) {
        dynamicObject.encoderPutKey(constructorsValuesKey);
        dynamicPutConstructor(dynamicObject, constructorsValuesElem);
        dynamicObject.encoderPutValueEnd(
          constructorsValuesIndex ===
            structureFieldStructure.constructors.size - 1
        );

        constructorsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("doc");
    if (structureFieldStructure.doc !== null) {
      let docJust = structureFieldStructure.doc;
      dynamicObject.encoderPutMaybe(true);
      dynamicObject.encoderPutString(docJust);
    } else {
      dynamicObject.encoderPutMaybe(false);
    }
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetTable(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Table {
  let constructor: string;
  let numFields: number;
  let tableBuilder: typelayerCSchemasDefinitionsStructures.Table;
  let tableColumnsElementsLeft: number;
  let tableColumnsInit: number;
  let tableColumnsKey: string;
  let tableColumnsMapAcc: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Column
  >;
  let tableColumnsMapValue: typelayerCSchemasDefinitionsStructures.Column;
  let tableColumnsNewFieldsLeft: number;
  let tableColumnsValue: Map<
    string,
    typelayerCSchemasDefinitionsStructures.Column
  >;
  let tableDescriptionValue: string;
  let tableFieldName: string;
  let tableFieldsLeft: number;
  let tableInit: typelayerCSchemasDefinitionsStructures.Table;
  let tableNewFieldsLeft: number;
  let tableTableValue: string;
  [constructor, numFields] = dynamicObject.decoderPopStruct("table");
  switch (constructor) {
    case "table":
      tableInit = typelayerCSchemasDefinitionsStructures.defaultTable();
      [tableFieldsLeft, tableBuilder] = [numFields, tableInit];
      while (-1 < tableFieldsLeft) {
        if (0 < tableFieldsLeft) {
          tableNewFieldsLeft = tableFieldsLeft;
        } else {
          tableNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < tableNewFieldsLeft) {
          tableFieldName = dynamicObject.decoderPopField();
          switch (tableFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "columns":
              tableColumnsInit = dynamicObject.decoderPopMap();
              [tableColumnsElementsLeft, tableColumnsMapAcc] = [
                tableColumnsInit,
                new Map()
              ];
              while (-1 < tableColumnsElementsLeft) {
                if (0 < tableColumnsElementsLeft) {
                  tableColumnsNewFieldsLeft = tableColumnsElementsLeft;
                } else {
                  tableColumnsNewFieldsLeft = dynamicObject.decoderPopHasMoreMap();
                }
                if (0 < tableColumnsNewFieldsLeft) {
                  tableColumnsKey = dynamicObject.decoderPopKey();
                  tableColumnsMapValue = dynamicGetColumn(dynamicObject);
                  tableColumnsMapAcc.set(tableColumnsKey, tableColumnsMapValue);

                  [tableColumnsElementsLeft, tableColumnsMapAcc] = [
                    tableColumnsNewFieldsLeft - 1,
                    tableColumnsMapAcc
                  ];
                } else {
                  [tableColumnsElementsLeft, tableColumnsMapAcc] = [
                    -1,
                    tableColumnsMapAcc
                  ];
                }
              }
              tableColumnsValue = tableColumnsMapAcc;
              tableBuilder.columns = tableColumnsValue;

              [tableFieldsLeft, tableBuilder] = [
                tableNewFieldsLeft - 1,
                tableBuilder
              ];
              break;
            case "description":
              tableDescriptionValue = dynamicObject.decoderPopString();
              tableBuilder.description = tableDescriptionValue;

              [tableFieldsLeft, tableBuilder] = [
                tableNewFieldsLeft - 1,
                tableBuilder
              ];
              break;
            case "table":
              tableTableValue = dynamicObject.decoderPopString();
              tableBuilder.table = tableTableValue;

              [tableFieldsLeft, tableBuilder] = [
                tableNewFieldsLeft - 1,
                tableBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [tableFieldsLeft, tableBuilder] = [-1, tableBuilder];
        }
      }
      return tableBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjTable(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.Table {
  let retObj: typelayerCSchemasDefinitionsStructures.Table;
  retObj = dynamicGetTable(dynamicObject);
  return retObj;
}

export function dynamicPutTable(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.Table
): void {
  let tableFieldTable: typelayerCSchemasDefinitionsStructures.Table;
  if (inputObject instanceof typelayerCSchemasDefinitionsStructures.Table) {
    let tableFieldTable = inputObject;
    dynamicObject.encoderPutStruct("table", 3);
    dynamicObject.encoderPutField("columns");
    dynamicObject.encoderPutMap(tableFieldTable.columns.size);
    if (0 === tableFieldTable.columns.size) {
      dynamicObject.encoderPutValueEnd(true);
    } else {
      let columnsValuesIndex: number = 0;
      for (let [
        columnsValuesKey,
        columnsValuesElem
      ] of tableFieldTable.columns) {
        dynamicObject.encoderPutKey(columnsValuesKey);
        dynamicPutColumn(dynamicObject, columnsValuesElem);
        dynamicObject.encoderPutValueEnd(
          columnsValuesIndex === tableFieldTable.columns.size - 1
        );

        columnsValuesIndex++;
      }
    }
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("description");
    dynamicObject.encoderPutString(tableFieldTable.description);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("table");
    dynamicObject.encoderPutString(tableFieldTable.table);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}

export function dynamicGetTableReference(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.TableReference {
  let constructor: string;
  let numFields: number;
  let tableReferenceBuilder: typelayerCSchemasDefinitionsStructures.TableReference;
  let tableReferenceDatabaseValue: string;
  let tableReferenceFieldName: string;
  let tableReferenceFieldsLeft: number;
  let tableReferenceInit: typelayerCSchemasDefinitionsStructures.TableReference;
  let tableReferenceNewFieldsLeft: number;
  let tableReferencePackageValue: string;
  let tableReferenceTableIdValue: string;
  [constructor, numFields] = dynamicObject.decoderPopStruct("table_reference");
  switch (constructor) {
    case "table_reference":
      tableReferenceInit = typelayerCSchemasDefinitionsStructures.defaultTableReference();
      [tableReferenceFieldsLeft, tableReferenceBuilder] = [
        numFields,
        tableReferenceInit
      ];
      while (-1 < tableReferenceFieldsLeft) {
        if (0 < tableReferenceFieldsLeft) {
          tableReferenceNewFieldsLeft = tableReferenceFieldsLeft;
        } else {
          tableReferenceNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
        }
        if (0 < tableReferenceNewFieldsLeft) {
          tableReferenceFieldName = dynamicObject.decoderPopField();
          switch (tableReferenceFieldName) {
            case "*":
              throw new typelayerCommonDynamic.DynamicGetException(
                "Constructor must be first field",
                { path: dynamicObject.decoderPath() }
              );
              break;
            case "database":
              tableReferenceDatabaseValue = dynamicObject.decoderPopString();
              tableReferenceBuilder.database = tableReferenceDatabaseValue;

              [tableReferenceFieldsLeft, tableReferenceBuilder] = [
                tableReferenceNewFieldsLeft - 1,
                tableReferenceBuilder
              ];
              break;
            case "package":
              tableReferencePackageValue = dynamicObject.decoderPopString();
              tableReferenceBuilder.package = tableReferencePackageValue;

              [tableReferenceFieldsLeft, tableReferenceBuilder] = [
                tableReferenceNewFieldsLeft - 1,
                tableReferenceBuilder
              ];
              break;
            case "table_id":
              tableReferenceTableIdValue = dynamicObject.decoderPopString();
              tableReferenceBuilder.tableId = tableReferenceTableIdValue;

              [tableReferenceFieldsLeft, tableReferenceBuilder] = [
                tableReferenceNewFieldsLeft - 1,
                tableReferenceBuilder
              ];
              break;
            default:
              throw new typelayerCommonDynamic.DynamicGetException(
                "Unknown Field",
                { path: dynamicObject.decoderPath() }
              );
          }
        } else {
          [tableReferenceFieldsLeft, tableReferenceBuilder] = [
            -1,
            tableReferenceBuilder
          ];
        }
      }
      return tableReferenceBuilder;
      break;
    default:
      throw new typelayerCommonDynamic.DynamicGetException(
        "Unknown Constructor",
        { path: dynamicObject.decoderPath() }
      );
  }
}

export function dynamicGetObjTableReference(
  dynamicObject: typelayerCommonDynamic.Decoder
): typelayerCSchemasDefinitionsStructures.TableReference {
  let retObj: typelayerCSchemasDefinitionsStructures.TableReference;
  retObj = dynamicGetTableReference(dynamicObject);
  return retObj;
}

export function dynamicPutTableReference(
  dynamicObject: typelayerCommonDynamic.Encoder,
  inputObject: typelayerCSchemasDefinitionsStructures.TableReference
): void {
  let tableReferenceFieldTableReference: typelayerCSchemasDefinitionsStructures.TableReference;
  if (
    inputObject instanceof typelayerCSchemasDefinitionsStructures.TableReference
  ) {
    let tableReferenceFieldTableReference = inputObject;
    dynamicObject.encoderPutStruct("table_reference", 3);
    dynamicObject.encoderPutField("database");
    dynamicObject.encoderPutString(tableReferenceFieldTableReference.database);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("package");
    dynamicObject.encoderPutString(tableReferenceFieldTableReference.package);
    dynamicObject.encoderPutFieldEnd(false);
    dynamicObject.encoderPutField("table_id");
    dynamicObject.encoderPutString(tableReferenceFieldTableReference.tableId);
    dynamicObject.encoderPutFieldEnd(true);
    return;
  } else {
    throw new Error(`Invalid type ${inputObject}`);
  }
}
