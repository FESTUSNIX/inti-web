import { SelectOptionType } from '@/types/global'
import { GroupBase, StylesConfig } from 'react-select'

export const selectInlineStyles: StylesConfig<SelectOptionType, boolean, GroupBase<SelectOptionType>> | undefined = {
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
}
