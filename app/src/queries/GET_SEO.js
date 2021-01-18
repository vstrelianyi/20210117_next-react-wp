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
      linkedIn {
        url
      }
      twitter {
        username
      }
      youTube {
        url
      }
		}
	}
}
`;

export default GET_SEO;