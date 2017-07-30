import React, { Component } from 'react';
import logo from '../logo-textOnly.png';
import './SignInPage.css';
import MobileDetect from 'mobile-detect';
import {FormGroup,InputGroup,Button,Glyphicon} from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';

const styleAutoComplete = {
  height: "38px",
  width: "100%",
  color: "grey"
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
              <div>
                <FormGroup style={{"paddingTop":"40px","minWidth":"100px", width:"300px", margin:"auto", color:"#fff"}}>
                  <InputGroup>
                    <InputGroup.Button >
                      <Button href="#/map" bsStyle="warning" ><Glyphicon glyph="map-marker"></Glyphicon>   Use My Location</Button>
                    </InputGroup.Button>
                  </InputGroup>
                  <br/>
                  <InputGroup>
                    <InputGroup.Addon><Glyphicon glyph="search"></Glyphicon></InputGroup.Addon>
                    <Autocomplete
                      style={styleAutoComplete}
                      onPlaceSelected={(place) => {
                        let location = place.geometry.location;
                        console.log(location.lat());
                        console.log(location.lng());
                        window.location = '#/map/' + location.lat() + '/' + location.lng();
                      }}
                      types={['(regions)']}
                      componentRestrictions={{country: "au"}}
                    />
                    {/*<InputGroup.Button >*/}
                      {/*<Button style={{height: "38px"}} type="submit" onClick={this.onClickGo}>Go</Button>*/}
                    {/*</InputGroup.Button>*/}
                  </InputGroup>
                </FormGroup>
              </div>
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
}
