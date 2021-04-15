import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Project from "./components/Project";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [html, setHtml] = useState();

  const switchEx = (currentCategory) => {
    switch (currentCategory) {
      case "About Me":
        setHtml(<About />);
        break;
      case "Portfolio":
        setHtml(<Portfolio />);
        break;
      case "Resume":
        setHtml(<Resume />);
        break;
      case "Contact":
        setHtml(<Contact />);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header switchEx={switchEx} />
      <div className="container">{html}</div>
      <Footer />
    </div>
  );
}

export default App;
