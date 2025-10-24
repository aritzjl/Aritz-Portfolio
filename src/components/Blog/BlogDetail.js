import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Particle from "../Particle";
import { useI18n } from "../../i18n/I18nContext";
import blogs from "./blogsData";

function BlogDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { lang } = useI18n();
  const meta = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      try {
        setError("");
        setContent("");
        const mdCandidate = lang === "en" ? `/blogs/${slug}.en.md` : `/blogs/${slug}.md`;
        let res = await fetch(mdCandidate, {
          signal: controller.signal,
          cache: "no-cache",
        });
        if (!res.ok) {
          // fallback to default Spanish file
          res = await fetch(`/blogs/${slug}.md`, { signal: controller.signal, cache: "no-cache" });
        }
        if (!res.ok) throw new Error(lang === "en" ? "Post not found" : "Entrada no encontrada");
        const text = await res.text();
        setContent(text);
      } catch (e) {
        if (e.name !== "AbortError") {
          setError(e.message || (lang === "en" ? "Load error" : "Error al cargar"));
        }
      }
    };
    load();
    return () => controller.abort();
  }, [slug, lang]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {meta && (
          <p className="blog-meta" style={{ marginBottom: 10 }}>
            {new Date(meta.date).toLocaleDateString(
              lang === "en" ? "en-US" : "es-ES",
              { year: "numeric", month: "long", day: "2-digit" }
            )}
          </p>
        )}
        {error ? (
          <p style={{ color: "#ffb3b3" }}>{error}</p>
        ) : content ? (
          <div className="blog-markdown" style={{ color: "white", textAlign: "left" }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} linkTarget="_blank">
              {content}
            </ReactMarkdown>
          </div>
        ) : (
          <p style={{ color: "white" }}>Cargando…</p>
        )}
      </Container>
    </Container>
  );
}

export default BlogDetail;
