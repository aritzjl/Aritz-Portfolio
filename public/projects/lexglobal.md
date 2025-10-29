![LexGlobal](/projects/lexglobal.png)
# LexGlobal — Analizador de documentos judiciales (Embargos y AVP)

Aplicación desarrollada para **LexGlobal**, un despacho jurídico especializado en ejecuciones y embargos.  
El sistema automatiza la lectura, clasificación y análisis de documentación judicial en PDF (como notificaciones de LexNET o correos con adjuntos), utilizando modelos de lenguaje (LLM) para identificar de forma precisa el tipo de documento y su contexto legal.

---

## Qué aporta
- **Automatización jurídica:** clasificación inmediata de resoluciones judiciales y oficios sin intervención manual.  
- **Precisión semántica:** uso de LLM para interpretar textos legales y asignar la categoría correcta.  
- **Productividad:** permite procesar grandes volúmenes de documentos o lotes con un solo clic.  
- **Control y trazabilidad:** informes detallados en JSON con métricas, aciertos y consumo de tokens.  
- **Escalabilidad:** adaptable a nuevos tipos de documentos o criterios legales sin modificar código.

---

## Funcionalidades clave
- **Clasificación automática de PDFs**
  - Analiza el texto de resoluciones y genera una categoría legal única (CS, SALARIO, PENSIÓN, PRESTACIÓN, AVP_POS, AVP_NEG u OTROS).  
  - Flujo de doble pasada para los casos de AVP, refinando la decisión entre positivos y negativos.  

- **Interfaz web y CLI**
  - Web (Flask): subida rápida de documentos, vista previa del texto y resultado instantáneo.  
  - CLI: procesamiento por lotes, generación de informes y métricas reproducibles.

- **Extracción avanzada de texto**
  - Utiliza `unstructured` optimizado para español, capaz de manejar documentos complejos o con múltiples páginas.

- **Informes e indicadores**
  - Resultados exportados como JSON (`informe.json`, `informe-errores.json`, `avp-informe.json`) con métricas de precisión y uso de tokens.  
  - Registros detallados de tiempos, aciertos y errores de clasificación.

---

## Flujo de uso (corto)
1. El usuario sube un PDF desde la interfaz o lanza un lote desde la CLI.  
2. El sistema extrae el texto con `unstructured` y lo envía al modelo Groq LLM.  
3. La respuesta se valida mediante un contrato JSON (Pydantic) para garantizar coherencia.  
4. Si la categoría detectada es AVP, se ejecuta una segunda pasada de análisis especializado.  
5. Los resultados se muestran en pantalla o se exportan como informe JSON.

---

## Explicación técnica

### Arquitectura
- **Frontend:** interfaz web en Flask con plantillas Jinja2 y CSS personalizado (branding LexGlobal / [TenBeltz](https://tenbeltz.com)).  
- **Backend:** módulos Python independientes (`pdf_to_text`, `ai_client`, `avp_analyzer`, `main`) para extracción, análisis y evaluación.  
- **IA:** integración con la API de **Groq** (modelos Llama 4 Maverick / Kimi) para clasificación semántica en formato JSON.  
- **Validación:** `Pydantic v2` garantiza que el modelo devuelva estructuras válidas (`EmbargoAnalysis`).  
- **CLI:** comandos con `argparse` y generación de informes reproducibles.  

### Tecnologías principales
- **Groq API:** inferencia rápida y validación JSON nativa (`response_format: "json_object"`).  
- **Flask:** interfaz web simple, protegida con autenticación por sesión.  
- **unstructured:** extracción de texto en español desde PDFs complejos.  
- **Pydantic v2:** contrato de validación para asegurar coherencia y control de errores.  
- **Python estándar:** scripts CLI, manejo de logs y despliegue sencillo vía `deploy.sh`.

---

## Resultado
Una herramienta que convierte un proceso jurídico repetitivo y manual en una tarea automática y auditable, capaz de procesar cientos de documentos judiciales en minutos.  
LexGlobal puede ahora clasificar embargos, oficios y diligencias con precisión semántica y trazabilidad total, reduciendo errores y acelerando el flujo de trabajo interno.

---

> Proyecto desarrollado por **TenBeltz** para **LexGlobal Abogados**.  
> Enfoque en automatización jurídica, validación estructurada y análisis semántico con IA.