import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
const Footer = () => {
  return (
    <Container fluid className="main-footer">
      <Row className="justify-content-md-center">
        <Col>Check out my other profiles!</Col>

        <a href={"https://github.com/paulchang15"}>
          <img
            src={require("../../assets/images/icons/github.png").default}
            alt="github"
            width={50}
            height={50}
          />
        </a>
        <a href={"https://www.linkedin.com/in/paul-chang-975965195/"}>
          <img
            src={require("../../assets/images/icons/linkedin.jpg").default}
            alt="linkedin"
            width={50}
            height={50}
          />
        </a>
      </Row>
    </Container>
  );
};

export default Footer;
