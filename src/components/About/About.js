import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// moved Techstack, Toolstack and Github to a separate Skills page
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Conoce quién <strong className="purple">SOY</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          {/* Techstack, Toolstack and Github moved to a dedicated Skills page */}
        </Container>
      </Container>
    </>
  );
}

export default About;
