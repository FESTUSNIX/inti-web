'use client'

import React from 'react'
import { PortableTextBlock } from 'sanity'
import { PortableText as ReactPortableText } from '@portabletext/react'
import clsx from 'clsx'

type Props = {
	content: PortableTextBlock[]
	className?: string
}

const PortableText = ({ content, className }: Props) => {
	return (
		<div className={clsx('text-neutral-400', className)}>
			<ReactPortableText value={content} />
		</div>
	)
}

export default PortableText
