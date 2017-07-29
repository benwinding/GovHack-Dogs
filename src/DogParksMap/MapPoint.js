import React, {Component} from 'react';
import PropTypes from 'prop-types';

const K_WIDTH = 5;
const K_HEIGHT = 5;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class MapPoint extends Component {
  // state = {text: "pl"};
  // constructor(props) {
  //   super(props);
  // }
  //
  // onHover() {
  //   this.setState({
  //     text: this.props.text
  //   })
  // }

  render() {
    return (
      <div
        style={greatPlaceStyle}
        // onClick={this.onHover()}
      >
        {/*<div style={{"backgroundColor": "red"}}>*/}
          {/*X*/}
        {/*</div>*/}
        { this.props.text }
      </div>
    );
  }
}

MapPoint.propTypes = {};
MapPoint.defaultProps = {};

export default MapPoint;
