export interface NavLink {
  label: string
  href: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  summary: string
  bullets?: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  details?: string[]
}

export interface Project {
  id: string
  title: string
  technologies: string[]
  description: string
  details: string[]
  repoUrl?: string
  demoUrl?: string
  hasPlaceholders: boolean
}

export interface LanguageItem {
  name: string
  level: string
}
