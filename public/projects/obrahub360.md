![ObraHub360](/projects/obrahub360.png)
# ObraHub360 — Plataforma profesional para el sector de la construcción

**ObraHub360** es una plataforma digital que conecta a autónomos y empresas del sector de la construcción.  
Permite crear perfiles verificados, buscar profesionales por especialidad y experiencia, y valorar el trabajo entre empresas para fortalecer la confianza y la reputación del sector.

🔗 **Sitio:** [https://platforma.obrahub360.es](https://platforma.obrahub360.es)

---

## Qué aporta
- **Conexión y visibilidad:** crea un punto de encuentro digital entre profesionales y empresas constructoras.  
- **Verificación real:** garantiza la autenticidad de los perfiles mediante OCR y validación documental.  
- **Transparencia y reputación:** el sistema de valoraciones fomenta la confianza entre contratistas y colaboradores.  
- **Modelo sostenible:** incorpora un sistema de suscripción premium con PayPal para acceso a funciones avanzadas.  

---

## Funcionalidades clave
- **Registro guiado en tres pasos:** alta de autónomos o empresas con subida de documentación y verificación automática.
- 
![ObraHub360](/projects/obrahub-signup.png)

- **Verificación documental con IA:** lectura OCR de imágenes o PDFs y validación de DNI/NIE/CIF.  
- **Búsqueda avanzada:** filtros por provincia, tipo (autónomo o empresa), especialidad y años mínimos de experiencia.  

![ObraHub360](/projects/obrahub-search.png)

- **Perfiles públicos y reputación:** páginas personalizadas con descripción, imágenes, especializaciones y reseñas.

![ObraHub360](/projects/obrahub-profile.png)

- **Sistema de valoraciones:** puntuaciones 1–5 estrellas con media visible en los resultados de búsqueda.  
- **Suscripción PayPal:** integración completa de pagos y validación del estado de suscripción premium.  
- **Autenticación JWT:** login, registro y persistencia de sesión.  
- **Documentación de API automática:** OpenAPI + Swagger UI para exploración y testing.  

---

## Público objetivo
- **Promotores, constructoras y particulares** que buscan profesionales verificados con garantías.  
- **Autónomos y empresas** que desean destacar su experiencia y construir reputación digital.  

---

## Flujo de uso (corto)
1. Un profesional se registra y sube su documentación (DNI/NIE/CIF).  
2. El sistema analiza los documentos con OCR y valida la identidad.  
3. Una vez verificado, su perfil pasa a ser público y visible en las búsquedas.  
4. Los usuarios pueden filtrar profesionales por provincia, tipo o especialidad.  
5. Las empresas pueden valorar la colaboración, generando una media de reputación.  
6. Los usuarios premium gestionan su suscripción activa mediante PayPal.  

---

## Explicación técnica

### Arquitectura
- **Monorepo** con dos paquetes principales:  
  - `obrahub-backend`: API REST construida con **Django + Django REST Framework (DRF)**.  
  - `obrahub-client-web`: aplicación **SPA en Vue 3 + TypeScript**.  

---

### Backend (Django + DRF)
- **Autenticación:** JWT (SimpleJWT) con sesiones persistentes.  
- **OCR y verificación documental:**  
  - Extracción de texto con **PyMuPDF** (PDF) y **EasyOCR** (imágenes).  
  - Validación de patrones de DNI/NIE/CIF.  
  - Análisis heurístico adicional con **OpenAI LLM** para confirmar la validez del documento.  
- **Dominio de negocio:** usuarios, empresas, especializaciones, reseñas y suscripciones.  
- **Pagos:** integración **PayPal Subscriptions (OAuth2)**, con verificación del estado y próxima fecha de cobro.  
- **Documentación:** esquema OpenAPI con **drf-spectacular** (Swagger + Redoc).  
- **Archivos y CORS:** gestión de media y CORS seguro para frontends autorizados.  

---

### Frontend (Vue 3 + Vite + TypeScript)
- **SPA modular:** construido con Composition API y Vue Router.  
- **Estilos:** TailwindCSS y SweetAlert2 para UI dinámica y mensajes interactivos.  
- **Servicios API:** cliente Axios centralizado (`VITE_API_BASE_URL`) con manejo de JWT y refresco automático.  
- **Vistas principales:**  
  - **Inicio:** acceso a registro o búsqueda de profesionales.  
  - **Buscar:** filtros avanzados y paginación.  
  - **Registro:** flujo paso a paso con validación OCR previa.  
  - **Perfil:** edición y actualización de datos, imágenes y especializaciones.  
  - **Pagos:** integración PayPal para activar suscripciones premium.  

---

## Tecnologías utilizadas
- **Backend:** Django 5, DRF, SimpleJWT, drf-spectacular, django-filters.  
- **OCR y verificación:** EasyOCR, PyMuPDF, OpenCV, NumPy, SciPy.  
- **IA de apoyo:** OpenAI API (validación heurística documental).  
- **Pagos:** PayPal Subscriptions (OAuth2).  
- **Frontend:** Vue 3, Vite, TypeScript, TailwindCSS, Axios, Vue Router, SweetAlert2.  

---

## Resultado
Una plataforma robusta y accesible que digitaliza la conexión entre profesionales y empresas del sector de la construcción.  
**ObraHub360** combina verificación documental con IA, reputación compartida y suscripción premium, impulsando la transparencia y la profesionalización del mercado.

---

> Proyecto desarrollado por **TenBeltz**.  
> Enfoque en confianza, reputación y verificación documental mediante OCR + IA.