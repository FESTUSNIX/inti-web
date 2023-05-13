import React from 'react'

type Props = {
	index: number
}

const Card = ({ index }: Props) => {
	return (
		<article className='relative grow overflow-hidden rounded-lg border border-dark-700/20 bg-dark-800/20 p-8'>
			<h3 className='mb-4 text-xl font-bold text-neutral-300'>Lorem ipsum dolor</h3>
			<p className='text-neutral-400'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat aut, accusantium quaerat nesciunt veniam
				culpa tenetur, tempore voluptas, in eos aperiam fugit fugiat ab?
			</p>

			<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<svg
					width='266'
					height='266'
					viewBox='0 0 266 266'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'>
					<rect opacity='0.02' width='266' height='266' fill='url(#pattern0)' />
					<defs>
						<pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
							<use xlinkHref='#image0_213_72' transform='scale(0.0111111)' />
						</pattern>
						<image
							id='image0_213_72'
							width='90'
							height='90'
							xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO2ZS27UQBRFWwz4RWIj7IN1wEpgBpkAAiHxkQhryCBiIywggw4DEDAIDHOQhQdNS6jL+JZ97bpn3H2r3vHLc1VnswkhhBBCCCGEsEyAJ3PvoQn4Q2RPJDqyJxQd2ROKjuwJRUd2CcB14AXwjXE8KlqwVYCTkYIj+xDAA/Tk6LcLcBf4WUH0w78WahngCPgUyZUBPkTyvHP5shspB76fcSGYy/cLMjKTR87lk8KcvPhGzOXuARwV5uR0UWsu72V15Aj3j7l8OWYu7+W1ddUGbnS3MOCC/6doLrf+Q9Ap4yiey02CRvKgudwcaCQPnsstzuQzgeT3c9eydslfgafdX8Xc9SxZ8ln3uQpj6vjAqWbbn3yW/fCYSXK/didw/T/2U/bi+wjcrLT+kPP5540bwB3geT8zx1Clk3f2OYiNE8A94JzxVOvkRYvuu/gNcLUEyYsULeziyST3+x7EFHuaoosnldzvfxBT7atmF2+BxzVffIsQDdwGXgE/Bu7tvHsgFfYjuWg4in49cE9XwLtutFTaj+SiYSUauAb8mruLd+m7tZTt2kR3Xfy2VhfXEGQlunB0VO/iVkTfAl4C3/fW/gI8m6KLmxDtBhEd0auCdPSyLhqsdUZjdtFQ5diB6D8aKkGqHDswE6TKsQMzQaocOzATpMqxAzNBqhw7MBOkyrEDM0GqHBlrvWggypGx1osGohwZa71oIMqR4VYYZjky3ArDLEeGW2GY5chwKwyzHBluhWGWI8OtMMxyZLgVhlmODLfCMMuR4VYYZjky3ArDLEeGW2GY5chwKwyzHBluhWGWI8OtMMxyZLgVhllOCCGEEEIIIYQQwqYBfgNSRyb2BAT2GwAAAABJRU5ErkJggg=='
						/>
					</defs>
				</svg>
			</div>
		</article>
	)
}

export default Card
