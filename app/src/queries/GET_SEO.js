import { gql } from '@apollo/client';

const GET_SEO = gql`
query SEO{
	seo {
		social {
			facebook {
				url
			}
			instagram {
				url
			}
		}
	}
}
`;

export default GET_SEO;