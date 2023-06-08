import PortableText from '@/app/(main)/components/elements/PortableText'
import SubHeading from '@/app/(main)/components/elements/SubHeading'
import clsx from 'clsx'
import React from 'react'
import { PortableTextBlock } from 'sanity'

type Props = {
	index: number
	title: string
	content: PortableTextBlock[]
}

const Card = ({ index, title, content }: Props) => {
	return (
		<article
			className={clsx(
				'relative grow rounded-lg border border-dark-700/20 bg-dark-800/20 p-8 md:max-w-md xl:max-w-lg',
				index === 1 ? 'md:ml-16 xl:ml-24' : 'md:mr-16 xl:mr-24'
			)}>
			<span className='absolute top-0 -translate-y-1/2'>
				<svg height='30' width='45'>
					<text
						x='50%'
						y='19'
						dominantBaseline='middle'
						textAnchor='middle'
						fill='none'
						className='stroke-neutral-400 text-4xl font-black tracking-wide lg:text-[40px]'>
						0{index + 1}
					</text>
				</svg>
			</span>

			<SubHeading className='mb-2'>{title}</SubHeading>
			<PortableText content={content} />
		</article>
	)
}

export default Card
