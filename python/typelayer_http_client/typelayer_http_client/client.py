import urllib.request
from typelayer_common.transport_client import TransportClient, Response

def do_request(transport, url, path):
    req = urllib.request.Request(url='http://localhost:8080', data=body, method='POST')
    with urllib.request.urlopen(req) as f:
        if f.status == 200:
            return Ok(body=f.read())
        elif f.status == 400:
            Uhoh(exception_body=f.read(), exception_encoding=transport.transportEncoding())
        else:
            raise Exception("Unexpected status code.")

class HttpTransport(TransportClient):
    async def transport_client_handle(self, path: List[str], body: bytes) -> Response:
        loop = asyncio.get_event_loop()
        return loop.run_in_executor(None, do_request, self, self.base_url + "/".join(path), body)

}
