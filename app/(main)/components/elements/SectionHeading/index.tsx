import React from 'react'
import HeadingLabel from '../HeadingLabel'

type Props = {
	children: React.ReactNode
	className?: string
	label?: string
	labelClassName?: string
}

const SectionHeading = ({ children, className, label, labelClassName }: Props) => {
	return (
		<>
			{label && <HeadingLabel label={label} className={labelClassName} />}
			<h2 className={`mb-4 font-heading text-2xl font-bold text-neutral-100 md:text-3xl lg:text-4xl ${className}`}>
				{children}
			</h2>
		</>
	)
}

export default SectionHeading
