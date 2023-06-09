import React from 'react'
import { blobVariants } from './constants/blobVariants'
import clsx from 'clsx'

type Props = {
	variant: (typeof blobVariants)[number]['name']
	square?: boolean
	className?: string
	width?: string
	height?: string
	customBackground?: string
	blur?: string
}

const Blob = ({
	variant,
	square = true,
	width = 'w-48',
	height = 'h-auto',
	blur = '10rem',
	customBackground,
	className
}: Props) => {
	const blobVariant = blobVariants.filter(v => v.name === variant)[0]

	return (
		<div
			className={clsx(
				'pointer-events-none absolute -z-50 select-none rounded-full',
				square && 'aspect-square',
				width,
				height,
				className
			)}
			style={{ background: customBackground ?? blobVariant.background, filter: `blur(${blur})` }}></div>
	)
}

export default Blob
