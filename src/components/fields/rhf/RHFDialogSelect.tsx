import { Controller, type ControllerProps, FieldValues } from 'react-hook-form';

import {
	DialogSelect,
	DialogSelectProps
} from '@/components/fields/simple/DialogSelect';

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> &
	Omit<DialogSelectProps, 'value' | 'onChange' | 'onBlur'>;

export const RHFDialogSelect = <T extends FieldValues>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	disabled,
	...SelectProps
}: Props<T>) => (
	<Controller
		control={control}
		name={name}
		rules={rules}
		shouldUnregister={shouldUnregister}
		defaultValue={defaultValue}
		disabled={disabled}
		render={({ field }) => (
			<DialogSelect
				value={field.value ?? ''}
				onChange={field.onChange}
				onBlur={field.onBlur}
				{...SelectProps}
			/>
		)}
	/>
);
