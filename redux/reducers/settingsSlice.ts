import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Languages } from "../../common/constants/constants";

interface SettingsState {
  selectedLanguage: Iterable<string> | undefined;
}

const initialState: SettingsState = {
  selectedLanguage: new Set([Languages[0].id]),
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
