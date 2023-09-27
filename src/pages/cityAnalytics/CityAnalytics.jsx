import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StyledCityAnalytics from "./style.ts";
import SecondaryNavBar from "../../components/secundaryNavBar/SecundaryNavBar.jsx";
import CityAnalyticsGraphic from "../../components/cityAnalyticsGraphic/CityAnalyticsGraphic.jsx";
import Loading from "../../components/loading/Loading.jsx";

const CityAnalytics = () => {
  const [uf1, setUf1] = useState("");
  const [listUf1, setListUf1] = useState([]);
  const [listCity1, setListCity1] = useState([]);
  const [city1, setCity1] = useState();

  const [uf2, setUf2] = useState("");
  const [listUf2, setListUf2] = useState([]);
  const [listCity2, setListCity2] = useState([]);
  const [city2, setCity2] = useState();

  const [cityLat1, setCityLat1] = useState(null);
  const [cityLon1, setCityLon1] = useState(null);

  const [cityLat2, setCityLat2] = useState(null);
  const [cityLon2, setCityLon2] = useState(null);

  const [firstCityTemps, setFirstCityTemps] = useState();
  const [secondCityTemps, setSecondCityTemps] = useState();

  const [tempAmplitude1, setTempAmplitude1] = useState();
  const [tempAmplitude2, setTempAmplitude2] = useState();

  const [loading, setLoading] = useState(false);

  const getUf1 = () => {
    let url = "https://servicodados.ibge.gov.br/";
    url = url + "api/v1/localidades/estados";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf1([...data]);
      });
  };

  const getUf2 = () => {
    let url = "https://servicodados.ibge.gov.br/";
    url = url + "api/v1/localidades/estados";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListUf2([...data]);
      });
  };

  const getCity1 = (id) => {
    let url = "https://servicodados.ibge.gov.br/api/v1/";
    url = url + `localidades/estados/${id}/municipios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity1([...data]);
      });
  };

  const getCity2 = (id) => {
    let url = "https://servicodados.ibge.gov.br/api/v1/";
    url = url + `localidades/estados/${id}/municipios`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data.sort((a, b) => a.nome.localeCompare(b.nome));
        setListCity2([...data]);
      });
  };

  useEffect(() => {
    getUf1();
    getUf2();
  }, []);

  useEffect(() => {
    if (uf1 || uf2) {
      getCity1(uf1);
      getCity2(uf2);
    }
  }, [uf1, uf2]);

  const getCityLatAndLon = async (data) => {
    let temporaryCity = data.cidade1.split(" ").join("%20");

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
          setCityLat1(result.features[0].properties.lat.toFixed(2));
          setCityLon1(result.features[0].properties.lon.toFixed(2));
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCityLatAndLon2 = async (data) => {
    let temporaryCity = data.cidade2.split(" ").join("%20");

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
          setCityLat2(result.features[0].properties.lat.toFixed(2));
          setCityLon2(result.features[0].properties.lon.toFixed(2));
        });
    } catch (error) {
      console.log("error", error);
    }
  };

  const getCityTemperatures1 = (weatherResults) => {
    let dailyTemperaturs = [];

    for (let object of weatherResults) {
      dailyTemperaturs.push(object.main.temp.toFixed(0));
    }

    setFirstCityTemps(dailyTemperaturs);
  };

  const getCityTemperatures2 = (weatherResults) => {
    let dailyTemperaturs = [];

    for (let object of weatherResults) {
      dailyTemperaturs.push(object.main.temp.toFixed(0));
    }

    setSecondCityTemps(dailyTemperaturs);
  };

  const getWeatherForecast1 = async (cityLat, cityLon) => {
    await fetch(`http://localhost:8000/api/v1/weather-forecast`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cityLat, cityLon }),
    }).then((res) =>
      res.json().then((data) => {
        getCityTemperatures1(data.data.list);
      })
    );
  };

  const getWeatherForecast2 = async (cityLat, cityLon) => {
    await fetch(`http://localhost:8000/api/v1/weather-forecast`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ cityLat, cityLon }),
    }).then((res) =>
      res.json().then((data) => {
        getCityTemperatures2(data.data.list);
      })
    );
  };

  useEffect(() => {
    if (cityLat1 !== null && cityLon1 !== null) {
      getWeatherForecast1(cityLat1, cityLon1);
    }
  }, [cityLat1, cityLon1]);

  useEffect(() => {
    if (cityLat2 !== null && cityLon2 !== null) {
      getWeatherForecast2(cityLat2, cityLon2);
    }
  }, [cityLat2, cityLon2]);

  const getTempAmplitude1 = (temperatureList) => {
    let dailyTemperatures = [];
    for (let object of temperatureList) {
      dailyTemperatures.push(object);
    }
    let minTemp = Math.min(...dailyTemperatures);
    let maxTemp = Math.max(...dailyTemperatures);

    setTempAmplitude1((maxTemp - minTemp).toFixed(1));
  };

  const getTempAmplitude2 = (temperatureList) => {
    let dailyTemperatures = [];
    for (let object of temperatureList) {
      dailyTemperatures.push(object);
    }
    let minTemp = Math.min(...dailyTemperatures);
    let maxTemp = Math.max(...dailyTemperatures);

    setTempAmplitude2((maxTemp - minTemp).toFixed(1));
  };

  useEffect(() => {

    if ((firstCityTemps !== undefined) & (secondCityTemps !== undefined)) {
      getTempAmplitude1(firstCityTemps);
      getTempAmplitude2(secondCityTemps);
    }
  }, [firstCityTemps, secondCityTemps]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getCityLatAndLon(data);
    getCityLatAndLon2(data);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <StyledCityAnalytics>
      <div className="flexColCenter innerWidth">
        <div className="flexCenter nav-container">
          <img src="./img/utech-logo.png" alt="" />
          <SecondaryNavBar />
        </div>
        <div className="flexColCenter cityAnalytics-container">
          <h1 className="title">
            O City Analytics do uClimate é um comparador climático entre cidades
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flexColCenter form"
          >
            <h4 className="form-title">
              Escolha duas cidades do Brasil para analisar a previsão do tempo{" "}
              <h3>
                <b>dos próximos 4 dias:</b>
              </h3>
            </h4>
            <div className="flexCenter form-container">
              <div className="flexColCenter form-subcontainer">
                <select
                  className="form-input"
                  {...register("uf1")}
                  value={uf1}
                  onChange={(e) => setUf1(e.target.value)}
                >
                  {listUf1.map((a, b) => (
                    <option key={a.sigla} value={a.sigla}>
                      {a.nome}
                    </option>
                  ))}
                </select>
                <select
                  className="form-input"
                  {...register("cidade1")}
                  value={city1}
                  onChange={(e) => setCity1(e.target.value)}
                >
                  {listCity1.map((a, b) => (
                    <option value={a.sigla}>{a.nome}</option>
                  ))}
                  {uf1 === "" && (
                    <option style={{ display: "none" }}>Cidade</option>
                  )}
                </select>
              </div>

              <div className="flexColCenter form-subcontainer">
                <select
                  className="form-input"
                  {...register("uf2")}
                  value={uf2}
                  onChange={(e) => setUf2(e.target.value)}
                >
                  {listUf2.map((a, b) => (
                    <option key={a.sigla} value={a.sigla}>
                      {a.nome}
                    </option>
                  ))}
                </select>
                <select
                  className="form-input"
                  {...register("cidade2")}
                  value={city2}
                  onChange={(e) => setCity2(e.target.value)}
                >
                  {listCity2.map((a, b) => (
                    <option value={a.sigla}>{a.nome}</option>
                  ))}
                  {uf2 === "" && (
                    <option style={{ display: "none" }}>Cidade</option>
                  )}
                </select>
              </div>
              {city1 !== undefined && city2 !== undefined && (
                <div className="flexColCenter">
                  <button
                    onClick={() => setLoading(true)}
                    type="submit"
                    className="button"
                  >
                    Comparar
                  </button>
                  <Loading loading={loading} />
                </div>
              )}
            </div>
          </form>
          {firstCityTemps !== undefined && (
            <>
              <div className="flexCenter amplitude-container">
                <div className="flexColCenter amplitude-subcontainer">
                  <h3>Amplitude Térmica</h3>
                  <span>
                    {city1}: {tempAmplitude1} ºC
                  </span>
                  <span>
                    {city2} {tempAmplitude2} ºC
                  </span>
                </div>
              </div>
              <div className="flexCenter cityAnalyticsGraphic-container">
                <CityAnalyticsGraphic
                  firstCityTemps={firstCityTemps}
                  secondCityTemps={secondCityTemps}
                  city1={city1}
                  city2={city2}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </StyledCityAnalytics>
  );
};

export default CityAnalytics;
