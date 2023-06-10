'use client'

import React from 'react'
import { PortableTextBlock } from 'sanity'
import { PortableText as ReactPortableText } from '@portabletext/react'
import { RichTextComponents } from '../RichTextComponents'

type Props = {
	content: PortableTextBlock[]
	className?: string
}

const PortableText = ({ content, className }: Props) => {
	return (
		<div className={className}>
			<ReactPortableText value={content} components={RichTextComponents} />
		</div>
	)
}

export default PortableText
