from abc import ABC, ABCMeta, abstractmethod

class LightService(ABC):
    @abstractmethod
    def getLightState(self, lightIdentifier: str):
        pass
    def toggleLightStatus(self, lightIdentifier: str):
        pass
    def setLightBrightness(self, lightIdentifier: str, brightness: float):
        pass
    def getAllLights(self):
        pass
