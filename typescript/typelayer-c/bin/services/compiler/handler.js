"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Module: services.compiler.handler
const typelayerCServicesCompilerDynamic = __importStar(require("./dynamic"));
const typelayerCommonApplication = __importStar(require("typelayer-common"));
const typelayerCommonDocumentation = __importStar(require("typelayer-common"));
class CompilerApp {
    constructor(arg) {
        this.kind = "CompilerApp";
        Object.assign(this, arg);
    }
    processDescribe() {
        let serviceDescription;
        serviceDescription = describeCompiler();
        return new typelayerCommonDocumentation.ApplicationDescription({
            name: "compiler",
            description: null,
            services: [serviceDescription]
        });
    }
    processHandle(encoding, path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let respBin;
            let response;
            switch (path[0]) {
                case "new-package":
                    response = yield handleCompilerNewPackage(this.service, encoding, body);
                    break;
                case "preview":
                    response = yield handleCompilerPreview(this.service, encoding, body);
                    break;
                case "preview-changes":
                    response = yield handleCompilerPreviewChanges(this.service, encoding, body);
                    break;
                case "preview-diff":
                    response = yield handleCompilerPreviewDiff(this.service, encoding, body);
                    break;
                default:
                    throw new typelayerCommonApplication.FunctionNotFound("Function not found", {
                        requestedService: "compiler",
                        requestedFunction: path[0],
                        availableFunctions: "new-package | preview | preview-changes | preview-diff"
                    });
            }
            this.service = this.service;
            respBin = response.encoderToBinary();
            return respBin;
        });
    }
}
exports.CompilerApp = CompilerApp;
function describeCompiler() {
    let changesFieldInfo;
    let changesInfo;
    let changesInnerFieldInfo;
    let filesFieldInfo;
    let filesInfo;
    let filesInnerFieldInfo;
    let languageFieldInfo;
    let languageInfo;
    let nameFieldInfo;
    let nameInfo;
    let newPackageFieldInfo;
    let newPackageInfo;
    let newPackageInputs;
    let newPackageOutputs;
    let otherPackageFieldInfo;
    let otherPackageInfo;
    let packageFieldInfo;
    let packageInfo;
    let previewChangesInputs;
    let previewChangesOutputs;
    let previewDiffInputs;
    let previewDiffOutputs;
    let previewInputs;
    let previewOutputs;
    nameFieldInfo = new typelayerCommonDocumentation.TlText({});
    nameInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "name",
        description: null,
        typeInfo: nameFieldInfo
    });
    newPackageInputs = [nameInfo];
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    packageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "package",
        description: null,
        typeInfo: packageFieldInfo
    });
    newPackageOutputs = [packageInfo];
    languageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "language"
    });
    languageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "language",
        description: null,
        typeInfo: languageFieldInfo
    });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    packageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "package",
        description: null,
        typeInfo: packageFieldInfo
    });
    previewInputs = [languageInfo, packageInfo];
    filesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "file"
    });
    filesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: filesInnerFieldInfo
    });
    filesInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "files",
        description: null,
        typeInfo: filesFieldInfo
    });
    previewOutputs = [filesInfo];
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    changesInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "changes",
        description: null,
        typeInfo: changesFieldInfo
    });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    packageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "package",
        description: null,
        typeInfo: packageFieldInfo
    });
    previewChangesInputs = [changesInfo, packageInfo];
    newPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    newPackageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "new_package",
        description: null,
        typeInfo: newPackageFieldInfo
    });
    previewChangesOutputs = [newPackageInfo];
    otherPackageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    otherPackageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "other_package",
        description: null,
        typeInfo: otherPackageFieldInfo
    });
    packageFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "package"
    });
    packageInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "package",
        description: null,
        typeInfo: packageFieldInfo
    });
    previewDiffInputs = [otherPackageInfo, packageInfo];
    changesInnerFieldInfo = new typelayerCommonDocumentation.TlStructure({
        package: "typelayer_c",
        schema: "structures",
        structureId: "change"
    });
    changesFieldInfo = new typelayerCommonDocumentation.TlList({
        listInner: changesInnerFieldInfo
    });
    changesInfo = new typelayerCommonDocumentation.FieldDescription({
        name: "changes",
        description: null,
        typeInfo: changesFieldInfo
    });
    previewDiffOutputs = [changesInfo];
    return new typelayerCommonDocumentation.ServiceDescription({
        name: "compiler",
        description: null,
        functions: [
            new typelayerCommonDocumentation.FunctionDescription({
                name: "compiler",
                description: null,
                inputs: newPackageInputs,
                outputs: newPackageOutputs
            }),
            new typelayerCommonDocumentation.FunctionDescription({
                name: "compiler",
                description: null,
                inputs: previewInputs,
                outputs: previewOutputs
            }),
            new typelayerCommonDocumentation.FunctionDescription({
                name: "compiler",
                description: null,
                inputs: previewChangesInputs,
                outputs: previewChangesOutputs
            }),
            new typelayerCommonDocumentation.FunctionDescription({
                name: "compiler",
                description: null,
                inputs: previewDiffInputs,
                outputs: previewDiffOutputs
            })
        ]
    });
}
exports.describeCompiler = describeCompiler;
function handleCompilerNewPackage(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageInput(decoderStart);
        result = yield implementation.compilerNewPackage(input);
        typelayerCServicesCompilerDynamic.dynamicPutNewPackageOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleCompilerNewPackage = handleCompilerNewPackage;
function handleCompilerPreview(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewInput(decoderStart);
        result = yield implementation.compilerPreview(input);
        typelayerCServicesCompilerDynamic.dynamicPutPreviewOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleCompilerPreview = handleCompilerPreview;
function handleCompilerPreviewChanges(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesInput(decoderStart);
        result = yield implementation.compilerPreviewChanges(input);
        typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleCompilerPreviewChanges = handleCompilerPreviewChanges;
function handleCompilerPreviewDiff(implementation, encoding, binary) {
    return __awaiter(this, void 0, void 0, function* () {
        let decoderStart;
        let encoderStart;
        let input;
        let result;
        decoderStart = encoding.encodingStartDecoding(binary);
        encoderStart = encoding.encodingStartEncoding();
        input = typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffInput(decoderStart);
        result = yield implementation.compilerPreviewDiff(input);
        typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffOutput(encoderStart, result);
        return encoderStart;
    });
}
exports.handleCompilerPreviewDiff = handleCompilerPreviewDiff;
