import clsx from 'clsx'
import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'
import ErrorMsg from '../ErrorMsg'

type Props = {
	name: string
	error?: string
	touched?: boolean | undefined
	onChange?: Function
	onBlur?: Function
	value: string
	setValue?: React.Dispatch<React.SetStateAction<string>>
	label: string
}

const Textarea = ({ value, setValue, label, name, error, touched, onChange, onBlur }: Props) => {
	return (
		<label>
			<div
				className={clsx(
					'group relative cursor-text rounded-lg border bg-dark-800/20 px-4 pb-3 pt-6 duration-300',
					touched && error ? 'error-shake border-error' : 'border-dark-700/20 focus-within:border-dark-700/60'
				)}>
				<span
					className={clsx(
						'absolute top-0 origin-top-left translate-y-1/2 text-neutral-400 duration-300 group-focus-within:translate-y-2 group-focus-within:scale-75 group-focus-within:text-neutral-300',
						value.trim() && 'translate-y-2 scale-75'
					)}>
					{label}
				</span>
				<textarea
					name={name}
					value={value}
					onChange={e => {
						setValue && setValue(e.target.value)
						onChange && onChange(e)
					}}
					onBlur={e => {
						onBlur && onBlur(e)
					}}
					className='min-h-[120px] w-full bg-transparent text-neutral-200 outline-none'
				/>
			</div>
			{touched && error && <ErrorMsg>{error}</ErrorMsg>}
		</label>
	)
}

export default Textarea
