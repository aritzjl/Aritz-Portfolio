![LexFirma](/projects/lexfirma.png)

# LexFirma - Law firm platform

Full‑stack platform for intelligent management of tasks, documents and communications at a law firm, built for **LexFirma**.  
It automates task creation from emails, integrates Google services (Gmail, Calendar and Drive) and assists in generating legal drafts in PDF using AI.

---

## What it brings
- **Operational automation:** converts emails into tasks with dates and priority via AI.  
- **Centralized organization:** tasks, documents and deadlines synchronized in a single dashboard.  
- **Google integration:** bidirectional sync with Calendar and direct file management in Drive.  
- **Legal productivity:** generate legal drafts from PDFs, editable and ready to sign.  
- **Assisted supervision:** AI proposes actions; users validate or adjust before executing.

---

## Key features
- **Task and calendar management**
  - Create, edit and track tasks with dates and reminders.
  - Automatic sync with Google Calendar (create, update, delete).

- **Emails → Tasks (AI)**
  - Scheduled monitor that analyzes incoming emails with AI to suggest tasks and priorities.
  - Configurable filters by sender, keywords and confidence threshold.

- **Files and organization (AI + Drive)**
  - Detects email attachments and proposes client/project folders.
  - Manual approval from the panel before automatic upload to Drive.

- **Templates and legal drafts**
  - Load requirements in PDF → extract text → AI‑generated legal draft in Markdown.
  - Edit in the panel and download the final PDF with branding and signatures.

![LexFirmaTemplates](/projects/lexfirma-templates.png)

- **Users and roles**
  - JWT login and account management with differentiated permissions (admin / user).  
  - AI configuration (API key, model, temperature and drafting style).

---

## Short usage flow
1. Sign in and authorize Google services (Gmail, Calendar, Drive).  
2. In the **Tasks** panel, create or edit items that are automatically mirrored in the calendar.  
3. The **email monitor** analyzes new emails and suggests tasks or file uploads.  
4. In **Pending files**, validate AI suggestions before sending them to Drive.  
5. In **Templates**, generate and download legal drafts ready for review or signing.

---

## Technical explanation

### Frontend
- **Next.js 14 (App Router) + React + TypeScript:** fast, modular UI.  
- **Tailwind CSS + shadcn/ui (Radix):** accessible, consistent components.  
- **React Hook Form + Zod:** typed forms and declarative validation.  
- **Sections:** Login, Tasks, Users (admin), Templates, Pending files, Settings.  

### Backend
- **FastAPI (Python):** async API with automatic documentation.  
- **SQLite + SQLAlchemy:** lightweight persistence for users, tasks, OAuth tokens and pending files.  
- **Google APIs:** integration with Gmail, Calendar and Drive via OAuth 2.0 with granular scopes.  
- **APScheduler:** multi‑user background email monitor.  
- **AI (OpenAI):** email analysis and structured legal draft generation.  
- **PDFs:** text extraction with PyMuPDF and final rendering with ReportLab.  
- **Security:** JWT, password hashing (`passlib`) and strict validation with Pydantic v2.

### Integrations and patterns
- Centralized OAuth with automatic token refresh per user.  
- Concurrent mailbox processing based on token availability.  
- Human‑in‑the‑loop: AI suggests, user approves.  
- Modular separation: routers (endpoints), models/schemas (persistence) and services (AI/Google/PDF).  

---

## Result
A unified panel for the firm that combines automation, AI and human control:  
- Less administrative load.  
- Greater traceability across tasks and documents.  
- Consistent legal drafts generated and reviewed in minutes.

