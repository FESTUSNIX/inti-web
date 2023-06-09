const singletonServices = {
	name: 'services',
	title: 'Services',
	type: 'document',
	fields: [
		{
			name: 'contactCTA',
			title: 'Contact CTA',
			type: 'object',
			fields: [
				{ name: 'label', title: 'Label', type: 'string' },
				{ name: 'text', title: 'Text', type: 'string' }
			]
		},
		{
			name: 'ourCapabilities',
			title: 'Our Capabilities',
			type: 'object',
			description: 'Odd are on left, even are on right',
			fields: [
				{
					name: 'headingLeft',
					title: 'Heading Left',
					type: 'string'
				},
				{
					name: 'headingRight',
					title: 'Heading Right',
					type: 'string'
				},
				{
					name: 'list',
					title: 'List',
					type: 'array',
					of: [
						{
							type: 'string'
						}
					]
				}
			]
		},
		{
			name: 'serviceCards',
			title: 'Service Card',
			type: 'array',
			of: [
				{
					name: 'serviceCard',
					title: 'Card',
					type: 'object',
					fields: [
						{ name: 'title', title: 'Title', type: 'string' },
						{ name: 'text', title: 'Text', type: 'array', of: [{ type: 'block' }] }
					]
				}
			]
		},
		{
			name: 'serviceDescriptions',
			title: 'Service Description',
			type: 'array',
			of: [
				{
					name: 'serviceCard',
					title: 'Card',
					type: 'object',
					fields: [
						{ name: 'label', title: 'Label', type: 'string' },
						{ name: 'title', title: 'Title', type: 'string' },
						{ name: 'text', title: 'Text', type: 'array', of: [{ type: 'block' }] },
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
						}
					]
				}
			]
		},
		{
			name: 'process',
			title: 'Process',
			type: 'array',
			of: [
				{
					name: 'processStep',
					title: 'Step',
					type: 'object',
					fields: [
						{ name: 'title', title: 'Title', type: 'string' },
						{ name: 'text', title: 'Text', type: 'array', of: [{ type: 'block' }] },
						{
							name: 'ctaButton',
							title: 'CTA Button',
							type: 'boolean'
						},
						{
							name: 'icon',
							title: 'Icon',
							type: 'string',
							description: 'Inline SVG'
						}
					]
				}
			]
		}
	]
}

export default singletonServices
