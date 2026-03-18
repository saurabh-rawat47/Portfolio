import type { Project, SkillCategory, Experience, NavLink } from "@/types";

/* ============================================================
   PERSONAL INFO — update this file only to personalise
============================================================ */
export const PERSONAL = {
  name: "Saurabh Rawat",
  title: "Java Backend Developer",
  tagline:
    "Building scalable REST APIs using Spring Boot, focusing on clean architecture, security, and database integration.",
  availability: "Open to Internship & Entry-Level Roles",
  email: "saurabh.rd80@gmail.com",
  github: "https://github.com/saurabh-rawat47",
  linkedin: "https://www.linkedin.com/in/saurabh-rawat-a82486291",
  resumeUrl: "/Saurabh_Rawat_Java_Backend_Developer.pdf",
  location: "India",
  available: true,
  education: {
    degree: "B.Tech – Computer Science (AI & ML)",
    institution: "Krishna Engineering College",
    period: "2021 – 2025",
    cgpa: "6.1 / 10",
  },
  about: [
    "Backend-focused Java developer with hands-on experience building REST APIs using Spring Boot.",
    "I have worked on backend projects involving authentication, database integration (MongoDB & MySQL), and layered architecture.",
    "My focus is on writing clean, maintainable, and production-ready backend code.",
  ],
} as const;

/* ============================================================
   NAVIGATION
============================================================ */
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ============================================================
   SKILLS — 3 clean categories: Backend, Database, Tools
============================================================ */
export const SKILLS: SkillCategory[] = [
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "Spring Security", level: "Familiar" },
      { name: "REST APIs", level: "Proficient" },
      { name: "Hibernate (JPA)", level: "Familiar" },
      { name: "Maven", level: "Proficient" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "PostgreSQL", level: "Familiar" },
      { name: "Spring Data", level: "Proficient" },
    ],
  },
  {
    category: "Tools",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "Docker", level: "Familiar" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "Linux / CLI", level: "Familiar" },
    ],
  },
];

/* ============================================================
   PROJECTS
============================================================ */
export const PROJECTS: Project[] = [
  {
    id: "jobzygo",
    title: "JobZygo",
    subtitle: "Job Portal — Backend API",
    badge: "Featured",
    badgeColor: "blue",
    problem:
      "Designed a backend system that allows recruiters to manage job listings and applicants to browse and apply — with each role restricted to its own set of endpoints.",
    description:
      "A Spring Boot REST API for a job portal with two user roles: Recruiter and Applicant. Built with a layered architecture and Spring Security for authentication. MongoDB handles all data storage through Spring Data repositories.",
    architecture:
      "Layered architecture (Controller → Service → Repository). Spring Security manages authentication and role-based endpoint access. Spring Data MongoDB handles persistence for users, job listings, and applications.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "Spring Data",
      "Maven",
      "Postman",
    ],
    features: [
      "User registration with BCrypt password hashing",
      "Role-based endpoint separation for Recruiter and Applicant",
      "CRUD APIs for job postings and job applications",
      "Spring Data MongoDB repositories for all data operations",
      "Global exception handler with structured error responses",
      "Input validation on all incoming request payloads",
    ],
    githubUrl: "https://github.com/saurabh-rawat47/JobZygo",
  },
  {
    id: "journalapp",
    title: "JournalApp",
    subtitle: "Personal Journal — REST API",
    badge: "Backend",
    badgeColor: "violet",
    problem:
      "Built a multi-user journaling API where each user's entries are private and inaccessible to others — implementing user-specific data isolation as a core backend pattern.",
    description:
      "A Spring Boot REST API for managing personal journal entries. Authentication is handled through Spring Security, and each user can only read, update, or delete their own entries. Runs on the embedded Tomcat server bundled with Spring Boot.",
    architecture:
      "MVC layered structure using Spring Boot and Spring Data MongoDB. Spring Security enforces user-level access control. Data is persisted in MongoDB with per-user document isolation.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "Spring Data",
      "Maven",
    ],
    features: [
      "User registration and login via Spring Security",
      "Strict per-user data isolation across all API operations",
      "Full CRUD support for journal entry management",
      "Spring Data MongoDB repositories for data persistence",
      "Consistent input validation and error handling",
      "RESTful endpoint design with clear resource naming",
    ],
    githubUrl: "https://github.com/saurabh-rawat47/JournalApp",
  },
];

/* ============================================================
   EXPERIENCE
============================================================ */
export const EXPERIENCE: Experience[] = [
  {
    role: "Backend Developer — Project-Based Learning",
    company: "Krishna Engineering College",
    type: "Project-Based Learning",
    period: "Aug 2025 – Jan 2026",
    location: "India",
    description: [
      "Developed two backend projects using Java and Spring Boot — a job portal REST API and a personal journal API — covering authentication, role-based access, and database integration.",
      "Implemented layered architecture (Controller, Service, Repository) across both projects; structured code for readability and separation of concerns.",
      "Integrated MongoDB via Spring Data repositories for document storage, and used MySQL with Hibernate for relational data modelling.",
      "Configured Spring Security for user authentication and role-based endpoint access; currently extending knowledge in JWT and advanced security configuration.",
      "Used Git and GitHub throughout — maintained feature branches, wrote clear commit messages, and tracked project progress through version history.",
      "Tested and validated all API endpoints with Postman; implemented global exception handling and request-level input validation.",
    ],
    techUsed: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "MongoDB",
      "MySQL",
      "Spring Data",
      "Hibernate",
      "Git",
      "Postman",
      "Maven",
    ],
  },
];
