import React from "react";

const NightCard = (props) => {
  const forecast = props.forecast;

  return (
    <div className="card-container text-center">
      <div className="desc day-desc">
      <p>{forecast.name}</p>
        <p>{forecast.shortForecast}</p>
        <p>{forecast.temperature}&deg;</p>
        <img src={forecast.icon} alt="Forecasts" height={50} />
      </div>
    </div>
  );
};

export default NightCard;
