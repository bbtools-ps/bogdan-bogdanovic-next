import educationSlice from "./educationSlice";
import featuredProjectsSlice from "./featuredProjectsSlice";
import languagesSlice from "./languagesSlice";
import settingsSlice from "./settingsSlice";
import workExperienceSlice from "./workExperienceSlice";

export const rootReducer = {
  settings: settingsSlice,
  featuredProjects: featuredProjectsSlice,
  workExperience: workExperienceSlice,
  education: educationSlice,
  languages: languagesSlice,
};
