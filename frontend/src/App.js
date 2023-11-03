import './App.css';
import EcoSmartTitleComponent from './components/EcoSmartTitleComponent';
import LedLightPanel from './components/LedLightPanel';
import TimePanel from './components/TimePanel';
import HumidityPanel from './components/HumidityPanel';
import TemperaturePanel from './components/TemperaturePanel';

function App() {
  return (
    <>
      <div class="bgImage"></div>
      <div class="container">
        <div class="dashboardContainer">
          <EcoSmartTitleComponent></EcoSmartTitleComponent>

          <div class="dashboard">

            <div class="leftSideContainer">

              <div><LedLightPanel></LedLightPanel></div>
              <div><LedLightPanel></LedLightPanel></div>
              <div><LedLightPanel></LedLightPanel></div>

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
