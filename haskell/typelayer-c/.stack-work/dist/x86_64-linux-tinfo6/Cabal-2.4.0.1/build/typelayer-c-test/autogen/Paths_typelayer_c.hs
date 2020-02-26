{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
module Paths_typelayer_c (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where

import qualified Control.Exception as Exception
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude

#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,0,0] []
bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath

bindir     = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/bin"
libdir     = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/lib/x86_64-linux-ghc-8.6.5/typelayer-c-0.0.0-FcGelMMw3Ts6lGakPiyMDy-typelayer-c-test"
dynlibdir  = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/lib/x86_64-linux-ghc-8.6.5"
datadir    = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/share/x86_64-linux-ghc-8.6.5/typelayer-c-0.0.0"
libexecdir = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/libexec/x86_64-linux-ghc-8.6.5/typelayer-c-0.0.0"
sysconfdir = "/home/hansonkd/typelayer/typelayer-cli/typelayer-server/.stack-work/install/x86_64-linux-tinfo6/acae3e8f7d24b35a2cabe8737b1631a955145becae99ac5d78145556b0848983/8.6.5/etc"

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath
getBinDir = catchIO (getEnv "typelayer_c_bindir") (\_ -> return bindir)
getLibDir = catchIO (getEnv "typelayer_c_libdir") (\_ -> return libdir)
getDynLibDir = catchIO (getEnv "typelayer_c_dynlibdir") (\_ -> return dynlibdir)
getDataDir = catchIO (getEnv "typelayer_c_datadir") (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "typelayer_c_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "typelayer_c_sysconfdir") (\_ -> return sysconfdir)

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir ++ "/" ++ name)
