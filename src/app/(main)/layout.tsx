import { type ReactNode } from 'react';

import { CssBaseline } from '@mui/material';

export default ({ children }: { children: ReactNode }) => (
	<>
		<CssBaseline />
		{children}
	</>
);
