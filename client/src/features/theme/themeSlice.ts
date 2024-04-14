import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Theme, applyTheme } from '@/utils';

type ThemeState = {
  theme: Theme;
};

const initialTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'dark';
  applyTheme(theme);
  return theme;
};

const initialState: ThemeState = {
  theme: initialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem('theme', action.payload);
    },
    unsetTheme: (state) => {
      localStorage.removeItem('theme');
      applyTheme('system');
      state.theme = 'system';
    },
  },
});
export const { setTheme, unsetTheme } = themeSlice.actions;
export default themeSlice.reducer;
