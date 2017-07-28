import React, {Component} from 'react';
import {ControlLabel, FormControl, FormGroup,
  Radio, Button} from 'react-bootstrap';

import background from './summer-park-bg.jpg';
import './PuppyProfile.css';

class FieldGroup extends Component {
  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...this.props} />
      </FormGroup>
    );
  }
}

class PuppyProfile extends Component {
  render() {
    return (
      <div>
        <div className="form-background">
          <div className="form-foreground">
            <img src={background} alt="not sure"/>
          </div>
        </div>
        <div className="form-content">
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Doggy Name"
              placeholder="Rupert"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="fetch@k9.com"
            />
            <FieldGroup
              id="formControlsPassword"
              label="Password"
              type="password"
            />
            <FieldGroup
              id="formProfilePic"
              type="file"
              label="Profile Picture"
            />

            <FormGroup>
              <Radio name="radioGroup" inline>
                Male
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                Female
              </Radio>
              {' '}
              <Radio name="radioGroup" inline>
                Undecided
              </Radio>
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>A bit about me</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default PuppyProfile;
