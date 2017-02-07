import React from 'react';
import { AppBar, RaisedButton } from 'material-ui';

export default () => (
    <AppBar
        title="Flow"
        iconElementRight={
            <div>
                <RaisedButton
                    label="Login"
                    href="../login"
                    primary
                />
                <RaisedButton
                    label="Sign Up"
                    href="../signup"
                    primary
                />
            </div>
        }
    />
);
