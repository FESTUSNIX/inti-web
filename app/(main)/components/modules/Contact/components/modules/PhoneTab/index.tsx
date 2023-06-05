import React from 'react'
import PhoneInput from '../../elements/PhoneInput'
import { availableHours } from './constants/availableHours'
import { Field, FormikErrors, FormikTouched } from 'formik'
import { FormikSelect } from '../../elements/Select'

type Props = {
	phoneNumber: string
	handleChange: {
		(e: React.ChangeEvent<any>): void
		<T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any>
			? void
			: (e: string | React.ChangeEvent<any>) => void
	}
	handleBlur: {
		(e: React.FocusEvent<any, Element>): void
		<T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void
	}
	errors: FormikErrors<{
		phone: string
		preferredHours: string[]
	}>
	touched: FormikTouched<{
		phone: string
		preferredHours: string[]
	}>
}

const PhoneTab = ({ phoneNumber, handleChange, handleBlur, errors, touched }: Props) => {
	return (
		<div>
			<PhoneInput
				value={phoneNumber}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.phone}
				touched={touched.phone}
			/>

			<div className='mt-6'>
				<Field
					name='preferredHours'
					component={FormikSelect}
					options={availableHours}
					isMulti
					isSearchable
					onBlur={handleBlur}
					ariaLabel='Najlepszy czas na rozmowę'
					placeholder={'Najlepszy czas na rozmowę'}
					error={errors.preferredHours}
					touched={touched.preferredHours}
				/>
			</div>
		</div>
	)
}

export default PhoneTab
