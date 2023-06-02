import React from 'react'
import SectionHeading from '../../elements/SectionHeading'
import Cards from './components/modules/Cards'

const WebsitePros = () => {
	return (
		<section className='wrapper mb-24 flex flex-col lg:flex-row-reverse lg:gap-32 xl:mb-48'>
			<div className='relative mb-16 md:self-center md:max-lg:w-2/3 md:max-lg:text-center'>
				<SectionHeading label='zalety strony'>
					Strona internetowa to świetna inwestycja, zobacz dlaczego:
				</SectionHeading>

				<p className='text-neutral-400'>
					Dedykowana strona internetowa to inwestycja na dłuższą metę. Choć może wiązać się z pewnymi kosztami na
					początku, to daje Ci platformę, która będzie służyć Twojej firmie przez wiele lat. Pieniądz można odrobić, a
					nowo pozyskany klient zostanie z Tobą na długo.
				</p>
			</div>

			{/* @ts-expect-error Server Component */}
			<Cards />
		</section>
	)
}

export default WebsitePros
