import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DATABASE_PATH } from "../../common/constants/constants";
import { WorkExperienceData } from "../../common/models/Data";
import { WorkExperienceState } from "../../common/models/ReduxSliceState";

export const fetchWorkExperience = createAsyncThunk(
  "workExperience/getWorkExperience",
  async (locale: string) => {
    const response = await axios.get<WorkExperienceData>(
      `${DATABASE_PATH}/work-experience${locale === "en" ? "" : "-" + locale}`
    );
    return response.data.documents.sort(
      (a, b) =>
        new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
    );
  }
);

const initialState: WorkExperienceState = {
  data: null,
  isLoading: true,
  error: undefined,
};

export const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkExperience.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWorkExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchWorkExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default workExperienceSlice.reducer;
