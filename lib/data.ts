export const userData = {
  githubUsername: "",
  name: "Vishal Kumar",
  title: "Make anything possible with Web Development",
  description:
    "I'm a passionate web developer dedicated to crafting stunning user experiences on the front-end.",
  designation: "Web Developer",
  availability: true,
  avatarUrl: "",
  email: "",
  phone: "",
  address: "",

  about: {},
  experience: [
    {
      title: "",
      company: "",
      year: "",
      companyLink: "",
      desc: "",
    },
  ],
  resumeUrl: "",
  socialLinks: {
    twitter: "",
    linkedin: "",
    github: "",
  },
} as const;

export const projects = [
  {
    id: 1,
    title: "SkillBlend-LMS",
    description:
      "A full stack web application that helps users to create and manage courses, access learning materials, track progress on their dashboard,making it a valuable tool for educators and learners.",
    imgUrl: "/images/p1.png",
    techStack: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "NextJs" },
      { name: "MongoDB" },
      { name: "Stripe" },
      { name: "Prisma" },
    ],
    link: "https://skill-blend-lms.vercel.app/",
    github: "https://github.com/Vishal101022/SkillBlend-LMS",
  },
] as const;
