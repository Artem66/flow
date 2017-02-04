import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default (props) => (
    <MuiThemeProvider>
        <div>
            <Nav />
            <div>
              {props.children}
            </div>
            <Footer />
        </div>
    </MuiThemeProvider>
);