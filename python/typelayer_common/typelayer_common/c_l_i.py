import sys
from typelayer_common.encodings.json import JsonEncoding
from typelayer_common.encodings.msgpack import MsgPackEncoding


def run_c_l_i_with_encodings(app, all_encodings):
    if sys.argv[0] in ("python", "python3", "pypy"):
        args = sys.argv[2:]
    else:
        args = sys.argv[1:]
    print(args)
    if args == ["help"]:
        print(app.processDescribe())
    elif args[0] == "--encoding" and len(args) >= 3:
        encoding = args[1]
        path = args[2:]
        input = sys.stdin.buffer.read()
        resBin = app.process_handle(all_encodings[encoding], path, input)
        sys.stdout.buffer.write(resBin)
    return None

def run_c_l_i(app):
    return run_c_l_i_with_encodings(app, {"json": JsonEncoding(), "msgpack": MsgPackEncoding()})
