import React from "react";
import TechStack from "../TechStack";
import myResume from "../../assets/resume/resume.pdf";
const Resume = () => {
  const stack = [
    {
      name: "React.js",
    },
    {
      name: "Node.js",
    },
    {
      name: "Express.js",
    },
    {
      name: "MySQL",
    },
    {
      name: "MongoDB",
    },
    {
      name: "BootStrap CSS",
    },
    {
      name: "Materialize CSS",
    },
    {
      name: "REST API",
    },
  ];
  return (
    <div>
      <a href={myResume} download target="_blank" rel="noopener noreferrer">
        Resume
      </a>

      {/* Map over the tech stack just like your categories */}
      <div>
        List of my Tech Stacks:
        {stack.map((stk) => (
          <TechStack prop={stk} />
        ))}
      </div>
    </div>
  );
};

export default Resume;
