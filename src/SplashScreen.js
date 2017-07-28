import logo from './boner.png';
import {Component} from "react";

class AppSplashScreen extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Boner is a dating app for dogs!
        </p>
      </div>
    );
  }
}

export default AppSplashScreen;