![Prados-Osuna AI](/projects/prados-osuna-ai.png)
# Prados-Osuna AI — Automatización de expedientes y notificaciones

Aplicación desarrollada para **Prados-Osuna Abogados** con el objetivo de automatizar la revisión de expedientes, detectar plazos de prescripción y gestionar el envío controlado de notificaciones a contrarios (aseguradoras y terceros).  
Integra inteligencia artificial y conexión directa con **MN Program**, el software de gestión jurídica del despacho, para extraer datos, evaluar expedientes y registrar las comunicaciones de forma trazable y auditable.

---

## Qué aporta
- **Eficiencia operativa:** elimina la revisión manual de notas y fechas de prescripción.  
- **Integración directa con MN Program:** lectura y actualización de expedientes, notas e intervinientes mediante su API.  
- **Precisión y homogeneidad:** la IA interpreta notas internas y calcula plazos con criterios consistentes.  
- **Trazabilidad completa:** cada comunicación queda registrada en IMAP y acompañada de justificante PDF.  
- **Control seguro:** autenticación, modo de pruebas y auditoría de operaciones sensibles.

---

## Funcionalidades clave
- **Evaluación automática con IA**  
  - Analiza las notas internas del expediente (extraídas desde MN Program) para obtener el estado, fecha de prescripción y matrícula.  
- **Cálculo inteligente de plazos**  
  - Determina el lote de prescripción (febrero, julio, septiembre) y evalúa si procede la notificación.  
- **Panel de revisión y envío**  
  - Interfaz web que muestra los expedientes procesados, con posibilidad de revisar y editar antes de notificar.  

![Prados-Osuna AI](/projects/prados-result.png)

- **Integración con MN Program**
  - Consulta de expedientes, notas e intervinientes (contrarios, aseguradoras, vehículos).  
  - Actualización opcional de notas con el resultado de la evaluación y la fecha de notificación.  
- **Notificación automatizada y trazable**  
  - Envío SMTP con copia de control y guardado en carpeta IMAP “Sent”.  
  - Generación de justificantes PDF con logotipo del despacho y empaquetado ZIP.  
- **Configuración avanzada**
  - API keys, credenciales SMTP/IMAP, token de MN Program y toggles para activar/desactivar funciones sensibles (envío, actualización de notas, IA).  

![Prados-Osuna AI](/projects/prados-congif.png)

---

## Flujo de uso (corto)
1. El usuario accede al panel protegido por contraseña.  
2. El sistema consulta **MN Program** mediante su API para obtener la lista de expedientes y notas.  
3. La IA evalúa cada expediente y calcula fecha de prescripción y lote operativo.  
4. El usuario revisa los resultados, corrige si es necesario y confirma los envíos.  
5. El sistema envía un correo por expediente, lo guarda en IMAP, genera el justificante PDF y ofrece descarga masiva en ZIP.  
6. (Opcional) Se actualizan las notas correspondientes en MN Program con los resultados y registros.

---

## Explicación técnica

### Arquitectura
- **Backend:** Python + Flask con renderizado server-side (Jinja2).  
- **Integración externa:** API REST de **MN Program** para operaciones CRUD sobre expedientes, notas e intervinientes.  
- **IA semántica:** OpenAI Responses API con validación estructurada (modelo Pydantic).  
- **Correo y trazabilidad:** envío SMTP + registro en IMAP, generación de justificantes PDF y empaquetado ZIP.  

### Módulos principales
- `app.py`: rutas, autenticación, conexión con MN Program, orquestación de IA y envío de correos.  
- `ai_evaluador.py`: cliente IA para análisis semántico y validación del modelo `EvaluacionExpediente`.  
- `utils.py`: funciones auxiliares (limpieza HTML, generación de PDFs, ZIP, helpers de estado).  
- `templates/`: vistas Jinja (login, resultados, configuración, ayuda).  

---

## Tecnologías utilizadas
- **Flask + Jinja2:** servidor web ligero con UI renderizada en servidor.  
- **TailwindCSS (CDN):** diseño rápido y limpio.  
- **OpenAI Python SDK:** extracción estructurada de datos legales desde texto libre.  
- **Pydantic v2:** validación y tipado de la respuesta IA.  
- **MN Program API:** integración REST para consulta y actualización de expedientes y notas.  
- **requests:** cliente HTTP para consumo de la API de MN Program con control de errores.  
- **BeautifulSoup (bs4):** limpieza del HTML de notas de MN Program.  
- **ReportLab:** creación de justificantes PDF personalizados.  
- **smtplib + imaplib:** envío y almacenamiento de correos en buzones reales.  
- **zipfile:** empaquetado de justificantes en ZIP.  
- **dotenv / JSON config:** gestión segura de credenciales y configuración.  

---

## Seguridad y despliegue
- Variables y tokens gestionados mediante `.env` o configuración JSON.  
- Sesiones con expiración controlada y autenticación obligatoria.  
- Modo seguro de pruebas (sin envío real de correos ni escritura en MN Program).  
- Script `deploy.sh` para ejecución en segundo plano con logs (`server.log`) y control PID.

---

## Resultado
Una herramienta integral que conecta la infraestructura jurídica de **MN Program** con un sistema inteligente de automatización documental.  
**Prados-Osuna AI** reduce la carga administrativa, garantiza consistencia jurídica y ofrece trazabilidad total desde la detección del plazo hasta la emisión de cada notificación.

---

> Proyecto desarrollado por **TenBeltz** para **Prados-Osuna Abogados**.  
> Enfoque en automatización legal, integración con MN Program y trazabilidad completa de las comunicaciones.