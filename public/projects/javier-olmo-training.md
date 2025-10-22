![Javier Olmo Training](/projects/javier-olmo.png)
# Javier Olmo Training — Plataforma profesional para entrenadores y deportistas

Sitio web oficial de **Javier Olmo**, entrenador de alto rendimiento con más de 13 años de experiencia en el mundo del deporte profesional.  
El proyecto combina presencia de marca, captación de clientes y un área privada con una **biblioteca de ejercicios en vídeo** para deportistas y profesionales.

🔗 **URL:** [https://www.javierolmotraining.es](https://www.javierolmotraining.es)

---

## Qué aporta
- **Marca y conversión:** comunica la propuesta de valor del entrenador con una estética clara, moderna y orientada a resultados.  
- **Captación de clientes:** CTAs visibles y flujo optimizado para contacto y contratación de servicios.  
- **Área privada profesional:** biblioteca exclusiva de ejercicios con vídeos, filtros por nivel y categorías, y gestión de favoritos.  
- **Contenido dinámico:** galería y FAQ conectadas a APIs externas, actualizables sin intervención técnica.  
- **Experiencia fluida y ligera:** diseño responsive y tiempos de carga mínimos gracias a Astro y SSR.  

---

## Funcionalidades clave
- **Home y páginas públicas**
  - Hero con propuesta de valor y llamada a la acción.  
  - Secciones sobre metodología, trayectoria y servicios (entrenamiento presencial, online y mentorías).  
  - Galería y FAQ con contenido servido desde API externa.  
  - Formulario de contacto validado y conectado a endpoint JSON externo.  

- **Área privada: Biblioteca de ejercicios**
  - Login y registro con token guardado en cookie.  
  - Filtros por nivel, categoría y subcategoría.  
  - Buscador dinámico y paginación.  
  - Marcado de favoritos y modal con vídeo embebido (YouTube, TikTok, Instagram o MP4).  
  - Alta de ejercicios con subida de vídeo y creación de nuevas categorías.  

- **SEO y rendimiento**
  - SSR con Astro + Express.  
  - Metadatos dinámicos, OG/Twitter, canónicos y banner de cookies.  
  - Páginas optimizadas y tipadas para buscadores.  

---

## Flujo de uso (corto)
1. El visitante accede a la página principal y descubre los servicios del entrenador.  
2. Desde el CTA “Entrena conmigo”, puede contactar o registrarse.  
3. Los usuarios autenticados acceden al área privada con biblioteca de ejercicios.  
4. Pueden buscar, filtrar, visualizar vídeos, marcar favoritos o subir nuevos ejercicios (según rol).  
5. La administración del contenido se mantiene sincronizada con la API externa sin afectar el rendimiento.  

---

## Explicación técnica

### Arquitectura general
Aplicación **SSR híbrida** basada en **Astro 4** con soporte de **React** para componentes interactivos y renderizado del lado del servidor mediante Node + Express.  
Estructura ligera, escalable y con orientación a contenido dinámico conectado a APIs externas.

### Tecnologías utilizadas
- **Astro 4 (SSR + Islands)**  
  - Configuración `output: "server"` y adapter `@astrojs/node`.  
  - Servido con **Express** (`run-server.js`) para entorno productivo.  
  - Integración `@astrojs/react` para componentes interactivos.  

- **Tailwind CSS + DaisyUI + Flowbite**  
  - Sistema de diseño consistente y temático.  
  - Utilidades personalizadas y componentes reutilizables.  

- **Integraciones externas**
  - API principal: [`https://api.javierolmotraining.es`](https://api.javierolmotraining.es)  
    (login, registro, ejercicios, categorías, favoritos).  
  - API de contenido: [`https://www.padelchiquito.com/api/jolmo/`](https://www.padelchiquito.com/api/jolmo/)  
    (FAQ, galería, textos informativos).  
  - Formulario de contacto con envío a endpoint JSON externo.  

- **Biblioteca de ejercicios**
  - Tipado de modelos con TypeScript.  
  - Búsqueda y filtrado SSR (querystring) + actualizaciones instantáneas.  
  - Modal nativo `<dialog>` para reproducción de vídeo.  
  - Detección automática del tipo de fuente (YouTube, TikTok, Instagram, MP4).  

- **SEO y analítica**
  - Componente `SEO` centralizado con metadatos dinámicos.  
  - Google Tag integrado y parametrizable.  

- **Despliegue**
  - Build con `astro build` y ejecución SSR en Node (Express).  
  - Compatibilidad con **PM2** para entornos productivos y reinicio automático.  

---

## Resultado
Una web moderna, optimizada y completamente funcional que combina visibilidad profesional, conversión y herramientas exclusivas para deportistas.  
**Javier Olmo Training** ofrece una experiencia sólida tanto para clientes potenciales como para usuarios registrados, manteniendo una arquitectura técnica simple, rápida y extensible.

---

> Proyecto desarrollado por **TenBeltz**.  
> Enfoque en branding personal, experiencia deportiva y ecosistema digital con Astro + SSR.