#q: how to declare an enum in pyhton?
#a: https://docs.python.org/3/library/enum.html
from enum import Enum
class LightState(Enum):
    ON = 1
    OFF = 0