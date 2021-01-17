import { css } from '@emotion/react';
import Layout from '../src/components/Layout';

const styles_Home = css`
	background-color: red;
`;

const Home = () => {
  return (
    <div css={ styles_Home }>
      <Layout>
				Hello world
      </Layout>
    </div>
  );
};

export default Home;