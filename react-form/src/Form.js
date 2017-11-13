import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
    state = {
        firstName: "",
        firstNameError:"",
        lastName: "",
        lastNameError:"",
        username: "",
        userNameError:"",
        email: "",
        emailError:"",
        password: "", 
        passwordError:"",
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    validate = () => {
        let isError = false;
        const errors = {
            firstNameError:"",
            lastNameError:"",
            userNameError:"",
            emailError:"",
            passwordError:"",
        };

        if (this.state.username.length < 5) {
            isError = true;
            errors.userNameError = " Username needs to be atleast 5 characters long";
        } 
        if (this.state.email.indexOf("@") === -1) {
            isError = true;
            errors.emailError = "Requires valid email";
        } 

         this.setState({
             ...this.state,
             ...errors
         });
         
        return isError;
    };

    onSubmit = e => {
        e.preventDefault();
        const err = this.validate();
        if (!err) {
            this.props.onSubmit(this.state);
            this.setState({
                firstName: "",
                firstNameError:"",
                lastName: "",
                lastNameError:"",
                username: "",
                userNameError:"",
                email: "",
                emailError:"",
                password: "", 
                passwordError:"",
                });
         }
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
                        errorText={this.state.firstNameError} 
                        floatingLabelFixed
                        />
            <br />
                <TextField
                        name="lastName"
                        hintText="last name"
                        floatingLabelText="Last name"
                        value={this.state.lastName} 
                        onChange={e => this.change(e)} 
                        errorText={this.state.lastNameError} 
                        floatingLabelFixed
                        />  
            <br />
                 <TextField
                        name="username"
                        hintText="Username"
                        floatingLabelText="Username"
                        value={this.state.username} 
                        onChange={e => this.change(e)}
                        errorText={this.state.userNameError}  
                        floatingLabelFixed
                        />
            <br />
                <TextField
                        name="email"
                        hintText="email"
                        floatingLabelText="email"
                        value={this.state.email} 
                        onChange={e => this.change(e)}
                        errorText={this.state.emailError}  
                        floatingLabelFixed
                        />
            <br />            
                <TextField
                        name="password"
                        hintText="password"
                        floatingLabelText="password"
                        value={this.state.password} 
                        onChange={e => this.change(e)}
                        errorText={this.state.passwordError} 
                        type="password" 
                        floatingLabelFixed
                        />
            <br />

                <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
            </form>
        );
    }
}