import PortableText from '@/app/(main)/components/elements/PortableText'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import React from 'react'
import { PortableTextBlock } from 'sanity'

type Props = {
	title: string
	content: PortableTextBlock[]
}

const Card = ({ title, content }: Props) => {
	return (
		<article className='relative grow overflow-hidden rounded-lg border border-dark-700/20 p-8'>
			<SubHeading className='mb-4'>{title}</SubHeading>

			<PortableText content={content} />
		</article>
	)
}

export default Card
