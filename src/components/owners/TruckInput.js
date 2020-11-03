import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class TruckInput extends Component {

    state = {
        foodtruck: {
            name: '',
            food_type: '',
            street: '',
            city: '',
            state: '',
            zip_code: '',
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
        console.log(localStorage.getItem("jwt_token"))
    }

    render(){
        return(
            <div>
                <h4>Food Truck Information</h4>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.foodtruck.name} required/><br/>
                    <label>Street</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="street" value={this.state.foodtruck.street} required/><br/>
                    <label>State</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.foodtruck.state} required/><br/>
                    <label>City</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.foodtruck.city} required/><br/>
                    <label>Zip code</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="zip_code" value={this.state.foodtruck.zip_code} required/><br/>
                    <label>Food type</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.foodtruck.food_type} required/><br/>
                    <label>Phone number</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.foodtruck.phone_number} required/><br/>
                    <input type="submit" value="Submit Truck"/>
                </form>

            </div>
        )
    }
}

export default withRouter(TruckInput)