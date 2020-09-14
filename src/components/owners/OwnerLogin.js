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

    handleSubmit(event) {
        event.preventDefault()
        // {this.props.login(this.state.owner)}
            const data = { 
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(this.state.owner)
                }
        
                fetch("http://localhost:3000/api/v1/login/", data)
                    .then(response => {
                        return response.json()
                }).then(json => {
                    console.log(json)
                        // let ownerInfo = {}
                        // ownerInfo.owner = json.owner
                        // ownerInfo.token = json.jwt
                        // console.log(json.ownerInfo)
                        // ownerInfo.push(`${json.owner}`, `${json.jwt}`)
                        // console.log(ownerInfo)
                           localStorage.setItem("jwt_token", json.jwt)
                        //    localStorage.setItem("owner", json.owner.id)
                        //    console.log(localStorage.getItem('jwt_token', json.jwt))
                    })
                this.getProfile()
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
                <form onSubmit={event => {this.handleSubmit(event)}}>
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
