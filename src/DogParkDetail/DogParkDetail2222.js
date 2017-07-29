import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DogParkDetail.css';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";

class DogParkDetail extends Component {
  render() {
    return (
      <div className="detailPage">
        <h1>Park: </h1>
        <div className="detailContent">
          Park Id: {this.props.parkId}
          <br/>
          Desc:
        </div>
        <InputGroup>
          <InputGroup.Button >
            <Button href="#/map" bsStyle="warning" ><Glyphicon glyph="map-marker"></Glyphicon>   Back To Map</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

DogParkDetail.defaultProps = {
  parkId: "No Id Given",
};

export default DogParkDetail;
