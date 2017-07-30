import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup,ControlLabel,FormGroup,FormControl,Table,Row,Col} from "react-bootstrap";
import './DogParkDetail.css';
// import {FormGroup,FormControl,Jumbotron,ControlLabel} from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import MapPointYourLocation from "../DogParksMap/MapPointYourLocation";
import 'font-awesome/css/font-awesome.css'
// import {FormGroup,FormControl,Jumbotron,ControlLabel} from 'react-bootstrap';
const rp = require('request-promise-native');

const gmapsApiKey = "AIzaSyAFVS3VoZHTceJd3snrMVWb1NtihK8XsVk";

class DogParkDetail extends Component {
    state={
        apiPark:{
            lat:-34.89,
            lng:138.6007
        }
    };

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
            <h1>Park</h1>
            <div className="detailContent">
                <Row className="show-grid">
                    <Col md={6}  >
                        <Table striped bordered condensed hover>

                            <tbody>
                            <tr>
                                <td><i className=" fa fa-circle-o"></i></td>
                                <td>Id</td>
                                <td>{this.props.parkId}</td>
                            </tr>
                            <tr>
                                <td><i className=" fa fa-tree"></i></td>
                                <td>Name</td>
                                <td>{park.ParkName}</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-wheelchair"></i></td>
                                <td>Toilet(accessible)</td>
                                <td>{ park.facilities__Toilet}</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-flash"></i></td>
                                <td>BBQfacilities</td>
                                <td>{ park.facilities__BBQfacilities  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-child"></i></td>
                                <td>Babychangeroom</td>
                                <td>{park.facilities__Babychangeroom  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-ship"></i></td>
                                <td>Boatramp</td>
                                <td>{  park.facilities__Boatramp  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-beer"></i></td>
                                <td>Cafe</td>
                                <td>{  park.facilities__Cafe  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-car"></i></td>
                                <td>Parking</td>
                                <td>{  park.facilities__Parking  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-table"></i></td>
                                <td>Picnictable</td>
                                <td> {park.facilities__Picnictable  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-soccer-ball-o"></i></td>
                                <td>Playground</td>
                                <td>{  park.facilities__Playground  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-bus"></i></td>
                                <td>Publictransportaccess </td>
                                <td>{  park.facilities__Publictransportaccess  }</td>
                            </tr>
                            <tr>
                                <td><i className="fa-home"></i></td>
                                <td>Shelter</td>
                                <td>{park.facilities__Shelter  } </td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-shower"></i></td>
                                <td>Shower</td>
                                <td> {park.facilities__Shower  } </td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-flag-checkered"></i></td>
                                <td>Sportsfield </td>
                                <td>{  park.facilities__Sportsfield  } </td>
                            </tr>
                            <tr>
                                <td><i className="fa fa-male"></i></td>
                                <td>Toilet</td>
                                <td> {  park.facilities__Toilet  }</td>
                            </tr>
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
  zoom: 13
};

export default DogParkDetail;
