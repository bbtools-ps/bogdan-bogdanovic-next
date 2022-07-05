import {
  EducationData,
  LanguageData,
  ProjectData,
  WorkExperienceData,
} from "./Data";

interface ReduxSliceState {
  isLoading: boolean;
  error: string | undefined;
}

export interface WorkExperienceState extends ReduxSliceState {
  data: WorkExperienceData["documents"] | null;
}

export interface ProjectsState extends ReduxSliceState {
  data: ProjectData["documents"] | null;
}

export interface EducationState extends ReduxSliceState {
  data: EducationData["documents"] | null;
}

export interface LanguageState extends ReduxSliceState {
  data: LanguageData["documents"] | null;
}
