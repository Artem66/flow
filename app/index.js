import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Login from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import TaskForm from './components/TaskForm';
import NoMatch from './components/NoMatch';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import styles from './styles/index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="login" component={Login} />
                <Route path="signup" component={SignUpForm} />
                <Route path="taskform" component={TaskForm} />
                <Route path="*" component={NoMatch} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
