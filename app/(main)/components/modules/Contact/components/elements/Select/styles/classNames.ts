import clsx from 'clsx'
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
} from './elements'

export const selectClassNames = {
	control: ({ isFocused }: { isFocused: boolean }) =>
		clsx(isFocused ? controlStyles.focus : controlStyles.nonFocus, controlStyles.base),
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
	option: ({ isFocused, isSelected }: { isFocused: boolean; isSelected: boolean }) =>
		clsx(isFocused && optionStyles.focus, isSelected && optionStyles.selected, optionStyles.base),
	noOptionsMessage: () => noOptionsMessageStyles
}
