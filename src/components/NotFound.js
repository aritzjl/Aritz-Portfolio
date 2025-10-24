import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "./Particle";
import { useI18n } from "../i18n/I18nContext";

function NotFound() {
  const { t } = useI18n();

  return (
    <Container fluid className="project-section project-section--overlay">
      <Particle />
      <Container>
        <Row className="justify-content-center" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <Col md={8} className="text-center">
            <h1 className="project-heading" style={{ fontSize: "3rem" }}>
              404 — {t("notfound.title")}
            </h1>
            <p style={{ color: "#ddd", marginTop: 10, marginBottom: 30 }}>
              {t("notfound.description")}
            </p>
            <Button as={Link} to="/" variant="primary">
              {t("notfound.back_home")}
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NotFound;

