import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { DATABASE_PATH } from "../../common/constants/constants";
import { LanguageData } from "../../common/models/Data";
import { LanguageSlice } from "../../common/models/ReduxSlices";

export const fetchLanguages = createAsyncThunk(
  "languages/getLanguages",
  async (locale: string) => {
    const response = await axios.get<LanguageData>(
      `${DATABASE_PATH}/languages${locale === "en" ? "" : "-" + locale}`
    );
    return response.data.documents.sort(
      (a, b) =>
        new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
    );
  }
);

const initialState: LanguageSlice = {
  data: null,
  isLoading: true,
  error: undefined,
};

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchLanguages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default languagesSlice.reducer;
