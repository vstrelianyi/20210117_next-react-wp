import { css } from '@emotion/react';
import Layout from '../src/components/Layout';

import client from '../src/apollo/client';

import GET_MENUS from '../src/queries/GET_MENUS';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const styles_Home = css`
	background-color: red;
`;

const Home = ( { menus, logo, } ) => {
  return (
    <div css={ styles_Home } className="page-wrapper">
      <Header menu={ menus.headerMenu } logo={ logo }/>
      <main>
        <Layout styling={ styles_Home }>
				Hello world
        </Layout>
      </main>
      <Footer menu={ menus.footerMenu }/>
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
      logo: data.logo?.acf.logo,
      menus: {
        headerMenu: data?.headerMenus.nodes,
        footerMenu: data?.footerMenus.nodes,
      },
    },
    revalidate: 1,
  };
};