import { css } from '@emotion/react';

import client from '../src/apollo/client';

import GET_PAGE from '../src/queries/GET_PAGE';
import GET_MENUS from '../src/queries/GET_MENUS';
import GET_OPTIONS from '../src/queries/GET_OPTIONS';
import GET_SETTINGS from '../src/queries/GET_SETTINGS';
import GET_SEO_GLOBAL from '../src/queries/GET_SEO_GLOBAL';

import Layout from '../src/components/Layout';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Head from 'next/head';

// components
import SocialIcons from '../src/components/SocialIcons/SocialIcons';
import ComponentSelector from '../src/components/ComponentSelector';

import { v4 as uuidv4 } from 'uuid';
import Test from '../src/components/Test/Test';

const styles_Home = css`
	background-color: red;
`;

const Home = ( { data, } ) => {
  return (
    <>
      <Head>
        <title>{ data?.settings?.title }</title>
        <link rel="shortcut icon" href={ data?.options?.favicon.sourceUrl }/>
      </Head>
      <div css={ styles_Home } className="page-wrapper">
        <Header menu={ data?.menus.headerMenu } logo={ data?.logo }/>
        <main>
          <Layout styling={ styles_Home }>
            <Test/>
            <h1>{ data?.page?.title }</h1>

            { data?.page.blocks.map( block => {
              const key = uuidv4();

              return ( <ComponentSelector typename={ block.__typename } key={ key } block={ block } /> );
            } ) }

            <SocialIcons social={ data?.social }/>
          </Layout>
        </main>
        <Footer menu={ data?.menus.footerMenu }/>
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
    query: GET_SEO_GLOBAL,
  } );

  const resultPage = await client.query( {
    query: GET_PAGE,
    variables: {
      uri: '/',
    },
  } );

  return {
    props: {
      data: {
        social: resultSEO?.data.seo.social,
        settings: resultSettings?.data.generalSettings,
        options: resultOptions?.data.options.acf,
        logo: resultMenus?.data.logo?.acf.logo,
        menus: {
          headerMenu: resultMenus?.data.headerMenus.nodes,
          footerMenu: resultMenus?.data.footerMenus.nodes,
        },
        page: resultPage?.data.page ?? {},
      },
    },
    revalidate: 1,
  };
};