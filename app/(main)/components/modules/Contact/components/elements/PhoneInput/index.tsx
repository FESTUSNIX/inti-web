import React from 'react'
import PhoneInput2 from 'react-phone-input-2'
import 'react-phone-input-2/lib/high-res.css'
import ErrorMsg from '../ErrorMsg'
import clsx from 'clsx'

type Props = {
	value: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
	onChange?: Function
	onBlur?: Function
	error?: string
	touched?: boolean | undefined
}

const PhoneInput = ({ value, setValue, onChange, onBlur, error, touched }: Props) => {
	const customStyles = {
		inputClass: clsx(
			'!bg-dark-800/20 !text-neutral-200 !h-auto !px-4 !py-4 !text-base !pl-14 focus:!shadow-none !w-full !rounded-lg',
			touched && error ? '!border-error' : '!border-dark-700/20 focus:!border-dark-700/60'
		),
		buttonClass:
			'!bg-transparent !border-none hover:!bg-transparent [&>.selected-flag]:!w-auto [&>.selected-flag]:!px-4 [&>.selected-flag]:!bg-transparent [&>.selected-flag>.flag]:!relative [&>.selected-flag>.flag]:!mt-0 [&>.selected-flag>.flag]:!-translate-y-1/2',
		dropdownClass:
			'!p-1 !w-max !bg-dark-800/20 !rounded-lg backdrop-blur-md border border-dark-700/20 !overflow-y-overlay text-neutral-200 [&>.country:hover]:!bg-dark-700/20 [&>.country:hover:active]:!bg-dark-700/25 [&>.country.highlight]:!bg-dark-700/40 [&>.divider]:!border-b-dark-700/40 [&>.country]:!rounded [&>.country]:!px-4 [&>.country]:!py-3 [&>.country>.flag]:!relative [&>.country>.flag]:!left-0 [&>.country>.flag]:!mr-2'
	}

	return (
		<div className={clsx(touched && error && 'error-shake')}>
			<PhoneInput2
				inputProps={{ name: 'phone' }}
				country={'pl'}
				value={value}
				onChange={(phone, _, e) => {
					setValue && setValue(phone)
					onChange && onChange(e)
				}}
				onBlur={e => {
					onBlur && onBlur(e)
				}}
				preferredCountries={['pl']}
				{...customStyles}
			/>

			{touched && error ? <ErrorMsg>{error}</ErrorMsg> : null}
		</div>
	)
}

export default PhoneInput
