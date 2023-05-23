'use client'

import Button from '@/app/components/elements/Button'
import React, { useState } from 'react'
import TimeSelect from '../../elements/TimeSelect'
import TextInput from '../../elements/TextInput'
import SelectInput from '../../elements/SelectInput'
import Tabs from '../../elements/Tabs'
import PhoneInput from '../../elements/PhoneInput'
import PhoneTab from '../PhoneTab'
import EmailTab from '../EmailTab'

const intrestOptions = [
	{
		label: 'UI/UX Design',
		value: 'UI/UX Design'
	},
	{
		label: 'SEO Optimization',
		value: 'SEO Optimization'
	},
	{
		label: 'Code optimalization',
		value: 'Code optimalization'
	}
]

const ContactForm = () => {
	const [intrest, setIntrest] = useState('')
	const [name, setName] = useState('')

	const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email')

	const [phoneNumber, setPhoneNumber] = useState('')
	const [startTime, setStartTime] = useState({ hour: '', minutes: '00' })
	const [endTime, setEndTime] = useState({ hour: '', minutes: '00' })

	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')

	return (
		<div className='flex grow basis-1/2 flex-col rounded-lg md:bg-dark-800/20 md:p-4 xl:p-8'>
			<div className='mb-12 flex flex-col gap-6'>
				<SelectInput isMulti setValue={setIntrest} placeholder='Interesuje mnie...' options={intrestOptions} />

				<TextInput value={name} setValue={setName} label='Twoje imię' />
			</div>
			<div className='w-full rounded-lg text-neutral-100 sm:bg-dark-800/20 sm:p-4'>
				<Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

				{activeTab === 'email' && (
					<EmailTab email={email} setEmail={setEmail} message={message} setMessage={setMessage} />
				)}

				{activeTab === 'phone' && (
					<PhoneTab
						phoneNumber={phoneNumber}
						setPhoneNumber={setPhoneNumber}
						endTime={endTime}
						setEndTime={setEndTime}
						startTime={startTime}
						setStartTime={setStartTime}
					/>
				)}
			</div>

			<Button className='mt-16 w-max'>wyślij wiadomość</Button>
		</div>
	)
}

export default ContactForm
