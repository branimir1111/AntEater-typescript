import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from '@/components/ui/use-toast';
import { type ProjectResponse } from '../../utils';

type ProjectState = {
  createdProject: ProjectResponse | null;
};

const initialCreatedProject = (): ProjectResponse | null => {
  const createdProject = localStorage.getItem('createdProject');
  if (!createdProject) return null;
  return JSON.parse(createdProject);
};

const initialState: ProjectState = {
  createdProject: initialCreatedProject(),
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProject: (state, action: PayloadAction<ProjectResponse>) => {
      const createdProject = action.payload;
      state.createdProject = createdProject;
      localStorage.setItem('createdProject', JSON.stringify(createdProject));
    },
  },
});

export default projectSlice.reducer;
export const { createProject } = projectSlice.actions;
