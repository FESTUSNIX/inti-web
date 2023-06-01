const teamMembers = {
	name: 'teamMember',
	title: 'Team members',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' }
		},
		{
			name: 'quote',
			title: 'Quote',
			type: 'string'
		},
		{
			name: 'socialMedia',
			title: 'Social Media',
			type: 'array',
			of: [
				{
					name: 'socialMediaLink',
					title: 'Social Media Link',
					type: 'object',
					fields: [
						{
							name: 'mediaType',
							title: 'Type of media',
							type: 'string',
							options: {
								list: [
									{ title: 'Instagram', value: 'instagram' },
									{ title: 'Facebook', value: 'facebook' },
									{ title: 'Github', value: 'github' },
									{ title: 'Twitter', value: 'twitter' }
								]
							}
						},
						{
							name: 'profileLink',
							title: 'Profile link',
							type: 'url'
						},
						{
							name: 'label',
							title: 'Label',
							type: 'string',
							description: 'Opis dla czytników ekranów (Instagram Mateusza etc.)'
						}
					]
				}
			]
		}
	]
}

export default teamMembers
