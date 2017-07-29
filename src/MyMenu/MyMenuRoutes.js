import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import SignInPage from "../SignInPage/SignInPage";
import PuppyProfile from "../ProfileCreator/PuppyProfile";
import MapsView from "../DogParksMap/MapsView";
import DogParkDetail from "../DogParkDetail/DogParkDetail";
import ReviewDetailView from "../ReviewPark/ReviewDetailView";
import StatsDetailView from "../StatsPark/StatsDetailView";

class MyMenuRoutes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={SignInPage}/>
          <Route path='/profile' component={PuppyProfile}/>
          <Route path='/map/:lat/:lng' render={props => <MapsView {...props.match.params} />}  />
          <Route path='/map' component={MapsView}/>
          <Route path='/detail/:parkId' render={props => <DogParkDetail {...props.match.params} />}  />
          <Route path='/review/:parkId' render={props => <ReviewDetailView {...props.match.params} />}  />
          <Route path='/stats/:suburb' render={props => <StatsDetailView {...props.match.params} />}  />
        </Switch>
      </main>
    );
  }
}

export default MyMenuRoutes;
