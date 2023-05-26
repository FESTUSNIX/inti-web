import PortableText from '@/app/(main)/components/elements/PortableText'
import React from 'react'
import { PortableTextBlock } from 'sanity'

type Props = {
	title: string
	content: PortableTextBlock[]
}

const Card = ({ title, content }: Props) => {
	return (
		<article className='relative grow overflow-hidden rounded-lg border border-dark-700/20 p-8'>
			<h3 className='mb-4 text-xl font-bold text-neutral-300 lg:text-2xl'>{title}</h3>

			<PortableText content={content} />
		</article>
	)
}

export default Card
