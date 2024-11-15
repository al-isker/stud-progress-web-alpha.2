import { SubjectRating } from '@/components/ordinary/subject-rating/SubjectRating';
import { Container } from '@/components/reused/container/Container';
import { Limiter } from '@/components/reused/limiter/Limiter';

import { RatingItemRes } from '@/lib/types/responses';

const TEST_SUBJECT: RatingItemRes[] = [
	{
		id: 1,
		name: 'Анатомия',
		controlType: 'Зачёт',
		rating: [
			{
				id: 1,
				mark: '2',
				date: new Date(),
				isNew: false
			},
			{
				id: 2,
				mark: '2',
				date: new Date(),
				isNew: false
			},
			{
				id: 3,
				mark: '4',
				date: new Date(),
				isNew: true
			}
		]
	},
	{
		id: 2,
		name: 'Физиология',
		controlType: 'Экзамен',
		rating: [
			{
				id: 4,
				mark: '3',
				date: new Date(),
				isNew: false
			},
			{
				id: 5,
				mark: '3',
				date: new Date(),
				isNew: true
			},
			{
				id: 6,
				mark: '5',
				date: new Date(),
				isNew: true
			}
		]
	}
];

export const Rating = () => {
	return (
		<Limiter>
			<Container className='flex flex-col gap-y-4 pt-container'>
				{TEST_SUBJECT.map(subject => (
					<SubjectRating key={subject.id} {...subject} />
				))}
			</Container>
		</Limiter>
	);
};
