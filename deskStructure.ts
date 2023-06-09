export const myStructure = (S: any) =>
	S.list()
		.title('Base')
		.items([
			S.listItem().title('About us').child(S.document().schemaType('aboutUs').documentId('aboutUs')),
			S.listItem().title('Services').child(S.document().schemaType('services').documentId('services')),
			...S.documentTypeListItems().filter((listItem: any) => !['aboutUs', 'services'].includes(listItem.getId()))
		])
