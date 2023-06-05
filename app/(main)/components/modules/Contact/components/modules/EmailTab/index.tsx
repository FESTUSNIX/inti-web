import React from 'react'
import TextInput from '../../elements/TextInput'
import Textarea from '../../elements/Textarea'
import { FormikErrors, FormikTouched } from 'formik'

type Props = {
	email: string
	message: string
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
		email: string
		message: string
	}>
	touched: FormikTouched<{
		email: string
		message: string
	}>
}

const EmailTab = ({ email, message, handleChange, handleBlur, errors, touched }: Props) => {
	return (
		<div className='flex flex-col gap-6'>
			<TextInput
				name='email'
				value={email}
				onChange={handleChange}
				onBlur={handleBlur}
				label='Twój adres email'
				type='email'
				error={errors.email}
				touched={touched.email}
			/>

			<Textarea
				name='message'
				value={message}
				onChange={handleChange}
				onBlur={handleBlur}
				label='Twoja wiadomość'
				error={errors.message}
				touched={touched.message}
			/>
		</div>
	)
}

export default EmailTab
