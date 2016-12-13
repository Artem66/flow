import React, { Component } from 'react';
import { TextField, FlatButton, Checkbox } from 'material-ui';

class LoginForm extends Component {
  render() {
    return (
        <div>
          <TextField
            hintText="Email Field"
            floatingLabelText="Email"
            type="email"
          />
          <br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          />
          <br />
          <Checkbox
            label="Remember me"
          />
          <br />
          <FlatButton label="Primary" primary={true} />
        </div>
    );
  }
}

export default LoginForm;