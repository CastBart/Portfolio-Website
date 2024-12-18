// Nav Bar Definition
export type NavBarItem = {
  id: string;
  href: string;
  text: string;
};

// Project Definition
export interface Project {
  title: string;
  id: string;
  shotDesc: string;
  longDesc: string;
  technologies: string[];
  imgURL: string;
  siteURL: string;
}

//Project Dialog
export interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project; // The entire project object
}

export interface ExperienceType{
  company: string;
  position: string;
  from: Date;
  to: Date | string;
  url: string;
  description: string;
  skills: string[];
  technologies: string[];
}

// SVG Interface
export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  fill?: string;
  className?: string;
}
