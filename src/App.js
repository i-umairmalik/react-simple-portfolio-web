import React, { Component } from "react";
import { Element } from "react-scroll";
import "./resources/styles.css";

import Header from "./Components/Header-Footer/Header";
import Featured from "./Components/features";
import VenueInfo from "./Components/Info";
import HighLights from "./Components/HighLights";
import Pricing from "./Components/Pricing";
import Location from "./Components/Location";
import Footer from "./Components/Header-Footer/Footer";

class App extends Component {
  render() {
    return (
      <div style={{ height: "1000px", backgroundColor: "cornflowerblue" }}>
        <Element name="event">
          <Header />
        </Element>
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <HighLights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
