// Module: services.myFirstService.client
import * as myFirstPackageServicesMyFirstServiceDynamic from "./dynamic";
import * as myFirstPackageServicesMyFirstServiceStructures from "./structures";
import * as typelayerCommonDynamic from "typelayer-common";
import * as typelayerCommonExceptions from "typelayer-common";
import * as typelayerCommonExceptionsEncoding from "typelayer-common";
import * as typelayerCommonTransportClient from "typelayer-common";


export async function myFirstFunction(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionInput): Promise<myFirstPackageServicesMyFirstServiceStructures.MyFirstFunctionOutput> {
    let inputBin : Uint8Array;
    let newEncoder : typelayerCommonDynamic.Encoder;
    let outputDecoder : typelayerCommonDynamic.Decoder;
    let responseBin : Uint8Array;
    newEncoder = transportClient.transportClientEncoding().encodingStartEncoding();
    myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMyFirstFunctionInput(newEncoder, outgoingMessage);
    inputBin = newEncoder.encoderToBinary();
    responseBin = await doRequest(transportClient, ["my-first-function"], inputBin);
    outputDecoder = transportClient.transportClientEncoding().encodingStartDecoding(responseBin);
    return myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMyFirstFunctionOutput(outputDecoder);
}

export async function mySecondFunction(transportClient: typelayerCommonTransportClient.TransportClient, outgoingMessage: myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionInput): Promise<myFirstPackageServicesMyFirstServiceStructures.MySecondFunctionOutput> {
    let inputBin : Uint8Array;
    let newEncoder : typelayerCommonDynamic.Encoder;
    let outputDecoder : typelayerCommonDynamic.Decoder;
    let responseBin : Uint8Array;
    newEncoder = transportClient.transportClientEncoding().encodingStartEncoding();
    myFirstPackageServicesMyFirstServiceDynamic.dynamicPutMySecondFunctionInput(newEncoder, outgoingMessage);
    inputBin = newEncoder.encoderToBinary();
    responseBin = await doRequest(transportClient, ["my-second-function"], inputBin);
    outputDecoder = transportClient.transportClientEncoding().encodingStartDecoding(responseBin);
    return myFirstPackageServicesMyFirstServiceDynamic.dynamicGetObjMySecondFunctionOutput(outputDecoder);
}

export async function doRequest(transport: typelayerCommonTransportClient.TransportClient, path: Array<string>, body: Uint8Array): Promise<Uint8Array> {
    let decoder : typelayerCommonDynamic.Decoder;
    let metaObj : typelayerCommonExceptions.ExceptionMeta;
    let metaSerializedObj : typelayerCommonExceptionsEncoding.ExceptionMetaSerializable;
    let response : typelayerCommonTransportClient.Response;
    let switchOkOk : typelayerCommonTransportClient.Ok;
    let switchOkUhoh : typelayerCommonTransportClient.Uhoh;
    response = await transport.transportClientHandle(path, body);
    if (response instanceof typelayerCommonTransportClient.Ok) {
        let switchOkOk = response;
        return switchOkOk.body;
    } else if (response instanceof typelayerCommonTransportClient.Uhoh) {
        let switchOkUhoh = response;
        decoder = switchOkUhoh.exceptionEncoding.encodingStartDecoding(switchOkUhoh.exceptionBody);
        metaSerializedObj = typelayerCommonExceptionsEncoding.dynamicGetObjExceptionMetaSerializable(decoder);
        metaObj = typelayerCommonExceptionsEncoding.toPlainMeta(metaSerializedObj);
        throw metaObj;
    } else {
        throw new Error(`Invalid type ${response}`);
    }
}