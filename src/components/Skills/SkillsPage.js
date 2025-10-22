import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";
import { useI18n } from "../../i18n/I18nContext";

function SkillsPage() {
  const { t } = useI18n();
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <h1 className="project-heading" dangerouslySetInnerHTML={{ __html: t("skills.heading_skills") }} />

          <Techstack />

          <h1 className="project-heading" dangerouslySetInnerHTML={{ __html: t("skills.heading_tools") }} />
          <Toolstack />

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default SkillsPage;
