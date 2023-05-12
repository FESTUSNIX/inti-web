import React from 'react'

type Props = {
	children: React.ReactNode
	className?: string
	theme?: BtnTheme
}

type BtnTheme = 'primary' | 'secondary' | 'CTA' | 'CTASecondary'

const Button = ({ children, className, theme = 'primary' }: Props) => {
	const styles = {
		primary: 'bg-neutral-100 text-dark-900 hover:bg-neutral-200',
		secondary: 'bg-transparent text-neutral-100 border border-neutral-100 hover:border-neutral-200',
		CTA: 'text-neutral-100 bg-gradient-brand gradient-wave',
		CTASecondary:
			'border border-transparent bg-clip-padding text-neutral-100 bg-background before:absolute before:inset-0 before:-m-px before:bg-gradient-brand before:-z-10 before:rounded-[inherit]'
	}

	return (
		<button
			className={`relative min-w-max rounded-lg px-7 py-5 text-sm font-bold uppercase duration-300 ${styles[theme]} ${className}`}>
			{children}
		</button>
	)
}

export default Button
