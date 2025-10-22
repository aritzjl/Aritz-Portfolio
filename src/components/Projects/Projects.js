import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mySomnia from "../../Assets/Projects/my-somnia.png";
import identificadorPolicial from "../../Assets/Projects/identificador.png";
import lexfirma from "../../Assets/Projects/lexfirma.png";
import orderinnPricePredictor from "../../Assets/Projects/orderinn.png";

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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={identificadorPolicial}
              title="Identificador Policial"
              description="Aplicación web para asistencia policial en la identificación de personas y vehículos mediante OCR e IA, con integración corporativa y registro automatizado de expedientes."
              slug="identificador-policial"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexfirma}
              title="LexFirma"
              description="Plataforma full-stack para despachos jurídicos que automatiza tareas, organiza documentos y genera borradores legales en PDF mediante IA e integración con Google Workspace."
              slug="lexfirma"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderinnPricePredictor}
              title="OrderInn Price Predictor"
              description="Sistema interno que automatiza la predicción de precios desde archivos Excel, con modelos de machine learning entrenables y versionado de scripts asistido por IA."
              slug="orderinn"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;