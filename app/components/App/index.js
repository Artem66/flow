import React from 'react';
import Nav from '../Nav';
import LoginForm from '../LoginForm';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
    <MuiThemeProvider>
        <div>
            <Nav />
            <LoginForm />
            <Footer />
        </div>
    </MuiThemeProvider>
);
