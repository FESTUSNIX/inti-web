import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Card from './components/modules/Card'
import Cards from './components/modules/Cards'

const WebsitePros = () => {
	return (
		<section className='wrapper mb-24 flex flex-col lg:flex-row-reverse lg:gap-32 xl:mb-48'>
			<div className='relative mb-16 md:self-center md:max-lg:w-2/3 md:max-lg:text-center'>
				<SectionHeading>Strona internetowa to świetna inwestycja, zobacz dlaczego:</SectionHeading>

				<p className='text-neutral-400'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, perspiciatis? Mollitia maiores molestiae
					explicabo dolore! Fugit, harum? Beatae, nesciunt id unde omnis dolorem ratione veritatis ducimus neque
					voluptates, nobis, veniam ab. Aperiam.
				</p>
			</div>
			
			{/* @ts-expect-error Server Component */}
			<Cards />
		</section>
	)
}

export default WebsitePros
