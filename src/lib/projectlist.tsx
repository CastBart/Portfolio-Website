import { Project } from "./definitions";

export const projects: Project[] = [
  {
    title: "B-Fit",
    shotDesc: "A fitness app used by individuals to track their workouts",
    longDesc: `B-Fit is a responsive fitness web application, compatible with web, Android, and iOS platforms, developed using Next.js. The app provides users with key fitness tools, including a Daily Calorie Calculator, customizable Workout Plans, and a Single Workout feature. Users can track their fitness journey, monitor daily calorie needs based on personal metrics (weight, height, age, etc.), and set calorie goals for maintenance, muscle gain, or fat loss. \n
    B-Fit offers a standard exercise library with options for users to create their own, detailing primary muscle targets and equipment. Workout plans allow users to build daily routines, track weekly progress, and adjust workouts with ease. A calendar view displays completed workout days, and users can track their exercise history, including workout dates, reps, and weights lifted. This comprehensive tool is designed to support users’ fitness journeys through intuitive, data-driven features and flexible workout management.`,
    id: "proj-1",
    technologies: [
      "Next.js – For server-side rendering, routing, and improved performance",
      "React – For building the user interface and managing component-based views",
      "PostgreSQL – For database management, storing user profiles, workout data, and exercise history",
      "Tailwind CSS – For responsive styling and custom UI elements",
      "Chart.js – For visualizing workout progress, such as tracking reps and weights over time",
      "Date-fns or Moment.js – For handling date calculations and displaying the calendar view",
      "TypeScript – To provide type safety and reduce runtime errors",
    ],
  },
  {
    title: "ZychFunrinture",
    shotDesc: "An online store for selling hand made furniture.",
    longDesc: `ZychFurniture is a responsive online furniture store I developed to display a curated selection of products and provide an intuitive, streamlined shopping experience. Built using ReactJS for a dynamic and responsive user interface, the platform leverages Bootstrap for device compatibility, ensuring smooth navigation on both desktop and mobile.\n
    To enhance user engagement, ZychFurniture integrates Firebase for real-time product listing and availability updates, allowing users to view accurate, up-to-date inventory. For customer inquiries, the platform includes a dynamic contact form with Formik-based validation, helping ensure data accuracy and ease of use for customers reaching out with questions or custom requests.\n
    Additional functionality, such as real-time product filtering and integrated image storage via Firebase, supports a visually appealing and user-centric experience, allowing potential buyers to browse, search, and engage with product details seamlessly.`,
    id: "proj-2",
    technologies: [
      "ReactJS for user interface",
      "Bootstrap for responsive design",
      "Firebase for real-time data and image storage",
      "Formik for dynamic form validation",
    ],
  },
  {
    title: "BartFitness",
    shotDesc: "Personal PT profile",
    longDesc:
      "BartFitness is a personal training portfolio website designed to showcase your journey as a personal trainer and the services you offer. It provides visitors with an engaging About Me section that explains the story behind your fitness journey and motivations. The site also features detailed Training Packages, offering clients a clear view of available programs tailored to different fitness goals. A Contact section allows prospective clients to reach out directly for inquiries, simplifying the connection process. Built for ease of navigation and seamless user experience, BartFitness gives potential clients a direct way to connect with you and understand your training approach.",
    id: "proj-3",
    technologies: [
      "React – Enables a component-based structure for efficient rendering and smooth user experience, ensuring quick access to different site sections.",
      "React Router – Allows seamless navigation across different pages without reloading, making transitions between the About, Training Packages, and Contact sections fast and smooth.",
      "Formik – Used for managing forms efficiently, particularly in the Contact section, where it handles user inputs and provides validation to capture inquiries accurately.",
      "CSS Modules – Provides scoped and modularized CSS to create consistent styling across components, allowing easy customization of the look and feel while keeping styles organized and maintainable.",
    ],
  },
];
