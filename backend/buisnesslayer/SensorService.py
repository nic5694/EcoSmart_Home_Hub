from abc import ABC, ABCMeta, abstractmethod

class SensorService(ABC):
    @abstractmethod
    def getSensorValue(self, sensorIdentifier: str):
        pass