import { Project } from "./definitions";

export const projects: Project[] = [
  {
    title: "B-Fit",
    shotDesc: "A fitness app used by individuals to track their workouts",
    longDesc: `B-Fit is a responsive fitness web application, compatible with web, Android, and iOS platforms, developed using Next.js. The app provides users with key fitness tools, including a Daily Calorie Calculator, customizable Workout Plans, and a Single Workout feature. Users can track their fitness journey, monitor daily calorie needs based on personal metrics (weight, height, age, etc.), and set calorie goals for maintenance, muscle gain, or fat loss. 
      \n
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
    longDesc:
      "ZychFurniture is an online store I built to showcase furniture products and provide users with dynamic form validation for inquiries. Real-time data management with Firebase allowed for accurate product listings and availability.",
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
      "I developed BartFitness as a single-page application to offer fitness services and manage client engagement. The project involved modular CSS styling for components and seamless form handling to ensure user inquiries were captured efficiently.",
    id: "proj-3",
    technologies: [
      "ReactJS for front-end development",
      "CSS Modules for component-specific styling",
      "EmailJS for form handling and email integration",
    ],
  },
];
