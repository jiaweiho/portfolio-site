export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'workplace' | 'private';
  tags: string[];
  links?: {
    github?: string;
    live?: string;
  };
  image?: string;
  role?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Company Cars Driven features",
    description: "Prioritized implementing and helping new car releases to be available regularly.",
    type: "workplace",
    tags: ["Backend", "Cross team collaboration", "API Integration"],
    role: "Senior Backend Engineer",
    technologies: ["Kotlin", "PostgreSQL", "React", "Backoffice-tool"],
    image: "/projects/kpi-dashboard.jpg"
  },
  {
    id: "2",
    title: "CMS Editing Platform Integration",
    description: "Architected and implemented a seamless integration between internal systems and a third-party CMS, streamlining content workflows.",
    type: "workplace",
    tags: ["Integration", "CMS", "Workflow Automation"],
    role: "Senior Backend Engineer",
    technologies: ["Kotlin", "GraphQL", "Redis", "API Integration"],
    image: "/projects/cms-integration.jpg"
  },
  {
    id: "3",
    title: "AI-Powered Content chatbot",
    description: "Assisted and built better content for end-users in a chatbot-manner.",
    type: "workplace",
    tags: ["AI", "Machine Learning", "Backend"],
    role: "Senior Backend Engineer",
    technologies: ["Kotlin", "Langchain", "Elasticsearch", "Swagger"],
    image: "/projects/ai-recommendation.jpg"
  },
  {
    id: "4",
    title: "Personal Portfolio Site",
    description: "A high-tech, modern portfolio website built with Next.js and Tailwind CSS to showcase professional and personal projects.",
    type: "private",
    tags: ["Frontend", "Design"],
    links: {
      github: "https://github.com/jiaweiho/portfolio_site",
      live: "https://jiaweiho.com"
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.jpg"
  }
];

export const profile = {
  name: "Wei Ho",
  title: "Backend Engineer",
  elevatorPitch: "Result-oriented, cross-team collaborative spirit.",
  email: "jiwei.ho@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/jiaweiho",
    github: "https://github.com/jiaweiho"
  },
  skills: {
    backend: ["Kotlin", "Langchain", "Python", "PostgreSQL", "Redis", "GraphQL", "REST API", "Swagger", "Elasticsearch", "Kafka", "Node.js"],
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    tools: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Azure", "Azure Storage"]
  }
};
