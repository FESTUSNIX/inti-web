import { PortableTextBlock } from 'sanity'

export type BasicCard = {
	_id: string
	_createdAt: Date
	title: string
	content: PortableTextBlock[]
}
