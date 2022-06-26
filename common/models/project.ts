export interface Project {
  title: string;
  description: string;
  technologies?: { stringValue: string }[];
  equipment?: { stringValue: string }[];
  infoLink?: string;
  liveLink?: string;
  sourceLink?: string;
}
