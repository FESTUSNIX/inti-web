import Button from '@/app/(main)/components/elements/Button'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

const TimelineStandard = ({}: Props) => {
	return (
		<div className='wrapper mt-16 flex flex-col max-md:hidden'>
			{Array(4)
				.fill(0)
				.map((step, index) => (
					<article
						key={index}
						className='group relative flex w-[calc(50%+38px)] flex-row-reverse items-stretch gap-8 self-end even:flex-row even:self-start even:text-right'>
						<div className='relative pb-16'>
							<div className='offer-heading-text-stroke absolute bottom-0 right-0 -z-10 text-[11rem] font-black text-transparent opacity-10 group-even:left-0 group-even:right-auto'>
								0{index + 1}
							</div>

							<SubHeading className='mb-2'>Lorem ipsum dolor</SubHeading>
							<p className='mb-6 text-neutral-400'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
								aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos.
							</p>

							<Button theme='CTASecondary'>umów się na konsultację</Button>
						</div>

						<div className='flex flex-col items-center'>
							<div className='rounded-full border border-dark-700/20 bg-dark-800/20 p-5'>
								<FaSearch size={34} className='text-neutral-50 opacity-25' />
							</div>
							<div className='relative h-full w-px bg-dark-700/20 group-last:hidden'></div>
						</div>
					</article>
				))}
		</div>
	)
}

export default TimelineStandard
