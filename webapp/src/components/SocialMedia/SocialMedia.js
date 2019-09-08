import React from "react";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const SocialMedia = () => {
  return (
    <div className="mapContainer">
      <h1>Social Media Analysis</h1>

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

      <p>
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
        The bedding was hardly able to cover it and seemed ready to slide off
        any moment.
      </p>
      <p>
        His many legs, pitifully thin compared with the size of the rest of him,
        waved about helplessly as he looked. "What's happened to me?" he
        thought. It wasn't a dream. His room, a proper human room although a
        little too small, lay peacefully between its four familiar walls.
      </p>

      <HorizontalLine />

      <h2>Usual behaviour of suburbs</h2>
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

      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Toorak.jpg")}
        alt="socialMediaInsta_Toorak"
      />

      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Brunswick.jpg")}
        alt="socialMediaInsta_Brunswick"
      />

      <img
        className="app-plots"
        src={require("../../images/socialMediaInsta_Footscray.jpg")}
        alt="socialMediaInsta_Footscray"
      />
    </div>
  );
};

export default SocialMedia;
