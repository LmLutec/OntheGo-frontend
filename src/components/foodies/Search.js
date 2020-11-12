import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'



class Search extends Component {
    state = {
        city: "",
        state: ""
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.search(this.state)
        this.props.history.push("/results")
    }

    goBack = () => {
        window.history.back()
    }

    render(){
        return(
            <div className="search">
                <h3>Find Foodtrucks by location</h3>
                <form onSubmit={(event)=> {this.handleSubmit(event)}}>
                    <label>City</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="city" value={this.state.city} required/><br/>
                    <label>State</label>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="state" value={this.state.state} required/><br/>
                    <input type="submit" value="Search for Trucks"/>
                </form>
                <br/>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }



}


export default withRouter(Search)