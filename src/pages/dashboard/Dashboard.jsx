import React, { useState, useEffect } from "react";
import StyledDashboard from "./style.ts";
import SecondaryNavBar from "../../components/secundaryNavBar/SecundaryNavBar.jsx";
import DashboardLeftColumn from "../../components/dashboardLeftColumn/DashboardLeftColumn.jsx";
import PanelGraphic from "../../components/panelGraphic/PanelGraphic.jsx";
import PanelGraphicInfoBox from "../../components/panelGraphicInfoBox/PanelGraphicInfoBox.jsx";

const Dashboard = () => {
  const [selectedGraphicPanelValueType, setSelectedGraphicPanelValue] =
    useState("brute");
  const [selectedGraphicPanelPeriod, setSelectedGraphicPanelPeriod] =
    useState("thirtyDays");

  const [generalWeatherResult, setGeneralWeatherResult] = useState();
  const [weatherDaysResult, setWeatherDaysResult] = useState();
  const [minTemperature, setMinTemperature] = useState("");
  const [averageMonthlyTemp, setAverageMonthlyTemp] = useState();
  const [maxTemperature, setMaxTemperature] = useState("");
  const [averageWindSpeed, setAverageWindSpeed] = useState();
  const [averageHumidity, setAverageHumidity] = useState();
  const [chosenCity, setChosenCity] = useState();

  const getAverageHumidity = (generalWeatherResult) => {
    let sumHumidity = 0;

    for (let object of generalWeatherResult.list) {
      sumHumidity += Number(object.main.humidity);
    }

    setAverageHumidity(
      (sumHumidity / generalWeatherResult.list.length).toFixed(1)
    );
  };

  const getAverageWindSpeed = (generalWeatherResult) => {
    let sumWind = 0;

    for (let object of generalWeatherResult.list) {
      sumWind += Number(object.wind.speed);
    }

    setAverageWindSpeed(
      (sumWind / generalWeatherResult.list.length).toFixed(1)
    );
  };

  const getAverageTemperature = (weatherDaysResult) => {
    let sumTemperature = 0;

    for (let object of weatherDaysResult) {
      sumTemperature += Number(object);
    }

    setAverageMonthlyTemp(
      (sumTemperature / weatherDaysResult.length).toFixed(1)
    );
  };

  const getMinTemp = (weatherDaysResult) => {
    let dailyMinTemperatures = [];
    for (let object of weatherDaysResult) {
      dailyMinTemperatures.push(object);
    }
    let minTemp = Math.min(...dailyMinTemperatures);
    setMinTemperature(minTemp.toFixed(1));
  };

  const getMaxTemp = (weatherDaysResult) => {
    let dailyMinTemperatures = [];
    for (let object of weatherDaysResult) {
      dailyMinTemperatures.push(object);
    }
    let maxTemp = Math.max(...dailyMinTemperatures);
    setMaxTemperature(maxTemp.toFixed(1));
  };

  useEffect(() => {
    if (weatherDaysResult) {
      getAverageTemperature(weatherDaysResult);
      getMinTemp(weatherDaysResult);
      getMaxTemp(weatherDaysResult);
      getAverageWindSpeed(generalWeatherResult);
      getAverageHumidity(generalWeatherResult);
    }
  }, [weatherDaysResult, generalWeatherResult]);

  return (
    <StyledDashboard>
      <div className="flexColCenter innerWidth">
        <div className="flexCenter nav-container">
          <img src="./img/utech-logo.png" alt="" />
          <SecondaryNavBar />
        </div>
        <div className="flexStart dashboard-container">
          <DashboardLeftColumn
            setChosenCity={setChosenCity}
            setGeneralWeatherResult={setGeneralWeatherResult}
            setWeatherDaysResult={setWeatherDaysResult}
          />
          {weatherDaysResult !== undefined && weatherDaysResult.length > 0 && (
            <div className="flexCenter panel-graphic-container">
              <div className="flexCenter panel-graphic-first-row">
                <PanelGraphicInfoBox title="Temperature mínima">
                  ❄{minTemperature}ºC
                </PanelGraphicInfoBox>
                <PanelGraphicInfoBox title="Temperature média">
                  {averageMonthlyTemp}ºC
                </PanelGraphicInfoBox>

                <PanelGraphicInfoBox title="Temperature máxima">
                  🔥{maxTemperature}ºC
                </PanelGraphicInfoBox>
              </div>
              <PanelGraphic
                chosenCity={chosenCity}
                weatherDaysResult={weatherDaysResult}
                graphicPanelData={selectedGraphicPanelValueType}
                graphicPanelPeriod={selectedGraphicPanelPeriod}
              />
              <div className="flexCenter panel-graphic-first-row">
                <PanelGraphicInfoBox title="Velocidade média do vento">
                  {averageWindSpeed} metros/s
                </PanelGraphicInfoBox>
                <PanelGraphicInfoBox title="Umidade do ar média">
                  {averageHumidity}%
                </PanelGraphicInfoBox>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
