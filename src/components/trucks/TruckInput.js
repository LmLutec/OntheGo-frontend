import React, { Component } from 'react'


class TruckInput extends Component {

    state = {
        foodtruck: {
            name: '',
            food_type: '',
            phone_number: ''
        }
    }

    render(){
        return(
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" id="name" value={this.state.name} /><br/>
                    <label>Food type</label>
                    <input type="text" id="food_type" value={this.state.food_type} /><br/>
                    <label>Phone number</label>
                    <input type="text" id="phone_number" value={this.state.phone_number} /><br/>
                    <input type="submit" value="Submit Truck"/>
                </form>

            </div>
        )
    }
}

export default TruckInput