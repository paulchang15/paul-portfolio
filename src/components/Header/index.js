import React, { useState } from "react";
import Navigation from "../Navigation";
import Jumbotron from "react-bootstrap/Jumbotron";
const Header = ({ switchEx }) => {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "About Me",
      link: "about",
    },
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Resume",
      link: "resume",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation
        categories={categories}
        switchEx={switchEx}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <Jumbotron fluid>
        <h1>Hello! Welcome to my Portfolio!</h1>
      </Jumbotron>
    </div>
  );
};

export default Header;
