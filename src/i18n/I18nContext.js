import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Yo",
      skills: "Habilidades",
      projects: "Proyectos",
      blog: "Blog",
      resume: "CV",
      lang_es: "ES",
      lang_en: "EN",
    },
    home: {
      hello: "¡HOLA!",
      i_am: "SOY",
      find_me: "Encuéntrame",
      type: [
        "Desarrollador de Software",
        "Emprendedor",
        "Especializado en IA",
        "Un poco friki",
      ],
      introduce_title: "DEJA QUE ME PRESENTE",
      introduce_body: "Soy <b class=\"purple\">Aritz Jaber</b>, desarrollador de software y <b class=\"purple\">cofundador de dos empresas</b>: <b class=\"purple\">TenBeltz</b> y <b class=\"purple\">Biiak</b>. En mi día a día, combino desarrollo, diseño de sistemas y liderazgo técnico para crear soluciones que <b class=\"purple\">automatizan procesos, reducen carga manual y convierten los datos en decisiones útiles.</b><br /><br />En <b class=\"purple\">TenBeltz</b> nos enfocamos en ayudar a empresas a optimizar su operación mediante software a medida e inteligencia artificial. En <b class=\"purple\">Biiak</b>, aplicamos <b class=\"purple\">IA privada</b> al ámbito de la <b class=\"purple\">protección social</b>, con el propósito de usar la tecnología para cuidar mejor.<br /><br />Trabajo principalmente con <i><b class=\"purple\">Python, FastAPI, Ollama y Langfuse</b></i>, creando sistemas escalables, seguros y con impacto real.<br /><br />Creo firmemente que <b class=\"purple\">la mejor tecnología es la que mejora la vida de las personas.</b>",
    },
    about: {
      heading: "Conoce quién <strong class=\"purple\">soy</strong>",
      card: {
        p1: "Hola! Soy <span class=\"purple\">Aritz Jaber</span> de <span class=\"purple\">Bilbao, España</span>.",
        p2: "Hace unos años decidí dejar una carrera que no me llenaba y apostar por la programación. Desde entonces, he encontrado en el software una forma de unir mi curiosidad por entender cómo funcionan las cosas con mi deseo de crear algo útil para los demás.",
        p3: "Empecé como desarrollador freelance, creando soluciones a medida para pequeñas empresas, y con el tiempo cofundé <span class=\"purple\">TenBeltz</span>, donde ayudamos a negocios a automatizar procesos, reducir trabajo manual y tomar decisiones con más claridad gracias a la inteligencia artificial.",
        p4: "Más recientemente, he cofundado <span class=\"purple\">Biiak</span> junto a <span class=\"purple\">Óscar Pérez-Muga</span>, un proyecto que nace con la misión de aplicar <b class=\"purple\">IA privada</b> al ámbito de la <b class=\"purple\">protección social</b>. Queremos que los datos sirvan para cuidar mejor, ayudando a familias y personas en programas de apoyo sin perder de vista el enfoque humano.",
        p5: "También formo parte de <span class=\"purple\">Irontec</span> como investigador en inteligencia artificial, desarrollando soluciones que optimizan la comunicación multicanal en entornos empresariales.",
        p6: "Me mueve la idea de que la tecnología no solo resuelva problemas, sino que <b class=\"purple\">permita a las personas centrarse en lo que realmente importa</b>. Por eso, mi trabajo se basa en unir automatización, datos e inteligencia artificial con empatía y propósito.",
        p7: "Fuera del trabajo, me gusta seguir aprendiendo y explorando:",
        li1: "Leer sobre ciencia, filosofía y psicología 📚",
        li2: "Volar drones y descubrir nuevos lugares desde el aire 🚁",
        li3: "Jugar a juegos de mesa con amigos 🎲",
        quote: "\"La tecnología más poderosa es la que mejora la vida de las personas.\"",
        author: "Aritz Jaber",
      },
    },
    skills: {
      heading_skills: "Habilidades <strong class=\"purple\">Técnicas</strong>",
      heading_tools: "<strong class=\"purple\">Herramientes</strong> Que Uso",
    },
    projects: {
      heading: "Mis <strong class=\"purple\">Trabajos Recientes</strong>",
      subheading: "Aquí hay algunos proyectos en los que he trabajado recientemente.",
      view_details: "Ver detalles",
      aria_view_details: (title) => `Ver detalles de ${title}`,
      cards: {
        "identificador-policial": {
          title: "Identificador Policial",
          description: "Aplicación web para asistencia policial en la identificación de personas y vehículos mediante OCR e IA, con integración corporativa y registro automatizado de expedientes.",
        },
        lexfirma: {
          title: "LexFirma",
          description: "Plataforma full-stack para despachos jurídicos que automatiza tareas, organiza documentos y genera borradores legales en PDF mediante IA e integración con Google Workspace.",
        },
        orderinn: {
          title: "OrderInn Price Predictor",
          description: "Sistema interno que automatiza la predicción de precios desde archivos Excel, con modelos de machine learning entrenables y versionado de scripts asistido por IA.",
        },
        mysomnia: {
          title: "MySomnia",
          description: "Aplicación web minimalista para escribir sin distracciones, con temas personalizados, asistencia por IA, voz y exportación a PDF.",
        },
        lexglobal: {
          title: "LexGlobal — Analizador judicial",
          description: "Sistema que automatiza la lectura y clasificación de resoluciones judiciales en PDF usando IA semántica, mejorando la precisión y reduciendo el tiempo de revisión documental.",
        },
        paragon: {
          title: "Paragon Pro Elite",
          description: "Plataforma digital que conecta atletas, familias y profesionales del deporte, con perfiles verificados, búsqueda avanzada, recursos formativos, eventos y app instalable (PWA + Android).",
        },
        "prados-osuna-ai": {
          title: "Prados-Osuna AI",
          description: "Sistema inteligente integrado con MN Program que automatiza la revisión de expedientes, detecta plazos de prescripción y gestiona notificaciones legales con trazabilidad completa.",
        },
        padelchiquito: {
          title: "PadelChiquito",
          description: "Plataforma web que compara palas de pádel, centraliza precios de tiendas, gestiona reseñas de usuarios y automatiza la actualización de datos con scraping y análisis técnico.",
        },
        obrahub360: {
          title: "ObraHub360",
          description: "Plataforma que conecta autónomos y empresas del sector construcción, con verificación documental mediante OCR + IA, perfiles verificados y sistema de valoraciones con suscripción premium.",
        },
        "javier-olmo-training": {
          title: "Javier Olmo Training",
          description: "Web profesional para el entrenador Javier Olmo, con área privada de ejercicios en vídeo, integración con APIs externas y renderizado SSR con Astro + Node.",
        },
      },
      detail: {
        not_found: (slug) => `Detalle no encontrado: ${slug}`,
        load_error: "No se pudo cargar el detalle.",
        loading: "Cargando contenido…",
      },
    },
    blog: {
      subtitle: "Ideas, notas y aprendizajes que me apetece compartir.",
    },
    resume: {
      download: "Descargar CV",
    },
    footer: {
      credit:
        'Plantilla adaptada y modificada del portfolio de <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer noopener">soumyajit4419</a>',
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      blog: "Blog",
      resume: "Resume",
      lang_es: "ES",
      lang_en: "EN",
    },
    home: {
      hello: "HELLO!",
      i_am: "I AM",
      find_me: "Find me",
      type: [
        "Software Developer",
        "Entrepreneur",
        "AI Specialist",
        "Slightly nerdy",
      ],
      introduce_title: "LET ME INTRODUCE MYSELF",
      introduce_body: "I am <b class=\"purple\">Aritz Jaber</b>, a software developer and <b class=\"purple\">co‑founder of two companies</b>: <b class=\"purple\">TenBeltz</b> and <b class=\"purple\">Biiak</b>. Day to day I combine development, systems design and technical leadership to build solutions that <b class=\"purple\">automate processes, reduce manual work and turn data into useful decisions.</b><br /><br />At <b class=\"purple\">TenBeltz</b> we help companies optimize operations through custom software and AI. At <b class=\"purple\">Biiak</b> we apply <b class=\"purple\">private AI</b> to the field of <b class=\"purple\">social protection</b>, using technology to care better.<br /><br />I mainly work with <i><b class=\"purple\">Python, FastAPI, Ollama and Langfuse</b></i>, building scalable, secure systems with real‑world impact.<br /><br />I strongly believe that <b class=\"purple\">the best technology is the one that improves people’s lives.</b>",
    },
    about: {
      heading: "Get to know <strong class=\"purple\">who I am</strong>",
      card: {
        p1: "Hi! I’m <span class=\"purple\">Aritz Jaber</span> from <span class=\"purple\">Bilbao, Spain</span>.",
        p2: "A few years ago I left a career that didn’t fulfill me and committed to programming. Since then, software has become a way to blend my curiosity for how things work with the desire to create something useful for others.",
        p3: "I started as a freelance developer building custom solutions for small businesses, and eventually co‑founded <span class=\"purple\">TenBeltz</span>, where we help companies automate processes, reduce manual work and make clearer decisions with the help of AI.",
        p4: "More recently I co‑founded <span class=\"purple\">Biiak</span> with <span class=\"purple\">Óscar Pérez‑Muga</span>, a project with the mission to bring <b class=\"purple\">private AI</b> to the field of <b class=\"purple\">social protection</b>. We want data to help us care better, supporting families and people without losing the human touch.",
        p5: "I’m also part of <span class=\"purple\">Irontec</span> as an AI researcher, developing solutions that optimize multi‑channel communication in enterprise environments.",
        p6: "I’m driven by the idea that technology should not only solve problems but also <b class=\"purple\">let people focus on what truly matters</b>. That’s why my work blends automation, data and AI with empathy and purpose.",
        p7: "Outside of work, I keep learning and exploring:",
        li1: "Reading about science, philosophy and psychology 📚",
        li2: "Flying drones and discovering places from above 🚁",
        li3: "Playing board games with friends 🎲",
        quote: "\"The most powerful technology is the one that improves people’s lives.\"",
        author: "Aritz Jaber",
      },
    },
    skills: {
      heading_skills: "<strong class=\"purple\">Technical</strong> Skills",
      heading_tools: "<strong class=\"purple\">Tools</strong> I Use",
    },
    projects: {
      heading: "My Recent <strong class=\"purple\">Works</strong>",
      subheading: "Here are a few projects I’ve worked on recently.",
      view_details: "View details",
      aria_view_details: (title) => `View details of ${title}`,
      cards: {
        "identificador-policial": {
          title: "Identificador Policial",
          description: "Web assistant for police officers to identify people and vehicles from document photos. Combines OCR and AI to securely extract, validate and record structured data.",
        },
        lexfirma: {
          title: "LexFirma",
          description: "Full‑stack platform for law firms that automates tasks, organizes documents and generates AI‑assisted legal drafts in PDF with Google Workspace integration.",
        },
        orderinn: {
          title: "OrderInn Price Predictor",
          description: "Internal system that automates price prediction from Excel files, with trainable ML models and AI‑assisted script versioning.",
        },
        mysomnia: {
          title: "MySomnia",
          description: "Minimal web app for distraction‑free writing with custom themes, AI assistance, voice and PDF export.",
        },
        lexglobal: {
          title: "LexGlobal — Judicial Analyzer",
          description: "System that automates reading and classification of court rulings in PDF using semantic AI, improving accuracy and cutting document review time.",
        },
        paragon: {
          title: "Paragon Pro Elite",
          description: "Digital platform that connects athletes, families and sports professionals with verified profiles, advanced search, learning resources, events and installable app (PWA + Android).",
        },
        "prados-osuna-ai": {
          title: "Prados‑Osuna AI",
          description: "Intelligent system integrated with MN Program that automates case review, detects statute of limitations and manages legal notices with full traceability.",
        },
        padelchiquito: {
          title: "PadelChiquito",
          description: "Web platform that compares padel rackets, aggregates store prices, manages user reviews and automates data updates with scraping and technical analysis.",
        },
        obrahub360: {
          title: "ObraHub360",
          description: "Platform that connects contractors and construction companies, with document verification via OCR + AI, verified profiles and rating system with premium subscription.",
        },
        "javier-olmo-training": {
          title: "Javier Olmo Training",
          description: "Professional website for coach Javier Olmo with a private library of exercise videos, external API integrations and SSR with Astro + Node.",
        },
      },
      detail: {
        not_found: (slug) => `Detail not found: ${slug}`,
        load_error: "Could not load the detail.",
        loading: "Loading content…",
      },
    },
    blog: {
      subtitle: "Ideas, notes and learnings I’d like to share.",
    },
    resume: {
      download: "Download CV",
    },
    footer: {
      credit:
        'Portfolio template adapted and modified from <a href="https://github.com/soumyajit4419" target="_blank" rel="noreferrer noopener">soumyajit4419</a>',
    },
  },
};

const I18nContext = createContext({
  lang: "es",
  setLang: () => {},
  t: (key, params) => key,
});

function get(obj, path) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    const html = document.documentElement;
    if (html) html.setAttribute("lang", lang);
  }, [lang]);

  const t = useMemo(() => {
    return (key, params) => {
      const dict = translations[lang] || translations.es;
      const val = typeof key === "function" ? key : get(dict, key);
      if (typeof val === "function") return val(params);
      return val != null ? val : key;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t, translations }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
