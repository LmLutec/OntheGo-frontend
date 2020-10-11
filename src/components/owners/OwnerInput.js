import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


// on new owner submit, redirect to truckinput
class OwnerInput extends Component {

    state = {
        owner: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }
    }

    // setup a way for user to change their password

    handleChange = event => {
        this.setState({
            owner: {
                ...this.state.owner,
                [event.target.id]: event.target.value
            }
        })
    }


    handleSubmit = event => {
        event.preventDefault()
        {this.props.addOwner(this.state.owner)}
        {this.props.history.push("/setup")}
    }

    render(){
        return(
            <div>
               <h3>Hey Truck Owners! Create a New Account below:</h3>
                <form onSubmit={event => {this.handleSubmit(event)}}> 
                    <label>First name</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id= "first_name" value={this.state.owner.first_name}/><br/>
                    <label>Last name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="last_name" value={this.state.owner.last_name} /><br/>
                    <label>Email</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="email" value={this.state.owner.email} /><br/>
                    <label>Password</label>
                    <input onChange={ event => {this.handleChange(event)}} type="password" id="password" value={this.state.owner.password}/><br/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

export default withRouter(OwnerInput)

