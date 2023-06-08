import Button from '@/app/(main)/components/elements/Button'
import HeadingLabel from '@/app/(main)/components/elements/HeadingLabel'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bgImg from '../../../assets/Festus_fluid_shapes_image_slightly_contrasting_with_06000f_dark_6b3e6316-6320-4f67-867a-9e434c195d83.png'

const ContactCTA = () => {
	return (
		<section
			className='relative flex items-center justify-center bg-cover bg-fixed bg-no-repeat py-16 md:py-24 lg:py-32'
			style={{ clipPath: 'inset(0)' }}>
			<Image
				src={bgImg}
				alt=''
				className='fixed inset-0 -z-10 h-full w-full object-cover opacity-[0.1]'
				draggable={false}
			/>

			<div className='flex flex-col items-center text-center'>
				<HeadingLabel className='mb-4'>lorem ipsum dolor sit</HeadingLabel>
				<h2 className='max-w-4xl px-4 font-heading text-3xl font-semibold text-neutral-200 priority:mb-12 md:px-16 md:text-4xl xl:text-5xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi impedit molestiae.
				</h2>
				<Link href={'/contact'}>
					<Button theme='CTASecondary'>umów się na konsultację</Button>
				</Link>
			</div>
		</section>
	)
}

export default ContactCTA
