import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";
import './StatsDetailView.css';

const rp = require('request-promise-native');

class StatsDetailView extends Component {
  state={apiPark:""}

  componentDidMount() {
    let url = "http://203.122.234.198:5000/park?parkid=" + this.props.parkId;
    rp({uri: url})
      .then((body) => {
        let response = JSON.parse(body);
        this.setState({apiPark: response.data[0]});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    this.JsonTestingPrint();
    let park = this.state.apiPark;
    return (
      <div className="detailPage">
        <h1>Park: </h1>
        <div className="detailContent">
          Park Id: {this.props.parkId}
          <br/>
          ParkName {  park.ParkName  } <br/>
          lat {  park.lat  } <br/>
          lng {  park.lng  } <br/>
        </div>
        <InputGroup>
          <InputGroup.Button >
            <Button href="#/map" bsStyle="warning" ><Glyphicon glyph="map-marker"></Glyphicon>   Back To Map</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }

  JsonTestingPrint() {
    console.log(this.state.apiPark);
  }
}

StatsDetailView.propTypes = {};
StatsDetailView.defaultProps = {
  parkId: "No Id Given"
};

export default StatsDetailView;
