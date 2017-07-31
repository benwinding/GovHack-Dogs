import React, {Component} from 'react';
import {Button, Col, Glyphicon, InputGroup, Row} from "react-bootstrap";
import './StatsDetailView.css';
import Table from "react-bootstrap/es/Table";
import {Pie, PieChart, Tooltip, Cell} from "recharts";

const uuidv1 = require('uuid/v1');
const rp = require('request-promise-native');

class StatsDetailView extends Component {
  state={apiPark:[]}

  componentDidMount() {
    let url = "https://ppp234-198.static.internode.on.net:5001/dogstats?suburb=" + this.props.suburb;
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
        {/*<h1>{this.props.suburb}</h1>*/}
        <h1>Dog Stats</h1>
        <h2>Adelaide</h2>
        <div className="detailContent">
          <Row>
            <Col md={6} xs={12}>
              <Row>
                <Col xsOffset={2} xs={8}>
                  {this.GetChart()}
                </Col>
              </Row>
            </Col>
            <Col md={6} xs={12}>
              {this.GetTables()}
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
    //console.log(this.GetData());
  }

  GetChart() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    let breedCounts = this.GetData();
    let breedsFormatted = breedCounts.map((stat) => {
      return {
        name: stat["Breed"],
        value: Number(stat["COUNT(Breed)"])
      }
    });
    let proportionOfOther = 50;
    let countAllDogs = breedsFormatted.reduce((sum, val) => {return sum + val.value}, 0);
    let topDogs = breedsFormatted.filter((a) => {return a.value > countAllDogs/proportionOfOther});
    let countTopDogs = topDogs.reduce((sum, val) => {return sum + val.value}, 0);
    let countOtherDogs = countAllDogs - countTopDogs;

    topDogs.push({
      name: "Other",
      value: countOtherDogs
    });

    let pieWidth = 100;
    let pieMargin = 40;
    return (
      <PieChart
        width={(pieWidth+pieMargin)*2}
        height={(pieWidth+pieMargin)*2}
      >
        <Pie
          data={topDogs}
          dataKey="value"
          nameKey="name"
          cx={pieWidth+pieMargin}
          cy={pieWidth+pieMargin}
          label
          outerRadius={pieWidth}
          fill="#8884d8"
        >
          {
            topDogs.map((entry, index) => {
              return <Cell
                key={uuidv1()}
                fill={COLORS[index % COLORS.length]}
              />
            })
          }
        </Pie>
        <Tooltip/>
      </PieChart>
    )
  }

  GetTables() {
    let breedCounts = this.GetData();
    breedCounts.sort((a,b) =>
      Number(b["COUNT(Breed)"]) - Number(a["COUNT(Breed)"])
    );
    console.log(breedCounts);
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
          breedCounts.map((stat) => {
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
    // let breedCounts2 = [           // test data
    //   {"Breed": "lab", "COUNT(Breed)": "32"},
    //   {"Breed": "chi", "COUNT(Breed)": "21"},
    //   {"Breed": "nac", "COUNT(Breed)": "124"},
    //   {"Breed": "4rfqw", "COUNT(Breed)": "263"},
    //   {"Breed": "sacafwd", "COUNT(Breed)": "213"},
    //   {"Breed": "afwww", "COUNT(Breed)": "37"},
    //   {"Breed": "nacc", "COUNT(Breed)": "14"},
    //   {"Breed": "4rfqasw", "COUNT(Breed)": "63"},
    //   {"Breed": "afwd", "COUNT(Breed)": "21"},
    //   {"Breed": "afwwcw", "COUNT(Breed)": "36"}
    // ];
    return this.state.apiPark;
  }
}

StatsDetailView.propTypes = {};
StatsDetailView.defaultProps = {
  parkId: "No Id Given"
};

export default StatsDetailView;
