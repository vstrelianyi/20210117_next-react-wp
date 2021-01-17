import { css } from '@emotion/react';

import Link from 'next/link';

const styles_Nav = css`
	display: flex;
	ul{
		display: flex;
		li{
			padding: 15px 20px;
		}
	}
`;

const NavFooter = ( { menus, } ) => {
  return (
    <>
      { menus?.length ?
        <nav css={ styles_Nav }>
          <div className="container">
            <ul>
              { menus.map( item => {
                return (
                  <li key={ item.databaseId }>
                    <Link href={ item.path }>
                      <a>
                        { item.label }
                      </a>
                    </Link>
                  </li>
                );
              } ) }
            </ul>
          </div>
        </nav>
        : null }
    </>
  );
};

export default NavFooter;