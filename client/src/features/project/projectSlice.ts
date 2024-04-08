import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from '@/components/ui/use-toast';

type ProjectState = {
  project: null;
};

const initialState: ProjectState = { project: null };

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    createProject: () => {},
  },
});

export default projectSlice.reducer;
export const { createProject } = projectSlice.actions;
