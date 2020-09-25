import React, { Component } from 'react'
import Home from './Home'
import {withRouter} from 'react-router-dom'



class OwnerLogin extends Component{
  
    
    state = {
        owner: {
            email: "",
            password: ""
            },
        loggedIn: false
        }
    


    handleChange = event => {
        this.setState({
            owner: {
                ...this.state.owner,
            [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        // debugger
        event.preventDefault()
    
            const data = { 
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(this.state.owner)
                }
        
                fetch("http://localhost:3000/api/v1/login/", data)
                    .then(response => {
                        return response.json()
                }).then(json => {
                           localStorage.setItem("jwt_token", json.jwt)
                           localStorage.setItem("owner", JSON.stringify(json.owner)) 
                    }) 

                    if (localStorage.getItem("jwt_token")){
                        {this.props.history.push("/home")}
                 }
    }
                        //    this.setState({
                        //     owner: { ...this.state.owner},
                        //     loggedIn: true 
                        //   })
            
    
                

    getProfile(){
        fetch("http://localhost:3000/api/v1/profile", {
            method: "GET",
            headers: {
                Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
            }
        })
        .then(response => response.json())
        .then(json =>{
            // console.log(json)
            this.Profile(json)
        })
    }

    Profile(json){

        if(json){
            console.log('true')
            
        }
    }

 

    render(){
        return(
            <div>
                <form onSubmit={event => {this.handleSubmit(event)}} >
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



export default withRouter(OwnerLogin)


// create an onSubmit for loginfetch
