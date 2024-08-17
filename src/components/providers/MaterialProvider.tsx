'use client';

import { type FC, type ReactNode } from 'react';

import {
	Experimental_CssVarsProvider as CssVarsProvider,
	experimental_extendTheme as extendTheme
} from '@mui/material/styles';

import { BREAKPOINTS, COLORS, FONT_FAMILY } from '@/lib/styles/style';

const theme = extendTheme({
	cssVarPrefix: '',

	breakpoints: {
		values: {
			xs: NaN,
			sm: BREAKPOINTS.sm,
			md: BREAKPOINTS.md,
			lg: BREAKPOINTS.lg,
			xl: NaN
		}
	},

	typography: {
		fontFamily: FONT_FAMILY.primary
	},

	colorSchemes: {
		light: {
			palette: {
				primary: {
					main: COLORS.light.primary
				}
			}
		},
		dark: {
			palette: {
				primary: {
					main: COLORS.dark.primary
				}
			}
		}
	}
});

export const MaterialProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<CssVarsProvider theme={theme}>{children}</CssVarsProvider>
);
