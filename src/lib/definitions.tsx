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
}

//Project Dialog
export interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project; // The entire project object
}

export interface Experiance{
  company: string;
  position: string;
  from: Date;
  to: Date | string;
  description: string;
  technicalSkills: string[];
  technologies: string[];
}
