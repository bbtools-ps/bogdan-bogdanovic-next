import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "../../common/constants/constants";

interface SettingsState {
  selectedLanguage: string[];
}

const initialState: SettingsState = {
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
