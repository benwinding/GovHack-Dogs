import * as React from "react";
const rp = require('request-promise-native');

export default class PointsRepository {
  static GetPointsFromApi(suffix) {
    let url = "http://gov-hack-test-api.glitch.me/"+suffix;
    return new Promise((resolve, reject) => {
      rp({uri: url})
        .then((body) => {
          resolve(JSON.parse(body))
        })
        .catch(reject);
    });
  }


  static GetPointsExample() {
    return [{lat:-34.6,lng:138.8,name:"A"},{lat:-34.3,lng:138.8,name:"B"}];
  }
}