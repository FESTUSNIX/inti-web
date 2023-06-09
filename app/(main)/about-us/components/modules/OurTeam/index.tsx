'use client'

import React, { useState } from 'react'
import SectionHeading from '@/app/(main)/components/elements/SectionHeading'
import Link from 'next/link'
import { FaInstagram, FaFacebook, FaGithub, FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import clsx from 'clsx'
import Image from 'next/image'
import { sanityUrlFor } from '@/sanity/sanityUtils'
import { AboutUs } from '@/types/AboutUs'
import { TeamMember } from '@/types/TeamMember'
import Blob from '@/app/(main)/components/elements/Blob'

type Props = {
	teamMembers: TeamMember[]
	aboutUsData: AboutUs
}

const OurTeam = ({ teamMembers, aboutUsData }: Props) => {
	const [hoveredPerson, setHoveredPerson] = useState('')

	return (
		<section className='wrapper flex flex-col lg:flex-row'>
			<div className='relative basis-2/5'>
				<SectionHeading label='nasz team'>Kim jesteśmy</SectionHeading>

				<div className='my-16 flex flex-col gap-8'>
					{teamMembers.map(person => (
						<div
							className='flex items-center justify-between rounded-lg border border-dark-700/20 px-6 py-4'
							key={person.name}
							onMouseOver={() => {
								setHoveredPerson(person.slug)
							}}
							onMouseLeave={() => {
								setHoveredPerson('')
							}}>
							<div>
								<h4 className='mb-2 text-xl font-semibold text-neutral-200 md:text-2xl'>{person.name}</h4>

								<span className='relative text-neutral-400'>
									<span className='absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 opacity-25'>
										<FaQuoteLeft size={24} />
									</span>
									{person.quote}
									<span className='absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-25'>
										<FaQuoteRight size={24} />
									</span>
								</span>
							</div>

							<div className='ml-8 flex flex-col gap-2'>
								{person.socialMedia.map(link => (
									<Link
										key={link.profileLink}
										aria-label={link.label}
										href={link.profileLink}
										target='_blank'
										className='rounded-full border border-transparent p-2 text-neutral-400 duration-300 hover:border-dark-700/20 hover:bg-dark-800/20'>
										{link.mediaType === 'instagram' && <FaInstagram size={20} />}
										{link.mediaType === 'facebook' && <FaFacebook size={20} />}
										{link.mediaType === 'github' && <FaGithub size={20} />}
										{link.mediaType === 'twitter' && <FaTwitter size={20} />}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>

				<Blob variant='linear-pink' width='w-full' className='top-0 opacity-50' />
			</div>

			<div className='grid grow basis-3/5 grid-cols-2 gap-2 lg:ml-12 lg:gap-4'>
				{aboutUsData.aboutUsImages.map(img => (
					<div className={'relative aspect-[7/8] w-full overflow-hidden rounded-lg'} key={img._key} id={img.belongsTo}>
						<Image
							src={sanityUrlFor(img).url()}
							alt='image of us'
							draggable={false}
							width={500}
							height={600}
							className={clsx(
								'h-full w-full duration-500',
								hoveredPerson === img.belongsTo && 'scale-110 duration-[3000ms]'
							)}
						/>
					</div>
				))}
			</div>
		</section>
	)
}

export default OurTeam
