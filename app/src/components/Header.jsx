import NavHeader from './NavHeader/NavHeader';

const Header = ( { menu, logo, } ) => {
  return (
    <header>
      <NavHeader menu={ menu } logo={ logo }/>
    </header>
  );
};

export default Header;