import React, { Component } from 'react'


class OwnerLogin extends Component{

    state = {
        owner: {
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

    loginFetch(event) {
        event.preventDefault()
        const formData = { owner: {
            email: this.state.owner.email,
            password: this.state.owner.password
        }}

        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem("jwt_token", json.jwt)
            this.getProfile()
        })
    }

    getProfile(){
        fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }


    render(){
        return(
            <div>
                <form onSubmit={event => {this.loginFetch(event)}}>
                    <label>Email</label>
                    <input onChange={event => {this.handleChange(event)}} type="text" id="email" value={this.state.owner.email}/><br/>
                    <label>Password</label>
                    <input onChange={event => {this.handleChange(event)}} type="password" id="password" value={this.state.owner.password}/><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}

export default OwnerLogin


// create an onSubmit for loginfetch
