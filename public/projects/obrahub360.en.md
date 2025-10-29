![ObraHub360](/projects/obrahub360.png)
# ObraHub360 — Professional platform for the construction sector

**ObraHub360** is a digital platform that connects contractors and construction companies.  
It enables verified profiles, searching professionals by specialty and experience, and mutual ratings between companies to strengthen trust and reputation in the sector.

🔗 **Site:** [https://platforma.obrahub360.es](https://platforma.obrahub360.es)

---

## What it brings
- **Connection and visibility:** a digital meeting point between professionals and construction companies.  
- **Real verification:** authenticity of profiles via OCR and document validation.  
- **Transparency and reputation:** rating system fosters trust between contractors and collaborators.  
- **Sustainable model:** premium subscription via PayPal for access to advanced features.  

---

## Key features
- **Guided three‑step signup:** register contractors or companies with document upload and automatic verification.

![ObraHub360](/projects/obrahub-signup.png)

- **AI document verification:** OCR over images or PDFs and DNI/NIE/CIF validation.  
- **Advanced search:** filters by province, type (contractor or company), specialty and minimum years of experience.  

![ObraHub360](/projects/obrahub-search.png)

- **Public profiles and reputation:** personalized pages with description, images, specializations and reviews.

![ObraHub360](/projects/obrahub-profile.png)

- **Ratings:** 1–5 star scores with average shown in search results.  
- **PayPal subscription:** full payment integration and validation of premium subscription state.  
- **JWT authentication:** login, registration and session persistence.  
- **Automatic API docs:** OpenAPI + Swagger UI for exploration and testing.  

---

## Target audience
- **Developers, construction companies and individuals** seeking verified professionals with guarantees.  
- **Contractors and companies** who want to showcase experience and build a digital reputation.  

---

## Short usage flow
1. A professional signs up and uploads documentation (DNI/NIE/CIF).  
2. The system analyzes documents with OCR and validates identity.  
3. Once verified, the profile becomes public and visible in search.  
4. Users filter professionals by province, type or specialty.  
5. Companies can rate collaborations, building an average reputation score.  
6. Premium users manage their PayPal subscription.  

---

## Technical explanation

### Architecture
- **Monorepo** with two main packages:  
  - `obrahub-backend`: REST API built with **Django + Django REST Framework (DRF)**.  
  - `obrahub-client-web`: **SPA in Vue 3 + TypeScript**.  

---

### Backend (Django + DRF)
- **Authentication:** JWT (SimpleJWT) with persistent sessions.  
- **OCR and document verification:**  
  - Text extraction with **PyMuPDF** (PDF) and **EasyOCR** (images).  
  - DNI/NIE/CIF pattern validation.  
  - Additional heuristic analysis with **OpenAI LLM** to confirm validity.  
- **Business domain:** users, companies, specializations, reviews and subscriptions.  
- **Payments:** **PayPal Subscriptions (OAuth2)** integration, verifying status and next charge date.  
- **Documentation:** OpenAPI schema with **drf‑spectacular** (Swagger + Redoc).  
- **Files and CORS:** media handling and secure CORS for authorized frontends.  

---

### Frontend (Vue 3 + Vite + TypeScript)
- **Modular SPA:** built with Composition API and Vue Router.  
- **Styles:** TailwindCSS and SweetAlert2 for dynamic UI and interactive messages.  
- **API services:** centralized Axios client (`VITE_API_BASE_URL`) with JWT handling and auto‑refresh.  
- **Main views:**  
  - **Home:** access to signup or professional search.  
  - **Search:** advanced filters and pagination.  
  - **Signup:** step‑by‑step flow with prior OCR validation.  
  - **Profile:** edit and update data, images and specializations.  
  - **Payments:** PayPal integration to activate premium subscriptions.  

---

## Technologies used
- **Backend:** Django 5, DRF, SimpleJWT, drf‑spectacular, django‑filters.  
- **OCR and verification:** EasyOCR, PyMuPDF, OpenCV, NumPy, SciPy.  
- **Supporting AI:** OpenAI API (heuristic document validation).  
- **Payments:** PayPal Subscriptions (OAuth2).  
- **Frontend:** Vue 3, Vite, TypeScript, TailwindCSS, Axios, Vue Router, SweetAlert2.  

---

## Result
A robust, accessible platform that digitizes the connection between professionals and companies in the construction sector.  
**ObraHub360** combines AI‑powered document verification, shared reputation and premium subscription, driving transparency and professionalization in the market.

---

> Project developed by **[TenBeltz](https://tenbeltz.com)**.  
> Focus on trust, reputation and document verification via OCR + AI.

