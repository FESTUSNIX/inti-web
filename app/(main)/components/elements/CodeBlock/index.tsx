'use client'

import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

type Props = {
	code: string
	language: string
	showLineNumbers?: boolean
	highlight?: string
}

const CodeBlock = ({ code, language, showLineNumbers = true, highlight }: Props) => {
	return (
		<CopyBlock
			text={code}
			language={language}
			showLineNumbers={showLineNumbers}
			theme={dracula}
			highlight={highlight}
			wrapLongLines={true}
			codeBlock
		/>
	)
}

export default CodeBlock
