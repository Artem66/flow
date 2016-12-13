import React from 'react';
import ReactDOM from 'react-dom';
import {TextField, RaisedButton, Checkbox, AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class LoginForm extends React.Component {
    render() {
      return (
        <div>
        <MuiThemeProvider>
          <div>
          <TextField
          hintText="Email Field"
          floatingLabelText="Email"
          type="email"
          /><br />
          <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
          /><br />
          <Checkbox
            label="Remember me"
            style={styles.checkbox}
            /><br />
          <RaisedButton label="login" primary={true} style={style} />
          </div>
        </MuiThemeProvider>
        </div>
      );
    }
  }

ReactDOM.render(
  <LoginForm />,
  document.getElementById('root')
);

class Menu extends React.Component {
  render () {
    return (

        <MuiThemeProvider>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
        </MuiThemeProvider >
      );
  }
}

ReactDOM.render (
  <Menu />,
  document.getElementById ('menu')
);
