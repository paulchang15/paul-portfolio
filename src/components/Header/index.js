import React, { useState } from "react";
import NavBar from "../Navigation";

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
    <header>
      <h1>Paul Chang</h1>
      <NavBar
        categories={categories}
        switchEx={switchEx}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></NavBar>
    </header>
  );
};

export default Header;
