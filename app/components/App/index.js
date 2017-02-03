import React from 'react';
import Nav from '../Nav';
import Menu from '../Menu';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
    <MuiThemeProvider>
        <div>
            <Nav />
            <Menu />
            <Footer />
        </div>
    </MuiThemeProvider>
);
