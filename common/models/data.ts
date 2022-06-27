import { EducationFields } from "./EducationFields";
import { LanguageFields } from "./LanguageFields";
import { ProjectFields } from "./ProjectFields";
import { WorkExperienceFields } from "./WorkExperienceFields";

export interface Data {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields:
      | ProjectFields
      | EducationFields
      | LanguageFields
      | WorkExperienceFields;
  }[];
}
