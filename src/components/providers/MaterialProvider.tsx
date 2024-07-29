'use client';

import { type FC, type ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BREAKPOINTS_MUI } from '@/lib/styles/breakpoints';
import { COLORS_MUI } from '@/lib/styles/colors';
import { TYPOGRAPHY_MUI } from '@/lib/styles/typography';

const theme = createTheme({
	breakpoints: BREAKPOINTS_MUI,
	palette: COLORS_MUI,
	typography: TYPOGRAPHY_MUI
});

export const MaterialProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
