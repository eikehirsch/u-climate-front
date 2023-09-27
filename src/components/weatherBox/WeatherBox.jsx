import React from "react";
import StyledWeatherBox from "./style.ts";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { BsFillCloudRainHeavyFill } from "react-icons/bs";
import { BsFillCloudsFill } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const WeatherBox = ({ weatherResult }) => {

  let sky = "";
  switch (weatherResult.weather[0].main) {
    case "Clear":
      sky = "Céu limpo";
      break;
    case "Rain":
      sky = "Chuvoso";
      break;
    case "Clouds":
      sky = "Nublado";
      break;
    default:
      break;
  }

  let skyDescription = "";
  switch (weatherResult.weather[0].description) {
    case "light rain":
      skyDescription = "Chuva fraca";
      break;
    case "overcast clouds":
      skyDescription = "Céu encoberto";
      break;
    case "broken clouds":
      skyDescription = "Nuvens esparsas";
      break;
    case "scattered clouds":
      skyDescription = "Parcialmente coberto";
      break;
    case "few clouds":
      skyDescription = "Poucas nuvens";
      break;
    case "clear sky":
      skyDescription = "Sem nuvens";
      break;
    default:
      break;
  }

  return (
    <StyledWeatherBox>
      <>
        <div className="flexColCenter weather-box">
          <span className="flexCenter weather-box-index">{new Date(weatherResult.dt_txt).toLocaleString()}</span>
          <div>
            <span className="flexCenter feelsLike-temp">
              Sensação térmica: {weatherResult.main.feels_like}ºC
            </span>
            <span className="flexCenter weather-temp">
              Temperatura: {weatherResult.main.temp}ºC
              <LiaTemperatureLowSolid />
            </span>
            <div className="flexCenter temp-min-max-subcontainer">
              <span className="flexCenter min-temp">
                Mínima: {weatherResult.main.temp_min}ºC
              </span>
              <span className="flexCenter max-temp">
                Máxima: {weatherResult.main.temp_max}ºC
              </span>
            </div>

            <span className="flexCenter umidity">
              Umidade relativa do ar: {weatherResult.main.humidity}%
            </span>
            <span className="flexCenter sky">Tempo: {sky}
            </span>
            <span className="flexCenter sky-description">{skyDescription}
            {skyDescription === "Chuva fraca" && <BsFillCloudRainHeavyFill />}
            {skyDescription === "Sem nuvens" && <BsFillSunFill />}
            {skyDescription === "Céu encoberto" && <BsFillCloudsFill />}
            {skyDescription === "Nuvens esparsas" || skyDescription === "Poucas nuvens" || skyDescription === "Parcialmente coberto" ? <BsCloudSunFill /> : null}
            </span>
          </div>
        </div>
      </>
    </StyledWeatherBox>
  );
};

export default WeatherBox;
