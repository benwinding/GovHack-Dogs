import React, {Component} from 'react';
import {Button, Glyphicon, InputGroup} from "react-bootstrap";
import './MenuFooterStyle.css';

class MenuFooter extends Component {
  render() {
    return (
      <div className="menuFooter">
        <InputGroup>
          <InputGroup.Button >
            <Button href="#/" bsStyle="warning" ><Glyphicon glyph="home"></Glyphicon>   Home</Button>
            <Button href="#/map" bsStyle="warning" ><Glyphicon glyph="map-marker"></Glyphicon>   Map</Button>
            <Button href="#/about" bsStyle="warning" ><Glyphicon glyph="info"></Glyphicon>   About</Button>
          </InputGroup.Button>
        </InputGroup>
      </div>
    );
  }
}

MenuFooter.propTypes = {};
MenuFooter.defaultProps = {};

export default MenuFooter;
