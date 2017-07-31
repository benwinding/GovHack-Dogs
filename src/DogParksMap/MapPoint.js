import React, {Component} from 'react';
import "./MapPointPopup.css"
import {Glyphicon} from 'react-bootstrap';

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

  GetPopupDescription() {
    return (
      <a>
        <div className="popUpName" href="#/detail" >
          <Glyphicon glyph="map-marker"></Glyphicon>
          { this.props.$hover ? this.props.text : ""}
        </div>
      </a>
    )
  }

  render() {
    return (
      <div
        style={greatPlaceStyle}
      >
        { this.props.$hover ? this.GetPopupDescription() : ""}
      </div>
    );
  }
}

MapPoint.propTypes = {};
MapPoint.defaultProps = {};

export default MapPoint;
