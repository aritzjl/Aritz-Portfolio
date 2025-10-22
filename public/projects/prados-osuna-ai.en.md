![Prados-Osuna AI](/projects/prados-osuna-ai.png)

# Prados‑Osuna AI — Automated case review and legal notices integrated with MN Program

Web system built for the law firm **Prados‑Osuna Abogados**. It integrates with **MN Program** (the firm’s management software) to evaluate cases with AI, calculate statute of limitations, generate notices, send emails and produce auditable PDF receipts — all with full traceability.

---

## What it brings
- **Operational efficiency:** eliminates manual review of notes and expiry dates.  
- **Direct integration with MN Program:** reads and updates cases, notes and parties through its API.  
- **Precision and consistency:** AI interprets internal notes and calculates deadlines with consistent criteria.  
- **Full traceability:** each communication is stored in IMAP and accompanied by a PDF receipt.  
- **Secure control:** authentication, test mode and audit of sensitive operations.

---

## Key features
- **Automatic AI evaluation**  
  - Analyzes internal case notes (extracted from MN Program) to get status, expiry date and license plate.  
- **Smart deadline calculation**  
  - Determines the expiry batch (February, July, September) and whether notice is appropriate.  
- **Review and send panel**  
  - Web interface showing processed cases, with the option to review and edit before sending.  

![Prados-Osuna AI](/projects/prados-result.png)

- **MN Program integration**
  - Retrieves cases, notes and parties (adverse, insurers, vehicles).  
  - Optionally updates notes with evaluation results and notice date.  
- **Automated, traceable notification**  
  - SMTP sending with control copy and saving in the IMAP “Sent” folder.  
  - Generates PDF receipts with the firm’s logo and ZIP packaging.  
- **Advanced settings**
  - API keys, SMTP/IMAP credentials, MN Program token and toggles to enable/disable sensitive features (send, update notes, AI).  

![Prados-Osuna AI](/projects/prados-congif.png)

---

## Short usage flow
1. User accesses the password‑protected panel.  
2. The system queries **MN Program** via its API to fetch cases and notes.  
3. AI evaluates each case and calculates expiry date and operational batch.  
4. User reviews results, corrects if needed and confirms sending.  
5. The system sends one email per case, stores it in IMAP, generates the PDF receipt and offers a bulk ZIP download.  
6. (Optional) Updates corresponding notes in MN Program with the results and logs.

---

## Technical explanation

### Architecture
- **Backend:** Python + Flask with server‑side rendering (Jinja2).  
- **External integration:** **MN Program** REST API for CRUD operations on cases, notes and parties.  
- **Semantic AI:** OpenAI Responses API with structured validation (Pydantic model).  
- **Mail and traceability:** SMTP sending + IMAP logging, PDF receipt generation and ZIP packaging.  

### Main modules
- `app.py`: routes, auth, MN Program connection, AI orchestration and email sending.  
- `ai_evaluador.py`: AI client for semantic analysis with the `EvaluacionExpediente` model.  
- `utils.py`: helpers (HTML cleaning, PDF generation, ZIP, status helpers).  
- `templates/`: Jinja views (login, results, settings, help).  

---

## Technologies used
- **Flask + Jinja2:** lightweight web server with server‑rendered UI.  
- **TailwindCSS (CDN):** fast, clean design.  
- **OpenAI Python SDK:** structured extraction of legal data from free text.  
- **Pydantic v2:** validation and typing of AI responses.  
- **MN Program API:** REST integration to read and update cases and notes.  
- **requests:** HTTP client to consume MN Program API with error handling.  
- **BeautifulSoup (bs4):** cleanup of MN Program note HTML.  
- **ReportLab:** PDF receipt generation.  
- **smtplib + imaplib:** email sending and storage in real mailboxes.  
- **zipfile:** ZIP packaging of receipts.  
- **dotenv / JSON config:** secure management of credentials and configuration.  

---

## Security and deployment
- Environment variables and tokens managed via `.env` or JSON config.  
- Sessions with controlled expiration and mandatory authentication.  
- Safe test mode (no real emails or writes in MN Program).  
- `deploy.sh` for background execution with logs (`server.log`) and PID control.

---

## Result
An end‑to‑end tool that connects **MN Program**’s legal infrastructure with an intelligent document automation system.  
**Prados‑Osuna AI** cuts administrative load, ensures legal consistency and offers complete traceability from deadline detection to the issuance of each notice.

---

> Project developed by **TenBeltz** for **Prados‑Osuna Abogados**.  
> Focus on legal automation, integration with MN Program and full traceability of communications.

