import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Linux from "../../Assets/TechIcons/Linux.svg";
import Devcontainers from "../../Assets/TechIcons/Docker.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
	<Col xs={4} md={2} className="tech-icons ">
		<img src={Linux} alt="linux" className="tech-icon-images" />
		<div className="tech-icons-text">Linux</div>
	  </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Devcontainers} alt="devcontainers" className="tech-icon-images" />
        <div className="tech-icons-text">DevContainers</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
