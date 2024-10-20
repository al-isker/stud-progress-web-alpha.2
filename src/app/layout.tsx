import { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

const font = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	variable: '--font-primary'
});

export const metadata: Metadata = {
	title: 'Stud Progress',
	description: 'Новый личный кабинет для студентов ДГМУ',
	icons: { icon: '/favicon.svg' }
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
	<html lang='ru'>
		<body className={font.className}>{children}</body>
	</html>
);

export default RootLayout;
