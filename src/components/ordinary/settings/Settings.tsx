import { Divider } from '@mui/material';
import cn from 'clsx';

import { SettingsAddShortcut } from './SettingsAddShortcut';
import { SettingsDownloadApp } from './SettingsDownloadApp';
import { SettingsLogout } from './SettingsLogout';
import { SettingsMode } from './SettingsMode';
import { SettingsPrivacyPolicy } from './SettingsPrivacyPolicy';
import { SettingsSemester } from './SettingsSemester';

interface Props {
	className?: string;
	semester: number;
}

export const Settings = ({ className, semester }: Props) => (
	<div className={cn('flex flex-col rounded-t bg-white', className)}>
		<span className='mx-auto mb-2 mt-2 h-1 w-8 rounded-full bg-black/20' />

		<SettingsMode />
		<Divider className='!my-0' variant='middle' />

		<SettingsSemester semester={semester} />
		<Divider className='!my-0' variant='middle' />

		<SettingsAddShortcut />
		<Divider className='!my-0' variant='middle' />

		<SettingsDownloadApp />
		<Divider className='!my-0' variant='middle' />

		<SettingsPrivacyPolicy />
		<Divider className='!my-0' variant='middle' />

		<SettingsLogout />
	</div>
);
