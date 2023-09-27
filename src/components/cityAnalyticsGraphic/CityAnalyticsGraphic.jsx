import React, { useState, useEffect } from "react";
import StyledCityAnalyticsGraphic from "./style.ts";
import Chart from "react-apexcharts";

const CityAnalyticsGraphic = (props) => {
  const [graphicConfig, setGraphicConfig] = useState();

  useEffect(() => {
    setGraphicConfig({
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: false,
              selection: false,
              zoom: false,
              zoomin: false,
              zoomout: false,
              pan: false,
              reset: false | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
          },
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#e7e7e7", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 4,
          colors: ["#77B6EA", "#545454"],
          discrete: [
            {
              seriesIndex: 0,
              fillColor: "white",
              strokeColor: "#1C2276",
              size: 5,
              shape: "circle", // "circle" | "square" | "rect"
            },
            {
              seriesIndex: 2,
              dataPointIndex: 11,
              fillColor: "red",
              strokeColor: "#eee",
              size: 4,
              shape: "circle", // "circle" | "square" | "rect"
            },
          ],
        },
        stroke: {
          show: true,
          lineCap: "butt",
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            gradientToColors: ["#CFE8EF"],
            shadeIntensity: 1,
            type: "horizontal",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: [
          {
            tickAmount: 10,
            title: {
              text: "Temperatura ºC",
            },
          },
        ],
        colors: ["#77B6EA", "#545454"],
      },
      series: [
        {
          name: props.city1,
          data: props.firstCityTemps,
        },
        {
          name: props.city2,
          data: props.secondCityTemps,
        },
      ],
    });
  }, [props.firstCityTemps, props.secondCityTemps]);

  return (
    <StyledCityAnalyticsGraphic>
      <div className="cityAnalytics-wrapper">
        {graphicConfig !== undefined && (
          <Chart
            options={graphicConfig.options}
            series={graphicConfig.series}
            type="line"
            width="100%"
            height="300"
          />
        )}
      </div>
    </StyledCityAnalyticsGraphic>
  );
};

export default CityAnalyticsGraphic;
