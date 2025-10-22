![MySomnia](/projects/my-somnia.png)
# Deep, distraction‑free writing

Site: https://mysomnia.com

Somnia is a web writing app focused on flow and concentration. Inspired by FocusWriter, it combines a minimal editor with visual customization, PDF export, AI assistance, text‑to‑speech and transcription, plus admin tools and backups.

## What it brings
- Focus: full‑screen editor with typography and colors designed for better reading and writing.
- Customization: per‑user themes (color, gradient or background image, blur, darkness, typography, text size).
- Productivity: one‑click PDF export and AI‑assisted edit actions.
- Accessibility: listen to the text (TTS) and transcribe from the microphone (STT).
- Operations: API logs for admins and a backup endpoint that bundles DB + files.

## Key features
- Documents
  - Create, edit, list and delete documents per user.
  - Rich editor (Tiptap) with shortcuts and alignment.
  - Direct export to PDF and download.

- Themes and ambience
  - Background by color, gradient or image (with adjustable blur and opacity).
  - Wallpaper uploads: stored in MinIO and served via the API.
  - Per‑user persistence and quick selection of the active theme.

![MySomnia](/projects/somnia-themes.png)

- AI assistance
  - Actions on the text: formalize, improve, correct, summarize and lengthen.

- Voice
  - TTS: generates audio from the document text and plays it in the browser.
  - STT: records audio in the browser, transcribes and returns text.

- Administration and operations
  - API logs with filters and stats (admins only).
  - Backup: protected endpoint that generates a ZIP with PostgreSQL dump and MinIO objects and sends it by email.

## Short usage flow
1. Authenticate (sign up and login with JWT).
2. Create/edit documents in the full‑screen editor.
3. Adjust ambience from the Theme Manager (color, gradient or image).
4. Export to PDF, listen to the text or transcribe quick notes.
5. As admin, review logs and stats; trigger backups when needed.

---

## Technical explanation

Summary of technologies and architectural choices used in Somnia.

- Frontend
  - React + TypeScript + Vite (reactive UI and fast build).
  - Tailwind CSS and Headless UI for styles and accessible components.
  - Editor: Tiptap (on ProseMirror) for rich editing with fine content control.
  - Central API config via `VITE_API_URL`.

- Backend (API)
  - FastAPI (Python) with Uvicorn.
  - Modeling/DB: SQLAlchemy 2.x and Alembic (migrations). PostgreSQL as database.
  - Validation: Pydantic v2. Auth: JWT (OAuth2 password flow with `python-jose` and `passlib`).
  - File storage: MinIO (S3 compatible) with `media` bucket and public read policy for serving backgrounds and exports.
  - Export to PDF: WeasyPrint.
  - AI: Groq LLM (Llama 3.1 8B instant) for text editing; Groq Whisper for transcription (STT); Cartesia TTS for voice.
  - Logging middleware: captures method, route, user, IP, user‑agent, body (secrets stripped), latency and errors into `api_logs`; query and stats endpoints for admins.
  - Backup: uses `pg_dump` for DB + ZIP bundling along with MinIO objects; configurable SMTP sending.

- Docker and Devcontainers
  - Dev Container (VS Code): base image `python:3.10-slim` with Node 20 installed; forwarded ports 8011 (API), 5175 (Frontend), 5432 (PostgreSQL), 9000/9001 (MinIO). `postCreate` scripts install backend and frontend deps.
  - Docker Compose (dev/host): orchestrates DB, object storage, backend and frontend with persistent volumes.
  - Helper scripts: `scripts/start_backend` (migrations + Uvicorn) and `scripts/start_frontend` (Vite). Optionally `./docker_start.sh` and `./docker_clean.sh` from host.


Notes
- MinIO applies a public read policy to the bucket to serve files directly from the API.
- Logging middleware excludes docs routes and limits field sizes to avoid performance degradation and secret logging.
- In development, scripts ensure idempotent dependency installation and wait for DB readiness before starting the API.

