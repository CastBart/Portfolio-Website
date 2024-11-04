import { ExperienceType } from "./definitions";

export const experienceList: ExperienceType[] = [
  {
    company: "Kianda Technologies",
    position: "Low-code Automation Developer",
    from: new Date("2023/06/01"),
    to: "Present",
    description:
      "In my current role at Kianda Technologies, I develop and automate business workflows to enhance operational efficiency for clients. I focus on creating user-friendly interfaces with custom CSS, advanced JavaScript form functionalities, and ensuring our solutions meet each client’s branding requirements. I’ve also contributed to the company’s growth by developing standalone projects and fostering strong client relationships.",
    skills: [
      "Workflow automation in low-code environments",
      "Custom UI design using CSS",
      "Advanced JavaScript for form functionalities",
      "Product architecture & development",
      "Client relationship management",
    ],
    technologies: ["JavaScript", "CSS", "HTML", "SQL", "EmberJS", "Handlebars"],
  },
  {
    company: "Kianda Technologies",
    position: "Software Development Trainer/Technical Writer",
    from: new Date("2022/07/01"),
    to: new Date("2023/06/01"),
    description:
      "As a Software Development Trainer and Technical Writer, I created technical training materials, online courses, and detailed documentation to improve user understanding of Kianda’s low-code platform. Collaborating closely with the R&D team, I helped produce product documentation and conducted system testing to ensure high-quality releases for users and stakeholders.",
    skills: [
      "Training material creation and course design",
      "Writing technical documentation for diverse audiences",
      "Collaborating with R&D on case studies and system testing",
    ],
    technologies: ["Kianda platform", "Markdown"],
  },
  {
    company: "Web Suitors",
    position: "Software Developer ",
    from: new Date("2018/04/01"),
    to: new Date("2018/07/1"),
    description:
      "At Web Suitors, I designed and developed augmented reality (AR) applications, which I deployed to Android and iOS platforms to improve user engagement. I also led a web scraping project that gathered valuable client data for marketing, and contributed to website development using web technologies.",
    skills: [
      "AR application design and development",
      "Mobile deployment for Android and iOS",
      "Web scraping for data collection and lead generation",
    ],
    technologies: [
      "Unity3D and C# for AR development ",
      "JavaScript, HTML, CSS for web development",
      "Firebase for backend storage and data management",
    ],
  },
];
