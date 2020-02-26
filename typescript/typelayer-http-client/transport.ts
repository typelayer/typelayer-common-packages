import {
  Encoding,
  TransportClient,
  MsgPackEncoding,
  Ok,
  Uhoh,
  objectToMap,
  mapToObject
} from "typelayer-common";
import * as request from "request-promise-native";
import * as errors from "request-promise-native/errors";

export class NodeHttpTransport implements TransportClient {
  baseUrl: string;
  encoding: Encoding;

  constructor({ baseUrl, encoding }: { baseUrl: string; encoding?: Encoding }) {
    this.baseUrl = baseUrl;
    this.encoding = encoding ? encoding : new MsgPackEncoding({});
  }

  transportClientEncoding(): Encoding {
    return this.encoding;
  }

  transportClientHandle(path: Array<string>, body: Uint8Array) {
    let urlPath = path.join("/");
    return request
      .post({
        url: `${this.baseUrl}/${urlPath}`,
        headers: { "Content-Type": this.encoding.encodingMimetype() },
        body: body,
        resolveWithFullResponse: true,
        encoding: null
      })
      .then(resp => {
        let headers: Map<string, string>;
        return new Ok({ body: new Uint8Array(resp.body) });
      })
      .catch(error => {
        if (error instanceof errors.StatusCodeError) {
          if (error.response.statusCode == 400) {
            return new Uhoh({
              exceptionBody: new Uint8Array(error.response.body),
              exceptionEncoding: this.encoding
            });
          }
        }
        throw error;
      });
  }
}
