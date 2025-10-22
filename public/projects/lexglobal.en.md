![LexGlobal](/projects/lexglobal.png)
# LexGlobal — Analyzer of court documents (Garnishments and AVP)

Application built for **LexGlobal**, a law firm specialized in enforcement and garnishments.  
The system automates the reading, classification and analysis of judicial PDFs (such as LexNET notices or email attachments), using large language models (LLMs) to precisely identify the document type and its legal context.

---

## What it brings
- **Legal automation:** instant classification of court rulings and official notices without manual effort.  
- **Semantic accuracy:** LLMs interpret legal text and assign the correct category.  
- **Productivity:** process large volumes of documents or batches with a single click.  
- **Control and traceability:** detailed JSON reports with metrics, accuracy and token usage.  
- **Scalability:** adaptable to new document types or legal criteria without changing code.

---

## Key features
- **Automatic PDF classification**
  - Analyzes the text of rulings and returns a single legal category (CS, SALARY, PENSION, BENEFIT, AVP_POS, AVP_NEG or OTHERS).  
  - Two‑pass flow for AVP cases, refining the decision between positives and negatives.  

- **Web interface and CLI**
  - Web (Flask): quick document upload, text preview and instant result.  
  - CLI: batch processing, report generation and reproducible metrics.

- **Advanced text extraction**
  - Uses `unstructured` tuned for Spanish, handling complex, multi‑page documents.

- **Reports and indicators**
  - Results exported as JSON (`informe.json`, `informe-errores.json`, `avp-informe.json`) with accuracy metrics and token usage.  
  - Detailed logs of timing, hits and classification errors.

---

## Short usage flow
1. Upload a PDF from the web interface or run a batch from the CLI.  
2. The system extracts the text with `unstructured` and sends it to the Groq LLM.  
3. The response is validated with a JSON contract (Pydantic) to ensure consistency.  
4. If the detected category is AVP, a second specialized pass is executed.  
5. Results are shown on screen or exported as a JSON report.

---

## Technical explanation

### Architecture
- **Frontend:** Flask web with Jinja2 templates and custom CSS (LexGlobal / TenBeltz branding).  
- **Backend:** independent Python modules (`pdf_to_text`, `ai_client`, `avp_analyzer`, `main`) for extraction, analysis and evaluation.  
- **AI:** integration with **Groq** API (Llama 4 Maverick / Kimi models) for semantic JSON classification.  
- **Validation:** `Pydantic v2` guarantees valid structures (`EmbargoAnalysis`).  
- **CLI:** commands with `argparse` and reproducible reports.  

### Main technologies
- **Groq API:** fast inference and native JSON validation (`response_format: "json_object"`).  
- **Flask:** simple web UI protected by session authentication.  
- **unstructured:** Spanish text extraction from complex PDFs.  
- **Pydantic v2:** validation contract for robust error handling.  
- **Standard Python:** CLI scripts, logging and simple `deploy.sh` deployment.

---

## Result
A tool that turns a repetitive, manual legal process into an automated and auditable task capable of processing hundreds of court documents in minutes.  
LexGlobal can now classify garnishments, notices and orders with semantic precision and full traceability, reducing errors and accelerating internal workflows.

---

> Project developed by **TenBeltz** for **LexGlobal Abogados**.  
> Focus on legal automation, structured validation and semantic AI analysis.

