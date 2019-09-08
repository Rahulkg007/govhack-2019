import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Demographic = () => {
  return (
    <div className="mapContainer">
      <h1>Demographic Analysis</h1>

      <h2>Time Series</h2>
      
      <img
        className="app-plots"
        src={require("../../images/RentTimeSeries.jpg")}
        alt="RentTimeSeries"
      />

      <HorizontalLine />
      
      <img
        className="app-plots"
        src={require("../../images/HousePriceTimeSeries.jpg")}
        alt="HousePriceTimeSeries"
      />

      <HorizontalLine />
      
      <img
        className="app-plots"
        src={require("../../images/OwnRentProportion.jpg")}
        alt="OwnRentProportion"
      />
    </div>
  );
};

export default Demographic;
