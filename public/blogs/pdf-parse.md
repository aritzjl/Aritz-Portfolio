# 🧩 PDF Parse: cómo preparar documentos para que una IA los entienda

En vídeo (YouTube): https://www.youtube.com/watch?v=N2vUe7LCRXs

## Introducción
Cuando hablamos de inteligencia artificial, solemos pensar en modelos potentes, embeddings y arquitecturas complejas. Pero hay un paso previo, silencioso y absolutamente crítico: darle buena información. Y la mayoría de esa información viene en forma de documentos PDF o imágenes.

El problema es que los modelos de IA no pueden ver ni leer esos archivos directamente. Antes, necesitan que alguien traduzca el contenido a un formato estructurado que puedan entender. Ese proceso se llama document parsing, y es mucho más importante (y complejo) de lo que parece.

## El reto: extraer estructura, no solo texto
Sacar texto de un PDF no es difícil. Lo difícil es mantener la estructura semántica del documento:
- dónde empieza y acaba una tabla,
- qué texto pertenece a un título,
- cómo se relacionan los párrafos,
- qué imágenes acompañan a qué secciones.

Un simple extractor de texto puede darte miles de líneas sin contexto. Y si alimentas eso a un LLM, el resultado será... confusión.

## Tres soluciones para convertir PDFs en conocimiento
Para enfrentar este problema, existen varias librerías que se encargan de transformar los documentos en datos estructurados. He probado tres de las más destacadas:

### 🧠 1. Unstructured
Una de las opciones más maduras y utilizadas. Permite procesar distintos tipos de archivos (PDF, DOCX, HTML, emails, imágenes, etc.) y convertirlos en elementos estructurados. Ideal para pipelines rápidos o entornos donde la velocidad y la simplicidad importan.

Su punto débil: los resultados pueden perder precisión en PDFs grandes o con mucho formato visual.

### 👁️ 2. Docling
Una solución más reciente, impulsada por la comunidad de Hugging Face. Aprovecha modelos multimodales (visión + lenguaje) para entender la jerarquía visual de los documentos. Funciona especialmente bien con informes, facturas o papers científicos con tablas y gráficos.

Eso sí: requiere más recursos y su API aún está evolucionando.

### 🧩 3. LlamaParse
La más avanzada del grupo. Parte del ecosistema de LlamaIndex, usa LLMs para reconstruir la estructura del documento con comprensión semántica real. Es capaz de entender el contenido y devolverlo en formatos como JSON o Markdown perfectamente estructurados.

El inconveniente: es una solución de pago y depende de la nube.

## Comparativa general

| Librería     | Precisión | Velocidad | Coste   | Ideal para                         |
|--------------|-----------|-----------|---------|------------------------------------|
| Unstructured | ⭐⭐        | ⭐⭐⭐⭐      | Gratis  | Procesos simples / RAG básico      |
| Docling      | ⭐⭐⭐⭐      | ⭐⭐        | Gratis  | Documentos complejos / visuales    |
| LlamaParse   | ⭐⭐⭐⭐⭐     | ⭐⭐        | De pago | Parsing semántico con LLM          |

## Conclusión
No existe una herramienta perfecta. Depende de lo que necesites:

- Si buscas algo rápido y gratuito, empieza con Unstructured.
- Si tus documentos tienen estructura visual compleja, prueba Docling.
- Y si necesitas precisión semántica y formato impecable, LlamaParse es otra liga.

En mi caso, suelo combinar varias según el proyecto:
- 🧩 Unstructured para OCR,
- 👁️ Docling para estructura visual,
- 🧠 LlamaParse para semántica y contexto.

## Verlo en acción
Hace poco publiqué un vídeo en YouTube donde muestro los tres en acción: cómo procesan el mismo documento, qué resultados devuelven y en qué casos falla cada uno.

### 🎥 Puedes verlo aquí:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/N2vUe7LCRXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cierre
La calidad de una IA depende tanto de sus modelos como de sus datos. Y en el caso de los documentos, entender su estructura es tan importante como entender su contenido.
