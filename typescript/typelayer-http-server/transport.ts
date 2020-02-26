import {
  HttpSettings,
  HttpApplication,
  HttpResponse,
  HttpRequest,
  TypelayerException,
  dynamicPutExceptionMetaSerializable,
  toSerializable,
  getEncodingForRequest,
  objectToMap,
  mapToObject
} from "typelayer-common";
import * as http from "http";

export function runHttp(settings: HttpSettings, application: HttpApplication) {
  const options = { port: settings.port };
  const handler = (
    nodeRequest: http.IncomingMessage,
    nodeResponse: http.ServerResponse
  ) => {
    return new Promise((resolve, reject) => {
      let body: Array<Buffer> = [];
      nodeRequest
        .on("error", (e: Error) => {
          reject(e);
        })
        .on("data", (chunk: Buffer) => {
          body.push(chunk);
        })
        .on("end", () => {
          let binBody: Uint8Array = Buffer.concat(body);
          let url: string = nodeRequest.url || "";
          let splitUrl = url.split("/");

          let request = new HttpRequest({
            path: splitUrl,
            headers: objectToMap(nodeRequest.headers),
            body: binBody
          });

          let encoding = getEncodingForRequest(request);

          application
            .httpApplicationHandleRequest(request)
            .then((appResponse: HttpResponse) => {
              nodeResponse.writeHead(
                appResponse.statusCode,
                mapToObject(appResponse.headers)
              );
              appResponse.body.forEach(c => nodeResponse.write(c));
              nodeResponse.end();
              resolve();
            })
            .catch(e => {
              if (e instanceof TypelayerException) {
                let meta = toSerializable(e.toMeta());
                let encoder = encoding.encodingStartEncoding();
                dynamicPutExceptionMetaSerializable(encoder, meta);
                nodeResponse.writeHead(400, {});
                nodeResponse.end(encoder.encoderToBinary());
              } else {
                reject(e);
              }
            });
        });
    }).catch(e => {
      console.log(e);
      nodeResponse.writeHead(500, {});
      nodeResponse.end("Internal Error");
    });
  };

  http.createServer(handler).listen(options);
}
