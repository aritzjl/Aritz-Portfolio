import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useI18n } from "../../i18n/I18nContext";

function ProjectCards(props) {
  const { t } = useI18n();
  return (
    <Card className="project-card-view project-card-link-container">
      {/* Top-right link icon to details (visual affordance) */}
      {props.slug && (
        <Link
          to={`/project/${props.slug}`}
          className="project-card-link-icon"
          aria-label={t("projects.aria_view_details", props.title) || `View details of ${props.title}`}
          title={t("projects.view_details")}
        >
          <FiExternalLink />
        </Link>
      )}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-card-img"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-card-description" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* Stretched link makes the whole card clickable while keeping the icon visible */}
        {props.slug && (
          <Link to={`/project/${props.slug}`} className="stretched-link" aria-hidden="true" />
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
