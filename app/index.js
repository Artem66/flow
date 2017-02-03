import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import LoginForm from './components/LoginForm';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory } from 'react-router';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/loginform" component={LoginForm} />
    </Router>,
    document.getElementById('root')
);
