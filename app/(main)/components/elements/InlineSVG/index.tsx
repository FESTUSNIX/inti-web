'use client'

import React from 'react'
import SVG from 'react-inlinesvg'
import { Props as InlineSVGProps } from 'react-inlinesvg'

type Props = InlineSVGProps

const InlineSVG = (props: Props) => {
	return <SVG {...props} />
}

export default InlineSVG
