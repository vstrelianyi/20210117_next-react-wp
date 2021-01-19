import { useState } from 'react';

import Link from 'next/link';
import Burger from '../Burger/Burger';

import styles from './NavHeader.module.scss';

const NavHeader = ( { menu, logo, } ) => {

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
            <a className={ `${ styles.Brand }` }>
              <img src={ logo.sourceUrl } alt={ logo.title }/>
            </a>
          </Link>
          <Burger
            onClick={ ( e ) => handleBurgerClick( e ) }
          />
          <nav className={ `${ styles.NavHeader } ${ isMenuVisible ? 'visible' : 'hidden' }` }>
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

export default NavHeader;