import PortableText from '@/app/(main)/components/elements/PortableText'
import Image from 'next/image'
import React from 'react'
import { PortableTextBlock } from 'sanity'

type Props = {
	isActive: boolean
	name: string
	position: PortableTextBlock[]
	image: string
	content: PortableTextBlock[]
}

const Card = ({ isActive, name, position, image, content }: Props) => {
	return (
		<div
			className={`flex h-full select-none flex-col gap-4 rounded-lg border border-dark-700/60 bg-dark-800/20 p-4 pb-12 duration-300 ${
				isActive ? 'scale-100' : 'scale-90 opacity-25 blur-[2px]'
			}`}>
			<div className='flex items-center gap-4'>
				<Image
					src={image}
					alt={`Photo of ${name}`}
					className='aspect-square w-12 rounded-full '
					width={50}
					height={50}
				/>
				<div className='grow'>
					<p className='font-semibold text-neutral-200'>{name}</p>
					<PortableText content={position} className='text-sm text-neutral-300' />
				</div>
			</div>
			<blockquote className='text-neutral-200'>
				<PortableText content={content} />
			</blockquote>
		</div>
	)
}

export default Card
