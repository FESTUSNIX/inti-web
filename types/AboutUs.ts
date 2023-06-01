import { ImageAsset } from './global'

export type AboutUs = {
	_id: string
	_createdAt: Date
	aboutUsImages: [
		{
			_key: string
			_type: string
			alt: string
			belongsTo: string
			asset: ImageAsset
		}
	]
	aboutUsMarquees: {
		marqueeTop: string
		marqueeBottom: string
	}
}
