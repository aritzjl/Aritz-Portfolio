![Identificador Policial](/projects/identificador.png)

Web assistant for police officers to identify people and vehicles from photos of official documents.  
It combines optical recognition (OCR) and AI models to securely extract, validate and record structured data in an automated way.

---

## What it brings
- **Speed:** instant data extraction from images, avoiding manual entry.
- **Accuracy:** semantic validation and normalization of data using AI.
- **Integration:** connection to the corporate database to detect duplicates and update records.
- **Automation:** generation of the identification record and vehicle‑control log in a single flow.
- **Security:** controlled handling of sensitive data and access restricted to authorized staff.

---

## Key features
- **Person identification**
  - Upload photos of ID card, residence card, passport or driver’s license.
  - OCR and intelligent data extraction with AI (normalization and validation).
  - Automatic face crop and optimized image storage.
  - Case creation in the Identification Book and the Involved‑in‑processes register.

![Identificador Policial](/projects/identificador-review.png)

- **Vehicle controls**
  - Capture and process vehicle registration documents and photos.
  - Create or update involved vehicles in the system.
  - Log of controls with class, shift and reason details.

- **Support lists**
  - Identification quality, reasons for involvement, service shifts and control classes.

---

## Short usage flow
1. Access with corporate credentials.  
2. Capture or upload document images.  
3. Automatic data extraction via OCR + AI.  
4. Review, validate and merge with existing data in the corporate database.  
5. Create the case and log the control if applicable.

---

## Technical explanation

Summary of technologies and architecture used.

### Frontend
- **Vue 3 + TypeScript + Vite** (reactive, lightweight UI).  
- **Tailwind CSS 4** for fast, responsive layout.  
- Client‑side image compression before upload.  
- API configured via `VITE_API_BASE_URL`.

### Backend
- **FastAPI (Python)** as the main API.  
- **OCR with docTR** to extract text from images.  
- **Semantic AI:** *OpenAI GPT‑4o* to structure data into a typed JSON.  
- **SQL Server (ODBC/pyodbc)** as corporate database.  
- **Image processing:** OpenCV + Pillow + face_recognition to locate and crop faces.  
- **Secure integration:** internal HTTP notifications after image upload/update.  
- Automatic documentation and validation via *Pydantic* and *Swagger UI*.

### Environment and deployment
- Environment variables for API keys and connection settings.  
- ODBC Driver 18 for SQL Server connectivity.  
- Separate backend and frontend, configurable per environment.  

---

## Notes
- All processed information is confidential and restricted to authorized personnel.  
- Images are optimized and stored in a controlled manner, deleting temporary files.  
- Secrets and sensitive configuration are kept out of the repository.

