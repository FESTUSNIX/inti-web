import clsx from 'clsx'
import React from 'react'
import { BsExclamationCircleFill } from 'react-icons/bs'

type Props = {
	children: React.ReactNode
}

const ErrorMsg = ({ children }: Props) => {
	return (
		<div className='pt-1 text-sm text-[#cf375a]'>
			<span className={clsx('flex items-center gap-2')}>
				<BsExclamationCircleFill size={14} />
				{children}
			</span>
		</div>
	)
}

export default ErrorMsg
