import React from "react";
import HorizontalLine from '../HorizontalLine/HorizontalLine'

const HomePage = props => {
  return (
    <div className="mapContainer">
      <h1>Suburb Gentrification</h1>

      <h2>House Price 2018</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePrice2018.jpeg")}
        alt="HousePrice2018"
      />
      <HorizontalLine />
      <h2>House Prices Analysis</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePrice2018MoransI.jpeg")}
        alt="HousePrice2018MoransI"
      />
      <HorizontalLine />
      <h2>House Prices change</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePriceChange.jpeg")}
        alt="HousePriceChange"
      />
      <HorizontalLine />
      <h2>House Prices change Analysis</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePriceChangeMoransI.jpeg")}
        alt="HousePriceChangeMoransI"
      />

<HorizontalLine />
      <h2>Domestic Building Permits</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/DomesticBuildingPermitsCount2.jpeg")}
        alt="DomesticBuildingPermitsCount2"
      />

<HorizontalLine />
      <h2>Domestic Building Permits Average Cost</h2>
      <img
        className="app-plots"
        src={require("../../images/maps/DomesticBuildingPermitsAvgCost2.jpeg")}
        alt="DomesticBuildingPermitsAvgCost2"
      />

    </div>
  );
};

export default HomePage;
