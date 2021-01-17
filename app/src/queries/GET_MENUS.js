import { gql } from '@apollo/client';
import MenuFragment from './fragments/MENUS';

const GET_MENUS = gql`
query Menus {
  headerMenus: menuItems(where: {location: HEADER_MENU }) {
    nodes {
      ...MenuFragment
    }
	}
	logo: menu(idType: DATABASE_ID, id: "2") {
    acf {
      logo {
				altText
				title
        sourceUrl
      }
    }
  }
  footerMenus: menuItems(where: {location: EXTRA_MENU}) {
    nodes {
      ...MenuFragment
    }
	}
}
${ MenuFragment }
`;

export default GET_MENUS;