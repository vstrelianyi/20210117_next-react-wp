const FragmentSEO = `
	fragment FragmentSEO on PostTypeSEO {
		breadcrumbs {
			text
			url
		}
		title
		metaDesc
		metaRobotsNoindex
		metaRobotsNofollow
		opengraphAuthor
		opengraphDescription
		opengraphImage {
			sourceUrl
		}
		opengraphSiteName
		opengraphPublishedTime
		opengraphModifiedTime
		twitterTitle
		twitterDescription
		twitterImage {
			sourceUrl
		}
		schemaDetails
	}
`;

export default FragmentSEO;