import React from "react";
import { Col, Row } from "react-bootstrap";

// 🧠 IA & Backend (core)
import Python from "../../Assets/TechIcons/Python.svg";
import FastAPI from "../../Assets/TechIcons/FastAPI.svg";
import Django from "../../Assets/TechIcons/Django.svg";
import Scikitlearn from "../../Assets/TechIcons/Scikitlearn.svg";
import Selenium from "../../Assets/TechIcons/Selenium.svg";
import Ollama from "../../Assets/TechIcons/Ollama.svg";
import Groq from "../../Assets/TechIcons/Groq.svg";
import Langfuse from "../../Assets/TechIcons/Langfuse.svg";

// ⚙️ Infraestructura y DevOps
import Docker from "../../Assets/TechIcons/Docker.svg";
import Minio from "../../Assets/TechIcons/Minio.svg";
import Nginx from "../../Assets/TechIcons/Nginx.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import GoogleCloud from "../../Assets/TechIcons/GoogleCloud.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";

// 💻 Frontend
import ReactIcon from "../../Assets/TechIcons/React.svg";
import ReactIconVue from "../../Assets/TechIcons/Vue.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Astro from "../../Assets/TechIcons/Astro.svg";

// ☕ Otros lenguajes / entornos
import Java from "../../Assets/TechIcons/Java.svg";
import Spring from "../../Assets/TechIcons/Spring.svg";
import Kotlin from "../../Assets/TechIcons/Kotlin.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import C from "../../Assets/TechIcons/C.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* 🧠 IA & Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={FastAPI} alt="FastAPI" />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Django} alt="Django" />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Scikitlearn} alt="scikit-learn" />
        <div className="tech-icons-text">scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Selenium} alt="Selenium" />
        <div className="tech-icons-text">Selenium</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Ollama} alt="Ollama" className="tech-icon-images" />
        <div className="tech-icons-text">Ollama</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Groq} alt="Groq" className="tech-icon-images" />
        <div className="tech-icons-text">Groq</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Langfuse} alt="Langfuse" className="tech-icon-images" />
        <div className="tech-icons-text">Langfuse</div>
      </Col>

      {/* ⚙️ Infraestructura / DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Minio} alt="MinIO" className="tech-icon-images" />
        <div className="tech-icons-text">MinIO</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Nginx} alt="Nginx" className="tech-icon-images" />
        <div className="tech-icons-text">Nginx</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={GoogleCloud} alt="Google Cloud" className="tech-icon-images" />
        <div className="tech-icons-text">Google Cloud</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      {/* 💻 Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React Native" />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIconVue} alt="Vue" className="tech-icon-images" />
        <div className="tech-icons-text">Vue</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Astro} alt="Astro" className="tech-icon-images" />
        <div className="tech-icons-text">Astro</div>
      </Col>

      {/* ☕ Otros lenguajes */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Spring} alt="Spring" />
        <div className="tech-icons-text">Spring</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kotlin} alt="Kotlin" />
        <div className="tech-icons-text">Kotlin</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>
    </Row>
  );
}

export default Techstack;