import React from "react";
import Card from "react-bootstrap/Card";

const Project = ({ prop }) => {
  return (
    <Card border="primary">
      <Card.Header>{prop.name}</Card.Header>
      <Card.Img
        src={require(`../../assets/images/${prop.name}.PNG`).default}
        alt="iMemeit"
        key={prop.name}
        width={300}
        height={200}
        thumbnail
      />
      <Card.Body>
        <Card.Text>{prop.description}</Card.Text>
        <Card.Link href={`${prop.deployedLink}`} target="_blank">
          {prop.deployedLink}
        </Card.Link>
        <br />
        <Card.Link
          href={`${prop.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {prop.github}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Project;
