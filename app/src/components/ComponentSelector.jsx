// wp components
import WpColumns from './WpColumns/WpColumns';

const ComponentSelector = ( { typeName, block, } ) => {
  switch ( typeName ){
  case 'CoreParagraphBlock':
    return (
      <h2 data-blocktype={ block.__typename }>{ block.name }</h2>
    );
  case 'CoreColumnsBlock':
    return (
      <WpColumns block={ block }/>
    );
  default:
    return ( <div>Block does not exist</div> );
  }
};

export default ComponentSelector;