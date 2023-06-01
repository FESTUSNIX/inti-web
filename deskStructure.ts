export const myStructure = (S: any) =>
	S.list()
		.title('Base')
		.items([
			S.listItem().title('About us').child(S.document().schemaType('aboutUs').documentId('aboutUs')),
			...S.documentTypeListItems().filter((listItem: any) => !['aboutUs'].includes(listItem.getId()))
		])
