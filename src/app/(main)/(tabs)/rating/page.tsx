import { Metadata, NextPage } from 'next';

import { Rating } from '@/components/screens/Rating';

export const metadata: Metadata = {
	title: 'Главная'
};

const RatingPage: NextPage = () => <Rating />;

export default RatingPage;
