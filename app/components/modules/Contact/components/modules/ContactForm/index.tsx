'use client'

import Button from '@/app/components/elements/Button'
import React, { useState } from 'react'
import TimeSelect from '../../elements/TimeSelect'
import TextInput from '../../elements/TextInput'
import SelectInput from '../../elements/SelectInput'
import Tabs from '../../elements/Tabs'
import PhoneInput from '../../elements/PhoneInput'

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

	const [activeTab, setActiveTab] = useState(0)

	const [phoneNumber, setPhoneNumber] = useState('')
	const [startTime, setStartTime] = useState({ hour: '', minutes: '00' })
	const [endTime, setEndTime] = useState({ hour: '', minutes: '00' })

	return (
		<div className='flex shrink-0 grow basis-1/2 flex-col rounded-lg md:bg-dark-800/20 md:p-4'>
			<div className='mb-12 flex flex-col gap-6'>
				<SelectInput isMulti setValue={setIntrest} placeholder='Interesuje mnie...' options={intrestOptions} />

				<TextInput value={name} setValue={setName} label='Twoje imię' />
			</div>
			<div className='w-full text-neutral-100'>
				<Tabs setActiveTab={setActiveTab} activeTab={activeTab} />

				<PhoneInput value={phoneNumber} setValue={setPhoneNumber} />

				<div className='mt-6'>
					<p className='mb-2 text-neutral-200'>Najlepszy czas na rozmowe</p>
					<div className='flex flex-col gap-2'>
						<TimeSelect value={startTime} setValue={setStartTime} label='Od' />
						<TimeSelect value={endTime} setValue={setEndTime} label='Do' />
					</div>
				</div>
			</div>

			<Button className='mt-6 w-max'>wyślij wiadomość</Button>
		</div>
	)
}

export default ContactForm
