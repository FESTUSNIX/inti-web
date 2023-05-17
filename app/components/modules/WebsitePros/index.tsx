import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Card from './components/modules/Card'

const WebsitePros = () => {
	return (
		<section className='section-margin wrapper'>
			<div className='mb-16'>
				<SectionHeading>Strona internetowa - medium na miarę XXI wieku</SectionHeading>

				<p className='text-neutral-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis? Mollitia maiores molestiae
					explicabo dolore! Fugit, harum? Beatae, nesciunt id unde omnis dolorem ratione veritatis ducimus neque
					voluptates, nobis, veniam ab. Aperiam.
				</p>
			</div>

			<div className='flex flex-col gap-8'>
				{Array(3)
					.fill(0)
					.map((_, index) => (
						<Card key={index} index={index} />
					))}
			</div>
		</section>
	)
}

export default WebsitePros
