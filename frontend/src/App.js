import './App.css';
import EcoSmartTitleComponent from './components/EcoSmartTitleComponent';
import LedLightPanel from './components/LedLightPanel';
import TimePanel from './components/TimePanel';
import HumidityPanel from './components/HumidityPanel';
import TemperaturePanel from './components/TemperaturePanel';
import FanPanel from './components/FanPanel';

function App() {
  return (
    <>
      <div class="bgImage"></div>
      <div class="container">
        <div class="dashboardContainer">
          <EcoSmartTitleComponent></EcoSmartTitleComponent>

          <div class="dashboard">

            <div class="leftSideContainer">

              <div><LedLightPanel number="1" sliderId="slider1"></LedLightPanel></div>
              <div><LedLightPanel number="2" sliderId="slider2"></LedLightPanel></div>
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
