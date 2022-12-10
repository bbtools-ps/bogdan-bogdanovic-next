import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "../../common/constants/constants";
import { SettingsSlice } from "../../common/models/ReduxSlices";

const initialState: SettingsSlice = {
  selectedLanguage: [Languages[0].id],
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSelectedLanguage(state, action: PayloadAction<string[]>) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { updateSelectedLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
