import React, { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const Slider = (props) => {
  const [value, setValue] = useState(0);
  const forecast = props.forecast;

  const onChange = () => {
    props.sendToForecast(value);
  };

  return (
    <div className="text-center">
      <RangeSlider
        value={value}
        onChange={(changeEvent) => {
          setValue(changeEvent.target.value);
          onChange();
        }}
      />
      {/* <div className="text-center">{value}</div> */}
      
    </div>
  );
};

export default Slider;
