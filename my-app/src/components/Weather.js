import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import ForecastCard from "./ForecastCard";
import HeaderCard from "./HeaderCard";

function ShowForecastList() {
  const [forecasts, setForecasts] = useState([]);
  const [secondForecast, setSecondForecast] = useState([])
  const [data, setData] = useState([]);
  const sendToForecast = (data) => {
    setData(data);
  };

  useEffect(() => {
    axios
      .get("https://api.weather.gov/gridpoints/PHI/32,81/forecast")
      .then((res) => {
        setSecondForecast(res.data.properties.periods[1]);
        setForecasts(res.data.properties.periods);
      })
      .catch((err) => {
        console.log("Error from ShowForecastList");
      });

     
  }, []);


  const forecastList =
    forecasts.length === 0
      ? "there is no forecast record!"
      : forecasts.map((forecast, k) => (
          <ForecastCard
            forecast={forecast}
            key={k}
            sendToForecast={sendToForecast}
            forecasts={forecasts}
            secondForecast={forecasts[forecast.number]}
          />
        ));

  const headerForecast =
    forecasts.length === 0
      ? "there is no forecast record!"
      : forecasts.map((forecast, k) => (
          <HeaderCard forecast={forecast} key={k} />
        ));

  

  return (
    <div className="ShowForecastList">
      <div className="container">
        <div>
          <div className="col-md-12">
            <br />
            <h2 className="text-center header-text">Philadelphia</h2>
            <div className="text-center">{headerForecast[0]}</div>
          </div>
          <div className="col-md-11">
            <hr />
          </div>
        </div>

        <div className="list">{forecastList}</div>
      </div>
    </div>
  );
}

export default ShowForecastList;
