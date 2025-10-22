import React, { useEffect, useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Particle from "../Particle";
import { useI18n } from "../../i18n/I18nContext";

function ProjectDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { lang, t } = useI18n();

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setError("");
        setContent("");
        // Try language-specific markdown first when EN; fallback to default
        const mdCandidate = lang === "en" ? `/projects/${slug}.en.md` : `/projects/${slug}.md`;
        let res = await fetch(mdCandidate, {
          signal: controller.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          // fallback to default Spanish file
          res = await fetch(`/projects/${slug}.md`, { signal: controller.signal, cache: "no-cache" });
        }
        if (!res.ok) {
          throw new Error(t("projects.detail.not_found", slug));
        }
        const text = await res.text();
        setContent(text);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || t("projects.detail.load_error"));
        }
      }
    };
    load();
    return () => controller.abort();
  }, [slug, lang, t]);

  const title = useMemo(() => {
    const map = {
      chatify: "Chatify",
      "bits-of-code": "Bits-0f-C0de",
    };
    return map[slug] || slug;
  }, [slug]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ marginBottom: 20 }}>
          <strong className="purple">{title}</strong>
        </h1>
        {error ? (
          <p style={{ color: "#ffb3b3" }}>{error}</p>
        ) : content ? (
          <div className="project-markdown" style={{ color: "white", textAlign: "left" }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              linkTarget="_blank"
            >
              {content}
            </ReactMarkdown>
          </div>
        ) : (
          <p style={{ color: "white" }}>{t("projects.detail.loading")}</p>
        )}
      </Container>
    </Container>
  );
}

export default ProjectDetail;
