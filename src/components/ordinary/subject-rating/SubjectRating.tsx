'use client';

import Link from 'next/link';

import { ExpandMore } from '@mui/icons-material';
import { ButtonBase, IconButton } from '@mui/material';

import { Chip } from '@/components/reused/chip/Chip';

import { ROUTES } from '@/lib/constants/routes';
import { RatingItemRes } from '@/lib/types/responses';

import { SubjectRatingGauge } from './SubjectRatingGauge';

interface Props extends RatingItemRes {}

export const SubjectRating = ({ id, name, controlType, rating }: Props) => {
	// вынести эту логику на сервер
	const averageRating =
		rating.reduce((acc, item) => {
			const markNum = Number(item.mark);

			if (!isNaN(markNum)) {
				acc += markNum;
			}

			return acc;
		}, 0) / rating.length;

	return (
		<ButtonBase
			className='w-full rounded'
			component={Link}
			href={`${ROUTES.rating}/${id}`}
			focusRipple
		>
			<div className='w-full rounded border border-primary-light/60 bg-gradient-to-br from-white via-white to-primary-dark/5 px-3 py-2 shadow-sm'>
				<div className='mb-1 flex justify-between'>
					<div>
						<div className=''>
							<span className='text-xl font-semibold leading-6 text-black/80'>
								{name}
							</span>
						</div>

						<Chip
							className='w-fit'
							size='small'
							color='primary'
							variant='outlined'
							label={controlType}
						/>
					</div>

					<SubjectRatingGauge
						height={52}
						width={52}
						averageMark={averageRating}
					/>
				</div>

				{/* вынести отдельный компонент */}
				<div className='flex items-center justify-between'>
					<div>
						{rating.map(item => (
							<span key={item.id}>{item.mark}</span>
						))}
					</div>

					<IconButton
						className='-m-2 p-2'
						size='small'
						onTouchStart={e => e.stopPropagation()}
						onMouseDown={e => e.stopPropagation()}
						onClick={e => e.preventDefault()}
					>
						<ExpandMore fontSize='inherit' />
					</IconButton>
				</div>
			</div>
		</ButtonBase>
	);
};
