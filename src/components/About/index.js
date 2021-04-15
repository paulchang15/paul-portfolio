import React from "react";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <Card>
      <Card.Title>About Me</Card.Title>
      <Card.Img
        src={require("../../assets/images/profile_pic.jpg").default}
        alt="profile pic"
        width={300}
      />
      <Card.Body>
        <Card.Text>
          Hello! I am a full stack developer that specializes in using the full
          MERN stack for front and back end!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default About;
