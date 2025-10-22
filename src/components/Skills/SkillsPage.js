import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";

function SkillsPage() {
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading">
            Habilidades <strong className="purple">Técnicas</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Herramientes</strong> que uso
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default SkillsPage;
