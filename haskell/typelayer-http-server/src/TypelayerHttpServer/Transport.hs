{-# LANGUAGE OverloadedStrings #-}
module TypelayerHttpServer.Transport (
    runHTTP
) where

import TypelayerCommon.Types
import TypelayerCommon.Prelude
import TypelayerCommon.Application
import TypelayerCommon.Dynamic
import TypelayerCommon.ExceptionsEncoding
import TypelayerCommon.Transports.Http
import TypelayerCommon.Encodings.Json
import qualified Data.Text as T
import qualified Data.Text.Encoding as TE
import qualified Data.ByteString as BS
import qualified Data.ByteString.Lazy as LBS
import qualified Data.Map.Strict as M
import qualified Data.CaseInsensitive as CI
import Network.Wai as Wai
import Network.Wai.Handler.Warp as Warp
import Network.HTTP.Types (status400, status500, mkStatus)
import Network.Wai.Middleware.Cors

httpApp :: HttpApplication a => a -> Wai.Application
httpApp app req respond = do
    lbsBody <- Wai.strictRequestBody req
    let tlReq = HttpRequest
                { httpRequestPath = Wai.pathInfo req
                , httpRequestHeaders = M.fromList [((TE.decodeUtf8 $ CI.original k), TE.decodeUtf8 v) | (k, v) <- Wai.requestHeaders req]
                , httpRequestBody = (LBS.toStrict lbsBody)
                }
    executeRes <- runExecuteM $ httpApplicationHandleRequest app tlReq
    case executeRes of
        Right res -> do
            let headers = [(CI.mk (TE.encodeUtf8 hn), TE.encodeUtf8 hv) | (hn, hv) <- M.toAscList $ httpResponseHeaders res]
            respond $ Wai.responseLBS (mkStatus (fromIntegral $ httpResponseStatusCode res) "") headers (LBS.fromChunks $ httpResponseBody res)
        Left (TypelayerError errorMeta) -> do
            errorRes <- runExecuteM $ do
                serializable <- (toSerializable (toErrorMeta errorMeta))
                encoding <- getEncodingForRequest tlReq
                encoder <- encodingStartEncoding encoding
                encoder' <- dynamicPutExceptionMetaSerializable encoder serializable
                bin <- encoderToBinary encoder'
                return (bin, encoding)
            case errorRes of
                Right (bin, encoding) -> respond $ Wai.responseLBS status400 [(CI.mk "Content-Type", TE.encodeUtf8 (encodingMimetype encoding))] (LBS.fromChunks [bin])
                Left _ -> respond $ Wai.responseLBS status500 [] "Error creating meta"

runHTTP :: HttpApplication a => a -> IO ()
runHTTP app = Warp.runSettings (Warp.setHost "0.0.0.0" (Warp.setPort 5000 defaultSettings)) (simpleCors $ httpApp app)
