import React from 'react'

type Props = {
	label: string
	className?: string
}

const HeadingLabel = ({ label, className }: Props) => {
	return (
		<h3
			className={`inline-block bg-gradient-brand bg-clip-text font-heading text-sm font-bold uppercase tracking-widest text-transparent ${className}`}>
			{label}
		</h3>
	)
}

export default HeadingLabel
