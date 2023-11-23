import React, { useState } from 'react'
import axios from 'axios'
import {useEffect} from "react";

function HumidityPanel() {

  const [humidity, setHumidity] = useState()
const endpointBasedUrl = process.env.REACT_APP_TEMPLATE_URL_BACKEND
    const loadHumidity = async (callback) => {
        try {
            const res = axios.get(endpointBasedUrl + 'currentData')
            setHumidity((await res).data.humidity);
        } catch (err) {
            console.log(err);
        } finally {
            if (callback === undefined) {
                await new Promise(resolve => setTimeout(resolve, 60000));
                await loadHumidity();
            }
        }
    }

    useEffect(() => {
        loadHumidity();
    }, []);

    const generateHumidityIconSVG = () => {
    return (
      <svg style={{opacity: "0.3"}} width="20" viewBox="0 0 125 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M81.9792 125.25C85.2257 125.25 87.9865 124.112 90.2617 121.837C92.5369 119.562 93.6719 116.804 93.6667 113.562C93.6667 110.316 92.5291 107.555 90.2539 105.28C87.9787 103.005 85.2205 101.87 81.9792 101.875C78.7326 101.875 75.9718 103.013 73.6966 105.288C71.4215 107.563 70.2865 110.321 70.2917 113.562C70.2917 116.809 71.4292 119.57 73.7044 121.845C75.9796 124.12 78.7378 125.255 81.9792 125.25ZM42.6312 124.86L93.2771 74.2146L82.3687 63.3062L31.7229 113.952L42.6312 124.86ZM43.0208 86.2917C46.2674 86.2917 49.0282 85.1541 51.3034 82.8789C53.5785 80.6037 54.7135 77.8455 54.7083 74.6042C54.7083 71.3576 53.5708 68.5968 51.2956 66.3216C49.0204 64.0465 46.2622 62.9115 43.0208 62.9167C39.7743 62.9167 37.0135 64.0542 34.7383 66.3294C32.4631 68.6046 31.3281 71.3628 31.3333 74.6042C31.3333 77.8507 32.4709 80.6115 34.7461 82.8867C37.0212 85.1619 39.7795 86.2968 43.0208 86.2917ZM62.5 156.417C44.709 156.417 29.8711 150.313 17.9862 138.106C6.10132 125.899 0.161473 110.706 0.166668 92.525C0.166668 79.5389 5.32994 65.4152 15.6565 50.1539C25.9831 34.8926 41.5976 18.3691 62.5 0.583336C83.4076 18.3743 99.0247 34.9004 109.351 50.1617C119.678 65.423 124.839 79.5441 124.833 92.525C124.833 110.706 118.891 125.899 107.006 138.106C95.1211 150.313 80.2858 156.417 62.5 156.417ZM62.5 140.833C76.0056 140.833 87.1736 136.254 96.0042 127.097C104.835 117.939 109.25 106.415 109.25 92.525C109.25 83.0451 105.32 72.3316 97.4612 60.3844C89.602 48.4371 77.9483 35.3861 62.5 21.2312C47.0465 35.3861 35.3928 48.4371 27.5388 60.3844C19.6848 72.3316 15.7552 83.0451 15.75 92.525C15.75 106.42 20.1653 117.947 28.9958 127.104C37.8264 136.262 48.9944 140.839 62.5 140.833Z" fill="black"/>
      </svg>
    )
  }

  return (
    <div class="HumidityPanelContainer">
      <div style={{padding: '15px', paddingBottom: '0px'}}>{generateHumidityIconSVG()}</div>
      
      <div style={{color: 'rgba(0,0,0,0.3)', fontWeight: '500', display: 'flex', justifyContent: 'center', paddingTop: '10px', alignItems: 'baseline', gap: '5px'}}>
        <span style={{fontSize: '30px'}}>{humidity}%</span> <span style={{fontSize: '15px'}}>HUMIDITY</span>
      </div>
    </div>
  )
}

export default HumidityPanel