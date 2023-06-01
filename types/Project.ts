import { PortableTextBlock } from 'sanity'
import { ImageAsset } from './global'

type LeftOrRight = { left: string; right?: never } | { left?: never; right: string }

export type ProjectImage = {
	bottom: string
	maxWidth: string
	speed: number
	image: {
		alt: string
		asset: ImageAsset
		_type: string
	}
	_key: string
	_type: string
} & LeftOrRight

export type Project = {
	_id: string
	_createdAt: Date
	isDefault: boolean
	name: string
	description: PortableTextBlock[]
	slug: string
	images: ProjectImage[]
}
