import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import StyledGraphicPanel from "./style.ts";

const PanelGraphic = (props) => {
  const [graphicConfig, setGraphicConfig] = useState();

  let graphicPanelData = props.weatherDaysResult;

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
          show: false,
        },
        markers: {
          size: 4,
          colors: "#1C2276",
          discrete: [
            {
              seriesIndex: 0,
              dataPointIndex: graphicPanelData.length - 1,
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
        colors: ["#1C2276"],
      },
      series: [
        {
          name: "Temperatura",
          data: graphicPanelData,
        },
      ],
    });
  }, [
    props.graphicPanelData,
    props.graphicPanelPeriod,
    props.weatherDaysResult,
  ]);

  return (
    <StyledGraphicPanel>
      <div className="panel-graphic-wrapper">
        <div className="row">
          <div className="mixed-chart">
            <div className="flexCenter floating-graphic-container">
              <span className="floating-graphic-title">{props.chosenCity}</span>
            </div>
            {graphicConfig !== undefined && (
              <Chart
                options={graphicConfig.options}
                series={graphicConfig.series}
                type="line"
                width="100%"
                height="300"
              />
            )}
            <div className="flexCenter graphic-description-container">
              <div className="graphic-description">
                <span>Eixo Y: </span> Temperatura em ºC
              </div>
              <div className="graphic-description">
                <span>Eixo X: </span>Cada ponto equivale a três horas a partir
                do momento do clique.
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledGraphicPanel>
  );
};

export default PanelGraphic;
