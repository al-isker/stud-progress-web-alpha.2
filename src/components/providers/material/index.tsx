import { type FC, type ReactNode } from 'react';

import {
	Experimental_CssVarsProvider as CssVarsProvider,
	StyledEngineProvider
} from '@mui/material/styles';

import { theme } from './theme';

export const MaterialProvider: FC<{ children: ReactNode }> = ({ children }) => (
	<StyledEngineProvider injectFirst>
		<CssVarsProvider theme={theme}>{children}</CssVarsProvider>
	</StyledEngineProvider>
);
