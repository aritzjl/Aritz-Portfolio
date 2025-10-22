![PadelChiquito](/projects/padelchiquito.png)
# PadelChiquito — Comparador inteligente de palas de pádel

**PadelChiquito** es una plataforma web que centraliza el catálogo de palas de pádel de distintas marcas y tiendas, permitiendo a los jugadores comparar, opinar y encontrar la mejor pala según su nivel, estilo de juego y presupuesto.

🔗 **Sitio:** [https://padelchiquito.com](https://padelchiquito.com)

---

## Objetivo
Ayudar a jugadores y entrenadores a **tomar decisiones de compra informadas**, comparando modelos por criterios técnicos reales (forma, balance, peso, tacto) y no solo por precio.  
A su vez, ofrecer a las tiendas un canal de visibilidad y afiliación transparente y automatizado.

---

## Problema que resuelve
- Los jugadores deben consultar múltiples tiendas y webs de marca para comparar palas.  
- Las reseñas disponibles son dispersas y poco estandarizadas.  
- Las fluctuaciones de precio dificultan identificar buenas oportunidades de compra.  

**PadelChiquito** soluciona esto centralizando catálogo, reseñas y precios actualizados en una sola interfaz.

---

## Funcionalidades principales
- 🔍 **Buscador y comparador de palas** con filtros avanzados por nivel, marca, forma, balance o dureza.

![PadelChiquito](/projects/padelchiquito-compare.png)
![PadelChiquito](/projects/padelchiquito-search.png)


- 💬 **Sistema de reseñas y comentarios** cualitativos por parte de la comunidad.  
- 💸 **Sincronización automática de precios** mediante scraping con Selenium + BeautifulSoup. 

![PadelChiquito](/projects/padelchiquito-history.png)

- 📈 **Panel de administración** para gestionar productos, imágenes, precios históricos y promociones.  
- 📨 **Integraciones de email transaccional** para registro, recuperación de contraseña y campañas.  
- 🏋️ **Módulo Blog** con filtro por categoría, y bloqueo por login.
  
  ![PadelChiquito](/projects/padelchiquito-blog.png)


- 🔐 **Gestión de usuarios y autenticación** integrada en el propio sitio (Django auth).  

---

## Impacto
- Reducción drástica del tiempo de búsqueda de palas ideales.  
- Información técnica consolidada y accesible desde cualquier dispositivo.  
- Fomento de la comunidad y del feedback cualitativo real entre jugadores.  
- Posibilidad de monetización por afiliación y cupones promocionales.  

---

## Rol y trabajo realizado
- Diseño y desarrollo **full-stack** de toda la plataforma.  
- Modelado de datos para representar palas, tiendas, precios, reseñas y promociones.  
- Creación del **panel de administración personalizado** y de los pipelines automáticos de scraping.  
- Implementación de flujos de email transaccional (verificación, reset, newsletter).  
- Despliegue y mantenimiento del entorno productivo.  

---

## Explicación técnica

### Backend
- **Framework:** Django (Python).  
  - Apps: productos, tiendas, reseñas, promociones y usuarios.  
  - ORM para modelar relaciones entre palas, precios y comentarios.  
  - Panel administrativo extendido para CRUD de productos y gestión de scraping.  

### Frontend
- **Renderizado:** Django Templates + Tailwind CSS + JS nativo.  
  - Diseño responsive y limpio sin framework SPA.  
  - Filtros, formularios y componentes interactivos ligeros.  

### Base de datos
- **PostgreSQL** (producción) y **SQLite** (entorno de desarrollo).  
  - Estructura relacional con histórico de precios y logs de sincronización.  

### Automatización y scraping
- **Selenium**, **BeautifulSoup** y **Requests** para actualizar precios y disponibilidad.  
  - Normalización de datos de distintas fuentes.  
  - Ejecución programada mediante tareas cron o scripts manuales.  

### Email y notificaciones
- **SMTP** (Django EmailBackend).  
  - Envío de correos de registro, recuperación de contraseña y newsletters.  

---

## Tecnologías clave
| Capa | Tecnologías |
|------|--------------|
| **Backend** | Django, Python |
| **Frontend** | Django Templates, Tailwind CSS, JavaScript |
| **Base de datos** | PostgreSQL / SQLite |
| **Scraping** | Selenium, BeautifulSoup, Requests |
| **Email** | SMTP (transaccional y marketing) |
| **DevOps** | Scripts, entornos virtuales, backups automáticos |

---

**PadelChiquito** combina scraping automatizado, comunidad y contenido técnico para crear la primera plataforma de recomendación de palas realmente centrada en el jugador.  
Una solución desarrollada íntegramente por **TenBeltz** con foco en experiencia, fiabilidad y escalabilidad.