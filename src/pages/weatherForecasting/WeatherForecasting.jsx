import React, { useEffect, useState } from "react";
import StyledWeatherForecasting from "./style.ts";
import WeatherBox from "../../components/weatherBox/WeatherBox.jsx";
import SecondaryNavBar from "../../components/secundaryNavBar/SecundaryNavBar.jsx";
import Loading from "../../components/loading/Loading.jsx";

const WeatherForecasting = () => {
  const [weatherResults, setWeatherResults] = useState([]);
  const [averageTemperature, setAverageTemperature] = useState(null);
  const [minTemperature, setMinTemperature] = useState("");
  const [maxTemperature, setMaxTemperature] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeatherResults = async () => {
    const url = `http://localhost:8000/api/v1/weather-forecast`;

    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setWeatherResults(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const getAverageTemperature = () => {
    let sumTemperature = 0;

    for (let object of weatherResults) {
      sumTemperature += object.main.temp;
    }

    setAverageTemperature((sumTemperature / weatherResults.length).toFixed(1));
  };

  const getMinTemp = () => {
    let dailyMinTemperatures = [];
    for (let object of weatherResults) {
      dailyMinTemperatures.push(object.main.temp_min);
    }
    let minTemp = Math.min(...dailyMinTemperatures);
    setMinTemperature(minTemp.toFixed(1));
  };

  const getMaxTemp = () => {
    let dailyMinTemperatures = [];
    for (let object of weatherResults) {
      dailyMinTemperatures.push(object.main.temp_max);
    }
    let maxTemp = Math.max(...dailyMinTemperatures);
    setMaxTemperature(maxTemp.toFixed(1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => setLoading(false), 1500);

    await getWeatherResults();
  };

  useEffect(() => {
    getAverageTemperature();
    getMinTemp();
    getMaxTemp();
  }, [weatherResults]);

  return (
    <StyledWeatherForecasting>
      <div className="flexColCenter innerWidth">
        <div className="flexCenter nav-container">
          <a href="https://utech.com.br/site/" target="_blank">
            <img src="./img/utech-logo.png" alt="" />
          </a>
          <SecondaryNavBar />
        </div>
        <div className="flexColCenter forecasting-container">
          <h1 className="title">
            {weatherResults.length > 0
              ? "Seguem abaixo as informações de Florianópolis"
              : "Cheque as próximos 4 previsões de Florianópolis"}
          </h1>
          <form onSubmit={handleSubmit} className="flexCenter input-container">
            {weatherResults.length === 0 && (
              <div className="flexColCenter">
                <button
                  onClick={() => setLoading(true)}
                  type="submit"
                  className="button"
                >
                  Checar
                </button>
                <Loading loading={loading} />
              </div>
            )}
          </form>
          <div className="flexCenter weather-container">
            {weatherResults !== undefined &&
              weatherResults.length > 0 &&
              weatherResults.map((result, index) => (
                <WeatherBox key={index} weatherResult={result} />
              ))}
          </div>
          {weatherResults !== undefined && weatherResults.length > 0 && (
            <>
              <span className="forecasting-averageTemp">
                A temperatura média dos 4 dias será {averageTemperature}
                ºC.
              </span>
              <span className="forecasting-min-temp">
                ❄A temperatura mais baixa nos 4 dias será {minTemperature}
                ºC.
              </span>
              <span className="forecasting-max-temp">
                🔥A temperatura mais alta nos 4 dias será {maxTemperature}
                ºC.
              </span>
            </>
          )}
        </div>
      </div>
    </StyledWeatherForecasting>
  );
};

export default WeatherForecasting;
