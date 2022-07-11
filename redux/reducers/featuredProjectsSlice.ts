import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { DATABASE_PATH } from '../../common/constants/constants';
import { ProjectData } from '../../common/models/Data';
import { ProjectsState } from '../../common/models/ReduxSliceState';

export const fetchProjects = createAsyncThunk('featuredProjects/getFeaturedProjects', async (locale: string) => {
  const response = await axios.get<ProjectData>(`${DATABASE_PATH}/projects${locale === 'en' ? '' : '-' + locale}`);
  return response.data.documents.sort((a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime());
});

const initialState: ProjectsState = {
  data: null,
  isLoading: true,
  error: undefined,
};

export const featuredProjectsSlice = createSlice({
  name: 'featuredProjects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default featuredProjectsSlice.reducer;
