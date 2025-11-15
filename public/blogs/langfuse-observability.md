# 📊 Langfuse: observabilidad profesional para flujos de IA

En vídeo (YouTube): https://www.youtube.com/watch?v=QdmrMq-OXgI

## Introducción
Si alguna vez has construido un flujo complejo de IA y te has quedado sin pista de por qué el resultado no es el esperado, esta publicación resume por qué necesito observabilidad profesional. Langfuse se presenta como la capa que te deja inspeccionar cada paso de tu pipeline para entender qué hizo el modelo, cómo lo evaluaste y cuánto te costó.

## El problema de los pipelines que crecen
Un prompt, una llamada al modelo y una respuesta es fácil de depurar con un `console.log`. Pero cuando el pipeline tiene agentes, herramientas, condicionales e iteraciones encadenadas, cada módulo puede usar distintos modelos con ajustes únicos. Entender qué ocurre en cada subpaso se convierte en un caos y los logs tradicionales dejan de bastar.

## Trazas y sesiones para seguir el flujo
Langfuse te da sesiones que agrupan trazas, y cada traza representa uno de esos pasos diminutos que el flujo ejecuta. Puedes ver qué prompt recibió el modelo, qué módulos intervinieron, la configuración del modelo, tokens de entrada y salida, y el tiempo que tardó. Así tienes trazabilidad y observabilidad completas de cómo evoluciona la IA segundo a segundo.

## LLMs como jueces que puntúan cada paso
También puedes configurar LLMs que evalúan resultados y devuelven una puntuación (de 0 a 1, por ejemplo). En el vídeo muestro un flujo donde un paso clasifica a qué secciones de un informe debe asignarse un fragmento de texto. Al añadir un juez con las reglas de evaluación, puedes ver el score de cada llamada y detectar cuál de los pasitos está fallando, aunque el resultado final siga aparente. Esta visibilidad te permite actuar exactamente donde hay una desviación.

## Control de costes sin sorpresas
Langfuse calcula automáticamente los costes de cada llamada si le defines las tarifas de los proveedores que usas. El cálculo se basa en tokens de input y output, por lo que puedes comprobar si tu flujo se adapta a la estimación de costes que tenías o cuándo hay que optimizar prompts o cambiar de modelo.

## Verlo en acción
En el vídeo de lanzamiento recorremos las cuatro funcionalidades clave (trazas, sesiones, jueces y monitor de costes) y las aplicamos a un pipeline real.

### 🎥 Puedes verlo aquí:

<iframe width="100%" height="420" src="https://www.youtube.com/embed/QdmrMq-OXgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Cierre
Langfuse no sustituye a tu código, pero sí lo ilumina: aporta trazabilidad, evaluaciones automáticas y métricas de coste para que puedas entender, mejorar y escalar flujos de IA que ya no caben en un simple `console.log`.
