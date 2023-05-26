const websiteProsCard = {
	name: 'website-pros-card',
	title: 'Website Pros Cards',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{ type: 'block' }]
		}
	]
}

export default websiteProsCard
