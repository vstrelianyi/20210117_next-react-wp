import { gql } from '@apollo/client';
import MenuFragment from './fragments/MENUS';

const GET_MENUS = gql`
query Menus {
  headerMenus: menuItems(where: {location: EXTRA_MENU }) {
    nodes {
      ...MenuFragment
    }
  }
  footerMenus: menuItems(where: {location: HEADER_MENU}) {
    nodes {
      ...MenuFragment
    }
  }
}
${ MenuFragment }
`;

export default GET_MENUS;