import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
}

const HeadingLabel = ({ children, className }: Props) => {
	return (
		<h3
			className={`inline-block bg-gradient-brand bg-clip-text font-heading text-sm font-bold uppercase tracking-widest text-transparent ${className}`}>
			{children}
		</h3>
	)
}

export default HeadingLabel
