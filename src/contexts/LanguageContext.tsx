import React, { createContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'de';

type LanguageContextType = {
  lang: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: string) => any; // changed to return any to support arrays/objects
};

const translations: Record<Lang, Record<string, any>> = {
  en: {
    nav: {
      brand: '</portfolio>',
      about: 'about',
      projects: 'projects',
      skills: 'skills',
      contact: 'contact',
      german: 'german',
    },
    hero: {
      path: '~/portfolio',
      greeting: "Hello, I'm",
      description: 'Full-time student and full-stack developer. Scroll down to learn a bit about me!',
      view: 'view_experience()',
      touch: 'get_in_touch()',
    },
    projects: {
      heading: 'experience()',
      entries: {
        '1': {
          title: 'Intern',
          company: 'Turingpoint',
          duration: 'Sep 2025 — Dec 2025',
          description:
            'Intern at Turingpoint in Hamburg, DE. Worked on developing a database of web vulnerabilities using Python.',
          tech: ['Python', 'LiteLLM', 'BeautifulSoup', 'Figma'],
        },
        '2': {
          title: 'Sports Warehouse',
          company: 'Class Project',
          duration: 'Feb 2025 — May 2025',
          description:
            'Developed a full-stack web and mobile application using React and React Native.',
          tech: ['React', 'JavaScript', 'PHP', 'PostgreSQL'],
        },
        '3': {
          title: 'Portfolio Website',
          company: 'Personal Project',
          duration: 'Nov 2025',
          description: 'Personal project built with React to showcase work and animations.',
          tech: ['React', 'JavaScript', 'HTML', 'CSS'],
        },
      },
    },
    about: {
      heading: 'about()',
      paragraphs: [
        "{'>'} Passionate developer with a love for creating elegant solutions to complex problems. I specialize in building modern web applications that are both beautiful and functional.",
        "{'>'} When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.",
        "{'>'} I believe in writing clean, maintainable code and creating user experiences that make a difference.",
      ],
    },
    skills: {
      heading: 'skills()',
      items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL'],
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Tools: 'Tools',
      },
    },
    contact: {
      heading: 'contact()',
      body: 'Available for new opportunities! If you have a question, or just have a book recommendation, feel free to send me an email or connect via social media.',
    },
    footer: {
      copy: '© 2025 - All rights reserved',
    },
  },
  de: {
    nav: {
      brand: '</portfolio>',
      about: 'über',
      projects: 'projekte',
      skills: 'fähigkeiten',
      contact: 'kontakt',
      german: 'english',
    },
    hero: {
      path: '~/portfolio',
      greeting: 'Hallo, ich bin',
      description:
        'Vollzeitstudent und Full-Stack-Entwickler. Scrollen Sie nach unten, um mehr über mich zu erfahren!',
      view: 'erfahrungen_ansehen()',
      touch: 'kontakt_aufnehmen()',
    },
    projects: {
      heading: 'erfahrung()',
      entries: {
        '1': {
          title: 'Praktikant',
          company: 'Turingpoint',
          duration: 'Sep 2025 — Dez 2025',
          description:
            'Praktikant bei Turingpoint in Hamburg, Deutschland. Arbeitete an der Entwicklung einer Datenbank für Web-Sicherheitslücken mit Python.',
          tech: ['Python', 'LiteLLM', 'BeautifulSoup', 'Figma'],
        },
        '2': {
          title: 'Sports Warehouse',
          company: 'Kursprojekt',
          duration: 'Feb 2025 — Mai 2025',
          description:
            'Entwickelte eine Full-Stack Web- und Mobile-Anwendung mit React und React Native.',
          tech: ['React', 'JavaScript', 'PHP', 'PostgreSQL'],
        },
        '3': {
          title: 'Portfolio-Website',
          company: 'Eigenes Projekt',
          duration: 'Nov 2025',
          description: 'Persönliches Projekt mit React zur Präsentation von Arbeit und Animationen.',
          tech: ['React', 'JavaScript', 'HTML', 'CSS'],
        },
      },
    },
    about: {
      heading: 'über()',
      paragraphs: [
        "{'>'} Leidenschaftlicher Entwickler mit einer Vorliebe dafür, elegante Lösungen für komplexe Probleme zu schaffen. Ich spezialisiere mich auf moderne Webanwendungen, die sowohl schön als auch funktional sind.",
        "{'>'} Wenn ich nicht programmiere, erkunde ich neue Technologien, trage zu Open Source bei oder teile Wissen mit der Entwickler-Community.",
        "{'>'} Ich glaube an sauberen, wartbaren Code und daran, Benutzererlebnisse zu schaffen, die einen Unterschied machen.",
      ],
    },
    skills: {
      heading: 'fähigkeiten()',
      items: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'PostgreSQL'],
      categories: {
        Frontend: 'Frontend',
        Backend: 'Backend',
        Tools: 'Werkzeuge',
      },
    },
    contact: {
      heading: 'kontakt()',
      body: 'Ich bin offen für neue Möglichkeiten! Wenn Sie Fragen haben oder mir einfach nur ein Buch empfehlen möchten, senden Sie mir gerne eine E-Mail oder kontaktieren Sie mich über soziale Medien.',
      emailLabel: 'E-Mail',
      send: 'nachricht_senden()',
    },
    footer: {
      copy: '© 2025 - Alle Rechte vorbehalten',
    },
  },
};

export const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLanguage: () => {},
  t: (k: string) => k,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    return (stored as Lang) || 'en';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const t = (key: string) => {
    const parts = key.split('.');
    let cur: any = translations[lang];
    for (const p of parts) {
      if (cur && p in cur) cur = cur[p];
      else return key;
    }
    return cur; // return any (string/array/object) so components can render structured entries
  };

  return <LanguageContext.Provider value={{ lang, setLanguage: setLang, t }}>{children}</LanguageContext.Provider>;
}