import { type ReactNode } from 'react';

import { CssBaseline } from '@mui/material';

import '@/lib/styles/global.css';

export default ({ children }: { children: ReactNode }) => (
	<>
		<CssBaseline />
		{children}
	</>
);
