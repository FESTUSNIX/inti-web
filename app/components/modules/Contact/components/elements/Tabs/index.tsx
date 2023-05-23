import clsx from 'clsx'
import React from 'react'

type Props = {
	activeTab: number
	setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

const Tabs = ({ activeTab, setActiveTab }: Props) => {
	const tabs = ['Telefon', 'Email']

	return (
		<div className='flex items-center border-b border-dark-700/20 mb-6'>
			{tabs.map((tab, index) => (
				<button
					onClick={() => setActiveTab(index)}
					key={tab}
					className={clsx(
						'border border-dark-700/20 border-b-transparent bg-dark-800/20 px-6 py-2.5 text-neutral-200 duration-300 first:rounded-tl-lg last:rounded-tr-lg last:border-l-transparent',
						activeTab === index ? 'opacity-100' : 'opacity-50 hover:bg-dark-800/40 active:opacity-60'
					)}>
					{tab}
				</button>
			))}
		</div>
	)
}

export default Tabs
