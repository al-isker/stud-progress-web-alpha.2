'use client';

import Link from 'next/link';

import { Subject } from '@mui/icons-material';

import { MenuItem } from '@/components/reused/menu-item/MenuItem';

import { ROUTES } from '@/lib/constants/routes';

export const SettingsPrivacyPolicy = () => (
	<Link href={ROUTES.privacyPolicy} passHref>
		<MenuItem icon={<Subject />} text='Политика конфиденциальности' />
	</Link>
);
