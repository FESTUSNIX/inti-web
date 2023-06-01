const singletonAboutUs = {
	name: 'aboutUs',
	title: 'About Us',
	type: 'document',
	fields: [
		{
			name: 'aboutUsMarquees',
			title: 'Marquees',
			type: 'object',
			fields: [
				{ name: 'marqueeTop', title: 'Marquee Top', type: 'string' },
				{ name: 'marqueeBottom', title: 'Marquee Bottom', type: 'string' }
			]
		},
		{
			name: 'aboutUsImages',
			title: 'Images',
			type: 'array',
			of: [
				{
					name: 'aboutUsImage',
					title: 'Image',
					type: 'image',
					fields: [
						{
							name: 'alt',
							title: 'Alt',
							type: 'string'
						},
						{
							name: 'belongsTo',
							title: 'Belongs To',
							type: 'string',
							description: 'Slug osoby do której to zdjęcie należy'
						}
					]
				}
			]
		}
	]
}

export default singletonAboutUs
