import styles from './WpColumns.module.scss';

const WpColumns = ( { block, } ) => {
  return (
    <div className={ `${ styles.WpColumns }` } dangerouslySetInnerHTML={ { __html: block.saveContent,  } }>
      { /* <div className="WpColumn">{ block.saveContent }</div> */ }
      { /* <div className="WpColumn">right</div> */ }
    </div>
  );
};

export default WpColumns;