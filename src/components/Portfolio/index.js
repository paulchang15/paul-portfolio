import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const projects = [
    {
      name: "iMemeit",
      link: "imemeit",
      description: "Place to upload and share memes.",
      deployedLink: "https://imeme-it.herokuapp.com/",
      github: "https://github.com/paulchang15/meme-it",
    },
    {
      name: "Budget Tracker",
      link: "budget_tracker",
      description:
        "An app to track your spending with the ability to add and delete your transactions.",
      deployedLink: "https://budget-tracker-paul.herokuapp.com/",
      github: "https://github.com/paulchang15/budget-tracker",
    },
    {
      name: "EZ Plan",
      link: "ez_plan",
      description:
        "App that finds nearest restaurants according to the events you have searched for in a specific location on a specific month.",
      deployedLink: "https://jleatham78.github.io/road-trip/",
      github: "https://github.com/jleatham78/road-trip",
    },
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
