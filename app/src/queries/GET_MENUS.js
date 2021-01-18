import { gql } from '@apollo/client';
import FragmentMenuItem from './fragments/FRAGMENT_MENUITEM';

const GET_MENUS = gql`
query Menus {
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
}
${ FragmentMenuItem }
`;

export default GET_MENUS;