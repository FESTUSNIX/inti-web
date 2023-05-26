import React from 'react'

type Props = {
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	label: string
}

const Textarea = ({ value, setValue, label }: Props) => {
	return (
		<label className='group relative cursor-text rounded-lg border border-dark-700/20 bg-dark-800/20 px-4 pb-3 pt-6 duration-300 focus-within:border-dark-700/60'>
			<span
				className={`absolute top-0 origin-top-left translate-y-1/2 text-neutral-400 duration-300 group-focus-within:translate-y-2 group-focus-within:scale-75 group-focus-within:text-neutral-300 ${
					value.trim() ? 'translate-y-2 scale-75' : ''
				}`}>
				{label}
			</span>
			<textarea
				value={value}
				onChange={e => setValue(e.target.value)}
				className='min-h-[120px] w-full bg-transparent text-neutral-200 outline-none'
			/>
		</label>
	)
}

export default Textarea
