import { IArrayValue, IStringValue, ITimestampValue } from "./FirebaseValues";

export interface IEducationFields {
  certificate: IStringValue;
  institution: IStringValue;
  location: IStringValue;
}

export interface ILanguageFields {
  language: IStringValue;
  level: IStringValue;
}

export interface IProjectFields {
  title: IStringValue;
  description: IStringValue;
  imageSrc: IStringValue;
  equipment?: IArrayValue;
  technologies?: IArrayValue;
  infoLink?: IStringValue;
  liveLink?: IStringValue;
  sourceLink?: IStringValue;
}

export interface IWorkExperienceFields {
  companyName: IStringValue;
  companyLink?: IStringValue;
  description: IArrayValue;
  jobTitle: IStringValue;
  startDate: ITimestampValue;
  endDate?: ITimestampValue;
}
