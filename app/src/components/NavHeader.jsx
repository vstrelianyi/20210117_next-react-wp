import { css } from '@emotion/react';

import { useState } from 'react';

import Link from 'next/link';
import Burger from './Burger';

const styles_Nav = css`
	display: flex;
	&.hidden{
		display: none;
	}
	ul{
		display: flex;
		li{
			padding: 15px 20px;
		}
	}
`;

const Nav = ( { menus, } ) => {

  const [ isMenuVisible, setMenuVisibility, ] = useState( false );

  const handleBurgerClick = ( e ) => {
    // console.log( e.target );
    setMenuVisibility( !isMenuVisible );
  };

  return (
    <>
      { menus?.length ?
        <div className="container">
          <Burger onClick={ ( e ) => {
            handleBurgerClick( e );
          } }/>
          <nav css={ styles_Nav } className={ `${ isMenuVisible ? 'visible' : 'hidden' }` }>
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
          </nav>
        </div>
        : null }
    </>
  );
};

export default Nav;