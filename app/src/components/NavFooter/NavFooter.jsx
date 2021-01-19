import Link from 'next/link';

import styles from './NavFooter.module.scss';

const NavFooter = ( { menu, } ) => {
  return (
    <>
      { menu?.length ?
        <nav className={ `${ styles.NavFooter }` }>
          <div className="container">
            <ul>
              { menu.map( item => {
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