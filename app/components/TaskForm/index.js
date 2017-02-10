import React from 'react';
import { TextField, List, ListItem, RaisedButton, TimePicker, DatePicker } from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionToday from 'material-ui/svg-icons/action/today';
import ActionViewWeek from 'material-ui/svg-icons/action/view-week';


const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    leftMenu: {
        flexGrow: 1
    },
    taskForm: {
        flexGrow: 11
    }
};

export default () => (
    <div style={styles.container}>
        <div style={styles.leftMenu}>
            <List>
                <ListItem primaryText="Tasks" leftIcon={<ContentInbox />} />
                <ListItem primaryText="Today" leftIcon={<ActionToday />} />
                <ListItem primaryText="Week" leftIcon={<ActionViewWeek />} />
            </List>
        </div>
        <div style={styles.taskForm}>
            <TextField
                hintText="My task"
                fullWidth
            />
            <DatePicker
                hintText="it'll be..."
                mode="landscape"
            />
            <TimePicker
                hintText="at..."
            />
            <RaisedButton
                label="Add"
                primary
            />
        </div>
    </div>
);
