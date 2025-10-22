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
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default SkillsPage;
