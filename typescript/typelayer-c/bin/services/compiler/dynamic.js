"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.compiler.dynamic
const typelayerCSchemasDefinitionsDynamic = __importStar(require("../../schemas/definitions/dynamic"));
const typelayerCSchemasWorldDynamic = __importStar(require("../../schemas/world/dynamic"));
const typelayerCServicesCompilerStructures = __importStar(require("./structures"));
const typelayerCommonDynamic = __importStar(require("typelayer-common"));
function dynamicGetNewPackageInput(dynamicObject) {
    let constructor;
    let newPackageInputBuilder;
    let newPackageInputFieldName;
    let newPackageInputFieldsLeft;
    let newPackageInputInit;
    let newPackageInputNameValue;
    let newPackageInputNewFieldsLeft;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("new_package_input");
    switch (constructor) {
        case "new_package_input":
            newPackageInputInit = typelayerCServicesCompilerStructures.defaultNewPackageInput();
            [newPackageInputFieldsLeft, newPackageInputBuilder] = [
                numFields,
                newPackageInputInit
            ];
            while (-1 < newPackageInputFieldsLeft) {
                if (0 < newPackageInputFieldsLeft) {
                    newPackageInputNewFieldsLeft = newPackageInputFieldsLeft;
                }
                else {
                    newPackageInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < newPackageInputNewFieldsLeft) {
                    newPackageInputFieldName = dynamicObject.decoderPopField();
                    switch (newPackageInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "name":
                            newPackageInputNameValue = dynamicObject.decoderPopString();
                            newPackageInputBuilder.name = newPackageInputNameValue;
                            [newPackageInputFieldsLeft, newPackageInputBuilder] = [
                                newPackageInputNewFieldsLeft - 1,
                                newPackageInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [newPackageInputFieldsLeft, newPackageInputBuilder] = [
                        -1,
                        newPackageInputBuilder
                    ];
                }
            }
            return newPackageInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetNewPackageInput = dynamicGetNewPackageInput;
function dynamicGetObjNewPackageInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetNewPackageInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjNewPackageInput = dynamicGetObjNewPackageInput;
function dynamicPutNewPackageInput(dynamicObject, inputObject) {
    let newPackageInputFieldNewPackageInput;
    if (inputObject instanceof typelayerCServicesCompilerStructures.NewPackageInput) {
        let newPackageInputFieldNewPackageInput = inputObject;
        dynamicObject.encoderPutStruct("new_package_input", 1);
        dynamicObject.encoderPutField("name");
        dynamicObject.encoderPutString(newPackageInputFieldNewPackageInput.name);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutNewPackageInput = dynamicPutNewPackageInput;
function dynamicGetNewPackageOutput(dynamicObject) {
    let constructor;
    let newPackageOutputBuilder;
    let newPackageOutputFieldName;
    let newPackageOutputFieldsLeft;
    let newPackageOutputInit;
    let newPackageOutputNewFieldsLeft;
    let newPackageOutputPackageValue;
    let numFields;
    [constructor, numFields] = dynamicObject.decoderPopStruct("new_package_output");
    switch (constructor) {
        case "new_package_output":
            newPackageOutputInit = typelayerCServicesCompilerStructures.defaultNewPackageOutput();
            [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
                numFields,
                newPackageOutputInit
            ];
            while (-1 < newPackageOutputFieldsLeft) {
                if (0 < newPackageOutputFieldsLeft) {
                    newPackageOutputNewFieldsLeft = newPackageOutputFieldsLeft;
                }
                else {
                    newPackageOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < newPackageOutputNewFieldsLeft) {
                    newPackageOutputFieldName = dynamicObject.decoderPopField();
                    switch (newPackageOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "package":
                            newPackageOutputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            newPackageOutputBuilder.package = newPackageOutputPackageValue;
                            [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
                                newPackageOutputNewFieldsLeft - 1,
                                newPackageOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [newPackageOutputFieldsLeft, newPackageOutputBuilder] = [
                        -1,
                        newPackageOutputBuilder
                    ];
                }
            }
            return newPackageOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetNewPackageOutput = dynamicGetNewPackageOutput;
function dynamicGetObjNewPackageOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetNewPackageOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjNewPackageOutput = dynamicGetObjNewPackageOutput;
function dynamicPutNewPackageOutput(dynamicObject, inputObject) {
    let newPackageOutputFieldNewPackageOutput;
    if (inputObject instanceof typelayerCServicesCompilerStructures.NewPackageOutput) {
        let newPackageOutputFieldNewPackageOutput = inputObject;
        dynamicObject.encoderPutStruct("new_package_output", 1);
        dynamicObject.encoderPutField("package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, newPackageOutputFieldNewPackageOutput.package);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutNewPackageOutput = dynamicPutNewPackageOutput;
function dynamicGetPreviewInput(dynamicObject) {
    let constructor;
    let numFields;
    let previewInputBuilder;
    let previewInputFieldName;
    let previewInputFieldsLeft;
    let previewInputInit;
    let previewInputLanguageValue;
    let previewInputNewFieldsLeft;
    let previewInputPackageValue;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_input");
    switch (constructor) {
        case "preview_input":
            previewInputInit = typelayerCServicesCompilerStructures.defaultPreviewInput();
            [previewInputFieldsLeft, previewInputBuilder] = [
                numFields,
                previewInputInit
            ];
            while (-1 < previewInputFieldsLeft) {
                if (0 < previewInputFieldsLeft) {
                    previewInputNewFieldsLeft = previewInputFieldsLeft;
                }
                else {
                    previewInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewInputNewFieldsLeft) {
                    previewInputFieldName = dynamicObject.decoderPopField();
                    switch (previewInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "language":
                            previewInputLanguageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetLanguage(dynamicObject);
                            previewInputBuilder.language = previewInputLanguageValue;
                            [previewInputFieldsLeft, previewInputBuilder] = [
                                previewInputNewFieldsLeft - 1,
                                previewInputBuilder
                            ];
                            break;
                        case "package":
                            previewInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            previewInputBuilder.package = previewInputPackageValue;
                            [previewInputFieldsLeft, previewInputBuilder] = [
                                previewInputNewFieldsLeft - 1,
                                previewInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewInputFieldsLeft, previewInputBuilder] = [
                        -1,
                        previewInputBuilder
                    ];
                }
            }
            return previewInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewInput = dynamicGetPreviewInput;
function dynamicGetObjPreviewInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewInput = dynamicGetObjPreviewInput;
function dynamicPutPreviewInput(dynamicObject, inputObject) {
    let previewInputFieldPreviewInput;
    if (inputObject instanceof typelayerCServicesCompilerStructures.PreviewInput) {
        let previewInputFieldPreviewInput = inputObject;
        dynamicObject.encoderPutStruct("preview_input", 2);
        dynamicObject.encoderPutField("language");
        typelayerCSchemasDefinitionsDynamic.dynamicPutLanguage(dynamicObject, previewInputFieldPreviewInput.language);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, previewInputFieldPreviewInput.package);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewInput = dynamicPutPreviewInput;
function dynamicGetPreviewOutput(dynamicObject) {
    let constructor;
    let numFields;
    let previewOutputBuilder;
    let previewOutputFieldName;
    let previewOutputFieldsLeft;
    let previewOutputFilesElementsLeft;
    let previewOutputFilesInit;
    let previewOutputFilesListAcc;
    let previewOutputFilesListValue;
    let previewOutputFilesNewFieldsLeft;
    let previewOutputFilesValue;
    let previewOutputInit;
    let previewOutputNewFieldsLeft;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_output");
    switch (constructor) {
        case "preview_output":
            previewOutputInit = typelayerCServicesCompilerStructures.defaultPreviewOutput();
            [previewOutputFieldsLeft, previewOutputBuilder] = [
                numFields,
                previewOutputInit
            ];
            while (-1 < previewOutputFieldsLeft) {
                if (0 < previewOutputFieldsLeft) {
                    previewOutputNewFieldsLeft = previewOutputFieldsLeft;
                }
                else {
                    previewOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewOutputNewFieldsLeft) {
                    previewOutputFieldName = dynamicObject.decoderPopField();
                    switch (previewOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "files":
                            previewOutputFilesInit = dynamicObject.decoderPopList();
                            [previewOutputFilesElementsLeft, previewOutputFilesListAcc] = [
                                previewOutputFilesInit,
                                []
                            ];
                            while (-1 < previewOutputFilesElementsLeft) {
                                if (0 < previewOutputFilesElementsLeft) {
                                    previewOutputFilesNewFieldsLeft = previewOutputFilesElementsLeft;
                                }
                                else {
                                    previewOutputFilesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if (0 < previewOutputFilesNewFieldsLeft) {
                                    previewOutputFilesListValue = typelayerCSchemasWorldDynamic.dynamicGetFile(dynamicObject);
                                    previewOutputFilesListAcc.push(previewOutputFilesListValue);
                                    [
                                        previewOutputFilesElementsLeft,
                                        previewOutputFilesListAcc
                                    ] = [
                                        previewOutputFilesNewFieldsLeft - 1,
                                        previewOutputFilesListAcc
                                    ];
                                }
                                else {
                                    [
                                        previewOutputFilesElementsLeft,
                                        previewOutputFilesListAcc
                                    ] = [-1, previewOutputFilesListAcc];
                                }
                            }
                            previewOutputFilesValue = previewOutputFilesListAcc;
                            previewOutputBuilder.files = previewOutputFilesValue;
                            [previewOutputFieldsLeft, previewOutputBuilder] = [
                                previewOutputNewFieldsLeft - 1,
                                previewOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewOutputFieldsLeft, previewOutputBuilder] = [
                        -1,
                        previewOutputBuilder
                    ];
                }
            }
            return previewOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewOutput = dynamicGetPreviewOutput;
function dynamicGetObjPreviewOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewOutput = dynamicGetObjPreviewOutput;
function dynamicPutPreviewOutput(dynamicObject, inputObject) {
    let previewOutputFieldPreviewOutput;
    if (inputObject instanceof typelayerCServicesCompilerStructures.PreviewOutput) {
        let previewOutputFieldPreviewOutput = inputObject;
        dynamicObject.encoderPutStruct("preview_output", 1);
        dynamicObject.encoderPutField("files");
        dynamicObject.encoderPutList(previewOutputFieldPreviewOutput.files.length);
        if (0 === previewOutputFieldPreviewOutput.files.length) {
            dynamicObject.encoderPutElementEnd(true);
        }
        else {
            let filesIndex = 0;
            for (let filesElem of previewOutputFieldPreviewOutput.files) {
                typelayerCSchemasWorldDynamic.dynamicPutFile(dynamicObject, filesElem);
                dynamicObject.encoderPutElementEnd(filesIndex === previewOutputFieldPreviewOutput.files.length - 1);
                filesIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewOutput = dynamicPutPreviewOutput;
function dynamicGetPreviewChangesInput(dynamicObject) {
    let constructor;
    let numFields;
    let previewChangesInputBuilder;
    let previewChangesInputChangesElementsLeft;
    let previewChangesInputChangesInit;
    let previewChangesInputChangesListAcc;
    let previewChangesInputChangesListValue;
    let previewChangesInputChangesNewFieldsLeft;
    let previewChangesInputChangesValue;
    let previewChangesInputFieldName;
    let previewChangesInputFieldsLeft;
    let previewChangesInputInit;
    let previewChangesInputNewFieldsLeft;
    let previewChangesInputPackageValue;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_changes_input");
    switch (constructor) {
        case "preview_changes_input":
            previewChangesInputInit = typelayerCServicesCompilerStructures.defaultPreviewChangesInput();
            [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                numFields,
                previewChangesInputInit
            ];
            while (-1 < previewChangesInputFieldsLeft) {
                if (0 < previewChangesInputFieldsLeft) {
                    previewChangesInputNewFieldsLeft = previewChangesInputFieldsLeft;
                }
                else {
                    previewChangesInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewChangesInputNewFieldsLeft) {
                    previewChangesInputFieldName = dynamicObject.decoderPopField();
                    switch (previewChangesInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "changes":
                            previewChangesInputChangesInit = dynamicObject.decoderPopList();
                            [
                                previewChangesInputChangesElementsLeft,
                                previewChangesInputChangesListAcc
                            ] = [previewChangesInputChangesInit, []];
                            while (-1 < previewChangesInputChangesElementsLeft) {
                                if (0 < previewChangesInputChangesElementsLeft) {
                                    previewChangesInputChangesNewFieldsLeft = previewChangesInputChangesElementsLeft;
                                }
                                else {
                                    previewChangesInputChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if (0 < previewChangesInputChangesNewFieldsLeft) {
                                    previewChangesInputChangesListValue = typelayerCSchemasDefinitionsDynamic.dynamicGetChange(dynamicObject);
                                    previewChangesInputChangesListAcc.push(previewChangesInputChangesListValue);
                                    [
                                        previewChangesInputChangesElementsLeft,
                                        previewChangesInputChangesListAcc
                                    ] = [
                                        previewChangesInputChangesNewFieldsLeft - 1,
                                        previewChangesInputChangesListAcc
                                    ];
                                }
                                else {
                                    [
                                        previewChangesInputChangesElementsLeft,
                                        previewChangesInputChangesListAcc
                                    ] = [-1, previewChangesInputChangesListAcc];
                                }
                            }
                            previewChangesInputChangesValue = previewChangesInputChangesListAcc;
                            previewChangesInputBuilder.changes = previewChangesInputChangesValue;
                            [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                                previewChangesInputNewFieldsLeft - 1,
                                previewChangesInputBuilder
                            ];
                            break;
                        case "package":
                            previewChangesInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            previewChangesInputBuilder.package = previewChangesInputPackageValue;
                            [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                                previewChangesInputNewFieldsLeft - 1,
                                previewChangesInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewChangesInputFieldsLeft, previewChangesInputBuilder] = [
                        -1,
                        previewChangesInputBuilder
                    ];
                }
            }
            return previewChangesInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewChangesInput = dynamicGetPreviewChangesInput;
function dynamicGetObjPreviewChangesInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewChangesInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewChangesInput = dynamicGetObjPreviewChangesInput;
function dynamicPutPreviewChangesInput(dynamicObject, inputObject) {
    let previewChangesInputFieldPreviewChangesInput;
    if (inputObject instanceof
        typelayerCServicesCompilerStructures.PreviewChangesInput) {
        let previewChangesInputFieldPreviewChangesInput = inputObject;
        dynamicObject.encoderPutStruct("preview_changes_input", 2);
        dynamicObject.encoderPutField("changes");
        dynamicObject.encoderPutList(previewChangesInputFieldPreviewChangesInput.changes.length);
        if (0 === previewChangesInputFieldPreviewChangesInput.changes.length) {
            dynamicObject.encoderPutElementEnd(true);
        }
        else {
            let changesIndex = 0;
            for (let changesElem of previewChangesInputFieldPreviewChangesInput.changes) {
                typelayerCSchemasDefinitionsDynamic.dynamicPutChange(dynamicObject, changesElem);
                dynamicObject.encoderPutElementEnd(changesIndex ===
                    previewChangesInputFieldPreviewChangesInput.changes.length - 1);
                changesIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, previewChangesInputFieldPreviewChangesInput.package);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewChangesInput = dynamicPutPreviewChangesInput;
function dynamicGetPreviewChangesOutput(dynamicObject) {
    let constructor;
    let numFields;
    let previewChangesOutputBuilder;
    let previewChangesOutputFieldName;
    let previewChangesOutputFieldsLeft;
    let previewChangesOutputInit;
    let previewChangesOutputNewFieldsLeft;
    let previewChangesOutputNewPackageValue;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_changes_output");
    switch (constructor) {
        case "preview_changes_output":
            previewChangesOutputInit = typelayerCServicesCompilerStructures.defaultPreviewChangesOutput();
            [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
                numFields,
                previewChangesOutputInit
            ];
            while (-1 < previewChangesOutputFieldsLeft) {
                if (0 < previewChangesOutputFieldsLeft) {
                    previewChangesOutputNewFieldsLeft = previewChangesOutputFieldsLeft;
                }
                else {
                    previewChangesOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewChangesOutputNewFieldsLeft) {
                    previewChangesOutputFieldName = dynamicObject.decoderPopField();
                    switch (previewChangesOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "new_package":
                            previewChangesOutputNewPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            previewChangesOutputBuilder.newPackage = previewChangesOutputNewPackageValue;
                            [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
                                previewChangesOutputNewFieldsLeft - 1,
                                previewChangesOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewChangesOutputFieldsLeft, previewChangesOutputBuilder] = [
                        -1,
                        previewChangesOutputBuilder
                    ];
                }
            }
            return previewChangesOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewChangesOutput = dynamicGetPreviewChangesOutput;
function dynamicGetObjPreviewChangesOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewChangesOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewChangesOutput = dynamicGetObjPreviewChangesOutput;
function dynamicPutPreviewChangesOutput(dynamicObject, inputObject) {
    let previewChangesOutputFieldPreviewChangesOutput;
    if (inputObject instanceof
        typelayerCServicesCompilerStructures.PreviewChangesOutput) {
        let previewChangesOutputFieldPreviewChangesOutput = inputObject;
        dynamicObject.encoderPutStruct("preview_changes_output", 1);
        dynamicObject.encoderPutField("new_package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, previewChangesOutputFieldPreviewChangesOutput.newPackage);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewChangesOutput = dynamicPutPreviewChangesOutput;
function dynamicGetPreviewDiffInput(dynamicObject) {
    let constructor;
    let numFields;
    let previewDiffInputBuilder;
    let previewDiffInputFieldName;
    let previewDiffInputFieldsLeft;
    let previewDiffInputInit;
    let previewDiffInputNewFieldsLeft;
    let previewDiffInputOtherPackageValue;
    let previewDiffInputPackageValue;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_diff_input");
    switch (constructor) {
        case "preview_diff_input":
            previewDiffInputInit = typelayerCServicesCompilerStructures.defaultPreviewDiffInput();
            [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                numFields,
                previewDiffInputInit
            ];
            while (-1 < previewDiffInputFieldsLeft) {
                if (0 < previewDiffInputFieldsLeft) {
                    previewDiffInputNewFieldsLeft = previewDiffInputFieldsLeft;
                }
                else {
                    previewDiffInputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewDiffInputNewFieldsLeft) {
                    previewDiffInputFieldName = dynamicObject.decoderPopField();
                    switch (previewDiffInputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "other_package":
                            previewDiffInputOtherPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            previewDiffInputBuilder.otherPackage = previewDiffInputOtherPackageValue;
                            [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                                previewDiffInputNewFieldsLeft - 1,
                                previewDiffInputBuilder
                            ];
                            break;
                        case "package":
                            previewDiffInputPackageValue = typelayerCSchemasDefinitionsDynamic.dynamicGetPackage(dynamicObject);
                            previewDiffInputBuilder.package = previewDiffInputPackageValue;
                            [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                                previewDiffInputNewFieldsLeft - 1,
                                previewDiffInputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewDiffInputFieldsLeft, previewDiffInputBuilder] = [
                        -1,
                        previewDiffInputBuilder
                    ];
                }
            }
            return previewDiffInputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewDiffInput = dynamicGetPreviewDiffInput;
function dynamicGetObjPreviewDiffInput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewDiffInput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewDiffInput = dynamicGetObjPreviewDiffInput;
function dynamicPutPreviewDiffInput(dynamicObject, inputObject) {
    let previewDiffInputFieldPreviewDiffInput;
    if (inputObject instanceof typelayerCServicesCompilerStructures.PreviewDiffInput) {
        let previewDiffInputFieldPreviewDiffInput = inputObject;
        dynamicObject.encoderPutStruct("preview_diff_input", 2);
        dynamicObject.encoderPutField("other_package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, previewDiffInputFieldPreviewDiffInput.otherPackage);
        dynamicObject.encoderPutFieldEnd(false);
        dynamicObject.encoderPutField("package");
        typelayerCSchemasDefinitionsDynamic.dynamicPutPackage(dynamicObject, previewDiffInputFieldPreviewDiffInput.package);
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewDiffInput = dynamicPutPreviewDiffInput;
function dynamicGetPreviewDiffOutput(dynamicObject) {
    let constructor;
    let numFields;
    let previewDiffOutputBuilder;
    let previewDiffOutputChangesElementsLeft;
    let previewDiffOutputChangesInit;
    let previewDiffOutputChangesListAcc;
    let previewDiffOutputChangesListValue;
    let previewDiffOutputChangesNewFieldsLeft;
    let previewDiffOutputChangesValue;
    let previewDiffOutputFieldName;
    let previewDiffOutputFieldsLeft;
    let previewDiffOutputInit;
    let previewDiffOutputNewFieldsLeft;
    [constructor, numFields] = dynamicObject.decoderPopStruct("preview_diff_output");
    switch (constructor) {
        case "preview_diff_output":
            previewDiffOutputInit = typelayerCServicesCompilerStructures.defaultPreviewDiffOutput();
            [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
                numFields,
                previewDiffOutputInit
            ];
            while (-1 < previewDiffOutputFieldsLeft) {
                if (0 < previewDiffOutputFieldsLeft) {
                    previewDiffOutputNewFieldsLeft = previewDiffOutputFieldsLeft;
                }
                else {
                    previewDiffOutputNewFieldsLeft = dynamicObject.decoderPopHasMoreStruct();
                }
                if (0 < previewDiffOutputNewFieldsLeft) {
                    previewDiffOutputFieldName = dynamicObject.decoderPopField();
                    switch (previewDiffOutputFieldName) {
                        case "*":
                            throw new typelayerCommonDynamic.DynamicGetException("Constructor must be first field", { path: dynamicObject.decoderPath() });
                            break;
                        case "changes":
                            previewDiffOutputChangesInit = dynamicObject.decoderPopList();
                            [
                                previewDiffOutputChangesElementsLeft,
                                previewDiffOutputChangesListAcc
                            ] = [previewDiffOutputChangesInit, []];
                            while (-1 < previewDiffOutputChangesElementsLeft) {
                                if (0 < previewDiffOutputChangesElementsLeft) {
                                    previewDiffOutputChangesNewFieldsLeft = previewDiffOutputChangesElementsLeft;
                                }
                                else {
                                    previewDiffOutputChangesNewFieldsLeft = dynamicObject.decoderPopHasMoreList();
                                }
                                if (0 < previewDiffOutputChangesNewFieldsLeft) {
                                    previewDiffOutputChangesListValue = typelayerCSchemasDefinitionsDynamic.dynamicGetChange(dynamicObject);
                                    previewDiffOutputChangesListAcc.push(previewDiffOutputChangesListValue);
                                    [
                                        previewDiffOutputChangesElementsLeft,
                                        previewDiffOutputChangesListAcc
                                    ] = [
                                        previewDiffOutputChangesNewFieldsLeft - 1,
                                        previewDiffOutputChangesListAcc
                                    ];
                                }
                                else {
                                    [
                                        previewDiffOutputChangesElementsLeft,
                                        previewDiffOutputChangesListAcc
                                    ] = [-1, previewDiffOutputChangesListAcc];
                                }
                            }
                            previewDiffOutputChangesValue = previewDiffOutputChangesListAcc;
                            previewDiffOutputBuilder.changes = previewDiffOutputChangesValue;
                            [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
                                previewDiffOutputNewFieldsLeft - 1,
                                previewDiffOutputBuilder
                            ];
                            break;
                        default:
                            throw new typelayerCommonDynamic.DynamicGetException("Unknown Field", { path: dynamicObject.decoderPath() });
                    }
                }
                else {
                    [previewDiffOutputFieldsLeft, previewDiffOutputBuilder] = [
                        -1,
                        previewDiffOutputBuilder
                    ];
                }
            }
            return previewDiffOutputBuilder;
            break;
        default:
            throw new typelayerCommonDynamic.DynamicGetException("Unknown Constructor", { path: dynamicObject.decoderPath() });
    }
}
exports.dynamicGetPreviewDiffOutput = dynamicGetPreviewDiffOutput;
function dynamicGetObjPreviewDiffOutput(dynamicObject) {
    let retObj;
    retObj = dynamicGetPreviewDiffOutput(dynamicObject);
    return retObj;
}
exports.dynamicGetObjPreviewDiffOutput = dynamicGetObjPreviewDiffOutput;
function dynamicPutPreviewDiffOutput(dynamicObject, inputObject) {
    let previewDiffOutputFieldPreviewDiffOutput;
    if (inputObject instanceof
        typelayerCServicesCompilerStructures.PreviewDiffOutput) {
        let previewDiffOutputFieldPreviewDiffOutput = inputObject;
        dynamicObject.encoderPutStruct("preview_diff_output", 1);
        dynamicObject.encoderPutField("changes");
        dynamicObject.encoderPutList(previewDiffOutputFieldPreviewDiffOutput.changes.length);
        if (0 === previewDiffOutputFieldPreviewDiffOutput.changes.length) {
            dynamicObject.encoderPutElementEnd(true);
        }
        else {
            let changesIndex = 0;
            for (let changesElem of previewDiffOutputFieldPreviewDiffOutput.changes) {
                typelayerCSchemasDefinitionsDynamic.dynamicPutChange(dynamicObject, changesElem);
                dynamicObject.encoderPutElementEnd(changesIndex ===
                    previewDiffOutputFieldPreviewDiffOutput.changes.length - 1);
                changesIndex++;
            }
        }
        dynamicObject.encoderPutFieldEnd(true);
        return;
    }
    else {
        throw new Error(`Invalid type ${inputObject}`);
    }
}
exports.dynamicPutPreviewDiffOutput = dynamicPutPreviewDiffOutput;
