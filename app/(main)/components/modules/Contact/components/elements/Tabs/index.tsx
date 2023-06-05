import clsx from 'clsx'
import React from 'react'

type Props = {
	activeTab: 'email' | 'phone'
	setActiveTab: React.Dispatch<React.SetStateAction<'email' | 'phone'>>
}

const Tabs = ({ activeTab, setActiveTab }: Props) => {
	const tabs: { label: string; value: 'email' | 'phone' }[] = [
		{ label: 'Telefon', value: 'phone' },
		{ label: 'Email', value: 'email' }
	]

	return (
		<div className='z-10 flex items-center max-sm:border-b max-sm:border-dark-700/20'>
			{tabs.map(tab => (
				<button
					type='button'
					onClick={() => setActiveTab(tab.value)}
					key={tab.value}
					className={clsx(
						'translate-y-px border border-dark-700/20 border-b-transparent bg-dark-800/20 px-6 py-2.5 text-neutral-200 duration-300 first:rounded-tl-lg last:rounded-tr-lg last:border-l-transparent',
						activeTab === tab.value
							? 'border-b-[#100e14] opacity-100'
							: 'opacity-50 hover:bg-dark-800/40 active:opacity-60'
					)}>
					{tab.label}
				</button>
			))}
		</div>
	)
}

export default Tabs
