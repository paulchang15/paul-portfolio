import React, { useState } from "react";
import TechStack from "../TechStack";
import myResume from "../../assets/resume/resume.pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.parcel";
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
  const [file, setFile] = useState(myResume);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
      {/* <Document
        file={"/assets/resume/resume.pdf"}
        key="resume"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      <a href={myResume} download target="_blank" rel="noopener noreferrer">
        Click here to download a copy of my Resume!
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
