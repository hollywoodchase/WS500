import React, { useState, useEffect } from "react";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import Slider from "./Slider";

const DaytimeCard = (props) => {
  const [data, setData] = useState();
  const forecast = props.forecast;
  const secondForecast = props.secondForecast;

  useEffect(() => {
    setData(props.data);

  }, []);

  const sendToForecast = (data) => {
    setData(data);
  };

  return (
    <div className="daytime-card">
      {forecast.name}
      <Slider forecast={forecast} sendToForecast={sendToForecast} />
      {data < 50 || data === undefined ? (
        <FirstCard forecast={forecast} />
      ) : (
        <SecondCard forecast={secondForecast} />
      )}
    </div>
  );
};

export default DaytimeCard;
