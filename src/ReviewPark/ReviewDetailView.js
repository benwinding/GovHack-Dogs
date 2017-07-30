import React, {Component} from 'react';
import {Table, Button, Glyphicon, InputGroup} from "react-bootstrap";
import './ReviewDetailView.css';

const rp = require('request-promise-native');

class ReviewDetailView extends Component {
  state={apiPark:[]}

  componentDidMount() {
    let url = "https://ppp234-198.static.internode.on.net:5001/reviews?parkid=" + this.props.parkId;
    rp({uri: url})
      .then((body) => {
        let response = JSON.parse(body);
        console.log(response);
        this.setState({apiPark: response.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    this.JsonTestingPrint();
    return (
      <div className="detailPage">
        {/*<h1>Reviews of Park id: {this.props.parkId} </h1>*/}
        <h1>Reviews of: Bonython Park/Tulya Wardli</h1>
        <div className="detailContent">
          {this.GetReviews()}
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

  GetReviews() {
    return(
      this.state.apiPark.map((review) => {
        return (
          <Table striped border condensed hover responsive>
            <tbody>
              <tr>
                <td>Username</td> <td>{review.username}</td>
              </tr>
              <tr>
                <td>Rating</td> <td>{review.rating}</td>
              </tr>
              <tr>
                <td>Comment</td> <td>{review.comment}</td>
              </tr>
            </tbody>
          </Table>
        )
      })
    )
  }
}

ReviewDetailView.propTypes = {};
ReviewDetailView.defaultProps = {
  parkId: "No Id Given"
};

export default ReviewDetailView;
