import Button from '@/app/components/elements/Button'
import React from 'react'

const ContactForm = () => {
	return (
		<form className='flex flex-col rounded-lg bg-dark-800/20 p-4'>
			<div></div>
			<div></div>
			<Button className='w-max'>wyślij wiadomość</Button>
		</form>
	)
}

export default ContactForm
