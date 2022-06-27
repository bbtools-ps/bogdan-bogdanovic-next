import { StringValue } from "./StringValue";

export interface ProjectItem {
  title: string;
  description: string;
  technologies?: StringValue[];
  equipment?: StringValue[];
  infoLink?: string;
  liveLink?: string;
  sourceLink?: string;
  imageSrc: string;
}
