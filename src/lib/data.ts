import type { Project, SkillCategory, Experience, NavLink } from "@/types";

/* ============================================================
   PERSONAL INFO — update this file only to personalise
============================================================ */
export const PERSONAL = {
  name: "Saurabh Rawat",
  title: "Java Backend Developer",
  tagline:
    "Building REST APIs and backend systems with Java and Spring Boot. Focused on clean architecture, database integration, and writing code that is easy to maintain and extend.",
  availability: "Open to Internship and Entry-Level Backend Opportunities",
  email: "saurabh.rd80@gmail.com",
  github: "https://github.com/saurabh-rawat47",
  linkedin: "https://www.linkedin.com/in/saurabh-rawat-a82486291",
  resumeUrl: "/Saurabh_Rawat_Java_Backend_Developer.pdf",
  location: "India",
  available: true,
  education: {
    degree: "B.Tech – Computer Science (AI & ML)",
    institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    period: "2021 – 2025",
    cgpa: "6.1 / 10",
  },
  about: [
    "I am a Computer Science graduate with a practical focus on backend development. I have built REST APIs using Java and Spring Boot, integrated MongoDB and MySQL databases, and structured projects around a layered MVC architecture.",
    "My hands-on work covers request handling, data persistence with Spring Data, basic authentication with Spring Security, and API validation and error handling. I use Git for version control and Postman for testing and debugging APIs.",
    "I am currently looking for internship and entry-level backend roles where I can contribute to real engineering problems, learn from experienced developers, and grow as a backend engineer.",
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
   SKILLS
   Proficient = used actively in project work, comfortable with core usage
   Familiar   = introduced to, still learning / building confidence
============================================================ */
export const SKILLS: SkillCategory[] = [
  {
    category: "Backend Development",
    icon: "server",
    skills: [
      { name: "Java", level: "Proficient" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "REST API Design", level: "Proficient" },
      { name: "Spring MVC", level: "Proficient" },
      { name: "Maven", level: "Proficient" },
      { name: "Hibernate / JPA", level: "Proficient" },
      { name: "Spring Security", level: "Familiar" },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "Spring Data", level: "Proficient" },
      { name: "PostgreSQL", level: "Familiar" },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: "Proficient" },
      { name: "Postman", level: "Proficient" },
      { name: "IntelliJ IDEA", level: "Proficient" },
      { name: "Docker", level: "Familiar" },
      { name: "Linux / CLI", level: "Familiar" },
    ],
  },
  {
    category: "CS Fundamentals",
    icon: "code",
    skills: [
      { name: "OOP Concepts", level: "Proficient" },
      { name: "Data Structures", level: "Proficient" },
      { name: "C / C++", level: "Familiar" },
      { name: "System Design (Basic)", level: "Familiar" },
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
    role: "Backend Developer — Independent Projects",
    // company: "Krishna Engineering College",
    type: "Project-Based Learning",
    period: "July 2025 – Jan 2026",
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
