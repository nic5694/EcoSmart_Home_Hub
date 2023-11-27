# EcoSmart_Home_Hub
Iot 2 final project at Champlain College Saint-Lambert. 
#Responses
(ip address is variable for now working on getting a static ip)
Endpoint: `http://192.168.1.137:5000/lights`
returns: 
```json
{
    "04e8f447-f5d8-49eb-a7e6-25198159268b": "{\"id\": 3, \"lightIdentifier\": \"04e8f447-f5d8-49eb-a7e6-25198159268b\", \"name\": \"Bedroom\", \"state\": {\"_value_\": 0, \"_name_\": \"OFF\", \"__objclass__\": {\"py/type\": \"datalayer.LightState.LightState\"}}, \"color\": \"white\", \"ledPinNum\": 6}",
    "a6cf96c3-e761-473a-8cb0-9331d80a5152": "{\"id\": 2, \"lightIdentifier\": \"a6cf96c3-e761-473a-8cb0-9331d80a5152\", \"name\": \"Living Room\", \"state\": {\"_value_\": 0, \"_name_\": \"OFF\", \"__objclass__\": {\"py/type\": \"datalayer.LightState.LightState\"}}, \"color\": \"white\", \"ledPinNum\": 26}",
    "f66305be-33d0-48e1-b6af-3e81eb35aca3": "{\"id\": 1, \"lightIdentifier\": \"f66305be-33d0-48e1-b6af-3e81eb35aca3\", \"name\": \"Kitchen\", \"state\": {\"_value_\": 0, \"_name_\": \"OFF\", \"__objclass__\": {\"py/type\": \"datalayer.LightState.LightState\"}}, \"color\": \"white\", \"ledPinNum\": 15}"
}
```
The key is the identifier for the light and the value is the light object.

# Documentation
### All documentation is within this word document
https://slcqc-my.sharepoint.com/:w:/g/personal/2131659_champlaincollege_qc_ca/EftAPw3ZsndKmSEIEbH2d7QBEI2DikbUa7iW1a4v9jGTPg?e=yeeStO

# UI Design
## Home Page
![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/a76b30c2-e056-46a6-ae00-32c9b0c69159)

## Register Page
![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/20697fea-31fc-45f9-80fa-60f13f38c1ca)

## Login Page
![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/b6f4da46-a230-4847-b2ec-a9faf67b2c7f)

## Hub (Not connected to Raspberry Pi)
![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/e8483f66-4677-4066-9a0c-0838be71cde4)

## Hub (Dummy Data)
https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/4f29d33e-b1ea-4de7-922d-4ec8037d0d43


