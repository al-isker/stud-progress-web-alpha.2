import { Divider } from '@mui/material';

import { SettingsAddShortcut } from './SettingsAddShortcut';
import { SettingsDownloadApp } from './SettingsDownloadApp';
import { SettingsLogout } from './SettingsLogout';
import { SettingsMode } from './SettingsMode';
import { SettingsPrivacyPolicy } from './SettingsPrivacyPolicy';
import { SettingsSemester } from './SettingsSemester';

export const Settings = ({ className }: { className?: string }) => (
	<div
		className={`${className ?? ''} flex flex-col rounded-t bg-as-bg-default`}
	>
		<span className='mx-auto mb-2 mt-2 h-1 w-8 rounded-full bg-as-text-primary/20' />

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
