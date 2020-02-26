{-# LANGUAGE OverloadedStrings #-}
module TypelayerHttpClient.Transport (
    HttpClient(..),
    newHttpClient
) where

import TypelayerCommon.Types
import TypelayerCommon.Prelude
import TypelayerCommon.Dynamic
import TypelayerCommon.TransportClient
import TypelayerCommon.ExceptionsEncoding
import TypelayerCommon.Transports.Http
import TypelayerCommon.Encodings.Msgpack
import qualified Data.Text as T
import qualified Data.Text.Encoding as TE
import qualified Data.ByteString as BS
import qualified Data.ByteString.Lazy as LBS
import qualified Data.Map.Strict as M
import qualified Data.CaseInsensitive as CI
import qualified Network.HTTP.Client as Client
import Network.HTTP.Client.TLS (tlsManagerSettings)
import Network.HTTP.Types.Status (statusCode)


data HttpClient = HttpClient Client.Request Client.Manager PackedEncoding

instance Show HttpClient where
    show _ = "HttpClient"

instance Eq HttpClient where
    (==) l r = False

instance TransportClient HttpClient where
    transportEncoding client@(HttpClient _baseRequest _manager encoding) = encoding
    transportClientHandle client@(HttpClient baseRequest manager encoding) path bin = do
        let request = baseRequest
                        { Client.path = TE.encodeUtf8 $ "/" <> T.intercalate "/" path
                        , Client.requestBody = Client.RequestBodyLBS $ LBS.fromStrict bin
                        , Client.requestHeaders = [(CI.mk "Content-Type", TE.encodeUtf8 (encodingMimetype encoding))]
                        }
        response <- lift $ Client.httpLbs request manager
        case (statusCode $ Client.responseStatus response) of
            200 -> return $ Ok (LBS.toStrict (Client.responseBody response))
            400 -> return $ Uhoh (LBS.toStrict (Client.responseBody response)) encoding
            status -> error $ "unexpected status" ++ show status ++ show (LBS.toStrict (Client.responseBody response))

newHttpClient :: T.Text -> IO HttpClient
newHttpClient baseUrl = do
    manager <- Client.newManager tlsManagerSettings
    request <- Client.parseRequest $ "POST " ++ T.unpack baseUrl
    return $ HttpClient request manager (PackedEncoding MsgPackEncoding)
