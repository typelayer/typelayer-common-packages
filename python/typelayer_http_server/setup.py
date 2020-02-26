from setuptools import find_packages, setup

install_reqs = ["starlette==0.13.0"]
setup(
    name="typelayer_http_server",
    version="0.0.0",
    packages=find_packages(),
    package_data={"typelayer_http_server": ["py.typed"]},
    install_reqs=install_reqs,
)
