import { css } from '@emotion/react';

import { useState } from 'react';

import Link from 'next/link';
import Burger from './Burger';

const styles_Nav = css`
	display: flex;
	&.hidden{
		display: none;
	}
	@media( min-width: 768px){
		&.hidden{
		display: flex;
	}
	}
	ul{
		display: flex;
		li{
			padding: 15px 20px;
		}
	}
`;

const styles_Brand = css`
	display: inline-flex;
`;

const Nav = ( { menu, logo, } ) => {

  const [ isMenuVisible, setMenuVisibility, ] = useState( false );

  const handleBurgerClick = ( e ) => {
    // console.log( e.target );
    setMenuVisibility( !isMenuVisible );
  };

  return (
    <>
      { menu?.length ?
        <div className="container">
          <Link href="/">
            <a css={ styles_Brand }>
              <img src={ logo.sourceUrl } alt={ logo.title }/>
            </a>
          </Link>
          <Burger
            onClick={ ( e ) => handleBurgerClick( e ) }
          />
          <nav css={ styles_Nav } className={ `${ isMenuVisible ? 'visible' : 'hidden' }` }>
            <ul>
              { menu.map( item => {
                return (
                  <li key={ item.databaseId }>
                    <Link href={ item.path }>
                      <a data-cy="nav-item">
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