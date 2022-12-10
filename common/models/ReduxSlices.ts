import {
  EducationData,
  LanguageData,
  ProjectData,
  WorkExperienceData,
} from "./Data";

interface ReduxAsyncThunk {
  isLoading: boolean;
  error: string | undefined;
}

export interface WorkExperienceSlice extends ReduxAsyncThunk {
  data: WorkExperienceData["documents"] | null;
}

export interface ProjectsSlice extends ReduxAsyncThunk {
  data: ProjectData["documents"] | null;
}

export interface EducationSlice extends ReduxAsyncThunk {
  data: EducationData["documents"] | null;
}

export interface LanguageSlice extends ReduxAsyncThunk {
  data: LanguageData["documents"] | null;
}

export interface SettingsSlice {
  selectedLanguage: string[];
}
