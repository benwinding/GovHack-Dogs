import React, { Component } from 'react';
import './App.css';
import MyMenu from "./MyMenu/MyMenu";
import MyMenuRoutes from "./MyMenu/MyMenuRoutes";
import betaTag from './beta-stamp.png';

export default class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <img src={betaTag} alt="betaTag" className="betaTag"/>
        <MyMenu />
        <MyMenuRoutes id="page-wrap"/>
      </div>
    );
  }
}
