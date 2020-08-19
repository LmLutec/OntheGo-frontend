import React, { Component } from 'react'

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
        
        // const formData = {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json'
        //      },
        //     body: JSON.stringify(this.state) 
        // }

        // fetch("http://localhost:3000/api/v1/owners/", formData)
        //     .then(response => console.log(response.json()))

        this.props.history.push("/")
    }

    render(){
        return(
            <div>
               <h3>Hey Truck Owners! Create a New Account below:</h3>
                <form onSubmit={event => {this.handleSubmit(event)}}>
                    <label>First name</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id= "first_name" value={this.state.owner.first_name}/><br/>
                    <label>Last name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="last_name" value={this.state.owner.lasame} /><br/>
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

export default OwnerInput

