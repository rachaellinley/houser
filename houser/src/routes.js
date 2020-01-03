import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import Wizard from './Components/Wizard'


export default (
  <Switch>
    <Route exact path="/Dashboard" component={Dashboard} />
    <Route path ="/Wizard" component={Wizard}/>


  </Switch>
);
