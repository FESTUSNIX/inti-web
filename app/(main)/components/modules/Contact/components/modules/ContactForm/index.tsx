'use client'

import Button from '@/app/(main)/components/elements/Button'
import React, { useState } from 'react'
import TextInput from '../../elements/TextInput'
import Tabs from '../../elements/Tabs'
import PhoneTab from '../PhoneTab'
import EmailTab from '../EmailTab'
import { Formik } from 'formik'
import { object, string, StringSchema, AnyObject, array, ISchema } from 'yup'
import Blob from '@/app/(main)/components/elements/Blob'

const contactFormSchema = (activeTab: 'email' | 'phone') => {
	return object().shape({
		name: string().required('Podaj imię'),
		email: (activeTab === 'email' &&
			string().email('Adres email jest nie poprawny').required('Podaj adres email')) as StringSchema<
			string,
			AnyObject,
			undefined,
			''
		>,
		message: (activeTab === 'email' &&
			string().min(6, 'Wiadomość jest zbyt krótka').required('Podaj wiadomość')) as StringSchema<
			string,
			AnyObject,
			undefined,
			''
		>,
		phone: (activeTab === 'phone' && string().required('Podaj numer telefonu')) as StringSchema<
			string,
			AnyObject,
			undefined,
			''
		>,
		preferredHours: (activeTab === 'phone' && array().min(1, 'Wybierz preferowane godziny kontaktu')) as ISchema<
			any,
			any,
			any,
			any
		>
	})
}
const ContactForm = () => {
	const [activeTab, setActiveTab] = useState<'email' | 'phone'>('phone')

	return (
		<Formik
			initialValues={{ name: '', email: '', message: '', phone: '', preferredHours: [] }}
			validationSchema={() => contactFormSchema(activeTab)}
			validateOnChange={false}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values)

				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}>
			{({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form
					className='relative z-20 flex grow basis-1/2 flex-col rounded-lg md:bg-dark-800/20 md:p-4 xl:p-8'
					onSubmit={e => {
						console.log(values)
						console.log('submit')
						handleSubmit(e)
					}}>
					<div className='mb-12 flex flex-col'>
						<TextInput
							name='name'
							value={values.name}
							onChange={handleChange}
							onBlur={handleBlur}
							label='Twoje imię'
							error={errors.name}
							touched={touched.name}
						/>
					</div>
					<div className='w-full rounded-lg text-neutral-100'>
						<Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

						<div className='rounded-lg rounded-tl-none border-dark-700/20 pt-6 sm:border sm:bg-dark-800/20 sm:p-4 sm:pt-6'>
							{activeTab === 'email' && (
								<EmailTab
									email={values.email}
									message={values.message}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
									touched={touched}
								/>
							)}

							{activeTab === 'phone' && (
								<PhoneTab
									phoneNumber={values.phone}
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
									touched={touched}
								/>
							)}
						</div>
						<p className='text-sm text-neutral-500'>Wybierz preferowaną metodę kontaktu</p>
					</div>

					<Button className='mt-16 w-max' isDisabled={isSubmitting} type='submit'>
						wyślij wiadomość
					</Button>

					<Blob variant='solid-blue' width='w-1/2' className='left-0 top-0 opacity-50' />
					<Blob variant='linear-purple-to-dark-purple' width='w-full' height='h-full opacity-50' />
					<Blob variant='radial-purple' width='w-1/2' className='bottom-0 right-0 opacity-50' />
				</form>
			)}
		</Formik>
	)
}

export default ContactForm
