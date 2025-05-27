import {
  aws,
  backend,
  carrent,
  creator,
  docker,
  dotnet,
  githubactions,
  grpc,
  java,
  jobit,
  langchain,
  mobile,
  mongodb,
  postgressql,
  prometheus,
  reactjs,
  redis,
  terraform,
  tripguide,
  unthinkable,
  web
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud/DevOps Enthusiast",
      icon: web,
    },
    {
      title: "API Specialist",
      icon: mobile,
    },
   
    {
      title: "Full-Stack Contributor",
      icon: creator,
    },
  ];
  
  const technologies = [
    { 
      name: "Java",
      icon: java,
    },
    {
      name: ".NET",
      icon: dotnet,
    },
    {
      name: "PostgreSQL",
      icon: postgressql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Github Actions",
      icon: githubactions,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "Prometheus",
      icon: prometheus,
    },
    {
      name: "gRPC",
      icon: grpc,
    },
    {
      name: "LangChain", 
      icon: langchain,
    },
    {
      name: "MongoDB",
      icon: mongodb
    },
  
  ];
  
  const experiences = [
      {
        title: "Software Engineer",
        company_name: "Unthinkable Solutions",
        icon: unthinkable, // You'll need to add/import this icon
        iconBg: "#383E56",
        date: "Nov 2023 - Present",
        points: [
          "Developed microservices architecture with gRPC and Protocol Buffers, reducing latency by 30%",
          "Designed RESTful APIs with Swagger documentation achieving 70% higher test coverage",
          "Optimized MongoDB/PostgreSQL queries improving response time by 40%",
          "Implemented CI/CD pipeline improvements reducing deployment failures",
          "Enhanced cloud performance by 35% through GCP optimization",
          "Implemented log masking for data privacy compliance"
        ],
      },
      {
        title: "Software Engineer Intern",
        company_name: "Unthinkable Solutions",
        icon: unthinkable,
        iconBg: "#E6DEDD",
        date: "Apr 2023 - Oct 2023",
        points: [
          "Built production-ready APIs with Swagger documentation",
          "Improved code quality by 70% through SonarQube standards",
          "Resolved database bottlenecks in MongoDB/PostgreSQL",
          "Reduced deployment issues by 30% through CI/CD collaboration"
        ],
      }
  ];
  
  const projects = [
    {
      name: "Cold Email Generator",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "LangChain",
          color: "blue-text-gradient",
        },
        {
          name: "ChromaDb",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Podcaster",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "CoWrite",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
   
  
 const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.06,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.8, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    javaLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 5, 0] : [12, 5, 0],
    ringPosition: isSmall ? [-6, 7, 0] : isMobile ? [-10, 11, 0] : isTablet ? [-12, 11, 0] : [-24, 11, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

const colors = ["#13FFAA", "#1E67C6", "#CE84CF"];

  export { calculateSizes, colors, experiences, projects, services, technologies };

