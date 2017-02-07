import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import NoMatch from './components/NoMatch';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="login" component={Login} />
            <Route path="signup" component={SignUpForm} />
            <Route path="*" component={NoMatch} />
        </Route>
    </Router>,
    document.getElementById('root')
);
