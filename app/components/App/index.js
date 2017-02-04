import { React, PropTypes } from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = (props) => (
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

App.propTypes = {
    children: PropTypes.node.isRequired
};

export default App;
