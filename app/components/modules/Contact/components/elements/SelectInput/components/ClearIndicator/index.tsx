import { components, ClearIndicatorProps } from 'react-select'
import { BsXLg } from 'react-icons/bs'
import { SelectOptionType } from '@/types/types'

export const ClearIndicator = (props: ClearIndicatorProps<SelectOptionType>) => {
	return (
		<components.ClearIndicator {...props}>
			<BsXLg size={16} />
		</components.ClearIndicator>
	)
}
