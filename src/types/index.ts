export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  description: string;
  architecture: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: string;
  badgeColor: "blue" | "violet" | "emerald" | "amber";
}

export interface Skill {
  name: string;
  level: "Proficient" | "Familiar";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  type: string;
  period: string;
  location: string;
  description: string[];
  techUsed: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
