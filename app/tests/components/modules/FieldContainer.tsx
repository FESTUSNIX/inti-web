'use client'

type Props = {
	children: React.ReactNode
	error?: string
	title?: string
	helpText?: string
	optional?: boolean
	containerClass?: string
}

const FieldContainer = ({ children, error, title, helpText, optional, containerClass }: Props) => {
	return (
		<div className={`${containerClass ? containerClass : ''}`}>
			{title && (
				<p className='mb-2 text-sm text-neutral-300'>
					{title}
					{optional && <span className='input-field__optional'> - Optional</span>}
				</p>
			)}

			{children}

			{helpText && !error && <p className='mt-1 text-xs text-neutral-400'>{helpText}</p>}
			{error && <p className='mt-1 text-xs text-[#ff6681]'>{error}</p>}
		</div>
	)
}

export default FieldContainer
