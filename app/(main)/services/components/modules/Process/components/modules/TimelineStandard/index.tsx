import Button from '@/app/(main)/components/elements/Button'
import InlineSVG from '@/app/(main)/components/elements/InlineSVG'
import PortableText from '@/app/(main)/components/elements/PortableText'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import { Process } from '@/types/Services'
import React from 'react'

type Props = {
	data: Process
}

const TimelineStandard = ({ data }: Props) => {
	return (
		<div className='wrapper mt-16 flex flex-col max-md:hidden'>
			{data.map((step, index) => (
				<article
					key={index}
					className='group relative flex w-[calc(50%+38px)] flex-row-reverse items-stretch gap-8 self-end even:flex-row even:self-start even:text-right'>
					<div className='relative pb-16'>
						<div className='offer-heading-text-stroke absolute bottom-0 right-0 -z-10 text-[11rem] font-black text-transparent opacity-10 group-even:left-0 group-even:right-auto'>
							0{index + 1}
						</div>

						<SubHeading className='mb-2'>{step.title}</SubHeading>

						<PortableText content={step.text} className='mb-6 text-neutral-400' />

						{step.ctaButton && <Button theme='CTASecondary'>umów się na konsultację</Button>}
					</div>

					<div className='flex flex-col items-center'>
						<div className='rounded-full border border-dark-700/20 bg-dark-800/20 p-5'>
							<InlineSVG src={step.icon} width={30} height='auto' className='text-neutral-400 opacity-50' />
						</div>
						<div className='relative h-full w-px bg-dark-700/20 group-last:hidden'></div>
					</div>
				</article>
			))}
		</div>
	)
}

export default TimelineStandard
