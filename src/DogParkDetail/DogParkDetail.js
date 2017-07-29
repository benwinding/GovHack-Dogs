import React, {Component} from 'react';
import logo from '../boner-logo.svg';
import './DogDetail.css';
import MobileDetect from 'mobile-detect';
import PropTypes from 'prop-types';
const rp = require('request-promise-native');

class DogParkDetail extends Component {
    state={}

    onComponentDidMount() {
      let url = "http://203.122.234.198:5000/park?parkid=" + this.props.id
      rp({uri: url})
      .then((body) => {
        let dataJson = JSON.parse(body);

      })
      .catch((err) => {

      });
    }

    render() {

        let backdropIMG = 'http://www.weekendnotes.com/im/003/03/bundoora-park1.jpg';

        return (
            <div className="col-xs-12 cardcont nopadding">

              <div className="meta-data-container col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5">
                <h1>{this.state.title}</h1>

                return (
                <div>
                  <div className="video-background">
                      {DogParkDetail.GetBackgroundClip()}
                  </div>

                </div>
              </div>
            </div>

        );

        document.body.style.backgroundImage = 'url(' + backdropIMG + ')';

    }

    static GetBackgroundClip() {
        const md = new MobileDetect(window.navigator.userAgent);
        if (md.phone())
            return this.GetGif();
        if (md.tablet())
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
    };
}

DogParkDetail.propTypes = {};
DogParkDetail.defaultProps = {};

export default DogParkDetail;
