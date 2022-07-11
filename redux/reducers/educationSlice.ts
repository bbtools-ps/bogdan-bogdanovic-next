import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_PATH } from '../../common/constants/constants';
import { EducationData } from '../../common/models/Data';
import { EducationState } from '../../common/models/ReduxSliceState';

export const fetchEducation = createAsyncThunk('education/getEducation', async (locale: string) => {
  const response = await axios.get<EducationData>(`${DATABASE_PATH}/education${locale === 'en' ? '' : '-' + locale}`);
  return response.data.documents.sort((a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime());
});

const initialState: EducationState = {
  data: null,
  isLoading: true,
  error: undefined,
};

export const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchEducation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default educationSlice.reducer;
