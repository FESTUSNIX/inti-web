import Link from 'next/link'
import { PortableTextReactComponents } from '@portabletext/react'
import CodeBlock from '../CodeBlock'
import CursorHoverProvider from '../CursorHoverProvider'

export const RichTextComponents: Partial<PortableTextReactComponents> = {
	types: {
		code: ({ _, value: { code, language } }: any) => <CodeBlock language={language} code={code} />
	},
	list: {
		bullet: ({ children }: any) => <ul className='ml-10 list-disc space-y-3 py-4'>{children}</ul>,
		number: ({ children }: any) => <ol className='ml-10 list-decimal space-y-3 py-4'>{children}</ol>
	},
	block: {
		normal: ({ children }: any) => (
			<p className='text-neutral-400' suppressHydrationWarning={true}>
				{children}
			</p>
		),
		h1: ({ children }: any) => <h1 className='py-10 text-5xl font-bold'>{children}</h1>,
		h2: ({ children }: any) => <h2 className='py-10 text-4xl font-bold'>{children}</h2>,
		h3: ({ children }: any) => <h3 className='py-10 text-3xl font-bold'>{children}</h3>,
		h4: ({ children }: any) => <h4 className='py-10 text-2xl font-bold'>{children}</h4>,
		blockquote: ({ children }: any) => (
			<blockquote className='my-5 border-l-4 border-l-purple py-5 pl-5'>{children}</blockquote>
		)
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined

			return (
				<CursorHoverProvider hoverType='link'>
					<Link href={value.href} rel={rel} className='text-link'>
						{children}
					</Link>
				</CursorHoverProvider>
			)
		}
	}
}
