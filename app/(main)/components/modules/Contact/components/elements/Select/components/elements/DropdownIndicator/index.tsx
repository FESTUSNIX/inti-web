import { components, DropdownIndicatorProps } from 'react-select'
import { SelectOptionType } from '@/types/global'
import { BsChevronDown } from 'react-icons/bs'

export const DropdownIndicator = (props: DropdownIndicatorProps<SelectOptionType>) => {
	return (
		<components.DropdownIndicator {...props}>
			<BsChevronDown size={20} />
		</components.DropdownIndicator>
	)
}
