import type { SkillGroup } from '../types'

// Ali Nassef: grouped skills improve scanning without unsupported percentages.
export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Web Design'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Django', 'Python', 'C#', '.NET', 'ASP.NET Core', 'MVC', 'Web API'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server', 'Database Design', 'Relational Databases', 'NoSQL Databases'] },
  { category: 'APIs & Architecture', items: ['REST APIs', 'API Development', 'API Integration', 'Authentication', 'CRUD Operations', 'Entity Framework Core', 'LINQ'] },
  { category: 'AI & Data', items: ['Machine Learning', 'Deep Learning', 'AI APIs', 'AI Integration', 'AI Model Development', 'Prompt Engineering', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'OpenCV', 'Data Processing'] },
  { category: 'Programming', items: ['JavaScript', 'Python', 'C#', 'C++', 'Java', 'SQL'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'MySQL Workbench', 'Debugging', 'Version Control'] },
  { category: 'Foundations', items: ['Object-Oriented Programming', 'Problem Solving', 'Software Engineering'] },
]

export const softSkills = ['Fast Learning', 'Communication', 'Team Collaboration', 'Leadership', 'Adaptability', 'Time Management']

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B2 (IELTS)' },
  { name: 'German', level: 'A1 (Goethe)' },
  { name: 'Italian', level: 'Basic' },
]
