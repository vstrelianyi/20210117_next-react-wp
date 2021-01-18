import { ApolloProvider } from '@apollo/client';

import client from '../src/apollo/client';

import { Global, css } from '@emotion/react';

const styles_Global = css`
	html{
		height: 100%;
	}
	body{
		margin: 0px;
		color: #000;
		height: 100%;
		#__next{
			height: 100%;
		}
	}
	.page-wrapper{
		display: flex;
		flex-direction: column;
		min-height: 100%;
		header{
			flex-shrink: 1;
		}
		main{
			flex-grow: 1;
		}
		footer{
			flex-shrink: 1;
		}
	}
	.container{
		margin: 0 auto;
		width: 100%;
		position: relative;
		@media( min-width: 576px){
			width: 540px;
		}
		@media( min-width: 768px){
			width: 720px;
		}
		@media( min-width: 992px){
			width: 960px;
		}
		@media( min-width: 1200px){
			width: 1140px;
		}
	}
	a,span,p{
		color: inherit;
	}
	a{
		display: inline-block;
	}
	a,button{
		cursor: pointer;
	}
	nav{
		a{
			text-decoration: none;
		}
	}
	p{
		padding: 0;
		margin: 0;
	}
	button{
		padding: 10px 20px;
		background-color: #95A5A6;
		outline: none;
		border-radius: 5px;
		border: none;
		color: #fff;
		&:focus{
			outline: none;
		}
	}
	ul{
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	img{
		object-fit: cover;
	}
`;

const MyApp = ( { Component, pageProps, } ) => {
  return (
    <ApolloProvider client = { client }>
      <Global
        styles={ styles_Global }
      />
      { /* <Head> */ }
      { /* <title>Woocommerce React Theme</title> */ }
      { /* <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css"/> */ }
      { /* </Head> */ }
      <Component { ...pageProps }/>
    </ApolloProvider>
  );
};

export default MyApp;
