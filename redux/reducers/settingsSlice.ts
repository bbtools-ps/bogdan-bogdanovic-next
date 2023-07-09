import { Languages } from "@/common/constants";
import { ISettingsSlice } from "@/common/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ISettingsSlice = {
  selectedLanguage: [Languages[0].id]
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSelectedLanguage(state, action: PayloadAction<string[]>) {
      state.selectedLanguage = action.payload;
    }
  }
});

export const { updateSelectedLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
