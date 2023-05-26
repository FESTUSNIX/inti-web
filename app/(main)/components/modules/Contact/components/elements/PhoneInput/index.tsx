import React from 'react'
import PhoneInput2 from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'

type Props = {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
}

const PhoneInput = ({ value, setValue }: Props) => {
	const customStyles = {
		inputClass:
			'!bg-dark-800/20 !border-dark-700/20 !text-neutral-200 !h-auto !px-4 !py-4 !text-base !pl-14 focus:!border-dark-700/60 focus:!shadow-none !w-full !rounded-lg',
		buttonClass:
			'!bg-transparent !border-none hover:!bg-transparent [&>.selected-flag]:!w-auto [&>.selected-flag]:!px-4 [&>.selected-flag]:!bg-transparent [&>.selected-flag>.flag]:!relative [&>.selected-flag>.flag]:!mt-0 [&>.selected-flag>.flag]:!-translate-y-1/2',
		dropdownClass:
			'!p-1 !w-max !bg-dark-800/20 !rounded-lg backdrop-blur-md border border-dark-700/20 !overflow-y-overlay text-neutral-200 [&>.country:hover]:!bg-dark-700/20 [&>.country:hover:active]:!bg-dark-700/25 [&>.country.highlight]:!bg-dark-700/40 [&>.divider]:!border-b-dark-700/40 [&>.country]:!rounded [&>.country]:!px-4 [&>.country]:!py-3 [&>.country>.flag]:!relative [&>.country>.flag]:!left-0 [&>.country>.flag]:!mr-2'
	}

	return (
		<div className='text-dark-900'>
			<PhoneInput2
				country={'pl'}
				value={value}
				onChange={phone => setValue(phone)}
				preferredCountries={['pl']}
				{...customStyles}
			/>
		</div>
	)
}

export default PhoneInput
