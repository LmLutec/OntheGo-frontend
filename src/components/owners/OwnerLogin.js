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

    render(){
        return(
            <div>
                <form>
                    <label>Email</label>
                    <input onChange={event => {this.handleChange(event)}} type="text" id="email" value={this.state.owner.email}/><br/>
                    <label>Password</label>
                    <input onChange={event => {this.handleChange(event)}} type="password" id="password" value={this.state.owner.password}/>
                </form>
            </div>
        )
    }
}

export default OwnerLogin


