import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const HomePage = props => {
  return (
    <div className="mapContainer">
      <h1>Suburb Gentrification</h1>
      <h2>Introduction</h2>
      <p>
        We’re team Deep Fried Brains, a small group of geeks with a passion for
        telling data driven stories. The broad aim of our project was to use
        open source data in a way, or for a purpose, other than it was
        originally intended. We explored a range of government datasets and
        sourced our own unconventional datasets, to tell a story common to many
        places all over the world – but from a very local perspective.
      </p>
      <p>
        Our submission for the ‘telling stories with open data’ challenge
        examined suburb gentrification in Melbourne. We used house price and
        building permit data from data.vic to identify 3 ‘sister’ suburbs at
        different stages of gentrification; Footscray, Brunswick and Toorak. We
        then drilled down with data into these 3 suburbs, to gain insight into
        the key differences between them; looking at the trends in property
        costs, age distribution, income and lifestyle opportunities. For this we
        used data from data.vic and abs.gov.au. However, to better understand
        the things important to local communities, what they are doing and
        talking about, we turned to social media.
      </p>
      <p>
        We hope that by incorporating this diverse range of datasets, that our
        story of suburb gentrification in Melbourne is rich and compelling.
      </p>
      <HorizontalLine />

      <h2>Background</h2>
      <p>
        Suburb gentrification refers to the process of changing the character of
        a neighbourhood through the influx of more affluent residents [1]. One
        of the key identifiers and more negative aspects of this process is an
        increase in property price, and in turn the displacement of lower income
        families [1]. However, suburb gentrification may also offer new
        opportunities for business and increased investments in real-estate
        development [1]. Our project examines some of these indicators in
        Melbourne and asks the questions;
      </p>
      <p>Where – is suburb gentrification occurring?</p>
      <p>When – did the cost of property increase?</p>
      <p>Who – lives there?</p>
      <p>What – are people doing and saying?</p>

      <h1>Identifying Suburb Gentrification</h1>
      <p>
        Map 1 compares the median house price in 2018 across Melbourne suburbs.
        The 3 circled suburbs are located similar distances to the CBD but have
        very different price points. Footscray is one of the few suburbs in
        close proximity to the city with a median house price under a million
        dollars. Brunswick very much represents the norm, with the median house
        price of many of the inner suburbs between 1 to 2 million dollars.
        Toorak lies at the high end of the Melbourne property market, with
        median house prices in excess of 4 million, and for the masses remains a
        lotto-win dream.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePrice2018.jpeg")}
        alt="HousePrice2018"
      />
      <HorizontalLine />
      <h2>House prices analysis</h2>
      <p>
        Map 2 again compare the median house price in 2018 across Melbourne
        suburbs, but using Moran’s I.
      </p>
      <p>
        Moran’s I is a correlation coefficient that measures the overall
        autocorrelation of the dataset [2]. The house price of each suburb is
        compared to that of its geographical neighbours and to the entire
        Greater Melbourne Region, to find regions in the Melbourne where high or
        low property prices are spatially clustered. The output is given as
        ‘quads’, identified by 2 letters where H = high and L = low, the 1st
        letter = comparison to Greater Melbourne and 2nd letter = comparison to
        local neighbours.
      </p>
      <p>
        This technique was used to highlight significant areas in the dataset,
        of the 3 circled suburbs Footscray stands out as having a low median
        house price compared to Greater Melbourne and surrounded by higher
        priced suburbs.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePrice2018MoransI.jpeg")}
        alt="HousePrice2018MoransI"
      />
      <HorizontalLine />
      <h2>House Prices change</h2>
      <p>
        Map 3 compares the change in median house price from 2008 to 2018,
        surprisingly the 3 circled suburbs are similar in reporting relatively
        low values.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePriceChange.jpeg")}
        alt="HousePriceChange"
      />
      <HorizontalLine />
      <h2>House Prices change Analysis</h2>
      <p>
        Map 4 which again looks at the change in median house price from 2008 to
        2018, but with Moran’s I suggests something very different. The Moran’s
        I calculation suggests that while Footscray has reported relatively
        little growth in median house price, it lies on the doorstep of many
        suburbs that have shown a much greater increase in value over the same
        time period. Brunswick is typical of many of the inner north suburbs,
        with a relatively large change in median house price. In contrast,
        Toorak has shown relatively little increase in the median house price in
        a neighbourhood with stable – albeit expensive - real-estate market.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/HousePriceChangeMoransI.jpeg")}
        alt="HousePriceChangeMoransI"
      />
      <HorizontalLine />
      <h2>Domestic Building Permits</h2>
      <p>
        Map 5 examines one of the other key identifiers of suburb
        gentrification, property development. The number of building permits for
        domestic premises in 2018. Our 3 highlighted suburbs are identified by
        their postcodes; Footscray = 3011, Brunswick = 3056, Toorak = 3142.
        Again, and perhaps somewhat surprisingly, these suburbs show a similar
        number of building permits.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/DomesticBuildingPermitsCount2.jpeg")}
        alt="DomesticBuildingPermitsCount2"
      />
      <HorizontalLine />
      <h2>Domestic Building Permits Average Cost</h2>
      <p>
        Map 6 compares property development from a slightly different
        perspective, the average reported cost of works. Our 3 highlighted
        suburbs are identified by their postcodes; Footscray = 3011, Brunswick =
        3056, Toorak = 3142. Once again Footscray is distinguished by a lower
        value, compared to its ‘sister’ suburbs to the east.
      </p>
      <img
        className="app-plots"
        src={require("../../images/maps/DomesticBuildingPermitsAvgCost2.jpeg")}
        alt="DomesticBuildingPermitsAvgCost2"
      />
      <HorizontalLine />
      <p>
        Geospatial analysis of the median house price and building permits has
        identified 3 sister suburbs at different stages of gentrification:
      </p>
      <ul>
        <li>Footscray = yet to be gentrified</li>
        <li>Brunswick = recently gentrified</li>
        <li>Toorak = well established as a very posh place.</li>
      </ul>

      <h2>Reference</h2>
      <ul>
        <li>https://en.wikipedia.org/wiki/Gentrification</li>
        <li>https://www.statisticshowto.datasciencecentral.com/morans-i/</li>
      </ul>
    </div>
  );
};

export default HomePage;
