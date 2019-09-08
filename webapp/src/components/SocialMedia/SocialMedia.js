import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const SocialMedia = () => {
  return (
    <div className="mapContainer">
      <h1>Social Media Analysis</h1>

      <p>
        After collecting multiple reviews from the three suburbs in
        www.homely.com and creating a word cloud analysis, we found some
        differences between suburbs which led us to think that this information
        could expose the gentrification level in the analysed suburbs. For
        instance, Toorak most repeated words were Great, Mansion, high,
        expensive, millionaire, etc, whereas, Footscray some of the most
        frequent words were truck, public, addict, to name a few.
      </p>
      <h3>Brunswick Word Cloud</h3>
      <img
        className="app-plots wordcloud"
        src={require("../../images/BrunswickWordCloud.png")}
        alt="BrunswickWordCloud"
      />

      <h3>Toorak Word Cloud</h3>
      <img
        className="app-plots wordcloud"
        src={require("../../images/ToorakWordCloud.png")}
        alt="ToorakWordCloud"
      />

      <h3>Footscray Word Cloud</h3>
      <img
        className="app-plots wordcloud"
        src={require("../../images/FootscrayWordCloud.png")}
        alt="FootscrayWordCloud"
      />

      <HorizontalLine />

      <h2>Usual behaviour of suburbs</h2>
      <p>
        After analysing Instagram and suburbs’ reviews we also searched for the
        most rated places to visit around Brunswick, Toorak and Footscray, where
        we found that the three suburbs are offering the same type of
        activities, such as Food and hotels, despite the gentrification level
        they all have.
      </p>
      <h3>Toorak</h3>
      <img
        className="small-plots"
        src={require("../../images/SocialMedia/Toorak_Trip_Advisor.png")}
        alt="Toorak Trip advisor"
      />

      <h3>Brunswick</h3>
      <img
        className="small-plots"
        src={require("../../images/SocialMedia/Brunswick_Trip_Advisor.png")}
        alt="Brunswick Trip advisor"
      />
      <h3>Footscray</h3>
      <img
        className="small-plots"
        src={require("../../images/SocialMedia/Footscray_Trip_Advisor.png")}
        alt="Footscray Trip advisor"
      />

      <HorizontalLine />

      <h2>Social Trends - Insta Moods!</h2>

      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta.jpg")}
        alt="socialMediaInsta"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Toorak.jpg")}
        alt="socialMediaInsta_Toorak"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Brunswick.jpg")}
        alt="socialMediaInsta_Brunswick"
      />
      <HorizontalLine />
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Footscray.jpg")}
        alt="socialMediaInsta_Footscray"
      />

      <h2>References</h2>
      <ul>
        <li>https://www.homely.com.au/brunswick-moreland-melbourne-greater-victoria</li>
        <li>https://www.homely.com.au/brunswick-moreland-melbourne-greater-victoria</li>
        <li>https://www.homely.com.au/footscray-maribyrnong-melbourne-greater-victoria</li>
        <li>https://www.homely.com.au/toorak-stonnington-melbourne-greater-victoria</li>
        <li>https://www.dhhs.vic.gov.au/publications/rental-report</li>
      </ul>
    </div>
  );
};

export default SocialMedia;
