'use client';

import { MouseEvent, ReactNode } from 'react';

import { DialogProps, MenuItem, MenuItemProps } from '@mui/material';

import { Button } from '@/components/reused/button/Button';
import { Dialog } from '@/components/reused/dialog/Dialog';

import { IOption } from '@/lib/types';

type Props<Value = unknown> = Omit<
	DialogProps,
	'slotProps' | 'PaperProps' | 'onChange' | 'onClose'
> &
	Pick<MenuItemProps, 'dense'> & {
		label: ReactNode;
		options: IOption<Value>[];
		value?: Value | null;
		onChange?: (value: Value) => void;
		onClose?: (event: MouseEvent) => void;
	};

export const DialogSelect = <Value,>({
	label,
	options,
	value,
	onChange,
	dense,
	...DialogProps
}: Props<Value>) => {
	const handleClose = (e: MouseEvent) => {
		DialogProps.onClose && DialogProps.onClose(e);
	};

	const handleClickOption = (e: MouseEvent, newValue: Value) => {
		handleClose(e);

		if (value !== newValue) {
			onChange && onChange(newValue);
		}
	};

	const handleClickAction = (e: MouseEvent) => {
		handleClose(e);
	};

	return (
		<Dialog
			title={label}
			actions={<Button onClick={handleClickAction}>Отмена</Button>}
			classNameHeader='px-5 pb-2'
			classNameContent='px-0'
			{...DialogProps}
		>
			{options.map(option => (
				<MenuItem
					key={String(option.value)}
					disableGutters
					className='px-5'
					selected={option.value === value}
					onClick={e => handleClickOption(e, option.value)}
					dense={dense}
				>
					{option.label}
				</MenuItem>
			))}
		</Dialog>
	);
};

export type DialogSelectProps<Value = unknown> = Props<Value>;
