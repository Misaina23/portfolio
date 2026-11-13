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
  FaServer,
} from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";
import { useLanguage } from "@/contexts/LanguageContext";

export { useLanguage };

export const profileEn = {
  firstName: "Nanga Miaramanana",
  lastName: "ANDRIANISAINA",
  fullName: "ANDRIANISAINA Nanga Miaramanana",
  displayName: "DevMisaina",
  title: "Web Developer & Database Designer",
  tagline:
    "B.Sc. in Computer Science (ENI, University of Fianarantsoa), currently in Master 2. Over 4 years of experience in data management and web application development.",
  email: "andrianisaina23@gmail.com",
  phone: "+261 34 95 441 74",
  location: "Lot 1112/3N/3306, Fianarantsoa",
  website: "portfolio-devmisaina.vercel.app",
  photo: "/images/saina-real.jpg",
  cv: "/assets/aistudio/CV_ANDRIANISAINA_Nanga_Miaramanana_15866a6a.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/devmisaina",
    github: "https://github.com/Misaina23",
    facebook: "https://www.facebook.com/andrianisaina.nangamiaramanana",
  },
};

export const aboutEn = {
  description:
    "Passionate about software architecture, modern web development and designing complex relational databases. I build robust, scalable and user-centered solutions using rigorous agile methodologies, with solid experience in Monitoring & Evaluation (MEAL) and humanitarian information systems.",
  highlights: [
    {
      icon: "code",
      title: "Full Stack Web Development",
      text: "Robust web and mobile applications built with Vue.js, React, Next.js, Laravel and Django.",
    },
    {
      icon: "database",
      title: "Data Design & Governance",
      text: "MERISE / 2TUP modeling, MySQL / PostgreSQL relational databases and Power BI visualization.",
    },
    {
      icon: "rocket",
      title: "MEAL & Field Systems",
      text: "CommCare mobile data collection, humanitarian monitoring & evaluation and analytical reporting.",
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
    company: "Videeko Vanilla – Vintsy Cooperative",
    role: "Full Stack Developer",
    period: "March – September 2026",
    description:
      "Design and implementation of an intelligent agricultural platform for collecting, managing and tracking field data for the Vintsy cooperative.",
    technologies: ["Excel", "React Native", "Next.js", "Django", "PostgreSQL"],
    accent: "#ffb400",
  },
  {
    company: "MEAL Department, WHH Madagascar",
    role: "Database Management Intern",
    period: "June – December 2025",
    description:
      "Contributed to humanitarian aid program monitoring solutions: management interfaces and reporting tools for beneficiary tracking.",
    technologies: ["CommCare", "Excel", "Next.js", "Django", "PostgreSQL"],
    accent: "#f97316",
  },
  {
    company: "MESUPRES (Ministry of Higher Education)",
    role: "Intern – DSI Department",
    period: "2024",
    description:
      "Developed a staff attendance tracking system: complete presence monitoring solution with admin dashboard and automated reports.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
    accent: "#1e40af",
  },
  {
    company: "Conservation International, Fianarantsoa",
    role: "Contractor – Database Management",
    period: "2023",
    description:
      "Supported building, processing and cleaning beneficiary databases. Designed data management systems for biodiversity conservation projects and tracking tools.",
    technologies: ["Excel", "SQL", "Python"],
    accent: "#10b981",
  },
  {
    company: "CISCO Midongy Atsimo",
    role: "Software Developer Intern",
    period: "2023",
    description:
      "Designed and developed a school kit distribution management application with complete tracking and monitoring.",
    technologies: ["React", "Django", "MySQL"],
    accent: "#4f46e5",
  },
];

export type EducationEn = {
  school: string;
  logo: string;
  degree: string;
  period: string;
  field: string;
  description: string;
  skills: string[];
};

export const educationEn: EducationEn[] = [
  {
    school: "ENI — University of Fianarantsoa",
    logo: "/images/logo-eni.png",
    degree: "Master 2 in Computer Science",
    period: "2025 – 2026",
    field: "Data Governance & Data Engineering Track",
    description:
      "Advanced graduate studies in data governance, data engineering and large-scale information system architecture.",
    skills: [
      "Data governance & architecture",
      "Complex information systems engineering",
      "Data visualization & reporting (Power BI)",
      "Project planning & logical framework",
    ],
  },
  {
    school: "ENI — University of Fianarantsoa",
    logo: "/images/logo-eni.png",
    degree: "Bachelor's in Computer Science",
    period: "2024 – 2025",
    field: "Software Engineering & Databases Track",
    description:
      "Core academic training in software engineering, web/mobile architecture and relational database design.",
    skills: [
      "MERISE & 2TUP modeling",
      "Web and mobile application development",
      "PostgreSQL / MySQL administration",
      "Agile development methodologies",
    ],
  },
  {
    school: "Dimagi Academy",
    logo: "/images/logo-dimagi.png",
    degree: "Certificate — CommCare Fundamentals",
    period: "Certification",
    field: "Mobile Data Collection (MEAL)",
    description:
      "Certification in CommCare mobile app development for humanitarian Monitoring & Evaluation and field data collection.",
    skills: [
      "CommCare mobile applications",
      "Beneficiary tracking & field surveys",
      "MEAL workflow integration",
    ],
  },
  {
    school: "UniAthena",
    logo: "/images/logo-uniathena.PNG",
    degree: "SQL Certificate",
    period: "Certification",
    field: "Relational Databases",
    description:
      "Professional certification in advanced SQL querying and relational database architecture.",
    skills: [
      "Complex SQL queries & optimization",
      "Relational modeling",
      "Data cleaning & integrity",
    ],
  },
  {
    school: "High School",
    logo: "/images/logo-eni.png",
    degree: "Baccalauréat",
    period: "2018 – 2019",
    field: "Science Track",
    description: "Secondary school diploma specializing in mathematics and physical sciences.",
    skills: [
      "Mathematics & formal logic",
      "Analytical reasoning",
      "Physical sciences",
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
    title: "Videeko Vanilla — Agricultural Platform",
    client: "Vintsy Cooperative (Mar – Sep 2026)",
    description:
      "Design and implementation of a smart agricultural platform for field data collection, inventory and producer tracking for the Vintsy cooperative.",
    technologies: ["Next.js", "React Native", "Django", "PostgreSQL", "Excel"],
    github: "https://github.com/Misaina23/videeko",
    demo: "https://videeko-vanilla.vercel.app",
  },
  {
    title: "REKOMA Association Platform",
    client: "REKOMA Association",
    description:
      "Integrated community portal featuring member & membership management, public vitrine site, online store for solidarity accessories, and project tracking.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Staff Attendance Management System",
    client: "MESUPRES — DSI Department (2024)",
    description:
      "Staff attendance tracking system with administrative dashboard, timestamping and automated timesheet reports.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
    github: "https://github.com/Misaina23/pointage",
    demo: "https://pointagemisaina.vercel.app",
  },
  {
    title: "High School Management System",
    client: "Midongy High School",
    description:
      "Integrated school platform: student enrollment, class management, scheduling, grade entry, and automated report cards.",
    technologies: ["Vue.js", "Symfony", "MySQL"],
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Humanitarian Aid Monitoring (MEAL)",
    client: "WHH Madagascar (Jun – Dec 2025)",
    description:
      "Monitoring and evaluation solutions for humanitarian aid programs: management interfaces, CommCare data collection and beneficiary reporting.",
    technologies: ["CommCare", "Next.js", "Django", "PostgreSQL", "Excel"],
    github: "https://github.com/Misaina23",
  },
  {
    title: "School Kit Distribution Management",
    client: "CISCO Midongy Atsimo (2023)",
    description:
      "School kit distribution tracking application with complete logistics monitoring and reporting.",
    technologies: ["React", "Django", "MySQL"],
    github: "https://github.com/Misaina23",
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
    title: "REKOMA Association Platform",
    context: "REKOMA Association (Community Project)",
    description:
      "Comprehensive digital platform for REKOMA Association: public showcase site, centralized member and membership management, charity e-commerce store for solidarity accessories, and field project monitoring.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Centralized member, membership, and dues management",
      "Public vitrine site, news, and official communication",
      "Charity e-commerce store for REKOMA accessories",
      "Planning, tracking, and management of solidarity projects",
      "Activity tracking, key performance indicators, and impact reports",
    ],
    categories: ["Full Stack", "Web", "Data Management"],
    icon: FaBoxOpen,
    featured: true,
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Agricultural Management Platform",
    context: "Agricultural Cooperative (Videeko)",
    description:
      "Complete digital platform designed to support an agricultural cooperative in collecting, managing and analyzing producer data in the field.",
    technologies: ["React Native", "Next.js", "Django", "PostgreSQL"],
    features: [
      "Mobile field data collection",
      "Producer, plot and production management",
      "Inspection and distribution tracking",
      "Statistical dashboard and mapping",
      "Offline data synchronization",
    ],
    categories: ["Full Stack", "Data Management"],
    icon: PiPlantFill,
    github: "https://github.com/Misaina23/videeko",
    demo: "https://videeko-vanilla.vercel.app",
  },
  {
    title: "High School Management System",
    context: "Midongy High School",
    description:
      "Complete student academic tracking application, from enrollment to academic results and automated report cards.",
    technologies: ["Vue.js", "Symfony", "MySQL"],
    features: [
      "Class management and enrollment",
      "Subject and teacher management",
      "Grade entry and average calculation",
      "Results consultation and report generation",
    ],
    categories: ["Web"],
    icon: FaSchool,
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Staff Time-Tracking Management",
    context: "Ministry of Higher Education",
    description:
      "Staff attendance tracking system with administrative dashboard and automated timesheet reports.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    features: [
      "Daily time-tracking and timestamping",
      "Administrator attendance dashboard",
      "Attendance report export",
      "User and role management",
    ],
    categories: ["Web", "Full Stack"],
    icon: FaServer,
    github: "https://github.com/Misaina23/pointage",
    demo: "https://pointagemisaina.vercel.app",
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
    github: "https://github.com/Misaina23",
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
    github: "https://github.com/Misaina23",
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
    github: "https://github.com/Misaina23",
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
    github: "https://github.com/Misaina23",
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
    description: "Développeur web & concepteur de bases de données (Master 2 Informatique), spécialisé en architectures full stack et systèmes MEAL.",
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
    description: "Web Developer & Database Designer (Master 2 Computer Science), specialized in full-stack architectures and MEAL information systems.",
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
