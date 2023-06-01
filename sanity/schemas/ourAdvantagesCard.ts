const ourAdvantagesCard = {
	name: 'our-advantages-card',
	title: 'Our Advantages Cards',
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

export default ourAdvantagesCard
