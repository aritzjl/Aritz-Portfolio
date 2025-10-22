![Identificador Policial](/projects/identificador.png)

Asistente web para agentes policiales en la identificación de personas y vehículos a partir de fotografías de documentos oficiales.  
Combina reconocimiento óptico (OCR) y modelos de IA para extraer, validar y registrar datos estructurados de forma segura y automatizada.

---

## Qué aporta
- **Agilidad:** extracción instantánea de datos desde imágenes, evitando el registro manual.
- **Precisión:** validación y normalización semántica de datos mediante IA.
- **Integración:** conexión con la base de datos corporativa para detectar duplicidades y actualizar expedientes.
- **Automatización:** generación del acta de identificación y registro del control de vehículos en un solo flujo.
- **Seguridad:** tratamiento controlado de datos sensibles y acceso restringido a personal autorizado.

---

## Funcionalidades clave
- **Identificación de personas**
  - Subida de fotografías de DNI, NIE, pasaporte o permiso de conducir.
  - OCR y extracción inteligente de datos con IA (normalización y validación).
  - Recorte facial automático y almacenamiento optimizado de imágenes.
  - Alta del expediente en el *Libro de Identificaciones* y en *Implicados en procesos*.

![Identificador Policial](/projects/identificador-review.png)


- **Controles de vehículos**
  - Captura y procesamiento de permisos de circulación y fotos de vehículos.
  - Alta o actualización de los vehículos implicados en el sistema.
  - Registro de controles con detalle de clase, turno y motivo.

- **Listados de apoyo**
  - Calidades de identificación, motivos de implicación, turnos de servicio y clases de control.

---

## Flujo de uso (corto)
1. Acceso con credenciales corporativas (CIF/NIP).  
2. Captura o subida de imágenes de documentos.  
3. Extracción automática de datos mediante OCR + IA.  
4. Revisión, validación y fusión con datos existentes en la base corporativa.  
5. Creación del expediente y registro del control si aplica.

---

## Explicación técnica

Resumen de tecnologías y arquitectura utilizadas en el sistema.

### Frontend
- **Vue 3 + TypeScript + Vite** (interfaz reactiva y ligera).  
- **Tailwind CSS 4** para maquetado rápido y adaptativo.  
- Compresión de imágenes en el navegador antes de su envío.  
- Configuración de API vía variable `VITE_API_BASE_URL`.

### Backend
- **FastAPI (Python)** para la API principal.  
- **OCR con docTR** para extracción de texto desde imágenes.  
- **IA semántica:** modelos *OpenAI GPT-4o* para estructurar los datos a JSON tipado.  
- **SQL Server (ODBC/pyodbc)** como base de datos corporativa.  
- **Procesamiento de imágenes:** OpenCV + Pillow + face_recognition para localizar y recortar rostros.  
- **Integración segura:** notificaciones HTTP internas tras la subida o actualización de imágenes.  
- Documentación y validación automática mediante *Pydantic* y *Swagger UI*.

### Entorno y despliegue
- Variables de entorno para API Keys y configuración de conexiones.  
- Driver ODBC 18 para conectividad con SQL Server.  
- Backend y frontend separados, configurables por entorno.  

---

## Notas
- Toda la información procesada es confidencial y su uso está restringido a personal autorizado.  
- Las imágenes se optimizan y almacenan de forma controlada, eliminando ficheros temporales.  
- Los secretos y configuraciones sensibles se mantienen fuera del repositorio.