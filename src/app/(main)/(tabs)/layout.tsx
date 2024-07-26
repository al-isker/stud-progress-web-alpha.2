import { type ReactNode } from 'react';

import { Header } from '@/components/ordinary/header/Header';
import { Navigation } from '@/components/ordinary/navigation/Navigation';

export default ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<main>{children}</main>
		<Navigation />
	</>
);
