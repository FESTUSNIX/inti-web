import React from 'react'
import clsx from 'clsx'
import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import Image from 'next/image'
import Blob from '@/app/(main)/components/elements/Blob'
import { ServiceDescriptions as ServiceDescriptionsType } from '@/types/Services'
import PortableText from '@/app/(main)/components/elements/PortableText'
import { sanityUrlFor } from '@/sanity/sanityUtils'

type Props = {
	data: ServiceDescriptionsType
}

const ServiceDescriptions = ({ data }: Props) => {
	return (
		<section className='wrapper relative flex min-h-screen flex-col items-center justify-center gap-24 py-24 md:gap-32 lg:gap-48 lg:py-36'>
			{data.map((service, index) => (
				<div
					key={service._key}
					className={clsx(
						'flex flex-col gap-8 lg:flex-row lg:gap-16 xl:gap-32',
						index % 2 === 0 && 'lg:flex-row-reverse'
					)}>
					<div className='flex basis-1/2 flex-col'>
						<SectionHeading label={service.label}>{service.title}</SectionHeading>

						<PortableText content={service.text} className='text-neutral-400' />
					</div>

					<div className='basis-1/2 overflow-hidden rounded-lg'>
						<Image src={sanityUrlFor(service.image).url()} alt={service.image.alt} width={1000} height={600} />
					</div>
				</div>
			))}

			<Blob variant='solid-purple' width='w-56' height='h-64' className='left-1/2 top-1/2 -translate-y-1/2' />
			<Blob variant='linear-pink' width='w-56' height='h-64' className='left-64 top-32' />
			<Blob variant='solid-blue' width='w-64' height='h-32' className='bottom-64 right-0' />
		</section>
	)
}

export default ServiceDescriptions
