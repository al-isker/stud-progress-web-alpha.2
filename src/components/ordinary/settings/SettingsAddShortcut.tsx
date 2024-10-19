'use client';

import { FC } from 'react';

import { TouchApp } from '@mui/icons-material';

import { MenuItem } from '@/components/reused/menu-item/MenuItem';

export const SettingsAddShortcut: FC = () => {
	return <MenuItem icon={<TouchApp />} text='Добавить значок на экран' />;
};
