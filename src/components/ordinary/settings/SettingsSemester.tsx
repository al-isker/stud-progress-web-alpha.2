'use client';

import { memo, useCallback, useState } from 'react';

import { AppRegistration, ArrowDropDown } from '@mui/icons-material';

import { DialogSelect } from '@/components/fields/simple/DialogSelect';
import { MenuItem } from '@/components/reused/menu-item/MenuItem';
import { Message } from '@/components/reused/message/Message';

import { semesterOptions } from '@/lib/constants/options';
import { useShowHide } from '@/lib/hooks/useShowHide';
import { ProfileService } from '@/lib/services/profileService';

export const SettingsSemester = () => {
	const select = useShowHide();
	const message = useShowHide();

	const defaultSemester = 3;

	const [semester, setSemester] = useState(defaultSemester);
	const [isLoading, setIsLoading] = useState(false);

	const handleClick = useCallback(select.show, []);

	const handleChange = (newValue: number) => {
		setIsLoading(true);

		ProfileService.updateSemester({
			semester: newValue
		})
			.catch(() => {
				setSemester(defaultSemester);
				message.show();
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<>
			<Message
				severity='error'
				open={message.isShow}
				onClose={message.hide}
				autoHideDuration={5000}
				noCloseButton
			>
				Ошибка
			</Message>

			<DialogSelect
				open={select.isShow}
				onClose={select.hide}
				label='Семестр'
				options={semesterOptions}
				value={semester}
				onChange={handleChange}
				dense
			/>

			<SemesterMenuItem onClick={handleClick} isLoading={isLoading} />
		</>
	);
};

interface SemesterMenuItemProps {
	onClick?: () => void;
	isLoading?: boolean;
}

const SemesterMenuItem = memo(function SemesterMenuItem({
	onClick,
	isLoading
}: SemesterMenuItemProps) {
	return (
		<MenuItem
			icon={<AppRegistration />}
			text='Изменить семестер'
			onClick={onClick}
			loading={isLoading}
		>
			<ArrowDropDown className='text-black/80' />
		</MenuItem>
	);
});
