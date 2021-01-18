import { css } from '@emotion/react';
import Layout from '../src/components/Layout';

import client from '../src/apollo/client';

import GET_MENUS from '../src/queries/GET_MENUS';
import GET_OPTIONS from '../src/queries/GET_OPTIONS';
import GET_SETTINGS from '../src/queries/GET_SETTINGS';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Head from 'next/head';

const styles_Home = css`
	background-color: red;
`;

const Home = ( { menus, logo, options, settings, } ) => {
  return (
    <>
      <Head>
        <title>{ settings?.title }</title>
        <link rel="shortcut icon" href={ options?.favicon.sourceUrl }/>
      </Head>
      <div css={ styles_Home } className="page-wrapper">
        <Header menu={ menus.headerMenu } logo={ logo }/>
        <main>
          <Layout styling={ styles_Home }>
				Hello world
          </Layout>
        </main>
        <Footer menu={ menus.footerMenu }/>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async ( context ) => {
  const resultMenus = await client.query( {
    query: GET_MENUS,
  } );

  const resultOptions = await client.query( {
    query: GET_OPTIONS,
  } );

  const resultSettings = await client.query( {
    query: GET_SETTINGS,
  } );

  return {
    props: {
      settings: resultSettings?.data.generalSettings,
      options: resultOptions?.data.options.acf,
      logo: resultMenus?.data.logo?.acf.logo,
      menus: {
        headerMenu: resultMenus?.data.headerMenus.nodes,
        footerMenu: resultMenus?.data.footerMenus.nodes,
      },
    },
    revalidate: 1,
  };
};