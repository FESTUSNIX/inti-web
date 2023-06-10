import Link, { LinkProps } from 'next/link'
import React from 'react'
import CursorHoverProvider from '../CursorHoverProvider'

type Props = LinkProps & { children: React.ReactNode; className?: string }

const TextLink = (props: Props) => {
	return (
		<CursorHoverProvider hoverType='link'>
			<Link {...props} className={`text-link ${props.className}`}>
				{props.children}
			</Link>
		</CursorHoverProvider>
	)
}

export default TextLink
