import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiVuedotjs,
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
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiSpringboot,
  SiPython,
} from "react-icons/si";
import {
  FaMobileScreen,
  FaSchool,
  FaBoxOpen,
  FaPlane,
  FaUtensils,
  FaBrain,
  FaShield,
  FaServer,
  FaMagnifyingGlass,
  FaChartColumn,
  FaNetworkWired,
  FaListCheck,
  FaDatabase,
  FaClipboardCheck,
} from "react-icons/fa6";
import { PiPlantFill } from "react-icons/pi";

export const profile = {
  firstName: "Nanga Miaramanana",
  lastName: "ANDRIANISAINA",
  fullName: "ANDRIANISAINA Nanga Miaramanana",
  displayName: "DevMisaina",
  title: "Développeur web & concepteur de bases de données",
  tagline:
    "Licencié en informatique (ENI, Université de Fianarantsoa), actuellement en Master 2. Plus de 4 ans d'expérience en gestion de données et en développement d'applications web.",
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

export const about = {
  description:
    "Passionné par l'architecture logicielle, le développement web moderne et la conception de bases de données relationnelles complexes. Je conçois des solutions robustes, évolutives et centrées sur l'utilisateur, en appliquant des méthodes agiles rigoureuses. Expérience solide en suivi-évaluation (MEAL) et en systèmes d'information pour le secteur humanitaire.",
  highlights: [
    {
      icon: "code",
      title: "Développement Web Full Stack",
      text: "Conception d'applications web et mobiles robustes avec Vue.js, React, Next.js, Laravel et Django.",
    },
    {
      icon: "database",
      title: "Conception & Gouvernance de Données",
      text: "Modélisation MERISE / 2TUP, bases relationnelles MySQL / PostgreSQL et data visualisation Power BI.",
    },
    {
      icon: "rocket",
      title: "Systèmes MEAL & Terrain",
      text: "Collecte mobile CommCare, suivi-évaluation humanitaire et déploiement d'outils analytiques.",
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
    company: "Videeko Vanilla – Coopérative Vintsy",
    role: "Développeur full stack",
    period: "mars – septembre 2026",
    description:
      "Conception et réalisation d'une plateforme agricole intelligente de collecte, de gestion et de suivi des données pour la coopérative Vintsy.",
    technologies: ["Excel", "React Native", "Next.js", "Django", "PostgreSQL"],
    accent: "#ffb400",
  },
  {
    company: "Département MEAL, WHH Madagascar",
    role: "Stagiaire gestionnaire de base de données",
    period: "juin – décembre 2025",
    description:
      "Participation à la conception de solutions de suivi des programmes d'aide humanitaire : interfaces de gestion et outils de reporting pour le suivi des bénéficiaires.",
    technologies: ["CommCare", "Excel", "Next.js", "Django", "PostgreSQL"],
    accent: "#f97316",
  },
  {
    company: "MESUPRES (Ministère de l'Enseignement Supérieur)",
    role: "Stagiaire – Département DSI",
    period: "2024",
    description:
      "Développement d'un système de gestion de pointage du personnel : solution complète de suivi des présences, avec tableau de bord administratif et rapports automatisés.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
    accent: "#1e40af",
  },
  {
    company: "Conservation International, Fianarantsoa",
    role: "Prestataire – Gestion de bases de données",
    period: "2023",
    description:
      "Appui à la construction, au traitement et au nettoyage des bases de données de bénéficiaires. Conception de systèmes de gestion de données pour des projets de conservation de la biodiversité et mise en place d'outils de suivi.",
    technologies: ["Excel", "SQL", "Python"],
    accent: "#10b981",
  },
  {
    company: "CISCO Midongy Atsimo",
    role: "Stagiaire développeur logiciel",
    period: "2023",
    description:
      "Conception et développement d'une application de gestion de la distribution de kits scolaires, avec un système complet de suivi et de pilotage.",
    technologies: ["React", "Django", "MySQL"],
    accent: "#4f46e5",
  },
];

export type Education = {
  school: string;
  logo: string;
  degree: string;
  period: string;
  field: string;
  description: string;
  skills: string[];
};

export const education: Education[] = [
  {
    school: "ENI — Université de Fianarantsoa",
    logo: "/images/logo-eni.png",
    degree: "Master 2 en Informatique",
    period: "2025 – 2026",
    field: "Parcours Gouvernance et Ingénierie de Données",
    description:
      "Formation avancée en ingénierie, gouvernance et modélisation des systèmes de données à grande échelle.",
    skills: [
      "Gouvernance et architecture des données",
      "Ingénierie de systèmes d'information complexes",
      "Data visualisation & pilotage (Power BI)",
      "Gestion de projet & cadre logique",
    ],
  },
  {
    school: "ENI — Université de Fianarantsoa",
    logo: "/images/logo-eni.png",
    degree: "Licence en Informatique",
    period: "2024 – 2025",
    field: "Parcours Génie logiciel et Base de données",
    description:
      "Formation fondamentale en génie logiciel, architecture applicative et conception de bases de données relationnelles.",
    skills: [
      "Conception MERISE & 2TUP",
      "Développement d'applications web et mobiles",
      "Modélisation & administration PostgreSQL / MySQL",
      "Méthodologies agiles et génie logiciel",
    ],
  },
  {
    school: "Dimagi Academy",
    logo: "/images/logo-dimagi.png",
    degree: "Certificat — CommCare Fondamentale",
    period: "Certification",
    field: "Fondamentaux CommCare & Collecte Mobile",
    description:
      "Certification sur les principes fondamentaux de CommCare pour la collecte de données terrain et le suivi-évaluation (MEAL).",
    skills: [
      "Architecture et formulaires CommCare",
      "Collecte mobile et gestion des cas",
      "Suivi des bénéficiaires sur le terrain",
    ],
  },
  {
    school: "Dimagi Academy",
    logo: "/images/logo-dimagi.png",
    degree: "Certificat — CommCare Développement d'Application",
    period: "Certification",
    field: "Conception d'applications mobiles CommCare",
    description:
      "Certification avancée en conception, logique conditionnelle, workflows complexes et déploiement d'applications CommCare.",
    skills: [
      "Développement d'applications CommCare",
      "Logique avancée & case management",
      "Workflows MEAL et reporting terrain",
    ],
  },
  {
    school: "UniAthena",
    logo: "/images/logo-uniathena.PNG",
    degree: "SQL Certificate",
    period: "Certification",
    field: "Bases de données relationnelles",
    description:
      "Certification professionnelle en requêtage SQL avancé et structuration de bases de données relationnelles.",
    skills: [
      "Requêtes SQL complexes & optimisation",
      "Modélisation relationnelle",
      "Nettoyage et intégrité des données",
    ],
  },
  {
    school: "Enseignement Secondaire",
    logo: "/images/logo-eni.png",
    degree: "Baccalauréat",
    period: "2018 – 2019",
    field: "Série Scientifique",
    description: "Diplôme de fin d'études secondaires, spécialité sciences exactes.",
    skills: [
      "Mathématiques & logique formelle",
      "Raisonnement analytique",
      "Sciences physiques",
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
      { name: "Vue.js", level: 80, icon: SiVuedotjs },
      { name: "React.js", level: 82, icon: SiReact },
      { name: "Next.js", level: 82, icon: SiNextdotjs },
      { name: "Tailwind CSS", level: 84, icon: SiTailwindcss },
      { name: "Bootstrap", level: 78, icon: SiBootstrap },
    ],
  },
  {
    name: "Backend",
    icon: SiLaravel,
    skills: [
      { name: "Laravel", level: 78, icon: SiLaravel },
      { name: "Django", level: 80, icon: SiDjango },
      { name: "Node.js", level: 72, icon: SiNodedotjs },
      { name: "ASP.NET", level: 66, icon: SiDotnet },
      { name: "Spring Boot", level: 65, icon: SiSpringboot },
    ],
  },
  {
    name: "Mobile & Collecte",
    icon: FaMobileScreen,
    skills: [
      { name: "Flutter / Dart", level: 72, icon: SiFlutter },
      { name: "React Native", level: 76, icon: SiReact },
      { name: "CommCare (Collecte mobile)", level: 82, icon: FaClipboardCheck },
    ],
  },
  {
    name: "Bases de données & BI",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", level: 82, icon: SiPostgresql },
      { name: "MySQL", level: 80, icon: SiMysql },
      { name: "Power BI (Visualisation)", level: 75, icon: FaChartColumn },
      { name: "MERISE & 2TUP", level: 84, icon: FaDatabase },
    ],
  },
  {
    name: "Gestion de projet & Réseaux",
    icon: FaNetworkWired,
    skills: [
      { name: "Planification de projet", level: 90, icon: FaListCheck },
      { name: "Cadre logique", level: 70, icon: FaClipboardCheck },
      { name: "Configuration réseau", level: 70, icon: FaNetworkWired },
      { name: "Protocole TCP/IP", level: 70, icon: FaServer },
      { name: "Gestion de firewall", level: 70, icon: FaShield },
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
    title: "Videeko Vanilla — Plateforme Agricole",
    client: "Coopérative Vintsy (mars – sept. 2026)",
    description:
      "Conception et réalisation d'une plateforme agricole intelligente de collecte, de gestion et de suivi des données de production et de parcelles pour la coopérative Vintsy.",
    technologies: ["Next.js", "React Native", "Django", "PostgreSQL", "Excel"],
    github: "https://github.com/Misaina23/videeko",
  },
  {
    title: "Plateforme Association REKOMA",
    client: "Association REKOMA",
    description:
      "Portail associatif complet comprenant la gestion des membres, un site public vitrine, une boutique en ligne pour la vente d'accessoires solidaires et le suivi des projets.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Système de Pointage Personnel",
    client: "MESUPRES — Département DSI (2024)",
    description:
      "Solution complète de suivi des présences du personnel avec tableau de bord administratif, horodatage et génération de rapports automatisés.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
    github: "https://github.com/Misaina23/pointage",
  },
  {
    title: "Gestion de Lycée (Lycée Midongy)",
    client: "Lycée Midongy Sud",
    description:
      "Plateforme scolaire intégrée : inscription des élèves, gestion des classes, emploi du temps, saisie des notes et bulletins automatisés.",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Suivi Programmes Humanitaires (MEAL)",
    client: "WHH Madagascar (juin – déc. 2025)",
    description:
      "Solutions de suivi-évaluation des programmes d'aide humanitaire : interfaces de gestion, collecte mobile CommCare et outils de reporting des bénéficiaires.",
    technologies: ["CommCare", "Next.js", "Django", "PostgreSQL", "Excel"],
    github: "https://github.com/Misaina23",
  },
  {
    title: "Distribution de Kits Scolaires",
    client: "CISCO Midongy Atsimo (2023)",
    description:
      "Application de gestion de la distribution de kits scolaires avec système complet de suivi, traçabilité et pilotage.",
    technologies: ["React", "Django", "MySQL"],
    github: "https://github.com/Misaina23",
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
    title: "Videeko Vanilla — Plateforme Agricole",
    context: "Coopérative Vintsy (mars – septembre 2026)",
    description:
      "Plateforme agricole intelligente de collecte mobile, de gestion et de suivi des données des producteurs et récoltes de la coopérative Vintsy.",
    technologies: ["React Native", "Next.js", "Django", "PostgreSQL", "Excel"],
    features: [
      "Collecte de données terrain depuis mobile (React Native)",
      "Gestion des producteurs, parcelles et campagnes",
      "Tableaux de bord analytiques & exports Excel",
      "Suivi des inspections et qualité vanille",
    ],
    categories: ["Full Stack", "Data Management", "Mobile"],
    icon: PiPlantFill,
    featured: true,
    github: "https://github.com/Misaina23/videeko",
  },
  {
    title: "Plateforme Association REKOMA",
    context: "Association REKOMA (Projet communautaire)",
    description:
      "Plateforme tout-en-un pour l'association REKOMA assurant la gestion centralisée des membres, le site vitrine, la boutique solidaire d'accessoires et le suivi des projets.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Gestion centralisée des membres, adhésions et cotisations",
      "Site public vitrine et actualités officielles",
      "Boutique en ligne et vente d'accessoires REKOMA",
      "Pilotage et suivi d'impact des projets",
    ],
    categories: ["Full Stack", "Web", "Data Management"],
    icon: FaBoxOpen,
    github: "https://github.com/Misaina23/rekoma",
    demo: "https://rekoma-318.vercel.app",
  },
  {
    title: "Système de Pointage Personnel",
    context: "MESUPRES — Département DSI (2024)",
    description:
      "Solution complète de suivi des présences du personnel administratif avec tableau de bord d'administration et rapports automatisés.",
    technologies: ["React", "Next.js", "Laravel", "PostgreSQL"],
    features: [
      "Pointage journalier et horodatage",
      "Tableau de bord administratif",
      "Rapports automatisés de présences",
      "Gestion des utilisateurs et rôles",
    ],
    categories: ["Web", "Full Stack"],
    icon: FaServer,
    github: "https://github.com/Misaina23/pointage",
  },
  {
    title: "Gestion de Lycée (Lycée Midongy)",
    context: "Établissement scolaire Midongy Sud",
    description:
      "Application complète de gestion scolaire : inscriptions, gestion des classes, matières, saisie des notes et bulletins automatisés.",
    technologies: ["Next.js", "Django", "PostgreSQL"],
    features: [
      "Inscription et gestion des classes",
      "Gestion des matières et enseignants",
      "Saisie des notes et calcul des moyennes",
      "Génération de bulletins scolaires",
    ],
    categories: ["Web"],
    icon: FaSchool,
    github: "https://github.com/Misaina23/lycee-midongy",
    demo: "https://lycceemidongysud.vercel.app/",
  },
  {
    title: "Application de suivi de dépenses",
    context: "Projet mobile personnel",
    description:
      "Application mobile permettant le suivi des dépenses quotidiennes, la catégorisation des transactions et le pilotage du budget.",
    technologies: ["Flutter", "Dart", "SQLite"],
    features: [
      "Ajout et catégorisation des dépenses",
      "Historique complet des transactions",
      "Statistiques budgétaires mensuelles",
    ],
    categories: ["Mobile"],
    icon: FaMobileScreen,
    github: "https://github.com/Misaina23",
  },
  {
    title: "Gestion de billets d'avion",
    context: "Application mobile React Native",
    description:
      "Application mobile de recherche de vols, gestion des réservations et informations voyageurs.",
    technologies: ["React Native", "TypeScript"],
    features: [
      "Recherche de vols et tarifs",
      "Gestion des réservations et passagers",
      "Interface mobile intuitive",
    ],
    categories: ["Mobile"],
    icon: FaPlane,
    github: "https://github.com/Misaina23",
  },
  {
    title: "Réservation de restaurant",
    context: "Application web",
    description:
      "Application web de réservation de tables en ligne et de gestion des disponibilités pour restaurateurs.",
    technologies: ["Java JSP", "Java EE", "MySQL"],
    features: [
      "Réservation de tables en ligne",
      "Gestion des disponibilités",
      "Suivi des clients",
    ],
    categories: ["Web", "Data Management"],
    icon: FaUtensils,
    github: "https://github.com/Misaina23",
  },
  {
    title: "Enquête policière intelligente",
    context: "Projet académique IA & Logique",
    description:
      "Système expert basé sur la programmation logique (Prolog) et TypeScript simulant une enquête policière par déduction sur faits, indices et règles.",
    technologies: ["Prolog", "TypeScript", "Programmation logique"],
    features: [
      "Base de faits, indices et suspects",
      "Moteur de déduction logique Prolog",
      "Analyse de scénarios avec interface TypeScript",
    ],
    categories: ["Full Stack"],
    icon: FaMagnifyingGlass,
    github: "https://github.com/Misaina23",
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
      "Conception d'applications web sur mesure, rapides et maintenables, de l'architecture logicielle à la mise en production.",
    points: ["Vue.js, React & Next.js", "Laravel, Django, Spring Boot", "Tailwind CSS & Bootstrap"],
  },
  {
    icon: FaMobileScreen,
    title: "Développement Mobile & Collecte Terrain",
    description:
      "Applications mobiles Android & iOS ainsi que formulaires CommCare pour vos opérations et enquêtes sur le terrain.",
    points: ["Flutter/Dart & React Native", "CommCare (MEAL)", "Synchronisation terrain"],
  },
  {
    icon: SiPostgresql,
    title: "Conception & Gouvernance de Bases de Données",
    description:
      "Modélisation relationnelle complexe, nettoyage, optimisation et tableaux de bord décisionnels pour piloter vos projets.",
    points: ["PostgreSQL & MySQL", "Conception MERISE & 2TUP", "Power BI & Reporting"],
  },
  {
    icon: SiApache,
    title: "Suivi-Évaluation (MEAL) & Gestion de Projet",
    description:
      "Mise en place de systèmes d'information humanitaires et d'outils de suivi selon les standards du cadre logique.",
    points: ["Systèmes MEAL & Bénéficiaires", "Planification & Cadre logique", "Sécurité & Réseaux TCP/IP"],
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
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "Node.js": SiNodedotjs,
  "Spring Boot": SiSpringboot,
  "ASP.NET": SiDotnet,
  "API REST": SiApache,
  Django: SiDjango,
  Python: SiPython,
  Flutter: SiFlutter,
  "Flutter / Dart": SiFlutter,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Symfony: SiSymfony,
  SQL: FaDatabase,
  Excel: FaChartColumn,
  CommCare: FaClipboardCheck,
  "Power BI": FaChartColumn,
  "Java JSP": SiApache,
  "Java EE": SiApache,
  SQLite: SiSupabase,
  Dart: SiFlutter,
  Prolog: FaBrain,
  "Programmation logique": FaBrain,
};
