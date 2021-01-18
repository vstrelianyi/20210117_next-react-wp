import { gql } from '@apollo/client';
import FragmentMenuItem from './fragments/FRAGMENT_MENUITEM';
import FragmentSEO from './fragments/FRAGMENT_SEO';

const GET_PAGE = gql`
	query GET_PAGE($uri: String) {
		logo: menu(idType: DATABASE_ID, id: "2") {
			acf {
				logo {
					altText
					title
					sourceUrl
				}
			}
		}
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
			seo{
				...FragmentSEO
			}
	  }
	}
	${ FragmentMenuItem }
	${ FragmentSEO }
	`;

export default GET_PAGE;