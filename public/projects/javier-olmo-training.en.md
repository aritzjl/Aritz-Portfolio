![Javier Olmo Training](/projects/javier-olmo.png)
# Javier Olmo Training — Professional platform for coaches and athletes

Official website of **Javier Olmo**, a high‑performance coach with over 13 years of experience in professional sports.  
The project combines brand presence, client acquisition and a private area with an **exercise video library** for athletes and professionals.

🔗 **URL:** [https://www.javierolmotraining.es](https://www.javierolmotraining.es)

---

## What it brings
- **Brand and conversion:** communicates the coach’s value proposition with a clear, modern, results‑oriented aesthetic.  
- **Client acquisition:** visible CTAs and optimized flow for contacting and hiring services.  
- **Professional private area:** exclusive exercise library with videos, filters by level and categories, and favorites.  
- **Dynamic content:** gallery and FAQ connected to external APIs, updatable without technical intervention.  
- **Smooth, lightweight experience:** responsive design and minimal load times thanks to Astro and SSR.  

---

## Key features
- **Home and public pages**
  - Hero with value proposition and call to action.  
  - Sections on methodology, track record and services (in‑person, online and mentoring).  
  - Gallery and FAQ with content served from an external API.  
  - Contact form with validation and connection to an external JSON endpoint.  

- **Private area: Exercise library**
  - Login and registration for private access.  
  - Exercise catalog with video playback, categories and level filters.  
  - Favorites and history by user.  

---

## Technical explanation

**Hybrid SSR application** based on **Astro 4** with support for **React** components and server‑side rendering via Node + Express (adapter).

### Stack and services
- **Astro 4 (SSR + Islands)**  
- **Express (Node)** as SSR adapter.  
- **React** for interactive parts.  
- **External REST API** to serve dynamic content (gallery and FAQ).  
- **Vite** as bundler.  

### Implementation notes
- Public routes (Home, About, Services) + private routes for exercise library.  
- JWT/session stored in cookies for private access.  
- Video player with lazy loading and adaptive layout.  
- Simple admin for uploading exercises and managing categories.  

---

## Result
A professional, fast and maintainable site that supports the growth of the training brand while providing real value to athletes with a private exercise library.

---

> Project by **[TenBeltz](https://tenbeltz.com)** in collaboration with **Javier Olmo**.  
> Focus on brand, performance and a private learning space for athletes.

