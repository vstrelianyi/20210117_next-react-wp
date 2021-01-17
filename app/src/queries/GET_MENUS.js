import { gql } from '@apollo/client';
import MenuFragment from './fragments/MENUS';

const GET_MENUS = gql`
query Menus {
  headerMenus: menuItems(where: {parentId: 2}) {
		nodes {
			...MenuFragment
		}
  }
  footerMenus: menuItems(where: {parentId: 3}) {
		nodes {
			...MenuFragment
		}
  }
}
${ MenuFragment }
`;

export default GET_MENUS;