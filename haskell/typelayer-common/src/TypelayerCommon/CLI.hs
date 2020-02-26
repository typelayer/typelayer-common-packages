module TypelayerCommon.CLI (
    runCLI,
    runCLIWithEncodings
) where

import TypelayerCommon.Types
import TypelayerCommon.Prelude
import TypelayerCommon.Application
import TypelayerCommon.Dynamic
import TypelayerCommon.Encodings.Json
import TypelayerCommon.Encodings.Msgpack
import System.Environment (getArgs)
import qualified Data.Text as T
import qualified Data.ByteString as BS
import qualified Data.Map.Strict as M
import Control.Monad (forM)


runCLIWithEncodings :: Process a => a -> M.Map T.Text PackedEncoding -> IO ()
runCLIWithEncodings app allEncodings = do
    args <- getArgs
    case args of
        ["help"] -> do
            description <- runExecuteM $ processDescribe app
            print $ description
        ("--encoding":encoding:path) -> do
            input <- BS.getContents
            executeRes <- runExecuteM $ do
                case M.lookup (T.pack encoding) allEncodings of
                    Just de -> do
                        (newApp, resBin) <- processHandle app de (fmap T.pack path) input
                        lift $ BS.putStr resBin
                    Nothing ->
                        lift $ print $ "Encoding " ++ encoding ++ " not available."
            print executeRes

runCLI :: Process a => a -> IO ()
runCLI app = runCLIWithEncodings app $ M.fromList [(T.pack "json", PackedEncoding JsonEncoding), (T.pack "msgpack", PackedEncoding MsgPackEncoding)]
