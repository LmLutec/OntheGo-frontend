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
            <div>
                Find Foodtrucks by location
                <form onSubmit={(event)=> {this.handleSubmit(event)}}>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="city" value={this.state.city} placeholder="city"/><br/>
                    <input onChange={(event) => {this.handleChange(event)}} type="text" id="state" value={this.state.state} placeholder="state"/><br/>
                    <input type="submit" value="Search for Trucks"/>
                </form>
                <br/>
                <button onClick={this.goBack}>Back</button>
            </div>
        )
    }



}


export default withRouter(Search)