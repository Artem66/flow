import React from 'react';
import { Tabs, Tab } from 'material-ui';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';

export default () => (
    <Tabs>
        <Tab label="Login">
            <LoginForm />
        </Tab>
        <Tab label="Sign up" >
            <SignUpForm />
        </Tab>
    </ Tabs>
);
