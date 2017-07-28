import React, {Component} from 'react';
import Draggable from 'react-draggable';

import './SwiperView.css';

class Doggy extends Component {
  render() {
    return (
      <Draggable
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        id="container"
      >
        <div className="handle"
          style={{
            position:"absolute",
            left:"23vw",
            height:this.props.height,
            width:this.props.width,
            zIndex:this.props.z,
          }}
        >
          <div id="infoi" >
            <h2>{this.props.text}</h2>
            <div
              style={{
                width:"100%",
                height:"100%",
                "backgroundImage": "url("+this.props.img+")",
                "backgroundRepeat": "no-repeat"
              }}
            />
          </div>
        </div>
      </Draggable>
    )
  }
}

class SwiperView extends Component {
  render() {
    return (
      <div>
        <Doggy z={-3} text="Bob" img="./profiles/dogm3.jpg" height={"500px"} width={"400px"} />
      </div>
    );
  }
}

SwiperView.propTypes = {};
SwiperView.defaultProps = {};

export default SwiperView;
