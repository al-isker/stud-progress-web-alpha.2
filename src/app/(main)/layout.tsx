import { type ReactNode } from 'react';

import { CssBaseline } from '@mui/material';

import { MaterialProvider } from '@/components/providers/material';
import { ReduxProvider } from '@/components/providers/redux';

import '@/lib/styles/global.css';

export default ({ children }: { children: ReactNode }) => (
	<ReduxProvider>
		<MaterialProvider>
			{/* <SupportDeviceScript /> */}
			<CssBaseline />
			{children}
		</MaterialProvider>
	</ReduxProvider>
);
