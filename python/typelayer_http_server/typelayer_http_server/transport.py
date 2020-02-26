from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import Response
from typelayer_common.transports.http import (
    HTTPSettings,
    HTTPApplication,
    HTTPRequest,
    get_encoding_for_request,
    http_application_handle_request,
)


def make_asgi(settings: HttpSettings, application: HttpApplication):
    async def app(scope, receive, send):
        assert scope["type"] == "http"
        request = Request(scope, receive)
        split_url = request.url.path.split("/")
        loop = asyncio.get_event_loop()
        request_body = await request.body()
        request = HttpRequest(
            path=split_url, headers=request.headers, body=request_body
        )
        encoding = get_encoding_for_request(request)
        try:
            appResponse = loop.run_in_executor(
                None, app.http_application_handle_request, request
            )
        except typelayer_exception_common.TypelayerException as e:
            meta = to_serializable(e.to_meta())
            encoder = encoding.start_encoding()
            dynamic_put_exception_meta_serializable(encoder, meta)
            response = Response(
                content, status_code=400, media_type=encoding.mimetype()
            )
            await response(scope, receive, send)
            return
        except Exception as e:
            response = Response("Internal Error", status_code=500)
            await response(scope, receive, send)
            return

        content = b""
        for chunk in appResponse.body:
            content += chunk

        response = Response(
            content,
            status_code=200,
            media_type=encoding.mimetype(),
            headers=appResponse.headers,
        )
        await response(scope, receive, send)

    return app
