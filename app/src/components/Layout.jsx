import { Global, css } from '@emotion/react';

const styles_Global = css`
	body{
		margin: 0px;
	}
	.container{
		margin: 0 auto;
		width: 100%;
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
	a,button{
		cursor: pointer;
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
	img{
		object-fit: cover;
	}
`;

const Layout = ( props ) => {
  return (
    <div>
      <Global
        styles={ styles_Global }
      />
      { /* <Head> */ }
      { /* <title>Woocommerce React Theme</title> */ }
      { /* <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.css"/> */ }
      { /* </Head> */ }
      <div className="container">
        <main>
          { props.children }
        </main>
      </div>
    </div>
  );
};

export default Layout;