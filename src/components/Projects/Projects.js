import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mySomnia from "../../Assets/Projects/my-somnia.png";

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
              imgPath={mySomnia}
              title="MySomnia"
              description="Aplicación web minimalista para escribir sin distracciones, con temas personalizados, asistencia por IA, voz y exportación a PDF."
              slug="mysomnia"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
