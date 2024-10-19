import { Controller, type ControllerProps, FieldValues } from 'react-hook-form';

import { Select, SelectProps } from '@/components/fields/simple/Select';

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> &
	Omit<
		SelectProps,
		'inputRef' | 'value' | 'onChange' | 'onBlur' | 'error' | 'helperText'
	>;

export const RHFSelect = <T extends FieldValues>({
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
			<Select
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
