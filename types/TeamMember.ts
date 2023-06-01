export type TeamMember = {
	_id: string
	_createdAt: Date
	name: string
	slug: string
	quote: string
	socialMedia: [
		{
			mediaType: 'instagram' | 'facebook' | 'github' | 'twitter'
			label: string
			profileLink: string
		}
	]
}
