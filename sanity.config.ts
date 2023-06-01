import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'
import { myStructure } from './deskStructure'

const config = defineConfig({
	projectId: '4woi3ok9',
	dataset: 'production',
	title: 'Inti Web',
	apiVersion: '2023-05-26',
	basePath: '/admin',
	plugins: [
		deskTool({
			structure: myStructure
		})
	],
	schema: { types: schemas }
})

export default config
