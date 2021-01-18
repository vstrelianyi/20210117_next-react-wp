import { gql } from '@apollo/client';

const GET_PAGES_URI = gql`
 query GET_PAGES {
  pages: pages {
    nodes {
			id
      slug
      uri
    }
  }
 }
 `;

export default GET_PAGES_URI;