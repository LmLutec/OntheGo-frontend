import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class EditTruck extends Component {

    state = {
        foodtruck: {
            name: `${this.props.truck.name}`,
            food_type: `${this.props.truck.food_type}`,
            phone_number: `${this.props.truck.phone_number}`,
            city: `${this.props.truck.city}`,
            state: `${this.props.truck.state}`
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
        const id = this.props.truck.id
        this.props.edit(this.state, id)
        this.props.history.push("/home")
    }

    render(){
        return(
            <div>
                <h3>Edit one or more fields</h3>
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <label>Name</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="name" value={this.state.foodtruck.name} /><br/>
                    <label>State</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="state" value={this.state.foodtruck.state}/><br/>
                    <label>City</label>
                    <input onChange={ event => {this.handleChange(event)}} type="text" id="city" value={this.state.foodtruck.city}/><br/>
                    <label>Food type</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="food_type" value={this.state.foodtruck.food_type}/><br/>
                    <label>Phone number</label>
                    <input onChange= { event => {this.handleChange(event)}} type="text" id="phone_number" value={this.state.foodtruck.phone_number}/><br/>
                    <input type="submit" value="Edit Truck"/>
                </form>
            </div>
        )
    }
}

export default withRouter(EditTruck)