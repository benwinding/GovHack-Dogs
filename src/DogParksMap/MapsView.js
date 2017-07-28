import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import PointsRepository from './PointsRepository';
import MapPoint from "./MapPoint";

const gmapsApiKey = "AIzaSyAFVS3VoZHTceJd3snrMVWb1NtihK8XsVk";

class MapsView extends Component {
  constructor(props) {
    super(props);
    this.state = {points: [<MapPoint
      lat={-36}
      lng={138}
      text={"2"}
    />]};
  }

  render() {
    return (
      <div style={{width:"100vw", height:"100vh"}} >
        <GoogleMap
          bootstrapURLKeys={{key: gmapsApiKey}}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.state.points}
        </GoogleMap>
      </div>
    );
  }

  componentDidMount() {
    PointsRepository.GetPointsFromApi("")
    .then((points) => {
      console.log(points);
      let pointComponents = points.map((point) => {
        return <MapPoint
          lat={point.lat}
          lng={point.lng}
          text={point.name}
        />;
      });
      this.setState({points: pointComponents})})
    .catch((val) => console.log(val));
  }
}

MapsView.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.any
};

MapsView.defaultProps = {
  center: [-34.9285, 138.6007],
  zoom: 9,
  greatPlaceCoords: {lat: -34.6, lng: 138.80121}
};

export default MapsView;
