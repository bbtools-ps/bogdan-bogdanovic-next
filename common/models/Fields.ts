import { ArrayValue, StringValue, TimestampValue } from "./FirebaseValues";

export interface EducationFields {
  certificate: StringValue;
  institution: StringValue;
  location: StringValue;
}

export interface LanguageFields {
  language: StringValue;
  level: StringValue;
}

export interface ProjectFields {
  title: StringValue;
  description: StringValue;
  imageSrc: StringValue;
  imageFallbackSrc: StringValue;
  equipment?: ArrayValue;
  technologies?: ArrayValue;
  infoLink?: StringValue;
  liveLink?: StringValue;
  sourceLink?: StringValue;
}

export interface WorkExperienceFields {
  companyName: StringValue;
  companyLink?: StringValue;
  description: ArrayValue;
  jobTitle: StringValue;
  startDate: TimestampValue;
  endDate?: TimestampValue;
}
