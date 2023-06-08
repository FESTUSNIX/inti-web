import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import React from 'react'
import TimelineStandard from './components/modules/TimelineStandard'
import TimelineMobile from './components/modules/TimelineMobile'

type Props = {}

const Process = ({}: Props) => {
	return (
		<section className='flex min-h-screen flex-col items-center justify-center py-24'>
			<SectionHeading label='our process'>See how we work</SectionHeading>

			<TimelineStandard />
			<TimelineMobile />
		</section>
	)
}

export default Process
