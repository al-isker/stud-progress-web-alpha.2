import { Controller, ControllerProps, FieldValues } from 'react-hook-form';

import {
	InputText,
	InputTextProps
} from '@/components/fields/simple/InputText';

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> &
	Omit<
		InputTextProps,
		'inputRef' | 'value' | 'onChange' | 'onBlur' | 'error' | 'helperText'
	>;

export const RHFInputText = <T extends FieldValues>({
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
		render={({ field, fieldState: { error } }) => (
			<InputText
				inputRef={field.ref}
				name={field.name}
				value={field.value ?? ''}
				onChange={field.onChange}
				onBlur={field.onBlur}
				error={!!error}
				helperText={error?.message}
				{...SelectProps}
			/>
		)}
	/>
);
