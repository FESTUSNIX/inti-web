import { components, MultiValueRemoveProps } from 'react-select'
import { BsXLg } from 'react-icons/bs'

export const MultiValueRemove = (props: MultiValueRemoveProps) => {
	return (
		<components.MultiValueRemove {...props}>
			<BsXLg size={10} />
		</components.MultiValueRemove>
	)
}
