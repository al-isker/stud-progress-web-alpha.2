import { Metadata, NextPage } from 'next';

import { Rating } from '@/components/screens/Rating';

export const metadata: Metadata = {
	title: 'Главная'
};

const HomePage: NextPage = () => <Rating />;

export default HomePage;
