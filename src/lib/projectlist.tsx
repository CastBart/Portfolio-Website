import { Project } from "./definitions";
import bfitImage from "../assets/images/bfit-preview.png";
import zychFurnitureImage from "../assets/images/zychfurniture-preview.png";
import bartFitnessImage from "../assets/images/bartfitness-preview.png";


export const projects: Project[] = [
  {
    title: "B-Fit",
    shotDesc:
      "B-Fit is a responsive fitness app for web, Android, and iOS, built with Next.js. It offers essential tools like a Daily Calorie Calculator, customizable Workout Plans, and a Single Workout feature. Users can track fitness progress, monitor calorie needs, and set goals for maintenance, muscle gain, or fat loss.",
    longDesc: `B-Fit is a responsive fitness web application, compatible with web, Android, and iOS platforms, developed using Next.js. The app provides users with key fitness tools, including a Daily Calorie Calculator, customizable Workout Plans, and a Single Workout feature. Users can track their fitness journey, monitor daily calorie needs based on personal metrics (weight, height, age, etc.), and set calorie goals for maintenance, muscle gain, or fat loss. \n
    B-Fit offers a standard exercise library with options for users to create their own, detailing primary muscle targets and equipment. Workout plans allow users to build daily routines, track weekly progress, and adjust workouts with ease. A calendar view displays completed workout days, and users can track their exercise history, including workout dates, reps, and weights lifted. This comprehensive tool is designed to support users’ fitness journeys through intuitive, data-driven features and flexible workout management.`,
    id: "proj-1",
    technologies: [
      "Next.js",
      "React",
      "PostgreSQL",
      "Tailwind CSS",
      "Chart.js",
      "Moment.js",
      "TypeScript",
    ],
    imgURL: bfitImage,
    siteURL: "https://b-fit-xi.vercel.app/",
  },
  {
    title: "ZychFunrinture",
    shotDesc: "ZychFurniture is a responsive online store showcasing curated furniture, designed for a seamless shopping experience. Built with ReactJS for a dynamic interface and Bootstrap for mobile compatibility, it ensures smooth navigation across devices.",
    longDesc: `ZychFurniture is a responsive online furniture store I developed to display a curated selection of products and provide an intuitive, streamlined shopping experience. Built using ReactJS for a dynamic and responsive user interface, the platform leverages Bootstrap for device compatibility, ensuring smooth navigation on both desktop and mobile.\n
    To enhance user engagement, ZychFurniture integrates Firebase for real-time product listing and availability updates, allowing users to view accurate, up-to-date inventory. For customer inquiries, the platform includes a dynamic contact form with Formik-based validation, helping ensure data accuracy and ease of use for customers reaching out with questions or custom requests.\n
    Additional functionality, such as real-time product filtering and integrated image storage via Firebase, supports a visually appealing and user-centric experience, allowing potential buyers to browse, search, and engage with product details seamlessly.`,
    id: "proj-2",
    technologies: [
      "ReactJS",
      "Bootstrap",
      "Firebase",
      "Formik",
    ],
    imgURL: zychFurnitureImage,
    siteURL: "https://zych-furniture.vercel.app/",
  },
  {
    title: "BartFitness",
    shotDesc: "BartFitness is my personal training portfolio website, designed to showcase my journey as a trainer and the services I offer. It includes an engaging About Me section, where I share my fitness story and motivations, along with detailed Training Packages tailored to various fitness goals.",
    longDesc:
      "BartFitness is a personal training portfolio website designed to showcase your journey as a personal trainer and the services you offer. It provides visitors with an engaging About Me section that explains the story behind your fitness journey and motivations. The site also features detailed Training Packages, offering clients a clear view of available programs tailored to different fitness goals. A Contact section allows prospective clients to reach out directly for inquiries, simplifying the connection process. Built for ease of navigation and seamless user experience, BartFitness gives potential clients a direct way to connect with you and understand your training approach.",
    id: "proj-3",
    technologies: [
      "React",
      "React Router",
      "Formik",
      "CSS Modules",
    ],
    imgURL: bartFitnessImage,
    siteURL: "https://bart-fitness.vercel.app/home",
  },
];
