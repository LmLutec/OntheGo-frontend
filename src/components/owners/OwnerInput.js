import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class OwnerInput extends Component {

    state = {
        owner: {
            first_name: "",
            last_name: "",
            email: "",
            password: ""
        }
    }


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
        this.props.addOwner(this.state.owner)
        this.props.history.push("/setup")
    }

    goBack = () => {
        window.history.back()
    }

    render(){
        return(
            <div>
               <h3>Hey Truck Owners! Create a New Account below:</h3>
                <form onSubmit={event => {this.handleSubmit(event)}}> 
                    <label>First name</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id= "first_name" value={this.state.owner.first_name} required/><br/>
                    <label>Last name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="last_name" value={this.state.owner.last_name} required/><br/>
                    <label>Email</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="email" value={this.state.owner.email} required/><br/>
                    <label>Password</label>
                    <input onChange={ event => {this.handleChange(event)}} type="password" id="password" value={this.state.owner.password} required/><br/>
                    <input type="submit" name="submit"/>
                </form>
                <br/>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(OwnerInput)

