import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import '../App.css';


function TemperaturePanel() {

  const [currentTemperature, setCurrentTemperature] = useState(24)
  const [currentGraph, setCurrentGraph] = useState("temp")

  const generateTempIconSVG = () => {
    return (
      <svg style={{opacity: "0.3"}} width="20" viewBox="0 0 125 234" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.57 46.71C15.57 34.3217 20.4912 22.4409 29.2511 13.681C38.0109 4.92122 49.8917 0 62.28 0C74.6683 0 86.5491 4.92122 95.3089 13.681C104.069 22.4409 108.99 34.3217 108.99 46.71V130.072C116.918 139.061 122.083 150.147 123.867 161.999C125.65 173.851 123.976 185.966 119.044 196.89C114.113 207.815 106.134 217.084 96.0654 223.586C85.9967 230.088 74.2656 233.546 62.28 233.546C50.2944 233.546 38.5633 230.088 28.4946 223.586C18.4258 217.084 10.447 207.815 5.51569 196.89C0.584347 185.966 -1.09007 173.851 0.693352 161.999C2.47678 150.147 7.64228 139.061 15.57 130.072V46.71ZM62.28 23.355C56.0859 23.355 50.1454 25.8156 45.7655 30.1955C41.3856 34.5754 38.925 40.5159 38.925 46.71V139.741L35.3439 143.166C29.7378 148.543 25.8687 155.474 24.2342 163.068C22.5998 170.662 23.2748 178.571 26.1723 185.778C29.0699 192.986 34.0576 199.161 40.4937 203.51C46.9298 207.859 54.52 210.183 62.2878 210.183C70.0556 210.183 77.6458 207.859 84.0819 203.51C90.518 199.161 95.5056 192.986 98.4032 185.778C101.301 178.571 101.976 170.662 100.341 163.068C98.7069 155.474 94.8377 148.543 89.2316 143.166L85.635 139.756V46.71C85.635 40.5159 83.1744 34.5754 78.7945 30.1955C74.4146 25.8156 68.4741 23.355 62.28 23.355ZM70.065 85.635C70.065 83.5703 69.2448 81.5901 67.7848 80.1301C66.3248 78.6702 64.3447 77.85 62.28 77.85C60.2153 77.85 58.2351 78.6702 56.7752 80.1301C55.3152 81.5901 54.495 83.5703 54.495 85.635V149.238C49.3007 151.075 44.9229 154.688 42.1353 159.44C39.3477 164.193 38.3297 169.777 39.2614 175.207C40.193 180.637 43.0142 185.563 47.2265 189.114C51.4387 192.665 56.7707 194.613 62.28 194.613C67.7893 194.613 73.1213 192.665 77.3335 189.114C81.5458 185.563 84.367 180.637 85.2986 175.207C86.2303 169.777 85.2123 164.193 82.4247 159.44C79.6371 154.688 75.2592 151.075 70.065 149.238V85.635Z" fill="black"/>
      </svg>
    )
  }

  const generateDegreeCelsiusIconSVG = () => {
    return (
      <svg style={{opacity: "0.2"}} width="25" viewBox="0 0 113 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.5 14.5C25.5 20.5752 20.5751 25.5 14.5 25.5C8.42487 25.5 3.5 20.5752 3.5 14.5C3.5 8.42487 8.42487 3.5 14.5 3.5C20.5751 3.5 25.5 8.42487 25.5 14.5Z" stroke="black" stroke-width="7"/>
<path d="M109.494 46.6541H95.6442C95.1115 43.6948 94.1201 41.0907 92.6701 38.8416C91.2201 36.5926 89.4445 34.6838 87.3434 33.1154C85.2423 31.547 82.8897 30.3633 80.2855 29.5643C77.7109 28.7653 74.9736 28.3658 72.0735 28.3658C66.8356 28.3658 62.1451 29.6826 58.0021 32.3164C53.8887 34.9502 50.6335 38.812 48.2365 43.902C45.8691 48.9919 44.6854 55.2064 44.6854 62.5455C44.6854 69.9437 45.8691 76.1877 48.2365 81.2777C50.6335 86.3677 53.9035 90.2147 58.0465 92.8189C62.1895 95.4231 66.8504 96.7251 72.0291 96.7251C74.8996 96.7251 77.6222 96.3404 80.1967 95.571C82.8009 94.772 85.1535 93.6031 87.2546 92.0643C89.3557 90.5254 91.1313 88.6463 92.5813 86.4268C94.061 84.1778 95.0819 81.6032 95.6442 78.7031L109.494 78.7475C108.754 83.216 107.319 87.3294 105.188 91.0877C103.087 94.8164 100.379 98.042 97.0646 100.765C93.7798 103.458 90.0215 105.544 85.7898 107.023C81.558 108.503 76.9415 109.243 71.9403 109.243C64.0687 109.243 57.0552 107.379 50.8999 103.65C44.7446 99.8916 39.8913 94.5205 36.3402 87.5366C32.8187 80.5527 31.0579 72.2223 31.0579 62.5455C31.0579 52.839 32.8335 44.5086 36.3846 37.5543C39.9357 30.5704 44.7889 25.2141 50.9442 21.4854C57.0996 17.7272 64.0982 15.848 71.9403 15.848C76.764 15.848 81.2621 16.5434 85.4347 17.9343C89.6368 19.2956 93.4099 21.3079 96.7539 23.9712C100.098 26.605 102.865 29.8306 105.055 33.6481C107.245 37.436 108.724 41.7713 109.494 46.6541Z" fill="black"/>
      </svg>
    )
  }

  const dataTemp = [
    {
      hour: '00:00',
      temp: 24,
    },
    {
      hour: '01:00',
      temp: 10,
    },
    {
      hour: '02:00',
      temp: 20,
    },
    {
      hour: '03:00',
      temp: 5,
    },
    {
      hour: '04:00',
      temp: 27,
    },
    {
      hour: '05:00',
      temp: 15,
    },
    {
      hour: '06:00',
      temp: 30,
    },
    {
      hour: '07:00',
      temp: 10,
    },
    {
      hour: '08:00',
      temp: 20,
    },
    {
      hour: '09:00',
      temp: 7,
    },
    {
      hour: '10:00',
      temp: 3,
    },
    {
      hour: '11:00',
      temp: 26,
    },
    {
      hour: '12:00',
      temp: 20,
    },
    {
      hour: '13:00',
      temp: 30,
    },
    {
      hour: '14:00',
      temp: 10,
    },
    {
      hour: '15:00',
      temp: 17,
    },
    {
      hour: '16:00',
      temp: 5,
    },
    {
      hour: '17:00',
      temp: 20,
    },
    {
      hour: '18:00',
      temp: 27,
    },
    {
      hour: '19:00',
      temp: 30,
    },
    {
      hour: '20:00',
      temp: 18,
    },
    {
      hour: '21:00',
      temp: 15,
    },
    {
      hour: '22:00',
      temp: 22,
    },
    {
      hour: '23:00',
      temp: 10,
    },
  ];

  const dataHum = [
    {
      hour: '00:00',
      temp: 20,
    },
    {
      hour: '01:00',
      temp: 10,
    },
    {
      hour: '02:00',
      temp: 25,
    },
    {
      hour: '03:00',
      temp: 15,
    },
    {
      hour: '04:00',
      temp: 28,
    },
    {
      hour: '05:00',
      temp: 12,
    },
    {
      hour: '06:00',
      temp: 35,
    },
    {
      hour: '07:00',
      temp: 12,
    },
    {
      hour: '08:00',
      temp: 5,
    },
    {
      hour: '09:00',
      temp: 20,
    },
    {
      hour: '10:00',
      temp: 15,
    },
    {
      hour: '11:00',
      temp: 10,
    },
    {
      hour: '12:00',
      temp: 27,
    },
    {
      hour: '13:00',
      temp: 33,
    },
    {
      hour: '14:00',
      temp: 4,
    },
    {
      hour: '15:00',
      temp: 17,
    },
    {
      hour: '16:00',
      temp: 18,
    },
    {
      hour: '17:00',
      temp: 14,
    },
    {
      hour: '18:00',
      temp: 22,
    },
    {
      hour: '19:00',
      temp: 35,
    },
    {
      hour: '20:00',
      temp: 10,
    },
    {
      hour: '21:00',
      temp: 12,
    },
    {
      hour: '22:00',
      temp: 22,
    },
    {
      hour: '23:00',
      temp: 10,
    },
  ];

  return (
    <div class="TemperaturePanelContainer">

      <div style={{color: 'rgba(0,0,0,0.2)', fontWeight: '500', fontSize:'30px', display: 'flex', justifyContent: 'space-between', padding: '15px', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: "center", gap: "10px"}}>
          <div>{generateTempIconSVG()}</div>
          <div style={{fontSize: '15px'}}>
            
            <span class="graphBtn" onClick={() => setCurrentGraph("temp")}>Temperature</span> | <span class="graphBtn" onClick={() => setCurrentGraph("hum")}>Humidity</span> 
            
          </div>
        </div>
        <div> 
          
          {currentGraph === "temp"? <div>{currentTemperature} {generateDegreeCelsiusIconSVG()}</div> : <div>57%</div>}
        </div>
      </div>

      {currentGraph === "temp" ?
      /* Temperature Graph */
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '12px'}}>
        <AreaChart width={625} height={200} data={dataTemp}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient> */}
            <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="gray" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="lightgray" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="hour" />
          <YAxis unit={'°C'}/>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <Tooltip/>
          {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
          <Area type="monotone" dataKey="temp" unit={'°C'} name='Temperature' stroke="lightgray" fillOpacity={1} fill="url(#temp)" />
        </AreaChart>
      </div> 
      
      : 
      /* Humidity Graph */
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '12px'}}>
          <AreaChart width={625} height={200} data={dataHum}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient> */}
              <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="lightblue" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="lightblue" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="hour" />
            <YAxis unit={'%'}/>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <Tooltip/>
            {/* <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> */}
            <Area type="monotone" dataKey="temp" unit={'%'} name='Humidity' stroke="lightblue" fillOpacity={1} fill="url(#temp)" />
          </AreaChart>
        </div> 
    
      }

    </div>
    
  )
}

export default TemperaturePanel