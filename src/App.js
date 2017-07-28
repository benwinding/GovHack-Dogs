import React, { Component } from 'react';
import './App.css';
import MyMenu from "./MyMenu/MyMenu";
import MyMenuRoutes from "./MyMenu/MyMenuRoutes";

export default class App extends Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <MyMenu />
        <MyMenuRoutes id="page-wrap"/>
      </div>
    );
  }
}
