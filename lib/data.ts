export const userData = {
  name: "Vishal Kumar",
  handle: "@Vishal101022",
  firstName: "Vishal",
  title: "Hi there, I’m",
  description: "I’m a web developer who loves building things with code.",
  designation: "Web Developer",
  availability: true,
  avatarUrl: "/images/avtar.jpg",
  email: "raivishal939@gmail.com",
  phone: "",
  address: "Ranchi, India",
  resumeUrl: "",
  socialLinks: {
    twitter: "https://twitter.com/raivishal939",
    linkedin: "https://www.linkedin.com/in/vishal101022/",
    github: "https://github.com/Vishal101022",
  },
} as const;

export const about = [
  {
    techStack: [{ name: "JavaScript" }, { name: "React" }],
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
    link: "https://skill-blend-lms.vercel.app/",
    github: "https://github.com/Vishal101022/SkillBlend-LMS",
  },
  {
    id: 2,
    title: "Kathak Artist Website",
    description:
      "sleek and minimalistic website with a harmonious color palette",
    imgUrl: "/images/p2.png",
    techStack: ["Html", "Css", "JavaScript", "Bootstrap"],
    link: "https://rahulkathak.com/",
    github: "https://github.com/Vishal101022/",
  },
] as const;

export const experience = [
  {
    title: "",
    company: "",
    year: "",
    companyLink: "",
    desc: "",
  },
] as const;
