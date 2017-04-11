import React from 'react';
import { TextField, List, ListItem, RaisedButton, TimePicker, DatePicker, SelectField, MenuItem } from 'material-ui';
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
            <SelectField
                floatingLabelText="Remind me"
            >
                <MenuItem value={1} primaryText="before 15 minutes" />
                <MenuItem value={2} primaryText="before 30 minutes" />
                <MenuItem value={3} primaryText="before 1 hour" />
                <MenuItem value={4} primaryText="before 2 hours" />
                <MenuItem value={5} primaryText="before 1 day" />
            </SelectField>
            <br />
            <RaisedButton
                label="Add"
                primary
            />
        </div>
    </div>
);
