import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particle from "../Particle";
import blogs from "./blogsData";
import { useI18n } from "../../i18n/I18nContext";

function BlogList() {
  const { t, lang } = useI18n();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ marginBottom: 10 }}>
          <span className="purple">Blog</span>
        </h1>
        <p style={{ color: "#cbb9d4", marginBottom: 30 }}>
          {t("blog.subtitle")}
        </p>

        <div className="blog-list">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="blog-item"
              aria-label={`Leer: ${b.title}`}
            >
              <Row className="align-items-stretch g-0">
                <Col xs={12} md={4} className="blog-thumb-wrap">
                  <img src={b.thumbnail} alt={b.title} className="blog-thumb" />
                </Col>
                <Col xs={12} md={8} className="blog-body">
                  <div className="blog-meta">
                    <span>
                      {new Date(b.date).toLocaleDateString(
                        lang === "en" ? "en-US" : "es-ES",
                        { year: "numeric", month: "short", day: "2-digit" }
                      )}
                    </span>
                  </div>
                  <h3 className="blog-title">{b.title}</h3>
                  <p className="blog-excerpt">{b.excerpt}</p>
                </Col>
              </Row>
            </Link>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default BlogList;
