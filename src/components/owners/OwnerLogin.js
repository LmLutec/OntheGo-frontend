import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class OwnerLogin extends Component{
    
    state = {
        auth: {
            email: "",
            password: ""
            }
        }


    handleChange = event => {
        this.setState({
            auth: {
                ...this.state.auth,
            [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.login()
    }

    async login(){
        try {
            const data = { 
                method: "POST",
                headers: { 
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(this.state)
            }

        const response = await fetch("https://alwaysonthego.herokuapp.com/api/v1/login/", data)
        const json = await response.json()
        if(!json.message){
            localStorage.setItem("jwt_token", json.jwt)
            localStorage.setItem("owner", JSON.stringify(json.owner)) 
        
            this.props.login(json)
            this.props.history.push("/home")
        }
        else{
            this.props.getErrors(json.message)
            this.props.history.push("/errors")
        }
          } catch (error) {
            this.props.getErrors(error)
            this.props.history.push("/errors")
        }
    }


                
    goBack = () => {
        window.history.back()
    }

 

    render(){
        return(
            <div>
                
                <form onSubmit={event => {this.handleSubmit(event)}} className="owner-login" >
                    <label>Email</label>
                    <input onChange={event => {this.handleChange(event)}} type="text" id="email" value={this.state.auth.email} required/><br/>
                    <label>Password</label>
                    <input onChange={event => {this.handleChange(event)}} type="password" id="password" value={this.state.auth.password} required/><br/>
                    <input type="submit" value="submit"/>
                </form>
                <br/>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }
}



export default withRouter(OwnerLogin)

