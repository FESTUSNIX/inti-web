import { Project } from '@/types/types'
import LaptopImage from './laptop-image.png'
import TabletImage from './tablet-image.png'
import PhoneImage from './phone-image.png'

const images = [
	{
		image: LaptopImage,
		bottom: '-10vh',
		speed: 0.2,
		left: '-8vw',
		maxWidth: '80%'
	},
	{
		image: PhoneImage,
		bottom: '0',
		speed: 0.15,
		right: '-3vw',
		maxWidth: '40%'
	},
	{
		image: TabletImage,
		bottom: '0vh',
		speed: 0.6,
		left: '0',
		maxWidth: '60%'
	}
]

const project1: Project = {
	id: Math.random(),
	name: 'Novies',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam qui quos, dolorum harum, dolore voluptate, quis sit provident sapiente voluptatibus excepturi nostrum aliquam eaque unde.',
	images: images
}

const project2: Project = {
	id: Math.random(),
	name: 'Messenger clone',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam qui quos, dolorum harum, dolore voluptate, quis sit provident sapiente voluptatibus.',
	images: images
}

const project3: Project = {
	id: Math.random(),
	name: 'Apple landing page',
	description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	images: images
}

export const projects = [project1, project2, project3]
