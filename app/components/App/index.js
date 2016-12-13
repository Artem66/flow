import React from 'react';
import Nav from '../Nav';
import LoginForm from '../LoginForm';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => {
  injectTapEventPlugin();
  return (
    <MuiThemeProvider>
      <div>
          <Nav />
          <LoginForm />
      </div>
    </MuiThemeProvider>
  )}

export default App;