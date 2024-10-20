import { FC, PropsWithChildren } from 'react';

import { Header } from '@/components/ordinary/header/Header';
import { Main } from '@/components/ordinary/main/Main';
import { Navigation } from '@/components/ordinary/navigation/Navigation';

const TabsLayout: FC<PropsWithChildren> = ({ children }) => (
	<>
		<Header />
		<Main>{children}</Main>
		<Navigation />
	</>
);

export default TabsLayout;
