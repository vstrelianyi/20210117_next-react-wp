import { gql } from '@apollo/client';

const GET_OPTIONS = gql`
query Options {
	options {
		acf {
			favicon {
				sourceUrl
				title
			}
		}
	}
}
`;

export default GET_OPTIONS;