import React, { Component } from 'react';
import { TextField, RaisedButton, Checkbox, Divider, Paper } from 'material-ui';

class LoginForm extends Component {
    render() {
        return (
            <Paper zDepth={2}>
                <TextField
                    hintText="Email address"
                    underlineShow={false}
                />
                <Divider />
                <TextField
                    hintText="Password"
                    underlineShow={false}
                />
                <Divider />
                <Checkbox
                    label="Remember me"
                />
                <RaisedButton
                    label="Login"
                    primary
                />
            </Paper>
    );
    }
}
export default LoginForm;
