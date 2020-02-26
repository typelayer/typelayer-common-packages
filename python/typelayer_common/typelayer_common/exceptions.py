
from dataclasses import dataclass
from typing import List, Dict, Optional


@dataclass
class ExceptionMeta:
    exception_fields: Dict[str, str]
    exception_message: str
    exception_module: str
    exception_type: str