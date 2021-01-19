// https://build-in-saratov.com/hamburger-menu/

import styles from './Burger.module.scss';

const Burger = ( { onClick, } ) => {
  return (
    <div className={ `${ styles.burger }` } data-cy="mmenu-btn">
      <button
        aria-label="open/close navigation"
        onClick = { ( e ) => onClick( e ) }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Burger;