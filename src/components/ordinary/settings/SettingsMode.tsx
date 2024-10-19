'use client';

import { FC, useEffect, useState } from 'react';

import { InvertColors } from '@mui/icons-material';
import { type PaletteMode, useColorScheme } from '@mui/material/';

import { MenuItem } from '@/components/reused/menu-item/MenuItem';
import { Switch } from '@/components/reused/switch/Switch';

export const SettingsMode: FC = () => {
	const { mode, setMode } = useColorScheme();

	const handleClick = () => {
		setMode(mode === 'light' ? 'dark' : 'light');
	};

	return (
		<MenuItem icon={<InvertColors />} text='Тема' onClick={handleClick}>
			<SwitchMode mode={mode as PaletteMode} />
		</MenuItem>
	);
};

const SwitchMode: FC<{ mode: PaletteMode }> = ({ mode }) => {
	const [mount, setMount] = useState(false);

	useEffect(() => {
		setMount(true);
	}, []);

	if (mount) return <Switch className='-mx-1' checked={mode === 'dark'} />;
};
