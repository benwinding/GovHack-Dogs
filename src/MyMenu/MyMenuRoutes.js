import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import SignInPage from "../SignInPage/SignInPage";
import PuppyProfile from "../ProfileCreator/PuppyProfile";
import MapsView from "../DogParks/MapsView";
import SwiperView from "../Swiper/SwiperView";

class MyMenuRoutes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={SignInPage}/>
          <Route path='/profile' component={PuppyProfile}/>
          <Route path='/map' component={MapsView}/>
          <Route path='/swiper' component={SwiperView}/>
        </Switch>
      </main>
    );
  }
}

export default MyMenuRoutes;
