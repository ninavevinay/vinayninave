import {
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiServer,
} from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

export const profile = {
  name: "Vinay Ninave",
  title: "Full Stack Developer | Generative AI",
  intro:
    "Full Stack Developer building scalable web applications using React.js and FastAPI. Focused on Cybersecurity practices to develop secure and resilient systems. Exploring AI-driven solutions to create intelligent, modern applications.",
  location: "Nagpur",
  email: "vinayninave27@gmail.com",
  resumeUrl: "/Vinay_Ninave_Resume.pdf",
  avatarUrl: "/profile.jpeg",
  logoUrl: "/logo.png",
};

export const skills = [
  {
    name: "Frontend",
    value: 90,
    description: "Responsive UI with React and reusable component systems.",
    icon: FiCode,
    iconColor: "#4f46e5",
    iconBg: "#eef2ff",
    iconBorder: "#c7d2fe",
    gradientFrom: "#4f46e5",
    gradientTo: "#06b6d4",
  },
  {
    name: "Backend",
    value: 85,
    description: "REST APIs, authentication flows, and scalable services.",
    icon: FiServer,
    iconColor: "#0f766e",
    iconBg: "#ecfeff",
    iconBorder: "#99f6e4",
    gradientFrom: "#0f766e",
    gradientTo: "#14b8a6",
  },
  {
    name: "FastAPI",
    value: 80,
    description: "High-performance Python APIs with clean architecture.",
    icon: SiFastapi,
    iconColor: "#059669",
    iconBg: "#ecfdf5",
    iconBorder: "#a7f3d0",
    gradientFrom: "#059669",
    gradientTo: "#34d399",
  },
  {
    name: "GenAI",
    value: 78,
    description: "Prompt workflows, LLM tooling, and AI-assisted products.",
    icon: FaBrain,
    iconColor: "#7c3aed",
    iconBg: "#f5f3ff",
    iconBorder: "#ddd6fe",
    gradientFrom: "#7c3aed",
    gradientTo: "#ec4899",
  },
  {
    name: "Database",
    value: 75,
    description: "Schema design, storage layers, and production-ready queries.",
    icon: FiDatabase,
    iconColor: "#ea580c",
    iconBg: "#fff7ed",
    iconBorder: "#fdba74",
    gradientFrom: "#ea580c",
    gradientTo: "#f59e0b",
  },
];

export const techStack = [
  {
    name: "React",
    description: "Frontend library",
    icon: SiReact,
    color: "#61dafb",
    bg: "#ecfeff",
    border: "#bae6fd",
  },
  {
    name: "TailwindCSS",
    description: "CSS framework",
    icon: SiTailwindcss,
    color: "#06b6d4",
    bg: "#ecfeff",
    border: "#a5f3fc",
  },
  {
    name: "FastAPI",
    description: "Python web framework",
    icon: SiFastapi,
    color: "#059669",
    bg: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    name: "Node.js",
    description: "Backend runtime",
    icon: SiNodedotjs,
    color: "#3c873a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    name: "Express.js",
    description: "Web framework",
    icon: SiExpress,
    color: "#111827",
    bg: "#f8fafc",
    border: "#cbd5e1",
  },
  {
    name: "MongoDB",
    description: "NoSQL database",
    icon: SiMongodb,
    color: "#00ed64",
    bg: "#ecfdf5",
    border: "#bbf7d0",
  },
  {
    name: "PostgreSQL",
    description: "SQL database",
    icon: SiPostgresql,
    color: "#336791",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    name: "MySQL",
    description: "Relational database",
    icon: SiMysql,
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    name: "Python",
    description: "Programming language",
    icon: SiPython,
    color: "#3776ab",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    name: "Docker",
    description: "Containerization",
    icon: SiDocker,
    color: "#2496ed",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    name: "Git & GitHub",
    description: "Version control",
    icon: SiGithub,
    color: "#111827",
    bg: "#f8fafc",
    border: "#cbd5e1",
  },
  {
    name: "LangChain",
    description: "AI framework",
    icon: SiLangchain,
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    name: "OpenAI",
    description: "LLM tooling",
    icon: TbBrandOpenai,
    color: "#111827",
    bg: "#f8fafc",
    border: "#cbd5e1",
  },
];

export const projects = [
  {
    title: "AI Game Bot For Connect-4",
    description:
      "Built an AI Game Bot for Connect-4 that plays against users with smart decision-making.",
    image: "/project1.webp",
    stack: ["React", "TailwindCSS", "Node.js", "Express.js", "Python"],
    github: "https://github.com/ninavevinay/AI_Game_Bot_for_Connect-4",
  },
  {
    title: "Data Temparing Detection",
    description:
      "A real-time analytics dashboard with role-based access, streaming charts, and alert automation.",
    image: "/project2.jfif",
    stack: ["React", "TailwindCSS", "Node.js", "Express.js", "Supabase", "JWT", "SHA-256"],
    github: "https://github.com/ninavevinay/Data_Tampering_Detection",
  },

  {
    title: "Firebase Book Management",
    description:
      "Built a Book Management System using Firebase for real-time data storage and user management.",
    image: "/project1.jfif",
    stack: ["React", "TailwindCSS", "Firebase", "CRUD"],
    github: "https://github.com/ninavevinay/firebase_Book_Mananement",
    demo: "https://app-book-b01ce.web.app/"
  },
  {
    title: "Student Result Management System",
    description:
      "A comprehensive system for managing and tracking student academic performance.",
    image: "/project.jfif",
    stack: ["HTML", "CSS", "Django"],
    github: "https://github.com/ninavevinay/SRM",
    demo: "https://srm-4d9t.onrender.com/"
  }
];

export const education = [
  {
    year: "2023 - Present ",
    degree: "B.Tech in Computer Science",
    institute: "S. B. Jain Institute of Technology, Management & Research Nagpur ",
    details: "Focused on software engineering, data structures, and cloud-native development.",
    marks: "CGPA: 8.9/10"
  },
  {
    year: "2021 - 2023",
    degree: "Higher Secondary (Science)",
    institute: "St George's College, Nagpur",
    details: "Specialized in Mathematics, Physics, and Chemistry.",
    marks: "Percentage: 65.8%"

  },
  {
    year: "2021",
    degree: "Secondary School",
    institute: "New English High School Nagpur",
    details: "Consistently maintained a strong academic record in core subjects including Mathematics, Science, and English.",
    marks: "Percentage: 82.8%"

  }
];

export const certificates = [
  {
    title: "DSA using Python",
    issuer: "NPTEL",
    year: "2025",
    link:"https://drive.google.com/file/d/19VEqLjFIWP7v4bNjMCjI8OBq-zLWwwKx/view?usp=drive_link",
    details: "Completed coursework focused on data structures and algorithms using Python."
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "2025",
    link:"https://drive.google.com/file/d/1Sp1_3Gwocs20hRLA8FmttTDAnf-NvSwj/view?usp=drive_link",
    details: "Learned core Java concepts including OOP, data handling, and application development."
  },
  {
    title: "Web Development Training",
    issuer: "Internshala",
    year: "2024",
    link:"https://drive.google.com/file/d/1dAQJ98QEyIMJ3nahZ5DtrpI7gT7dkpj1/view?usp=drive_link",
    details: "Covered fundamentals of web development including HTML, CSS, and JavaScript."
  },
  {
    title: "Python Full Stack Developer Virtual Internship",
    issuer: "EduSkills Foundation",
    year: "2026",
    link: "https://drive.google.com/file/d/1HhWAYHJDQJ5oL8Mfar5TQx4rG5Cbx0u1/view?usp=drive_link",
    details: "Gained experience in full-stack development using Python, including frontend and backend integration."
  }
];

export const achievements = [
  {
    title: "Second Runner-Up - Hackathon",
    year: "2025",
    details: "Developed Health-Q, an emergency patient scheduling system that prioritizes critical cases and improves hospital queue management."
  },
  {
    title: "Top 4 Rank - Code League 1.0 Hackathon | GH Raisoni College of Engineering, Nagpur",
    year: "2025",
    details: "Developed Chikistra Smart, an intelligent advertising solution during the hackathon."
  },
  {
    title: "Shantilal Badjate Memorial Scholarship",
    year: "2025, 2026",
    details: "Awarded in recognition of consistent academic improvement and performance."
  }
];

export const gallery = [
  { title: "2nd Runner-Up - Hackwack 3.0", image: "/gallary1.png" },
  { title: "Actively engaged in analyzing and solving the problem statement during Hackwack 3.0", image: "/gallary2.png" },
  { title: "TECHMENTORX Hackathon Participation - PCE Nagpur", image: "/gallary3.png" },
  { title: "Presentation Moment - Code League 1.0 Hackathon", image: "/gallary4.png" },
  { title: "Farcaster Bharat Session - Web3 & Blockchain Insights", image: "/gallary5.png" },
];

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/ninavevinay", icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/vinay-ninave/", icon: FiLinkedin },
  { name: "Email", href: "mailto:vinayninave27@gmail.com", icon: FiMail }
];
