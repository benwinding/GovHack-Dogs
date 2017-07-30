import React, {Component} from 'react';
import {Breadcrumb, Button, Glyphicon, InputGroup} from "react-bootstrap";
import './MenuFooterStyle.css';

class MenuFooter extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#/map">
            Map
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            detail
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

MenuFooter.propTypes = {};
MenuFooter.defaultProps = {};

export default MenuFooter;
