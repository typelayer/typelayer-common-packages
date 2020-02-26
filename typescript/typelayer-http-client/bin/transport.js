"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typelayer_common_1 = require("typelayer-common");
const request = __importStar(require("request-promise-native"));
const errors = __importStar(require("request-promise-native/errors"));
class NodeHttpTransport {
    constructor({ baseUrl, encoding }) {
        this.baseUrl = baseUrl;
        this.encoding = encoding ? encoding : new typelayer_common_1.MsgPackEncoding({});
    }
    transportClientEncoding() {
        return this.encoding;
    }
    transportClientHandle(path, body) {
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
            let headers;
            return new typelayer_common_1.Ok({ body: new Uint8Array(resp.body) });
        })
            .catch(error => {
            if (error instanceof errors.StatusCodeError) {
                if (error.response.statusCode == 400) {
                    return new typelayer_common_1.Uhoh({
                        exceptionBody: new Uint8Array(error.response.body),
                        exceptionEncoding: this.encoding
                    });
                }
            }
            throw error;
        });
    }
}
exports.NodeHttpTransport = NodeHttpTransport;
