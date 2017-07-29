import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup,ControlLabel,FormGroup,FormControl,Table,Row,Col} from "react-bootstrap";
import './DogParkDetail.css';
// import {FormGroup,FormControl,Jumbotron,ControlLabel} from 'react-bootstrap';
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
            <h1>Park</h1>
            <div className="detailContent">
                <Row className="show-grid">
                    <Col md={6}  >
                        <Table striped bordered condensed hover>

                            <tbody>
                            <tr>
                                <td>Id</td>
                                <td>{this.props.parkId}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{park.ParkName}</td>
                            </tr>
                            <tr>
                                <td>Toilet(accessible)</td>
                                <td>{ park.facilities__Toilet}</td>
                            </tr>
                            <tr>
                                <td>BBQfacilities</td>
                                <td>{ park.facilities__BBQfacilities  }</td>
                            </tr>
                            <tr>
                                <td>Babychangeroom</td>
                                <td>{park.facilities__Babychangeroom  }</td>
                            </tr>
                            <tr>
                                <td>Boatramp</td>
                                <td>{  park.facilities__Boatramp  }</td>
                            </tr>
                            <tr>
                                <td>Cafe</td>
                                <td>{  park.facilities__Cafe  }</td>
                            </tr>
                            <tr>
                                <td>Parking</td>
                                <td>{  park.facilities__Parking  }</td>
                            </tr>
                            <tr>
                                <td>Picnictable</td>
                                <td> {park.facilities__Picnictable  }</td>
                            </tr>
                            <tr>
                                <td>Playground</td>
                                <td>{  park.facilities__Playground  }</td>
                            </tr>
                            <tr>
                                <td>Publictransportaccess </td>
                                <td>{  park.facilities__Publictransportaccess  }</td>
                            </tr>
                            <tr>
                                <td>Shelter</td>
                                <td>{park.facilities__Shelter  } </td>
                            </tr>
                            <tr>
                                <td>Shower</td>
                                <td> {park.facilities__Shower  } </td>
                            </tr>
                            <tr>
                                <td>Sportsfield </td>
                                <td>{  park.facilities__Sportsfield  } </td>
                            </tr>
                            <tr>
                                <td>Toilet</td>
                                <td> {  park.facilities__Toilet  }</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6} >
                        lat {  park.lat  } <br/>
                        lng {  park.lng  } <br/>
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
};

export default DogParkDetail;
