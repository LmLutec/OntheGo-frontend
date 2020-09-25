import React, { Component } from 'react'


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
        {this.props.addTruck(this.state.foodtruck)}
    }

    render(){
        return(
            <div>
                <h4>Food Truck Information</h4>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.name} /><br/>
                    <label>State</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.state} /><br/>
                    <label>City</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.city} /><br/>
                    <label>Food type</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.food_type} /><br/>
                    <label>Phone number</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.phone_number} /><br/>
                    <input type="submit" value="Submit Truck"/>
                </form>

            </div>
        )
    }
}

export default TruckInput