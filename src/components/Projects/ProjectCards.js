import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view project-card-link-container">
      {/* Top-right link icon to details */}
      {props.slug && (
        <Link
          to={`/project/${props.slug}`}
          className="project-card-link-icon"
          aria-label={`Ver detalles de ${props.title}`}
          title="Ver detalles"
        >
          <FiExternalLink />
        </Link>
      )}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-description" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
