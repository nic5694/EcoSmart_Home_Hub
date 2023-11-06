import React from 'react'
import { useEffect, useState } from 'react';

function TimePanel() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
 
  const generateTimeIconSVG = () => {
      return (
        <svg style={{opacity: "0.3"}} width="25" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M62.335 113.336C69.0326 113.336 75.6646 112.017 81.8524 109.454C88.0401 106.891 93.6625 103.134 98.3984 98.3984C103.134 93.6625 106.891 88.0401 109.454 81.8524C112.017 75.6646 113.336 69.0326 113.336 62.335C113.336 55.6374 112.017 49.0054 109.454 42.8176C106.891 36.6299 103.134 31.0075 98.3984 26.2716C93.6625 21.5357 88.0401 17.7789 81.8524 15.2159C75.6646 12.6528 69.0326 11.3336 62.335 11.3336C48.8086 11.3336 35.8362 16.707 26.2716 26.2716C16.707 35.8362 11.3336 48.8086 11.3336 62.335C11.3336 75.8614 16.707 88.8338 26.2716 98.3984C35.8362 107.963 48.8086 113.336 62.335 113.336ZM124.67 62.335C124.67 96.7609 96.7609 124.67 62.335 124.67C27.9091 124.67 0 96.7609 0 62.335C0 27.9091 27.9091 0 62.335 0C96.7609 0 124.67 27.9091 124.67 62.335ZM79.3355 87.3483L56.6682 64.6811V25.5007H68.0018V59.9889L87.3483 79.3355L79.3355 87.3483Z" fill="black"/>
        </svg>
      )
  }

  return (
    <div class="TimePanelContainer">
        <div style={{padding: '15px', paddingBottom: '0px', display: 'flex', fontWeight: '500', color: 'rgba(0,0,0,0.2)', alignItems: "center", gap: "10px" }}>

          <div>
            {generateTimeIconSVG()}
          </div>

          <div style={{fontSize: '15px'}}>
            Time
          </div>
          
        </div>

        <div style={{color: 'rgba(0,0,0,0.2)', fontWeight: '400', fontSize:'35px', display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
          {formattedTime}
        </div>
    </div>
  )
}

export default TimePanel