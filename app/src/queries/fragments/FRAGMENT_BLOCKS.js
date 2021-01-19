const FragmentBlocks = `
	fragment FragmentBlocks on Block{
		name
		saveContent
		order
		innerBlocks {
			name
			order
			saveContent
			innerBlocks {
				name
				order
				saveContent
			}
		}
	}
`;

export default FragmentBlocks;