import misha from "../assets/misha.jpg"
import floki from "../assets/floki.png"
import piano from "../assets/piano.png"
import books from "../assets/books.png"
import cello from "../assets/cello.png"
import cooking from "../assets/cooking.jpg"

export const PROFILE = "profile"
export const JOBS = "jobs"
export const PROJECTS = "projects"
export const STACK = "stack"
export const HOBBIES = "hobbies"
export const EDUCTATIONS = "educations"

export interface TabType {
  id: string
  text: string
  icon: string
  tabIndex?: number
}

export interface HobbyType {
  name: string
  description: string
  bgImg: string
  icon?: string
}

export interface JobType {
  title: string
  dateStart: string
  dateEnd: string
  company: string
  companyDetails?: string
  missions: string[]
}

export interface EducationType {
  grade: string
  name: string
  dateStart: string
  dateEnd: string
  school: string
  schoolDetails?: string
}

export interface ProjectType {
  name: string
  details?: string
  isDev: boolean
  dateStart?: string
  dateEnd?: string
  isPaused?: boolean
  isDone?: boolean
  link?: string
}

export interface SkillType {
  name: string
  skills: string[]
}

export const TABS_LIST: TabType[] = [
  { id: PROFILE, icon: "face", text: "Profil" },
  { id: STACK, icon: "history_edu", text: "Compétences" },
  { id: PROJECTS, icon: "lightbulb", text: "Projets" },
  { id: JOBS, icon: "work", text: "Exp. Pros" },
  { id: EDUCTATIONS, icon: "school", text: "Formations" },
  { id: HOBBIES, icon: "sports_esports", text: "Loisirs" },
]

export const HOBBIES_LIST: HobbyType[] = [
  {
    name: "Character Design/Dessin",
    description:
      "Je dessine depuis tout petit. Voici Misha, mon dernier OC en date, une petite souris russe !",
    bgImg: misha,
    icon: "create",
  },
  {
    name: "Cuisiner et MANGER",
    description:
      "Manger est l'un des grands plaisirs de la vie ! Alors quand on prépare soi-même, c'est encore mieux",
    bgImg: cooking,
    icon: "restaurant",
  },
  {
    name: "Ecrire",
    description:
      "Grand débutant dans la matière, mais l'écriture est une discipline vraiment passionnante. Je n'écris (pour l'instant) que du fantasy",
    bgImg: books,
    icon: "menu_book",
  },
  {
    name: "Animaux",
    description:
      "Avant d'avoir mon chien (ce petit husky marron tout pipou), j'avais deux serpents : Ruby et Perl 👀",
    bgImg: floki,
    icon: "pets",
  },
  {
    name: "Piano",
    description:
      "J'ai commencé en autodidacte vers mes 15 ans, mais j'ai hélas pas mal perdu !",
    bgImg: piano,
    icon: "piano",
  },
  {
    name: "Violoncelle",
    description:
      "En autodidacte aussi, je viens de commencer le cello il y a très peu de temps ~",
    bgImg: cello,
    icon: "music_note",
  },
]

export const JOBS_LIST: JobType[] = [
  {
    title: "Ingénieur d'etudes",
    missions: [
      "16 mois avec Cultura : Refonte des applications internes en TypeScript / React / React-Native / IndexedDB / Full Remote",
      "3 mois avec Clint/Make.org : Mise en place des consultations : Full-Stack / TypeScript / React / Strapi / Autonomie / Full Remote",
    ],
    company: "Abbeal",
    companyDetails: "ESN de Paris",
    dateStart: "Juin 2021",
    dateEnd: "Janvier 2023",
  },
  {
    title: "Développeur Full-Stack",
    missions: [
      "Réalisation de plusieurs projets conséquents en binome : front-end d'un back-office, application web BtoB, et site marchand.",
      "Agile (Suite Atlassian, Scrum-master)",
    ],
    company: "Pentalog/Soluti",
    companyDetails: "Lyon",
    dateStart: "Octobre 2019",
    dateEnd: "Juin 2021",
  },
  {
    title: "Développeur Full-stack",
    missions: [
      "Site de référencement de vente aux enchères d'art",
      "Migration en ReactJS du site marchand",
      "Gestion d'évènements (backoffice, site marchand)",
    ],
    company: "Artprice",
    companyDetails: "St-Romain-au-Mont-d'Or",
    dateStart: "Mai 2018",
    dateEnd: "Octobre 2019",
  },
]

export const EDUCATIONS_LIST: EducationType[] = [
  {
    grade: "Bac+3",
    name: "Licence informatique",
    dateStart: "2017",
    dateEnd: "2018",
    school: "UCBL",
    schoolDetails: "Lyon",
  },
  {
    grade: "Bac+2",
    name: "IUT INFORMATIQUE",
    dateStart: "2014",
    dateEnd: "2016",
    school: "UCBL",
    schoolDetails: "Bourg-en-Bresse",
  },
]

export const PROJECTS_LIST: ProjectType[] = [
  {
    name: "Portfolio",
    details: "ReactJS / bac à sable perso",
    isDev: true,
    dateStart: "2022",
  },
  {
    name: "Ecriture de romans fantasy",
    isDev: false,
    dateStart: "Mars 2023",
  },
  {
    name: "Site vitrine des romans",
    details: "React/TS/Strapi/GraphQL",
    isDev: true,
  },
  {
    name: "CV version site web",
    isDev: true,
    details:
      "Vous y êtes actuellement ! Fait en React/TS/Tailwind. Evolutions suivantes : Récupération des données via Strapi et traduction en anglais.",
    dateStart: "Mai 2023",
    dateEnd: "",
    isDone: true,
  },
  {
    name: "Meetup bonnes pratiques CSS",
    isDev: false,
    dateStart: "Fev. 2020",
    dateEnd: "Mars. 2020",
    isDone: true,
    link: "https://docs.google.com/presentation/d/1NIk0ccGJK8D_y-aYbkXAeu2K3yzSwVOB/edit?usp=sharing&ouid=117729629120663191417&rtpof=true&sd=true",
  },
  {
    name: "Devenir trilingue Français, Anglais, Russe",
    isDev: false,
    details: "Actuellement 🇬🇧 confirmé et notions de 🇷🇺",
    dateStart: "2022",
  },
  {
    name: "MueJS",
    details: "Librairie Atomic SCSS (à la Tailwind) + Framework React",
    isDev: true,
    dateStart: "1er commit : Juin 2018",
    isPaused: true,
    link: "https://github.com/mue-js",
  },
  {
    name: "Création d'un TCG",
    details:
      "+300 cartes pour les 2 premières générations à illustrer (via IA pour l'instant)",
    isDev: false,
    dateStart: "Oct. 2019",
    isPaused: true,
  },
]

export const SKILLS_CAT_0: SkillType[] = [
  {
    name: "Langages",
    skills: ["TypeScript & JavaScript (ES-2022)", "CSS (SASS, Stylus)", "HTML"],
  },
  {
    name: "Frameworks, CMS & APIs",
    skills: [
      "ReactJS",
      "NextJS",
      "API Rest",
      "GraphQL",
      "Strapi (Headless CMS)",
      "Tailwind",
      "Material UI 4/5 (avec sx)",
      "IndexedDB",
    ],
  },
  {
    name: "Serveurs applicatifs / Web",
    skills: ["Node.js", "Express", "Symphony"],
  },
  {
    name: "SGBD",
    skills: ["MongoDB (avec Mongoose)", "Maria/MySQL"],
  },
]

export const SKILLS_CAT_1: SkillType[] = [
  {
    name: "Tests",
    skills: ["Jest", "Mocha"],
  },
  {
    name: "Gestion de version",
    skills: ["Github", "Gitlab", "Bitbucket"],
  },
  {
    name: "CI/CD",
    skills: ["Jenkins"],
  },
]

export const SKILLS_CAT_2: SkillType[] = [
  {
    name: "Méthodologie",
    skills: ["Scrum (sprint)", "Kanban"],
  },
]

export const SKILLS_CAT_3: SkillType[] = [
  {
    name: "IDE",
    skills: ["VS Code", "Jet Brains (Webstorm)", "Atom"],
  },
  {
    name: "OS",
    skills: ["MacOS", "Ubuntu", "Win10/11 (WSL)"],
  },
]
