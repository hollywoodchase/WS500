import React, { useState, useEffect } from "react";
import DaytimeCard from "./DaytimeCard";
import NightCard from "./NightCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForecastCard = (props) => {
  const navigate = useNavigate();
  const forecast = props.forecast;
  const forecasts = props.forecasts;
  const secondForecast = props.secondForecast;
  const [weather, setWeather] = useState([]);

  const [day, setDay] = useState({
    name: forecast.name,
    number: forecast.number,
    icon: forecast.icon,
    windSpeed: forecast.windSpeed,
    temperature: forecast.temperature,
    relativeHumidity: forecast.relativeHumidity.value,
  });

  const forecastDayNum = new Date(forecast.startTime.substring(0, 10));
  // console.log(forecastDayNum.getDay());
  const dayPicker = (num) => {
    switch (num) {
      case 0:
        return "Monday";
      case 1:
        return "Tuesday";
      case 2:
        return "Wednesday";
      case 3:
        return "Thursday";
      case 4:
        return "Friday";
      case 5:
        return "Saturday";
      case 6:
        return "Sunday";
      default:
        break;
    }
  };

  const forecastDay = dayPicker(forecastDayNum.getDay());

  const [data, setData] = useState();

  const sendToForecast = (data) => {
    setData(data);
  };

  useEffect(() => {
    console.log("RES2")
    console.log(day)
    axios
      .post("http://localhost:8082/api/weather", day)
      .then((res) => {

        // Push to /
        navigate("/");
      })
      .catch((err) => {
        console.log("Error in CreateDay!");
      });
    
  }, []);

  return (
    <div>
      {forecast.number === 1 && !forecast.isDaytime ? (
        <div className="night-card">
          {forecastDay}
          <NightCard forecast={forecast} sendToForecast={sendToForecast} />
        </div>
      ) : (
        ""
      )}
      {forecast.isDaytime ? (
        <div>
          <DaytimeCard
            forecast={forecast}
            data={data}
            forecasts={forecasts}
            secondForecast={secondForecast}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ForecastCard;
