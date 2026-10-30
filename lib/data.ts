import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiDjango,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiSymfony,
  SiTypescript,
  SiSupabase,
  SiApache,
  SiDotnet,
} from "react-icons/si";
import { FaMobileScreen, FaSchool, FaBoxOpen, FaPlane, FaUtensils, FaBrain, FaShield, FaServer, FaMagnifyingGlass } from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

export const profile = {
  firstName: "DevMisaina",
  lastName: "",
  fullName: "DevMisaina",
  displayName: "DevMisaina",
  title: "Développeur Full Stack Web & Mobile",
  tagline:
    "Je conçois des applications web et mobiles performantes, de la base de données à l'interface, pour transformer vos idées en produits concrets.",
  email: "andrianisaina23@gmail.com",
  phone: "+261 34 95 441 74",
  location: "Fianarantsoa, Madagascar",
  photo: "/images/saina-real.jpg",
  cv: "/documents/sainacv.PDF",
  socials: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
    twitter: "https://twitter.com/",
  },
};

export const about = {
  description:
    "Passionné par le développement web et mobile, je conçois des solutions complètes associant des technologies backend éprouvées à des interfaces modernes. Spécialisé dans Vue.js, React, TypeScript, Laravel et Django, je développe également des applications et systèmes intelligents basés sur la programmation logique.",
  highlights: [
    {
      icon: "code",
      title: "Développement Full Stack",
      text: "Applications web et mobiles complètes, du front-end à la base de données.",
    },
    {
      icon: "database",
      title: "Conception de données",
      text: "Modélisation, optimisation et administration de bases relationnelles et NoSQL.",
    },
    {
      icon: "rocket",
      title: "Mise en production",
      text: "Déploiement, API REST et intégration de systèmes prêts pour le terrain.",
    },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  accent: string;
};

export const experiences: Experience[] = [
  {
    company: "Welthungerhilfe (WHH)",
    role: "Stage — Gestionnaire de base de données",
    period: "2024",
    description:
      "Participation au développement d'outils de suivi des programmes d'aide humanitaire. Création d'interfaces de gestion et de rapports pour le suivi des bénéficiaires.",
    technologies: ["React", "Next.js", "Laravel"],
    accent: "#f97316",
  },
  {
    company: "Ministère de l'Enseignement Supérieur",
    role: "Stage — Développeur",
    period: "2023",
    description:
      "Développement du système de gestion de pointage du personnel. Mise en place d'une solution complète de suivi des présences avec interface administrateur et rapports automatisés.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    accent: "#1e40af",
  },
  {
    company: "Conservation International Madagascar",
    role: "Prestataire",
    period: "2023",
    description:
      "Appui à l'élaboration de bases de données environnementales. Conception de systèmes de gestion de données pour la conservation de la biodiversité et mise en place d'outils de suivi et d'analyse des indicateurs.",
    technologies: ["Base de données", "Analyse de données", "Traitement de données"],
    accent: "#10b981",
  },
  {
    company: "Cisco Midingy Atsimo",
    role: "Stage — Développeur",
    period: "2022",
    description:
      "Développement d'une application de gestion de distribution de kits scolaires. Conception et mise en place d'un système complet de suivi et de gestion des kits éducatifs.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    accent: "#4f46e5",
  },
];

export type Education = {
  school: string;
  logo: string;
  degree: string;
  field: string;
  description: string;
  skills: string[];
};

export const education: Education[] = [
  {
    school: "École Nationale Informatique",
    logo: "/images/logo-eni.png",
    degree: "Licence en Informatique",
    field: "Parcours Génie Logiciel et Base de Données",
    description: "Formation fondamentale en ingénierie logicielle et systèmes d'information.",
    skills: [
      "Développement d'applications web et mobiles",
      "Conception et gestion de bases de données",
      "Architecture logicielle et patterns de conception",
      "Méthodologies de développement agile",
      "Gestion de projets informatiques",
    ],
  },
  {
    school: "Dimagi Academy",
    logo: "/images/logo-dimagi.png",
    degree: "Certificat — CommCare Fondamentale",
    field: "Développement d'application mobile",
    description:
      "Formation et certification en développement d'applications mobiles avec CommCare pour la collecte de données et la gestion de programmes.",
    skills: [
      "Développement d'applications CommCare",
      "Collecte et gestion de données mobiles",
      "Conception d'interfaces pour applications humanitaires",
      "Intégration de workflows complexes",
      "Analyse et reporting de données",
    ],
  },
  {
    school: "UniAthena",
    logo: "/images/logo-uniathena.PNG",
    degree: "SQL Certificate",
    field: "Base de données",
    description: "Certification professionnelle en SQL et conception de bases de données relationnelles.",
    skills: [
      "Requêtes SQL et optimisation",
      "Conception de bases de données relationnelles",
      "Modélisation de données",
      "Administration de bases de données",
    ],
  },
];

export type Skill = { name: string; level: number; icon: IconType };
export type SkillCategory = { name: string; icon: IconType; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React", level: 80, icon: SiReact },
      { name: "Next.js", level: 78, icon: SiNextdotjs },
      { name: "JavaScript", level: 76, icon: SiJavascript },
      { name: "Vue.js", level: 74, icon: SiVuedotjs },
      { name: "TypeScript", level: 72, icon: SiTypescript },
      { name: "HTML / CSS", level: 82, icon: SiHtml5 },
    ],
  },
  {
    name: "Backend Frameworks",
    icon: SiLaravel,
    skills: [
      { name: "Laravel", level: 75, icon: SiLaravel },
      { name: "Django", level: 70, icon: SiDjango },
      { name: "ASP.NET Core", level: 65, icon: SiDotnet },
      { name: "Symfony", level: 62, icon: SiSymfony },
    ],
  },
  {
    name: "Mobile",
    icon: FaMobileScreen,
    skills: [
      { name: "React Native", level: 70, icon: SiReact },
      { name: "Flutter", level: 68, icon: SiFlutter },
    ],
  },
  {
    name: "Base de données",
    icon: SiMysql,
    skills: [
      { name: "MySQL", level: 75, icon: SiMysql },
      { name: "PostgreSQL", level: 70, icon: SiPostgresql },
      { name: "MongoDB", level: 64, icon: SiMongodb },
    ],
  },
  {
    name: "Langages & IA",
    icon: FaBrain,
    skills: [
      { name: "PHP", level: 75, icon: SiPhp },
      { name: "Prolog", level: 60, icon: FaBrain },
    ],
  },
];

export type Project = {
  title: string;
  client: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Plateforme Association REKOMA",
    client: "Association REKOMA",
    description:
      "Portail associatif complet comprenant la gestion des membres, un site public vitrine, une boutique en ligne pour la vente d'accessoires solidaires, et un espace de pilotage des projets associatifs.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Gestion de Pointage Personnel",
    client: "Ministère de l'Enseignement Supérieur",
    description:
      "Système de gestion et suivi des présences du personnel avec tableaux de bord, interface administrateur et génération automatique de fiches de pointage.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    github: "https://github.com/Misaina23/pointage",
    demo: "https://pointagemisaina.vercel.app",
  },
  {
    title: "Gestion de Lycée",
    client: "Lycée Midongy",
    description:
      "Plateforme scolaire intégrée : inscription des élèves, gestion des classes, emploi du temps, saisie des notes et bulletins automatisés.",
    technologies: ["Vue.js", "Symfony", "MySQL"],
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Plateforme Agricole & Semences",
    client: "Coopérative agricole",
    description:
      "Application de gestion et suivi de distribution de semences, inventaire des stocks et traçabilité des parcelles agricoles avec cartographie.",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    github: "https://github.com/Misaina23/videeko",
    demo: "https://videeko-vanilla.vercel.app",
  },
  {
    title: "Suivi Aide Humanitaire",
    client: "Welthungerhilfe (WHH)",
    description:
      "Outil de coordination et de suivi des bénéficiaires pour les programmes d'aide humanitaire, reporting analytique et indicateurs clés.",
    technologies: ["React", "Next.js", "Laravel", "MySQL"],
    github: "https://github.com/Misaina23",
    demo: "https://pointagemisaina.vercel.app",
  },
  {
    title: "Gestion Matériel & Stock",
    client: "Gestion de contrats de personnel",
    description:
      "Système de gestion de matériel et de stock lié aux contrats de personnel avec historique des affectations et alertes d'inventaire.",
    technologies: ["React", "Next.js", "Laravel", "MySQL"],
    github: "https://github.com/Misaina23",
    demo: "https://rekoma-318.vercel.app",
  },
];

export type AcademicProject = {
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

export const academicProjects: AcademicProject[] = [
  {
    title: "Plateforme Association REKOMA",
    context: "Association REKOMA (Projet communautaire)",
    description:
      "Plateforme tout-en-un pour l'association REKOMA assurant la visibilité des initiatives, la gestion centralisée des membres, une boutique e-commerce pour financer les actions par la vente d'accessoires, et un outil de suivi des projets sur le terrain.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Gestion centralisée des membres, adhésions et cotisations",
      "Site public vitrine, actualités et communication officielle",
      "Boutique solidaire et vente d'accessoires REKOMA en ligne",
      "Planification, pilotage et gestion des projets communautaires",
      "Suivi des activités, indicateurs clés et rapports d'impact",
    ],
    categories: ["Full Stack", "Web", "Data Management"],
    icon: FaBoxOpen,
    featured: true,
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Plateforme de gestion agricole",
    context: "Coopérative agricole (Videeko)",
    description:
      "Plateforme numérique complète destinée à accompagner une coopérative agricole dans la collecte, la gestion et l'analyse des données des producteurs sur le terrain.",
    technologies: ["React Native", "Next.js", "Django", "PostgreSQL"],
    features: [
      "Collecte de données terrain depuis mobile",
      "Gestion des producteurs, parcelles et productions",
      "Suivi des inspections et distributions",
      "Tableau de bord statistique et cartographie",
      "Synchronisation des données hors-ligne",
    ],
    categories: ["Full Stack", "Data Management"],
    icon: PiPlantFill,
    github: "https://github.com/Misaina23/videeko",
    demo: "https://videeko-vanilla.vercel.app",
  },
  {
    title: "Gestion de Lycée (Lycée Midongy)",
    context: "Établissement scolaire",
    description:
      "Application de gestion complète du parcours scolaire des élèves, de l'inscription jusqu'au suivi des résultats académiques et des bulletins scolaires.",
    technologies: ["Vue.js", "Symfony", "MySQL"],
    features: [
      "Inscription et gestion des classes",
      "Gestion des matières et enseignants",
      "Saisie des notes et calcul des moyennes",
      "Consultation des résultats et génération de bulletins",
    ],
    categories: ["Web"],
    icon: FaSchool,
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Gestion de Pointage Personnel",
    context: "Ministère de l'Enseignement Supérieur",
    description:
      "Système de pointage et suivi de présence du personnel administratif avec interface d'administration et rapports automatisés.",
    technologies: ["Vue.js", "Laravel", "MySQL"],
    features: [
      "Pointage journalier et horodatage",
      "Tableau de bord de présence administrateur",
      "Exportation des rapports de présences",
      "Gestion des utilisateurs et rôles",
    ],
    categories: ["Web", "Full Stack"],
    icon: FaServer,
    github: "https://github.com/Misaina23/pointage",
    demo: "https://pointagemisaina.vercel.app",
  },
  {
    title: "Application de suivi de dépenses",
    context: "Projet mobile personnel (Expense Tracker)",
    description:
      "Application mobile permettant aux utilisateurs de suivre leurs dépenses quotidiennes, de catégoriser leurs transactions et de mieux gérer leur budget personnel.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: [
      "Ajout et modification des dépenses",
      "Catégorisation des transactions",
      "Historique des transactions",
      "Interface mobile responsive",
    ],
    categories: ["Mobile"],
    icon: FaMobileScreen,
    github: "https://github.com/Misaina23",
    demo: "https://pointagemisaina.vercel.app",
  },
  {
    title: "Gestion de billets d'avion",
    context: "Application mobile",
    description:
      "Application mobile permettant aux utilisateurs de rechercher, gérer et réserver des billets d'avion.",
    technologies: ["React Native"],
    features: [
      "Recherche de vols",
      "Gestion des réservations",
      "Informations voyageurs",
      "Interface mobile intuitive",
    ],
    categories: ["Mobile"],
    icon: FaPlane,
    github: "https://github.com/Misaina23",
    demo: "https://rekoma-318.vercel.app",
  },
   {
     title: "Réservation de restaurant",
     context: "Application web",
     description:
       "Application permettant aux clients de réserver des tables et aux administrateurs de gérer les réservations.",
     technologies: ["Java JSP", "Java EE", "Base de données relationnelle"],
     features: [
       "Gestion des clients",
       "Réservation de tables",
       "Gestion des disponibilités",
       "Suivi des réservations",
     ],
     categories: ["Web", "Data Management"],
     icon: FaUtensils,
     github: "#",
     demo: "#",
   },
   {
     title: "Application d'enquête policière intelligente",
     context: "Projet académique",
     description:
       "Application académique développée avec Prolog et TypeScript permettant de simuler une enquête policière basée sur un système de raisonnement logique. L'application permet de gérer des faits, des règles, des indices, des suspects et d'effectuer une analyse de scénarios afin d'aider à résoudre une enquête.",
     technologies: ["Prolog", "TypeScript", "Programmation logique", "Intelligence artificielle / système expert"],
     features: [
       "Gestion des suspects et des informations d'enquête",
       "Gestion des indices et des preuves",
       "Système de déduction logique basé sur des règles Prolog",
       "Recherche et analyse des scénarios possibles",
       "Interface utilisateur développée avec TypeScript",
     ],
     categories: ["Full Stack"],
     icon: FaMagnifyingGlass,
     github: "#",
     demo: "#",
   },
 ];

export type Service = {
  icon: IconType;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: SiReact,
    title: "Développement Web Full Stack",
    description:
      "Conception d'applications web sur mesure, rapides et maintenables, du maquettage à la mise en production.",
    points: ["Next.js & Vue.js", "Laravel & Django", "Interfaces responsives"],
  },
  {
    icon: FaMobileScreen,
    title: "Développement Mobile",
    description:
      "Applications mobiles Android & iOS pour accompagner vos équipes et vos utilisateurs sur le terrain.",
    points: ["Flutter & React Native", "Mode hors-ligne", "Synchronisation"],
  },
  {
    icon: SiMysql,
    title: "Conception & Gestion de Bases de Données",
    description:
      "Modélisation, optimisation et administration de données fiables pour piloter vos activités.",
    points: ["MySQL & PostgreSQL", "MongoDB (NoSQL)", "Reporting & analyse"],
  },
  {
    icon: SiApache,
    title: "API & Intégration de systèmes",
    description:
      "Création d'API REST et intégration de systèmes pour faire communiquer vos outils entre eux.",
    points: ["API REST sécurisées", "Cartographie des données", "Interopérabilité"],
  },
];

export const techIcon: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  "React.js": SiReact,
  "React Native": SiReact,
  "Vue.js": SiVuedotjs,
  "HTML / CSS": SiCss,
  "HTML/CSS": SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "API REST": SiApache,
  Django: SiDjango,
  Flutter: SiFlutter,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Symfony: SiSymfony,
  JSP: SiApache,
  "Java JSP": SiApache,
  "Java EE": SiApache,
  SQLite: SiSupabase,
  Dart: SiFlutter,
  "Base de données": SiMysql,
  "Base de données relationnelle": SiMysql,
  "Analyse de données": SiMysql,
  "Traitement de données": SiMysql,
  "Prolog": FaBrain,
  "Programmation logique": FaBrain,
  "Intelligence artificielle / système expert": FaBrain,
  "ASP.NET Core / C#": SiDotnet,
  "Authentification JWT": FaShield,
  "Architecture backend": FaServer,
};
