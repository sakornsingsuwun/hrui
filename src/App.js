import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route,Redirect } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Headerbar from "./components/Headerbar";
import Wellcome from "./views/Wellcome";
import Personal from "./views/Personal";
import Contact from "./views/Contact";
import Login from "./Login";

const Main = () => (
  <Switch>
  <Route exact path="/Wellcome" render={(props) => (
    Wellcome()? (
    <Wellcome {...props} />
  ) : (
    <Redirect to="/Wellcome"/>
  )
)}/>
    <Route path="/Personal" component={Personal} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Headerbar />
          <Main />
         
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
