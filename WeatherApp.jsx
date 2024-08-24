import SearchBox from "./src/SearchBox";
import InfoBox from "./src/InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [WeatherInfo, setWeatherInfo] = useState({
        city: "Wonder Land",
        feelsLike: 1.5,
        humidity: 89,
        temp: 4.76,
        tempMax: 6.22,
        tempMin: 3.77,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return (
    <div style={{textAlign: "center"}}>
        <h2>Weather Widget</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info= {WeatherInfo}/>
    </div>
    );
}