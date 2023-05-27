const project = {
	name: 'project',
	title: 'Projects',
	type: 'document',
	initialValue: {
		isDefault: false
	},
	fields: [
		{
			name: 'isDefault',
			title: 'Is Default Text',
			description: 'Set the first text in the section (can be only one)',
			type: 'boolean'
		},
		{
			name: 'name',
			title: 'Name',
			type: 'string'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'array',
			of: [{ type: 'block' }]
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'name' }
		},
		{
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					name: 'projectImage',
					title: 'Project Image',
					type: 'object',
					fields: [
						{
							name: 'image',
							title: 'Image',
							type: 'image',
							fields: [
								{
									name: 'alt',
									title: 'Alt',
									type: 'string'
								}
							]
						},
						{
							name: 'speed',
							title: 'Speed',
							type: 'number'
						},
						{
							name: 'bottom',
							title: 'Bottom',
							type: 'string'
						},
						{
							name: 'left',
							title: 'Left',
							type: 'string',
							description: 'Add either left or right'
						},
						{
							name: 'right',
							title: 'Right',
							type: 'string',
							description: 'Add either left or right'
						},
						{
							name: 'maxWidth',
							title: 'Max Width',
							type: 'string'
						}
					]
				}
			]
		}
	]
}

export default project
