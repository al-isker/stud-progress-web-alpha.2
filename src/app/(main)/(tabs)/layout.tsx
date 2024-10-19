import { type ReactNode } from 'react';

import { Header } from '@/components/ordinary/header/Header';
import { Navigation } from '@/components/ordinary/navigation/Navigation';
import { Main } from '@/components/reused/main/Main';

export default ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Navigation />
	</>
);
