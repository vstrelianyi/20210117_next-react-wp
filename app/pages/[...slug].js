import { css } from '@emotion/react';

import client from '../src/apollo/client';

import GET_PAGES_URI from '../src/queries/GET_PAGES';
import GET_PAGE from '../src/queries/GET_PAGE';
import GET_OPTIONS from '../src/queries/GET_OPTIONS';
import GET_SETTINGS from '../src/queries/GET_SETTINGS';
import GET_SEO_GLOBAL from '../src/queries/GET_SEO_GLOBAL';

import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';

import { sanitize } from '../src/utils/miscellaneous';
import { isCustomPageUri } from '../src/utils/slugs';

import { v4 as uuidv4 } from 'uuid';

// components
import Layout from '../src/components/Layout';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Head from 'next/head';
import SEO from '../src/components/SEO';
import SocialIcons from '../src/components/SocialIcons/SocialIcons';

import ComponentSelector from '../src/components/ComponentSelector';

const styles_Home = css`
	background-color: red;
`;

const Page = ( { data, } ) => {
  const router = useRouter();

  if ( router.isFallback ){
    return <div>Loading...</div>;
  }

  return (
    <>
      <SEO seo={ data.page?.seo } uri={ data.page?.uri }/>
      <Head>
        <title>{ data.page?.seo.title }</title>
        <link rel="shortcut icon" href={ data?.options?.favicon.sourceUrl }/>
        { data?.page?.seo.schemaDetails && (
          <script
            type="applicaton/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={ { __html: sanitize( data?.page?.seo.schemaDetails ), } }
          />
        ) }
      </Head>
      <div css={ styles_Home } className="page-wrapper">
        <Header menu={ data?.menus.headerMenu } logo={ data?.logo }/>
        <main>
          <Layout styling={ styles_Home }>
            <h1>{ data?.page.title }</h1>

            { data?.page.blocks.map( block => {
              const key = uuidv4();

              return ( <ComponentSelector typeName={ block.__typename } key={ key } block={ block } /> );
            } ) }

            <SocialIcons social={ data?.social }/>
          </Layout>
        </main>
        <Footer menu={ data?.menus.footerMenu }/>
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps ( { params, } ) {
  const resultPage = await client.query( {
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join( '/' ),
    },
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

  return {
    props: {
      data: {
        social: resultSEO?.data.seo.social,
        settings: resultSettings?.data.generalSettings,
        options: resultOptions?.data.options.acf,
        logo: resultPage?.data.logo?.acf.logo,
        menus: {
          headerMenu: resultPage?.data?.headerMenus?.nodes || [],
          footerMenu: resultPage?.data?.footerMenus?.nodes || [],
        },
        page: resultPage?.data.page ?? {},
        path: params?.slug.join( '/' ),
      },
    },
    revalidate: 1,
  };
}

export const getStaticPaths = async () => {
  const { data, } = await client.query( {
    query: GET_PAGES_URI,
  } );

  const pathsData = [];

  data?.pages?.nodes && data?.pages?.nodes.map( page => {
    if ( ! isEmpty( page?.uri ) && !isCustomPageUri( page?.uri )  ){
      const slugs = page?.uri?.split( '/' ).filter( pageSlug => pageSlug );
      pathsData.push( { params: { slug: slugs, }, } );
    }
  } );

  return {
    paths: pathsData,
    fallback: false,
  };
};