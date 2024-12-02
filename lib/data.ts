import { group } from "console";

export const userData = {
  name: "Vishal Kumar",
  handle: "@Vishal101022",
  firstName: "Vishal",
  title: "Hi there, I’m",
  designation: "Web Developer",
  availability: true,
  avatarUrl: "/images/avtar.jpg",
  email: "raivishal939@gmail.com",
  phone: "",
  address: "Delhi, India",
  resumeUrl: "",
  socialLinks: {
    twitter: "https://twitter.com/raivishal939",
    linkedin: "https://www.linkedin.com/in/vishal101022/",
    github: "https://github.com/Vishal101022",
  },
} as const;

export const about = [
  {
    techStack: [{ name: "JavaScript" }, { name: "Node" }, {name: "Express"}, {name: "SQL"}, {name: "API"}],
    summary: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "SkillBlend-LMS",
    description:
      "A full stack web application that helps users to create and manage courses, access learning materials, track progress on their dashboard,making it a valuable tool for educators and learners.",
    imgUrl: "/images/p1.png",
    techStack: ["React", "Tailwind", "NextJs", "MongoDB", "Stripe", "Prisma"],
    link: "https://github.com/Vishal101022/SkillBlend-LMS",
    github: "https://github.com/Vishal101022/SkillBlend-LMS",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Full-Stack expense tracker app to track your expenses.",
    imgUrl: "/images/expense.png",
    techStack: [
      "Node",
      "Express",
      "SQL",
      "API",
      "JavaScript",
      "HTML",
      "CSS",
      "Sequelize",
    ],
    link: "https://github.com/Vishal101022/full_stack_expense_app",
    github: "https://github.com/Vishal101022/full_stack_expense_app",
  },
  {
    id: 3,
    title: "Group Chat",
    description: "Real time group chat app.",
    imgUrl: "/images/chat.png",
    techStack: [
      "Node",
      "Express",
      "Socket.io",
      "API",
      "JavaScript",
      "HTML",
      "CSS",
      "Sequelize",
    ],
    link: "https://github.com/Vishal101022/group_chat_app",
    github: "https://github.com/Vishal101022/group_chat_app",
  },
] as const;

export const experience = [
  {
    title: "Internship",
    company: "HashedBit Innovations",
    year: "2024",
    companyLink: "https://hashedbit.com/",
    desc: "Developing APIs using Express.js, building the UI with React.js, and managing the database with MySQL",
  },
  {
    title: "MCA",
    company: "Dr.Shyama Prasad Mukherjee University",
    year: "2023",
    companyLink: "https://dspmuranchi.ac.in/",
    desc: "Computer Application",
  },
  {
    title: "Graduation",
    company: "Ranchi University",
    year: "2020",
    companyLink: "https://www.ranchiuniversity.ac.in/",
    desc: "Computer Science",
  },
] as const;
