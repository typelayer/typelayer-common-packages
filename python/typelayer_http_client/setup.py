from setuptools import find_packages, setup

install_reqs = []
setup(
    name="typelayer_http_client",
    version="0.0.0",
    packages=find_packages(),
    package_data={"typelayer_http_client": ["py.typed"]},
    install_reqs=install_reqs,
)
