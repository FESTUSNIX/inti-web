import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import React from 'react'
import TimelineStandard from './components/modules/TimelineStandard'
import TimelineMobile from './components/modules/TimelineMobile'
import Blob from '@/app/(main)/components/elements/Blob'
import { Process } from '@/types/Services'

type Props = {
	data: Process
}

const Process = ({ data }: Props) => {
	return (
		<section className='relative flex flex-col items-center justify-center py-24'>
			<SectionHeading label='our process'>See how we work</SectionHeading>

			<TimelineStandard data={data} />
			<TimelineMobile data={data} />

			<Blob variant='radial-purple' width='w-28' height='h-full' />
		</section>
	)
}

export default Process
