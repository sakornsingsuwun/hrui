import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class Login extends Component {
  
  constructor() {
    super();
    this.state = { Username: null };
    this.state = { Password: null };
  }
  handleChange = event => {
    this.setState({ Username: event.target.value });
    this.setState({ Password: event.target.value });
  };
  handleSubmit = event => {
    //Make a network call somewhere
    event.preventDefault();
  };
  render() {
    return (
      <div align="center" >
      <form onSubmit={this.handleSubmit}>
        <TextField floatingLabelText="Username" onChange={this.change} />
        <br/>
        <TextField floatingLabelText="Password" onChange={this.change} />
        <br/>
        <RaisedButton label="login" type="submit" secondary={true} />
      </form>
      </div>
    );
  }
}
export default Login;
