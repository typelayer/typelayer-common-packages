from datetime import datetime
from typing import Dict
import struct

def fromTimestamp(ts):
    return datetime.fromTimestamp(ts)

class TypelayerException(Exception):
    modName : str
    exceptionName : str
    meta : Dict[str, str]
    def __init__(self, msg, modName, exceptionName, meta):
        super().__init__(msg)
        self.modName = modName
        self.exceptionName = exceptionName
        self.meta = meta

class MemoryViewReader:
    def __init__(self, bytes):
        self.array = memoryview(bytes)

    def getString(self, offset, l):
        return self.getBytes(offset, l).decode("utf8")

    def getBytes(self, offset, l):
        return bytes(self.array[offset:offset + l])

    def getInt64(self, offset):
        return int.from_bytes(self.array[offset:offset+8], byteorder='big', signed=True)

    def getUint32(self, offset):
        return int.from_bytes(self.array[offset:offset+4], byteorder='big', signed=False)

    def getFloat64(self, offset):
        return struct.unpack('>d', self.array[offset:offset+8])[0]

    def getChar(self, offset):
        return self.array[offset]


class MemoryViewWriter:
    def __init__(self, bytes):
        self.offset = 0
        self.array = memoryview(bytearray(4096))

    def reserve(self, size):
        al = len(self.array)
        while self.offset + size > al:
            al *= 1.5

        if al != len(self.array):
            newView = memoryview(bytearray(al))
            newView[:len(self.array)] = self.array
            self.array = newView

    def setString(self, s):
        return self.setBytes(s.encode("utf8"))

    def setBytes(self, b):
        bl = len(b)
        self.reserve(bl)
        self.array[self.offset:self.offset + bl] = b
        self.offset += bl

    def setInt64(self, c):
        self.setBytes(c.to_bytes(8, byteorder='big', signed=True))

    def setUint32(self, c):
        self.setBytes(c.to_bytes(4, byteorder='big', signed=False))

    def setUint16(self, c):
        self.setBytes(c.to_bytes(2, byteorder='big', signed=False))

    def setFloat64(self, c):
        return self.setBytes(struct.pack('>d', c))

    def setChar(self, c):
        self.reserve(1)
        self.array[self.offset] = c
        self.offset += 1

    def finalize(self):
        return bytes(self.array[:self.offset])
