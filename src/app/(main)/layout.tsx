import { type ReactNode } from 'react';

import { CssBaseline } from '@mui/material';

import { MaterialProvider } from '@/components/providers/MaterialProvider';

import '@/lib/styles/global.css';

export default ({ children }: { children: ReactNode }) => (
	<MaterialProvider>
		<CssBaseline />
		{children}
	</MaterialProvider>
);
