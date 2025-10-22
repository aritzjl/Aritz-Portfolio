![Paragon Pro Elite](/projects/paragon.png)

# Paragon Pro Elite

**Plataforma digital para atletas, familias y profesionales del deporte.**  
Paragon conecta a deportistas con especialistas verificados —entrenadores, fisioterapeutas, nutricionistas o psicólogos deportivos— y ofrece un espacio donde mostrar experiencia, certificaciones y servicios, además de recursos de aprendizaje y eventos deportivos.

🔗 **Sitio:** [https://platform.paragonproelite.com](https://platform.paragonproelite.com)

---

## Qué aporta
- **Conexión directa:** acerca a atletas y profesionales mediante perfiles verificados y filtros de búsqueda precisos. 
- **Visibilidad profesional:** permite a entrenadores y especialistas mostrar sus logros, servicios y certificaciones.  
- **Formación y comunidad:** integra contenidos educativos y eventos deportivos para fomentar el desarrollo continuo.  
- **Multiplataforma:** disponible como aplicación web progresiva (PWA) y app Android empaquetada con Capacitor.  

---

## Funcionalidades clave
- **Autenticación segura:** registro, login, verificación de email y recuperación de contraseña.

![Paragon Pro Elite](/projects/paragon-login.png)

- **Perfiles personalizados:**
  - *Atletas:* biografía, deporte, experiencia, objetivos, ubicación, foto y banner.  
  - *Profesionales:* especialidad, experiencia, servicios, certificaciones, redes sociales y datos de contacto.  
  - *Padres/Tutores:* vinculación segura con atletas menores mediante código de verificación.  
  
![Paragon Pro Elite](/projects/paragon-profile.png)

- **Búsqueda avanzada:** filtros por nombre, país, ciudad, deporte y especialidad; ordenación por experiencia o distancia.  
  
![Paragon Pro Elite](/projects/paragon-search.png)

- **Aprendizaje:** sección de recursos formativos (vídeos, artículos, PDFs) con miniaturas y categorías.  
- **Eventos deportivos:** listado de eventos con fecha, descripción e imagen destacada.  
  
![Paragon Pro Elite](/projects/paragon-events.png)

- **Analítica de contactos:** seguimiento de interacciones (clics, llamadas, correos) para medir interés.  
- **Instalable (PWA):** instalación directa desde el navegador y actualizaciones automáticas.  

---

## Flujo de uso (corto)
1. El usuario se registra y verifica su cuenta por email.  
2. Crea su perfil (atleta, profesional o padre) y añade información relevante.  
3. Explora profesionales, filtra por deporte o ubicación y contacta directamente.  
4. Consulta recursos formativos y eventos desde el panel principal.  
5. Los profesionales reciben analíticas de interacciones y pueden actualizar sus servicios o certificaciones.  

---

## Explicación técnica

### Arquitectura general
Sistema **full-stack modular** dividido en dos componentes principales:
- **Frontend:** aplicación React + TypeScript (Vite) con soporte PWA y empaquetado Android mediante Capacitor.  
- **Backend:** API REST en **Django + Django REST Framework (DRF)** con autenticación JWT y apps independientes por dominio.  

### Frontend
- **React 19 + TypeScript + Vite:** interfaz reactiva y de alto rendimiento.  
- **Tailwind CSS 4 + daisyUI:** diseño adaptable y tematizado con tokens de color.  
- **React Router v7:** navegación cliente para secciones como Home, Search, Learning y Events.  
- **Gestión de sesión:** token JWT persistido en `localStorage`.  
- **Servicios de datos:** consumo de API mediante Axios con tipado estricto.  
- **PWA + Capacitor:** instalación y empaquetado nativo Android sin duplicar código.  

### Backend
- **Django 5 + DRF:** API modular con apps `users`, `athletes`, `professionals`, `analytics`, `learning`, `events` y `locations`.  
- **Autenticación JWT:** registro, verificación de email y recuperación de contraseña.  
- **Geocodificación:** integración con `geocode.maps.co` para lat/lon y cálculo de distancia entre usuarios.  
- **Documentación automática:** OpenAPI + Swagger UI generados con `drf-spectacular`.  
- **Almacenamiento multimedia:** fotos, banners y certificados gestionados desde el backend.  
- **Emails transaccionales:** SMTP (Gmail) para flujos de verificación y recuperación.  
- **Base de datos:** SQLite en desarrollo; escalable a PostgreSQL en despliegues productivos.  

---

## Resultado
Una plataforma integral y escalable que reúne en un mismo espacio a atletas, familias y profesionales del deporte.  
Paragon Pro Elite digitaliza la relación entre talento y oferta, simplifica la visibilidad profesional y fomenta el aprendizaje continuo dentro del ecosistema deportivo.

---

> Proyecto desarrollado por **TenBeltz**.  
> Enfoque en comunidad deportiva, visibilidad profesional y experiencia multiplataforma (PWA + app nativa).