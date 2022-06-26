interface Project {
  title: string;
  urls: { main: string; source: string };
  imageSrc: string;
  descriptionText: string;
  technologiesUsed: string[];
  buttonVariants: { live: boolean; info: boolean };
}

export default Project;
