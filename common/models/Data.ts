import { EducationFields, LanguageFields, ProjectFields, WorkExperienceFields } from "./Fields";

export interface ProjectData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: ProjectFields;
  }[];
}

export interface EducationData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: EducationFields;
  }[];
}

export interface WorkExperienceData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: WorkExperienceFields;
  }[];
}

export interface LanguageData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: LanguageFields;
  }[];
}
