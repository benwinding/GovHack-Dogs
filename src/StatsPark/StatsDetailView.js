import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";
import './StatsDetailView.css';
import Table from "react-bootstrap/es/Table";
import {CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis} from "recharts";

const rp = require('request-promise-native');

class StatsDetailView extends Component {
  state={apiPark:[]}

  componentDidMount() {
    let url = "http://203.122.234.198:5000/dogstats?suburb=" + this.props.suburb;
    rp({uri: url})
      .then((body) => {
        let response = JSON.parse(body);
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
        <h1>Park: {this.props.suburb}</h1>
        <div className="detailContent">
          {this.GetChart()}
          {this.GetTables()}
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

  GetChart() {
    let parksFormatted = this.state.apiPark.map((stat) => {
      return {
        name: stat["Breed"],
        value: stat["COUNT(Breed)"]
      }
    });

    return (
      <PieChart width={800} height={400}>
        <Pie isAnimationActive={true} data={parksFormatted} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Pie data={parksFormatted} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
      </PieChart>
    )
  }

  GetTables() {
    return(
      this.state.apiPark.map((stat) => {
        return (
          <Table key={stat.key} striped border condensed hover responsive>
            <tbody>
              <tr>
                <td>Breed</td> <td>{stat["Breed"]}</td>
              </tr>
              <tr>
                <td>Count</td> <td>{stat["COUNT(Breed)"]}</td>
              </tr>
            </tbody>
          </Table>
        )
      })
    )
  }
}

StatsDetailView.propTypes = {};
StatsDetailView.defaultProps = {
  parkId: "No Id Given"
};

export default StatsDetailView;
