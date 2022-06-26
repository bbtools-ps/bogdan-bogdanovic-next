import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  selectedLanguage: Iterable<string> | undefined;
}

const initialState: SettingsState = {
  selectedLanguage: new Set(["en"]),
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
