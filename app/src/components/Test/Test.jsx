import styles from './Test.module.scss';

const Test = () => {
  return (
    <div className={ `${ styles.test } test` }>
      <span>Test</span>
      <h1>Test</h1>

      <div className={ `${ styles.test2 } test2` }>Test2</div>
    </div>
  );
};

export default Test;