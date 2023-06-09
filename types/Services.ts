import { PortableTextBlock } from 'sanity'
import { ImageAsset } from './global'

export type OurCapabilities = {
	headingLeft: string
	headingRight: string
	list: string[]
}
export type ContactCTA = {
	label: string
	text: string
}
export type ServiceCards = {
	_type: string
	_key: string
	title: string
	text: PortableTextBlock[]
}[]
export type ServiceDescriptions = {
	_type: string
	_key: string
	label: string
	title: string
	text: PortableTextBlock[]
	image: {
		_type: string
		asset: ImageAsset
		alt: string
	}
}[]
export type Process = {
	_type: string
	_key: string
	title: string
	text: PortableTextBlock[]
	ctaButton: boolean
	icon: string
}[]

export type Services = {
	_id: string
	_createdAt: Date
	contactCTA: ContactCTA
	ourCapabilities: OurCapabilities
	serviceCards: ServiceCards
	serviceDescriptions: ServiceDescriptions
	process: Process
}
