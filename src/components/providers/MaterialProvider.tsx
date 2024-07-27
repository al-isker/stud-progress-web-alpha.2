'use client';

import { type FC, type ReactNode } from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { COLORS } from '@/lib/styles/colors';

const theme = createTheme({
	palette: {
		primary: {
			main: COLORS.primary
		}
	}
});

export const MaterialProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
