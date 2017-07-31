import React, {Component} from 'react';
import {Row, Col, Grid,} from 'react-bootstrap';
import './AboutUsStyle.css';
import photo from '../photo.jpg';
import logo from '../logo.png';


export default class AboutUsPage extends Component {
  render() {
    return (
      <div className="about">
        <Grid>
          <Row>
            <Col sm="12">
              <div className="title">About Us!</div>
            </Col>
          </Row>
          <Row>
            <Col sm="6">
              <img src={ photo } alt="Our photo" className="aboutImage"/>
            </Col>
            <Col sm="6">
              <p>
                We are all Post Graduate Computer Science students at the University of Adelaide who have come
                together for the GovHack event, we all share a desire to make the community better and a love for dogs.
              </p>
            </Col>
            <Col sm="6">
              <img src={ logo } alt="Logo" className="aboutLogo"/>
            </Col>
            <Col sm="6">
              <h3>Dog parks of Adelaide</h3>
              <p>
                As a dog owner I never can tell what areas are dog friendly and when I'm at a dog friendly
                area I never know the particular details regarding that area.  Our project solves that problem.
                We have collated data from Department of Environment Water and Natural Resources regarding hiking
                and wilderness facilities with data from local councils regarding dog park locations.  The result
                is a one stop comprehensive database of dog friendly areas in SA.
              </p>
              <p>
                Our App uses location services to easily filter the relevant information and provide dog owners
                with all the details that they want with one click.
              </p>
              <div className="videoLink">
                <a href="https://youtu.be/GB8HMi2tBps">
                  Pitch Video: https://youtu.be/GB8HMi2tBps
                </a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}