![PadelChiquito](/projects/padelchiquito.png)
# PadelChiquito — Smart padel racket comparator

**PadelChiquito** is a web platform that centralizes padel racket catalogs from different brands and stores so players can compare, review and find the best racket for their level, playing style and budget.

🔗 **Site:** [https://padelchiquito.com](https://padelchiquito.com)

---

## Goal
Help players and coaches make informed buying decisions by comparing models using real technical criteria (shape, balance, weight, feel) — not just price. At the same time, offer stores a transparent, automated visibility and affiliation channel.

---

## Problem it solves
- Players need to browse multiple stores and brand sites to compare rackets.  
- Available reviews are scattered and poorly standardized.  
- Price fluctuations make it hard to spot good purchase opportunities.  

**PadelChiquito** solves this by centralizing catalog, reviews and up‑to‑date prices in a single interface.

---

## Main features
- 🔍 **Racket search and comparison** with advanced filters by level, brand, shape, balance or stiffness.

![PadelChiquito](/projects/padelchiquito-compare.png)
![PadelChiquito](/projects/padelchiquito-search.png)

- 💬 **Community reviews and comments** with qualitative feedback.  
- 💸 **Automatic price sync** via scraping with Selenium + BeautifulSoup.  

![PadelChiquito](/projects/padelchiquito-history.png)

- 📈 **Admin panel** to manage products, images, price history and promotions.  
- 📨 **Transactional email integration** for registration, password recovery and campaigns.  
- 🏋️ **Blog module** with category filter and login‑only access.
  
  ![PadelChiquito](/projects/padelchiquito-blog.png)

- 🔐 **Users and authentication** built into the site (Django auth).  

---

## Impact
- Drastically reduces time to find the ideal rackets.  
- Consolidates technical information accessible from any device.  
- Fosters community and real qualitative feedback among players.  
- Enables monetization through affiliation and promo coupons.  

---

## Role and work performed
- Full **end‑to‑end** design and development of the entire platform.  
- Data modeling for rackets, stores, prices, reviews and promotions.  
- Custom **admin panel** and automated scraping pipelines.  
- Implementation of transactional email flows (verification, reset, newsletter).  
- Deployment and maintenance of the production environment.  

---

## Technical explanation

### Backend
- **Framework:** Django (Python).  
  - Apps: products, stores, reviews, promotions and users.  
  - ORM to model relationships between rackets, prices and comments.  
  - Extended admin panel for CRUD and scraping management.  

### Frontend
- **Rendering:** Django Templates + Tailwind CSS + vanilla JS.  
  - Responsive, clean design without an SPA framework.  
  - Lightweight filters, forms and interactive components.  

### Database
- **PostgreSQL** (production) and **SQLite** (development).  
  - Relational schema with price history and sync logs.  

### Automation and scraping
- **Selenium**, **BeautifulSoup** and **Requests** to update prices and availability.  
  - Data normalization across multiple sources.  
  - Scheduled execution via cron or manual scripts.  

### Email and notifications
- **SMTP** (Django EmailBackend).  
  - Registration, password recovery and newsletter messages.  

---

## Key technologies
| Layer | Technologies |
|------|--------------|
| **Backend** | Django, Python |
| **Frontend** | Django Templates, Tailwind CSS, JavaScript |
| **Database** | PostgreSQL / SQLite |
| **Scraping** | Selenium, BeautifulSoup, Requests |
| **Email** | SMTP (transactional and marketing) |
| **DevOps** | Scripts, virtualenvs, automated backups |

---

**PadelChiquito** blends automated scraping, community and technical content to create the first racket recommendation platform truly centered on the player.  
Built end‑to‑end by **[TenBeltz](https://tenbeltz.com)**, focused on experience, reliability and scalability.

