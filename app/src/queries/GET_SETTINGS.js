import { gql } from '@apollo/client';

const GET_SETTINGS = gql`
query SETTINGS {
	generalSettings {
		title
	}
}
`;

export default GET_SETTINGS;
