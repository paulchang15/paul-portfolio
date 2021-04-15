import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Container from "react-bootstrap/Container";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function App() {
  const [html, setHtml] = useState();

  const switchEx = (currentCategory) => {
    switch (currentCategory) {
      case "About Me":
        setHtml(<About />);
        break;
      case "Portfolio":
        setHtml(<Portfolio />);
        break;
      case "Resume":
        setHtml(<Resume />);
        break;
      case "Contact":
        setHtml(<Contact />);
        break;
      default:
        break;
    }
  };

  return (
    <Container fluid>
      <Header switchEx={switchEx} />
      <div className="container">{html}</div>
      <Footer />
    </Container>
  );
}

export default App;
