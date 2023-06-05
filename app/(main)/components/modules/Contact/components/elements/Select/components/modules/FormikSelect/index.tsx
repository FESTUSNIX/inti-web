import { SelectOptionType } from '@/types/global'
import { FieldProps } from 'formik'
import React from 'react'
import Select, { MultiValue, PropsValue } from 'react-select'
import ErrorMsg from '../../../../ErrorMsg'
import { selectComponents } from '../../elements'
import { selectClassNames } from '../../../styles/classNames'
import { selectInlineStyles } from '../../../styles/inline'
import clsx from 'clsx'
import { controlStyles } from '../../../styles/elements'

interface FormikSelectProps extends FieldProps {
	options: SelectOptionType[]
	isMulti?: boolean
	placeholder?: string
	defaultValueIndex?: number
	isSearchable?: boolean
	ariaLabel: string
	onBlur?: Function
	error?: string
	touched?: boolean | undefined
}

export const FormikSelect = ({
	field,
	form,
	options,
	placeholder,
	isMulti = false,
	defaultValueIndex,
	isSearchable = true,
	ariaLabel,
	onBlur,
	error,
	touched
}: FormikSelectProps) => {
	const onChange = (option: PropsValue<SelectOptionType>) => {
		form.setFieldValue(
			field.name,
			isMulti
				? (option as SelectOptionType[]).map((item: SelectOptionType) => item.value)
				: (option as SelectOptionType).value
		)
	}

	const getValue = () => {
		if (options) {
			return isMulti
				? (options as MultiValue<SelectOptionType>).filter(option => field.value.indexOf(option.value) >= 0)
				: (options as MultiValue<SelectOptionType>).find(option => option.value === field.value)
		} else {
			return isMulti ? [] : ('' as any)
		}
	}

	return (
		<label>
			<Select
				unstyled
				name={field.name}
				options={options}
				value={getValue()}
				onChange={onChange}
				placeholder={placeholder}
				isMulti={isMulti}
				defaultValue={defaultValueIndex ? options[defaultValueIndex] : undefined}
				isSearchable={isSearchable}
				aria-label={ariaLabel}
				onBlur={e => {
					onBlur && onBlur(e)
				}}
				styles={selectInlineStyles}
				components={selectComponents}
				classNames={{
					...selectClassNames,
					control: ({ isFocused }: { isFocused: boolean }) =>
						clsx(
							touched && error ? controlStyles.error : isFocused ? controlStyles.focus : controlStyles.nonFocus,
							controlStyles.base
						)
				}}
			/>
			{touched && error ? <ErrorMsg>{error}</ErrorMsg> : null}
		</label>
	)
}
