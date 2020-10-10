import React, { Component } from 'react'


class EditTruck extends Component {

    state = {
        foodtruck: {
            name: "",
            food_type: "",
            phone_number: "",
            city: "",
            state: ""
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
        const id = this.props.truck
        // console.log(id) 
        event.preventDefault()
        this.props.edit(this.state, id)
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

export default EditTruck