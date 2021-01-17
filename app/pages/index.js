import { css } from '@emotion/react';
import Layout from '../src/components/Layout';

import client from '../src/apollo/client';

import GET_MENUS from '../src/queries/GET_MENUS';

import NavHeader from '../src/components/NavHeader';
import NavFooter from '../src/components/NavFooter';

const styles_Home = css`
	background-color: red;
`;

const Home = ( { menus, } ) => {
  return (
    <div css={ styles_Home } className="page-wrapper">
      <NavHeader menus={ menus.headerMenus }/>
      <Layout styling={ styles_Home }>
				Hello world
      </Layout>
      <NavFooter menus={ menus.footerMenus }/>
    </div>
  );
};

export default Home;

export const getStaticProps = async ( context ) => {
  const { data, loading, networkStatus, } = await client.query( {
    query: GET_MENUS,
  } );

  return {
    props: {
      menus: {
        headerMenus: data.headerMenus.nodes,
        footerMenus: data.footerMenus.nodes,
      },
    },
    revalidate: 1,
  };
};