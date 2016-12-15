import React from 'react';
import Nav from '../Nav';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => {
    injectTapEventPlugin();
    return (
        <MuiThemeProvider>
            <div>
                <Nav />
                <LoginForm />
                <Footer />
            </div>
        </MuiThemeProvider>
  );
};
export default App;
