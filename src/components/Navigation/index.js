import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function Navigation(props) {
  const { switchEx, categories = [], setCurrentCategory } = props;

  // useEffect(() => {
  //   document.title = capitalizeFirstLetter(currentCategory.name);
  // }, [currentCategory]);
  return (
    <Navbar bg="light">
      <Navbar.Brand>Paul Chang</Navbar.Brand>
      <Nav className="ml-auto">
        {categories.map((link) => (
          <Nav.Link
            href={`#${link.link}}`}
            onClick={(e) => {
              e.preventDefault();
              switchEx(link.name);
              setCurrentCategory(link.name);
            }}
            className="left align"
          >
            {link.name}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
  );
}

export default Navigation;
