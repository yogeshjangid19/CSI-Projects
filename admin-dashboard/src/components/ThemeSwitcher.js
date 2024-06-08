// src/components/ThemeSwitcher.js
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeSwitcher = ({ theme, toggleTheme }) => (
  <IconButton onClick={toggleTheme}>
    {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
  </IconButton>
);

export default ThemeSwitcher;
