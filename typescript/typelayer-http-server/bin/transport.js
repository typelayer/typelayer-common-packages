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
const http = __importStar(require("http"));
function runHttp(settings, application) {
    const options = { port: settings.port };
    const handler = (nodeRequest, nodeResponse) => {
        return new Promise((resolve, reject) => {
            let body = [];
            nodeRequest
                .on("error", (e) => {
                reject(e);
            })
                .on("data", (chunk) => {
                body.push(chunk);
            })
                .on("end", () => {
                let binBody = Buffer.concat(body);
                let url = nodeRequest.url || "";
                let splitUrl = url.split("/");
                let request = new typelayer_common_1.HttpRequest({
                    path: splitUrl,
                    headers: typelayer_common_1.objectToMap(nodeRequest.headers),
                    body: binBody
                });
                let encoding = typelayer_common_1.getEncodingForRequest(request);
                application
                    .httpApplicationHandleRequest(request)
                    .then((appResponse) => {
                    nodeResponse.writeHead(appResponse.statusCode, typelayer_common_1.mapToObject(appResponse.headers));
                    appResponse.body.forEach(c => nodeResponse.write(c));
                    nodeResponse.end();
                    resolve();
                })
                    .catch(e => {
                    if (e instanceof typelayer_common_1.TypelayerException) {
                        let meta = typelayer_common_1.toSerializable(e.toMeta());
                        let encoder = encoding.encodingStartEncoding();
                        typelayer_common_1.dynamicPutExceptionMetaSerializable(encoder, meta);
                        nodeResponse.writeHead(400, {});
                        nodeResponse.end(encoder.encoderToBinary());
                    }
                    else {
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
exports.runHttp = runHttp;
