import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        const {values: {firstName, lastName, userName, password, email, occupation, city, bio}} = this.props;
        axios.post(`http://localhost:8080/register`, { firstName: firstName, lastName : lastName, userName: userName, password: password, email: email, occupation: occupation, city: city, bio: bio })
            .then(res => {
                console.log(res.data);
            });
        this.props.nextStep();
    };

    back = e=>{
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {firstName, lastName, userName, password, email, occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="User Name"
                            secondaryText={userName}
                        />
                        <ListItem
                            primaryText="Password"
                            secondaryText={password}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="E-mail"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default Confirm