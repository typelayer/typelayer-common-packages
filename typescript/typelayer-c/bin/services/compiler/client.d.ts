import * as typelayerCServicesCompilerStructures from "./structures";
import * as typelayerCommonTransportClient from "typelayer-common";
export declare function newPackage(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: typelayerCServicesCompilerStructures.NewPackageInput): Promise<typelayerCServicesCompilerStructures.NewPackageOutput>;
export declare function preview(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: typelayerCServicesCompilerStructures.PreviewInput): Promise<typelayerCServicesCompilerStructures.PreviewOutput>;
export declare function previewChanges(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: typelayerCServicesCompilerStructures.PreviewChangesInput): Promise<typelayerCServicesCompilerStructures.PreviewChangesOutput>;
export declare function previewDiff(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: typelayerCServicesCompilerStructures.PreviewDiffInput): Promise<typelayerCServicesCompilerStructures.PreviewDiffOutput>;
export declare function doRequest(transport: typelayerCommonTransportClient.TransportClient, path: Array<string>, body: Uint8Array): Promise<Uint8Array>;
