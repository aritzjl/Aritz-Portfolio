import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mySomnia from "../../Assets/Projects/my-somnia.png";
import identificadorPolicial from "../../Assets/Projects/identificador.png";
import lexfirma from "../../Assets/Projects/lexfirma.png";
import orderinnPricePredictor from "../../Assets/Projects/orderinn.png";
import lexglobal from "../../Assets/Projects/lexglobal.png";
import paragonProElite from "../../Assets/Projects/paragon.png";
import pradosOsunaAI from "../../Assets/Projects/prados-osuna-ai.png";
import javierOlmoTraining from "../../Assets/Projects/javier-olmo.png";
import obrahub360 from "../../Assets/Projects/obrahub360.png";

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
		            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexglobal}
              title="LexGlobal — Analizador judicial"
              description="Sistema que automatiza la lectura y clasificación de resoluciones judiciales en PDF usando IA semántica, mejorando la precisión y reduciendo el tiempo de revisión documental."
              slug="lexglobal"
            />
          </Col>
		  <Col md={4} className="project-card">
  <ProjectCard
    imgPath={paragonProElite}
    title="Paragon Pro Elite"
    description="Plataforma digital que conecta atletas, familias y profesionales del deporte, con perfiles verificados, búsqueda avanzada, recursos formativos, eventos y app instalable (PWA + Android)."
    slug="paragon"
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={pradosOsunaAI}
    title="Prados-Osuna AI"
    description="Sistema inteligente integrado con MN Program que automatiza la revisión de expedientes, detecta plazos de prescripción y gestiona notificaciones legales con trazabilidad completa."
    slug="prados-osuna-ai"
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={obrahub360}
    title="ObraHub360"
    description="Plataforma que conecta autónomos y empresas del sector construcción, con verificación documental mediante OCR + IA, perfiles verificados y sistema de valoraciones con suscripción premium."
    slug="obrahub360"
  />
</Col>
<Col md={4} className="project-card">
  <ProjectCard
    imgPath={javierOlmoTraining}
    title="Javier Olmo Training"
    description="Web profesional para el entrenador Javier Olmo, con área privada de ejercicios en vídeo, integración con APIs externas y renderizado SSR con Astro + Node."
    slug="javier-olmo-training"
  />
</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;