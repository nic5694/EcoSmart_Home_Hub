import '../App.css';
import EcoSmartTitleComponent from '../components/EcoSmartTitleComponent';
import LedLightPanel from '../components/LedLightPanel';
import TimePanel from '../components/TimePanel';
import HumidityPanel from '../components/HumidityPanel';
import TemperaturePanel from '../components/TemperaturePanel';
import FanPanel from '../components/FanPanel';
import axios, {get} from "axios";
import {useEffect, useState} from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// @ts-ignore
import { useAuth } from '../AuthContext';

function App() {

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();

  };

    const endpointBasedUrl = "http://192.168.1.137:5000/";

    // Use state to manage the LEDs data
    const [leds, setLeds] = useState({});

    // Declare useEffect to call the API
    useEffect(() => {
        const getLeds = () => {
            axios
                .get(endpointBasedUrl + "lights")
                .then((response) => {
                    console.log(response.data);
                    setLeds(response.data); // Update the state with the fetched data
                })
                .catch((error) => {
                    // Handle errors
                    toast("Error getting the status of the lights")
                    console.log(error);
                });
        };

        // Call the function to fetch data
        getLeds();
    }, []);
    console.log("Keys: " + Object.keys(leds)[0])
  return (
<>
<div>
            <button onClick={handleLogout}>Logout</button>
          </div>
      <div class="bgImage" style={{filter: "blur(3px)"}}></div>
      <div class="container">
        <div class="dashboardContainer">
          <EcoSmartTitleComponent></EcoSmartTitleComponent>
         
          <div class="dashboard">

            <div class="leftSideContainer">

              <div><LedLightPanel lightId={Object.keys(leds)[0]} lightInfo={leds[Object.keys(leds)[0]]} number="1" sliderId="slider1"></LedLightPanel></div>
              <div><LedLightPanel lightId={Object.keys(leds)[1]} lightInfo={leds[Object.keys(leds)[1]]} number="2" sliderId="slider2"></LedLightPanel></div>
              <div><FanPanel></FanPanel></div>

            </div>

            <div class="rightSide">

              <div class="TimeAndHumidityContainer">
                <div><TimePanel></TimePanel></div>
                <div><HumidityPanel></HumidityPanel></div>
              </div>

              <div class="tempContainer">
                <TemperaturePanel></TemperaturePanel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;