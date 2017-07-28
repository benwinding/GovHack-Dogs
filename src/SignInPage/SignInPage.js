import React, { Component } from 'react';
import GoogleLogin from "react-google-login";
import logo from '../boner-logo.svg';
import './SignInPage.css';
import MobileDetect from 'mobile-detect';

const responseGoogle = (response) => {
  console.log(response);
};

export default class SignInPage extends Component {
  render() {
    return (
      <div>
        <div className="video-background">
          {SignInPage.GetBackgroundClip()}
        </div>

        <div id="vidtop-content">
          <div className="vid-info">
            <div className="Signin-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="Signin-desc">
              <i>A match making app for dogs!</i>
            </div>
            <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Google Sign In"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    );
  }

  static GetBackgroundClip() {
    const md = new MobileDetect(window.navigator.userAgent);
    if(md.phone())
      return this.GetGif();
    if(md.tablet())
      return this.GetGif();
    else
      return this.GetGif();
  }

  static GetGif() {
    return (
      <div className="video-foreground" id="vid-gif">
        <img
          src="./backgrounds/dogs.gif"
          alt={"The video in background"}
        />
      </div>);
  }

  static GetYoutube() {
    return (
      <div className="video-foreground" id="vid-yt">
        <iframe
          className="vid-yt"
          src={"https://www.youtube.com/embed/IGJCx2ug0lU?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=IGJCx2ug0lU"}
          allowFullScreen
          frameBorder={0}
          title={"The video in background"}
        />
      </div>
    );
  }
}
