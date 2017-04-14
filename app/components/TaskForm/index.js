import React, { Component } from 'react';
import { TextField, List, ListItem, RaisedButton, TimePicker, DatePicker, SelectField, MenuItem } from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionToday from 'material-ui/svg-icons/action/today';
import ActionViewWeek from 'material-ui/svg-icons/action/view-week';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../../actions';
import moment from 'moment';

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

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: null,
            dueTime: null,
            dueValue: null
        };
    }

    handleChangeDate(event, date) {
        this.setState({
            dueDate: date
        });
    }

    handleChangeTime(event, time) {
        this.setState({
            dueTime: time
        });
    }

    handleChangeValue(event, index, value) {
        this.setState({
            dueValue: value
        });
    }

    addReminder() {
        console.log('this.state.dueDate', this.state.dueDate);
        this.props.addReminder(this.state.text, this.state.dueDate, this.state.dueTime, this.state.dueValue);
    }

    deleteReminder(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        return (
            <ul>
            {
                reminders.map(reminder => {
                    return (
                        <li key={reminder.id}>
                            <div>{reminder.text}</div>
                            <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                            <div
                                onClick={() => this.deleteReminder(reminder.id)}
                            >&#x2715;</div>
                        </li>
                    );
                })
            }
            </ul>
        );
    }

    render() {
        return (
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
                        onChange={event => this.setState({ text: event.target.value })}
                    />
                    <DatePicker
                        hintText="it'll be..."
                        mode="landscape"
                        value={this.state.dueDate}
                        onChange={(event, date) => this.handleChangeDate(event, date)}
                    />
                    <TimePicker
                        hintText="at..."
                        value={this.state.dueTime}
                        onChange={(event, time) => this.handleChangeTime(event, time)}
                    />
                    <SelectField
                        floatingLabelText="Remind me"
                        value={this.state.dueValue}
                        onChange={(event, index, value) => this.handleChangeValue(event, index, value)}
                    >
                        <MenuItem value={1} primaryText="before 15 minutes" />
                        <MenuItem value={2} primaryText="before 30 minutes" />
                        <MenuItem value={3} primaryText="before 1 hour" />
                        <MenuItem value={4} primaryText="before 2 hours" />
                        <MenuItem value={5} primaryText="before 1 day" />
                    </SelectField>
                    <br />
                    <RaisedButton
                        label="Add task"
                        primary
                        onClick={() => this.addReminder()}
                    />
                    {this.renderReminders()}
                    <RaisedButton
                        label="Remove all"
                        secondary
                        onClick={() => this.props.clearReminders()}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    };
}

export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(TaskForm);
