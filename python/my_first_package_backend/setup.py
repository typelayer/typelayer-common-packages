from setuptools import find_packages, setup

install_reqs = [

]
setup(
    name="my_first_package_backend",
    version="0.0.0",
    packages=find_packages(),
    package_data={"my_first_package_backend": ["py.typed"]},
    install_reqs=install_reqs
)
