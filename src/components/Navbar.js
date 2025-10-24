import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
// Logo served from public root to allow easy swapping without rebuild
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineRead,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { useI18n } from "../i18n/I18nContext";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { t, lang, setLang, translations } = useI18n();

  const langLabel = (code) => {
    const key = `nav.lang_${code}`;
    const value = t(key);
    return typeof value === "string" && !value.startsWith("nav.lang_")
      ? value
      : (code || "").toUpperCase();
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src="/aritz-logo.png" alt="Aritz logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t("nav.home")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("nav.about")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                {/* Using a generic icon for skills */}
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t("nav.skills")}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("nav.projects")}
              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineRead style={{ marginBottom: "2px" }} /> {t("nav.blog")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t("nav.resume")}
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              align="end"
              id="lang-switcher"
              title={langLabel(lang)}
              onClick={(e) => e.stopPropagation()}
            >
              {Object.keys(translations || {})
                .filter((code) => code !== lang)
                .map((code) => (
                  <NavDropdown.Item
                    key={code}
                    onClick={() => {
                      setLang(code);
                      updateExpanded(false);
                    }}
                    aria-label={`Switch language to ${langLabel(code)}`}
                  >
                    {langLabel(code)}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
