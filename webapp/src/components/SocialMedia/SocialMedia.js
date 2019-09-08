import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const SocialMedia = () => {
  return (
    <div className="mapContainer">
      <h1>Social Media Analysis</h1>

      

      <img
        className="app-plots wordcloud"
        src={require("../../images/collages/BeFunky-collage1.jpg")}
        alt="Insta collage"
      />

      <p>Real Instagram posts from Brunswick, Toorak and Footscray</p>

      <HorizontalLine />
      <h2>Suburbs word cloud</h2>
      <p>
        After collecting multiple reviews from the three suburbs in
        www.homely.com and creating a word cloud analysis, we found some
        differences between suburbs which led us to think that this information
        could expose the gentrification level in the analysed suburbs. For
        instance, Toorak most repeated words were Great, Mansion, high,
        expensive, millionaire, etc, whereas, Footscray some of the most
        frequent words were truck, public, addict, to name a few.
      </p>

      <h3>Brunswick</h3>
      <img
        className="app-plots wordcloud"
        src={require("../../images/BrunswickWordCloud.png")}
        alt="BrunswickWordCloud"
      />

      <h3>Toorak</h3>
      <img
        className="app-plots wordcloud"
        src={require("../../images/ToorakWordCloud.png")}
        alt="ToorakWordCloud"
      />

      <h3>Footscray</h3>
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
<p>Chart 1 compares the most current photos posted on Instagram for the 3 sister suburbs. The photos are grouped into broad categories to help identify trends in topics of interest to each local community. People and pets seem to be of broad appeal across all 3 of the sister suburbs. However, the Footscray community appears to differ in a greater interest in food and beverage. Whereas Toorak posted more photos relating to buildings and businesses, and outdoor was most popular in Brunswick.
</p>
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta.jpg")}
        alt="socialMediaInsta"
      />
      <HorizontalLine />
      <p>Chart 2 Looks at greater detail at the most recent Instagram posts for Brunswick. People and pets remain the most popular, followed by outdoors and fashion & beauty. However, uniquely, artistic photos and tattoos only feature in this community.
</p>
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Toorak.jpg")}
        alt="socialMediaInsta_Toorak"
      />
      <HorizontalLine />
      <p>Chart 3 Again people and pets are most popular in Footscray, with many of the other top categories observed in the other sister suburbs also making a prominent appearance. However, the point of difference in Footscray is a significant count of photos relating to alcohol, food & bars, and sport.
</p>
      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Brunswick.jpg")}
        alt="socialMediaInsta_Brunswick"
      />
      <HorizontalLine />
      <p>Chart 4 Toorak is unique in the most popular types of photos uploaded to Instagram are of buildings & businesses. Interior design also featured highly, along with photos of manual labour. Food & bars and outdoor where of less prevalence.
</p>
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
