{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE RecordWildCards #-}
module TypelayerFilesystemCollection.Collection (
    FilesystemCollection(..),
    newFilesystemCollection
) where

import TypelayerCommon.Collections
import TypelayerCommon.Prelude
import qualified Data.Text as T
import qualified Data.ByteString as BS
import Control.Monad (forM)
import System.FilePath.Posix
import System.Directory
import System.IO


data FilesystemCollection = FilesystemCollection FilePath
    deriving (Show, Eq)

instance BinaryCollection FilesystemCollection where
    binaryCollectionDelete (FilesystemCollection basePath) toDelete = do
        files <- forM toDelete $ \fp -> do
            fileExists <- lift $ doesFileExist (basePath </> T.unpack fp)
            if fileExists
            then do
                lift $ removeFile (basePath </> T.unpack fp)
                return [fp]
            else return []
        return $ mconcat files

    binaryCollectionFetch (FilesystemCollection basePath) toFetch = do
        files <- forM toFetch $ \fp -> do
            fileExists <- lift $ doesFileExist (basePath </> T.unpack fp)
            if fileExists
            then do
                contents <- lift $ BS.readFile (basePath </> T.unpack fp)
                return [BinaryKV{binaryKVKey=fp, binaryKVValue=contents}]
            else return []
        return $ mconcat files

    binaryCollectionSave (FilesystemCollection basePath) toSave = do
        files <- forM toSave $ \(BinaryKV{..}) -> do
            lift $ BS.writeFile (T.unpack binaryKVKey) (binaryKVValue)
            return binaryKVKey
        return $ files

    binaryCollectionSlice (FilesystemCollection basePath) offset count = do
        files <- lift $ dirWalk basePath $ \fp -> do
            contents <- BS.readFile fp
            return BinaryKV{binaryKVKey=T.pack fp, binaryKVValue=contents}
        return $ take (fromIntegral count) $ drop (fromIntegral offset) files


dirWalk :: FilePath -> (FilePath -> IO a) -> IO [a]
dirWalk top filefunc = do
  isDirectory <- doesDirectoryExist top
  if isDirectory
    then
      do
        files <- listDirectory top
        res <- mapM (\file -> dirWalk (top </> file) filefunc) files
        return $ mconcat res
    else do
      res <- filefunc top
      return [res]

newFilesystemCollection :: FilePath -> PackedBinaryCollection
newFilesystemCollection basePath = PackedBinaryCollection $ FilesystemCollection basePath
