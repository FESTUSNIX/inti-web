'use client'

import Button from '@/app/components/elements/Button'
import React, { useState } from 'react'


const ContactForm = () => {
	const [value, onChange] = useState('10:00')

	return (
		<form className='flex flex-col rounded-lg bg-dark-800/20 p-4'>
			<div></div>
			<div className='w-full text-neutral-100'>
	
				
			</div>
			<Button className='w-max'>wyślij wiadomość</Button>
		</form>
	)
}

export default ContactForm
