'use client'

import React, { useState } from 'react'
import Row from '../Row'
import { BasicCard } from '@/types/BasicCard'

type Props = {
	cards: BasicCard[]
}

const Accordion = ({ cards }: Props) => {
	const [activeRow, setActiveRow] = useState(-1)

	return (
		<div className='flex flex-col gap-3'>
			{cards.map((row, index) => (
				<Row
					key={index}
					title={row.title}
					answer={row.content}
					setActiveRow={setActiveRow}
					index={index}
					activeRow={activeRow}
				/>
			))}
		</div>
	)
}

export default Accordion
