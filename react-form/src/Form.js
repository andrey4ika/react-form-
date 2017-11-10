import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "", 
    };

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "", 
        });
    };

    render() {
        return (
            <form>
                 <TextField
                        name="firstName"
                        hintText="first name"
                        floatingLabelText="First name"
                        value={this.state.firstName} 
                        onChange={e => this.change(e)} 
                        floatingLabelFixed
                        />
            <br />
                <TextField
                        name="lastName"
                        hintText="last name"
                        floatingLabelText="Last name"
                        value={this.state.lastName} 
                        onChange={e => this.change(e)} 
                        floatingLabelFixed
                        />  
            <br />
                 <TextField
                        name="userName"
                        hintText="user name"
                        floatingLabelText="username"
                        value={this.state.userName} 
                        onChange={e => this.change(e)} 
                        floatingLabelFixed
                        />
            <br />
                <TextField
                        name="email"
                        hintText="email"
                        floatingLabelText="email"
                        value={this.state.email} 
                        onChange={e => this.change(e)} 
                        floatingLabelFixed
                        />
            <br />            
                <TextField
                        name="password"
                        hintText="password"
                        floatingLabelText="password"
                        value={this.state.password} 
                        onChange={e => this.change(e)}
                        type="password" 
                        floatingLabelFixed
                        />
            <br />

                <RaisedButton label="Submit"onClick={e => this.onSubmit(e)} primary />
            </form>
        );
    }
}