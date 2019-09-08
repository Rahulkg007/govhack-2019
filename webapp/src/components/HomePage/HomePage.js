import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "960px",
  height: "600px"
};

const stores = [
  { lat: -37.8136, lng: 144.9631 },
  { latitude: -37.758271, longitude: 144.974742 },
  { latitude: -37.770641, longitude: 144.959528 },
  { latitude: -37.775066, longitude: 144.964625 },
  { latitude: -37.763836, longitude: 144.951446 },
  { latitude: -37.767578, longitude: 144.955866 },
  { latitude: -37.775066, longitude: 144.964625 },
  { latitude: -37.758271, longitude: 144.974742 },
  { latitude: -37.766537, longitude: 144.952733 },
  { latitude: -37.763836, longitude: 144.951446 },
  { latitude: -37.764748, longitude: 144.951992 },
  { latitude: -37.761166, longitude: 144.981703 },
  { latitude: -37.766163, longitude: 144.958773 },
  { latitude: -37.770641, longitude: 144.959528 },
  { latitude: -37.775066, longitude: 144.964625 },
  { latitude: -37.758271, longitude: 144.974742 },
  { latitude: -37.765157, longitude: 144.950246 },
  { latitude: -37.767578, longitude: 144.955866 },
  { latitude: -37.766537, longitude: 144.952733 },
  { latitude: -37.766537, longitude: 144.952733 },
  { latitude: -37.767578, longitude: 144.955866 },
  { latitude: -37.765721, longitude: 144.954764 },
  { latitude: -37.770641, longitude: 144.959528 },
  { latitude: -37.765157, longitude: 144.950246 },
  { latitude: -37.765288, longitude: 144.951271 },
  { latitude: -37.794854, longitude: 144.878587 },
  { latitude: -37.804628, longitude: 144.898151 },
  { latitude: -37.792875, longitude: 144.898001 },
  { latitude: -37.804628, longitude: 144.898151 },
  { latitude: -37.792875, longitude: 144.898001 },
  { latitude: -37.795598, longitude: 144.879866 },
  { latitude: -37.788284, longitude: 144.889729 },
  { latitude: -37.790896, longitude: 144.901989 },
  { latitude: -37.792242, longitude: 144.902017 },
  { latitude: -37.79159, longitude: 144.899676 },
  { latitude: -37.794854, longitude: 144.878587 },
  { latitude: -37.788284, longitude: 144.889729 },
  { latitude: -37.792875, longitude: 144.898001 },
  { latitude: -37.795598, longitude: 144.879866 },
  { latitude: -37.79159, longitude: 144.899676 },
  { latitude: -37.787921, longitude: 144.889933 },
  { latitude: -37.792678, longitude: 144.896318 },
  { latitude: -37.804628, longitude: 144.898151 },
  { latitude: -37.792875, longitude: 144.898001 },
  { latitude: -37.788284, longitude: 144.889729 },
  { latitude: -37.79159, longitude: 144.899676 },
  { latitude: -37.79159, longitude: 144.899676 },
  { latitude: -37.788284, longitude: 144.889729 },
  { latitude: -37.792875, longitude: 144.898001 },
  { latitude: -37.79159, longitude: 144.899676 },
  { latitude: -37.795598, longitude: 144.879866 },
  { latitude: -37.804628, longitude: 144.898151 },
  { latitude: -37.792875, longitude: 144.898001 }
];

const displayMarkers = () => {
  return stores.map((store, index) => {
    return (
      <Marker
        key={index}
        id={index}
        position={{
          lat: store.latitude,
          lng: store.longitude
        }}
        onClick={() => console.log("You clicked me!")}
      />
    );
  });
};

const HomePage = props => {
  return (
    <div className="mapContainer">
      <h1>Suburb Gentrification</h1>

      <img
        className="app-maps"
        src={require("../../images/maps/Suburbs_Sports_and_Recreational_Activities.jpg")}
        alt="Suburbs_Sports_and_Recreational_Activities"
      />
      <Map
        google={props.google}
        zoom={12}
        initialCenter={{ lat: -37.8136, lng: 144.9631 }}
        style={mapStyles}
      >
        {/* <Marker position={{ lat: -37.8136, lng: 144.9631 }} /> */}
        {displayMarkers()}
      </Map>
      <div id="map_canvas"></div>
      <h2>About Lorens eye</h2>
      <p>
        Lorem ipsum dolor sit amet, eos graeco verterem deserunt ne, sed
        detraxit cotidieque id. Cu quis etiam percipit eos. Ei liber
        consequuntur qui, pro choro perfecto cu, no appareat platonem sed. Quo
        ex nemore fabulas reformidans, ad has illum commune. Pri ex iriure
        deseruisse contentiones. Cu elaboraret consequuntur conclusionemque nec,
        nam impedit molestie inimicus no. Mea omnis fabellas consulatu ex. Ad
        nec quaestio comprehensam, est quot perfecto ad. Ei erat ullum
        scribentur quo, ad vis graecis accusam. Vim viris equidem ut, ad latine
        antiopam eam. His fabulas ancillae interesset ne. Legendos splendide an
        sit, sea latine scripta fastidii no. Sit at inani populo repudiandae,
        eam dicunt nonumes an. Eos at primis docendi mediocrem, ut possit
        equidem ius. In eos inciderint persequeris, utinam delenit usu te, ea
        populo delicata quo. No pericula scripserit eam, has te vitae accusata.
        Ad his munere feugait epicurei, at pri verterem elaboraret. Eam fuisset
        quaestio forensibus ad. Est in enim paulo nihil, eu mentitum intellegat
        mel, vim te legimus repudiandae. Volumus tractatos sapientem ex pro, ea
        omnes nusquam consequuntur duo. Te sit meis tibique. Eos ut case
        consequat mediocritatem, id per sententiae intellegebat, sit in hinc
        omnesque fabellas. Audiam equidem tincidunt duo at, illud persequeris
        nec no. Mei in persius evertitur comprehensam, quis inimicus vix te. Id
        his iusto evertitur mnesarchum. Salutatus mediocritatem vis ad, quot
        labore at mel, vero blandit verterem est an. Eripuit equidem salutandi
        pri id, et civibus appareat accusamus nec, hinc expetenda euripidis his
        ut.
      </p>

      <img
        className="app-plots"
        src={require("../../images/ATO.jpg")}
        alt="ATO"
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAU5f9VQXFBUrLN9YVi4JfqbZMgl-U9jJk"
})(HomePage);
