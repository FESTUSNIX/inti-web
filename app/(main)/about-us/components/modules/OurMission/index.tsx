import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import React from 'react'

const OurMission = () => {
	return (
		<section className='wrapper mb-24 flex flex-col items-center md:flex-row'>
			<div className='basis-1/2'>
				<h3 className='bg-gradient-brand bg-clip-text font-heading text-sm font-bold uppercase tracking-widest text-transparent'>
					nasza misja
				</h3>
				<SectionHeading>*Nasza misja</SectionHeading>
				<p className='text-neutral-400'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quasi obcaecati sapiente, accusamus ea
					quidem ipsam ratione dignissimos nemo pariatur, culpa mollitia autem sunt iste repudiandae incidunt in illum
					dolorem voluptate ipsum veritatis facere magni deserunt odit. Id optio natus expedita aperiam deserunt at ipsa
					corrupti nobis commodi iste? Qui.
				</p>
			</div>

			<div></div>
		</section>
	)
}

export default OurMission
