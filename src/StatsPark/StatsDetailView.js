import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";
import './StatsDetailView.css';
import Table from "react-bootstrap/es/Table";
import {Pie, PieChart, Tooltip} from "recharts";

const uuidv1 = require('uuid/v1');
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
    console.log(this.GetData());
  }

  GetChart() {
    let breedCounts = this.GetData();
    let breedsFormatted = breedCounts.map((stat) => {
      return {
        name: stat["Breed"],
        value: Number(stat["COUNT(Breed)"])
      }
    });
    let proportionOfOther = 20;
    let countAllDogs = breedsFormatted.reduce((sum, val) => {return sum + val.value}, 0);
    let topDogs = breedsFormatted.filter((a) => {return a.value > countAllDogs/proportionOfOther});
    let countTopDogs = topDogs.reduce((sum, val) => {return sum + val.value}, 0);
    let countOtherDogs = countAllDogs - countTopDogs;

    topDogs.push({
      name: "Other",
      value: countOtherDogs
    });

    return (
      <PieChart width={400} height={400}>
        <Pie dataKey="value" nameKey="name" isAnimationActive={true} data={topDogs} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
        <Pie dataKey="value" data={topDogs} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
        <Tooltip/>
      </PieChart>
    )
  }

  GetTables() {
    let breedCounts = this.GetData();
    let sorted = breedCounts.sort((a,b) =>
      Number(a["COUNT(Breed)"]) < Number(b["COUNT(Breed)"])
    );
    return (
      <Table striped condensed hover responsive>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
        {
          sorted.map((stat) => {
            return (
              <tr key={uuidv1()} >
                <td>{stat["Breed"]}</td>
                <td>{stat["COUNT(Breed)"]}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
    )
  }

  GetData() {
    let breedCounts = this.state.apiPark;
    breedCounts = [
      {"Breed": "lab", "COUNT(Breed)": "32"},
      {"Breed": "chi", "COUNT(Breed)": "21"},
      {"Breed": "nac", "COUNT(Breed)": "124"},
      {"Breed": "4rfqw", "COUNT(Breed)": "263"},
      {"Breed": "sacafwd", "COUNT(Breed)": "213"},
      {"Breed": "afwww", "COUNT(Breed)": "37"},
      {"Breed": "nacc", "COUNT(Breed)": "14"},
      {"Breed": "4rfqasw", "COUNT(Breed)": "63"},
      {"Breed": "afwd", "COUNT(Breed)": "21"},
      {"Breed": "afwwcw", "COUNT(Breed)": "36"}
    ];
    return breedCounts;
  }
}

StatsDetailView.propTypes = {};
StatsDetailView.defaultProps = {
  parkId: "No Id Given"
};

export default StatsDetailView;
