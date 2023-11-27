import React from 'react'
import '../App.css';

function EcoSmartTitleComponent(props) {
  return (
    <div class="ecoSmartTitleContainer">
        <div>
          <div class="ecoSmartName">EcoSmart</div>
          <div class="ecoSmartHomeHub">Home Hub</div>
        </div>

        <div>
          <button className='logOutBtn' type='button' onClick={props.LogOut}>
            Logout
          </button>
        </div>

    </div>
  )
}

export default EcoSmartTitleComponent