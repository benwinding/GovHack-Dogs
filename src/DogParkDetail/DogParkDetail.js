import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";
import './DogParkDetail.css';
const rp = require('request-promise-native');

class DogParkDetail extends Component {
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
              facilities__Toilet(accessible) { park['facilities__Toilet(accessible)']} <br/>
              facilities__BBQfacilities {  park.facilities__BBQfacilities  } <br/>
              facilities__Babychangeroom {  park.facilities__Babychangeroom  } <br/>
              facilities__Boatramp {  park.facilities__Boatramp  } <br/>
              facilities__Cafe {  park.facilities__Cafe  } <br/>
              facilities__Parking {  park.facilities__Parking  } <br/>
              facilities__Picnictable {  park.facilities__Picnictable  } <br/>
              facilities__Playground {  park.facilities__Playground  } <br/>
              facilities__Publictransportaccess {  park.facilities__Publictransportaccess  } <br/>
              facilities__Shelter {  park.facilities__Shelter  } <br/>
              facilities__Shower {  park.facilities__Shower  } <br/>
              facilities__Sportsfield {  park.facilities__Sportsfield  } <br/>
              facilities__Toilet {  park.facilities__Toilet  } <br/>
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

DogParkDetail.defaultProps = {
  parkId: "No Id Given",
};

export default DogParkDetail;
