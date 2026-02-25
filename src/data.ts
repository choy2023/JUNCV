export interface PersonalInfo {
  name: string;
  address: string;
  mobile: string;
  email: string;
  github: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Skills {
  hardSkills: {
    frontend: Skill[];
    backend: Skill[];
    server: Skill[];
  };
  softSkills: string[];
}

interface Education {
  degree: string;
  name: string;
  location: string;
  period: string;
  details?: string[];
}

export interface Project {
  name: string;
  period: string;
  desc: string;
  link: string;
  gitLink: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  details: string[];
}

interface Data {
  personalInfo: PersonalInfo;
  personalStatement: string;
  keySkills: Skills;
  education: Education[];
  experience: Experience[];
  softSkills: string[];
}

export const data: Data = {
  personalInfo: {
    name: import.meta.env.VITE_USER_NAME || "Yeonjun Cho",
    address: import.meta.env.VITE_USER_ADDRESS || "Contact for Address",
    mobile: import.meta.env.VITE_USER_MOBILE || "+642904512419",
    email: import.meta.env.VITE_USER_EMAIL || "chochoy1997@gmail.com",
    github: "choy2023",
  },
  personalStatement: `Motivated Computing Systems graduate with a strong foundation in front-end development, specializing in React, TypeScript, and modern web technologies. Recently completed mandatory military service in South Korea, demonstrating resilience, discipline, and a renewed commitment to professional growth. Eager to leverage my technical skills and problem-solving abilities in a challenging development role. I am ready to relocate and immediately contribute to the team with a strong work ethic.`,
  keySkills: {
    hardSkills: {
      frontend: [
        { name: "React JS", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "HTML", category: "frontend" },
        { name: "CSS", category: "frontend" },
        { name: "SCSS", category: "frontend" }
      ],
      backend: [
        { name: "Python", category: "backend" },
        { name: "Django", category: "backend" },
        { name: "Flask", category: "backend" },
        { name: "ASP.NET", category: "backend" }
      ],
      server: [
        { name: "SQLite", category: "server" },
        { name: "Microsoft SQL Server", category: "server" },
        { name: "SQL Server Management Studio (SSMS)", category: "server" },
        { name: "MySQL", category: "server" },
        { name: "Android Studio (Java)", category: "server" }
      ]
    },

    softSkills: [
      "Award for capstone project (Top Capstone Project in Bachelor of Computing System)",
      "Certificate for Agile course (ICAgile certificate)",
      "Deep understanding of teamwork, possess strong communication, problem-solving",
      "Effective time management, ability to prioritize and complete tasks efficiently and effectively, while remaining organized and able to meet deadlines",
      "Effectively coordinate and incorporate the opinions and ideas of others in order to reach a consensus and make informed decisions",
    ],
  },
  education: [
    {
      degree: "UNITEC Bachelor Computing System",
      name: "UNITEC",
      location: "Auckland, New Zealand",
      period: "July 2019 – July 2022",
      details: [
        "ISCG7444 – Capstone Project (Create full stack web application for blind low vision dog organization as subcontract) - Awarded Top Capstone Project in Bachelor of Computing System",
        "ISCG7427 – Agile and Lean software delivery (Qualified ICAgile certificate) - Received Certificate for Agile course",
        "ISCG7424 – Mobile software development (Create 3small projects + 1team project example GPS locator, simple booking system with firebase)",
      ],
    },
    {
      degree: "NZ Certificate in Information Technology Lv4",
      name: "Unitec Institute of Technology",
      location: "Auckland, New Zealand",
      period: "Feb 2019 – July 2019",
    }
  ],

  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "MegaTransact Ltd",
      location: "Auckland, New Zealand",
      period: "Aug 2023 – Feb 2024",
      details: [
        "Spearheaded the development of core fintech features including 'MegaPay', 'MegaTransfer', and 'MegaLoan'.",
        "Implemented secure user authentication (Login) and optimized front-end performance using React.",
        "Collaborated with the team to design scalable architecture for future feature expansion.",
      ],
    },
    {
      role: "Squad Leader & Admin Specialist (Sergeant)",
      company: "Republic of Korea Army",
      location: "South Korea",
      period: "Mar 2024 – Dec 2025", 
      details: [
        "Selected as Squad Leader: Led and mentored a team of soldiers, fostering discipline and boosting morale in a challenging environment.", 
        "Managed Comprehensive Administration: Oversaw Personnel (HR), General Affairs, and Supply Chain operations, ensuring accurate data management and resource distribution.", // 인사, 서무, 보급 통합 강조
        "Served as Designated Peer Counselor: Actively listened to team concerns and mediated conflicts, demonstrating strong empathy and communication skills.", 
        "Operated Situation Room: Monitored critical communications and responded to high-pressure incidents with precision and speed.", 
      ],
    },
    {
      role: "Machine Operator / Cook", 
      company: "Beautiful Blinds / One Soju / My Fried Chicken (Concurrent)",
      location: "Auckland, New Zealand",
      period: "Mar 2023 – Feb 2024",
      details: [
        "Maintained consistent employment in multiple roles while upskilling in software development.",
        "Demonstrated strong work ethic, time management, and reliability.",
      ],
    },
    {
      role: "Full Stack Developer (Subcontract)",
      company: "Blind Low Vision Dog Organization",
      location: "Auckland, New Zealand",
      period: "Mar 2022 – Jul 2022",
      details: [
        "Developed a full-stack application to visualize and centralize dog status data.",
        "Utilized React (TypeScript) for the frontend and ASP.NET Core Web API for the backend.",
        "Implemented LightSQL for efficient server-side data storage and management.",
      ],
    },
  ],

  softSkills: [
    "Award for capstone project (Top Capstone Project in Bachelor of Computing System)",
    "Certificate for Agile course (ICAgile certificate)",
    "Deep understanding of teamwork, possess strong communication, problem-solving",
    "Effective time management, ability to prioritize and complete tasks efficiently and effectively, while remaining organized and able to meet deadlines",
    "Effectively coordinate and incorporate the opinions and ideas of others in order to reach a consensus and make informed decisions"
  ]
};


