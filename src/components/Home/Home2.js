import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJA QUE ME <span className="purple"> PRESENTE </span>
            </h1>
            <p className="home-about-body">
              Soy <span className="purple">Aritz Jaber</span>, desarrollador de software y{" "}
              <b className="purple">cofundador de dos empresas</b>:
              <br />
              <b className="purple">TenBeltz</b> y <b className="purple">Biiak</b>.
              <br />
              <br />
              En mi día a día, combino desarrollo, diseño de sistemas y
              liderazgo técnico para crear soluciones que{" "}
              <b className="purple">
                automatizan procesos, reducen carga manual y convierten los
                datos en decisiones útiles.
              </b>
              <br />
              <br />
              En <b className="purple">TenBeltz</b> nos enfocamos en ayudar a
              empresas a optimizar su operación mediante software a medida e
              inteligencia artificial.
              <br />
              En <b className="purple">Biiak</b>, aplicamos{" "}
              <b className="purple">IA privada</b> al ámbito de la{" "}
              <b className="purple">protección social</b>, con el propósito de
              usar la tecnología para cuidar mejor.
              <br />
              <br />
              Trabajo principalmente con{" "}
              <i>
                <b className="purple">Python, FastAPI, Ollama y Langfuse</b>
              </i>
              , creando sistemas escalables, seguros y con impacto real.
              <br />
              <br />
              Creo firmemente que{" "}
              <b className="purple">
                la mejor tecnología es la que mejora la vida de las personas.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;