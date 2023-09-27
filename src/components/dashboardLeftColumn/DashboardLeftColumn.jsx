import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StyledDashboardLeftColumn from "./style.ts";
import Loading from "../loading/Loading.jsx";

const DashboardLeftColumn = ({
  setWeatherDaysResult,
  setGeneralWeatherResult,
  setChosenCity
}) => {
  const [uf, setUf] = useState("");
  const [listUf, setListUf] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [city, setCity] = useState();
  const [cityLat, setCityLat] = useState(null);
  const [cityLon, setCityLon] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUf = () => {
    let url = "https://servicodados.ibge.gov.br/";
    url = url + "api/v1/localidades/estados";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf([...data]);
      });
  };

  const getCity = (id) => {
    let url = "https://servicodados.ibge.gov.br/api/v1/";
    url = url + `localidades/estados/${id}/municipios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity([...data]);
      });
  };

  useEffect(() => {
    getUf();
  }, []);

  useEffect(() => {
    if (uf) {
      getCity(uf);
    }
  }, [uf]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCityLatAndLon = async (data) => {
    let temporaryCity = data.cidade.split(" ").join("%20");

    var requestOptions = {
      method: "GET",
    };

    try {
      await fetch(
        `https://api.geoapify.com/v1/geocode/search?city=${temporaryCity}&apiKey=d1e12d908d224064aaf227a9149adaa9`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setCityLat(result.features[0].properties.lat.toFixed(2));
          setCityLon(result.features[0].properties.lon.toFixed(2));
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getDailyTemperature = (weatherResults) => {
    let dailyTemperaturs = [];

    for (let object of weatherResults) {
      dailyTemperaturs.push(object.main.temp.toFixed(0));
    }

    setWeatherDaysResult(dailyTemperaturs);
  };

  const getWeatherForecast = async (cityLat, cityLon) => {
    await fetch(`http://localhost:8000/api/v1/weather-forecast`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cityLat, cityLon }),
    }).then((res) =>
      res.json().then((data) => {
        getDailyTemperature(data.data.list);
        setGeneralWeatherResult(data.data);
      })
    );
  };

  useEffect(() => {
    if (cityLat !== null && cityLon !== null) {
      getWeatherForecast(cityLat, cityLon);
    }
  }, [cityLat, cityLon]);

  const onSubmit = (data) => {
    getCityLatAndLon(data);
    setChosenCity(city);

    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <StyledDashboardLeftColumn>
      <div className="flexCenter left-column">
        <img className="left-column-image" src="./img/utech-logo.png" alt="" />
        <h1 className="dashboard-title">Bem-vindo ao Dashboard uClimate!</h1>
        <span className="dashboard-description">
          Escolha um estado e depois uma cidade para analisar suas condições
          climáticas{" "}
          <h3>
            <b>dos PRÓXIMOS 4 DIAS.</b>
          </h3>
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flexColCenter dashboard-form"
        >
          <div className="flexColCenter dashboard-form-container">
            <select
              className="dashboard-form-input"
              {...register("uf")}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            >
              {listUf.map((a, b) => (
                <option key={a.sigla} value={a.sigla}>
                  {a.nome}
                </option>
              ))}
            </select>
            <select
              className="dashboard-form-input"
              {...register("cidade")}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              {listCity.map((a, b) => (
                <option value={a.sigla}>{a.nome}</option>
              ))}
              {uf === "" && <option style={{ display: "none" }}>Cidade</option>}
            </select>
          </div>
          {city && (
            <div className="flexColCenter">
              <button onClick={() => setLoading(true)} type="submit" className="button">
                Analisar
              </button>
              <Loading loading={loading}/>
            </div>
          )}
        </form>
      </div>
    </StyledDashboardLeftColumn>
  );
};

export default DashboardLeftColumn;
