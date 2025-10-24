// Central list of blog posts. Each item drives the list view
// and links to its Markdown in `/public/blogs/{slug}.md`.
// Thumbnails can be imported from src assets for bundling.

import thumbPdfParse from "../../Assets/Blogs/ParsersVS.png";

const blogs = [
  {
    slug: "pdf-parse",
    title: "PDF Parse: cómo preparar documentos para que una IA los entienda",
    date: "2025-10-23",
    // Short summary for preview cards
    excerpt:
      "Los modelos de IA no leen PDFs directamente. Antes hay que traducirlos a datos estructurados. Comparo Unstructured, Docling y LlamaParse y cuándo usar cada uno.",
    // Requested thumbnail for this post
    thumbnail: thumbPdfParse,
  },
];

export default blogs;
