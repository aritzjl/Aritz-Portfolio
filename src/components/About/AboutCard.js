import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useI18n } from "../../i18n/I18nContext";

function AboutCard() {
  const { t } = useI18n();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span dangerouslySetInnerHTML={{ __html: t("about.card.p1") }} />
            <br />
            <br />
            {t("about.card.p2")}
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: t("about.card.p3") }} />
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: t("about.card.p4") }} />
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: t("about.card.p5") }} />
            <br />
            <br />
            <span dangerouslySetInnerHTML={{ __html: t("about.card.p6") }} />
            <br />
            <br />
            {t("about.card.p7")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.li1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.li2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.card.li3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }} dangerouslySetInnerHTML={{ __html: t("about.card.quote") }} />
          <footer className="blockquote-footer">{t("about.card.author")}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
