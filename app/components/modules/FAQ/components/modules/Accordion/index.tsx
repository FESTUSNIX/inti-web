'use client'

import React, { useState } from 'react'
import Row from '../Row'

const Accordion = () => {
	const [activeRow, setActiveRow] = useState(-1)

	return (
		<div className='flex flex-col gap-3'>
			{Array(6)
				.fill(0)
				.map((_, index) => (
					<Row
						key={index}
						title='Lorem ipsum dolor sit amet consectetur.'
						answer='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, explicabo consequuntur recusandae
						cupiditate odio sit aut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt velit doloremque
						aliquam ut dolorum vel maxime distinctio officia amet, vitae dolorem, quas quidem veniam eum? Lorem ipsum
						dolor sit, amet consectetur adipisicing elit. Voluptates quo cumque repudiandae, ea non reiciendis dolorum
						consectetur necessitatibus magni. Corporis.'
						setActiveRow={setActiveRow}
						index={index}
						activeRow={activeRow}
					/>
				))}
		</div>
	)
}

export default Accordion
