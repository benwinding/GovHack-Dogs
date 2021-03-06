import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bubble as Menu } from 'react-burger-menu'
import './MyMenu.css';
import 'font-awesome/css/font-awesome.css';

class MyMenuItem extends Component {
  render() {
    return (
      <div>
        <a
          onClick={ this.props.onItemClick }
          id={this.props.menuId}
          href={this.props.menuHref} >
          <i
            className={"fa fa-fw menu-item " + this.props.fa}
          />
          <span>
            {this.props.menuName}
          </span>
        </a>
      </div>
    )
  }
}

class MyMenu extends Component {
  onItemClick = (event) => {
    this.setState({
      isOpen:false
    })
  };

  render () {
    return (
      <Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"} isOpen={false}>
        <MyMenuItem fa="fa-home" menuHref="#/" menuName="Home" onItemClick={this.onItemClick} />
        {/*<MyMenuItem fa="fa-user-circle-o" menuHref="#/profile" menuName="Profile" onItemClick={this.onItemClick}/>*/}
        <MyMenuItem fa="fa-map" menuHref="#/map" menuName="Map" onItemClick={this.onItemClick}/>
        <MyMenuItem fa="fa fa-user" menuHref="#/about" menuName="About Us" onItemClick={this.onItemClick}/>
        {/*<MyMenuItem fa="fa-heart" menuHref="#/swiper" menuName="Swipe" onItemClick={this.onItemClick}/>*/}
        {/*<MyMenuItem fa="fa-id-card-o" menuHref="#/detail" menuName="Detail" onItemClick={this.onItemClick}/>*/}
        {/*<MyMenuItem fa="fa-star" menuHref="#/review" menuName="Detail" onItemClick={this.onItemClick}/>*/}
      </Menu>
    );
  }
}

MyMenu.propTypes = {
  isOpen: PropTypes.bool
};
MyMenu.defaultProps = {
  isOpen: false
};

export default MyMenu;