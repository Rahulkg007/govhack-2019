import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Demographic = () => {
  return (
    <div className="mapContainer">
      <h1>Demographic Analysis</h1>

      <h3>Suburbs Population</h3>
      <p>
        Toorak estimates population approximately 50% of Brunswick, whereas
        Footscray's population is in the middle of the range. Toorak estimates
        population approximately 50% of Brunswick, whereas Footscray's
        population is in the middle of the range.
      </p>
      <img
        className="app-plots"
        src={require("../../images/PopulationbySuburb.jpg")}
        alt="PopulationbySuburb"
      />
      <HorizontalLine />
      <h3>Population Time Series</h3>
      <p>
        After analysing the estimated population in the three suburbs, we
        created a time series graph that provides us the information of
        population growth over the years, which clearly confirms Brunswick with
        the largest population. It also shows that Brunswick and Footscray
        population increased steadily over the time, whereas Toorak’s remain
        almost flat.
      </p>
      <img
        className="app-plots"
        src={require("../../images/PopulationSeries.jpg")}
        alt="PopulationSeries"
      />
      <HorizontalLine />
      <h3>Population by gender</h3>
      <p>
        The graph shows that the proportion of the population by Sex between
        each suburb is similar.
      </p>
      <img
        className="app-plots"
        src={require("../../images/PopulationbySex.jpg")}
        alt="PopulationbySex"
      />
      <HorizontalLine />
      <h3>Population Distribution by Age</h3>
      <p>
        After plotting the proportion of population by sex, it is important to
        see the population distribution by Age, which clearly shows that Toorak
        has an ageing population dominance with people over 45 years old,
        whereas Footscray and Brunswick are showing to be young suburbs.
      </p>
      <img
        className="app-plots"
        src={require("../../images/PopulationbyAge.jpg")}
        alt="PopulationbyAge"
      />

      <h3>Rent prices over the time</h3>
      
      <p>
        Along with the house price analysis, we also created a ten years’ time
        series of renting data, which proves that our three chosen suburbs rent
        drastically increased over the time in the same rate, however, to
        continue with the trend of other analysis Toorak is the most expensive
        one.
      </p>
      <img
        className="app-plots"
        src={require("../../images/RentTimeSeries.jpg")}
        alt="RentTimeSeries"
      />
      <HorizontalLine />
      <h3>House Prices over the time</h3>
      
      <p>
        After collecting house prices for the last ten years we obtained a time
        series graph, which clearly illustrates that Toorak’s properties are by
        far the more expensive ones, whereas Brunswick’s and Footscray’s remain
        to be more “affordable” over the time not showing sharp increases.
      </p>
      <img
        className="app-plots"
        src={require("../../images/HousePriceTimeSeries.jpg")}
        alt="HousePriceTimeSeries"
      />
      <HorizontalLine />

      <h3>Proportion of owned vs rented properties</h3>
      <p>
        An additional comparation of data was made, in this occasion we
        calculated the proportion of owner and rented dwellings all over the
        three suburbs, were we found out that the majority of Toorak’s
        population own their houses, whereas Footscray’s population are renting
        in majority.
      </p>
      <img
        className="app-plots"
        src={require("../../images/OwnRentProportion.jpg")}
        alt="OwnRentProportion"
      />
    </div>
  );
};

export default Demographic;
