import clsx from 'clsx'
import { FormikTouched } from 'formik'
import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import ErrorMsg from '../ErrorMsg'

type Props = {
	name: string
	error?: string
	touched?: boolean | undefined
	value: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
	onChange?: Function
	onBlur?: Function
	label: string
	type?: 'email' | 'password' | 'text'
}

const TextInput = ({ error, value, setValue, onChange, onBlur, label, type = 'text', name, touched }: Props) => {
	return (
		<label>
			<div
				className={clsx(
					'group relative cursor-text rounded-lg border bg-dark-800/20 px-4 pb-3 pt-6 duration-300',
					touched && error ? 'error-shake border-error' : 'border-dark-700/20 focus-within:border-dark-700/60'
				)}>
				<span
					className={clsx(
						'absolute top-1/2 origin-top-left -translate-y-1/2  text-neutral-400 duration-300 group-focus-within:-translate-y-full group-focus-within:scale-75 group-focus-within:text-neutral-300',
						value.trim() && '-translate-y-full scale-75'
					)}>
					{label}
				</span>
				<input
					name={name}
					type={type}
					value={value}
					onChange={e => {
						setValue && setValue(e.target.value)
						onChange && onChange(e)
					}}
					onBlur={e => {
						onBlur && onBlur(e)
					}}
					className='w-full bg-transparent text-neutral-200 outline-none'
				/>
			</div>
			{touched && error ? <ErrorMsg>{error}</ErrorMsg> : null}
		</label>
	)
}

export default TextInput
