import React from 'react'
import '../App.css';
import { useState } from 'react';

function LedLightPanel(props) {
  const [isClicked, setClicked] = useState(false);
  let [lightActive, setLightActive] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  function presseffect(event) {
    setClicked(true); // Apply the "clicked" class
    setTimeout(() => {
      setClicked(false);
      setLightActive(!lightActive); // Remove the "clicked" class after a delay
      if(lightActive){
        setSliderValue(0)
      }
    }, 200);
  }

  function generateLightSVG() {
    return (
      <svg style={{opacity: "0.3"}} width="20" viewBox="0 0 125 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.335 17.0005C35.5536 17.0005 17.0005 36.1543 17.0005 59.5016C17.0005 70.6539 21.8059 77.9187 28.1528 85.6143L30.5782 88.4817C33.1056 91.4738 35.905 94.7832 38.2057 98.0926C41.4244 102.751 44.2919 108.248 45.2439 114.98C45.4708 117.167 44.8414 119.357 43.488 121.089C42.1346 122.822 40.1624 123.963 37.9856 124.273C35.8088 124.582 33.5967 124.036 31.814 122.749C30.0312 121.462 28.8164 119.535 28.4248 117.371C27.9714 114.175 26.5774 111.172 24.2313 107.772C22.3172 105.099 20.2669 102.527 18.0885 100.065C17.1365 98.9313 16.1278 97.7413 15.0511 96.4379C7.94488 87.8357 0 76.6834 0 59.5016C0 26.1807 26.7814 0 62.335 0C97.8886 0 124.67 26.1807 124.67 59.5016C124.67 76.6834 116.725 87.8357 109.619 96.4379C108.542 97.7413 107.534 98.9313 106.582 100.053C104.235 102.83 102.241 105.187 100.45 107.772C98.0926 111.172 96.7099 114.175 96.2566 117.371C95.8386 119.513 94.6139 121.413 92.8353 122.678C91.0567 123.943 88.8602 124.476 86.6996 124.167C84.539 123.859 82.5795 122.732 81.2259 121.02C79.8722 119.308 79.228 117.142 79.4261 114.968C80.3782 108.248 83.2456 102.751 86.4643 98.0926C88.765 94.7832 91.5644 91.4738 94.0918 88.4817C94.9419 87.4843 95.7579 86.521 96.5059 85.6143C102.864 77.9187 107.67 70.6539 107.67 59.5016C107.67 36.1543 89.1164 17.0005 62.335 17.0005ZM36.8343 136.004H87.8357C90.0901 136.004 92.2521 136.899 93.8462 138.493C95.4403 140.087 96.3359 142.249 96.3359 144.504C96.3359 146.758 95.4403 148.92 93.8462 150.514C92.2521 152.109 90.0901 153.004 87.8357 153.004H36.8343C34.5799 153.004 32.4179 152.109 30.8237 150.514C29.2296 148.92 28.3341 146.758 28.3341 144.504C28.3341 142.249 29.2296 140.087 30.8237 138.493C32.4179 136.899 34.5799 136.004 36.8343 136.004ZM39.6677 172.838C39.6677 170.584 40.5633 168.421 42.1574 166.827C43.7515 165.233 45.9136 164.338 48.168 164.338H76.502C78.7564 164.338 80.9185 165.233 82.5126 166.827C84.1067 168.421 85.0023 170.584 85.0023 172.838C85.0023 175.092 84.1067 177.254 82.5126 178.849C80.9185 180.443 78.7564 181.338 76.502 181.338H48.168C45.9136 181.338 43.7515 180.443 42.1574 178.849C40.5633 177.254 39.6677 175.092 39.6677 172.838Z" fill="black"/>
      </svg>
    )
  }

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div style={lightActive? {opacity: "100%"} : {opacity : "50%"}} className={`ledLightPanelContainer ${isClicked ? 'clicked' : ''}`}>

      <div onClick={presseffect}>
        <div class="lightIconAndActiveContainer">

          <div >
            {generateLightSVG()}
          </div>

          <div class="onOrOffContainer">
            {lightActive? "ON" : "OFF"}
          </div>
          
        </div>
        <div class="lightLabelAndPercentageContainer">
          <div style={{fontWeight: "500", color: "Black", opacity: "0.3"}}>
            Led light {props.number}
          </div>

          <div style={{fontWeight: "500", color: "Black", opacity: "0.3"}}>
            {sliderValue}%
          </div>
        </div>

      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <input onChange={lightActive ? handleSliderChange : null} class="slider" type="range" id={props.sliderId} min="0" max="100" step="1" value={sliderValue} />
      </div>
        
    </div>
  )
}

export default LedLightPanel