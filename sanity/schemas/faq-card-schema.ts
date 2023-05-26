const faqCard = {
	name: 'faq-card',
	title: 'FAQ Cards',
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

export default faqCard
