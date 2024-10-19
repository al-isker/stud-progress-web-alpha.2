'use client';

import { MouseEvent } from 'react';

import {
	SelectProps as SelectPropsMUI,
	TextField,
	TextFieldProps
} from '@mui/material';

import { useShowHide } from '@/lib/hooks/useShowHide';
import { IOption } from '@/lib/types';

import { DialogSelect } from './DialogSelect';

type Props = Omit<
	TextFieldProps,
	'select' | 'SelectProps' | 'value' | 'onChange'
> & {
	SelectProps?: Omit<SelectPropsMUI, 'open'>;
} & {
	options: IOption<unknown>[];
	value?: unknown;
	onChange?: (value: unknown) => void;
	keepModalMounted?: boolean;
};

export const Select = ({
	options,
	value,
	onClick,
	onChange,
	SelectProps,
	keepModalMounted,
	...TextFieldProps
}: Props) => {
	const select = useShowHide();

	const handleClickSelect = (e: MouseEvent<HTMLDivElement>) => {
		select.show();

		onClick && onClick(e);
	};

	const handleChangeModalSelect = (value: unknown) => {
		onChange && onChange(value);
	};

	return (
		<>
			<TextField
				select
				fullWidth
				focused={select.isShow}
				value={value}
				onClick={handleClickSelect}
				SelectProps={{ open: false, ...SelectProps }}
				{...TextFieldProps}
			>
				{options.map(option => (
					<option key={String(option.value)} value={String(option.value)}>
						{option.label}
					</option>
				))}
			</TextField>

			<DialogSelect
				open={select.isShow}
				onClose={select.hide}
				label={TextFieldProps.label}
				options={options}
				value={value}
				onChange={handleChangeModalSelect}
				dense={TextFieldProps.size === 'small'}
				keepMounted={keepModalMounted}
			/>
		</>
	);
};

export type SelectProps = Props;
