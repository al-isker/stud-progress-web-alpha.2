import { type ReactNode } from 'react';

import { Header } from '@/components/ordinary/header/Header';
import { Main } from '@/components/ordinary/main/Main';
import { Navigation } from '@/components/ordinary/navigation/Navigation';

export default ({ children }: { children: ReactNode }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Navigation />
	</>
);
