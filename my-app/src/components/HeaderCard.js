import React from 'react';

const HeaderCard = (props) => {
  const forecast = props.forecast;

  return (
    <div>
        <p>{forecast.shortForecast}</p>
        <p>{forecast.temperature}&deg;</p>
      </div>
  );
};

export default HeaderCard;