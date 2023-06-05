import React from 'react'
import Select, { MultiValue, PropsValue, SingleValue } from 'react-select'
import { SelectOptionType } from '@/types/global'
import ErrorMsg from '../../../../ErrorMsg'
import { selectComponents } from '../../elements'
import { selectInlineStyles } from '../../../styles/inline'
import { selectClassNames } from '../../../styles/classNames'

type Props = {
	name: string
	value?: PropsValue<SelectOptionType> | undefined
	setValue?: React.Dispatch<React.SetStateAction<PropsValue<SelectOptionType>>>
	placeholder: string
	options: SelectOptionType[]
	defaultValueIndex?: number
	isSearchable?: boolean
	isMulti?: boolean
	ariaLabel: string
	onChange?: Function
	onBlur?: Function
	error?: string
	touched?: boolean | undefined
}

export const CustomSelect = ({
	name,
	value,
	setValue,
	placeholder,
	options,
	defaultValueIndex,
	isMulti = false,
	isSearchable = true,
	ariaLabel,
	onChange,
	onBlur,
	error,
	touched
}: Props) => {
	return (
		<label>
			<Select
				unstyled
				name={name}
				value={value}
				placeholder={placeholder}
				hideSelectedOptions={false}
				defaultValue={defaultValueIndex ? options[defaultValueIndex] : undefined}
				options={options}
				isSearchable={isSearchable}
				isMulti={isMulti}
				aria-label={ariaLabel}
				onChange={(selectedOption: PropsValue<SelectOptionType>) => {
					setValue &&
						setValue(
							isMulti
								? [...(selectedOption as MultiValue<SelectOptionType>)?.map(opt => opt.value)]
								: (selectedOption as SingleValue<SelectOptionType>)?.value
						)

					onChange && onChange()
				}}
				onBlur={e => {
					onBlur && onBlur(e)
				}}
				styles={selectInlineStyles}
				components={selectComponents}
				classNames={selectClassNames}
			/>

			{touched && error ? <ErrorMsg>{error}</ErrorMsg> : null}
		</label>
	)
}
