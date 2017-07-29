import React, {Component} from 'react';
import PropTypes from 'prop-types';

const K_WIDTH = 10;
const K_HEIGHT = 10;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: K_HEIGHT,
  backgroundColor: 'blue',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

class MapPointYourLocation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={greatPlaceStyle}
      >
        { this.props.$hover ? this.props.text : ""}
      </div>
    );
  }
}

MapPointYourLocation.propTypes = {};
MapPointYourLocation.defaultProps = {};

export default MapPointYourLocation;
