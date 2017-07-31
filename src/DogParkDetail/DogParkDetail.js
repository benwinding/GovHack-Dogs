import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup, Table, Row, Col} from "react-bootstrap";
import './DogParkDetail.css';
import GoogleMap from 'google-map-react';
import MapPointYourLocation from "../DogParksMap/MapPointYourLocation";
import 'font-awesome/css/font-awesome.css'
import MenuFooter from "../FooterMenu/MenuFooter";

import p1 from './dogPark1.jpeg';
import p2 from './dogPark2.jpeg';
import p3 from './dogPark3.jpeg';
import p4 from './dogPark4.jpeg';

const rp = require('request-promise-native');
const gmapsApiKey = "AIzaSyAFVS3VoZHTceJd3snrMVWb1NtihK8XsVk";

class DetailRow extends Component {
  render () {
    let faField = "fa fa-" + this.props.fa;
    let row = (<tr>
      <td><i className={faField}></i></td>
      <td>{this.props.name}</td>
    </tr>);
    return this.props.value === "TRUE" ? row : <i />;
  }
}

DetailRow.defaultProps = {
  fa: "circle-o",
};

class DogParkDetail extends Component {
  constructor(props) {
    super(props);

    let images = [p1,p2,p3,p4];
    this.setState({
      apiPark:{
        lat:-34.89,
        lng:138.6007
      },
      randomImage: images[Math.floor(Math.random()*images.length)]
    });
  }

  componentDidMount() {
    let url = "https://ppp234-198.static.internode.on.net:5001/park?parkid=" + this.props.parkId;
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
      <div>
        <div className="escButton">
          <Row >
            <Col xs={3} xsOffset={9}>
              <InputGroup>
                <InputGroup.Button >
                  <Button href="#/map" bsStyle="warning" ><Glyphicon glyph="arrow-left"></Glyphicon>   Back<Glyphicon glyph="map-marker"></Glyphicon></Button>
                </InputGroup.Button>
              </InputGroup>
            </Col>
          </Row>
        </div>
        <div className="detailPage">
          <h1>Park: {park.ParkName}</h1>
          <div className="backImage">
            <img src={p1} alt="logo" className="backImage" />
          </div>
          <div className="detailContent">
            <Row className="show-grid">
              <Col md={6}  >
                <Table striped bordered condensed hover>
                  <tbody>
                  <DetailRow fa="circle-o" name="Id" value={this.props.parkId}/>
                  <DetailRow fa="tree" name="Name=" value={park.ParkName} />
                  <DetailRow fa="wheelchair" name="Toilet(accessible)" value={ park.facilities__Toilet} />
                  <DetailRow fa="flash" name="BBQfacilities" value={ park.facilities__BBQfacilities } />
                  <DetailRow fa="child" name="Babychangeroom" value={park.facilities__Babychangeroom } />
                  <DetailRow fa="ship" name="Boatramp" value={  park.facilities__Boatramp } />
                  <DetailRow fa="beer" name="Cafe" value={  park.facilities__Cafe } />
                  <DetailRow fa="car" name="Parking" value={  park.facilities__Parking } />
                  <DetailRow fa="cutlery" name="Picnic Table" value={park.facilities__Picnictable  } />
                  <DetailRow fa="soccer-ball-o" name="Playground" value={  park.facilities__Playground  } />
                  <DetailRow fa="bus" name="Publictransportaccess"  value={  park.facilities__Publictransportaccess  } />
                  <DetailRow fa="home" name="Shelter"  value={  park.facilities__Shelter  } />
                  <DetailRow fa="shower" name="Shower Facilities"  value={park.facilities__Shower  }  />
                  <DetailRow fa="flag-checkered" name="Sportsfield"  value={  park.facilities__Sportsfield  }  />
                  <DetailRow fa="female" name="Toliets" value={  park.facilities__Toilet  } />
                  </tbody>
                </Table>
              </Col>
              <Col md={6} >
                <div style={{width:"100%", height:"465px"}} >
                  <GoogleMap
                    bootstrapURLKeys={{key: gmapsApiKey}}
                    center={[park.lat,park.lng]}
                    zoom={this.props.zoom}
                  >
                    { this.state.points }
                    <MapPointYourLocation
                      text={"You're Here"}
                      lat={park.lat}
                      lng={park.lng}
                    />
                  </GoogleMap>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row >
              <Col>
                <InputGroup>
                  <InputGroup.Button >
                    <Button href={"#/review/"+this.props.parkId} bsStyle="warning" ><Glyphicon glyph="star"></Glyphicon>   Reviews</Button>
                    <Button href={"#/stats/adelaide"} bsStyle="warning" ><Glyphicon glyph="stats"></Glyphicon>   Stats</Button>
                  </InputGroup.Button>
                </InputGroup>
              </Col>
            </Row>
          </div>
        </div>
        <MenuFooter/>
      </div>
    );
  }

  JsonTestingPrint() {
    console.log(this.state.apiPark);
  }
}

DogParkDetail.defaultProps = {
  parkId: "No Id Given",
  zoom: 13
};

export default DogParkDetail;
