import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'



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

    handleSubmit(event) {
        event.preventDefault()
        this.props.login(this.state.owner)
        
             if (localStorage.getItem("jwt_token")){
                this.props.history.push("/home")
                return this.props.profile()
         }
    }
    
                

    // getProfile(){
    //     fetch("http://localhost:3000/api/v1/profile", {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer: ${localStorage.getItem('jwt_token')}`
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(json =>{
    //         // console.log(json)
    //         this.Profile(json)
    //     })
    // }

    // Profile(json){

    //     if(json){
    //         console.log('true')
            
    //     }
    // }

 

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
