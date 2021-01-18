import { css } from '@emotion/react';
import Layout from '../src/components/Layout';

import client from '../src/apollo/client';

import GET_MENUS from '../src/queries/GET_MENUS';
import GET_OPTIONS from '../src/queries/GET_OPTIONS';
import GET_SETTINGS from '../src/queries/GET_SETTINGS';
import GET_SEO from '../src/queries/GET_SEO';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Head from 'next/head';
import SocialIcons from '../src/components/SocialIcons';

const styles_Home = css`
	background-color: red;
`;

const Home = ( { menus, logo, options, settings, social, } ) => {
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
            <SocialIcons social={ social }/>
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

  const resultSEO = await client.query( {
    query: GET_SEO,
  } );

  return {
    props: {
      social: resultSEO?.data.seo.social,
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