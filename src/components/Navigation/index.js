import React, { useEffect } from "react";
import { Nav, Navbar, NavLink, NavItem } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils/helpers";
function NavBar(props) {
  const {
    switchEx,
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);
  return (
    <Navbar>
      <Nav>
        {/* <Nav.Link
          href={`#about`}
          onClick={(e) => {
            e.preventDefault();
            switchEx("About");
            setCurrentCategory("about");
          }}
          data-testid="about"
        >
          About
        </Nav.Link> */}
        {/* <div>{categories[0].name}</div> */}
        {categories.map((link) => (
          <Nav.Link
            href={`#${link.link}}`}
            onClick={(e) => {
              e.preventDefault();
              switchEx(link.name);
              setCurrentCategory(link.name);
            }}
          >
            {link.name}
          </Nav.Link>
        ))}
        {/* <Nav.Link>
          <li>
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && "activeKey"}`}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li></Nav.Link> */}
        {/* {categories.map((category) => (
          <li
            className={`block mr-4 ${
              currentCategory.name === category.name &&
              !contactSelected &&
              `activeKey`
            }`}
            key={category.name}
          >
            <span
              onClick={() => {
                setCurrentCategory(category);
                setContactSelected(false);
              }}
            >
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))} */}
      </Nav>
    </Navbar>
  );
}

export default NavBar;
