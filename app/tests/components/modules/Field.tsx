'use client'

import React from 'react'
import { useState } from 'react'

import FieldContainer from './FieldContainer'

type Props = {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	label?: string
	placeholder?: string
	title?: string
	helpText?: string
	error?: string
	resetError?: () => void
	onLostFocus?: () => void
	type?: 'password' | 'text'
	optional?: boolean
	onClick?: () => void
	containerClass?: string
	inputClass?: string
	after?: any
}

const Field = ({
	value,
	setValue,
	label,
	placeholder,
	title,
	helpText,
	error,
	resetError,
	onLostFocus,
	type,
	optional,
	onClick,
	containerClass,
	inputClass,
	after
}: Props) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<FieldContainer error={error} title={title} helpText={helpText} optional={optional} containerClass={containerClass}>
			<div
				className={`group relative mb-0 flex cursor-pointer items-center rounded-xl border border-dark-700/20 bg-dark-800/20 duration-300 focus-within:border-dark-700/60 ${
					error ? 'field-error' : ''
				} `}
				onClick={() => {
					if (onClick) onClick()
				}}>
				{label && (
					<div
						className={`absolute top-1/2 z-20 origin-top-left translate-x-3 text-sm text-neutral-400 duration-200 group-focus-within:-translate-y-full group-focus-within:text-neutral-300 ${
							value.trim().length > 0 ? '-translate-y-full text-neutral-300' : ' -translate-y-1/2'
						}`}>
						{label}
						{optional && <span className='align-middle text-xs italic'> - Optional</span>}
					</div>
				)}

				<input
					type={showPassword ? 'text' : type}
					className={`z-10 w-full border-none bg-transparent text-neutral-200 outline-none ${
						label ? 'px-3 pb-2 pt-5' : 'px-4 py-3'
					} ${inputClass}`}
					value={value}
					onChange={e => setValue(e.target.value)}
					placeholder={placeholder && !label ? placeholder : ''}
					onBlur={() => {
						if (resetError) resetError()
						if (onLostFocus) onLostFocus()
					}}
				/>

				{!error && after && (
					<div className='absolute right-3 top-1/2 z-10 origin-center -translate-y-1/2 text-4xl text-[#ff6681]'>
						{after}
					</div>
				)}

				{error && type !== 'password' && (
					<i className='fa-solid fa-circle-exclamation input-field__icon input-field__icon--error'></i>
				)}

				{type === 'password' && (
					<>
						{showPassword && (
							<i
								className='fa-regular fa-eye input-field__icon input-field__icon--password'
								onClick={() => {
									setShowPassword(false)
								}}></i>
						)}
						{!showPassword && (
							<i
								className='fa-regular fa-eye-slash input-field__icon input-field__icon--password'
								onClick={() => {
									setShowPassword(true)
								}}></i>
						)}
					</>
				)}
			</div>
		</FieldContainer>
	)
}

export default Field
