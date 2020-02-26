from setuptools import find_packages, setup

install_reqs = ["django==3.0.3"]
setup(
    name="typelayer_django",
    version="0.0.0",
    packages=find_packages(),
    package_data={"typelayer_django": ["py.typed"]},
    install_reqs=install_reqs,
)
