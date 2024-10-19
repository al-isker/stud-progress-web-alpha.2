import { Divider } from '@mui/material';

import { SettingsAddShortcut } from './SettingsAddShortcut';
import { SettingsDownloadApp } from './SettingsDownloadApp';
import { SettingsLogout } from './SettingsLogout';
import { SettingsMode } from './SettingsMode';
import { SettingsPrivacyPolicy } from './SettingsPrivacyPolicy';
import { SettingsSemester } from './SettingsSemester';

export const Settings = ({ className }: { className?: string }) => (
	<div
		className={`${className ?? ''} bg-as-bg-default rounded-t flex flex-col`}
	>
		<span className='mt-2 mb-2 mx-auto w-8 h-1 bg-as-text-primary/20 rounded-full' />

		<SettingsMode />
		<Divider className='!my-0' variant='middle' />

		<SettingsSemester />
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
