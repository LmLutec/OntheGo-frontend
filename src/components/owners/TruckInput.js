import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class TruckInput extends Component {

    state = {
        foodtruck: {
            name: '',
            food_type: '',
            city: '',
            state: '',
            phone_number: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            foodtruck: {
                ...this.state.foodtruck,
                [event.target.id]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTruck(this.state.foodtruck)
        this.props.history.push("/schedule")
    }

    render(){
        return(
            <div>
                <h4>Food Truck Information</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.foodtruck.name} /><br/>
                    <label>State</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.foodtruck.state} /><br/>
                    <label>City</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.foodtruck.city} /><br/>
                    <label>Food type</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.foodtruck.food_type} /><br/>
                    <label>Phone number</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.foodtruck.phone_number} /><br/>
                    <input type="submit" value="Submit Truck"/>
                </form>

            </div>
        )
    }
}

export default withRouter(TruckInput)