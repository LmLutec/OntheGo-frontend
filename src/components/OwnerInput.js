import React, { Component } from 'react'


class OwnerInput extends Component {

    state = {
        firstName: "test",
        lastName: "name",
        email: "",
        password: ""
    }

    onFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    onLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    onEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }


    render(){
        return(
            <div>
                Owner input is connected to the owner container
                <form>
                    <label>First name</label>
                    <input onChange= { event => {this.onFirstNameChange(event)}} type="text" name="firstName" value={this.state.firstName}/><br/>
                    <label>Last name</label>
                    <input onChange={ event => {this.onLastNameChange(event)}} type="text" name="lastName" value={this.state.lastName} /><br/>
                    <label>Email</label>
                    <input onChange={ event => {this.onEmailChange(event)}} type="text" name="email" value={this.state.email} /><br/>
                    <label>Password</label>
                    <input onChange={ event => {this.onPasswordChange(event)}} type="password" name="password" value={this.state.password}/><br/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

export default OwnerInput

