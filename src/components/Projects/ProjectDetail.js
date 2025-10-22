import React, { useEffect, useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Particle from "../Particle";

function ProjectDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setError("");
        setContent("");
        const res = await fetch(`/projects/${slug}.md`, {
          signal: controller.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          throw new Error(`Detalle no encontrado: ${slug}`);
        }
        const text = await res.text();
        setContent(text);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || "No se pudo cargar el detalle.");
        }
      }
    };
    load();
    return () => controller.abort();
  }, [slug]);

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
          <p style={{ color: "white" }}>Cargando contenido…</p>
        )}
      </Container>
    </Container>
  );
}

export default ProjectDetail;
