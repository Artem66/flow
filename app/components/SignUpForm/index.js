import React from 'react';
import { TextField, RaisedButton, Checkbox, Paper } from 'material-ui';

export default () => (
    <Paper zDepth={2}>
        <TextField
            hintText="Name"
            type="name"
        />
        <br />
        <TextField
            hintText="Email address"
            type="mail"
        />
        <br />
        <TextField
            hintText="Password"
            type="password"
        />
        <Checkbox
            label="Remember me"
        />
        <RaisedButton
            label="Sign Up"
            primary
        />
    </Paper>
);
