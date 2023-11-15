# EcoSmart_Home_Hub
Iot 2 final project

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

# Progression

## Frontend

### Step 1

Step 1: Search for inspiration online for UI designs

![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/43860533/6d8f7464-85ba-4ee6-8a24-d2e160088ddd)

### Step 2

Step 2: Begin creating a design using Figma

![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/43860533/4840b804-1598-4fc0-a670-537aa99439f5)
![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/43860533/f2e7e898-ecba-482a-907c-2f92a9044385)

Design 1 :

![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/b1698891-aac3-4728-9fa6-c60fca120e27)

Final Design :

![image](https://github.com/nic5694/EcoSmart_Home_Hub/assets/99833243/e96849dd-6439-4270-83ef-f9c51d66381b)



Step 3: Implement some of the Figma design using Visual Studio Code, being written in React JS
![IMG_9510](https://github.com/nic5694/EcoSmart_Home_Hub/assets/43860533/493b0097-76a5-4d2b-8a37-32c05d91c7fa)
