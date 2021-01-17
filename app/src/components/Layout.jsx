import { Global, css } from '@emotion/react';

const Layout = ( { children, } ) => {
  return (
    <div className="container">
      <main>
        { children }
      </main>
    </div>
  );
};

export default Layout;