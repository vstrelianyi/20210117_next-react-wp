import { gql } from '@apollo/client';
import FragmentMenuItem from './fragments/FRAGMENT_MENUITEM';

const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
	  headerMenus: menuItems(where: {location: HEADER_MENU }) {
			nodes {
				...FragmentMenuItem
			}
		}
	  footerMenus: menuItems(where: {location: FOOTER_MENU}) {
			nodes {
				...FragmentMenuItem
			}
		}
	  page: pageBy(uri: $uri) {
	    id
	    title
	    content
	    slug
	    uri
	  }
	}
	${ FragmentMenuItem }
	`;

export default GET_PAGE;