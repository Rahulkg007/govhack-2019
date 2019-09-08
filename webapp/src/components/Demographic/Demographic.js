import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Demographic = () => {
  return (
    <div className="mapContainer">
      <h1>Demographic Analysis</h1>

      <h2>Suburbs Population</h2>
      <img
        className="app-plots"
        src={require("../../images/PopulationbySuburb.jpg")}
        alt="PopulationbySuburb"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/PopulationSeries.jpg")}
        alt="PopulationSeries"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/PopulationbySex.jpg")}
        alt="PopulationbySex"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/PopulationbyAge.jpg")}
        alt="PopulationbyAge"
      />

      <h2>Time Series</h2>
      <img
        className="app-plots"
        src={require("../../images/RentTimeSeries.jpg")}
        alt="RentTimeSeries"
      />
      <p>
        Along with the house price analysis, we also created a ten years’ time
        series of renting data, which proves that our three chosen suburbs rent
        drastically increased over the time in the same rate, however, to
        continue with the trend of other analysis Toorak is the most expensive
        one.
      </p>
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/HousePriceTimeSeries.jpg")}
        alt="HousePriceTimeSeries"
      />
      <p>
        After collecting house prices for the last ten years we obtained a time
        series graph, which clearly illustrates that Toorak’s properties are by
        far the more expensive ones, whereas Brunswick’s and Footscray’s remain
        to be more “affordable” over the time not showing sharp increases.
      </p>
      <HorizontalLine />

      <img
        className="app-plots"
        src={require("../../images/OwnRentProportion.jpg")}
        alt="OwnRentProportion"
      />
      <p>
        An additional comparation of data was made, in this occasion we
        calculated the proportion of owner and rented dwellings all over the
        three suburbs, were we found out that the majority of Toorak’s
        population own their houses, whereas Footscray’s population are renting
        in majority.
      </p>
    </div>
  );
};

export default Demographic;
