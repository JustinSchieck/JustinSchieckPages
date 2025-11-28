export interface TechItem {
  name: string;
  icon: string;
  proficiency?: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  level: number;
  techStack?: TechItem[];
  description?: string;
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'assets/icons/Frontend.svg',
    level: 95,
    description:
      'I specialize in building responsive, accessible, and performant user interfaces. My approach combines clean, semantic HTML, modern CSS techniques, and JavaScript frameworks to create engaging experiences that work across all devices.',
    techStack: [
      {
        name: 'Javascript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        proficiency: 100,
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg',
        proficiency: 90,
      },
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        proficiency: 75,
      },
      {
        name: 'Angular',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        proficiency: 90,
      },
      {
        name: 'CSS/SCSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
        proficiency: 90,
      },
      {
        name: 'Tailwind',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        proficiency: 75,
      },
      {
        name: 'Jest',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
        proficiency: 85,
      },
      {
        name: 'Vitest',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg',
        proficiency: 60,
      },
    ],
  },
  {
    name: 'Backend',
    icon: 'assets/icons/Backend.svg',
    level: 65,
    description:
      'I build robust, scalable backend systems with a focus on clean architecture, API design, and efficient data handling. My experience spans from RESTful services to real-time applications.',
    techStack: [
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
        proficiency: 85,
      },
      {
        name: 'C# .NET',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg',
        proficiency: 75,
      },
      {
        name: 'Redux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
        proficiency: 80,
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg',
        proficiency: 70,
      },
      {
        name: 'GraphQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
        proficiency: 65,
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg',
        proficiency: 60,
      },
      {
        name: 'Kotlin',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
        proficiency: 50,
      },
      {
        name: 'MySql',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        proficiency: 50,
      },
    ],
  },
  {
    name: 'Server',
    icon: 'assets/icons/Database.svg',
    level: 50,
    description:
      'I have experience with cloud infrastructure, deployment pipelines, and server management. I focus on creating reliable, secure, and efficient hosting environments for web applications.',
    techStack: [
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
        proficiency: 75,
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
        proficiency: 55,
      },
      {
        name: 'Kubernetes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg',
        proficiency: 30,
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        proficiency: 65,
      },
      {
        name: 'ArgoCD',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg',
        proficiency: 50,
      },
      {
        name: 'Terraform',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
        proficiency: 35,
      },
      {
        name: 'Azure',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
        proficiency: 50,
      },
      {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
        proficiency: 60,
      },
    ],
  },
  {
    name: 'Soft Skills',
    icon: 'assets/icons/SoftSkills.svg',
    level: 90,
    description:
      'Beyond technical abilities, I bring strong communication, collaboration, and problem-solving skills to every team. I believe that great software is built by people who work well together.',
    techStack: [
      {
        name: 'Communication',
        icon: 'assets/icons/Communication.svg',
        proficiency: 95,
      },
      {
        name: 'Teamwork',
        icon: 'assets/icons/Teamwork.svg',
        proficiency: 90,
      },
      {
        name: 'Problem Solving',
        icon: 'assets/icons/ProblemSolving.svg',
        proficiency: 95,
      },
      {
        name: 'Agile/Scrum',
        icon: 'assets/icons/AgileProcess.svg',
        proficiency: 85,
      },
      {
        name: 'Leadership',
        icon: 'assets/icons/Leadership.svg',
        proficiency: 80,
      },
      {
        name: 'Mentoring',
        icon: 'assets/icons/Mentoring.svg',
        proficiency: 85,
      },
      {
        name: 'Time Management',
        icon: 'assets/icons/TimeManagement.svg',
        proficiency: 80,
      },
      {
        name: 'Adaptability',
        icon: 'assets/icons/Adapt.svg',
        proficiency: 90,
      },
    ],
  },
];
