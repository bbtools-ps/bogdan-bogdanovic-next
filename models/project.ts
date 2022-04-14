class Project {
  title: string;
  urls: { main: string; source: string };
  imageSrc: string;
  descriptionText: string;
  technologiesUsed: string[];
  buttonVariants: { live: boolean; info: boolean };

  constructor(
    title: string,
    urls: { main: string; source: string },
    imageSrc: string,
    descriptionText: string,
    technologiesUsed: string[],
    buttonVariants: { live: boolean; info: boolean }
  ) {
    this.title = title;
    this.urls = urls;
    this.imageSrc = imageSrc;
    this.descriptionText = descriptionText;
    this.technologiesUsed = technologiesUsed;
    this.buttonVariants = buttonVariants;
  }
}

export default Project;
