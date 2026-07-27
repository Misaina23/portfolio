import type { IconType } from "react-icons";
import {
  SiReact,
  SiMysql,
  SiApache,
} from "react-icons/si";
import {
  FaMobileScreen,
  FaSchool,
  FaBoxOpen,
  FaPlane,
  FaUtensils,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { useLanguage } from "@/contexts/LanguageContext";

export { useLanguage };

export const profileEn = {
  firstName: "Nanga",
  lastName: "ANDRIANISAINA",
  fullName: "ANDRIANISAINA Nanga Miaramanana",
  title: "Full Stack Web & Mobile Developer",
  tagline:
    "I design high-performance web and mobile applications, from database to interface, turning ideas into real products.",
  email: "andrianisaina23@gmail.com",
  phone: "+261 34 95 441 74",
  location: "Fianarantsoa, Madagascar",
  photo: "/images/Saina.png",
  cv: "/documents/ResumeSaina.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
};

export const aboutEn = {
  description:
    "Passionate about web and mobile development, I build complete solutions combining proven backend technologies with modern interfaces. Specialized in Vue.js, React, TypeScript, Laravel and Django, I also develop intelligent applications and systems based on logic programming.",
  highlights: [
    {
      icon: "code",
      title: "Full Stack Development",
      text: "Complete web and mobile applications, from front-end to database.",
    },
    {
      icon: "database",
      title: "Data Design",
      text: "Modeling, optimization and administration of relational and NoSQL databases.",
    },
    {
      icon: "rocket",
      title: "Deployment",
      text: "Deployment, REST API and integration of field-ready systems.",
    },
  ],
};

export type ExperienceEn = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  accent: string;
};

export const experiencesEn: ExperienceEn[] = [
  {
    company: "Welthungerhilfe (WHH)",
    role: "Internship — Database Manager",
    period: "2024",
    description:
      "Contributed to the development of humanitarian aid program monitoring tools. Created management interfaces and reports for beneficiary tracking.",
    technologies: ["React", "Next.js", "Laravel"],
    accent: "#f97316",
  },
  {
    company: "Ministry of Higher Education",
    role: "Internship — Developer",
    period: "2023",
    description:
      "Developed a staff time-tracking management system. Implemented a complete attendance tracking solution with admin interface and automated reports.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    accent: "#1e40af",
  },
  {
    company: "Conservation International Madagascar",
    role: "Contractor",
    period: "2023",
    description:
      "Support in developing environmental databases. Designed data management systems for biodiversity conservation and implemented monitoring and environmental indicator analysis tools.",
    technologies: ["Database", "Data analysis", "Data processing"],
    accent: "#10b981",
  },
  {
    company: "Cisco Midingy Atsimo",
    role: "Internship — Developer",
    period: "2022",
    description:
      "Developed a school kit distribution management application. Designed and implemented a complete tracking and management system for educational kits.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    accent: "#4f46e5",
  },
];

export type EducationEn = {
  school: string;
  logo: string;
  degree: string;
  field: string;
  description: string;
  skills: string[];
};

export const educationEn: EducationEn[] = [
  {
    school: "National School of Computer Science",
    logo: "/images/logo-eni.png",
    degree: "Bachelor's Degree in Computer Science",
    field: "Software Engineering and Database Track",
    description: "Fundamental training in software engineering and information systems.",
    skills: [
      "Web and mobile application development",
      "Database design and management",
      "Software architecture and design patterns",
      "Agile development methodologies",
      "IT project management",
    ],
  },
  {
    school: "Dimagi Academy",
    logo: "/images/logo-dimagi.png",
    degree: "Certificate — CommCare Fundamentals",
    field: "Mobile application development",
    description:
      "Training and certification in mobile application development with CommCare for data collection and program management.",
    skills: [
      "CommCare application development",
      "Mobile data collection and management",
      "User interface design for humanitarian applications",
      "Complex workflow integration",
      "Data analysis and reporting",
    ],
  },
  {
    school: "UniAthena",
    logo: "/images/logo-uniathena.PNG",
    degree: "SQL Certificate",
    field: "Database",
    description: "Professional certification in SQL and relational database design.",
    skills: [
      "SQL queries and optimization",
      "Relational database design",
      "Data modeling",
      "Database administration",
    ],
  },
];

export type ProjectEn = {
  title: string;
  client: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projectsEn: ProjectEn[] = [
  {
    title: "Staff Time-Tracking Management",
    client: "Ministry of Higher Education & Scientific Research",
    description:
      "Staff time-tracking management system with attendance monitoring, admin interface and automated reports.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Seed Distribution Management",
    client: "Agricultural project",
    description:
      "Application for managing and monitoring agricultural seed distribution with dashboards.",
    technologies: ["Vue.js", "Django", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Restaurant Management",
    client: "Restaurant establishments",
    description:
      "Complete management system for restaurant establishments: orders, inventory and activity tracking.",
    technologies: ["JSP", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Humanitarian Aid Tracking",
    client: "Humanitarian NGO",
    description:
      "Platform for tracking and coordinating humanitarian aid actions with beneficiary reporting.",
    technologies: ["React", "Next.js", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Equipment & Stock Management",
    client: "Personnel contract management",
    description:
      "Equipment and stock management system linked to personnel contracts with history and alerts.",
    technologies: ["React", "Next.js", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "School Kit Distribution",
    client: "Cisco Midingy Atsimo",
    description:
      "Management and tracking system for school kit distribution with beneficiary follow-up.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
  },
];

export type AcademicProjectEn = {
  title: string;
  context: string;
  description: string;
  technologies: string[];
  features: string[];
  categories: ("Web" | "Mobile" | "Full Stack" | "Data Management")[];
  icon: IconType;
  featured?: boolean;
  github?: string;
  demo?: string;
};

export const academicProjectsEn: AcademicProjectEn[] = [
  {
    title: "Agricultural Management Platform",
    context: "Agricultural cooperative",
    description:
      "Complete digital platform designed to support an agricultural cooperative in collecting, managing and analyzing producer data in the field.",
    technologies: ["React Native", "Next.js", "Django", "PostgreSQL"],
    features: [
      "Mobile field data collection",
      "Producer, plot and production management",
      "Inspection and distribution tracking",
      "Statistical dashboard and mapping",
      "Data synchronization",
    ],
    categories: ["Full Stack", "Data Management"],
    icon: PiPlantFill,
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    title: "Expense Tracker App",
    context: "Personal mobile project",
    description:
      "Mobile app allowing users to track daily expenses, categorize transactions and better manage their personal budget.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: [
      "Add and edit expenses",
      "Transaction categorization",
      "Transaction history",
      "Responsive mobile interface",
    ],
    categories: ["Mobile"],
    icon: FaMobileScreen,
    github: "#",
    demo: "#",
  },
  {
    title: "Student Management System",
    context: "High school",
    description:
      "Complete student academic tracking application, from enrollment to academic results follow-up.",
    technologies: ["Vue.js", "Symfony", "MySQL"],
    features: [
      "Class management and enrollment",
      "Subject and teacher management",
      "Grade entry and average calculation",
      "Results consultation",
    ],
    categories: ["Web"],
    icon: FaSchool,
    github: "#",
    demo: "#",
  },
  {
    title: "Dairy Product Sales Management",
    context: "Commercial web application",
    description:
      "Management system for tracking sales and marketing of dairy products.",
    technologies: ["React.js", "Laravel", "MongoDB"],
    features: [
      "Product and customer management",
      "Sales and order management",
      "Inventory tracking",
      "Commercial dashboard",
    ],
    categories: ["Web", "Data Management"],
    icon: FaBoxOpen,
    github: "#",
    demo: "#",
  },
  {
    title: "Airline Ticket Booking",
    context: "Mobile application",
    description:
      "Mobile app allowing users to search, manage and book airline tickets.",
    technologies: ["React Native"],
    features: [
      "Flight search",
      "Booking management",
      "Traveler information",
      "Intuitive mobile interface",
    ],
    categories: ["Mobile"],
    icon: FaPlane,
    github: "#",
    demo: "#",
  },
  {
    title: "Restaurant Reservation",
    context: "Web application",
    description:
      "Application allowing customers to reserve tables and administrators to manage reservations.",
    technologies: ["Java JSP", "Java EE", "Relational database"],
    features: [
      "Customer management",
      "Table reservation",
      "Availability management",
      "Reservation tracking",
    ],
    categories: ["Web", "Data Management"],
    icon: FaUtensils,
    github: "#",
    demo: "#",
  },
  {
    title: "Intelligent Police Investigation App",
    context: "Academic project",
    description:
      "Academic application developed with Prolog and TypeScript to simulate a police investigation based on a logical reasoning system. The application allows managing facts, rules, clues, suspects and performing analysis to help solve an investigation.",
    technologies: ["Prolog", "TypeScript", "Logic programming", "Artificial intelligence / expert system"],
    features: [
      "Suspect and investigation information management",
      "Clue and evidence management",
      "Logical deduction system based on Prolog rules",
      "Search and analysis of possible scenarios",
      "User interface developed with TypeScript",
    ],
    categories: ["Full Stack"],
    icon: FaMagnifyingGlass,
    github: "#",
    demo: "#",
  },
];

export type ServiceEn = {
  icon: IconType;
  title: string;
  description: string;
  points: string[];
};

export const servicesEn: ServiceEn[] = [
  {
    icon: SiReact,
    title: "Full Stack Web Development",
    description:
      "Design of custom, fast and maintainable web applications, from prototyping to production.",
    points: ["Next.js & Vue.js", "Laravel & Django", "Responsive interfaces"],
  },
  {
    icon: FaMobileScreen,
    title: "Mobile Development",
    description:
      "Android & iOS mobile applications to support your teams and users in the field.",
    points: ["Flutter & React Native", "Offline mode", "Synchronization"],
  },
  {
    icon: SiMysql,
    title: "Database Design & Management",
    description:
      "Modeling, optimization and administration of reliable data to drive your activities.",
    points: ["MySQL & PostgreSQL", "MongoDB (NoSQL)", "Reporting & analysis"],
  },
  {
    icon: SiApache,
    title: "API & System Integration",
    description:
      "REST API creation and system integration to make your tools communicate with each other.",
    points: ["Secure REST APIs", "Data mapping", "Interoperability"],
  },
];

export type TranslationKeys = {
  common: {
    available: string;
    downloadCv: string;
    viewProjects: string;
    contactMe: string;
    all: string;
    website: string;
    demo: string;
    github: string;
    skills: string;
    features: string;
    sent: string;
    sentError: string;
    invalidFields: string;
    sending: string;
    rights: string;
    builtWith: string;
    contact: string;
    email: string;
    phone: string;
    location: string;
    quickLinks: string;
    followMe: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
    academic: string;
    services: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    highlights: {
      fullstack: { title: string; text: string };
      data: { title: string; text: string };
      deploy: { title: string; text: string };
    };
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  education: {
    eyebrow: string;
    title: string;
    subtitle: string;
    skillsAcquired: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  academicProjects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    featured: string;
    noResults: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    sendMessage: string;
    infoTitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    success: string;
    error: string;
    validationError: string;
    socialTitle: string;
  };
  footer: {
    description: string;
  };
};

const fr: TranslationKeys = {
  common: {
    available: "Disponible pour de nouveaux projets",
    downloadCv: "Télécharger mon CV",
    viewProjects: "Voir mes projets",
    contactMe: "Me contacter",
    all: "Tous",
    website: "Site web",
    demo: "Démo",
    github: "GitHub",
    skills: "Compétences acquises",
    features: "Fonctionnalités principales",
    sent: "Merci ! Votre message a bien été envoyé.",
    sentError: "Désolé, une erreur est survenue. Veuillez réessayer.",
    invalidFields: "Veuillez corriger les champs en erreur.",
    sending: "Envoi en cours...",
    rights: "Tous droits réservés.",
    builtWith: "Conçu et développé avec Next.js & Tailwind CSS",
    contact: "Contactez-moi",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    quickLinks: "Liens rapides",
    followMe: "Suivez-moi",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
    academic: "Académique",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    badge: "Disponible pour de nouveaux projets",
    title: "Développeur Full Stack Web & Mobile",
    subtitle:
      "Je conçois des applications web et mobiles performantes, de la base de données à l'interface, pour transformer vos idées en produits concrets.",
    description: "Passionné par le développement web et mobile, je conçois des solutions complètes associant des technologies backend éprouvées à des interfaces modernes. Spécialisé dans Vue.js, React, TypeScript, Laravel et Django, je développe également des applications et systèmes intelligents basés sur la programmation logique.",
  },
  about: {
    eyebrow: "À propos",
    title: "Qui je suis",
    subtitle: "Un développeur junior passionné, curieux et orienté résultats, prêt à relever vos défis techniques.",
    highlights: {
      fullstack: { title: "Développement Full Stack", text: "Applications web et mobiles complètes, du front-end à la base de données." },
      data: { title: "Conception de données", text: "Modélisation, optimisation et administration de bases relationnelles et NoSQL." },
      deploy: { title: "Mise en production", text: "Déploiement, API REST et intégration de systèmes prêts pour le terrain." },
    },
  },
  skills: {
    eyebrow: "Expertise",
    title: "Compétences techniques",
    subtitle: "Un socle full stack couvrant le web, le mobile et la donnée.",
  },
  experience: {
    eyebrow: "Expérience",
    title: "Expérience Professionnelle",
    subtitle: "Mes stages et missions techniques.",
  },
  education: {
    eyebrow: "Formation",
    title: "Mon parcours académique",
    subtitle: "Les fondations qui structurent ma pratique du développement.",
    skillsAcquired: "Compétences acquises",
  },
  projects: {
    eyebrow: "Réalisations",
    title: "Projets professionnels",
    subtitle: "Des missions concrètes pour des organisations et des institutions.",
  },
  academicProjects: {
    eyebrow: "Académique & Personnel",
    title: "Projets académiques et personnels",
    subtitle: "Mes réalisations techniques, de l'application mobile au système complet.",
    featured: "Projet phare",
    noResults: "Aucun projet dans cette catégorie pour le moment.",
  },
  services: {
    eyebrow: "Services",
    title: "Ce que je propose",
    subtitle: "Des prestations adaptées à vos besoins, du prototype à la mise en production.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Travaillons ensemble",
    subtitle: "Une idée, un projet ou une question ? Écrivez-moi, je réponds rapidement.",
    sendMessage: "Envoyer le message",
    infoTitle: "Informations de contact",
    name: "Nom complet",
    email: "Email",
    subject: "Sujet",
    message: "Message",
    namePlaceholder: "Votre nom",
    emailPlaceholder: "vous@exemple.com",
    subjectPlaceholder: "Sujet de votre message",
    messagePlaceholder: "Décrivez votre projet ou votre demande...",
    success: "Merci ! Votre message a bien été envoyé.",
    error: "Désolé, une erreur est survenue. Veuillez réessayer.",
    validationError: "Veuillez remplir correctement tous les champs.",
    socialTitle: "Réseaux sociaux",
  },
  footer: {
    description: "Développeur Full Stack Junior passionné, créant des solutions innovantes pour vos projets web et mobiles.",
  },
};

const en: TranslationKeys = {
  common: {
    available: "Available for new projects",
    downloadCv: "Download Resume",
    viewProjects: "View my projects",
    contactMe: "Contact me",
    all: "All",
    website: "Website",
    demo: "Demo",
    github: "GitHub",
    skills: "Skills acquired",
    features: "Main features",
    sent: "Thank you! Your message has been sent.",
    sentError: "Sorry, an error occurred. Please try again.",
    invalidFields: "Please correct the fields in error.",
    sending: "Sending...",
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Tailwind CSS",
    contact: "Contact me",
    email: "Email",
    phone: "Phone",
    location: "Location",
    quickLinks: "Quick links",
    followMe: "Follow me",
  },
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    academic: "Academic",
    services: "Services",
    contact: "Contact",
  },
  hero: {
    badge: "Available for new projects",
    title: "Full Stack Web & Mobile Developer",
    subtitle:
      "I design high-performance web and mobile applications, from database to interface, turning ideas into real products.",
    description: "Passionate about web and mobile development, I build complete solutions combining proven backend technologies with modern interfaces. Specialized in Vue.js, React, TypeScript, Laravel and Django, I also develop intelligent applications and systems based on logic programming.",
  },
  about: {
    eyebrow: "About",
    title: "Who I am",
    subtitle: "A passionate, curious and results-driven junior developer, ready to take on your technical challenges.",
    highlights: {
      fullstack: { title: "Full Stack Development", text: "Complete web and mobile applications, from front-end to database." },
      data: { title: "Data Design", text: "Modeling, optimization and administration of relational and NoSQL databases." },
      deploy: { title: "Deployment", text: "Deployment, REST API and integration of field-ready systems." },
    },
  },
  skills: {
    eyebrow: "Expertise",
    title: "Technical Skills",
    subtitle: "A full-stack foundation covering web, mobile and data.",
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional Experience",
    subtitle: "My internships and technical missions.",
  },
  education: {
    eyebrow: "Education",
    title: "My academic journey",
    subtitle: "The foundations that structure my development practice.",
    skillsAcquired: "Skills acquired",
  },
  projects: {
    eyebrow: "Achievements",
    title: "Professional Projects",
    subtitle: "Concrete missions for organizations and institutions.",
  },
  academicProjects: {
    eyebrow: "Academic & Personal",
    title: "Academic and personal projects",
    subtitle: "My technical achievements, from mobile apps to complete systems.",
    featured: "Featured project",
    noResults: "No projects in this category at the moment.",
  },
  services: {
    eyebrow: "Services",
    title: "What I offer",
    subtitle: "Services tailored to your needs, from prototype to production.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    subtitle: "An idea, a project or a question? Write to me, I reply quickly.",
    sendMessage: "Send message",
    infoTitle: "Contact information",
    name: "Full name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    subjectPlaceholder: "Subject of your message",
    messagePlaceholder: "Describe your project or request...",
    success: "Thank you! Your message has been sent.",
    error: "Sorry, an error occurred. Please try again.",
    validationError: "Please fill in all fields correctly.",
    socialTitle: "Social media",
  },
  footer: {
    description: "Passionate junior Full Stack developer, creating innovative solutions for your web and mobile projects.",
  },
};

export const translations = { fr, en };

export function useT() {
  const { locale } = useLanguage();
  return translations[locale];
}

import { profile as profileFr } from "@/lib/data";
import { about as aboutFr } from "@/lib/data";
import { experiences as experiencesFr } from "@/lib/data";
import { education as educationFr } from "@/lib/data";
import { projects as projectsFr } from "@/lib/data";
import { academicProjects as academicProjectsFr } from "@/lib/data";
import { services as servicesFr } from "@/lib/data";

export function useProfile() {
  const { locale } = useLanguage();
  return locale === "fr" ? profileFr : profileEn;
}

export function useAbout() {
  const { locale } = useLanguage();
  return locale === "fr" ? aboutFr : aboutEn;
}

export function useExperiences() {
  const { locale } = useLanguage();
  return locale === "fr" ? experiencesFr : experiencesEn;
}

export function useEducation() {
  const { locale } = useLanguage();
  return locale === "fr" ? educationFr : educationEn;
}

export function useProjects() {
  const { locale } = useLanguage();
  return locale === "fr" ? projectsFr : projectsEn;
}

export function useAcademicProjects() {
  const { locale } = useLanguage();
  return locale === "fr" ? academicProjectsFr : academicProjectsEn;
}

export function useServices() {
  const { locale } = useLanguage();
  return locale === "fr" ? servicesFr : servicesEn;
}
