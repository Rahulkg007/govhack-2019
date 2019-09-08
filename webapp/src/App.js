import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Demographic from "./components/Demographic/Demographic";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route name="home" exact path="/" component={HomePage} />

        <Route
          name="govhack-2019"
          exact
          path="/govhack-2019"
          component={HomePage}
        />

        <Route
          name="social-media"
          exact
          path="/social-media"
          component={SocialMedia}
        />
        <Route
          name="demographic"
          exact
          path="/demographic"
          component={Demographic}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
