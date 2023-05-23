import React from 'react'
import TextInput from '../../elements/TextInput'
import Textarea from '../../elements/Textarea'

type Props = {
	email: string
	setEmail: React.Dispatch<React.SetStateAction<string>>
	message: string
	setMessage: React.Dispatch<React.SetStateAction<string>>
}

const EmailTab = ({ email, setEmail, message, setMessage }: Props) => {
	return (
		<div className='flex flex-col gap-6'>
			<TextInput value={email} setValue={setEmail} label='Twój adres email' type='email' />

			<Textarea value={message} setValue={setMessage} label='Twoja wiadomość' />
		</div>
	)
}

export default EmailTab
