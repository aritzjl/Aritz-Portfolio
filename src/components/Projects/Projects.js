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
import padelChiquito from "../../Assets/Projects/padelchiquito.png";
import { useI18n } from "../../i18n/I18nContext";

function Projects() {
  const { t } = useI18n();
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" dangerouslySetInnerHTML={{ __html: t("projects.heading") }} />
        <p style={{ color: "white" }}>{t("projects.subheading")}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 1. Identificador Policial */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={identificadorPolicial}
              title={t("projects.cards.identificador-policial.title")}
              description={t("projects.cards.identificador-policial.description")}
              slug="identificador-policial"
            />
          </Col>

          {/* 2. LexFirma */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexfirma}
              title={t("projects.cards.lexfirma.title")}
              description={t("projects.cards.lexfirma.description")}
              slug="lexfirma"
            />
          </Col>

          {/* 3. OrderInn */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={orderinnPricePredictor}
              title={t("projects.cards.orderinn.title")}
              description={t("projects.cards.orderinn.description")}
              slug="orderinn"
            />
          </Col>

          {/* 4. MySomnia */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mySomnia}
              title={t("projects.cards.mysomnia.title")}
              description={t("projects.cards.mysomnia.description")}
              slug="mysomnia"
            />
          </Col>

          {/* 5. LexGlobal */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lexglobal}
              title={t("projects.cards.lexglobal.title")}
              description={t("projects.cards.lexglobal.description")}
              slug="lexglobal"
            />
          </Col>

          {/* 6. Paragon */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paragonProElite}
              title={t("projects.cards.paragon.title")}
              description={t("projects.cards.paragon.description")}
              slug="paragon"
            />
          </Col>

          {/* 7. Prados Osuna */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pradosOsunaAI}
              title={t("projects.cards.prados-osuna-ai.title")}
              description={t("projects.cards.prados-osuna-ai.description")}
              slug="prados-osuna-ai"
            />
          </Col>

		  <Col md={4} className="project-card">
  <ProjectCard
    imgPath={padelChiquito}
    title={t("projects.cards.padelchiquito.title")}
    description={t("projects.cards.padelchiquito.description")}
    slug="padelchiquito"
  />
</Col>

          {/* 8. ObraHub */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={obrahub360}
              title={t("projects.cards.obrahub360.title")}
              description={t("projects.cards.obrahub360.description")}
              slug="obrahub360"
            />
          </Col>

          {/* 9. Javier Olmo */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javierOlmoTraining}
              title={t("projects.cards.javier-olmo-training.title")}
              description={t("projects.cards.javier-olmo-training.description")}
              slug="javier-olmo-training"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
