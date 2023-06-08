import React from 'react'
import clsx from 'clsx'
import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import Image from 'next/image'
import img1 from '../../../assets/Festus_fluid_shapes_image_slightly_contrasting_with_06000f_da4a4a33-f012-4637-bf01-0918647e4f24.png'

type Props = {}

const description =
	'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, accusamus adipisci maxime atque a ducimus, voluptates deleniti, quaerat cumque quidem incidunt. Beatae sunt laboriosam quidem aliquam harum corporis nesciunt officia excepturi eius, accusantium temporibus optio voluptatem quibusdam? Reprehenderit, accusamus commodi.'

const services = [
	{
		id: 'websites',
		title: 'Lorem ipsum dolor',
		label: 'Strony internetowe',
		description,
		image: img1
	},
	{
		id: 'redesign',
		title: 'Lorem ipsum dolor',
		label: 'Odświeżenie strony',
		description,
		image: img1
	},
	{
		id: 'cms-system',
		title: 'Lorem ipsum dolor',
		label: 'System CMS',
		description,
		image: img1
	}
]

const ServiceDescriptions = ({}: Props) => {
	return (
		<section className='wrapper flex min-h-screen flex-col items-center justify-center gap-24 py-24 md:gap-32 lg:gap-48 lg:py-36'>
			{services.map((service, index) => (
				<div
					key={service.id}
					className={clsx(
						'flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-32',
						index % 2 === 0 && 'lg:flex-row-reverse'
					)}>
					<div className='flex basis-1/2 flex-col'>
						<SectionHeading label={service.label}>{service.title}</SectionHeading>
						<p className='text-neutral-400'>{service.description}</p>
					</div>

					<div className='basis-1/2 overflow-hidden rounded-lg'>
						<Image src={service.image} alt='' />
					</div>
				</div>
			))}
		</section>
	)
}

export default ServiceDescriptions
