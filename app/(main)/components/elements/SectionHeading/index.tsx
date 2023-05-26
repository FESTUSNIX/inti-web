import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

const SectionHeading = ({ children, className }: Props) => {
	return (
		<h2 className={`mb-4 font-heading text-2xl font-bold text-neutral-100 md:text-3xl lg:text-4xl ${className}`}>
			{children}
		</h2>
	)
}

export default SectionHeading
