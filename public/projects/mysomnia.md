![MySomnia](/projects/my-somnia.png)
# Escritura profunda sin distracciones

Sitio: https://mysomnia.com

Somnia es una aplicación web de escritura enfocada en el flujo y la concentración. Inspirada en FocusWriter, combina un editor minimalista con personalización visual, exportación a PDF, asistencia con IA, lectura en voz alta y transcripción, además de herramientas de administración y copias de seguridad.

## Qué aporta
- Enfoque: editor a pantalla completa sin ruido, con tipografía y colores pensados para leer y escribir mejor.
- Personalización: temas por usuario (color, degradado o imagen de fondo, desenfoque, oscuridad, tipografía, tamaño de texto).
- Productividad: exportación a PDF con un clic, y acciones de edición asistidas por IA.
- Accesibilidad: lectura del texto (TTS) y transcripción desde el micrófono (STT).
- Operativa: logs de API para administradores y endpoint de backup que empaqueta DB + ficheros.

## Funcionalidades clave
- Documentos
  - Crear, editar, listar y borrar documentos por usuario.
  - Editor enriquecido (Tiptap) con soporte de atajos y alineación.
  - Exportación directa a PDF y descarga.

- Temas y ambientación
  - Fondo por color, degradado o imagen (con desenfoque y opacidad regulables).
  - Carga de wallpapers: se almacenan en MinIO y se sirven vía la API.
  - Persistencia por usuario y selección rápida del tema activo.

![MySomnia](/projects/somnia-themes.png)


- Asistencia de IA
  - Acciones sobre el texto: formalizar, mejorar, corregir, resumir y alargar.

- Voz
  - TTS: genera audio a partir del texto del documento y lo reproduce en el navegador.
  - STT: graba audio desde el navegador, transcribe y devuelve el texto.

- Administración y operativa
  - Logs de API con filtros y estadísticas (solo administradores).
  - Backup: endpoint protegido que genera un ZIP con dump de PostgreSQL y objetos de MinIO, y lo envía por email.

## Flujo de uso (corto)
1. Autenticación (registro e inicio de sesión con JWT).
2. Crear/editar documentos en el editor a pantalla completa.
3. Ajustar la ambientación desde el Gestor de Temas (color, degradado o imagen).
4. Exportar a PDF, reproducir el texto en voz alta o transcribir notas rápidas.
5. Como admin, revisar logs y estadísticas; lanzar backups cuando sea necesario.

---

## Explicación técnica

Resumen de tecnologías y decisiones de arquitectura empleadas en Somnia.

- Frontend
  - React + TypeScript + Vite (UI reactiva y build rápido).
  - Tailwind CSS y Headless UI para estilos y componentes accesibles.
  - Editor: Tiptap (sobre ProseMirror) para edición rica y control fino del contenido.
  - Config central de API vía `VITE_API_URL`.

- Backend (API)
  - FastAPI (Python) con Uvicorn.
  - Modelado/DB: SQLAlchemy 2.x y Alembic (migraciones). PostgreSQL como base de datos.
  - Validación: Pydantic v2. Autenticación: JWT (OAuth2 password flow con `python-jose` y `passlib`).
  - Almacenamiento de archivos: MinIO (S3 compatible) con bucket `media` y política de lectura pública para servir fondos y exportaciones.
  - Exportación a PDF: WeasyPrint.
  - IA: Groq LLM (Llama 3.1 8B instant) para edición de texto; Groq Whisper para transcripción (STT); Cartesia TTS para síntesis de voz.
  - Middleware de logging: captura método, ruta, usuario, IP, user-agent, body (limpio de secretos), latencia y errores en la tabla `api_logs`; endpoints de consulta y estadísticas para admins.
  - Backup: uso de `pg_dump` para DB + empaquetado en ZIP junto con objetos de MinIO; envío por SMTP configurable.

- Docker y Devcontainers
  - Dev Container (VS Code): imagen base `python:3.10-slim` con Node 20 instalado; puertos reenviados 8011 (API), 5175 (Frontend), 5432 (PostgreSQL), 9000/9001 (MinIO). Scripts de `postCreate` instalan dependencias de backend y frontend.
  - Docker Compose (desarrollo/host): orquesta base de datos, almacenamiento de objetos, backend y frontend con volúmenes persistentes.
  - Scripts de ayuda: `scripts/start_backend` (migraciones + Uvicorn) y `scripts/start_frontend` (Vite). Opcionalmente `./docker_start.sh` y `./docker_clean.sh` desde el host.


Notas
- MinIO aplica una política de lectura pública al bucket para servir archivos de forma directa desde la API.
- El middleware de logs excluye rutas de documentación y limita tamaños de campos para no degradar el rendimiento ni registrar secretos.
- En desarrollo, los scripts aseguran la instalación idempotente de dependencias y esperan a que la DB esté lista antes de arrancar la API.

