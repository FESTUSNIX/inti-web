import { PortableTextBlock } from 'sanity'

export type Testimonial = {
	_id: string
	_createdAt: Date
	name: string
	position: PortableTextBlock[]
	image: string
	content: PortableTextBlock[]
}
