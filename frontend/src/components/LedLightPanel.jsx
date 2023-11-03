import React from 'react'
import { useState } from 'react';

function LedLightPanel() {
  const [isClicked, setClicked] = useState(false);
  let [lightActive, setLightActive] = useState(false);

  function presseffect(event) {

   

    setClicked(true); // Apply the "clicked" class
    setTimeout(() => {
      setClicked(false);
      setLightActive(!lightActive); // Remove the "clicked" class after a delay
    }, 200);
  }


  return (
    <div onClick={presseffect} style={lightActive? {opacity: "100%"} : {opacity : "50%"}} className={`ledLightPanelContainer ${isClicked ? 'clicked' : ''}`}>
        {lightActive? "ON" : "OFF"}
    </div>
  )
}

export default LedLightPanel