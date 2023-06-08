type Props = {
	children: React.ReactNode
	className?: string
}

const SubHeading = ({ children, className }: Props) => {
	return <h3 className={`text-xl font-bold text-neutral-300 lg:text-2xl ${className}`}>{children}</h3>
}

export default SubHeading
