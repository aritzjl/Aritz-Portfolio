import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useI18n } from "../i18n/I18nContext";

function Footer() {
  const { t } = useI18n();
  return (
    <Container fluid className="footer">
      <Row className="align-items-center">
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ marginBottom: 0 }}>
            <li className="social-icons">
              <a
                href="https://github.com/aritzjl"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aritzjl/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="8" className="footer-copywright text-md-end text-center">
          <small dangerouslySetInnerHTML={{ __html: t("footer.credit") }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
