import React from 'react'
import Select, { MultiValue, SingleValue } from 'react-select'
import clsx from 'clsx'
import { DropdownIndicator, ClearIndicator, MultiValueRemove } from './components'
import {
	clearIndicatorStyles,
	controlStyles,
	dropdownIndicatorStyles,
	groupHeadingStyles,
	indicatorSeparatorStyles,
	indicatorsContainerStyles,
	menuStyles,
	multiValueLabelStyles,
	multiValueRemoveStyles,
	multiValueStyles,
	noOptionsMessageStyles,
	optionStyles,
	placeholderStyles,
	selectInputStyles,
	singleValueStyles,
	valueContainerStyles
} from './styles'
import { SelectOptionType } from '@/types/global'

type SelectOptions = SelectOptionType[]

type Props = {
	setValue: React.Dispatch<React.SetStateAction<string>>
	placeholder: string
	options: SelectOptions
	defaultValueIndex?: number
	isSearchable?: boolean
	isMulti?: boolean
}

const SelectInput = ({
	setValue,
	placeholder,
	options,
	defaultValueIndex,
	isMulti = false,
	isSearchable = true
}: Props) => {
	return (
		<Select
			unstyled
			placeholder={placeholder}
			hideSelectedOptions={false}
			defaultValue={defaultValueIndex ? options[defaultValueIndex] : undefined}
			options={options}
			isSearchable={isSearchable}
			isMulti={isMulti}
			onChange={(selectedOption: MultiValue<SelectOptionType> | SingleValue<SelectOptionType>) =>
				setValue(
					isMulti
						? [...(selectedOption as MultiValue<SelectOptionType>)?.map(opt => opt.value)]
						: (selectedOption as SingleValue<SelectOptionType>)?.value
				)
			}
			styles={{
				input: base => ({
					...base,
					'input:focus': {
						boxShadow: 'none'
					}
				}),
				multiValueLabel: base => ({
					...base,
					whiteSpace: 'normal',
					overflow: 'visible'
				}),
				control: base => ({
					...base,
					transition: 'none'
				})
			}}
			components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
			classNames={{
				control: ({ isFocused }) => clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
				placeholder: () => placeholderStyles,
				input: () => selectInputStyles,
				valueContainer: () => valueContainerStyles,
				singleValue: () => singleValueStyles,
				multiValue: () => multiValueStyles,
				multiValueLabel: () => multiValueLabelStyles,
				multiValueRemove: () => multiValueRemoveStyles,
				indicatorsContainer: () => indicatorsContainerStyles,
				clearIndicator: () => clearIndicatorStyles,
				indicatorSeparator: () => indicatorSeparatorStyles,
				dropdownIndicator: () => dropdownIndicatorStyles,
				menu: () => menuStyles,
				groupHeading: () => groupHeadingStyles,
				option: ({ isFocused, isSelected }) =>
					clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
				noOptionsMessage: () => noOptionsMessageStyles
			}}
		/>
	)
}

export default SelectInput
