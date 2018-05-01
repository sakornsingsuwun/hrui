import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Personal" component={Personal} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);
  export default Main ;