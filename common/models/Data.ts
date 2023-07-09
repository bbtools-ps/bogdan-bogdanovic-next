import { IEducationFields, ILanguageFields, IProjectFields, IWorkExperienceFields } from "./Fields";

export interface IProjectData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: IProjectFields;
  }[];
}

export interface IEducationData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: IEducationFields;
  }[];
}

export interface IWorkExperienceData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: IWorkExperienceFields;
  }[];
}

export interface ILanguageData {
  documents: {
    createTime: string;
    updateTime: string;
    name: string;
    fields: ILanguageFields;
  }[];
}
