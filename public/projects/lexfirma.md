![LexFirma](/projects/lexfirma.png)

# LexFirma - Despacho jurídico

Plataforma full-stack para la gestión inteligente de tareas, documentos y comunicaciones en un despacho jurídico.  
Automatiza la creación de tareas a partir de emails, integra los servicios de Google (Gmail, Calendar y Drive) y asiste en la generación de escritos legales en PDF mediante IA.

---

## Qué aporta
- **Automatización operativa:** convierte correos en tareas con fechas y prioridad mediante IA.  
- **Organización centralizada:** tareas, documentos y plazos sincronizados en un solo panel.  
- **Integración Google:** sincronización bidireccional con Calendar y gestión directa de archivos en Drive.  
- **Productividad jurídica:** generación de borradores legales a partir de PDFs, editables y listos para firmar.  
- **Supervisión asistida:** la IA propone acciones y el usuario valida o ajusta antes de ejecutar.

---

## Funcionalidades clave
- **Gestión de tareas y calendario**
  - Creación, edición y seguimiento de tareas con fechas y recordatorios.
  - Sincronización automática con Google Calendar (alta, modificación o eliminación).

- **Emails → Tareas (IA)**
  - Monitor programado que analiza los correos entrantes con IA para sugerir tareas y prioridades.
  - Filtros configurables por remitente, palabras clave y umbral de confianza.

- **Archivos y organización (IA + Drive)**
  - Detección de adjuntos en los emails y propuesta de carpeta de cliente o proyecto.
  - Aprobación manual desde el panel antes de subir automáticamente a Drive.

- **Plantillas y escritos legales**
  - Carga de requerimientos en PDF → extracción de texto → borrador legal generado en Markdown por IA.
  - Edición directa en el panel y descarga del PDF final formateado con logotipos, tipografía y firmas.

![LexFirmaTemplates](/projects/lexfirma-templates.png)


- **Usuarios y roles**
  - Login JWT y gestión de cuentas con permisos diferenciados (admin / usuario).  
  - Configuración de la IA (API key, modelo, temperatura y estilo de redacción).

---

## Flujo de uso (corto)
1. El usuario inicia sesión y autoriza los servicios de Google (Gmail, Calendar, Drive).  
2. En el panel de **Tareas**, crea o edita elementos que se reflejan automáticamente en su calendario.  
3. El **monitor de emails** analiza los nuevos correos y propone tareas o subidas de archivos.  
4. En **Archivos pendientes**, el usuario valida las sugerencias de la IA antes de enviarlas a Drive.  
5. En **Plantillas**, genera y descarga borradores legales listos para revisión o firma.

---

## Explicación técnica

### Frontend
- **Next.js 14 (App Router) + React + TypeScript:** interfaz rápida y modular.  
- **Tailwind CSS + shadcn/ui (Radix):** componentes accesibles y consistentes.  
- **React Hook Form + Zod:** formularios tipados y validación declarativa.  
- **Secciones:** Login, Tareas, Usuarios (admin), Plantillas, Archivos pendientes y Configuración.  


### Backend
- **FastAPI (Python):** API asíncrona y documentada automáticamente.  
- **SQLite + SQLAlchemy:** persistencia ligera para usuarios, tareas, tokens OAuth y archivos pendientes.  
- **Google APIs:** integración con Gmail, Calendar y Drive mediante OAuth 2.0 con scopes granulares.  
- **APScheduler:** monitor de correos multiusuario en segundo plano.  
- **IA (OpenAI):** análisis de emails y generación de borradores legales estructurados.  
- **PDFs:** extracción de texto con PyMuPDF y render final con ReportLab.  
- **Seguridad:** JWT, hashing de contraseñas (`passlib`) y validación estricta con Pydantic v2.

### Integraciones y patrones
- OAuth centralizado con refresco automático de tokens por usuario.  
- Procesamiento concurrente de buzones según disponibilidad de tokens.  
- Human-in-the-loop: la IA sugiere, el usuario aprueba.  
- Separación modular: routers (endpoints), models/schemas (persistencia) y servicios (IA/Google/PDF).  

---

## Resultado
Un panel unificado para el despacho que combina automatización, IA y control humano:  
- Menos carga administrativa.  
- Mayor trazabilidad en tareas y documentos.  
- Borradores legales coherentes, generados y revisados en minutos.
