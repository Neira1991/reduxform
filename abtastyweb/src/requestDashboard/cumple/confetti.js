import React from 'react';
import PropTypes from 'prop-types';
import sizeMe from 'react-sizeme';
import Confetti from 'react-confetti';

const DimensionedExample = sizeMe({
  monitorHeight: true,
  monitorWidth: true,
  refreshRate: 16
})(
  class Example extends React.PureComponent {
    static propTypes = {
      size: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
      }).isRequired
    };
    render() {
      return (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <Confetti numberOfPieces={100} {...this.props.size} />
        </div>
      );
    }
  }
);

export default DimensionedExample;
