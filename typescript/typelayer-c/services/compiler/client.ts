// Module: services.compiler.client
import * as typelayerCServicesCompilerDynamic from "./dynamic";
import * as typelayerCServicesCompilerStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";
import * as typelayerCommonExceptions from "typelayer-common";
import * as typelayerCommonExceptionsEncoding from "typelayer-common";
import * as typelayerCommonTransportClient from "typelayer-common";

export async function newPackage(
  transportClient: typelayerCommonTransportClient.TransportClient,
  outgoingMessage: typelayerCServicesCompilerStructures.NewPackageInput
): Promise<typelayerCServicesCompilerStructures.NewPackageOutput> {
  let inputBin: Uint8Array;
  let newEncoder: typelayerCommonDynamic.Encoder;
  let outputDecoder: typelayerCommonDynamic.Decoder;
  let responseBin: Uint8Array;
  newEncoder = transportClient
    .transportClientEncoding()
    .encodingStartEncoding();
  typelayerCServicesCompilerDynamic.dynamicPutNewPackageInput(
    newEncoder,
    outgoingMessage
  );
  inputBin = newEncoder.encoderToBinary();
  responseBin = await doRequest(transportClient, ["new-package"], inputBin);
  outputDecoder = transportClient
    .transportClientEncoding()
    .encodingStartDecoding(responseBin);
  return typelayerCServicesCompilerDynamic.dynamicGetObjNewPackageOutput(
    outputDecoder
  );
}

export async function preview(
  transportClient: typelayerCommonTransportClient.TransportClient,
  outgoingMessage: typelayerCServicesCompilerStructures.PreviewInput
): Promise<typelayerCServicesCompilerStructures.PreviewOutput> {
  let inputBin: Uint8Array;
  let newEncoder: typelayerCommonDynamic.Encoder;
  let outputDecoder: typelayerCommonDynamic.Decoder;
  let responseBin: Uint8Array;
  newEncoder = transportClient
    .transportClientEncoding()
    .encodingStartEncoding();
  typelayerCServicesCompilerDynamic.dynamicPutPreviewInput(
    newEncoder,
    outgoingMessage
  );
  inputBin = newEncoder.encoderToBinary();
  responseBin = await doRequest(transportClient, ["preview"], inputBin);
  outputDecoder = transportClient
    .transportClientEncoding()
    .encodingStartDecoding(responseBin);
  return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewOutput(
    outputDecoder
  );
}

export async function previewChanges(
  transportClient: typelayerCommonTransportClient.TransportClient,
  outgoingMessage: typelayerCServicesCompilerStructures.PreviewChangesInput
): Promise<typelayerCServicesCompilerStructures.PreviewChangesOutput> {
  let inputBin: Uint8Array;
  let newEncoder: typelayerCommonDynamic.Encoder;
  let outputDecoder: typelayerCommonDynamic.Decoder;
  let responseBin: Uint8Array;
  newEncoder = transportClient
    .transportClientEncoding()
    .encodingStartEncoding();
  typelayerCServicesCompilerDynamic.dynamicPutPreviewChangesInput(
    newEncoder,
    outgoingMessage
  );
  inputBin = newEncoder.encoderToBinary();
  responseBin = await doRequest(transportClient, ["preview-changes"], inputBin);
  outputDecoder = transportClient
    .transportClientEncoding()
    .encodingStartDecoding(responseBin);
  return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewChangesOutput(
    outputDecoder
  );
}

export async function previewDiff(
  transportClient: typelayerCommonTransportClient.TransportClient,
  outgoingMessage: typelayerCServicesCompilerStructures.PreviewDiffInput
): Promise<typelayerCServicesCompilerStructures.PreviewDiffOutput> {
  let inputBin: Uint8Array;
  let newEncoder: typelayerCommonDynamic.Encoder;
  let outputDecoder: typelayerCommonDynamic.Decoder;
  let responseBin: Uint8Array;
  newEncoder = transportClient
    .transportClientEncoding()
    .encodingStartEncoding();
  typelayerCServicesCompilerDynamic.dynamicPutPreviewDiffInput(
    newEncoder,
    outgoingMessage
  );
  inputBin = newEncoder.encoderToBinary();
  responseBin = await doRequest(transportClient, ["preview-diff"], inputBin);
  outputDecoder = transportClient
    .transportClientEncoding()
    .encodingStartDecoding(responseBin);
  return typelayerCServicesCompilerDynamic.dynamicGetObjPreviewDiffOutput(
    outputDecoder
  );
}

export async function doRequest(
  transport: typelayerCommonTransportClient.TransportClient,
  path: Array<string>,
  body: Uint8Array
): Promise<Uint8Array> {
  let decoder: typelayerCommonDynamic.Decoder;
  let metaObj: typelayerCommonExceptions.ExceptionMeta;
  let metaSerializedObj: typelayerCommonExceptionsEncoding.ExceptionMetaSerializable;
  let response: typelayerCommonTransportClient.Response;
  let switchOkOk: typelayerCommonTransportClient.Ok;
  let switchOkUhoh: typelayerCommonTransportClient.Uhoh;
  response = await transport.transportClientHandle(path, body);
  if (response instanceof typelayerCommonTransportClient.Ok) {
    let switchOkOk = response;
    return switchOkOk.body;
  } else if (response instanceof typelayerCommonTransportClient.Uhoh) {
    let switchOkUhoh = response;
    decoder = switchOkUhoh.exceptionEncoding.encodingStartDecoding(
      switchOkUhoh.exceptionBody
    );
    metaSerializedObj = typelayerCommonExceptionsEncoding.dynamicGetObjExceptionMetaSerializable(
      decoder
    );
    metaObj = typelayerCommonExceptionsEncoding.toPlainMeta(metaSerializedObj);
    throw metaObj;
  } else {
    throw new Error(`Invalid type ${response}`);
  }
}
