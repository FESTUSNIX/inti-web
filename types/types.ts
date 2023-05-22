import { StaticImageData } from 'next/image'

interface ProjectImageCommon {
	bottom: string
	maxWidth: string
	speed: number
	image: StaticImageData
	alt?: string
}

interface ProjectImageWithLeft extends ProjectImageCommon {
	left: string
	right?: never
}
interface ProjectImageWithRight extends ProjectImageCommon {
	left?: never
	right: string
}

export type ProjectImage = ProjectImageWithLeft | ProjectImageWithRight

export type Project = {
	id: number
	name: string
	description: string
	images: ProjectImage[]
}

export type SelectOptionType = { value: any; label: string }
