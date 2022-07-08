import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import freelearn from "../../Assets/Projects/freelearn.png";
import gdsc from "../../Assets/Projects/gdsc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freelearn}
              title="Free Learn"
              description="This website contains free study resources such as YouTube videos, pdf of books and question paper for higher secondary students"
              ghLink="https://github.com/nadeem-R17/Freelearn"
              demoLink="https://freelearnweb.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gdsc}
              title="GDSC Home Page"
              description="This website is build with technology such as HTML and CSS."
              ghLink="https://github.com/nadeem-R17/GDSC_BITM"
              demoLink="https://nadeem-r17.github.io/GDSC_BITM/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
