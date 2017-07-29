import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import SignInPage from "../SignInPage/SignInPage";
import PuppyProfile from "../ProfileCreator/PuppyProfile";
import MapsView from "../DogParksMap/MapsView";
import SwiperView from "../Swiper/SwiperView";
import DogParkDetail from "../DogParkDetail/DogParkDetail";

class MyMenuRoutes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={SignInPage}/>
          <Route path='/profile' component={PuppyProfile}/>
          <Route path='/map' component={MapsView}/>
          <Route path='/swiper' component={SwiperView}/>
          <Route path='/detail' component={DogParkDetail}/>
        </Switch>
      </main>
    );
  }
}

export default MyMenuRoutes;
