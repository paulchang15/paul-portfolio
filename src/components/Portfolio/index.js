import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const projects = [
    {
      name: "iMemeit",
      description: "Place to upload and share memes",
      deployedLink: "https://imeme-it.herokuapp.com/",
      github: "https://github.com/paulchang15/meme-it",
    },
    // {
    //   image: "",
    //   name: "Second Project",
    //   description: "description of the project",
    //   deployedLink: "",
    //   github: "",
    // },
    // {
    //   image: "",
    //   name: "Third Project",
    //   description: "description of the project",
    //   deployedLink: "",
    //   github: "",
    // },
    // {
    //   image: "",
    //   name: "Fourth Project",
    //   description: "description of the project",
    //   deployedLink: "",
    //   github: "",
    // },
  ];
  return (
    <div>
      {projects.map((prj) => (
        <Project prop={prj} />
      ))}
    </div>
  );
};

export default Portfolio;
