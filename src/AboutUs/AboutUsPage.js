import React, {Component} from 'react';
import {ControlLabel, FormControl, FormGroup, Radio, Button, Row, Col,} from 'react-bootstrap';
import './AboutUsStyle.css';
import photo from '../photo.jpg';
import logo from '../logo.png';


export default class AboutUsPage extends Component {
    render() {
        return (
            <div className="about">
                <Row>
                    <Col sm="4">
                    </Col>
                    <Col sm="4">
                        <p className="title"> About Us! </p>
                    </Col>
                    <Col sm="4">
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <img src={ photo } alt="Our photo" responsive height="400" width="600"/>
                    </Col>
                    <Col sm="5">
                        <p >
                            “Just like Jane, the HackerDogs team noticed that there is a lot of open data available related to dogs, On and off leash areas, what time they need to be on a leash in certain places, fenced parks, Dog access on reverses, and local council registrations “
                            There are over 90 thousand dogs registered in the Greater Adelaide Region. Most of us consider our furry friends as members of our family.  We wanted to make it easier for people to access the information about where and what they can do with their dogs. “
                            “Over the govhack weekend we developed a prototype website to show how this data could be collaborated and made more accessible to the public.
                            The website uses GPS locations of dog friendly parks near the user.
                            “The user can then select a location and access a wealth of information about the area.
                            User can view feedback, providing extra information for the public and local councils about the quality and condition of the park.”
                            “Jane is just one member of a huge community, that wants to take care of their pets and help other pet lovers. Our platform enables pet lovers to connect and strengthen this community. ”
                        </p>
                    </Col>
                    <col sm="1"/>
                </Row>

                <Row sm="1">
                </Row>
                <Row>
                    <Row sm="6">
                        <img src={ logo } alt="Logo" responsive height="100" width="150"/>
                    </Row>
                    <Row sm="5">
                        <p >
                            “Just like Jane, the HackerDogs team noticed that there is a lot of open data available related to dogs, On and off leash areas, what time they need to be on a leash in certain places, fenced parks, Dog access on reverses, and local council registrations “
                            There are over 90 thousand dogs registered in the Greater Adelaide Region. Most of us consider our furry friends as members of our family.  We wanted to make it easier for people to access the information about where and what they can do with their dogs. “
                            “Over the govhack weekend we developed a prototype website to show how this data could be collaborated and made more accessible to the public.
                            The website uses GPS locations of dog friendly parks near the user.
                            “The user can then select a location and access a wealth of information about the area.
                            User can view feedback, providing extra information for the public and local councils about the quality and condition of the park.”
                            “Jane is just one member of a huge community, that wants to take care of their pets and help other pet lovers. Our platform enables pet lovers to connect and strengthen this community. ”
                        </p>
                    </Row>
                    <col sm="1"/>

                </Row>

            </div>

        )
    }
}