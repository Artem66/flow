import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import NoMatch from './components/NoMatch';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>,
    document.getElementById('root')
);
